window.VR = window.VR || {};

VR.CONSTANTS = {
    GAME_WIDTH: 480,
    GAME_HEIGHT: 854,
    WORLD_WIDTH: 3000,
    WORLD_HEIGHT: 3000,
    PLAYER_SPEED: 180,

    COLORS: {
        BACKGROUND: 0x0a0a1a,
        UI_BG: 0x1a1a2e,
        UI_BORDER: 0x16213e,
        ACCENT: 0x00d4ff,
        WARNING: 0xff6b35,
        SUCCESS: 0x00ff88,
        LOCKED: 0xff3333,
        TEXT: 0xe0e0e0,
        SCRAP: 0x8a8a8a,
        CRYSTAL: 0x00ffff,
        TOXIC: 0x88ff00,
        ANCIENT: 0xffaa00,
        RARE_ORE: 0xff00ff,
        FUEL: 0xff6600,
    },

    EVENTS: {
        RESOURCE_GATHERED: 'resource_gathered',
        ITEM_CRAFTED: 'item_crafted',
        ZONE_UNLOCKED: 'zone_unlocked',
        INVENTORY_CHANGED: 'inventory_changed',
        PLAYER_MOVED: 'player_moved',
        OPEN_CRAFTING: 'open_crafting',
        ZONE_INTERACT: 'zone_interact',
        TOGGLE_INVENTORY: 'toggle_inventory',
        TOGGLE_MAP: 'toggle_map',
    }
};
