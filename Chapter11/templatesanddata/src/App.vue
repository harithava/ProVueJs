<template>
  <div class="bg-primary text-white text-center m-2 p-3">
        <h3>Product: {{ name | capitalize | reverse }}</h3>
        <h4>Price: {{ getTotalPrice(lowTaxRate) | currency(3) }} (Low Rate) </h4>
        <h4>Price: {{ getTotalPrice(highTaxRate) | currency }} (High Rate) </h4>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
        name: "Lifejacket",
        price: 48.95,
        lowTaxRate: 12,
        highTaxRate: 20
    }
  },
  methods: {
    getTotalPrice(taxRate) {
        return this.price + (this.price * (taxRate / 100));
    }
  },
  filters: {
    currency(value, places) {
        return new Intl.NumberFormat( "en-US",
            { style: "currency", currency: "USD",
                minimumFractionDigits: places || 2,
                maximumFractionDigits: places || 2}).format(value);
    },
    capitalize(value) {
        return value[0].toUpperCase() + value.slice(1);
    },
    reverse(value) {
        return value.split("").reverse().join("");
    }
  }
}
</script>