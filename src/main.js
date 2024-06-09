import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

// Import the router
import { createRouter, createWebHistory } from 'vue-router'
import View from "./views/View.vue"
import SignUpOrLogin from "./views/SignUpOrLogin.vue"

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const routes = [
    { path: '/', component: SignUpOrLogin },
    { path: '/view', component: View,  },
    { path: '/log-in-sign-up', component: SignUpOrLogin },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


const vuetify = createVuetify({
    components,
    directives,
})

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(vuetify)
app.mount('#app')