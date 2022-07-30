// function f(){ 
//     console.log(127);
// }
// function g(x) {
//     console.log(x);
    
// }  
// function kaijyooo(s) {
//     let x=1;
//     for (let i = 1; i <= s ; i++) {
//          x=x*i;       
//     }
//     return x;
// }
// function startUp() {
//   let h=$("#harada")
//  console.log(h);  
//  h.html("nagakura") 
// }
// $(startUp)
    // let aiuuee = [12,46,74,32,46];
    // console.log(aiuuee[0]);
function loadedJson(jsonData){
   let ranktable= $("#r-t")
for (const once of jsonData) {
    console.log(once.name);
    ranktable.append(`<tr><td>${once.rank}</td><td>${once.name}</td><td>${once.score}</td>
                      <td>${once.time}</td></tr>`)
}
}
const URL = "https://script.google.com/macros/s/AKfycbyDXA0mt_tW6u642qXtySBH1Re_aIi938t3gLT7HqIlYG-sc3uobuFqxl3n4d9emzd82A/exec";
$.getJSON(URL,loadedJson);
console.log(`sasas
${12%4}asas`);