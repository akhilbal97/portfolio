import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const AboutMe = () => {
    const data = useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: { eq: "about-me.png" }) {
            childImageSharp {
                fluid(maxWidth: 300, quality: 90) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
     }
  `)
    return (
        <div className="about-me">
         <div className="container">
          <div className="left-banner">
            
            <div className="about-me-image">
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
            </div>
            <div className="content">
           
            <p>
            Ahoy, I’m Akhil! I’m a full-stack developer based in Toronto. If you like to pay me for work, please reach out!
            </p>
          </div>
          
         </div>
         <div className="right-banner">

         </div>
          
         </div>
        </div>



    )


}

export default AboutMe