document.addEventListener("DOMContentLoaded", () => {

  // Función para obtener los tipos de cambio desde la API
  async function fetchExchangeRates(baseCurrency) {
    const apiEndpoint = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json`;

    try {
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        throw new Error("Failed to fetch exchange rates");
      }
      const data = await response.json();
      console.log("Fetched Exchange Rates:", data);
      return data.eur;
    } catch (error) {
      console.error("Error fetching exchange rates:", error.message);
      return null;
    }
  };

  //selección de los botones de moneda
  const currencyButtons = document.querySelectorAll(
    ".section3__currencySelector__buttonContainer__buttonSelector"
  );

  //función para manejar el clic en los botones
  async function handleCurrencyChange(event) {
    //obtener el valor del botón (eur, usd, gbp)
    const baseCurrency = event.target.value;

    try {
      //obtener los tipos de cambio usando fetchExchangeRates
      const exchangeRates = await fetchExchangeRates();
      if (exchangeRates) {
        //Recalcular y actualizar los precios en EUR, USD y GBP 
        updatePrices(exchangeRates, baseCurrency)
      }
    
    } catch (error) {
      console.error("Error", error);
    }
  };

  //definir símbolos con monedas
  const currencySymbols = {
    eur: '€',
    usd: '$',
    gbp: '£'
  }

  //Función actualizar precios
  function updatePrices(exchangeRates, baseCurrency) {
    //Seleccionar todos los precios
    const prices = document.querySelectorAll('.section3__card3__containerPrice__price');
    const pricesEur = [0, 25, 60];

    prices.forEach((element, index) => {
      let newPrice;
      if(baseCurrency === 'eur') {
        newPrice = pricesEur[index];
      } else if (baseCurrency === 'usd') {
        newPrice = (pricesEur[index] * exchangeRates.usd).toFixed(2);
      }else if (baseCurrency === 'gbp') {
        newPrice = (pricesEur[index] * exchangeRates.gbp).toFixed(2);
      }
      element.textContent = `${currencySymbols[baseCurrency]} ${newPrice}`;
    })
  }

  //agregar evento click a cada botón de moneda
  currencyButtons.forEach((button) => {
    button.addEventListener("click", handleCurrencyChange);
  });
});
