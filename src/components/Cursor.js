import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledCursor = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #ffffff;
  border-radius: 100%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 10;
  mix-blend-mode: difference;
  transition-property: opacity, background-color, transform;
  transition-duration: 500ms;
  transition-timing-function: ease;
`;

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    document.addEventListener("mousemove", _onMouseMove);
    document.body.addEventListener("mouseenter", _onMouseEnter);
    document.body.addEventListener("mouseleave", _onMouseLeave);
    document.addEventListener("mousedown", _onMouseDown);
    document.addEventListener("mouseup", _onMouseUp);
    handleLinkHoverEvents();

    return () => {
      document.removeEventListener("mousemove", _onMouseMove);
      document.body.removeEventListener("mouseenter", _onMouseEnter);
      document.body.removeEventListener("mouseleave", _onMouseLeave);
      document.removeEventListener("mousedown", _onMouseDown);
      document.removeEventListener("mouseup", _onMouseUp);
    };
  }, []);

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };

  const _onMouseMove = (e) => {
    // console.log("MouseMove")
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const _onMouseEnter = () => {
    // console.log("MouseEnter")
    setHidden(false);
  };

  const _onMouseLeave = () => {
    // console.log("MouseLeave")
    setHidden(true);
  };

  const _onMouseDown = () => {
    // console.log('MouseDown')
    setClicked(true);
  };

  const _onMouseUp = () => {
    // console.log('MouseUp')
    setClicked(false);
  };

  const getBackgroundColor = () => {
    if (clicked) {
      return "#ffffff";
    } else if (linkHovered) {
      return "#ffffff";
    } else {
      return "transparent";
    }
  };

  const setScaleLinkHovered = () => {
    if (clicked) {
      return "translate(-50%,-50%) scale(0.9)";
    } else if (linkHovered) {
      return "translate(-50%, -50%) scale(1.5)";
    } else {
      return "translate(-50%,-50%) scale(1)";
    }
  };

  if (typeof navigator !== "undefined" && isMobile()) return null;

  return (
    <StyledCursor
      style={{
        backgroundColor: getBackgroundColor(),
        transform: setScaleLinkHovered(),
        opacity: hidden ? 0 : 1,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}

export default Cursor;
