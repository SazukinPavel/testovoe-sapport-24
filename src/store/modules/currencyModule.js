import currencyActions from "@/store/actions/currencyActions";
import currencyGetters from "@/store/getters/currencyGetters";
import currencyState from "@/store/states/currencyState";
import currencyMutations from "@/store/mutations/currencyMutations";

const currencyModule = {
  state: currencyState,
  actions: currencyActions,
  getters: currencyGetters,
  muttations: currencyMutations,
};

export default currencyModule;
