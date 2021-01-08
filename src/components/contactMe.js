import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const ContactMe = () => {
    const data = useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: { eq: "contact-me.png" }) {
            childImageSharp {
                fluid(maxWidth: 300, quality: 90) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
     }
  `)
    return (
        <div className="contact-me">
         <div className="container">
        
            
            <div className="contact-me-image">
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
            </div>
          
         </div>
        </div>



    )


}

export default ContactMe