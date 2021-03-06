import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const BeerGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const SingleBeerStyles = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: grid;
    align-items: center;
    font-size: 10px;
  }
`;

export default function BeersPage({ data }) {
  return (
    <div>
      <h1 className="center">
        We have {data.beers.nodes.length} Beers available. Dine in only.
      </h1>
      <BeerGridStyles>
        {data.beers.nodes.map((beer) => {
          const rating = Math.round(beer.rating.average);
          console.log(rating);
          return (
            <SingleBeerStyles key={beer.id}>
              <img src={beer.image} alt={beer.name} />
              <h2>{beer.name}</h2>
              {beer.price}
              <p title={`${rating} out of 5 stars`}>
                {`⭐`.repeat(rating)}
                <span style={{ filter: 'grayscale(100%' }}>
                  {`⭐`.repeat(rating)}
                </span>
                <span>{beer.rating.reviews}</span>
              </p>
            </SingleBeerStyles>
          );
        })}
      </BeerGridStyles>
    </div>
  );
}

export const query = graphql`
  query {
    beers: allBeer {
      nodes {
        name
        id
        price
        image
        rating {
          average
          reviews
        }
      }
    }
  }
`;
