<template>
  <div class="bg-primary text-white text-center m-2 p-3">
        <h3>Product: {{ name }}</h3>
        <h3>Price: ${{ totalPrice.toFixed(2) }} </h3>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
        name: "Kayak",
        price: 275,
        taxRate: 12
    }
  },
  computed: {
    totalPrice: function() {
        let tp = this.price + (this.price * (this.taxRate / 100));
        console.log(`Calculated: ${tp} (${this.taxRate })`)
        return tp;
    }
  }
}
</script>