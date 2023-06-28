<template>
    <div class="container-fluid text-center">
        <div class="bg-primary text-white m-2 p-3">
            <h3 v-if="counter % 3 == 0 ">Product: {{ name }}</h3>
            <h3 v-else-if="counter % 3 == 1">Price: {{ price }}</h3>
            <h3 v-else>Category: {{ category }}</h3>
        </div>
        <button v-on:click="handleClick" class="btn btn-primary">
            Press Me
        </button>
    </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
        name: "Lifejacket",
        price: 275,
        category: "Watersports",
        counter: 0
    }
  },
  methods: {
    handleClick() {
        this.counter++;
    }
  }
}
</script>