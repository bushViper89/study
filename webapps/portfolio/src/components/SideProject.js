import React from "react";
import {  
  MDBRow,
  MDBCol,
  MDBIcon,  
  MDBContainer,
  MDBBtn,
} from "mdbreact";

export default function SideProject(props) {
  const {id} = props;

  return (
    <MDBContainer className="py-3" id={id}>
      <MDBCol md="12" className="side-project">
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          <MDBIcon icon="project-diagram" /> Side Project
        </h2>
    
        <p className="lead grey-text w-responsive text-center mx-auto">
          React를 사용한 SPA(Sing Page Application)
        </p>
        <MDBRow>
          <MDBCol lg="5" className="text-center text-lg-left my-3">
            <img
              className="img-fluid"
              src="http://220.230.119.118:5000/images/portfolio/side-project-1.png"
              alt="indoor garden"
            />
          </MDBCol>
          <MDBCol className="py-3" lg="7">
            <MDBRow className="mt-1">
              <MDBCol>
                <h5 className="font-weight-bold mb-1"><MDBIcon icon="share" className="indigo-text" /> 클라우드 : 네이버 클라우드 플랫폼</h5>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-1">
              <MDBCol>
                <h5 className="font-weight-bold mb-1"><MDBIcon icon="share" className="indigo-text" /> 운영체제 : Ubuntu 16.04.6 LTS</h5>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-1">
              <MDBCol>
                <h5 className="font-weight-bold mb-1"><MDBIcon icon="share" className="indigo-text" /> Front-end : React</h5>
                <span className="grey-text pl-3">
                  SPA(Sing Page Application)
                </span>
              </MDBCol>
            </MDBRow>            
            <MDBRow className="mt-1">
              <MDBCol>
                <h5 className="font-weight-bold mb-1"><MDBIcon icon="share" className="indigo-text" /> Back-end : NodeJS</h5>                
              </MDBCol>              
            </MDBRow>
            <MDBRow className="mt-1">
              <MDBCol>
                <h5 className="font-weight-bold mb-1"><MDBIcon icon="share" className="indigo-text" /> Template : MDB(Material Design for Bootstrap)</h5>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-1">
              <MDBCol>
                <h5 className="font-weight-bold mb-1"><MDBIcon icon="share" className="indigo-text" /> API : 공공 데이터 포털</h5>
                <span className="grey-text pl-3">
                  실내정원용 식물 데이터(RESTful)
                </span>
              </MDBCol>
            </MDBRow>            
          </MDBCol>
        </MDBRow>
      </MDBCol>
      <MDBCol lg="12">
        <MDBRow className="text-right mt-3">
          <MDBCol>
            <MDBBtn size="sm" target="_blank" href="http://220.230.119.118:8080"><span style={{fontSize:"1rem"}}>link</span></MDBBtn>
            <MDBBtn size="sm" target="_blank" href="https://github.com/bushViper89/study/tree/master/webapps/garden"><span style={{fontSize:"1rem"}}>github</span></MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCol>
    </MDBContainer>
  );
}