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
        github: file(relativePath: { eq: "github.png" }) {
            childImageSharp {
                fluid(maxWidth: 300, quality: 90) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        linkedIn: file(relativePath: { eq: "linkedin1.png" }) {
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
            <div className="contact-box">
                <p>Phone: (437) 775-3174 <br/><br/>
                Email: akhilbal97@gmail.com</p>
            </div>
            <div className="github-image">
            <a href="https://github.com/akhilbal97" rel="noopener noreferrer" target="_blank">  <Img fluid={data.github.childImageSharp.fluid} /> </a>
            </div>
            <div className="linkedin-image">
            <a href="https://www.linkedin.com/in/akhilbal23/" rel="noopener noreferrer" target="_blank"> <Img fluid={data.linkedIn.childImageSharp.fluid}/> </a>
            </div>
            <div className="footer">
                <p>© Akhil Balachandran 2021</p>
            </div>
         </div>
        </div>



    )


}

export default ContactMe