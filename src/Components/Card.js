import React, { useState } from "react";
import styled, { keyframes } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import { useEffect } from "react/cjs/react.development";

export default function Card(props) {
    const {
        background,
        headerColor,
        textColor,
        title,
        subTitle,
    } = props;

    useEffect(()=>{
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
                data-aos= 'flip-up'

            background={props.background}
            headerColor={props.headerColor}
            textColor={props.textColor}
            title={props.textColor}
            subTitle={props.subTitle}
        >
                <div className='card-img'>
                    <img src={props.background}></img>
                </div>
                <div className='card-desc'>
                    <h4>{props.title}<br /><span>{props.subTitle}</span></h4>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faArrowCircleRight} style={{fontSize: 'calc(0.5rem + 3vmin)'}}/>
                    </div>
                </div>
            </CardStyled>
        </div>
    )
}

const CardStyled = styled.div`
    width: fit-content;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.headerColor};

    .card-img{
        background: ${props => props.background};
        flex-grow: 14;
        width: 35vmin;
        img{
            width: 100%;
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

        .icon{
            cursor: pointer;
        }
    }
`