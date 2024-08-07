import gql from "graphql-tag";

export const SITE_INFO = gql`
    query {
        site {
            name
            description
        }
    }
`;


export const POSTS_BY_CATEGORY = gql`
  query ($category: String!) {
    postsByCategory(category: $category) {
      title
      slug
      content
      isPublished
      isFeatured
      createdAt
    }
  }
`;

export const ALL_CATEGORIES = gql`
  query {
    allCategories {
      name
      slug
    }
  }
`;