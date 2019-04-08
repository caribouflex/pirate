import React, { Component } from "react";
import Button from "../components/Button";
import Stories from "./Stories";
import Comments from "./Comments";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";

const Logo = styled.img`
  margin: auto;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          style={{ backgroundColor: "transparent", boxShadow: "none" }}
          position="static"
        >
          <Toolbar>
            <Logo
              width="200"
              height="80"
              src="/images/logo.svg"
              alt="logo-pirate"
            />
          </Toolbar>
        </AppBar>
        <Button />
        <Layout>
          <Stories />
          <Comments />
        </Layout>
      </div>
    );
  }
}

export default App;
