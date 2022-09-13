import { CurrencyService, LocalStorageService } from "@/services";

const currencyActions = {
  async fetchCurrency(ctx) {
    const currencys = await CurrencyService.getMany(
      LocalStorageService.getCurrency()
    );
    ctx.commit("setCurrency", currencys);
  },
};

export default currencyActions;
