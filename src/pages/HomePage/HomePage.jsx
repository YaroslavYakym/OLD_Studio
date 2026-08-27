import "../../styles/global.css"
import "./HomePage.css";

import { Header, Sidebar, Footer, Preview, Servises, Description, Cases, Price, FAQ, Benefit, FullscreenModal } from "../../components"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

  return (
    <>
    <Header/>

    <div className="HomePage">
      <Preview/>

      <Servises/>
      
      <Cases/>

      <Description/>
      
      <Price/>
      
      <Benefit/>

      <FAQ id="faq"/>
      
    </div>

    <Footer/>
    </>
  );
}

export default HomePage;
