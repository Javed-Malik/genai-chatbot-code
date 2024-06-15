const result = document.getElementById("output");
const btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener("click", (e) => {

        btn_text = e.target.innerText;

        if (btn_text == "x") {
            btn_text == "*"
        }
    result.value += btn_text;
   })
}

function calculate(){
    try{
        result.value = eval(result.value);
    }catch(error){
        alert("invalid command")
    }
    }
    function allclear(){
        result.value = "";
    }

    function power(){
        result.value = Math.pow(result.value,2)
    }

    function del(){
        result.value = result.value.slice(0,-1)
    }
    function percentage() {
        result.value = (result.value*100).toFixed(2)
    }

    function log(){
        result.value = Math.log(result.value);
    }

    function exp(){
        result.value = Math.exp(result.value)
    }
    function pi(){
        result.value = Math.PI.ev(result.value)
    }

    function sin(){
        result.value = Math.cos(result.value)
    }
    function cos(){
        result.value = Math.cos(result.value)
    }
    function tan(){
        result.value = Math.tan(result.value)
    }

// btn.addEventListener('click', (e) => {
//     if (e.target.innerHTML == 'Del') {
//         string = string.substring(0, string.length - 1)
//         display.value = string;

//     } else if (e.target.innerHTML == 'AC') {
//         string = '';
//         display.value = string;
//     } else if (e.target.innerHTML == '=') {
//         string = eval(string);
//         display.value = string;
//     } else {
//         string += e.target.innerHTML;
//         display.value = string;
//     }
// });
//     });

// function sin() {
//     display.value = Math.sin(display.value)
// }

// function pi() {
//     display.value = Math.PI
// }
