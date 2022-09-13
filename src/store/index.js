import { createStore } from "vuex";
import currencyModule from "@/store/modules/currencyModule";

export default createStore({
  modules: {
    currency: currencyModule,
  },
});
