<template>
  <a-table :columns="this.getColumns" :data-source="currencies">
    <template #price="{ value }">
      <span> {{ value || "none" }} </span>
    </template>
  </a-table>
</template>

<script>
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
        },
        {
          title: "Название",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Цена BYN",
          dataIndex: "price",
          key: "price",
          slots: { customRender: "price" },
        },
        {
          title: "Колличество ед.",
          dataIndex: "scale",
          key: "scale",
        },
      ];
    },
  },
  name: "CurrencyTable",
};
</script>

<style scoped></style>
