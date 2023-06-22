process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let squere = ""
    
    for(let f = 1 ; f <= b; f++){
        for(let i = 1 ; i <= a; i++){
        squere += "*";
    }
        squere += "\n";
        
    }
    console.log(squere);
});