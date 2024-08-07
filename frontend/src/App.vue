<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, reactive } from 'vue';
import { SITE_INFO } from './queries';
import { useQuery } from '@vue/apollo-composable';

const siteInfo = reactive({
  info: null,
  menuOpen: false,
})



onMounted(() => {
  const { result, loading, error } = useQuery(
    SITE_INFO,
    null,
    {
      fetchPolicy: 'no-cache'
    }
  )

  siteInfo.info = result
})

const clicked = async () => {
  console.log('you clicked me')
  console.log(siteInfo.info.site)
}
</script>

<template>
  <div class="container mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="flex flex-col justify-between h-screen">
      <header class="flex flex-row items-center justify-between py-10">
        <div class="nav-logo text-2xl font-bold">
          <a href="/">My Site</a>
        </div>
        <div class="nav-links hidden sm:block">
          <RouterLink
            to="/"
            class="mx-2 font-sans font-medium hover:underline hover:text-teal-700"
          >Home</RouterLink>
          <RouterLink
            to="/categories"
            class="mx-2 font-sans font-medium hover:underline hover:text-teal-700"
          >Category</RouterLink>
          <RouterLink
            to="/tags"
            class="mx-2 font-sans font-medium hover:underline hover:text-teal-700"
          >Tags</RouterLink>
          <RouterLink
            to="/signup"
            class="mx-2 font-sans font-medium hover:underline hover:text-teal-700"
          >Sign Un</RouterLink>
          <RouterLink
            to="/"
            class="mx-2 font-sans font-medium hover:underline hover:text-teal-700"
          >Profile</RouterLink>
          <RouterLink
            to="/"
            class="mx-2 font-sans font-medium hover:underline hover:text-teal-700"
          >Sign Out</RouterLink>
        </div>
        <div class="sm:hidden">
          <button
            type="button"
            class="ml-1 mr-1 h-8 w-8 rounded py-1"
            aria-label="Toggle Menu"
            @click="siteInfo.menuOpen = !siteInfo.menuOpen"
          >
            <i v-if="siteInfo.menuOpen" class="fa-solid fa-xmark"></i>
            <i v-else class="fa-solid fa-bars"></i>
          </button>
          <div
            :class="{ 'translate-x-full': !siteInfo.menuOpen }"
            class="fixed top-24 right-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800"
          >
            <nav
              class="fixed mt-8 w-full h-full flex flex-col space-y-2"
              @click="siteInfo.menuOpen = !siteInfo.menuOpen"
            >
              <RouterLink
                to="/"
                class="pl-4 text-xl font-sans font-medium hover:underline hover:text-teal-700"
              >Home</RouterLink>
              <RouterLink
                to="/categories"
                class="pl-4 text-xl font-sans font-medium hover:underline hover:text-teal-700"
              >Category</RouterLink>
              <RouterLink
                to="/tags"
                class="pl-4 text-xl font-sans font-medium hover:underline hover:text-teal-700"
              >Tags</RouterLink>
              <RouterLink
                to="/"
                class="pl-4 text-xl font-sans font-medium hover:underline hover:text-teal-700"
              >Sign In</RouterLink>
              <RouterLink
                to="/"
                class="pl-4 text-xl font-sans font-medium hover:underline hover:text-teal-700"
              >Sign Out</RouterLink>
              <RouterLink
                to="/"
                class="pl-4 text-xl font-sans font-medium hover:underline hover:text-teal-700"
              >Profile</RouterLink>
              <a 
                href="/"
                class="pl-4 text-xl font-sans font-medium hover:underline hover:text-teal-700">
                Home
              </a>
            </nav>
          </div>
        </div>
      </header>
      <button @click="clicked">click me</button>
      <RouterView />

      <footer class="flex flex-col place-items-center mt-5 py-5 border-t-2">
        <div class="mb-3 flex space-x-4">
          <i
            class="fa-brands fa-linkedin text-3xl text-gray-700 hover:text-teal-700"
          ></i>
          <i
            class="fa-brands fa-facebook-square text-3xl text-gray-700 hover:text-teal-700"
          ></i>
          <i
            class="fa-brands fa-twitter-square text-3xl text-gray-700 hover:text-teal-700"
          ></i>
          <i
            class="fa-brands fa-google-plus-square text-3xl text-gray-700 hover:text-teal-700"
          ></i>
          <i
            class="fa-brands fa-github-square text-3xl text-gray-700 hover:text-teal-700"
          ></i>
          <i
            class="fa-brands fa-dev text-3xl text-gray-700 hover:text-teal-700"
          ></i>
        </div>
        <div class="mb-3 flex space-x-1 text-sm text-gray-700">
          <div>
            <a
              href="https://www.ericsdevblog.com"
              class="hover:underline hover:text-teal-700"
              >Eric Hu</a
            >
          </div>
          <div>•</div>
          <div>© 2022</div>
          <div>•</div>
          <a href="/" class="hover:underline hover:text-teal-700"
            >Vue.js Starter Blog</a
          >
        </div>
      </footer>
    </div>
  </div>
</template>