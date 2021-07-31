import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";


export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
        sanityClient
            .fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            body,
            mainImage{
                asset->{
                    _id,
                    url
                },alt
            }
        }`)
            .then((data) => setSinglePost(data[0]))
            .catch(console.error);
    }, [slug]);

    console.log("slug", slug);
    console.log("singlePost", singlePost);

    if (!singlePost) return <div>Loading...</div>;
    return (
        <Container>
            <div className='title'>
                <div className='title-text'>
                    <h1>{singlePost.title}</h1>
                    <h5>{singlePost.subtitle}</h5>
                </div>
                <div className='title-img'>
                    <img src={singlePost.mainImage.asset.url} alt={singlePost.mainImage.alt} />
                </div>

            </div>
            <BlockContent
                blocks={singlePost.body}
                projectId="cm6wihym"
                dataset="production"
            />
        </Container>
    )
}

const Container = styled.div`
    background-color: var(--white);
    text-align: center;
    padding: 10vmin;

    .title{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;

        .title-text{
            width: 50%;
            
        }
        .title-img{
            width: 50%;
        }

        


    }
 
`