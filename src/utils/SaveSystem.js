VR.SaveSystem = {
    SAVE_KEY: 'void_remnants_save',

    save(gameState) {
        try {
            localStorage.setItem(this.SAVE_KEY, JSON.stringify(gameState));
            return true;
        } catch (e) {
            return false;
        }
    },

    load() {
        try {
            const data = localStorage.getItem(this.SAVE_KEY);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            return null;
        }
    },

    deleteSave() {
        localStorage.removeItem(this.SAVE_KEY);
    },

    hasSave() {
        return localStorage.getItem(this.SAVE_KEY) !== null;
    }
};
