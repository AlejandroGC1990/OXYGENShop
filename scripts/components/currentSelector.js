//definir símbolos con monedas
const currencySymbols = {
  eur: "€",
  usd: "$",
  gbp: "£",
};

// Función para obtener los tipos de cambio desde la API
async function fetchExchangeRates(baseCurrency) {
  const apiEndpoint = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json`;

  try {
    const response = await fetch(apiEndpoint);
    if (!response.ok) {
      throw new Error("Failed to fetch exchange rates");
    }
    const data = await response.json();
    return data.eur;
  } catch (error) {
    console.error("Error fetching exchange rates:", error.message);
    return null;
  }
}

//selección de los botones de moneda
const currencyButtons = document.querySelectorAll(
  ".section3__currencySelector__buttonContainer__buttonSelector"
);

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
async function handleCurrencyChangeSelector(event) {
  const baseCurrency = event.target.value;

  try {
    const exchangeRates = await fetchExchangeRates();
    if (exchangeRates) {
      updatePrices(exchangeRates, baseCurrency);
    }
  } catch (error) {
    console.error("Error", error);
  }
}

//agregar evento click a cada botón de moneda
currencyButtons.forEach((button) => {
  button.addEventListener("click", handleCurrencyChangeSelector);
});