export const BattleAbilities: {[k: string]: ModdedAbilityData} = {
	floorcleaner: {
		shortDesc: "On switch-in, the effects of Stealth Rock, Spikes and Toxic Spikes end for both sides.",
		onStart(pokemon) {
			let activated = false;
			if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
				this.add('-end', pokemon, 'Leech Seed', '[from] move: Floor Cleaner', '[of] ' + pokemon);
			}
			for (const sideCondition of [ 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge' ]) {
				if (pokemon.side.getSideCondition(sideCondition)) {
					if (!activated) {
						this.add('-activate', pokemon, 'ability: Floor Cleaner');
						activated = true;
					}
					pokemon.side.removeSideCondition(sideCondition);
				}
				if (pokemon.side.foe.getSideCondition(sideCondition)) {
					if (!activated) {
						this.add('-activate', pokemon, 'ability: Floor Cleaner');
						activated = true;
					}
					pokemon.side.foe.removeSideCondition(sideCondition);
				}
			}
		},
		name: "Floor Cleaner",
		rating: 3.5,
		num: -1,
	},
	malevolence: {
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Dark-type attack.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				this.debug('Malevolence boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				this.debug('Malevolence boost');
				return this.chainModify(1.5);
			}
		},
		name: "Malevolence",
		rating: 3.5,
		num: -2,
	},
	dragonscales: {
		shortDesc: "This Pokemon receives 1/2 damage from special attacks.",
		onSourceModifyDamage(damage, source, target, move) {
			if (move.category === 'Special') {
				return this.chainModify(0.5);
			}
		},
		name: "Dragon Scales",
		rating: 3.5,
		num: -3,
	},
	electrician: {
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using an Electric-type attack.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Electrician boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Electrician boost');
				return this.chainModify(1.5);
			}
		},
		name: "Electrician",
		rating: 3.5,
		num: -4,
	},
	junkarmor: {
		shortDesc: "This Pokemon's Defense is raised 2 stages after it is damaged by a Fighting-type move.",
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Fighting') {
				this.boost({def: 2});
			}
		},
		name: "Junk Armor",
		rating: 1.5,
		num: -5,
	},
	awakenedpower: {
		shortDesc: "This Pokemon's Special Attack is doubled.",
		onModifySpAPriority: 5,
		onModifySpA(spa) {
			return this.chainModify(2);
		},
		name: "Awakened Power",
		rating: 5,
		num: -6,
	},
	highground: {
		shortDesc: "This Pokemon is immune to Water-type moves.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				this.add('-immune', target, '[from] ability: High Ground');
				return null;
			}
		},
		name: "High Ground",
		rating: 3,
		num: -7,
	},
	friendlyheat: {
		desc: "Fire-type Pokemon on this Pokemon's side cannot have their stat stages lowered by other Pokemon or have a major status condition inflicted on them by other Pokemon.",
		shortDesc: "This side's Fire types can't have stats lowered or status inflicted by other Pokemon.",
		onAllyBoost(boost, target, source, effect) {
			if ((source && target === source) || !target.hasType('Fire')) return;
			let showMsg = false;
			let i: BoostName;
			for (i in boost) {
				if (boost[i]! < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(effect as ActiveMove).secondaries) {
				const effectHolder = this.effectData.target;
				this.add('-block', target, 'ability: Friendly Heat', '[of] ' + effectHolder);
			}
		},
		onAllySetStatus(status, target, source, effect) {
			if (target.hasType('Fire') && source && target !== source && effect && effect.id !== 'yawn') {
				this.debug('interrupting setStatus with Friendly Heat');
				if (effect.id === 'synchronize' || (effect.effectType === 'Move' && !effect.secondaries)) {
					const effectHolder = this.effectData.target;
					this.add('-block', target, 'ability: Friendly Heat', '[of] ' + effectHolder);
				}
				return null;
			}
		},
		onAllyTryAddVolatile(status, target) {
			if (target.hasType('Fire') && status.id === 'yawn') {
				this.debug('Friendly Heat blocking yawn');
				const effectHolder = this.effectData.target;
				this.add('-block', target, 'ability: Friendly Heat', '[of] ' + effectHolder);
				return null;
			}
		},
		name: "Friendly Heat",
		rating: 0,
		num: -8,
	},
	aerodynamic: {
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using an Flying-type attack.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Flying') {
				this.debug('Aerodynamic boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Flying') {
				this.debug('Aerodynamic boost');
				return this.chainModify(1.5);
			}
		},
		name: "Aerodynamic",
		rating: 3.5,
		num: -9,
	},
	deadlyaccuracy: {
		shortDesc: "Every Physical move used by or against this Pokemon will always hit.",
		onAnyInvulnerabilityPriority: 1,
		onAnyInvulnerability(target, source, move) {
			if (move && (source === this.effectData.target || target === this.effectData.target) && move.category === 'Physical') 
				return 0;
		},
		onAnyAccuracy(accuracy, target, source, move) {
			if (move && (source === this.effectData.target || target === this.effectData.target) && move.category === 'Physical') {
				return true;
			}
			return accuracy;
		},
		name: "Deadly Accuracy",
		rating: 4,
		num: -10,
	},
	melty: {
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using an Water-type attack.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Melty boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Melty boost');
				return this.chainModify(1.5);
			}
		},
		name: "Melty",
		rating: 3.5,
		num: -11,
	},
	warmup: {
		desc: "This Pokemon is immune to Fire-type moves and raises its Speed by 1 stage when hit by an Fire-type move.",
		shortDesc: "This Pokemon's Speed is raised 1 stage if hit by an Fire move; Fire immunity.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				if (!this.boost({spe: 1})) {
					this.add('-immune', target, '[from] ability: Warm Up');
				}
				return null;
			}
		},
		name: "Warm Up",
		rating: 3,
		num: -12,
	},
	thagomizer: {
		desc: "This Pokemon's tail-based attacks have their power multiplied by 1.2.",
		shortDesc: "This Pokemon's tail-based attacks have 1.2x power.",
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			const tailMoves = ["Slam", "Dragon Tail", "Aqua Tail", "Iron Tail", "Poison Tail", "Tail Slap", "Breaking Swipe", "Thunder Tail", "Comet Tail"];
			if (tailMoves.includes(move.name)) {
				this.debug('Thagomizer boost');
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Thagomizer",
		rating: 3,
		num: -13,
	},
	hardcourt: {
		shortDesc: "While this Pokemon is active, the effects of terrain conditions are disabled.",
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Hard Court');
		},
		name: "Hard Court",
		rating: 2,
		num: 13,
	},

	// modifies to existing abilties
	zenmode: {
		inherit: true,
		desc: "If this Pokemon is a Flambiguos, a Darmanitan or Darmanitan-Galar, it changes to Zen Mode if it has 1/2 or less of its maximum HP at the end of a turn. If Darmanitan's HP is above 1/2 of its maximum HP at the end of a turn, it changes back to Standard Mode. This Ability cannot be removed or suppressed.",
		shortDesc: "If Flambiguos or Darmanitan, at end of turn changes Mode to Standard if > 1/2 max HP, else Zen.",
		onResidualOrder: 27,
		onResidual(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Darmanitan' && pokemon.baseSpecies.baseSpecies !== 'Flambiguos' || pokemon.transformed) {
				return;
			}
			if (pokemon.hp <= pokemon.maxhp / 2 && !['Zen', 'Galar-Zen'].includes(pokemon.species.forme)) {
				pokemon.addVolatile('zenmode');
			} else if (pokemon.hp > pokemon.maxhp / 2 && ['Zen', 'Galar-Zen'].includes(pokemon.species.forme)) {
				pokemon.addVolatile('zenmode'); // in case of base Darmanitan-Zen
				pokemon.removeVolatile('zenmode');
			}
		},
		onEnd(pokemon) {
			if (!pokemon.volatiles['zenmode'] || !pokemon.hp) return;
			pokemon.transformed = false;
			delete pokemon.volatiles['zenmode'];
			if (pokemon.species.baseSpecies === 'Darmanitan' && pokemon.species.battleOnly) {
				pokemon.formeChange(pokemon.species.battleOnly as string, this.effect, false, '[silent]');
			}
		},
		effect: {
			onStart(pokemon) {
				if (!pokemon.species.name.includes('Galar')) {
					if (pokemon.species.id !== 'darmanitanzen') pokemon.formeChange('Darmanitan-Zen');
					if (pokemon.species.id !== 'flambiguoszen') pokemon.formeChange('Flambiguos-Zen');
				} else {
					if (pokemon.species.id !== 'darmanitangalarzen') pokemon.formeChange('Darmanitan-Galar-Zen');
				}
			},
			onEnd(pokemon) {
				if (['Zen', 'Galar-Zen'].includes(pokemon.species.forme)) {
					pokemon.formeChange(pokemon.species.battleOnly as string);
				}
			},
		},
	},
}