import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './set-public-path'
import singleSpaVue from 'single-spa-vue';
import './plugins/iview.js'
import importDirective from '@/directive'


Vue.config.productionTip = false

importDirective(Vue)


const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        render: h => h(App),
        router,
        store
    },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

