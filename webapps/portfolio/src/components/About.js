import React from "react";
import {  
  MDBCol,
  MDBIcon,
  MDBMask,
  MDBRow,
  MDBView,
  MDBContainer,
  MDBAnimation
} from "mdbreact";

export default function About(props) {
  const {id} = props;

  return (
    <MDBView id={id}>
      <MDBMask className="flex-center flex-column text-white text-center">
        <MDBContainer>
          <MDBRow>
            <MDBAnimation
              type="fadeInLeft"
              delay=".3s"
              className="white-text align-top text-center text-md-left col-md-6 mb-5"
            >
              <h1 className="h1-responsive font-weight-bold">
                <MDBIcon icon="tag" /> About Me
              </h1>
              <hr className="hr-light" />
              <p>
                웹 프론트 엔드 개발자입니다.<br/>
                프레임 워크에 관심이 많으며 Ruby on Rails로 프레임 워크를 처음 접했으며, SpringFramework를 거쳐 현재는 React에 관심을 가지고 있습니다.
              </p>
            </MDBAnimation>

            <MDBCol md="6" xl="6" className="mb-4">
              <MDBAnimation
                type="fadeInRight"
                delay=".3s"
                className="white-text align-top text-center text-md-left col-md-12"
              >
                <h1 className="h1-responsive font-weight-bold">
                  <MDBIcon icon="id-card" /> License
                </h1>
                <hr className="hr-light" />
                <h6>- SQL개발자(SQLD자격)</h6>
                <h6>- 정보처리기사</h6>
                <h6>- 정보기기운용기능사</h6>
                <h6>- 전자기기기능사</h6>
                <h6>- 컴퓨터활용능력1급</h6>
                <h6>- 워드프로세서1급</h6>
                <h6>- 1종보통운전면허</h6>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBMask>
    </MDBView>
  );
}