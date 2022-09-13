import api from "@/api";

export default class CurrencyService {
  static #currencyInfoUrl = "exrates/currencies/";
  static #currencyPriceUrl = "exrates/rates/";

  static getCurrencyInfo(code) {
    return api.get(this.#currencyInfoUrl + code);
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
      name: info.Cur_Name,
      code: info.Cur_Code,
      price: price?.Cur_OfficialRate,
      scale: info.Cur_Scale,
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

  static getManyCurrencyInfo(arrayOfCodes) {
    return Promise.all(arrayOfCodes.map((code) => this.getCurrencyInfo(code)));
  }

  static getManyCurrencyPrice(arrayOfCodes) {
    return Promise.all(arrayOfCodes.map((code) => this.getCurrencyPrice(code)));
  }

  static async getFullCurrency(arrayOfCodes) {
    const prices = this.getManyCurrencyPrice(arrayOfCodes);
    const infos = this.getManyCurrencyInfo(arrayOfCodes);
    return this.#constructCurrencyObjects(await prices, await infos);
  }
}
