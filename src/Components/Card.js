import React from "react";
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import { useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";

export default function Card(props) {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });

    }, [])


    return (
        <div
            style={{
                padding: "0 2px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
            <CardStyled
                data-aos='flip-up'
                imageSrc={props.imageSrc}
                imageAlt={props.imageAlt}
                blockColor={props.blockColor}
                textColor={props.textColor}
                title={props.textColor}
                subtitle={props.subtitle}
            >
                <div className='card-img'>
                    <img src={props.imageSrc} alt={props.imageAlt}></img>
                </div>
                <div className='card-desc'>
                    <h5>{props.title}<br /><span>{props.subtitle}</span></h5>
                    <Link to={props.slug} key={props.keys} className='icon'>
                        <FontAwesomeIcon icon={faArrowCircleRight}/>
                    </Link>
                </div>
            </CardStyled>
        </div>
    )
}

const CardStyled = styled.div`
    width: fit-content;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.blockColor};
    width: 40vmin;
    height: 60vmin;
    position: relative;


    .card-img{
        background: ${props => props.mainImage};
        flex-grow: 14;
        overflow: hidden;    
        border-radius: 15px 15px 0 0;
        img{
            border-radius: 15px 15px 0 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    .card-desc{
        flex-grow: 4;
        color: ${props => props.textColor};
        padding: 0 3vmin 1vmin 3vmin;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h5{
            flex-wrap: wrap;
            width: 80%;
            font-size: calc(0.5rem+2vmin);
            span{
                font-size: calc(0.5rem+0.5vmin);
                font-weight: normal;
            }
        }

        .icon{
            font-size: calc(0.5rem + 3vmin);
            cursor: pointer;
            width: 20%;
            color: ${props => props.textColor};
        }
    }
`