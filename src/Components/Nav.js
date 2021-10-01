import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router';

const Nav = () => {
    const { pathname } = useLocation();

    return (
        <StyledNav>
            <h1>
                <Link id="logo" to="/">
                    Capture
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">About Us</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: '0%' }}
                        animate={{ width: pathname === '/' ? '45%' : '0%' }}
                    />
                </li>
                <li>
                    <Link to="/work">Our Work</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: '0%' }}
                        animate={{ width: pathname === '/work' ? '45%' : '0%' }}
                    />
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: '0%' }}
                        animate={{
                            width: pathname === '/contact' ? '45%' : '0%',
                        }}
                    />
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.div`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    a {
        color: white;
        text-decoration: none;
    }

    ul {
        display: flex;
        list-style: none;
    }

    #logo {
        font-size: 1.7rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
        transition: all 0.3s ease-out;
        display: inline-block;
        &:hover {
            color: #e482df;
            filter: drop-shadow(0 0 0.75rem #e482df);
            transform: scale(1.2);
        }
    }

    li {
        padding-left: 5rem;
        padding-right: 5rem;
        position: relative;
        transition: all 0.3s ease-in-out;
    }
    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 2rem 1rem;
        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
        }
        #logo {
            margin: 1rem;
        }
        li {
            padding: 0;
        }
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #23d997;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 30%;
    @media (max-width: 1300px) {
        width: 50%;
    }
`;

export default Nav;
