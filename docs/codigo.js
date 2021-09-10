const datos = {"estado": "0",
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

/* Guardamos los datos en localStorage */
localStorage.setItem("PaisesWU", JSON.stringify(response.detalle.Detalle));

/* Los restauramos y usamos para mostrar los datos */
const lstCambioMoneda =  JSON.parse(String(localStorage.getItem("PaisesWU")));
lstCambioMoneda.detalle.Detalle.forEach(elemento => {
  resultado.innerText += elemento.countrY_LONG + ", "
    + elemento.currencY_NAME + "\n";
});
