<template>
  <div class="apl w-full flex flex-col items-center">
    <div class="apl--card w-full" v-for="data in dataResultPosts">
      <ArticleCard :title="data.node.title" :author="data.node.author ?? 'luis'" :imgSrc="data.node.imgSrc" :url="data.node._sys.filename" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { postsList } from '../../graphql/api';
import { useQuery } from '@vue/apollo-composable';
import { computed } from '@vue/reactivity';
import ArticleCard from './ArticleCard.vue';

const { result: resultPosts } = useQuery(postsList);
const dataResultPosts = computed(() => {
  return resultPosts.value?.postConnection?.edges;
});

console.log(dataResultPosts);
</script>

<style lang="scss" scoped>
.apl {
  &--card {
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    max-width: 72.8rem;
  }
}
</style>
