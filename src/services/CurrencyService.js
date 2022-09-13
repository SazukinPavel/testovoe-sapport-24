import axios from "axios";

export default class CurrencyService {
  static getOne(id) {
    console.log(id);
    return axios.get("https://www.nbrb.by/api/exrates/currencies/" + id);
  }

  static #constructCurrencyObject(data) {
    return {
      abbreviation: data.Cur_Abbreviation,
      name: data.Cur_Name,
      code: data.Cur_Code,
    };
  }

  static async getMany(arrayOfId) {
    const currency = await Promise.all(arrayOfId.map((id) => this.getOne(id)));
    return currency.map((c) => this.#constructCurrencyObject(c.data));
  }
}
