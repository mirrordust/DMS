<script setup lang="ts"></script>

<template>
  <div class="content-container">
    <div class="layout">
      <h2>About</h2>

      <div class="text">
        With the increasing complexity of global climate change, the establishment of
        <span>The Digital Meteorological Services Innovation Lab at HKUST Shanghai Center</span>
        builds a bridge between Shanghai and Hong Kong in terms of science, technology and
        innovation for meteorological services and sustainable development.
        <br />
        The Laboratory will continue to enhance the intelligent application of meteorological data
        and actively promote the transformation of scientific research results, so as to make
        greater contributions to the sustainable development of the society.
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-container {
  padding-top: 80px;
  padding-bottom: 90px;
  background-color: hsla(0, 0%, 98%, 1);
  padding-left: 6.25%;
  padding-right: 6.25%;
}

h2 {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0;
  color: hsla(254, 100%, 65%, 1);

  width: fit-content;
  padding: 12px 76.5px;
  background-color: hsla(261, 86%, 49%, 0.1);
  border-radius: 24px;
}

.text {
  font-weight: 400;
  font-size: 24px;
  line-height: 48px;
  letter-spacing: 0%;
  color: hsla(252, 45%, 6%, 1);
}

.text > span {
  font-weight: 500;
  font-size: 24px;
  line-height: 48px;
  letter-spacing: 0%;
  color: hsla(254, 100%, 65%, 1);
}

@media (min-width: 1024px) {
  .layout {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  h2 {
    margin-right: 80px;
  }

  .text {
    margin-right: 58px;
  }
}
</style>
