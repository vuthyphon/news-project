<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-bold">Posts</h1>
      <router-link to="/create" class="btn">+ Create</router-link>
    </div>
    <table class="table-auto w-full">
      <thead>
        <tr class="bg-gray-100">
          <th class="px-4 py-2">Title</th>
          <th class="px-4 py-2">Category</th>
          <th class="px-4 py-2">Author</th>
          <th class="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td class="border px-4 py-2">{{ post.title }}</td>
          <td class="border px-4 py-2">{{ post.category?.name }}</td>
          <td class="border px-4 py-2">{{ post.author?.name }}</td>
          <td class="border px-4 py-2">
            <router-link :to="`/edit/${post.id}`" class="text-blue-500">Edit</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import api from '@/api'

const posts = ref([])

onMounted(async () => {
  const res = await api.get('/posts')
  posts.value = res.data
})
</script>