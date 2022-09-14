import { LocalStorageService } from "@/services";

const currencyState = () => ({
  currency: [],
  allCurrenciesInfo: [],
  selectedCurrencyCods: LocalStorageService.getCurrencyCodes(),
});

export default currencyState;
