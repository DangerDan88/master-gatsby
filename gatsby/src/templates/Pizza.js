import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function SinglePizzaPage({ data }) {
  const { pizza } = data;
  console.log(pizza);

  return (
    <div>
      {pizza.name}
      <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
      <div>
        <Img fluid={pizza.image.asset.fluid} />
      </div>
    </div>
  );
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
