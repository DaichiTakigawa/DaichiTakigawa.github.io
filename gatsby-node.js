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
              content
            }
          }
        }
      }
    }
  `).then((result) => {
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      console.log(
        'slug',
        node.frontmatter.slug,
        'content',
        node.frontmatter.content
      );
      let component;
      if (node.frontmatter.content == 'react') {
        component = path.resolve('./src/templates/post-react-template.tsx');
      } else {
        component = path.resolve('./src/templates/post-template.tsx');
      }
      createPage({
        path: node.frontmatter.slug,
        component: component,
        context: {
          slug: node.frontmatter.slug,
        },
      });
    });
  });
};
