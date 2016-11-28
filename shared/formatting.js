export function truncate(str='', size=150){
    const newStr = str.slice(0, size).trim();

    if(newStr.length >= size){
        return newStr.replace(/(\s*\w*)$/m, '...');
    } else {
        return newStr;
    }
};