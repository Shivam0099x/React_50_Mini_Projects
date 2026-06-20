export function checkHeading(str){
    return /^(\*)(\*)(.*)\*$/.test(str)
}

export function replaceStars(str){
    return str.replace(/^(\*)(\*)|(\*)$/g,'')
}