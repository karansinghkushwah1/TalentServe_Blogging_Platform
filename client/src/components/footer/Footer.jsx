import React from 'react';
import { styled } from '@mui/material';

const Component = styled('footer')`
    background: #1d2f6f;
    color: white;
    padding: 20px 0;
    text-align: center;
`;

const Footer = () => {
    return (
        <Component>
            <p>&copy; {new Date().getFullYear()} TalentServe. All rights reserved.</p>
        </Component>
    );
}

export default Footer;
