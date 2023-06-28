<template>
    <div class="container-fluid text-center">
        <div class="bg-primary text-white m-2 p-3">
            <h3>Product: <span v-text="name"></span></h3>
            <ul class="text-left">
                <li>List item</li>
                <template v-if="showElements">
                    <li>{{name}}</li>
                    <li>{{price}}</li>
                </template>
                <li>Other list item</li>
            </ul>
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