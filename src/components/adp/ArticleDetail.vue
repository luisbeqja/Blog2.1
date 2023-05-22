<template>
  <div>
    <h1>Page</h1>
    <p>{{ dataResultPosts.title }}</p>
    <component v-for="item in dataResultPosts.body.children" :is="item.type">
      {{ item.children[0].text }}
    </component>
  </div>
</template>

<script setup lang="ts">
import { postQuery } from '../../graphql/api';
import { useQuery } from '@vue/apollo-composable';
import { computed } from '@vue/reactivity';

const { result: resultPosts } = useQuery(
  postQuery,
  /* add variables */
  { relativePath: 'hello-world.md' }
);

const dataResultPosts = computed(() => {
  return resultPosts.value.post;
});

console.log(dataResultPosts);
</script>

<style scoped>
h2 {
  color: red;
  font-size: 34px;
}
</style>
