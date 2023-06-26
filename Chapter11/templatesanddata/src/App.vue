<template>
  <div class="bg-primary text-white text-center m-2 p-3">
        <h3>Product: {{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
        name: "Kayak"
    }
  }
}
</script>