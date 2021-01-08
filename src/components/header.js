import { Link } from "react-scroll"
import React from "react"
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "Logo01.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
return(
  <header>
    <div className="container">
        <div className="inner-header">
          <div className="logo">
            <div className="logo-image">
              <Img fluid={data.placeholderImage.childImageSharp.fluid} />
            </div>
            <Link to="background" spy={true} smooth="easeOutCubic">Akhil Balachandran</Link>
          </div>
          <div className="navigation">
            <nav>
             <Link to="background" spy={true} smooth="easeOutCubic">Home</Link>
              <Link to="about-me" spy={true} smooth="easeOutCubic">About</Link>
              <Link to="contact-me" spy={true} smooth="easeOutCubic">Contact Me</Link>
            </nav>
          </div>
        </div>
    </div>
  </header>
)
  
}

export default Header
