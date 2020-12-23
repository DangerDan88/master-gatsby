import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'Slicks Slices',
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza in canada',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // this is the name of plugin you want
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '4se9l8e0',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
