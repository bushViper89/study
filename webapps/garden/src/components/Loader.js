import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,  
} from "mdbreact";

const Loader = () => {
  return (
    <MDBContainer className="py-5 flex-center">
      <MDBRow>
        <MDBCol>
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Loader;