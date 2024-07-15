//definir símbolos con monedas
const currencySymbols = {
  eur: "€",
  usd: "$",
  gbp: "£",
};
//selección de los botones de moneda
const currencyButtons = document.querySelectorAll(
  ".section3__currencySelector__buttonContainer__buttonSelector"
);

// Función para obtener los tipos de cambio desde la API
function fetchExchangeRates(baseCurrency) {
  const apiEndpoint = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json`;

  return fetch(apiEndpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch exchange rates");
      }
      return response.json();
    })
    .then((data) => data.eur)
    .catch((error) => {
      console.error("Error fetching exchange rates:", error.message);
      return null;
    });
}

//Función actualizar precios
function updatePrices(exchangeRates, baseCurrency) {
  const prices = document.querySelectorAll(
    ".section3__card3__containerPrice__price"
  );
  const pricesEur = [0, 25, 60];

  prices.forEach((element, index) => {
    let newPrice;
    if (baseCurrency === "eur") {
      newPrice = pricesEur[index];
    } else if (baseCurrency === "usd") {
      newPrice = (pricesEur[index] * exchangeRates.usd).toFixed(2);
    } else if (baseCurrency === "gbp") {
      newPrice = (pricesEur[index] * exchangeRates.gbp).toFixed(2);
    }
    element.textContent = `${currencySymbols[baseCurrency]} ${newPrice}`;
  });
}

//función para manejar el clic en los botones
function handleCurrencyChangeSelector(event) {
  const baseCurrency = event.target.value;

  fetchExchangeRates()
    .then((exchangeRates) => {
      if (exchangeRates) {
        updatePrices(exchangeRates, baseCurrency);
      }
    })
    .catch((error) => {
      console.error("Error", error);
    });
}

//agregar evento click a cada botón de moneda
currencyButtons.forEach((button) => {
  button.addEventListener("click", handleCurrencyChangeSelector);
});
