let btnEnviar = document.getElementById("enviar");
let data1 = document.getElementById("data1");
let data2 = document.getElementById("data2");
let data3 = document.getElementById("data3");

btnEnviar.addEventListener("click", () => {
  if (
    Number(data1.value) >= Number(data2.value) &&
    Number(data1.value) >= Number(data3.value)
  ) {
    console.log("El mayor valor es", data1.value);
  } else {
    if (
      Number(data2.value) >= Number(data1.value) &&
      Number(data2.value) >= Number(data3.value)
    ) {
      console.log("El mayor es", data2.value);
    } else {
      console.log("el mayor es:", data3.value);
    }
  }
});
