import { Link } from "gatsby"
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
            <Link to="/">Akhil Balachandran</Link>
          </div>
          <div className="navigation">
            <nav>
              <Link to="/">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact Me</Link>
            </nav>
          </div>
        </div>
    </div>
  </header>
)
  
}

export default Header
