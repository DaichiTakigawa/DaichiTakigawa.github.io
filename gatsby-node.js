const path = require(`path`);

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      console.log('slug', node.frontmatter.slug);
      createPage({
        path: node.frontmatter.slug,
        component: path.resolve('./src/templates/post-template.tsx'),
        context: {
          slug: node.frontmatter.slug,
        },
      });
    });
  });
};
