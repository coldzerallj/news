import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import News from '../pages/news.vue'


Vue.use(VueRouter)

const routes = [
    {path: '/', component: Home},
    { path: '/home', component: Home },
    { path: '/news/:type/:id', component: News }
]

const router = new VueRouter({
    routes
})
 
router.afterEach((to,from,next) =>{
    window.scrollTo(0,0)
})


export default router 