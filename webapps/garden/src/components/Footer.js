import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  MDBFooter,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,  
} from "mdbreact";

class Footer extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
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

  render() {
    return <>
      {this.state.isVisible ? <MDBFooter color="primary-color" className="font-small pt-2">
        <MDBContainer fluid className="text-right pr-5">
          <MDBRow>
            <MDBCol>
              <h3><MDBIcon far icon="envelope-open" /> sjallk@naver.com</h3>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-1 primary-color-dark white-text">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} bushViper All rights reserved.
          </MDBContainer>
        </div>
      </MDBFooter> :<></>}
    </>
  }
}

export default withRouter(Footer);