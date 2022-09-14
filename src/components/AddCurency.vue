<template>
  <div class="add-currency">
    <a-select
      @select="changeSelectedCurrency"
      size="large"
      class="currency-select"
      placeholder="Выберите валюту"
    >
      <a-select-option
        v-for="currency in allCurrenciesInfo"
        :value="currency.name"
        :key="currency.code"
        :title="currency.name"
      />
    </a-select>
    <a-button
      v-if="!allCurrenciesInfo.length"
      type="primary"
      size="large"
      loading
      >Загрузка...</a-button
    >
    <a-button v-else @click="addCurrencyCode" size="large" type="primary">
      Добавить валюту
    </a-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AddCurency",
  data() {
    return {
      selectedCurrency: null,
    };
  },
  computed: {
    ...mapGetters(["allCurrenciesInfo"]),
  },
  mounted() {
    this.fetchAllCurrenciesInfo();
  },
  methods: {
    ...mapActions(["fetchAllCurrenciesInfo", "setCurencyCode"]),
    changeSelectedCurrency(_, currency) {
      this.selectedCurrency = currency;
    },
    addCurrencyCode() {
      const code = parseInt(this.selectedCurrency?.key);
      if (code) {
        this.setCurencyCode(code);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.add-currency {
  margin: 0.5rem 1rem;
  display: flex;
  justify-content: right;
  .currency-select {
    overflow: auto;
    min-width: 5vw;
    margin-right: 1rem;
  }
}
</style>
