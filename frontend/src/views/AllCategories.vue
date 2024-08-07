<script>
import { useQuery } from '@vue/apollo-composable';
import { ALL_CATEGORIES } from '@/queries';
import { RouterLink } from 'vue-router';
export default {
    setup() {
        const { result, loading, error } = useQuery(ALL_CATEGORIES, null, {
            fetchPolicy: 'no-cache'
        })

        return {
            result,
            loading
        }
    }
}

</script>

<template>
  <div class="flex flex-col place-content-center place-items-center">
    <div class="py-8 border-b-2">
      <h1 class="text-5xl font-extrabold">All Categories</h1>
    </div>
    <div v-if="loading">...</div>
    <div v-else>
        <div class="flex flex-wrap py-8">
        <RouterLink
            v-for="category in result.allCategories"
            :key="category.name"
            class="my-2 mr-5 text-sm font-medium uppercase text-teal-500 hover:underline hover:text-teal-700"
            :to="`/category/${category.slug}`"
            >{{ category.name }}</RouterLink>
        </div>
    </div>
  </div>
</template>