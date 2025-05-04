<script setup lang="ts">
defineProps({
  image: {
    type: String,
    requird: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="news">
    <div class="image">
      <img :src="image" class="cover" />
    </div>

    <div class="detail">
      <div class="title">
        {{ title }}
      </div>
      <div class="date">
        {{ date }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.news {
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  box-shadow: 5px 5px 40px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  overflow: hidden;
  align-items: center;
  margin-top: 40px;
  width: 100%;
}

.image {
  max-width: 100%;
}

img {
  /* 消除基线间隙 */
  display: block;
  height: auto;
  max-width: 100%;
  object-fit: cover;
}

.detail {
  padding: 2px;
}

.title {
  font-weight: 700;
  font-size: 24px;
  /* line-height: 100%; */
  letter-spacing: 0px;
  color: #000000;
  padding-bottom: 16px;
}

.date {
  font-weight: 400;
  font-size: 20px;
  /* line-height: 100%; */
  letter-spacing: 0px;
  color: #000000;
}

@media (min-width: 1024px) {
  .detail {
    padding-left: 50px;
  }
}
</style>
