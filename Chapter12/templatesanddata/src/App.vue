<template>
    <div class="container-fluid text-center">
        <div class="bg-primary text-white m-2 p-3">
            <h3 v-if="showElements">Product: {{ name }}</h3>
            <h3 v-if="!showElements">Product: {{ price }}</h3>
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
        showElements: true
    }
  },
  methods: {
    handleClick() {
        this.showElements = !this.showElements;
    }
  }
}
</script>