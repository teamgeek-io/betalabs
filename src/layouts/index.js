import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';

/* 23 law variables and how they were used */
// const gutter = '10vw';
// const spacer = '2.5rem';

const BaseContainer = styled.div`
  font-family: "Montserrat";
  font-weight: 400;
  box-sizing: border-box;
`;

const BaseLayout = ({ children }) => {
  return (
    <BaseContainer>
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta name="description" content={config.siteDescription} />
        <meta name="keywords" content={config.siteKeywords} />
      </Helmet>
      {children()}
    </BaseContainer>
  );
};

export default BaseLayout;