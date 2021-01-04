import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBFormInline,
} from "mdbreact";

class Header extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      isOpen: false,
      isVisible: (props.location.pathname !== "/"),
    };
  }

  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      // console.log("on route change");
      this.setState({isVisible: (location.pathname!=="/")});
    });
  }

  componentWillUnmount() {
      this.unlisten();
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return <>
      {this.state.isVisible ? <MDBNavbar className="garden-nav" color="primary-color" dark expand="md">
        <MDBContainer>
          <MDBNavbarBrand href="/">
            <strong className="white-text">Indoor Garden</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            {/*<MDBNavbarNav>
              <MDBNavItem>
                <MDBFormInline waves>
                  <div className="md-form my-0">
                    <input className="form-control mr-sm-6" type="text" placeholder="Search" aria-label="Search" />
                  </div>
                </MDBFormInline>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/search"><MDBIcon icon="search" /> 상세검색</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>*/}
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar> :<></>}
    </>
  }
}

export default withRouter(Header);