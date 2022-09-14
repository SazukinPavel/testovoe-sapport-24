import { CurrencyService, LocalStorageService } from "@/services";

const currencyActions = {
  async fetchCurrency(ctx) {
    const currencies = await CurrencyService.getFullCurrencies(
      ctx.state.selectedCurrencyCods
    );
    ctx.commit("setCurrency", currencies);
  },
  async fetchAllCurrenciesInfo(ctx) {
    const currencies = await CurrencyService.fetchAllCurrenciesInfo();
    ctx.commit("setCurrenciesInfos", currencies);
  },
  async fetchOneCurrency(ctx, code) {
    const currency = await CurrencyService.getFullCurrency(code);
    ctx.commit("addCurrency", currency);
  },
  setCurencyCode(ctx, code) {
    LocalStorageService.setCurrencyCode([
      ...ctx.state.selectedCurrencyCods,
      code,
    ]);
    ctx.commit("addCurrencyCode", code);
    ctx.dispatch("fetchOneCurrency", code);
  },
  deleteCurrency(ctx, code) {
    LocalStorageService.setCurrencyCode(
      ctx.state.selectedCurrencyCods.filter((c) => c !== code)
    );
    ctx.commit("deleteCurrency", code);
  },
};

export default currencyActions;
