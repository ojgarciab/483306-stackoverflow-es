const response = {"estado": "0",
  "mensaje": "Ok",
  "detalle": {
    "Detalle": [
      {
        "countrY_LONG": "Afghanist\u00E1n",
        "currencY_NAME": "Afghanistan Afghani"
      },
      {
        "countrY_LONG": "Afghanist\u00E1n",
        "currencY_NAME": "D\u00F3lar estadounidense"
      },
      {
        "countrY_LONG": "Afghanist\u00E1n US Military Base",
        "currencY_NAME": "D\u00F3lar estadounidense"
      },
      {
        "countrY_LONG": "Per\u00FA",
        "currencY_NAME": "Sol"
      }
    ]
  }
};

/* En stackoverflow no se puede usar "localStorage", por lo que
  tenemos que capturar el error que saldrá al no poder usarlo */
const lstCambioMoneda = (function() {
  try {
    /* Guardamos los datos en localStorage */
    localStorage.setItem("PaisesWU", JSON.stringify(response.detalle.Detalle));
    /* Los restauramos y usamos para mostrar los datos */
    resultado.innerText += "Usando datos de localStorage";
    return JSON.parse(String(localStorage.getItem("PaisesWU")));
  } catch {
    resultado.innerText += "Estamos en stackoverflow, usamos los datos directamente\n\n";
    return response.detalle.Detalle;
  }
})();

/* Generamos la salida en HTML */
lstCambioMoneda.forEach(elemento => {
  resultado.innerText += elemento.countrY_LONG + ", "
    + elemento.currencY_NAME + "\n";
});