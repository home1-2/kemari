
function loadedJson(jsonData){
    let ranktable= $("#r-t")
    for (const once of jsonData) {
        ranktable.append(`<tr><td>${once.rank}</td><td>${once.name}</td><td>${once.score}</td>
                          <td>${once.time}</td></tr>`)
    }
}
const URL = "https://script.google.com/macros/s/AKfycbyDXA0mt_tW6u642qXtySBH1Re_aIi938t3gLT7HqIlYG-sc3uobuFqxl3n4d9emzd82A/exec";
$.getJSON(URL, loadedJson);
