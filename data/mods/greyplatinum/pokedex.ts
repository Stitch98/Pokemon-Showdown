export const BattlePokedex: {[k: string]: ModdedSpeciesData} = {
	blastoisemega: {
		inherit: true,
		types: ["Water", "Steel"],
	},
	fearow: {
		inherit: true,
		baseStats: {hp: 75, atk: 100, def: 65, spa: 61, spd: 61, spe: 115}
	},
	ekans: {
		inherit: true,
		baseStats: {hp: 45, atk: 70, def: 44, spa: 40, spd: 54, spe: 65}
	},
	arbok: {
		inherit: true,
		baseStats: {hp: 80, atk: 115, def: 79, spa: 65, spd: 99, spe: 75}
	},
	raichu: {
		inherit: true,
		types: ["Electric", "Normal"],
		baseStats: {hp: 70, atk: 100, def: 55, spa: 100, spd: 80, spe: 120},
	},
	sandslash: {
		inherit: true,
		baseStats: {hp: 80, atk: 100, def: 130, spa: 45, spd: 60, spe: 100},
		abilities: {0: "Sand Veil", 1: "Sand Rush", H: "Iron Barbs"}
	},
	nidoqueen: {
		inherit: true,
		baseStats: {hp: 90, atk: 72, def: 107, spa: 95, spd: 95, spe: 76},
		abilities: {0: "Poison Point", 1: "Rivalry", H: "Serene Grace"}
	},
	nidoking: {
		inherit: true,
		baseStats: {hp: 90, atk: 107, def: 95, spa: 72, spd:76, spe: 95}
	},
	ninetails: {
		inherit: true,
		types: ["Fire", "Ghost"],
		baseStats: {hp: 73, atk: 67, def: 75, spa: 90, spd: 100, spe: 100},
		abilities: {0: "Flash Fire", 1: "Cursed Body", H: "Drought"}
	},
	wigglytuff: {
		inherit: true,
		baseStats: {hp: 140, atk: 60, def: 75, spa: 95, spd: 90, spe: 45},
		abilities: {0: "Cute Charm", 1: "Competitive", H: "Acapella"}
	},
	vileplume: {
		inherit: true,
		baseStats: {hp: 95, atk: 70, def: 85, spa: 120, spd: 90, spe: 55},
		abilities: {0: "Chlorophyll", 1: "Grassy Surge", H: "Effect Spore"}
	},
	dugtrio: {
		inherit: true,
		baseStats: {hp: 35, atk: 100, def: 50, spa: 50, spd: 70, spe: 135}
	},
	golduck: {
		inherit: true,
		types: ["Water", "Psychic"],
		baseStats: {hp: 80, atk: 80, def: 90, spa: 115, spd: 90, spe: 65}
	},
	primeape: {
		inherit: true,
		types: ["Fighting", "Ground"],
		baseStats: {hp: 85, atk: 115, def: 80, spa: 55, spd: 70, spe: 105}
	},
	poliwrath: {
		inherit: true,
		baseStats: {hp: 90, atk: 105, def: 105, spa: 70, spd: 90, spe: 60},
		abilities: {0: "Water Veil", 1: "Swift Swim", H: "No Guard"}
	},
	victreebel: {
		inherit: true, 
		baseStats: {hp: 80, atk: 110, def: 65, spa: 115, spd: 70, spe: 90},
		abilities: {0: "Chlorophyll", 1: "Corrosion", H: "Gluttony"}
	},
	rapidash: {
		inherit: true,
		types: ["Fire", "Fairy"],
		baseStats: {hp: 65, atk: 105, def: 70, spa: 95, spd: 80, spe: 105},
		abilities: {0:"Cute Charm", 1: "Flash Fire", H: "Flame Body"}
	},
	magneton: {
		inherit: true,
		baseStats: {hp: 60, atk: 60, def: 105, spa: 110, spd: 95, spe: 50}
	},
	dodrio: {
		inherit: true,
		types: ["Ground", "Flying"],
		baseStats: {hp: 80, atk: 110, def: 75, spa: 60, spd: 70, spe: 120}
	},
	dewgong: {
		inherit: true,
		baseStats: {hp: 90, atk: 50, def: 100, spa: 100, spd: 115, spe: 70},
		abilities: {0:"Hydration", 1: "Ice Body", H: "Magic Guard"}
	},
	muk: {
		inherit: true,
		baseStats: {hp: 115, atk: 115, def: 85, spa: 65, spd: 100, spe: 30}
	},
	hypno: {
		inherit: true,
		types: ["Psychic", "Dark"],
		baseStats: {hp: 73, atk: 103, def: 70, spa: 93, spd: 115, spe: 67},
		abilities: {0: "Insomnia", 1: "Inner Focus", H: "Bad Dreams"}
	},
	kingler: {
		inherit: true,
		types: ["Water", "Steel"],
		baseStats: {hp: 75, atk: 130, def: 115, spa: 60, spd: 60, spe: 75}
	},
	electrode: {
		inherit: true,
		baseStats: {hp: 50, atk: 50, def: 50, spa: 110, spd: 90, spe: 150}
	},
	weezing: {
		inherit: true,
		types: ["Poison", "Fire"],
		baseStats: {hp: 75, atk: 90, def: 120, spa: 95, spd: 80, spe: 50},
		abilities: {0: "Levitate", 1: "Neutralizing Gas", H: "Aftermath"},
	},
	weezinggalar: {
		inherit: true,
		baseStats: {hp: 75, atk: 90, def: 120, spa: 95, spd: 80, spe: 50},
	},
	seaking: {
		inherit: true,
		baseStats: {hp: 80, atk: 100, def: 65, spa: 90, spd: 80, spe: 85}
	},
	mrmime: {
		inherit: true,
		baseStats: {hp: 60, atk: 45, def: 65, spa: 100, spd: 120, spe: 90}
	},
	jynx: {
		inherit: true,
		baseStats: {hp: 60, atk: 65, def: 45, spa: 120, spd: 100, spe: 90},
		abilities: {0: "Oblivious", 1: "Synchronize", H: "Heatproof"}
	},
	snorlax: {
		inherit: true,
		abilities: { 0: "Comatose", 1: "Thick Fat", H: "Gluttony"}
	},
	articuno: {
		inherit: true,
		baseStats: {hp:  90, atk: 85, def: 90, spa: 100, spd: 125, spe: 90},
		abilities: {0: "Magic Guard", H: "Snow Cloak"}
	},
	moltres: {
		inherit: true,
		baseStats: { hp: 90, atk: 90, def: 90, spa: 100, spd: 85, spe: 125},
		abilities: {0: "Regenerator", H: "Flame Body"}
	},
	mew: {
		inherit: true,
		abilities: {0: "Synchronize", H: "Imposter"}
	},
	meganium: {
		inherit: true,
		abilities: {0: "Overgrowth", H: "Natural Cure"}
	},
	typhlosion: {
		inherit: true,
		baseStats: {hp: 81, atk: 103, def: 73, spa: 107, spd: 77, spe: 94}
	},
	noctowl: {
		inherit: true, 
		types: ["Ghost", "Flying"],
		baseStats: {hp: 100, atk: 50, def: 50, spa: 100, spd: 120, spe: 90}
	},
	ledian: {
		inherit: true,
		types: ["Bug", "Flying"],
		baseStats: {hp: 65, atk: 95, def: 60, spa: 55, spd: 110, spe: 115},
		abilities: {0: "Swarm", 1: "Aerilate", H: "Iron Fist"}

	},
	ariados: {
		inherit: true, 
		types: ["Bug", "Dark"],
		baseStats: {hp: 70, atk: 100, def: 70, spa: 60, spd: 70, spe: 105}
	},
	lanturn: {
		inherit: true,
		baseStats: {hp: 125, atk: 65, def: 65, spa: 95, spd: 95, spe: 65}
	},
	xatu: {
		inherit: true,
		baseStats: {hp: 85, atk: 55, def: 100, spa: 95, spd: 100, spe: 85}
	},
	bellossom: {
		inherit: true,
		types: ["Grass", "Fairy"],
		baseStats: {hp: 95, atk: 70, def: 85, spa: 90, spd: 120, spe: 55},
		abilities: {0: "Chlorophyll", 1: "Drought", H: "Healer"}
	},
	sudowoodo: {
		inherit: true,
		baseStats: {hp: 95, atk: 115, def: 135, spa: 30, spd: 95, spe: 30},
	},
	jumpluff: {
		inherit: true,
		baseStats: {hp: 95, atk: 55, def: 70, spa: 55, spd: 115, spe: 130},
		abilities: {0: "Cotton Down", 1: "Fluffy", H: "Wind Waker"}
	},
	sunflora: {
		inherit: true,
		baseStats: {hp: 95, atk: 75, def: 75, spa: 115, spd: 105, spe: 30}
	},
	quagsire: {
		inherit: true,
		baseStats: {hp: 105, atk: 85, def: 85, spa: 85, spd: 85, spe: 25}
	},
	misdreavus: {
		inherit: true,
		types: ["Ghost", "Fairy"],
		abilities: {0: "Levitate", H: "Wonder Skin"}
	},
	unown: {
		inherit: true,
		baseStats: {hp: 71, atk: 97, def: 71, spa: 97, spd: 71, spe: 73},
		abilities: {0: "Hidden Force"}
	},
	girafarig: {
		inherit: true,
		baseStats: {hp: 80, atk: 100, def: 65, spa: 120, spd: 65, spe: 95},
		abilities: {0: "Inner Focus", 1: "Synchronize", H: "Sap Sipper"}
	},
	dunsparce: {
		inherit: true,
		types: ["Normal", "Dragon"],
		baseStats: {hp: 100, atk: 85, def: 85, spa: 100, spd: 100, spe: 45},
		abilities: {0: "Serene Grace", 1: "Shed Skin", H: "Rattled"}
	},
	steelixmega: {
		inherit: true,
		abilities: {0: "Arena Trap"}
	},
	granbull: {
		inherit: true,
		types: ["Fairy", "Dark"],
		baseStats: {hp: 90, atk: 120, def: 95, spa: 60, spd: 90, spe: 45},
		abilities: {0: "Intimidate", 1: "Strong Jaw", H: "Guts"}
	},
	qwilfish: {
		inherit: true,
		baseStats: {hp: 65, atk: 105, def: 105, spa: 65, spd: 65, spe: 95},
		abilities: {0: "Poison Point", 1: "Aftermath", H: "Intimidate"},
	},
	magcargo: {
		inherit: true,
		baseStats: {hp: 90, atk: 50, def: 130, spa: 100, spd: 100, spe: 30},
		abilities: {0: "Magma Armor", 1: "Regenerator", H: "Weak Armor"}
	},
	octillery: {
		inherit: true,
		baseStats: {hp: 85, atk: 110, def: 85, spa: 110, spd: 85, spe: 45},
		abilities: {0: "Suction Cups", 1: "Sniper", H: "Mega Launcher"}
	},
	delibird: {
		inherit: true,
		baseStats: {hp: 65, atk: 75, def: 65, spa: 95, spd: 85, spe: 115},
		abilities: {0: "Vital Spirit", 1: "Snow Warning", H: "Insomnia"},
	},
	houndoommega: {
		inherit: true,
		abilities: {0: "Berserk"}
	},
	kingdra: {
		inherit: true,
		abilities: {0: "Swift Swim", 1: "Sniper", H: "Adaptability"}
	},
	donphan: {
		inherit: true,
		types: ["Ground", "Fairy"],
		baseStats: {hp: 90, atk: 140, def: 140, spa: 50, spd: 50, spe: 50},
	},
	stantler: {
		inherit: true,
		baseStats: {hp: 113, atk: 75, def: 82, spa: 105, spd: 65, spe: 85}
	},
	sceptilemega: {
		inherit: true,
		abilities: {0: "Technician"}
	},
	blaziken: {
		inherit: true,
		baseStats: {hp: 80, atk: 120, def: 70, spa: 100, spd: 70, spe: 100},
		abilities: {0: "Blaze", H: "Reckless"}
	},
	blazikenmega: {
		inherit: true,
		baseStats: {hp: 80, atk: 160, def: 80, spa: 130, spd: 80, spe: 110},
		abilities: {0: "Reckless"}
	},
	mightyena: {
		inherit: true,
		baseStats: {hp: 90, atk: 120, def: 90, spa: 60, spd: 90, spe: 70},
		abilities: {0: "Intimidate", 1: "Strong Jaw", H: "Moxie"}
	},
	linoone: {
		inherit: true,
		baseStats: {hp: 78, atk: 90, def: 61, spa: 50, spd: 61, spe: 120},
		abilities: {0: "Pickup", 1: "Gluttony", H: "Speed Boost"}
	},
	linoonegalar: {
		inherit: true,
		baseStats: {hp: 78, atk: 90, def: 61, spa: 50, spd: 61, spe: 120}
	},
	beautifly: {
		inherit: true,
		types: ["Bug", "Flying"],
		baseStats: {hp: 70, atk: 80, def: 65, spa: 110, spd: 90, spe: 85},
		abilities: {0: "Swarm", 1: "Simple", H: "Aroma Veil"}
	},
	dustox: {
		inherit: true,
		baseStats: {hp: 70, atk: 65, def: 80, spa: 90, spd: 110, spe: 85},
		abilities: {0: "Shield Dust", 1: "Simple", H: "Compound Eyes"}
	},
	shiftry: {
		inherit: true,
		abilities: {0: "Chlorophyll", 1: "Wind Waker", H: "Pickpocket"}
	},
	swellow: {
		inherit: true,
		baseStats: {hp: 75, atk: 95, def: 70, spa: 85, spd: 50, spe: 125}
	},
	masquerain: {
		inherit: true,
		types: ["Bug", "Water"],
		baseStats: {hp: 70, atk: 60, def: 62, spa: 100, spd: 92, spe: 110},
		abilities: {0: "Intimidate", H: "Compound Eyes"}
	},
	ninjask: {
		inherit: true,
		types: ["Bug", "Dark"]
	},
	exploud: {
		inherit: true,
		baseStats: {hp: 102, atk: 102, def: 83, spa: 112, spd: 93, spe: 43},
		abilities: {0: "Soundproof", 1: "Amplifier", H: "Scrappy"}
	},
	delcatty: {
		inherit: true,
		baseStats: {hp: 90, atk: 65, def: 85, spa: 55, spd: 75, spe: 123}
	},
	aggronmega: {
		inherit: true,
		types: ["Steel", "Dragon"],
		abilities: {0: "Heavy Metal"},
		weightkg: 499.5
	},
	medicham: {
		inherit: true,
		baseStats: {hp: 70, atk: 80, def: 75, spa: 80, spd: 75, spe: 100}
	},
	medichammega: {
		inherit: true,
		baseStats: {hp: 70, atk: 100, def: 95, spa: 120, spd: 95, spe: 100},
		abilities: {0: "Huge Power"}
	},
	volbeat: {
		inherit: true,
		types: ["Bug", "Electric"],
		baseStats: {hp: 65, atk: 93, def: 75, spa: 77, spd: 85, spe: 100},
		abilities: {0: "Illuminate", 1: "Volt Absorb", H: "Prankster"}
	},
	illumise: {
		inherit: true,
		types: ["Bug", "Electric"],
		baseStats: {hp: 65, atk: 77, def: 75, spa: 93, spd: 85, spe: 100},
		abilities: {0: "Tinted Lens", 1: "Lightning Rod", H: "Prankster"}
	},
	swalot: {
		inherit: true,
		types: ["Poison", "Normal"],
		baseStats: {hp: 180, atk: 83, def: 73, spa: 83, spd: 73, spe: 33},
		abilities: {0: "Accumulate", H: "Liquid Ooze"}
	},
	wailord: {
		inherit: true,
		baseStats: {hp: 200, atk: 105, def: 45, spa: 105, spd: 45, spe: 45}
	},
	grumpig: {
		inherit: true,
		baseStats: {hp: 100, atk: 45, def: 85, spa: 100, spd: 110, spe: 60}
	},
	spinda: {
		inherit: true,
		baseStats: {hp: 80, atk: 80, def: 80, spa: 80, spd: 80, spe: 80}
	},
	vibrava: {
		inherit: true,
		types: ["Ground", "Bug"],
		baseStats: {hp: 50, atk: 80, def: 50, spa: 50, spd: 50, spe: 80},
		abilities: {0: "Levitate", 1: "Magic Bounce"}
	},
	flygon: {
		inherit: true,
		types: ["Ground", "Bug"],
		baseStats: {hp: 80, atk: 80, def: 80, spa: 100, spd: 80, spe: 100},
		abilities: {0: "Levitate", 1: "Magic Bounce"}
	},
	cacturne: {
		inherit: true,
		baseStats: {hp: 80, atk: 120, def: 80, spa: 120, spd: 80, spe: 45}
	},
	zangoose: {
		inherit: true,
		baseStats: {hp: 73, atk: 125, def: 80, spa: 60, spd: 80, spe: 100}
	},
	seviper: {
		inherit: true,
		baseStats: {hp: 73, atk: 100, def: 80, spa: 125, spd: 80, spe: 60}
	},
	whiscash: {
		inherit: true,
		baseStats: {hp: 110, atk: 98, def: 93, spa: 76, spd: 91, spe: 67}
	},
	claydol: {
		inherit: true,
		baseStats: {hp: 80, atk: 80, def: 105, spa: 80, spd: 120, spe: 75},
		abilities: {0: "Levitate", H: "Dry Skin"}
	},
	castformsunny: {
		inherit: true,
		baseStats: {hp: 70, atk: 100, def: 70, spa: 110, spd: 60, spe: 90}
	},
	castformrainy: {
		inherit: true,
		baseStats: {hp: 70, atk: 70, def: 100, spa: 90, spd: 110, spe: 60}
	},
	castformsnowy: {
		inherit: true,
		baseStats: {hp: 70, atk: 70, def: 60, spa: 100, spd: 90, spe: 110}
	},
	castformsandy: {
		num: 351,
		name: "Castform-Sandy",
		baseSpecies: "Castform",
		forme: "Sandy",
		types: ["Rock"],
		baseStats: {hp: 70, atk: 100, def: 110, spa: 70, spd: 90, spe: 60},
		abilities: {0: "Forecast"},
		heightm: 0.3,
		weightkg: 0.8,
		color: "White",
		eggGroups: ["Fairy", "Amorphous"],
		requiredAbility: "Forecast",
		battleOnly: "Castform",
	},
	kecleon: {
		inherit: true,
		baseStats: {hp: 90, atk: 100, def: 90, spa: 80, spd: 120, spe: 40},
		abilities: {0: "Color Change", 1: "Mimicry", H: "Protean"}
	},
	banettemega: {
		inherit: true,
		types: ["Ghost", "Normal"]
	},
	tropius: {
		inherit: true,
		baseStats: {hp: 99, atk: 68, def: 83, spa: 72, spd: 87, spe: 51},
		abilities: {0: "Solar Power", 1: "Harvest", H: "Thick Fat"}
	},
	chimecho: {
		inherit: true,
		types: ["Psychic", "Normal"],
		baseStats: {hp: 75, atk: 50, def: 80, spa: 95, spd: 90, spe: 65},
		abilities: {0: "Levitate", 1: "Holy Bell"}
	},
	absolmega: {
		inherit: true,
		types: ["Dark", "Fairy"]
	},
	glalie: {
		inherit: true,
		abilities: {0: "Inner Focus", 1: "Ice Body", H: "Unnerve"}
	},
	walrein: {
		inherit: true,
		baseStats: {hp: 130, atk: 80, def: 90, spa: 95, spd: 90, spe: 45},
		abilities: {0: "Thick Fat", 1: "Ice Body", H: "Accumulate"}
	},
	huntail: {
		inherit: true,
		types: ["Water", "Dark"],
		baseStats: {hp: 65, atk: 104, def: 105, spa: 94, spd: 75, spe: 52},
		abilities: {0: "Swift Swim", 1: "Strong Jaw", H: "Water Veil"}
	},
	gorebyss: {
		inherit: true,
		types: ["Water", "Fairy"],
		baseStats: {hp: 65, atk: 84, def: 105, spa: 114, spd: 75, spe: 52},
		abilities: {0: "Swift Swim", 1: "Serene Grace", H: "Hydration"}
	},
	torterra: {
		inherit: true,
		baseStats: {hp: 82, atk: 109, def: 105, spa: 99, spd: 95, spe: 45},
		abilities: {0: "Overgrow", H: "Rock Head"}
	},
	empoleon: {
		inherit: true,
		baseStats: {hp: 74, atk: 101, def: 91, spa: 111, spd: 101, spe: 52},
		abilities: {0: "Torrent", H: "Lightining Rod"}
	},
	kricketune: {
		inherit: true,
		types: ["Bug", "Normal"],
		baseStats: {hp: 77, atk: 85, def: 51, spa: 85, spd: 51, spe: 105},
		abilities: {0: "Swarm", 1: "Amplifier", H: "Technician"}
	},
	luxray: {
		inherit: true,
		types: ["Electric", "Dark"],
		baseStats: {hp: 80, atk: 120, def: 79, spa: 92, spd: 79, spe: 80},
		abilities: {0: "Strong Jaw", 1: "Intimidate", H: "Guts"}
	},
	wormadam: {
		inherit: true,
		baseStats: {hp: 90, atk: 74, def: 95, spa: 94, spd: 105, spe: 36}

	},
	wormadamsandy: {
		inherit: true,
		baseStats: {hp: 90, atk: 84, def: 105, spa: 84, spd: 105, spe: 36}
	},
	wormadamthrash: {
		inherit: true,
		baseStats: {hp: 90, atk: 94, def: 115, spa: 74, spd: 95, spe: 36}
	},
	mothim: {
		inherit: true,
		types: ["Bug", "Psychic"],
		baseStats: {hp: 60, atk: 114, def: 65, spa: 114, spd: 65, spe: 86}
	},
	vespiquen: {
		inherit: true,
		types: ["Bug", "Rock"],
		baseStats: {hp: 80, atk: 80, def: 122, spa: 80, spd: 122, spe: 40},
		abilities: {0: "Pressure", H: "Queenly Majesty"}
	},
	cherrrimsunshine: {
		inherit: true,
		types: ["Grass", "Fire"],
		baseStats: {hp: 70, atk: 60, def: 70, spa: 117, spd: 108, spe: 105}
	},
	gastrodon: {
		inherit: true,
		abilities: {0: "Poison Heal", 1: "Storm Drain", H: "Sand Force"}
	},
	drifblim: {
		inherit: true,
		baseStats: {hp: 150, atk: 60, def: 60, spa: 80, spd: 80, spe: 100}
	},
	mismagius: {
		inherit: true,
		types: ["Ghost", "Fairy"],
		abilities: {0: "Levitate", H: "Wonder Skin"}
	},
	skuntank: {
		inherit: true,
		baseStats: {hp: 103, atk: 93, def: 87, spa: 71, spd: 97, spe: 64},
		abilities: {0: "Stench", 1: "Aftermath", H: "Neutralizing Gas"}
	},
	chatot: {
		inherit: true,
		baseStats: {hp: 76, atk: 65, def: 45, spa: 92, spd: 62, spe: 101},
		abilities: {0: "Keen Eye", 1: "Amplifier", H: "Big Pecks"}
	},
	spiritomb: {
		inherit: true,
		baseStats: {hp: 70, atk: 102, def: 108, spa: 102, spd: 108, spe: 35},
		abilities: {0: "Cursed Body", 1: "Infiltrator", H: "Pressure"}
	},
	lucario: {
		inherit: true,
		baseStats: {hp: 70, atk: 110, def: 70, spa: 115, spd: 70, spe: 100}
	},
	lucariomega: {
		inherit: true,
		baseStats: {hp: 70, atk: 145, def: 98, spa: 140, spd: 70, spe: 112},
		abilities: {0: "Technician"}
	},
	drapion: {
		inherit: true,
		baseStats: {hp: 80, atk: 100, def: 110, spa: 60, spd: 75, spe: 95},
		abilities: {0: "Battle Armor", 1: "Sniper", H: "Tough Claws"}
	},
	toxicroak: {
		inherit: true,
		baseStats: {hp: 83, atk: 106, def: 65, spa: 96, spd: 65, spe: 105},
		abilities: {0: "Stealth Touch", 1: "Dry Skin", H: "Poison Touch"}
	},
	carnivine: {
		inherit: true,
		types: ["Grass", "Poison"],
		baseStats: {hp: 74, atk: 130, def: 72, spa: 120, spd: 72, spe: 46},
		abilities: {0: "Levitate", H: "Strong Jaw"}
	},
	lumineon: {
		inherit: true,
		types: ["Water", "Fairy"],
		baseStats: {hp: 79, atk: 69, def: 86, spa: 69, spd: 106, spe: 111}
	},
	lickilicky: {
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 110, atk: 85, def: 105, spa: 80, spd: 105, spe: 45},
		abilities: {0: "Own Tempo", 1: "Static", H: "Cloud Nine"}
	},
	tangrowth: {
		inherit: true,
		types: ["Grass", "Rock"]
	},
	electivire: {
		inherit: true,
		types: ["Electric", "Fighting"],
		abilities: {0: "Motor Drive", 1: "Magnet Pull", H: "Static"}
	},
	magmortar: {
		inherit: true,
		types: ["Fire", "Poison"],
		abilities: {0: "Flash Fire", 1: "Stench", H: "Flame Body"}
	},
	yanmega: {
		inherit: true,
		types: ["Bug", "Dragon"]
	},
	probopass: {
		inherit: true,
		types: ["Rock", "Electric"],
		abilities: {0: "Levitate", H: "Magnet Pull"}
	},
	dusknoir: {
		inherit: true,
		types: ["Ghost", "Fighting"],
		abilities: {0: "Pressure", H: "Iron Fist"}
	},
	froslass: {
		inherit: true,
		abilities: {0: "Snow Cloak", 1: "Magic Bounce", H: "Cursed Body"}
	},
	rotomfan: {
		inherit: true,
		types: ["Electric", "Steel"]
	},
	phione: {
		inherit: true,
		types: ["Water", "Fairy"],
		abilities: {0: "Hydration", H: "Wonder Guard"}
	},
	emboar: {
		inherit: true,
		types: ["Fire", "Rock"]
	},
	samurott: {
		inherit: true,
		types: ["Water", "Fighting"],
		baseStats: {hp: 85, atk: 100, def: 75, spa: 108, spd: 70, spe: 97},
		abilities: {0: "Torrent", H: "Defiant"},
	},
	stoutland: {
		inherit: true,
		types: ["Normal", "Ground"],
		abilities: {0: "Intimidate", 1: "Sand Rush", H: "Fur Coat"} 
	},
	swoobat: {
		inherit: true,
		baseStats: {hp: 77, atk: 57, def: 85, spa: 77, spd: 85, spe: 119}
	},
	seismitoad: {
		inherit: true,
		types: ["Water", "Poison"],
		baseStats: {hp: 115, atk: 95, def: 75, spa: 95, spd: 75, spe: 54},
		abilities: {0: "Water Veil", 1: "Poison Touch", H: "Water Absorb"}
	},
	leavanny: {
		inherit: true,
		baseStats: {hp: 75, atk: 103, def: 80, spa: 70, spd: 80, spe: 112}
	},
	lilligant: {
		inherit: true,
		baseStats: {hp: 70, atk: 60, def: 85, spa: 100, spd: 85, spe: 100},
		abilities: {0: "Chlorophyll", 1: "Dancer", H: "Leaf Guard"}
	},
	basculin: {
		inherit: true,
		types: ["Water", "Normal"],
		baseStats: {hp: 90, atk: 112, def: 65, spa: 80, spd: 55, spe: 118}
	},
	basculinbluestriped: {
		inherit: true,
		types: ["Water", "Normal"],
		baseStats: {hp: 90, atk: 112, def: 65, spa: 80, spd: 55, spe: 118}
	},
	crustle: {
		inherit: true,
		baseStats: {hp: 80, atk: 105, def: 125, spa: 65, spd: 95, spe: 45}
	},
	cofagrigus: {
		inherit: true,
		types: ["Ghost", "Rock"]
	},
	zoroark: {
		inherit: true,
		baseStats: {hp: 70, atk: 115, def: 60, spa: 120, spd: 60, spe: 115},
	},
	swanna: {
		inherit: true,
		baseStats: {hp: 95, atk: 57, def: 93, spa: 87, spd: 93, spe: 98},
		abilities: {0: "Wind Waker", 1: "Big Pecks", H: "Hydration"}
	},
	sawsbuck: {
		inherit: true,
		baseForme: undefined,
		types: ["Fairy", "Grass"],
		baseStats: {hp: 80, atk: 100, def: 80, spa: 60, spd: 80, spe: 105},
		abilities: {0: "Mist Veil", 1: "Sap Sipper", H: "Serene Grace"},
		cosmeticFormes: undefined,
		otherFormes: ["Sawsbuck-Summer", "Sawsbuck-Autumn", "Sawsbuck-Winter"],
	},
	sawsbuckautumn: {
		num: 586,
		name: "Sawsbuck-Autumn",
		baseSpecies: "Sawsbuck",
		forme: "Autumn",
		types: ["Electric", "Grass"],
		baseStats: {hp: 80, atk: 100, def: 80, spa: 60, spd: 80, spe: 105},
		abilities: {0: "Surge Surfer", 1: "Sap Sipper", H: "Serene Grace"},
		heightm: 1.9,
		weightkg: 92.5,
		color: "Brown",
		prevo: "Deerling",
		evoLevel: 34,
		eggGroups: ["Field"],
		changesFrom: "Sawsbuck"
	},
	sawsbuckwinter: {
		num: 586,
		name: "Sawsbuck-Winter",
		baseSpecies: "Sawsbuck",
		forme: "Winter",
		types: ["Ice", "Grass"],
		baseStats: {hp: 80, atk: 100, def: 80, spa: 60, spd: 80, spe: 105},
		abilities: {0: "Snow Cloak", 1: "Sap Sipper", H: "Serene Grace"},
		heightm: 1.9,
		weightkg: 92.5,
		color: "Brown",
		prevo: "Deerling",
		evoLevel: 34,
		eggGroups: ["Field"],
		changesFrom: "Sawsbuck"
	},
	sawsbucksummer: {
		num: 586,
		name: "Sawsbuck-Summer",
		baseSpecies: "Sawsbuck",
		forme: "Summer",
		types: ["Normal", "Grass"],
		baseStats: {hp: 80, atk: 100, def: 80, spa: 60, spd: 80, spe: 105},
		abilities: {0: "Chlorophyll", 1: "Sap Sipper", H: "Serene Grace"},
		heightm: 1.9,
		weightkg: 92.5,
		color: "Brown",
		prevo: "Deerling",
		evoLevel: 34,
		eggGroups: ["Field"],
		changesFrom: "Sawsbuck"
	}
	// WIP...
};