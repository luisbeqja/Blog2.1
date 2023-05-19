<template>
  <div class="article-card w-full flex justify-between item-center">
    <div class="article-card--text flex flex-col justify-center items-start">
      <p class="article-card--author mb-2">{{ author }}</p>
      <h3 class="article-card--title text-4xl">{{ title }}</h3>
      <p class="article-card--info text-left text-2xl mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam
        sunt ratione molestiae assumenda fugit cumque laudantium? Placeat vero
        rerum repudiandae aperiam doloremque delectus cumque asperiores iusto
        dolore, voluptates amet!
      </p>
    </div>
    <img class="article-card--img m-auto" :src="imgSrc" alt="cover" />
    <p class="absolute">25/02/2023</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Title',
    required: true,
  },
  author: {
    type: String,
    default: 'Autor',
    required: true,
  },
  imgSrc: {
    type: String,
    default: '/',
    required: true,
  },
});
</script>

<style scoped lang="scss">
.article-card {
  &--text {
    margin-top: 3rem;
  }
  &--author{
    background-color: aqua;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
    border-radius: 0.5rem;
  }
  &--title {
  }
  &--img {
    width: 11.2rem;
    height: 11.2rem;
    object-fit: cover;
  }
  &--info {
    max-width: 53rem;
    color: rgba(41, 41, 41, 0.7);
  }
}
</style>
