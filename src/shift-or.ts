

function shiftOr(text: string, pattern: string) {
    return new Promise((resolve, reject) => {
        let pos = bitap_search(text, pattern);
        resolve(pos);
    });
}

function bitap_search(text: string, pattern: string){
    const CHARACTER_MAX_VALUE:number = 65535;
    const MAX_PATTERN_LENGTH:number = 63;
    const m:number = pattern.length;
    let pattern_mask:number[] = new Array(CHARACTER_MAX_VALUE + 1);
    let R:number = ~1;        
    if (m == 0)
        return -1;
    if (m > MAX_PATTERN_LENGTH)
        return -1;
    

    for (let i = 0; i <= CHARACTER_MAX_VALUE; ++i)
        pattern_mask[i] = ~0;

    for (let i = 0; i < m; ++i)
           pattern_mask[pattern[i].charCodeAt(0)] &= ~(1 << i);

    for (let i = 0; i < text.length; ++i) 
    {
        R |= pattern_mask[text[i].charCodeAt(0)];
        R <<= 1;     
        if ((R & (1 << m)) == 0)
             return i - m + 1;
    }
    return -1;
}

export { shiftOr }