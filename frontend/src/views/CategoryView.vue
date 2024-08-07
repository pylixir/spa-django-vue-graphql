<script>
import { useQuery } from '@vue/apollo-composable';
import { useRoute } from 'vue-router';
import { POSTS_BY_CATEGORY } from '@/queries';

export default {
    setup() {
        const route = useRoute();

        const category = route.params.category;

        const { result, loading } = useQuery(POSTS_BY_CATEGORY, {
            category: category
        },{
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
sfasdf
</template>