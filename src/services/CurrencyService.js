import api from "@/api";

export default class CurrencyService {
  static #currencyInfoUrl = "exrates/currencies/";
  static #currencyPriceUrl = "exrates/rates/";

  static async getCurrencyInfo(code) {
    try {
      const response = await api.get(this.#currencyInfoUrl + code);
      return response;
    } catch (e) {
      return undefined;
    }
  }

  static async getCurrencyPrice(code) {
    try {
      const response = await api.get(this.#currencyPriceUrl + code);
      return response;
    } catch (e) {
      return undefined;
    }
  }

  static #constructCurrencyObject(price, info) {
    return {
      abbreviation: info?.Cur_Abbreviation,
      name: info?.Cur_Name,
      code: info?.Cur_ID,
      price: price?.Cur_OfficialRate,
      scale: info?.Cur_Scale,
    };
  }

  static #constructCurrencyObjects(prices, infos) {
    const currencyObjects = [];
    for (let index = 0; index < infos.length; index++) {
      currencyObjects[index] = this.#constructCurrencyObject(
        prices[index]?.data,
        infos[index]?.data
      );
    }
    return currencyObjects;
  }

  static #constructCurrencyInfos(currencies) {
    return currencies.map((c) => {
      return { name: c.Cur_Name, code: c.Cur_ID };
    });
  }

  static getManyCurrencyInfo(arrayOfCodes) {
    return Promise.all(arrayOfCodes.map((code) => this.getCurrencyInfo(code)));
  }

  static getManyCurrencyPrice(arrayOfCodes) {
    return Promise.all(arrayOfCodes.map((code) => this.getCurrencyPrice(code)));
  }

  static async getFullCurrencies(arrayOfCodes) {
    const prices = this.getManyCurrencyPrice(arrayOfCodes);
    const infos = this.getManyCurrencyInfo(arrayOfCodes);
    return this.#constructCurrencyObjects(await prices, await infos);
  }

  static async getFullCurrency(code) {
    const price = this.getCurrencyPrice(code);
    const info = this.getCurrencyInfo(code);
    return this.#constructCurrencyObject(
      (await price)?.data ?? undefined,
      (await info).data
    );
  }

  static async fetchAllCurrenciesInfo() {
    const currencies = await api.get(this.#currencyInfoUrl);
    return this.#constructCurrencyInfos(currencies.data);
  }
}
