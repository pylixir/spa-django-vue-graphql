<script>
import { USER_SIGNUP } from '@/mutations';
import { useMutation } from '@vue/apollo-composable'
import { ref } from 'vue';
export default {
    setup() {
        const username = ref('')
        const email = ref('')
        const password = ref('')

        const { mutate: userSignUp, onDone } = useMutation(USER_SIGNUP, () => ({
            variables: {
                username: username.value,
                email: email.value,
                password: password.value,
            }
        }))

        onDone((res) => {
            username.value = ''
            email.value = ''
            password.value = ''
            console.log(res.data);
        })

        return {
            username,
            email,
            password,
            userSignUp,
        }
    }
}
</script>
<template>
    <div class="mx-auto h-screen w-full sm:w-2/3 md:w-1/3">
    <form action="POST" @submit.prevent="userSignUp">
      <div class="bg-white rounded-xl w-full">
        <div class="space-y-4">
          <div>
            <label for="email" class="block mb-1 text-gray-600 font-medium"
              >Username</label
            >
            <input
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-300 focus:ring-opacity-50"
              v-model="username"
            />
          </div>
          <div>
            <label for="email" class="block mb-1 text-gray-600 font-medium"
              >Email</label
            >
            <input
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-300 focus:ring-opacity-50"
              v-model="email"
            />
          </div>
          <div>
            <label for="email" class="block mb-1 text-gray-600 font-medium"
              >Password</label
            >
            <input
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-300 focus:ring-opacity-50"
              v-model="password"
            />
          </div>
        </div>
        <button
          class="mt-4 w-full bg-teal-500 hover:bg-teal-700 focus:ring focus:ring-teal-100 text-white py-2 rounded-md text-lg tracking-wide"
        >
          Sign Up
        </button>
                <div class="text-right">
          <small
            >Already have an account? Try
            <router-link to="/signin" class="text-teal-500 hover:underline"
              >Sign In</router-link
            >
            first.</small
          >
        </div>
      </div>
    </form>
  </div>
</template>