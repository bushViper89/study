import React from "react";
import {  
  MDBBadge,
  MDBRow,
  MDBCol,
  MDBIcon,  
  MDBContainer,  
} from "mdbreact";

export default function Skills(props) {
  const {id} = props;

  return (
    <MDBContainer className="pt-5 pb-3" id={id}>
      <MDBRow>
        <MDBCol md="12">
          <h1 className="h1-responsive font-weight-bold text-center mb-5"><MDBIcon icon="code" /> Skills</h1>
        </MDBCol>
      </MDBRow>
      <MDBRow>        
        <MDBCol md="6" className="skills pb-5">
          <h3 className="text-center"><MDBBadge color="default">HTML5</MDBBadge></h3>
          <h6><MDBIcon icon="check" /> 웹 표준 마크업.</h6>
          <h6><MDBIcon icon="check" /> Web Markup에 대한 높은 이해도.</h6>

          <h3 className="text-center"><MDBBadge color="warning">CSS3</MDBBadge></h3>
          <h6><MDBIcon icon="check" /> 크로스 브라우징에 대한 실무 경험.</h6>
          <h6><MDBIcon icon="check" /> 반응형 웹디자인에 대한 실무 경험.</h6>

          <h3 className="text-center"><MDBBadge color="danger">Javascript</MDBBadge></h3>
          <h6><MDBIcon icon="check" /> ECMAscrit 2015(ES6) 사용 가능.</h6>
          <h6><MDBIcon icon="check" /> 다양한 javascript 라이브러리 및 프레임 워크 사용 가능.</h6>

          <h3 className="text-center"><MDBBadge color="info">NodeJS</MDBBadge></h3>
          <h6><MDBIcon icon="check" /> 백엔드 서버 개발에 대한 이해.</h6>
        </MDBCol>
        <MDBCol md="6" className="skills">
          <h3 className="text-center"><MDBBadge color="secondary">React</MDBBadge></h3>
          <h6><MDBIcon icon="check" /> SPA 제작 가능.</h6>
          <h6><MDBIcon icon="check" /> REST API, Ajax 사용 가능.</h6>

          <h3 className="text-center"><MDBBadge color="dark">MySQL</MDBBadge></h3>
          <h6><MDBIcon icon="check" /> DB 쿼리 사용 가능.</h6>
          
          <h3 className="text-center"><MDBBadge color="success">SpringFramework</MDBBadge></h3>
          <h6><MDBIcon icon="check" /> 간단한 웹페이지 제작 가능.</h6>
          <h6><MDBIcon icon="check" /> JAVA, JSP 사용 가능.</h6>
          <h6><MDBIcon icon="check" /> 메이븐 사용 가능.</h6>
        </MDBCol>  
      </MDBRow>
    </MDBContainer>
  );
}