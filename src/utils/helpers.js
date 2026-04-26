VR.Helpers = {
    distance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    },

    colorToHex(color) {
        return '#' + color.toString(16).padStart(6, '0');
    },

    randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    },

    drawRoundedRect(graphics, x, y, width, height, radius, fillColor, strokeColor, strokeWidth) {
        strokeWidth = strokeWidth || 2;
        graphics.fillStyle(fillColor, 1);
        graphics.fillRoundedRect(x, y, width, height, radius);
        if (strokeColor !== undefined) {
            graphics.lineStyle(strokeWidth, strokeColor, 1);
            graphics.strokeRoundedRect(x, y, width, height, radius);
        }
    }
};
