import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBFooter,
  MDBIcon,
} from "mdbreact";
import ScrollspyNav from 'react-scrollspy-nav';
import About from "./components/About";
import Skills from "./components/Skills";
import SideProject from "./components/SideProject";
import Career from "./components/Career";
import "./App.css";

export default class App extends React.Component {
  state = {
    collapseID: "",
  };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  handleClick() {
    this.setState({collapseID: ""})
  }

  render() {
    const list = ["About", "Skills", "Side Project", "Career"];
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="app">
        <ScrollspyNav
          scrollTargetIds={["section-1", "section-2", "section-3", "section-4"]}
          offset={-50}
          activeNavClass="is-active"
          scrollDuration="500"
          headerBackground="true"
        >
          <MDBNavbar dark color="default-color" expand="md" fixed="top" scrolling transparent>
            <MDBContainer>
              <MDBNavbarBrand>
                <strong className="white-text">PORTFOLIO</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse("navbarCollapse")}
              />
              <MDBCollapse
                id="navbarCollapse"
                isOpen={this.state.collapseID}
                navbar
              >
                <MDBNavbarNav right>
                  {
                    list.map((value, i) => {
                      return <MDBNavItem key={i}>
                        <a className="nav-link waves-effect waves-light" href={"#section-" + (i+1)} onClick={this.handleClick.bind(this)}>{value}</a>
                      </MDBNavItem>
                    })
                  }
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {this.state.collapseID && overlay}
        </ScrollspyNav>
        
        <About id="section-1"></About>
        <Skills id="section-2"></Skills>
        <SideProject id="section-3"></SideProject>
        <Career id="section-4"></Career>

        <MDBFooter color="default-color" className="font-small pt-2 mt-1">
          <MDBContainer fluid className="text-right pr-5">
            <MDBRow>
              <MDBCol>
                <h3><MDBIcon far icon="envelope-open" /> sjallk@naver.com</h3>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-1 default-color-dark white-text">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} bushViper All rights reserved.
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    );
  }
}