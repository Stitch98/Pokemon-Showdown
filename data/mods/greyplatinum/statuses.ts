export const BattleStatuses: {[k: string]: ModdedPureEffectData} = {
	hail: {
		name: 'Hail',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('icyrock')) {
				return 8;
			}
			return 5;
		},
		// This should be applied directly to the stat before any of the other modifiers are chained
		// So we give it increased priority.
		onModifyDefPriority: 10,
		onModifyDef(def, pokemon) {
			if (pokemon.hasType('Ice') && this.field.isWeather('hail')) {
				return this.modify(def, 1.5);
			}
		},
		onStart(battle, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectData.duration = 0;
				this.add('-weather', 'Hail', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'Hail');
			}
		},
		onResidualOrder: 1,
		onResidual() {
			this.add('-weather', 'Hail', '[upkeep]');
			if (this.field.isWeather('hail')) this.eachEvent('Weather');
		},
		onWeather(target) {
			this.damage(target.baseMaxhp / 16);
		},
		onEnd() {
			this.add('-weather', 'none');
		},
	},
	unown: {
		name: 'Unown',
		onTypePriority: 1,
		onType(types, pokemon) {
			if (pokemon.transformed || pokemon.ability !== 'hiddenforce' && this.gen >= 8) return types;
			let type: string | undefined = 'Normal';
			if (pokemon.ability === 'hiddenforce') {
				type = pokemon.hpType || 'Fairy';
				if (!type) {
					type = 'Normal';
				}
			}
			return [pokemon.baseSpecies.types[0], type];
		}
	}
}