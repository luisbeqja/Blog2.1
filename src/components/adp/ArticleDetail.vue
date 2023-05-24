<template>
  <div class="apd">
    <h3 class="apd--date text-center">{{ dataResultPosts.date }}</h3>
    <component
      v-for="item in dataResultPosts?.body?.children"
      :is="item.children[0].type === 'text' ? item.type : 'img'"
      :src="item.children[0].url"
      :class="[{ italic: item.children[0].italic }]"
    >
      {{ item?.children[0]?.text }}
    </component>
  </div>
</template>

<script setup lang="ts">
import { postQuery } from '../../graphql/api';
import { useQuery } from '@vue/apollo-composable';
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';

const route = useRoute();

const relativePath = route.params.id || '';

const dataResultPosts = computed(() => {
  const { result: resultPosts } = useQuery(postQuery, {
    relativePath: `${relativePath}.md`,
  });
  return resultPosts?.value?.post;
});

console.log(dataResultPosts);
</script>

<style scoped lang="scss">
.apd {
  max-width: 90rem;
  margin: auto;
  &--date {
    margin-top: 2rem;
    text-align: center;
  }
  h2 {
    color: rgb(0, 0, 0);
    font-size: 5rem;
    margin: 1rem 0;
  }
  p {
    margin: 1rem;
    font-size: 1.4rem;
    text-align: left;
    &.italic {
      margin-bottom: 2rem;
      text-align: center;
      font-style: italic;
    }
  }
}
</style>
