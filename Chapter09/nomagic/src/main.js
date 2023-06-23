//import Vue from 'vue'
//import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css";

//Vue.config.productionTip = false
//
//new Vue({
//  render: h => h(App),
//}).$mount('#app')

let counter = 1;

let container = document.createElement("div");
container.classList.add("text-center", "p-3");

let msg = document.createElement("h1");
msg.classList.add("bg-primary", "text-white", "p-3")
msg.textContent= "Button Not Pressed"

let button = document.createElement("button");
button.textContent = "Press Me";
button.classList.add("btn", "btn-secondary");
button.onclick = () => msg.textContent = `Button Presses: ${counter++}`;

container.appendChild(msg);
container.appendChild(button);

let app = document.getElementById("app");
app.parentElement.replaceChild( container, app);
