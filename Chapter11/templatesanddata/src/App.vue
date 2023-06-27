<template>
  <div class="bg-primary text-white text-center m-2 p-3">
        <h3>Product: {{ name }}</h3>
        <h4>Price: ${{ getTotalPrice(this.lowTaxRate).toFixed(2) }} </h4>
        <h4>Price: ${{ this.getTotalPrice(this.highTaxRate).toFixed(2) }} </h4>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
        name: "Kayak",
        price: 275,
        lowTaxRate: 12,
        highTaxRate: 20
    }
  },
  methods: {
    getTotalPrice(taxRate) {
        return this.price + (this.price * (taxRate / 100));
    }
  }
}
</script>