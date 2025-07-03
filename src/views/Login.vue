// src/views/LoginView.vue
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Admin Login</h2>
      <form @submit.prevent="login">
        <input v-model="form.email" type="email" placeholder="Email" class="input" />
        <input v-model="form.password" type="password" placeholder="Password" class="input" />
        <button type="submit" class="btn">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '@/api'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref({ email: '', password: '' })

const login = async () => {
  const res = await api.post('/login', form.value)
  localStorage.setItem('token', res.data.token)
  router.push('/')
}
</script>

<style scoped>
.input {
  @apply border p-2 rounded w-full mb-4;
}
.btn {
  @apply bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full;
}
</style>