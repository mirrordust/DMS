<script setup lang="ts"></script>

<template>
  <div class="content-container">
    <h1>
      <span class="emphasize">Digital Meteorological</span> Services Innovation Lab <br />
      at HKUST <span class="emphasize">Shanghai</span> Centre
    </h1>

    <div class="background">
      <img src="/images/cover.png" class="cover" />
    </div>
  </div>
</template>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(/images/background.png);
  background-repeat: no-repeat;
  /* background-size: cover; */
}

h1 {
  font-family: 'REM';
  font-weight: 600;
  font-size: 36px;
  line-height: 72px;
  letter-spacing: 0;
  text-align: center;
  color: hsla(255, 53%, 6%, 1);
  padding-top: 202px;
  padding-bottom: 107px;
}

/* .decorate {
  position: relative;
}

.decorate::before {
  content: '';
  position: absolute;
  width: 383.54px;
  height: 212.93px;
  background: radial-gradient(
    77.11% 77.11% at 22.89% 54.76%,
    #f4bd33 0%,
    rgba(251, 81, 102, 0) 100%
  );
  opacity: 0.2;
  filter: blur(25px);
  transform: matrix(1, -0.07, -0.07, -1, 0, 0);
  top: -80px;
  left: -50%;
} */

h1 > .emphasize {
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
