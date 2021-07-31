import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import sanityClient from "../client.js";
import Card from "../Components/Card";

export default function MyWorks() {
    const [postData,setPost] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        sanityClient
        .fetch(`*[_type == "post"]{
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
        }`)
        .then((data) => setPost(data))
        .catch(console.error);
    }, []);

    return (
        <Container>
            <h2>My Latest <span className='orange'>Works</span></h2>
            <h4>I post anything interesting about my works, either success or failure</h4>
            <div className='work-items'>
                {postData && postData.map((post, index) => (
                    <div className='work' key={index}>
                        <Card
                            slug={"/myworks/" + post.slug.current}
                            key={post.slug.current}
                            blockColor={post.blockColor}
                            textColor={post.textColor}
                            title={post.title}
                            subtitle={post.subtitle}
                            imageSrc={post.mainImage.asset.url}
                            imageAlt={post.mainImage.alt}
                        />
                    </div>
                ))}
            </div>
        </Container>
    )
}

const Container = styled.div`
    background-color: var(--white);
    text-align: center;
    padding: 10vmin;

    .work-items{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;

        .work{
            flex: 1 0 25%;
            padding-top: 5vmin;
        }
    }
 
`