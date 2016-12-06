export function truncate(str='', size=150){
    const newStr = str.slice(0, size).trim();

    if(newStr.length >= size){
        return newStr.replace(/(\s*\w*)$/m, '...');
    } else {
        return newStr;
    }
}

export function capitialize(str=''){
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

export function capitializeWords(words=''){
    return words
        .split(' ')
        .map(capitialize)
        .join(' ');
}