/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import '../assets/styles/index.scss';
import { colors } from '../constants';

import Header from './Header';
import Footer from './Footer';
import { isBrowser } from '../lib/helper';

const Main = styled.main`
  background-color: ${colors.BACKGROUND};
  min-height: 100%;
  line-height: 1.1;

  &::after {
    z-index: -1;
    height: 350px;
    content: '';
    position: absolute;
    width: 100%;
  }

  .tl-edges {
    min-height: 100%;
  }
`;

const Layout = ({ children }) => {
  const isSimpleversion =
    isBrowser() && window.location.pathname === '/simpleversion';

  return (
    <>
      <Header simple={isSimpleversion} />
      <span id="home" style={{ opacity: 0, height: 0, width: 0 }} />
      <Main>{children}</Main>
      <span id="contact" style={{ opacity: 0, height: 0, width: 0 }} />
      <Footer simple={isSimpleversion} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {};

export default Layout;
