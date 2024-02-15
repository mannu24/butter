/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.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
 */

import ExampleComponent from './components/ExampleComponent.vue';
import App from './components/App.vue';
const Vue = createApp(App);

const routes = [
    { path: '/butter', name: 'Home', component: ExampleComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) { return savedPosition }
        else { return { top: 0, behavior: 'smooth' } }
    }
})

Vue.use(router)
Vue.mount('#app');
