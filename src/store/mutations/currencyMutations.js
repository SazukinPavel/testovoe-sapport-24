const currencyMutations = {
  setCurrency(state, currency) {
    state.currency = currency;
  },
  setCurrenciesInfos(state, currencys) {
    state.allCurrenciesInfo = currencys;
  },
  addCurrencyCode(state, code) {
    state.selectedCurrencyCods.push(code);
  },
  addCurrency(state, currency) {
    state.currency.push(currency);
  },
  deleteCurrency(state, code) {
    state.currency = state.currency.filter(
      (currency) => currency.code !== code
    );
    state.selectedCurrencyCods = state.selectedCurrencyCods.filter(
      (selCode) => selCode !== code
    );
  },
};

export default currencyMutations;
