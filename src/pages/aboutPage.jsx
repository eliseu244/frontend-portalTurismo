import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import bgAbout from "../assets/imagens/Zoológico.jpg";
import AboutHero from "../components/aboutHero";



const AboutPage = () => {
    return (
        <>

            <div className="flex flex-col min-h-screen">
                <Navbar />
            </div>

            <AboutHero
                img={bgAbout}
                titulo="nossa experiencia fazendo os site de nova serra verde"/>
        <div>

            </div>
            <Footer />
       
        </>

    )

}

export default AboutPage;