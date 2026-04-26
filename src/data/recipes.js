VR.RECIPES_DATA = [
    {
        id: 'iron_plate',
        output: { id: 'iron_plate', amount: 2 },
        inputs: [{ id: 'scrap_metal', amount: 3 }],
        craftTime: 2000,
        description: 'Smelt scrap into usable plates',
    },
    {
        id: 'polymer',
        output: { id: 'polymer', amount: 1 },
        inputs: [
            { id: 'toxic_sludge', amount: 2 },
            { id: 'alien_crystal', amount: 1 },
        ],
        craftTime: 3000,
        description: 'Synthesize polymer from toxic compounds',
    },
    {
        id: 'circuit',
        output: { id: 'circuit', amount: 1 },
        inputs: [
            { id: 'alien_crystal', amount: 3 },
            { id: 'iron_plate', amount: 1 },
        ],
        craftTime: 4000,
        description: 'Assemble precision electronics',
    },
    {
        id: 'hazmat_suit',
        output: { id: 'hazmat_suit', amount: 1 },
        inputs: [
            { id: 'polymer', amount: 5 },
            { id: 'circuit', amount: 2 },
        ],
        craftTime: 8000,
        description: 'Craft protection for toxic environments — unlocks Toxic Wastes',
        unlocks: 'toxic_wastes',
    },
    {
        id: 'decryption_module',
        output: { id: 'decryption_module', amount: 1 },
        inputs: [
            { id: 'circuit', amount: 5 },
            { id: 'ancient_tech', amount: 3 },
        ],
        craftTime: 10000,
        description: 'Build a device to decode alien security — unlocks Alien Ruins',
        unlocks: 'alien_ruins',
    },
    {
        id: 'drill_core',
        output: { id: 'drill_core', amount: 1 },
        inputs: [
            { id: 'iron_plate', amount: 10 },
            { id: 'circuit', amount: 3 },
            { id: 'rare_ore', amount: 2 },
        ],
        craftTime: 12000,
        description: 'Engineer a powerful drill — unlocks Deep Caverns',
        unlocks: 'deep_caverns',
    },
    {
        id: 'thruster_pack',
        output: { id: 'thruster_pack', amount: 1 },
        inputs: [
            { id: 'fuel_cell', amount: 5 },
            { id: 'circuit', amount: 8 },
            { id: 'iron_plate', amount: 6 },
        ],
        craftTime: 15000,
        description: 'Build propulsion gear — unlocks Orbital Debris',
        unlocks: 'orbital_debris',
    },
];
