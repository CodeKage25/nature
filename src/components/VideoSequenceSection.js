import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { iphoneimages } from "../components/ImageSequence";

gsap.registerPlugin(ScrollTrigger);

const StyledVideoSequenceSection = styled.div`
  background: #080f0f;
  width: 100%;
  position: relative;
  .videosequence__wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
  .videosequence__container {
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #080f0f;
    .videosequence__text {
      flex: 0 0 50%;
      max-width: 50%;
      h1 {
        font-size: 96px;
        line-height: 0.875;
        font-weight: 700;
        letter-spacing: 0.009em;
        color: #ffffff;
      }
      h2 {
        padding-top: 10px;
        font-size: 26px;
        line-height: 1.15385;
        font-weight: 700;
        letter-spacing: 0.002em;
        margin-top: 8px;
        color: #ffffff;
      }
      a.videosequence__button {
        display: inline-block;
        padding: 1em 2em;
        margin: 7em 0.5em 0.5em 0;
        border-radius: 2em;
        text-decoration: none;
        font-weight: 400;
        color: #080f0f;
        background-color: #00efeb;
        text-align: center;
        transition: all 0.6s;
        &:hover {
          background-color: #00bcb9;
        }
      }
    }
    .videosequence__image {
      position: relative;
      flex: 0 0 50%;
      canvas {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        max-width: 80vw;
        max-height: 80vh;
      }
    }
  }
`;

function VideoSequenceSection() {
  const videoSequenceTriggerRef = useRef();
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = 851;
    canvas.height = 1200;

    const frameCount = 71;
    const currentFrame = (index) => {
      return iphoneimages[index];
      // console.log(iphoneimages[0]);
    };

    const images = [];

    const iphone = {
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
      // console.log(currentFrame(0));
      // console.log(img);
    }
    // console.log(images[0]);

    gsap.to(iphone, {
      frame: frameCount - 1,
      snap: "frame",
      scrollTrigger: {
        trigger: videoSequenceTriggerRef.current,
        start: "center center",
        end: () => "+=" + videoSequenceTriggerRef.current.offsetHeight,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        // markers: true,
      },
      onUpdate: updateImage, // use animation onUpdate instead of scrollTrigger's onUpdate
    });

    images[0].onload = updateImage;

    function updateImage() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[iphone.frame], 0, 0);
    }
  }, []);

  return (
    <StyledVideoSequenceSection ref={videoSequenceTriggerRef}>
      <div className="videosequence__wrapper">
        <div className="videosequence__container">
          <div className="videosequence__text">
            <h1>ZER&Oslash;</h1>
            <h2>
              How big is your
              <br />
              environmental footprint?
              <br />
              The app for Cutting Carbon
              <br /> and Caring for the Climate
            </h2>
            <a href="google.com" className="videosequence__button">
              Download
            </a>
          </div>
          <div className="videosequence__image">
            <canvas ref={canvasRef} />
          </div>
        </div>
      </div>
    </StyledVideoSequenceSection>
  );
}
export default VideoSequenceSection;
