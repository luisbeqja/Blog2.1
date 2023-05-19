<template>
  <div>
    <h1>Page</h1>
  </div>
</template>

<script setup lang="ts">
import { postQuery } from '../../graphql/api';
import { useQuery } from '@vue/apollo-composable';
import { computed } from '@vue/reactivity';

const { result: resultPosts } = useQuery(postQuery);
const dataResultPosts = computed(() => {
  return resultPosts.value?.postConnection?.edges;
});

console.log(dataResultPosts.value);
</script>

<style scoped></style>
