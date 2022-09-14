<template>
  <a-table
    class="currency-table"
    :columns="this.getColumns"
    :data-source="currencies"
  >
    <template #price="{ value }">
      <span> {{ value || "none" }} </span>
    </template>
    <template #code="code">
      <a-button @click="deleteCurrencyCode(code)" type="danger"
        >Удалить</a-button
      >
    </template>
  </a-table>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    currencies: {
      required: true,
    },
  },
  computed: {
    getColumns: function () {
      return [
        {
          title: "Аббревиатура",
          dataIndex: "abbreviation",
          key: "abbreviation",
          responsive: ["xs", "sm"],
        },
        {
          title: "Название",
          dataIndex: "name",
          key: "name",
          responsive: ["xs", "sm"],
        },
        {
          title: "Цена BYN",
          dataIndex: "price",
          key: "price",
          slots: { customRender: "price" },
          responsive: ["xs", "sm"],
        },
        {
          title: "Колличество ед.",
          dataIndex: "scale",
          key: "scale",
          responsive: ["xs", "sm"],
        },
        {
          title: "Удалить",
          dataIndex: "code",
          key: "code",
          slots: { customRender: "code" },
          responsive: ["xs", "sm"],
        },
      ];
    },
  },
  methods: {
    ...mapActions(["deleteCurrency"]),
    deleteCurrencyCode(code) {
      const codeNumber = parseInt(code?.value);
      this.deleteCurrency(codeNumber);
    },
  },
  name: "CurrencyTable",
};
</script>

<style scoped lang="scss">
.currency-table {
}
</style>
