function kmp(text: string, pattern: string) {
    return new Promise((resolve, reject) => {
        const m = pattern.length;
        const n = text.length;

        const lps: number[] = new Array(m);
        let j = 0;

        computeLPSArray(pattern, m, lps);

        let i = 0;
        while (i < n) {
            if (pattern.charAt(j) === text.charAt(i)) {
                j++;
                i++;
            }
            if (j === m) {
                resolve(i - j);
                j = lps[j - 1];
            }
            else if (i < n && pattern.charAt(j) !== text.charAt(i)) {
                if (j !== 0) {
                    j = lps[j - 1];
                }
                else {
                    i = i + 1;
                }
            }
        }
        resolve(-1);
    });
}


function computeLPSArray(pat: string, M: number, lps: number[]) {
    let len = 0;
    let i = 1;
    lps[0] = 0;

    while (i < M) {
        if (pat.charAt(i) === pat.charAt(len)) {
            len++;
            lps[i] = len;
            i++;
        }
        else {
            if (len !== 0) {
                len = lps[len - 1];
            }
            else {
                lps[i] = len;
                i++;
            }
        }
    }
}

export { kmp }