export default class LocalStorageService {
  static #keys = {
    currency: "currency",
  };

  static setCurrency(arrayOfCurrency) {
    localStorage.setItem(this.#keys.currency, JSON.stringify(arrayOfCurrency));
  }

  static getCurrency() {
    const currency = localStorage.getItem(this.#keys.currency);
    if (currency) {
      return JSON.parse(currency);
    } else {
      this.setDefaultCurrency();
      return [431, 451, 190, 188, 224];
    }
  }

  static setDefaultCurrency() {
    this.setCurrency([431, 451, 190, 188, 224]);
  }
}
