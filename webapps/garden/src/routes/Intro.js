import React from "react";
import {
  MDBLink,
  MDBCol,
  MDBMask,
  MDBRow,
  MDBView,
  MDBContainer,
  MDBAnimation,
} from "mdbreact";

export default function Intro() {
  return (
    <MDBView className="garden-intro">
      <MDBMask className="flex-center flex-column text-white text-center" overlay="blue-grey-light">
        <MDBContainer>
          <MDBAnimation
            type="fadeIn"
            delay=".3s"
          >
            <MDBRow>
              <MDBCol className="col-12 flex-center mb-5">
                <h1 className="mb-5">Indoor Garden</h1>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="col-12 flex-center">
                <MDBLink className="btn col-2 primary-color text-white" to='/home/1'>시작하기</MDBLink>
              </MDBCol>
            </MDBRow>
          </MDBAnimation>
        </MDBContainer>
      </MDBMask>
    </MDBView>
  );
}