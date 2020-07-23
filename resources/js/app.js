import Vue from 'vue'
import Heading from './components/Heading'
import App from './components/App'
Vue.component('heading', Heading)
const app = new Vue({
    el: '#app',

    render:h => h(App)
})
