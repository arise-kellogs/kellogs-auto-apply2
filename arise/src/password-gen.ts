export const generatePasswordFromName = (name: string) => {
    const [first, last] = name.split(' ');
    return first.toLowerCase()
        .concat(last.toUpperCase())
        .substring(0, 15)
        .concat('1!');
}
