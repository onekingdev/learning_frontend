const COLOR_REGEX = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/;
const SKIN_LIGHT = 'FFD3BC'
const SKIN_DARK = 'FFC69F'

const SKINS = ['FED1B9', 'DBA488', '9D6E56', '684939']
const SHADOWS = ['FFBE9C', 'C98B6C', '8B5E46', '4F3528']


export const hexToRgb = (hex: string) => {
    if (hex !== null) {

        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result) {
            const r = parseInt(result[1], 16);
            const g = parseInt(result[2], 16);
            const b = parseInt(result[3], 16);
            return 'rgb(' + r + ',' + g + ',' + b + ')'
        }
    }
    return 'rgb(255,255,255)'
}

export const parseSVG = (svgString: string, skinTone: number) => {
    const svgArray = svgString.split(COLOR_REGEX);

    for (let i = 0; i < svgArray.length; i++) {
        if (i % 2 === 1) {
            // Replace hex colors with rgb color value
            if (isColorValid('#' + svgArray[i])) {
                if (svgArray[i] === SKIN_LIGHT)
                    svgArray.splice(i, 1, hexToRgb(SKINS[skinTone]))
                else
                    if (svgArray[i] === SKIN_DARK)
                        svgArray.splice(i, 1, hexToRgb(SHADOWS[skinTone]))
                    else
                        svgArray.splice(i, 1, hexToRgb(svgArray[i]))
            }
        }
    }
    return svgArray.join('')
};

export const isColorValid = (color: string) => {
    if (color !== undefined && color !== null) {
        if (color.trim() !== '') {
            if (color.match(COLOR_REGEX)) {
                return true;
            }
        }
        return false;
    }
    return false;
};
