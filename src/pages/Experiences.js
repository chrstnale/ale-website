import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGraduationCap, faHandsHelping, faLaptop, faStar } from '@fortawesome/free-solid-svg-icons';

import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

export default function MyExperiences() {
    const [chosenCategory, setChosenCategory] = useState("all");
    const [expData,setExpData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        if(chosenCategory === 'all'){
            sanityClient
            .fetch(`*[_type == "experience" ]{
                title,
                date,
                place,
                expType,
                expSize,
                subtitle,
            }`)
            .then((data) => setExpData(data))
            .catch(console.error);
    
        } else {
            sanityClient
            .fetch(`*[_type == "experience" && expType == "${chosenCategory}" ]{
                title,
                date,
                place,
                expType,
                expSize,
                subtitle,
            }`)
            .then((data) => setExpData(data))
            .catch(console.error);
        }
    }, [chosenCategory]);

    return (
        <Container>
        <h2 className='orange'>My Experiences</h2>

        <div className='categories'>
            <h5 onClick={() => setChosenCategory("all")} style={{ color: ((chosenCategory !== 'all') ? 'var(--white)' : 'var(--orange)') }}>All</h5>
            <h5 onClick={() => setChosenCategory("work")} style={{ color: ((chosenCategory !== 'work') ? 'var(--white)' : 'var(--orange)') }}>Works</h5>
            <h5 onClick={() => setChosenCategory("volunteer")} style={{ color: ((chosenCategory !== 'volunteer') ? 'var(--white)' : 'var(--orange)') }}>Volunteer</h5>
            <h5 onClick={() => setChosenCategory("education")} style={{ color: ((chosenCategory !== 'education') ? 'var(--white)' : 'var(--orange)') }}>Education</h5>
        </div>


        <div className='timeline'>
            <VerticalTimeline>
                {expData && expData.map((exp, index) => {
                    return (
                        <VerticalTimelineElement
                            className={exp.expType}
                            contentStyle={{ background: 'var(--grey)', color: 'var(--white)' }}
                            date={exp.date}
                            iconStyle={{
                                background: (exp.expType === 'education' ? 'var(--cream)' : exp.expType === 'work' ? 'var(--grey)' : 'var(--orange)'),
                                color: (exp.expType === 'education' ? 'var(--black)' : exp.expType === 'work' ? 'var(--white)' : 'var(--grey)'),
                            }}
                            icon={<FontAwesomeIcon style={{ width: '23px' }} icon={(exp.expType === 'education' ? faGraduationCap : exp.expType === 'work' ? faLaptop : faHandsHelping)} />}
                        >
                            <h4>{exp.title}</h4>
                            <BlockContent 
                                blocks={exp.subtitle}
                                projectId="cm6wihym"
                                dataset="production"
                            />
                        </VerticalTimelineElement>
                    )
                })}
                <VerticalTimelineElement
                    iconStyle={{
                        background: 'var(--orange)',
                        color: 'var(--white)',
                    }}
                    icon={<FontAwesomeIcon style={{ width: '23px' }} icon={faStar} />}
                />
                </VerticalTimeline>

        </div>
        <div className='call-to-action'>
            <a href='' download><div className='button'>
                <h4>Download Resume</h4>
            </div></a>
        </div>

    </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 10vmin;
    background-color: var(--black);
    color: var(--white);
    text-align: center;

    h5{
        margin: 0;
    }

    .categories{
        display: flex;
        h5{
            padding: 3vmin;
            color: var(--cream);
            cursor: pointer;
        }
    }

    .timeline{
        width: 100%;
        color: black;
        text-align: left;
        h4, p{
            margin: 0;
        }
    }


    .call-to-action{
        margin-top: 5vmin;

        a{
            text-decoration: none;
        }

        .button{
            color: var(--white);
            h4{
                margin: 0;
            }
            padding: 2vmin;
            background-color: var(--red);
            border-radius: 10px;
        }
            
    }
 
`