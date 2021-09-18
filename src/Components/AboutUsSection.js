import React from 'react';
import home1 from '../img/home1.png';
import { Layout, Hide, Image, Description } from '../script';
import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnim } from '../animation';

const AboutUsSection = () => {
    return (
        <Layout>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>
                            We make sure
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Contact us for any photography or videography ideas that you
                    have. We have professionals with amazing skills.
                </motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img
                    variants={photoAnim}
                    src={home1}
                    alt="A man with a camera"
                />
            </Image>
        </Layout>
    );
};

export default AboutUsSection;
