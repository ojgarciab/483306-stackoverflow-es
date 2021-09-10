const response = {"estado": "0",
  "mensaje": "Ok",
  "detalle": {
    "Detalle": [
      {
        "countrY_LONG": "Afghanist\\u00E1n",
        "currencY_NAME": "Afghanistan Afghani"
      },
      {
        "countrY_LONG": "Afghanist\\u00E1n",
        "currencY_NAME": "D\u00F3lar estadounidense"
      },
      {
        "countrY_LONG": "Afghanist\\u00E1n US Military Base",
        "currencY_NAME": "D\\u00F3lar estadounidense"
      },
      {
        "countrY_LONG": "Per\\u00FA",
        "currencY_NAME": "Sol"
      }
    ]
  }
};

/* Generamos la salida en HTML previa */
response.detalle.Detalle.forEach(elemento => {
  resultado.innerText += elemento.countrY_LONG + ", "
    + elemento.currencY_NAME + "\n";
});

/* Corregimos el doble escapado */
const cadena_corregida = JSON.stringify(
  response.detalle.Detalle
).replace(/\\\\/g, "\\");

/* En stackoverflow no se puede usar "localStorage", por lo que
  tenemos que capturar el error que saldrá al no poder usarlo */
const lstCambioMoneda = JSON.parse((function() {
  try {
    /* Guardamos los datos en localStorage */
    localStorage.setItem("PaisesWU", cadena_corregida);
    /* Los restauramos y usamos para mostrar los datos */
    resultado.innerText += "Usando datos de localStorage\n\n";
    return String(localStorage.getItem("PaisesWU"));
  } catch {
    resultado.innerText += "Estamos en stackoverflow, usamos los datos directamente\n\n";
    return cadena_corregida;
  }
})());

/* Generamos la salida en HTML */
lstCambioMoneda.forEach(elemento => {
  resultado.innerText += elemento.countrY_LONG + ", "
    + elemento.currencY_NAME + "\n";
});
