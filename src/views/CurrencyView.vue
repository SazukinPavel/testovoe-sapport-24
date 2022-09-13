<template>
  <a-grid align="middle" justify="center">
    <div class="content">
      <a-typography-title>Currency</a-typography-title>
      <currency-table :currencies="this.currency ?? []"></currency-table>
    </div>
  </a-grid>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CurrencyTable from "@/components/CurrencyTable";

export default {
  name: "CurrencyView",
  components: { CurrencyTable },
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

<style>
.content {
  width: 40vw;
  margin: 2rem auto auto;
  border: 0.3rem solid #cacaca;
}
</style>
