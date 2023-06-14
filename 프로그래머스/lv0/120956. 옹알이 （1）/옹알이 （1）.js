function solution(babbling) {
    return babbling.filter(m => 
        ['aya','ye','woo','ma'].filter(f=> {
            const fir = m.indexOf(f);
            const sec = fir + f.length;
            return f === m.slice(fir , sec);
        }).join('').length === m.length).length;
}