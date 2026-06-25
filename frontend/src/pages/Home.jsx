import { useEffect, useState } from "react";
import axios from "axios";

import "../styles/pages/home.css";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";

function Home() {

   const [heroContent, setHeroContent] = useState(null);

   useEffect(() => {

      axios
         .get(
            "http://localhost:8000/admin/site-content"
         )
         .then((res) => {

            const home =
               res.data.find(
                  item =>
                  item.content_key === "home"
               );

            setHeroContent(home);

         });

   }, []);

   return (

      <div className="home-page">

         <Navbar />

         <HeroSection
            title={heroContent?.title}
            description={heroContent?.content}
         />

      </div>

   );

}

export default Home;