<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import { computed } from '@vue/reactivity';
import gql from 'graphql-tag';
const postQuery = gql`
  query post($relativePath: String!) {
    post(relativePath: $relativePath) {
      ... on Document {
        _sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        id
      }
      ...PostParts
    }
  }
  fragment PostParts on Post {
    title
    body
  }
`;
const postsList = gql`
  {
    postConnection {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;
const { result } = useQuery(postQuery, {
  relativePath: 'hello-world.md',
});
const { result: resultPosts } = useQuery(postsList);
const dataPost = computed(() => {
  return result.value?.post?.body?.children;
});
const dataResultPosts = computed(() => {
  return resultPosts.value?.postConnection?.edges;
});

</script>

<template>

  <div v-for="data in dataResultPosts">
    <p>{{ data.node.title }}</p>
  </div>

  <div v-for="data in dataPost">
    <p>{{ data.type }}</p>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
