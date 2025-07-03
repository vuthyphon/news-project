// src/views/TagList.vue
<template>
  <div class="p-4 max-w-xl mx-auto">
    <h2 class="text-xl font-bold mb-4">Tags</h2>
    <ul class="bg-white shadow rounded">
      <li v-for="tag in tags" :key="tag.id" class="p-2 border-b">{{ tag.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/api'

const tags = ref([])

onMounted(async () => {
  tags.value = (await api.get('/tags')).data
})
</script>