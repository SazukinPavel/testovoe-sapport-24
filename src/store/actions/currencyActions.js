import { CurrencyService, LocalStorageService } from "@/services";

const currencyActions = {
  async fetchCurrency(ctx) {
    const currencys = await CurrencyService.getFullCurrency(
      LocalStorageService.getCurrencyCodes()
    );
    ctx.commit("setCurrency", currencys);
  },
};

export default currencyActions;
