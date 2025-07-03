<template>
  <div class="flex flex-col md:flex-row gap-4">
    <!-- Center Content (News Cards) -->
    <div class="flex-1 flex flex-col gap-4 mt-5">
      <div class="container mx-auto px-2 py-2 border-b-red-400 border-b-2 mb-4">
        <h1 class="text-xl mb-1">Latest News</h1>
      </div>
      <div class="flex flex-col md:flex-row gap-4">
        <!-- 🔳 Featured Blog (Right) -->
        <div class="w-full md:w-1/3 flex-shrink-0">
          <div class="bg-white shadow overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Featured News"
              class="w-full h-64 object-cover sm:flex-1/2"
            />
            <div class="sm:flex-1/2">
              <h2 class="text-2xl font-bold text-gray-800">Featured News Title</h2>
              <p class="mt-2 text-gray-600">This is the summary or intro paragraph of the featured blog post. Keep it short and engaging to draw the reader in.</p>
            </div>
          </div>
        </div>
        <!-- 📋 News List (Left) -->
        <div class="flex-1 space-y-3">
          <div
            v-for="(item, index) in newsList"
            :key="index"
            class="flex flex-row bg-white border-b-2 border-gray-100 overflow-hidden pb-3"
          >
            <img :src="item.image" alt="News Image" class="w-24 h-24 object-cover flex-shrink-0"/>
            <div class="p-2 flex-1 ">
              <h3 class="text-lg font-semibold text-gray-800">{{ item.title }}</h3>
              <p class="text-gray-600 mt-1">{{ item.summary }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-2 py-2 rounded-2xl border-gray-100 border-2 mb-4 justify-center">
        <h1 class="text-lg mb-1 text-center"><router-link to="/category">More >></router-link></h1>
      </div>
    </div>
    <!-- Right Side (Advertisement) -->
    <div class="hidden md:block md:w-1/5">
      <div class="bg-gray-100 h-full flex items-center justify-center p-4 rounded shadow">
        <span class="text-gray-500 text-center">Advertisement</span>
      </div>
    </div>
  </div>

</template>

<script setup>
const newsList = [
  {
    title: 'News Headline 1',
    summary: 'Brief summary for the first news item goes here.',
    image: 'https://dummyimage.com/400x300/cccccc/000000&text=News+1',
  },
  {
    title: 'News Headline 2',
    summary: 'Another short description for a different news item.',
    image: 'https://dummyimage.com/400x300/cccccc/000000&text=News+2',
  },
  {
    title: 'News Headline 3',
    summary: 'Quick intro to another article, maybe about tech or politics.',
    image: 'https://dummyimage.com/400x300/cccccc/000000&text=News+3',
  },
];
</script>
