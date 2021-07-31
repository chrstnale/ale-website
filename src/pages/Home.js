import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Profile from "../assets/images/profile.webp"
import Slider from "../Components/Slick";
import Card from '../Components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faGraduationCap, faHandsHelping, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";


export default function Home() {

    const [chosenCategory, setChosenCategory] = useState("all");
    const [postData, setPost] = useState(null);
    const [expData, setExpData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        sanityClient.fetch(`*[_type == "post"]{
            title,
            subtitle,
            slug,
            textColor,
            blockColor,
            body,
            publishedAt,
            mainImage{
                asset->{
                    _id,
                    url
                },alt
            }
        }`).then((data) => setPost(data)).catch(console.error);
    }, []);

    useEffect(() => {
        if (chosenCategory === 'all') {
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



    // const resetLoad = () => {
    //     elements = [];
    //     setIsAllShown(false);
    //     i = 0;
    //     console.log('after reseted, elements:', elements);
    // if (chosenCategory !== 'all') {
    //     expShowing = expShowing.filter(item => item.expType === chosenCategory);
    // }
    // console.log('after filtered, expShowing:', expShowing);
    //     loadMore();
    // }

    //Load More Items evertime clicked
    // const loadMore = () => {
    //     i = i + 2;
    //     console.log('i value: ', i);

    //     if (i < expData.length) {
    //         setElements([...elements, ...expData.slice(-2 + i, i)]);
    //         console.log('added this:', elements);
    //     } else {
    //         setElements([...elements, ...expData.slice(-2 + i, i)]);
    //         setIsAllShown(true);
    //         console.log('finally added this:', elements);
    //     }
    // };


    return (
        <Container>
            <section className='hero'>
                <div className='hero-title' data-aos="flip-down">
                    <h1>Christian <span className='orange'>Ale</span> Perdana</h1>
                    <h3>Product Development Enthusiast</h3>
                </div>
                <div className='hero-profile'>
                    <img src={Profile} alt="Ale's Profile"/>
                </div>
            </section>
            <section className='about'>
                <h2 className='orange'>About Ale</h2>
                <h4>&mdash; Hello! I&rsquo;m a <span className='orange'>product development entushiast</span> product and an <span className='orange'>undergraduate student at Gadjah Mada University</span>, Indonesia. I&rsquo;m open to learn many things, but currently I&rsquo;m focused on product development field and am aspiring to be product manager. If you have offers for me, please kindly contact my social medias below&mdash;</h4>
            </section>
            <section className='works'>
                <h2>My Latest <span className='orange'>Works</span></h2>
                <h4>I post anything interesting about my works, either success or failure</h4>
                <div className='works-items'>

                    <Slider
                        slidesToShow={3}
                        slidesToShowMobile={1}
                        slidesToShowTablet={2}
                        slidesToScroll={1}
                        infinite={true}>
                        {postData && postData.map((post, index) => (
                            <div key={index}>
                                <Card
                                    key={index}
                                    slug={"/myworks/" + post.slug.current}
                                    keys={post.slug.current}
                                    blockColor={post.blockColor}
                                    textColor={post.textColor}
                                    title={post.title}
                                    subtitle={post.subtitle}
                                    imageSrc={post.mainImage.asset.url}
                                    imageAlt={post.mainImage.alt}
                                />

                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='call-to-action'>
                    <a href='' download><div className='button'>
                        <h4>Download Portfolio</h4>
                    </div></a>
                </div>

            </section>
            <section className='exps'>
                <h2 className='orange'><span className='white'>My Latest</span> Experiences</h2>
                <div className='categories'>
                    <h5 onClick={() => setChosenCategory("all")} style={{ color: ((chosenCategory !== 'all') ? 'var(--white)' : 'var(--orange)') }}>All</h5>
                    <h5 onClick={() => setChosenCategory("work")} style={{ color: ((chosenCategory !== 'work') ? 'var(--white)' : 'var(--orange)') }}>Works</h5>
                    <h5 onClick={() => setChosenCategory("volunteer")} style={{ color: ((chosenCategory !== 'volunteer') ? 'var(--white)' : 'var(--orange)') }}>Volunteer</h5>
                    <h5 onClick={() => setChosenCategory("education")} style={{ color: ((chosenCategory !== 'education') ? 'var(--white)' : 'var(--orange)') }}>Education</h5>
                </div>


                <div className='timeline'>
                    <VerticalTimeline>
                        {expData && expData.slice(0, 3).map((exp, index) => (
                                <VerticalTimelineElement
                                    className={exp.expType}
                                    className={exp.expSize}
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
                        ))}
                        <Link to="/myexperiences">
                            <VerticalTimelineElement
                                iconStyle={{
                                    background: 'var(--orange)',
                                    color: 'var(--white)',
                                    cursor: 'pointer',
                                }}
                                icon={<FontAwesomeIcon style={{ width: '23px' }} icon={faEllipsisH} />}

                            // icon={<FontAwesomeIcon style={{ width: '23px' }} icon={(isAllShown !== true ? faArrowDown : faTimes)} />}
                            />
                        </Link>
                    </VerticalTimeline>

                </div>
                <div className='call-to-action'>
                    <a href='' download><div className='button'>
                        <h4>Download Resume</h4>
                    </div></a>
                </div>

            </section>


        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    background-repeat: repeat;
    overflow: hidden;
    margin: 0;
    display: flex;
    flex-direction: column;

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


    .hero{
        display: flex;
        width: 100%;
        height: 100vh;
        padding: 10vmin;
        align-items: center;
        justify-content: space-around;

        .hero-title{
            h1, h3{
                margin: 0;
            }
        }

        .hero-profile{
            img{
                height: 70vmin;
            }
        }

        @media (max-width:1024px){
            flex-direction: column;
        }
    }

    .about{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        padding: 10vmin;
        background-color: var(--black);
        color: var(--white);
        text-align: center;
        h4{
            max-width: 90vmin;
        }
    }

    .works{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        padding: 10vmin;
        text-align: center;

        .works-items{
          font-size: calc(0.5rem + 1.5vmin);
          width: 100%;
        }
    }

    .exps{
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


    }
`