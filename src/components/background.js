import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Background = () => {
    const data = useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: { eq: "mountains.png" }) {
            childImageSharp {
                fluid(maxWidth: 2048, quality: 90) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
     }
  `)
    return (
        <div className="background">
            <div className="container">
                <div className="row">
                <div className="main-text">
                    I'm Akhil,
                </div>
                <div className='sub-text'>
                        a full-stack developer
                    </div>
                </div>
                <div className="mountains-image">
                    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                </div>
                
            </div>
        </div> 
    )
}

export default Background