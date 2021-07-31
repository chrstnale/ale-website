import React from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'

export default function Slider(props) {
  const settings = {

    //Lini Masa
    infinite: props.infinite,
    slidesToShow: props.slidesToShow,
    slidesToScroll: props.slidesToScroll,
    dots: props.dots,
    arrows: props.arrows,
    vertical: props.vertical,
    verticalSwiping: true,

    swipeToSlide: true,
    speed: 500,

    nextArrow: <NextArrow arrowColor={props.arrowColor} edgeSize={props.edgeSize} />,
    prevArrow: <PrevArrow arrowColor={props.arrowColor} edgeSize={props.edgeSize} />,

    responsive: [
      {
        breakpoint: 764,
        settings: {
          slidesToShow: props.slidesToShowMobile,
          slidesToScroll: props.slidesToScrollMobile,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: props.slidesToShowTablet,
          slidesToScroll: props.slidesToScrolllTablet
        }
      },
    ]

  };

  return (
    <Container>
      <Items>
        <Slick {...settings}>
          {props.children}
        </Slick>
      </Items>
    </Container>
  );
}

Slider.defaultProps = {
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  slidesToShowMobile: 1,
  slidesToScrollMobile: 1,
  slidesToShowTablet: 1,
  slidesToScrollTablet: 1,
  dots: true,
  vertical: false,

  arrowColor: 'var(--grey)',
  edgeSize: '-25px',

}

const Container = styled.div`
  box-sizing: border-box;
border-radius: 25px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding-bottom: 30px;
  .arrow {
    display:block;
  }
`;

const Items = styled.div`
  display: block;
  width: 100%;
  align-items: center;
  text-align: center;
  align-self: center;
`;


//Customize Arrow Style
function NextArrow(props) {
  const { onClick } = props;
  return (
    <Arrow onClick={onClick} style={{ right: props.edgeSize, color: props.arrowColor }}>
      <FontAwesomeIcon icon={faChevronRight} />
    </Arrow>
  );
}

function PrevArrow(props) {

  const { onClick } = props;
  return (
    <Arrow onClick={onClick} style={{ left: props.edgeSize, color: props.arrowColor }}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </Arrow>
  );
}

const Arrow = styled.div`
  display: block;
  position: absolute;
  font-size: calc(0.5rem + 75%);
  top: 50%;
  padding: 10px;
  transform: translate(0, -50%);
  cursor: pointer;
  z-index: 2;
`;