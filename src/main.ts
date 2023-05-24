import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { DefaultApolloClient } from '@vue/apollo-composable'
import router from './router'

const httpLink = createHttpLink({
    uri: 'https://content.tinajs.io/1.4/content/b7355d82-be8e-46b9-862e-9a67345646c4/github/main',
})
const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})

createApp(App).use(router).provide(DefaultApolloClient, apolloClient).mount('#app')
