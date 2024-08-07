<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { reactive } from 'vue';
import { SITE_INFO } from './queries';

const state = reactive({
  mySite: null,
})

const created = async () => {
  const siteInfo = await this.$apollo.query({
    query: SITE_INFO,
  });
  state.mySite = siteInfo.data.site;
  console.log(state.mySite);
}

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home </RouterLink>
        <RouterLink to="/category">Category </RouterLink>
        <RouterLink to="/tag">Tag </RouterLink>
        <RouterLink to="/post">Post </RouterLink>
        <RouterLink to="/categories">Categories </RouterLink>
        <RouterLink to="/tags">Tags </RouterLink>
      </nav>
      
    </div>
  </header>

  <RouterView />
</template>