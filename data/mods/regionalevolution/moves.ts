export const Moves: {[k: string]: ModdedMoveData} = {
	electricterrain: {
		inherit: true,
		effect: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				for(const pokemon of this.getAllActive()){
					if(pokemon.ability === "Hard Court") return true;
				}
				if (status.id === 'slp' && target.isGrounded() && !target.isSemiInvulnerable()) {
					if (effect.id === 'yawn' || (effect.effectType === 'Move' && !effect.secondaries)) {
						this.add('-activate', target, 'move: Electric Terrain');
					}
					return false;
				}
			},
			onTryAddVolatile(status, target) {
				for(const pokemon of this.getAllActive()){
					if(pokemon.ability === "Hard Court") return;
				}
				if (!target.isGrounded() || target.isSemiInvulnerable()) return;
				if (status.id === 'yawn') {
					this.add('-activate', target, 'move: Electric Terrain');
					return null;
				}
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				for(const pokemon of this.getAllActive()){
					if(pokemon.ability === "Hard Court") return;
				}
				if (move.type === 'Electric' && attacker.isGrounded() && !attacker.isSemiInvulnerable()) {
					this.debug('electric terrain boost');
					return this.chainModify([0x14CD, 0x1000]);
				}
			},
			onStart(battle, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Electric Terrain', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Electric Terrain');
				}
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onEnd() {
				this.add('-fieldend', 'move: Electric Terrain');
			},
		},
	},
	grassyterrain: {
		inherit: true,
		effect: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				const weakenedMoves = ['earthquake', 'bulldoze', 'magnitude'];
				for(const pokemon of this.getAllActive()){
					if(pokemon.ability === "Hard Court") return;
				}
				if (weakenedMoves.includes(move.id)) {
					this.debug('move weakened by grassy terrain');
					return this.chainModify(0.5);
				}
				if (move.type === 'Grass' && attacker.isGrounded()) {
					this.debug('grassy terrain boost');
					return this.chainModify([0x14CD, 0x1000]);
				}
			},
			onStart(battle, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Grassy Terrain', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Grassy Terrain');
				}
			},
			onResidualOrder: 5,
			onResidualSubOrder: 3,
			onResidual() {
				for(const pokemon of this.getAllActive()){
					if(pokemon.ability === "Hard Court") return;
				}
				this.eachEvent('Terrain');
			},
			onTerrain(pokemon) {
				if (pokemon.isGrounded() && !pokemon.isSemiInvulnerable()) {
					for(const pokemon of this.getAllActive()){
						if(pokemon.ability === "Hard Court") return;
					}
					this.debug('Pokemon is grounded, healing through Grassy Terrain.');
					this.heal(pokemon.baseMaxhp / 16, pokemon, pokemon);
				}
			},
			onEnd() {
				if (!this.effectData.duration) this.eachEvent('Terrain');
				this.add('-fieldend', 'move: Grassy Terrain');
			},
		},

	},
	mistyterrain: {
		inherit: true,
		effect: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				for(const pokemon of this.getAllActive()){
					if(pokemon.ability === "Hard Court") return;
				}
				if (!target.isGrounded() || target.isSemiInvulnerable()) return;
				if (effect && ((effect as Move).status || effect.id === 'yawn')) {
					this.add('-activate', target, 'move: Misty Terrain');
				}
				return false;
			},
			onTryAddVolatile(status, target, source, effect) {
				for(const pokemon of this.getAllActive()){
					if(pokemon.ability === "Hard Court") return;
				}
				if (!target.isGrounded() || target.isSemiInvulnerable()) return;
				if (status.id === 'confusion') {
					if (effect.effectType === 'Move' && !effect.secondaries) this.add('-activate', target, 'move: Misty Terrain');
					return null;
				}
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				for(const pokemon of this.getAllActive()){
					if(pokemon.ability === "Hard Court") return;
				}
				if (move.type === 'Dragon' && defender.isGrounded() && !defender.isSemiInvulnerable()) {
					this.debug('misty terrain weaken');
					return this.chainModify(0.5);
				}
			},
			onStart(battle, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Misty Terrain', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Misty Terrain');
				}
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onEnd(side) {
				this.add('-fieldend', 'Misty Terrain');
			},
		},
	},
	psychicterrain: {
		inherit: true,
		effect: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onTryHitPriority: 4,
			onTryHit(target, source, effect) {
				for(const pokemon of this.getAllActive()){
					if(pokemon.ability === "Hard Court") return;
				}
				if (effect && (effect.priority <= 0.1 || effect.target === 'self')) {
					return;
				}
				if (target.isSemiInvulnerable() || target.side === source.side) return;
				if (!target.isGrounded()) {
					const baseMove = this.dex.getMove(effect.id);
					if (baseMove.priority > 0) {
						this.hint("Psychic Terrain doesn't affect Pokémon immune to Ground.");
					}
					return;
				}
				this.add('-activate', target, 'move: Psychic Terrain');
				return null;
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				for(const pokemon of this.getAllActive()){
					if(pokemon.ability === "Hard Court") return;
				}
				if (move.type === 'Psychic' && attacker.isGrounded() && !attacker.isSemiInvulnerable()) {
					this.debug('psychic terrain boost');
					return this.chainModify([0x14CD, 0x1000]);
				}
			},
			onStart(battle, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Psychic Terrain', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Psychic Terrain');
				}
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onEnd() {
				this.add('-fieldend', 'move: Psychic Terrain');
			},
		},
	},

	// New Moves: 
	datadrain: {
		num: -1,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt.",
		isViable: true,
		name: "Data Drain",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Clever",
	},
	forgingpounds: {
		num: -2,
		accuracy: 90,
		basePower: 25,
		category: "Physical",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		name: "Forging Pounds",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Steel",
		zMovePower: 140,
		gmaxPower: 130,
		contestType: "Tough",
	},
	thunderclop: {
		num: -3,
		accuracy: 85,
		basePower: 110,
		category: "Physical",
		desc: "Has a 20% chance to raise user's Speed by 1.",
		shortDesc: "20% chance to raise user's Speed by 1.",
		isViable: true,
		name: "Thunderclop",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Electric",
		contestType: "Beautiful",
	},
	fieryboost: {
		num: -4,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Attack and Special Defense by 1 stage.",
		shortDesc: "Raises the user's Sp. Atk and Sp. Def by 1.",
		isViable: true,
		name: "Fiery Boost",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			atk: 1,
			spd: 1,
		},
		secondary: null,
		target: "self",
		type: "Fire",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Clever",
	},
	bullethell: {
		num: -5,
		accuracy: 100,
		basePower: 25,
		category: "Special",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		isViable: true,
		name: "Bullet Hell",
		pp: 30,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMovePower: 140,
		gmaxPower: 130,
		contestType: "Cool",
	},
	firebomb: {
		num: -6,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Fire Bomb",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfdestruct: "always",
		onBasePower(basePower, source) {
			if (this.field.effectiveWeather() === 'sunnyday') {
				this.debug('sunny day boost');
				return this.chainModify(1.5);
			}
		},
		secondary: null,
		target: "allAdjacent",
		type: "Fire",
	},
	icebergrush: {
		num: -7,
		accuracy: 90,
		basePower: 130,
		category: "Physical",
		desc: "If this attack is not successful, the user loses half of its maximum HP, rounded down, as crash damage. Pokemon with the Magic Guard Ability are unaffected by crash damage.",
		shortDesc: "User is hurt by 50% of its max HP if it misses.",
		isViable: true,
		name: "Iceberg Rush",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1},
		hasCrashDamage: true,
		onMoveFail(target, source, move) {
			this.damage(source.baseMaxhp / 2, source, source, this.dex.getEffect('Iceberg Rush'));
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Cool",
	},
	dazzlingdinger: {
		num: -8,
		accuracy: 90,
		basePower: 120,
		category: "Physical",
		desc: "Has a 10% chance to lower target's Defense.",
		shortDesc: "10% chance to lower target's Defense.",
		isViable: true,
		name: "Dazzling Dinger",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1, bullet: 1},
		secondary: {
			chance: 10,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Normal",
	},
	deafeningroar: {
		num: -9,
		accuracy: 100,
		basePower: 140,
		category: "Special",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent Pokemon.",
		isViable: true,
		name: "Deafening Roar",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		secondary: null,
		target: "allAdjacent",
		type: "Dragon",
		contestType: "Tough",
	},
	bitingchill: {
		num: -10,
		accuracy: 100,
		basePower: 85,
		basePowerCallback(pokemon, target, move) {
			if (target.newlySwitched || this.queue.willMove(target)) {
				this.debug('Biting Chill damage boost');
				return move.basePower * 2;
			}
			this.debug('Biting Chill NOT boosted');
			return move.basePower;
		},
		category: "Physical",
		desc: "Power doubles if the user moves before the target.",
		shortDesc: "Power doubles if user moves before the target.",
		isViable: true,
		name: "Biting Chill",
		pp: 10,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ice",
	},
	chompdown: {
		num: -11,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Has a 20% chance to lower the target's Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Defense by 1.",
		isViable: true,
		name: "Chomp Down",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Dragon",
		contestType: "Tough",
	},
	thundertail: {
		num: -12,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		desc: "Has a 10% chance to paralyse the target and a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio. 10% chance to paralyse.",
		name: "Thunder Tail",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Clever",
	},
	comettail: {
		num: -13,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		desc: "Has a 10% chance to freeze the target and a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio. 10% chance to freeze.",
		name: "Comet Tail",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "normal",
		type: "Ice",
		contestType: "Clever",
	},
	thunderclap: {
		num: -14,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Has a 100% chance to lower the target's Defense by 1 stage.",
		shortDesc: "100% chance to lower the target's Defense by 1.",
		isViable: true,
		name: "Thunderclap",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Electric",
		contestType: "Cute",
	},
	empulse: {
		num: -15,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "Has a 20% chance to confuse the target.",
		shortDesc: "20% chance to confuse the target.",
		name: "EM Pulse",
		pp: 20,
		priority: 0,
		flags: {protect: 1, pulse: 1, mirror: 1, distance: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'confusion',
		},
		target: "any",
		type: "Electric",
		contestType: "Beautiful",
	},
	titanbeam: {
		num: -16,
		accuracy: 85,
		basePower: 120,
		category: "Special",
		shortDesc: "No additional effect.",
		isViable: true,
		name: "Titan Beam",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
	},
	poisondart: {
		num: -17,
		accuracy: 95,
		basePower: 25,
		category: "Physical",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		name: "Poison Dart",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Poison",
		zMovePower: 140,
		gmaxPower: 130,
		contestType: "Cool",
	},
	sawtooth: {
		num: -18,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Has a 20% chance to lower the target's Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Defense by 1.",
		isViable: true,
		name: "Saw Tooth",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Tough",
	},
	steelspikes: {
		num: -19,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in. Fails if the effect is already active on the opposing side. Foes lose 1/32, 1/16, 1/8, 1/4, or 1/2 of their maximum HP, rounded down, based on their weakness to the Rock type; 0.25x, 0.5x, neutral, 2x, or 4x, respectively. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, or is hit by Defog.",
		shortDesc: "Hurts foes on switch-in. Factors Steel weakness.",
		isViable: true,
		name: "Steel Spikes",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1},
		sideCondition: 'steelspikes',
		effect: {
			// this is a side condition
			onStart(side) {
				this.add('-sidestart', side, 'move: Steel Spikes');
			},
			onSwitchIn(pokemon) {
				if (pokemon.hasItem('heavydutyboots')) return;
				const typeMod = this.dex.clampIntRange(pokemon.runEffectiveness(this.dex.getActiveMove('steelspikes')), -6, 6);
				this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Steel",
		zMoveBoost: {def: 1},
		contestType: "Cool",

	},
	fisheousbite: {
		num: -20,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		desc: "If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally.",
		shortDesc: "Nullifies Detect, Protect, and Quick/Wide Guard.",
		isViable: true,
		name: "Fisheous Bite",
		pp: 10,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		breaksProtect: true,
		// Breaking protection implemented in scripts.js
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Clever",
	},
	dastardlydeed: {
		num: -21,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "If another Pokemon uses certain non-damaging moves this turn, the user steals that move to use itself. If multiple Pokemon use one of those moves this turn, the applicable moves are all stolen by the first Pokemon in turn order that used this move this turn. This effect is ignored while the user is under the effect of Sky Drop.",
		shortDesc: "User steals certain support moves to use itself.",
		isNonstandard: "Past",
		name: "Dastardly Deed",
		pp: 10,
		priority: 4,
		flags: {authentic: 1},
		volatileStatus: 'snatch',
		effect: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'Dastardly Deed');
			},
			onAnyTryMove(source, target, move) {
				const snatchUser = this.effectData.source;
				if (snatchUser.isSkyDropped()) return;
				if (!move || move.isZ || move.isMax || !move.flags['snatch'] || move.sourceEffect === 'snatch') {
					return;
				}
				snatchUser.removeVolatile('snatch');
				this.add('-activate', snatchUser, 'move: Dastardly Deed', '[of] ' + source);
				this.useMove(move.id, snatchUser);
				return null;
			},
		},
		secondary: null,
		pressureTarget: "foeSide",
		target: "normal",
		type: "Dark",
		zMoveBoost: {spe: 2},
		contestType: "Clever",

	}
}