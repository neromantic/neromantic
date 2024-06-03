import {createApp} from 'vue'

import '@/scss/app.scss'
import 'bootstrap/dist/js/bootstrap.js'

import Tres from '@tresjs/core'

import App from '@/App.vue'
import router from "@/router.ts";

const app = createApp(App)
    .use(router)
    .use(Tres)

app.mount('#app')