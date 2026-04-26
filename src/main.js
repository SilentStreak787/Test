const config = {
    type: Phaser.AUTO,
    width: VR.CONSTANTS.GAME_WIDTH,
    height: VR.CONSTANTS.GAME_HEIGHT,
    backgroundColor: VR.CONSTANTS.COLORS.BACKGROUND,
    scene: [BootScene, MenuScene, WorldScene, CraftingScene, UIScene],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    input: {
        activePointers: 2,
    },
    render: {
        antialias: false,
        pixelArt: false,
    },
};

const game = new Phaser.Game(config);
