import React from "react"
import "../styles/styles.scss"

//Import Components
import Header from "../components/header"
import Background from '../components/background'
import AboutMe from '../components/aboutMe'
import ContactMe from '../components/contactMe'

const IndexPage = () => (
 <div>
   <Header/>
   <Background/>
   <AboutMe/>
   <ContactMe/>
 </div>
)

export default IndexPage
