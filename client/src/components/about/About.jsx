import React from 'react';
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Email, LinkedIn } from '@mui/icons-material';

const Banner = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
`;

const ImageContainer = styled(Box)`
  flex: 1;
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
  background-position: left;
  background-size: cover;
  height: 100%;
`;

const Wrapper = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const Heading = styled(Typography)`
  font-weight: 600;
`;

const Text = styled(Typography)`
  color: #878787;
`;

const IconLink = styled(Link)`
  margin-left: 5px;
  color: inherit;
  text-decoration: none;
`;

const About = () => {
  return (
    <Box>
      <Banner>
        <ImageContainer />
        <Wrapper>
          <Heading variant="h3">Karan Singh Kushwah</Heading>
          <Text variant="h5">
            I'm a student at IIT Jodhpur, and I'm passionate about making cool websites and apps. Learning new technologies and implementing them Also, always be ready for new opportunities.
          </Text>
          <Text variant="h5">
            If you are interested, you can view some of my favorite projects on GitHub:
            <IconLink href="https://github.com/karansinghkushwah1" target="_blank">
              <GitHub />
            </IconLink>
          </Text>
          <Text variant="h5">
            Need something built or simply want to have a chat? Reach out to me on LinkedIn:
            <IconLink href="https://www.linkedin.com/in/karan-singh-kushwah-475429219/" target="_blank">
              <LinkedIn style={{ color: "blue" }}/>
            </IconLink>
            or send me an email:
            <IconLink href="mailto:karansinghkushwah21@gmail.com?Subject=This is a subject" target="_blank">
              <Email style={{ color: "green" }}/>
            </IconLink>
            .
          </Text>
        </Wrapper>
      </Banner>
    </Box>
  );
}

export default About;
