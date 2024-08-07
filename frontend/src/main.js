import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'
import router from './router'
import "./index.css"
// apollo client 
import { apolloClient } from '@/apollo-config';
const app = createApp({
    setup () {
      provide(DefaultApolloClient, apolloClient)
    },
  
    render: () => h(App),
});

app.use(router)
// app.use(apolloClient)
app.mount('#app')
