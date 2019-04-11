import React, { PureComponent } from "react";
import Stories from "./Stories";
import Comments from "./Comments";
import styled from "styled-components";

const AppHeader = styled.header`
  position: static;
  width: 100%;
  display: flex;
  z-index: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  background-color: #000;
`;

const Logo = styled.img`
  margin: auto;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
`;

const Application = styled.div`
  position: relative;
`;

const AppFooter = styled.footer`
  text-align: center;
  padding: 30px;
  background-color: #000;

  p {
    margin: auto;
  }
`;

class App extends PureComponent {
  render() {
    return (
      <Application>
        <AppHeader>
          <Logo
            width="200"
            height="80"
            src="/images/logo.svg"
            alt="logo-pirate"
          />
        </AppHeader>
        <Layout>
          <Stories />
          <Comments />
        </Layout>
        <AppFooter>
          <p>Created by Arthur Tressol</p>
        </AppFooter>
      </Application>
    );
  }
}

export default App;
