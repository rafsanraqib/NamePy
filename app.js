// let n1 = "abdullah"
// let n2 = "isa"
// let n3 = "hamza"
// let n4 = "aunt"
// let n5 = "uncle"
// let n6 = "dad"
// let n7 = "mom"
// let n8 = "cousin"
// let n9 = "dadu"
// let n10 = "chacchi"
// let n11 = "bhabi"
// let n12 = "bhaiya"
// let n13 = "baba"
// let n14 = "ammu"
// let default = "quit"
// let blank = ""

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#s').disabled = true;
  document.querySelector('#name').onkeyup = () => {
  if (document.querySelector('#name').value.length > 0)
    document.querySelector('#s').disabled = false;
  else
    document.querySelector('#s').disabled = true;

  };

  document.querySelector('#submit-name').onsubmit = () => {
    let x = document.querySelector('#name').value;
    name_length = document.querySelector('#name').value.length - 1;
    result = "";
    if (x[name_length] == 'a') {
      result =  "That is a girl Mashaallah!";
    }else {
      result = "That is a boy Mashaallah!";
    }
    document.getElementById("N").innerHTML = result;
    return false;
  }
});
