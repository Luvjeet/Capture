import React from 'react';
import { Layout } from '../script';
import styled from 'styled-components';
// Toggle
import Toggle from './Toggle';
// Animate
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <Faq
            variants={scrollReveal}
            animate={controls}
            ref={element}
            initial="hidden"
        >
            <h2>
                Any questions <span>FAQ</span>
            </h2>
            <AnimateSharedLayout>
                <Toggle title="How do I start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Natus, molestias?
                        </p>
                    </div>
                </Toggle>
                <Toggle title="Dailly Schedule.">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Natus, molestias?
                        </p>
                    </div>
                </Toggle>
                <Toggle title="Different payment methods.">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Natus, molestias?
                        </p>
                    </div>
                </Toggle>
                <Toggle title="What products do you offer?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Natus, molestias?
                        </p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
};

const Faq = styled(Layout)`
    display: block;

    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }

    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;
