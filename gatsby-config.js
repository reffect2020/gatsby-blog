module.exports = {
  siteMetadata: {
    title: 'はじめてのGatsby Site',
    author: 'Reffect',
    category: ['Svelte', 'Vue.js', 'React'],
    user: { name: 'John Doe', email: 'john@example.com' },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 200,
              showCaptions: true,
            },
          },
        ],
      },
    },
  ],
};
