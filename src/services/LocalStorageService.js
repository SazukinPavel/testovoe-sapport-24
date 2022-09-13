export default class LocalStorageService {
  static #keys = {
    currency: "currency",
  };

  static setCurrencyCode(arrayOfCurrency) {
    localStorage.setItem(this.#keys.currency, JSON.stringify(arrayOfCurrency));
  }

  static #getDefaultsCodes() {
    return [431, 451, 190, 188, 224];
  }

  static getCurrencyCodes() {
    const currency = localStorage.getItem(this.#keys.currency);
    if (currency) {
      return JSON.parse(currency);
    } else {
      this.setDefaultCurrencyCodes();
      return this.#getDefaultsCodes();
    }
  }

  static setDefaultCurrencyCodes() {
    this.setCurrencyCode(this.#getDefaultsCodes());
  }
}
