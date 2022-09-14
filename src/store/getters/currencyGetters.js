const currencyGetters = {
  currency(state) {
    return state.currency;
  },
  allCurrenciesInfo(state) {
    return state.allCurrenciesInfo;
  },
  selectedCurrencyCods(state) {
    return state.selectedCurrencyCods;
  },
};

export default currencyGetters;
