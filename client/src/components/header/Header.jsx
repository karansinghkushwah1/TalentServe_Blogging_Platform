// import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
// import { Link } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';


// const Component = styled(AppBar)`
//     background: black;
//     color: white;
// `;

// const Container = styled(Toolbar)`
//     justify-content: center;
//     & > a {
//         padding: 20px;
//         color: white;
//         text-decoration: none;
//     }
// `

// const Header = () => {

//     const navigate = useNavigate();

//     //const logout = async () => navigate('/account');
        
//     return (
//         <Component>
//             <Container>
//                 <Link to='/'>HOME</Link>
//                 <Link to='/about'>ABOUT</Link>
//                 <Link to='/contact'>CONTACT</Link>
//                 <Link to='/login'>LOGOUT</Link>
//             </Container>
//         </Component>
//     )
// }

// export default Header;


import { AppBar, Toolbar, styled, Button, Box } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const Component = styled(AppBar)`
    background: #1d2f6f;
    color: white;
`;

const Logo = styled('img')`
    height: 40px;
    margin-right: 10px;
`;

const Container = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Links = styled('div')`
    display: flex;
    align-items: center;
    & > a {
        padding: 20px;
        color: white;
        text-decoration: none;
    }
`;

const Header = () => {
    const navigate = useNavigate();

    //const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
                <Link to='/'>
                    <Logo src={process.env.PUBLIC_URL + '/images/talentserve_logo.png'} alt="Logo"/>
                </Link>
                <Links>
                    <Link to='/'>HOME</Link>
                    <Link to='/about'>ABOUT</Link>
                    <Link to='/contact'>CONTACT</Link>
                    <Link to='/login'>LOGOUT</Link>
                </Links>
            </Container>
        </Component>
    )
}

export default Header;
