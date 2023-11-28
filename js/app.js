let tiempo;
let descontar = 0;

const iniciar = () => {
  let tiempoIngresado = document.getElementById("tiempoIngresado").value;
  if (tiempoIngresado && tiempoIngresado > 0) {
    descontar = parseInt(tiempoIngresado);
    tiempo = setInterval(actualizartiempo, 1000);
  } else {
    alert("ingrese un tiempo valido");
  }
};

const pausar = () => {
  clearInterval(tiempo);
};

const resetear = () => {
  clearInterval(tiempo);
  descontar = 0;
  document.getElementById("tiempoIngresado").value = "";
  document.getElementById("tiempo").innerText = "00";
};

const actualizartiempo = () => {
  if (descontar > 0) {
    descontar--;
    const segundos = descontar;
    const mostrarTiempo = `${segundos.toString().padStart(2, "0")}`;
    console.log(segundos);
    document.getElementById("tiempo").innerText = mostrarTiempo;
  } else {
    clearInterval(tiempo);
  }
};
