import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <StyledNav>
            <h1>
                <Link id="logo" to="/">
                    Capture
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to="/" className="clickable">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="/work" className="clickable">
                        Our Work
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="clickable">
                        Contact Us
                    </Link>
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

    a {
        color: white;
        text-decoration: none;
    }

    ul {
        display: flex;
        list-style: none;
    }

    #logo {
        font-size: 1.5rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
        transition: all 0.3s ease-out;
        &:hover {
            color: #e482df;
            filter: drop-shadow(0 0 0.75rem #e482df);
            transform: scale(1.1);
        }
    }

    li {
        padding-left: 5rem;
        padding-right: 5rem;
        position: relative;
        transition: all 0.3s ease-in-out;

        &:hover {
            transform: scale(1.2);
        }

        .clickable {
            &:hover {
                color: #23d997;
            }
        }
    }
`;

export default Nav;
