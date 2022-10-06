import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../../components/layout';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  console.log('hero_image', frontmatter.hero_image);
  const image = getImage(frontmatter.hero_image);
  console.log('image', image);
  return (
    <Layout>
      <GatsbyImage image={image} alt="Hero Image" />
      <h2>{frontmatter.title}</h2>
      <div>{frontmatter.date}</div>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
