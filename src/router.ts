import { createRouter, createWebHistory } from 'vue-router'
import ArticlesList from './components/alp/ArticlesList.vue';
import ArticleDerail from './components/adp/ArticleDetail.vue';



// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: ArticlesList, name: 'home' },
    { path: '/post/:id', component: ArticleDerail, name: 'post' },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router