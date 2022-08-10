export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const extractMathjaxText = (str: string) => {
  // const regex = /(?<=\$).+?(?=\$)/g
  const regex = /(?:\$).+?(?=\$)/g; //changed because of IPAD, Need to test
  const matches = str.match(regex);
  return matches ? matches[0].slice(1) : '';
};

export const extractQuestion = (str: string) => {
  const firstBracketIndex = str.indexOf('$');
  if (str.slice(0, 4) === 'TYPE' || str.slice(0, 4) === 'FRAC')
    return str.slice(5, firstBracketIndex);
  return str.slice(1, firstBracketIndex);
};

export const getMessage = (error: any) => {
  return error.message || 'Error on fetching!'
};

export const isValidUrl = (_string: string) => {
  if (!_string) return false;
  return _string.slice(0, 5) === 'http:' || _string.slice(0, 6) === 'https:';
  // let url_string;
  // try {
  //     url_string = new URL(_string);
  // } catch (_) {
  //     return false;
  // }
  // return url_string.protocol === "http:" || url_string.protocol === "https:";
};

// Fisher-Yates shuffle method
export const shuffle = (array: Array<any>) => {
  const temp: Array<any> = [...array];
  for (let i = temp.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [temp[i], temp[j]] = [temp[j], temp[i]];
    // let t = array[i]; array[i] = array[j]; array[j] = t
  }
  return temp;
};

export const smoothScroll = (targetEl: any, offset = -100, duration = 500) => {
  const target = document.querySelector(targetEl);
  if (!target) {
    return;
  }
  const targetPosition = target.getBoundingClientRect().top + offset;
  const startPosition = window.pageYOffset;
  let startTime: any = null;

  const ease = function (t: any, b: any, c: any, d: any) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const animation = function (currentTime: any) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };
  requestAnimationFrame(animation);
};

export function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const any2String = (param: any): string => {
  if (!param) return '';
  let str = '';
  if (Array.isArray(param)) {
    str += '[';
    for (let i = 0; i < param.length; i++) {
      if (i === param.length - 1) str += any2String(param[i]);
      else str += any2String(param[i]) + ',';
    }
    str += ']';
  } else if (typeof param === 'object') {
    // } else if (typeof param !== 'string' && typeof param !== 'number') {
    str += '{';
    const keys = Object.keys(param);
    for (let i = 0; i < keys.length; i++) {
      if (i === keys.length - 1)
        str += keys[i] + ':' + any2String(param[keys[i]]);
      else str += keys[i] + ':' + any2String(param[keys[i]]) + ',';
    }
    str += '}';
    // let stringifiedObj = Object.entries(param).map(x => x.join(':')).join('\n')
  } else if (typeof param === 'string')
    str = '"' + param.toString() + '"';
  else
    str = param.toString()

  return str;
};

export const validatePhoneNumber = (pNumber: string) => {
  const regex = new RegExp(/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/);
  return regex.test(pNumber);
}
