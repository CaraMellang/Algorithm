function solution(s) {
    return s.toLowerCase().split(" ").map((a)=>a.split("").map((b,i)=>(i % 2 === 0 ) ? b.toUpperCase() : b).join("")).join(" ");
}