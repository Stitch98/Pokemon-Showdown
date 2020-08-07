export const BattleAbilities: {[k: string]: ModdedAbilityData} = {
	overgrow: {
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Grass-type attack.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Grass') {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Grass') {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		name: "Overgrow",
		rating: 2,
		num: 65,
	},
	blaze: {
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Fire-type attack.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
		name: "Blaze",
		rating: 2,
		num: 66,
	},
	torrent: {
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Water-type attack.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Torrent boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Torrent boost');
				return this.chainModify(1.5);
			}
		},
		name: "Torrent",
		rating: 2,
		num: 67,
	},
	swarm: {
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Bug-type attack.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Bug') {
				this.debug('Swarm boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Bug') {
				this.debug('Swarm boost');
				return this.chainModify(1.5);
			}
		},
		name: "Swarm",
		rating: 2,
		num: 68,
	},
	purepower: {
		shortDesc: "This Pokemon's Special Attack is doubled.",
		onModifySpAPriority: 5,
		onModifySpA(spa) {
			return this.chainModify(2);
		},
		name: "Pure Power",
		rating: 5,
		num: 74
	},
	forecast: {
		inherit: true,
		desc: "If this Pokemon is a Castform, its type changes to the current weather condition's type. If this Pokemon is holding Utility Umbrella and the weather condition is Sunny Day, Desolate Land, Rain Dance, or Primordial Sea, it will not change types.",
		shortDesc: "Castform's type changes to the current weather condition's type; if holding a Weather Rock, summons the corresponding weather.",
		onStart(pokemon){
			if (!pokemon.isActive || pokemon.baseSpecies.baseSpecies !== 'Castform' || pokemon.transformed) return;
			let forme = null, weather = null;
			switch(pokemon.item){
				case 'heatrock':
					if (pokemon.species.id !== 'castformsunny'){ 
						forme = 'Castform-Sunny';
						weather = 'sunnyday';
					} break;
				case 'damprock':
					if (pokemon.species.id !== 'castformrainy'){
						forme = 'Castform-Rainy';
						weather = 'raindance';
					} break;
				case 'icyrock':
					if (pokemon.species.id !== 'castformsnowy'){
						forme = 'Castform-Snowy';
						weather = 'hail';
					} break;
				case 'smoothrock':
					if (pokemon.species.id !== 'castformsnowy'){
						forme = 'Castform-Sandy';
						weather = 'sandstorm';
					} break;
				default:
					if (pokemon.species.id !== 'castform') forme = 'Castform';
					break;
			}
			if (pokemon.isActive && forme) {
				pokemon.formeChange(forme, this.effect, false, '[msg]');
				if(weather) this.field.setWeather(weather, pokemon);
			}
		},
		onUpdate(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Castform' || pokemon.transformed) return;
			let forme = null;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				if (pokemon.species.id !== 'castformsunny') forme = 'Castform-Sunny';
				break;
			case 'raindance':
			case 'primordialsea':
				if (pokemon.species.id !== 'castformrainy') forme = 'Castform-Rainy';
				break;
			case 'hail':
				if (pokemon.species.id !== 'castformsnowy') forme = 'Castform-Snowy';
				break;
			case 'sandstorm':
				if (pokemon.species.id !== 'castformsandy') forme = 'Castform-Sandy';
				break;
			default:
				if (pokemon.species.id !== 'castform') forme = 'Castform';
				break;
			}
			if (pokemon.isActive && forme) {
				pokemon.formeChange(forme, this.effect, false, '[msg]');
			}
		}
	},
	flashfire: {
		desc: "This Pokemon is immune to Fire-type moves and raises its Speed by 1 stage when hit by an Fire-type move.",
		shortDesc: "This Pokemon's Speed is raised 1 stage if hit by an Fire move; Fire immunity.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				if (!this.boost({spe: 1})) {
					this.add('-immune', target, '[from] ability: Flash Fire');
				}
				return null;
			}
		},
		name: "Flash Fire",
		rating: 3.5,
		num: 18,
	},
	healer: {
		desc: "This Pokemon recovers 1/16 of its maximum HP at the end of each turn; doesn't stack with Leftovers or Grassy Terrain.",
		shortDesc: "This Pokemon is healed 1/16 at the end of each turn.",
		name: "Healer",
		onResidualOrder: 5,
		onResidualSubOrder: 5,
		onResidual(pokemon) {
			if (this.field.isTerrain('grassyterrain') || pokemon.item == 'leftovers') return;
			this.heal(pokemon.baseMaxhp / 16);
		},
		onTerrain(pokemon) {
			if (!this.field.isTerrain('grassyterrain')) return;
			this.heal(pokemon.baseMaxhp / 16);
		},
		rating: 2.5,
		num: 131,
	},
	sandveil: {
		desc: "If Sandstorm is active and this Pokemon is not holding Utility Umbrella, this Pokemon cannot gain a major status condition and Rest will fail for it.",
		shortDesc: "If Sandstorm is active, this Pokemon cannot be statused and Rest will fail for it.",
		onSetStatus(status, target, source, effect) {
			if (['sandstorm'].includes(target.effectiveWeather())) {
				if ((effect as Move)?.status) {
					this.add('-immune', target, '[from] ability: Sand Veil');
				}
				return false;
			}
		},
		onTryAddVolatile(status, target) {
			if (status.id === 'yawn' && ['sandstorm'].includes(target.effectiveWeather())) {
				this.add('-immune', target, '[from] ability: Sand Veil');
				return null;
			}
		},		
		name: "Sand Veil",
		rating: 1.5,
		num: 8,
	},
	snowcloak: {
		desc: "If Hail is active and this Pokemon is not holding Utility Umbrella, this Pokemon cannot gain a major status condition and Rest will fail for it.",
		shortDesc: "If Hail is active, this Pokemon cannot be statused and Rest will fail for it.",
		onSetStatus(status, target, source, effect) {
			if (['hail'].includes(target.effectiveWeather())) {
				if ((effect as Move)?.status) {
					this.add('-immune', target, '[from] ability: Snow Cloak');
				}
				return false;
			}
		},
		onTryAddVolatile(status, target) {
			if (status.id === 'yawn' && ['hail'].includes(target.effectiveWeather())) {
				this.add('-immune', target, '[from] ability: Snow Cloak');
				return null;
			}
		},
		name: "Snow Cloak",
		rating: 1.5,
		num: 81,
	},
	amplifier: {
		desc: "This Pokemon's sound-based moves have their power multiplied by 1.5.",
		shortDesc: "This Pokemon's sound moves have 1.5x power.",
		onBasePowerPriority: 7,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['sound']) {
				this.debug('Amplifier boost');
				return this.chainModify(1.5);
			}
		},
		name: "Amplifier",
		rating: 3.5,
		num: -5,
	},
	hiddenforce: {
		desc: "This Pokemon's typing includes the type of its Hidden Power.",
		shortDesc: "This Pokemon has also its Hidden type",
		// Type changing is implemented in statuses.ts
		name: 'Hidden Force',
		rating: 4,
		num: -6,
	},
	windwaker: {
		desc: "On switch-in, this Pokemon summons Tailwind for 4 turns (6 if holding Quick Ball).",
		shortDesc: "Summons Tailwind for 4 turns (6 with Quick Ball).",
		duration: 4,
		durationCallback(target, source, effect) {
			if (source?.hasItem('quickball')) {
				return 6;
			}
			return 4;
		},
		onStart(side) {
			this.add('-sidestart', side, 'move: Tailwind');
		},
		onModifySpe(spe, pokemon) {
			return this.chainModify(2);
		},
		onResidualOrder: 21,
		onResidualSubOrder: 4,
		onEnd(side) {
			this.add('-sideend', side, 'move: Tailwind');
		},
		name: 'Wind Waker',
		rating: 4,
		num: -7,
	},
	accumulate: {
		shortDesc: "Gains 1 Stockpile upon being hit by a move.",
		onDamagingHit(damage, target, source, effect) {
			if (target.volatiles['stockpile'] && target.volatiles['stockpile'].layers >= 3) return;
			else target.addVolatile('stockpile');
		},
		name: "Accumulate",
		rating: 3,
		num: -8
	},
	holybell: {
		shortDesc: "Heals all its teammates from status on switch-in.",
		onStart(pokemon){
			this.add('-activate', pokemon, 'ablity: Holy Bell');
			const side = pokemon.side;
			let success = false;
			for (const ally of side.pokemon) {
				if (ally.hasAbility('soundproof')) continue;
				if (ally.cureStatus()) success = true;
			}
		},
		name: "Holy Bell",
		rating: 4.5,
		num: -9
	},
	steathtouch: {
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Dark-type attack.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				this.debug('Stealth Touch boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				this.debug('Stealth Touch boost');
				return this.chainModify(1.5);
			}
		},
		name: "Stealth Touch",
		rating: 3.5,
		num: -10,
	},
	rksilate: {
		desc: "This Pokemon's Normal-type moves become the type of the held Memory and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become of the type on Memory and have 1.2x power.",
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			if(pokemon.species.id !== 'silvallymega') return;
			let type: string | undefined = 'Normal';
			type = pokemon.getItem().onMemory;
			if (!type) type = 'Normal';
			const noModifyType = ['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = type;
				move.aerilateBoosted = true;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.aerilateBoosted) return this.chainModify([0x1333, 0x1000]);
		},
		name: "RKS-ilate",
		rating: 4.5,
		num: -11
	},
	concentrate: {
		shortDesc: "This Pokemon's Defense is raised by 1 stage after it is damaged by a move.",
		onDamagingHit(damage, target, source, effect) {
			this.boost({def: 1});
		},
		name: "Concentrate",
		rating: 3.5,
		num: -12
	}
}