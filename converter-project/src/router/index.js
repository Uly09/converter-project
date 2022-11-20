import { createRouter, createWebHashHistory } from 'vue-router'

const ConverterPage = { template: '<div>Converter</div>' }
const AuthPage = { template: '<div>Auth</div>' }
const RegisterPage = { template: '<div>Register</div>' }
const DemoPage = { template: '<div>Demo</div>' }

const routes = [
  { path: '/', component: ConverterPage },
  { path: '/login', component: AuthPage },
  { path: '/register', component: RegisterPage  },
  { path: '/demo', component: DemoPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = Vue.createApp({})
app.use(router)
app.mount('#app')
