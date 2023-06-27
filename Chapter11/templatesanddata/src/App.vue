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
        let tp = this.price + (this.price * (this.lowTaxRate / 100));
        return tp;
    },
    highTotalPrice: function() {
        let tp = this.price + (this.price * (this.highTaxRate / 100));
        return tp;
    }
  }
}
</script>