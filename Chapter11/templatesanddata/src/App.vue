<template>
  <div class="bg-primary text-white text-center m-2 p-3">
        <h3>Product: {{ name }}</h3>
        <h4>Price: ${{ lowTotalPrice.toFixed(2) }} </h4>
        <h4>Price: ${{ highTotalPrice.toFixed(2) }} </h4>
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
  computed: {
    lowTotalPrice: function() {
        return this.getTotalPrice(this.lowTaxRate);
    },
    highTotalPrice: function() {
        return this.getTotalPrice(this.highTaxRate);
    }
  },
  methods: {
    getTotalPrice(taxRate) {
        return this.price + (this.price * (taxRate / 100));
    }
  }
}
</script>