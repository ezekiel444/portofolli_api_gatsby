/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
 require("dotenv").config({
  path: `.env`,
});

module.exports = {
  
  plugins: [
   
   
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        queryLimit: 5000, // Default to 100
        contentTypes: ["jobs", "projects","blogs"],
        singleTypes: ["about"],
      },
    },
    
  ],
}


