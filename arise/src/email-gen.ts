import random = require('lodash.random');
import shuffle = require('lodash.shuffle');

const getEmailDomain = () => {
    return shuffle([
        '@gmail.com',
        '@googlemail.com',
        '@hotmail.com',
        '@live.com',
        '@outlook.com',
        '@aol.com',
    ])[0];
}

export const generateEmailFromName = (name: string) => {
    const strat = random(2);

    switch (strat) {
        case 0:
            // first.last
            return name.replace(' ', '.').concat(getEmailDomain());
        case 1:
            // firstlast
            return name.split(' ')[0].concat(name.split(' ')[1]).concat(getEmailDomain());
        case 2:
        default:
            // flast
            const firstInitial = name.split(' ')[0].split('')[0];
            return firstInitial.concat(name.split(' ')[1]).concat(getEmailDomain());
    }
}
