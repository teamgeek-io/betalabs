import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';

import '../../static/styles/reset.css';
import '../../static/styles/utils.css';
import '../../static/fonts/stylesheet.css';

import favicon from '../../static/icons/favicon.ico';

const BaseContainer = styled.div`
  box-sizing: border-box;
`;

const GridLines = styled.div`
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: grid;
  grid-template: 100vh / 1fr 1fr 1fr 1fr;
`;

const Line = styled.div`
  border-right: 1px solid #f0f0f0;
`;

const BaseLayout = ({ children }) => {
  return (
    <BaseContainer>
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta name="description" content={config.siteDescription} />
        <meta name="keywords" content={config.siteKeywords} />
        <meta name="keywords" content={config.siteKeywords} />
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      <GridLines>
        <Line />
        <Line />
        <Line />
      </GridLines>
      {children()}
    </BaseContainer>
  );
};

export default BaseLayout;