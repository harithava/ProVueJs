<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col bg-dark text-white">
                <a class="navbar-brand">SPORTS STORE</a>
            </div>
        </div>
        <div class="row">
            <div class="col-3 bg-info p2">
                <CategoryControls/>
            </div>
            <div class="col-9 bg-success p-2">
                <product-list/>
            </div>
        </div>
    </div>
</template>

<script>
import ProductList from "./ProductList";
import CategoryControls from "./CategoryControls";

export default {
    components: { ProductList, CategoryControls }
}
</script>