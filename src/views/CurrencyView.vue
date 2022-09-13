<template>
  <a-grid align="middle" justify="center">
    <div class="content">
      <a-typography-title>Currency</a-typography-title>
    </div>
  </a-grid>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CurrencyView",
  mounted() {
    this.fetchCurrency();
    console.log(this.currency);
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
