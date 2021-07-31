import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

export default function Footer() {
    return (
        <Container>
            <h2>Want to Know Me More?</h2>
            <h4>Please kindly reach me out here:</h4>
            <div className='socmeds'>

                <div>
                    <a href='https://linkedin.com/in/christianale' target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className='icon' />
                        <h4>christianale</h4>
                    </a>
                </div>
                <div>
                    <a href='https://github.com/chrstnale/' target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className='icon' />
                        <h4>chrstnale</h4>
                    </a>
                </div>
                <div>
                    <a href='https://www.instagram.com/chrstn_ale/' target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className='icon' />
                        <h4>chrstn_ale</h4>
                    </a>
                </div>


            </div>

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background-color: var(--cream);
    display: flex;
    flex-direction: column;
    padding: 10vmin;
    justify-content: center;
    align-items: center;

    h2, h4{
            margin: 0;
        }

    .socmeds{
        display: flex;
        text-align: center;



        div{
            padding: 5vmin;
            cursor: pointer;
            a{
                color:var(--black)
            }

            .icon{
                font-size:calc(0.5rem + 9vmin);
            }

        }
    }
`