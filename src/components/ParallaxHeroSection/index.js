import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import ForegroundHero from './ForegroundHero';
import BackgroundHero from './BackgroundHero';
import MidgroundHero from './MidgroundHero';

const StyledSVGWrapper = styled.div`
position: relative;
width: 50vw;
height: 30vw;
`

function ParallaxHeroSection() {
    const foregroundHeroRef = useRef();
    const backgroundHeroRef = useRef();

    useEffect(() => {
        const onMove = ({ clientX, clientY }) => {
            foregroundHeroRef.current.moveTo(clientX / 4, clientY / 8)
        };

        const onLeave = () => {
            foregroundHeroRef.current.moveTo(0, 0)
        };

        document.addEventListener("mousemove", onMove);
        document.body.addEventListener("mouseleave", onLeave);
        return () => {
            document.removeEventListener("mousemove", onMove);
            document.body.removeEventListener("mouseleave", onLeave);
        };

        
    }, []);
    return (
        <StyledSVGWrapper>
            <BackgroundHero />
            <MidgroundHero />
            <ForegroundHero ref={foregroundHeroRef} />
            
        </StyledSVGWrapper>
    );
}

export default ParallaxHeroSection;