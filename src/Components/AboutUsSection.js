import React from 'react';
import home1 from '../img/home1.png';
// import styled from 'styled-components';
import { Layout, Hide, Image, Description } from '../script';
// import styled from 'styled-components';

const AboutUsSection = () => {
    return (
        <Layout>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We make sure</h2>
                    </Hide>
                    <Hide>
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                    <p>
                        Contact us for any photography or videography ideas that
                        you have. We have professionals with amazing skills.
                    </p>
                    <button>Contact Us</button>
                </div>
            </Description>
            <Image>
                <img src={home1} alt="A man with a camera" />
            </Image>
        </Layout>
    );
};

export default AboutUsSection;
