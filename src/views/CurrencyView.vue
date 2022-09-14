<template>
  <a-grid align="middle" justify="center">
    <div class="content">
      <a-typography-title>Курсы валют:</a-typography-title>
      <currency-table :currencies="this.currency ?? []" />
      <add-curency />
    </div>
  </a-grid>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CurrencyTable from "@/components/CurrencyTable";
import AddCurency from "@/components/AddCurency";

export default {
  name: "CurrencyView",
  components: { AddCurency, CurrencyTable },
  mounted() {
    this.fetchCurrency();
  },
  computed: {
    ...mapGetters(["currency"]),
  },
  methods: {
    ...mapActions(["fetchCurrency"]),
  },
};
</script>

<style lang="scss">
.content {
  width: 50vw;
  margin: 2rem auto;
  border: 0.3rem solid #cacaca;

  @media (min-width: 300px) and (max-width: 768px) {
    min-width: 160vw;
  }
  @media (min-width: 800px) and (max-width: 1200px) {
    min-width: 120vw;
  }
}
</style>
