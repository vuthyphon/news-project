// src/views/PostForm.vue
<template>
  <div class="p-4 max-w-2xl mx-auto">
    <h2 class="text-xl font-bold mb-4">{{ isEdit ? 'Edit' : 'Create' }} Post</h2>
    <form @submit.prevent="submit">
      <input v-model="form.title" type="text" placeholder="Title" class="input" />
      <textarea v-model="form.body" placeholder="Body" class="input h-32"></textarea>
      <input v-model="form.slug" type="text" placeholder="Slug" class="input" readonly />

      <select v-model="form.category_id" class="input">
        <option value="">Select Category</option>
        <option v-for="cat in categories" :value="cat.id" :key="cat.id">{{ cat.name }}</option>
      </select>

      <div class="mb-4">
        <label class="block mb-1">Tags</label>
        <div class="flex flex-wrap gap-2">
          <label v-for="tag in tags" :key="tag.id" class="inline-flex items-center">
            <input type="checkbox" :value="tag.id" v-model="form.tags" class="mr-2" /> {{ tag.name }}
          </label>
        </div>
      </div>

      <input type="file" @change="handleImage" class="input" />

      <button class="btn" type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '@/api'

const form = ref({
  title: '',
  body: '',
  slug: '',
  image: null,
  category_id: '',
  tags: []
})
const categories = ref([])
const tags = ref([])
const route = useRoute()
const router = useRouter()
const isEdit = !!route.params.id

watch(() => form.value.title, (val) => {
  form.value.slug = val.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
})

const handleImage = e => {
  form.value.image = e.target.files[0]
}

onMounted(async () => {
  categories.value = (await api.get('/categories')).data
  tags.value = (await api.get('/tags')).data

  if (isEdit) {
    const res = await api.get(`/posts/${route.params.id}`)
    Object.assign(form.value, res.data)
    form.value.tags = res.data.tags.map(t => t.id)
  }
})

const submit = async () => {
  const formData = new FormData()
  for (let key in form.value) {
    if (key === 'tags') {
      form.value.tags.forEach(tag => formData.append('tags[]', tag))
    } else {
      formData.append(key, form.value[key])
    }
  }

  if (isEdit) {
    await api.post(`/posts/${route.params.id}?_method=PUT`, formData)
  } else {
    await api.post('/posts', formData)
  }

  router.push('/')
}
</script>
