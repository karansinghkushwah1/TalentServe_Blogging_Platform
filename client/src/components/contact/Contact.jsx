import React from 'react';
import { Box, styled, Typography, Link } from '@mui/material';
import { LinkedIn, Email } from '@mui/icons-material';

const Wrapper = styled(Box)`
  display: flex;
  height: 100vh;
`;

const ImageContainer = styled(Box)`
  flex: 1;
  background-image: url(http://mrtaba.ir/image/bg2.jpg);
  background-position: left;
  background-size: cover;
`;

const ContentContainer = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
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

const AboutUs = () => {
  return (
    <Wrapper>
      <ImageContainer />
      <ContentContainer>
        <Heading variant="h3">Getting in touch is easy!</Heading>
        <Text variant="h5">
          Reach out to us on Instagram:
          <IconLink href="https://www.linkedin.com/in/karan-singh-kushwah-475429219/" target="_blank">
            <LinkedIn style={{ color: "blue" }}/>
          </IconLink>
          or send us an email:
          <IconLink href="mailto:karansinghkushwah21@gmail.com?Subject=This is a subject" target="_blank">
            <Email style={{ color: "green" }}/>
          </IconLink>
        </Text>
      </ContentContainer>
    </Wrapper>
  );
}

export default AboutUs;
