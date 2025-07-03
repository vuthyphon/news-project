// src/views/CategoryList.vue
<template>
  <div class="p-4 max-w-xl mx-auto">
    <h2 class="text-xl font-bold mb-4">Categories</h2>
    <ul class="bg-white shadow rounded">
      <li v-for="cat in categories" :key="cat.id" class="p-2 border-b">{{ cat.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/api'

const categories = ref([])

onMounted(async () => {
  categories.value = (await api.get('/categories')).data
})
</script>