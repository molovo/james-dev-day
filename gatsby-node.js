const path = require('path')
const { graphql } = require('gatsby')

exports.onCreateWebpackConfig = async ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        ProjectRoot: path.resolve(__dirname, '.'),
      },
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
}
