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
        skills: file(relativePath: { eq: "skills.png" }) {
            childImageSharp {
                fluid(maxWidth: 550, quality: 90) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        skillsTitle: file(relativePath: { eq: "header-skills.png" }) {
            childImageSharp {
                fluid(maxWidth: 550, quality: 90) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        dp: file(relativePath: { eq: "me-ver2.png" }) {
            childImageSharp {
                fluid(maxWidth: 550, quality: 90) {
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
            Hello, I’m Akhil! I’m a full-stack developer based in Toronto. 
            I'm a passionate and hard-working individual with high attention to detail. <br/><br/>
            I've been programming for around 3 years and have picked up various languages like C++, C, 
            Java, and many more. In my free time, I like designing stuff. If you'd like to hire me, feel free to hit me up!
            </p>
            
          </div>
          
         </div>
         <div className="right-banner">
         <div className="skills-title">
                <Img fluid={data.skillsTitle.childImageSharp.fluid} />     
            </div> 
            <div className="skills-image">
                 <Img fluid={data.skills.childImageSharp.fluid} />
            </div>
            <div className="dp-image">
                 <Img fluid={data.dp.childImageSharp.fluid} />
            </div>
           
         </div>
          
         </div>
        </div>



    )


}

export default AboutMe