/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
import path from 'path'

const gatsbyRequiredRules = path.join(
    process.cwd(),
    'node_modules',
    'gatsby',
    'dist',
    'utils',
    'eslint-rules',
)

module.exports = {
    /* Your site config here */
    plugins: [
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                // Gatsby required rules directory
                rulePaths: [gatsbyRequiredRules],
            },
        },
    ],
}
