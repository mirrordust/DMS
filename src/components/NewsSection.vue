<script setup lang="ts">
import { ref } from 'vue'
import { getNews } from '@/api/data'
import NewsItem from './NewsItem.vue'

const newsList = ref(getNews())
</script>

<template>
  <div class="content-container">
    <div class="layout">
      <h3>- NEWS -</h3>
      <h2>Events</h2>

      <!-- news list -->
      <NewsItem
        v-for="news in newsList"
        :key="news.id"
        :image="news.image"
        :title="news.title"
        :date="news.date"
      />
    </div>
  </div>
</template>

<style scoped>
.content-container {
  padding-top: 110px;
  padding-bottom: 160px;
  padding-left: 1px;
  padding-right: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.layout {
  width: 100%;
}

h3 {
  font-family: Poppins;
  font-weight: 400;
  font-size: 18px;
  /* line-height: 100%; */
  letter-spacing: 0px;
  color: #754bff;
  text-align: center;
}

h2 {
  font-family: Poppins;
  font-weight: 700;
  font-size: 36px;
  /* line-height: 100%; */
  letter-spacing: 0px;
  color: #0b0717;
  padding-top: 8px;
  padding-bottom: 20px;
  text-align: center;
}

@media (min-width: 1024px) {
  .content-container {
    padding-left: 155px;
    padding-right: 155px;
  }
}
</style>
