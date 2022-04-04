import path from 'path';

const gatsbyRequiredRules = path.join(
    process.cwd(),
    'node_modules',
    'gatsby',
    'dist',
    'utils',
    'eslint-rules',
);

module.exports = {
    /* Your site config here */
    plugins: [
        'gatsby-plugin-styled-components',
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                // Gatsby required rules directory
                rulePaths: [gatsbyRequiredRules],
            },
        },
    ],
};
