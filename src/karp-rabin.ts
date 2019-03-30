function karpRabin(text: string, pattern: string) {
    return new Promise((resolve, reject) => {
        const m = pattern.length;
        const n = text.length;
        let p = 0;
        let t = 0;
        let h = 1;
        const d = 256;
        const q = 101;
        let j = 0;

        for (let i = 0; i < m - 1; i++) {
            h = (h * d) % q;
        }

        for (let i = 0; i < m; i++) {
            p = (d * p + pattern.charCodeAt(i)) % q;
            t = (d * t + text.charCodeAt(i)) % q;
        }

        for (let i = 0; i <= n - m; i++) {
            if (p === t) {
                for (j = 0; j < m; j++) {
                    if (text.charCodeAt(i + j) !== pattern.charCodeAt(j)) {
                        break;
                    }
                }
                if (j === m) {
                    resolve(i);
                }
            }
            if (i < n - m) {
                t = (d * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;
                if (t < 0) {
                    t = (t + q);
                }
            }
        }
        resolve(-1);
    })
}

export { karpRabin }