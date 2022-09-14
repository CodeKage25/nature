import logo from "./assets/logo.svg";
import styled from 'styled-components';
import ParallaxHeroSection from "./components/ParallaxHeroSection";

import ContentSection from "./components/ContentSection";
import CrossRevealSection from "./components/CrossRevealSection";
import ProductSection from "./components/ProductSection";

import Skincare from "../src/assets/images/Skincare.jpg";
import LandscapeL2 from "../src/assets/images/LandscapeL2.jpg";

import LandscapeL1 from "../src/assets/images/LandscapeL1.jpg";

const StyledHeroSection = styled.section`
position: relative;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

img{
  height: 25vmin;
  pointer-events: none;
}
`;

const StyledTitle = styled.h1`
color: black;
font-size: 2rem;
font-weight:400;
letter-spacing: 4px;
text-align: center;
text-transform: uppercase;
padding-top: 4rem;
`;




function App() {
  return (
    <>
    <StyledHeroSection>
        <img src={logo} alt="logo" />
        <StyledTitle>
          Healthy skin is a reflection of overall wellness.
      </StyledTitle>
      <ParallaxHeroSection />
      </StyledHeroSection>
      <ProductSection />
      
      <ContentSection title={"Skin Care"}
        text={"Asymmetrical vice humblebrag art party, sriracha dolor yes plz non gentrify. Praxis letterpress dolor hot chicken."}
      />

      <CrossRevealSection
        skin={Skincare}
        landscape={LandscapeL2}
        name={"Fleur Kaan"}
        job={"CEO"}
        sentenceOne={"Invest in your Skin."}
        sentenceTwo={"It's an investment."}
        crossreveal={"xPercent"}
      />

<ContentSection title={"Excellent Skin Product"}
        text={"Asymmetrical vice humblebrag art party, sriracha dolor yes plz non gentrify. Praxis letterpress dolor hot chicken."}
      />

<CrossRevealSection
        skin={Skincare}
        landscape={LandscapeL1}
        name={"Fleur Kaan"}
        job={"CEO"}
        sentenceOne={"Invest in your Skin."}
        sentenceTwo={"It's an investment."}
        crossreveal={"yPercent"}
      />
    </>
  )
};

export default App;
