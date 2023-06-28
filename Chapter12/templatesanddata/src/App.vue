<template>
    <div class="container-fluid text-center">
        <div class="bg-primary text-white m-2 p-3">
            <h3>Product: <span v-text="name"></span></h3>
            <span v-text="fragment"></span>
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
        fragment: `<div class="form-group">
                     Password <input class="form-control"/>
                    </div>`
    }
  },
  methods: {
    handleClick() {
        // do nothing
    }
  }
}
</script>