import * as React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Img, {FluidObject} from 'gatsby-image';

type Props = {
  fileName: string;
  alt: string;
  style?: object;
};

type data = {
  image: {
    nodes: [
      {
        fluid: FluidObject;
      }
    ];
  };
};

const Image: React.FC<Props> = ({fileName, alt, style}) => {
  const {image}: data = useStaticQuery(graphql`
    query {
      image: allImageSharp {
        nodes {
          fluid {
            aspectRatio
            src
            srcSet
            sizes
            base64
          }
        }
      }
    }
  `);

  const {fluid} = image.nodes.find((n) => n.fluid.src.includes(fileName));

  if (!fluid) {
    return null;
  }

  return <Img fluid={fluid} alt={alt} style={style} />;
};

export default Image;
