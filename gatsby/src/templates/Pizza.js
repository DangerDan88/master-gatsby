import React from 'react';
import { graphql } from 'gatsby';

// TODO figure out how to display data about single pizza for page from graphql query without watching the video
export default function SinglePizzaPage({ pizza }) {
  console.log(pizza);
  console.log('pizza');

  return <p>Single Pizza</p>;
}

export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;
