<script setup lang="ts"></script>

<template>
  <div class="content-container">
    <h1>
      <span>Digital Meteorological</span> Services Innovation Lab <br />
      at HKUST <span>Shanghai</span> Centre
    </h1>

    <div class="background">
      <img src="/images/background.png" class="cover" />
    </div>
  </div>
</template>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-family: 'REM';
  font-weight: 600;
  font-size: 36px;
  line-height: 72px;
  letter-spacing: 0;
  text-align: center;
  color: hsla(255, 53%, 6%, 1);
  padding-top: 94px;
  padding-bottom: 107px;
}

h1 > span {
  font-weight: 600;
  font-size: 52px;
  color: hsla(254, 100%, 65%, 1);
}

.background {
  width: min(100%, 1300px);
  overflow: hidden;
  border-radius: 32px;
  padding-bottom: 80px;
}

.cover {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

@media (min-width: 1024px) {
}
</style>
