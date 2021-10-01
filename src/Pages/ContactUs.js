import React from 'react';
// Animation
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../animation';
// Styles
import styled from 'styled-components';

const ContactUs = () => {
    return (
        <ContactStyles
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnimation}>
                        Get in touch.
                    </motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />

                        <h2>Send Us A Message</h2>
                        <Clickable>
                            <img
                                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/speech-balloon_1f4ac.png"
                                alt="message"
                            />
                        </Clickable>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Send An Email</h2>
                        <Clickable>
                            <img
                                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/envelope_2709-fe0f.png"
                                alt="mail"
                            />
                        </Clickable>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Social Media</h2>
                        <Clickable>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                                alt="social media"
                            />
                        </Clickable>
                    </Social>
                </Hide>
            </div>
        </ContactStyles>
    );
};

// Styles
const ContactStyles = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 1500px) {
        padding: 2rem;
        font-size: 1rem;
    }
`;

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 1500px) {
        margin-top: 5rem;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    background: #fff;
`;

const Social = styled(motion.div)`
    display: flex;
    align-items: center;

    h2 {
        margin: 2rem;
    }
`;

const Clickable = styled.div`
    cursor: pointer;
    user-select: none;
    img {
        height: 50px;
        width: 50px;
    }
`;

export default ContactUs;
