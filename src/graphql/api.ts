import gql from 'graphql-tag';

export const postQuery = gql`
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
    date
  }
`;

export const postsList = gql`
  {
    postConnection {
      edges {
        node {
          id
          title
          imgSrc
          author
          date
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }  
        }
      }
    }
  }
`;