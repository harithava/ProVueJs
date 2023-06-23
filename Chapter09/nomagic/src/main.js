require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

import Vue from "vue"

new Vue({
    el: "#app",
    template:
        `<div class="text-center p-3">
            <h1 class="bg-secondary text-white p-3">
                Button Presses: {{ counter }}
            </h1>
            <button class="btn btn-secondary" v-on:click="handleClick">
                Press Me
            </button>
        </div>`,
    data: {
        counter: 0
    },
    methods: {
        handleClick() {
            this.counter++;
        }
    }
});

