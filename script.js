// DATOS: Tania Avila - 827625

let form = document.querySelector("form");
let input = document.querySelector("input");

form.addEventListener("submit",(e)=>{
  e.preventDefault()
  let valor = input.value
  
  let regexp = /^(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{12,}$/
  

  if (regexp.test(valor)) {
    console.log("Válido");
  } else {
    console.log("No Válido");
  }

} )

