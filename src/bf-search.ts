function bfSearch(text: string, pattern: string): Promise<number> {
    return new Promise((resolve, reject) => {
        let n = text.length;
        let m = pattern.length;
        let j;
        for (let i = 0; i <= (n - m); i++) {
            j = 0;
            while ((j < m) && (text[i + j] == pattern[j])) {
                j++;
            }
            if (j == m)
                resolve(i);
        }
        resolve(-1);
    });
}
export {bfSearch}