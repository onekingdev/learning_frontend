export const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const getMessage = (error: any) => error.message

export const isValidUrl = (_string: string) => {
    if (!_string) return false
    return _string.slice(0, 5) === 'http:' || _string.slice(0, 6) === 'https:'
    // let url_string;
    // try {
    //     url_string = new URL(_string);
    // } catch (_) {
    //     return false;
    // }
    // return url_string.protocol === "http:" || url_string.protocol === "https:";
}

// Fisher-Yates shuffle method
export const shuffle = (array: Array<any>) => {
    const temp: Array<any> = [...array]
    for (let i = temp.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [temp[i], temp[j]] = [temp[j], temp[i]];
        // let t = array[i]; array[i] = array[j]; array[j] = t
    }
    return temp
}

export const smoothScroll = (targetEl: any, offset = -100, duration = 500) => {
    const target = document.querySelector(targetEl);
    if (!target) { return }
    const targetPosition = target.getBoundingClientRect().top + offset;
    const startPosition = window.pageYOffset;
    let startTime: any = null;

    const ease = function (t: any, b: any, c: any, d: any) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime: any) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
}


export function validateEmail (email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
