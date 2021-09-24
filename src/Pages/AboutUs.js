import React from 'react';
// Importing Sections
import AboutUsSection from '../Components/AboutUsSection';
import ServiceSection from '../Components/ServiceSection';
import FaqSection from '../Components/FaqSection';
// Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../Components/ScrollTop';

const AboutUs = () => {
    return (
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <AboutUsSection />
            <ServiceSection />
            <FaqSection />
            <ScrollTop />
        </motion.div>
    );
};

export default AboutUs;
