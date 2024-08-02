<script setup>
import { RouterLink, RouterView } from 'vue-router'
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