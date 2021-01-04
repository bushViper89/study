import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBContainer,
} from "mdbreact";

export default function Career(props) {
  const {id} = props;
  const careerDate = [
    {company: "KERIS", project: "2019년 기초학력 학생지원 학습 콘텐츠 개발", date: "2019.10 ~ 2020.02"},
    {company: "세종장학재단", project: "2019년 세종학당 한국어 교원 온라인 재교육 콘텐츠 개발사업", date: "2019.08 ~ 2019.12"},
    {company: "원자력안전기술원", project: "2019년도 원자력 규제요인 사이버 교육 콘텐츠 제작", date: "2019.07 ~ 2019.12"},
    {company: "발전교육원", project: "2019년도 사이버 교육 콘텐츠 개발 용역", date: "2019.06 ~ 2019.12"},
    {company: "대한화장품협회", project: "대한화장품협회 법정교육 콘텐츠 개발", date: "2019.06 ~ 2019.10"},
    {company: "한국생명공학연구원", project: "2019년 연구실안전 온라인 교육 콘텐츠 개발", date: "2019.05 ~ 2019.11"},
    {company: "한국화학안전기술원", project: "한국화학안전기술원 안전교육 콘텐츠 및 LMS 개발", date: "2019.04 ~ 2019.07"},
    {company: "기상청", project: "기상교육 모바일 및 이러닝 콘텐츠 개발", date: "2016.05 ~ 2016.12"},
    {company: "국가공무원인재개발원", project: "2016년 이러닝 콘텐츠 개발 사업", date: "2016.05 ~ 2016.11"},
    {company: "한국콘텐츠진흥원", project: "2016년 사이버 콘텐츠 개발", date: "2016.04 ~ 2016.12"},
    {company: "한수원(주) 인재개발원", project: "2016년 이러닝 콘텐츠 개발 용역", date: "2016.04 ~ 2016.11"},
    {company: "경찰청", project: "1차 경찰청 사이버교육콘텐츠 개발 사업", date: "2016.04 ~ 2016.08"},
    {company: "헌법재판소", project: "사이버 교육 콘텐츠 개발", date: "2015.08 ~ 2015.12"},
    {company: "한국철도공사 인재개발원", project: "2015년 사이버 교육 콘텐츠 신규", date: "2015.08 ~ 2015.12"},
    {company: "대전교육연수원", project: "원격연수 콘텐츠 개발 용역", date: "2015.06 ~ 2015.11"},
    {company: "중앙공무원교육원", project: "2015년 사이버 교육 콘텐츠 개발", date: "2015.06 ~ 2015.11"},
    {company: "한국기술교육대학교", project: "온라인평생교육원 이러닝 콘텐츠 개발", date: "2015.01 ~ 2016.03"},
  ]

  return (
    <MDBContainer className="py-3" id={id}>
      <MDBRow>
        <MDBCol md="12" className="skills">
          <h1 className="h1-responsive font-weight-bold text-center mb-5"><MDBIcon far icon="file-alt" /> Career</h1>
          {
            careerDate.map((v, i) => {
              return (
                <div key={i} className="mt-4">
                  <h3><MDBIcon far icon="building" /> {v.company}</h3>
                  <h6><MDBIcon far icon="calendar-alt" /> {v.date}</h6>
                  <h6><MDBIcon fab icon="slack-hash" /> {v.project}</h6>
                </div>
              )
            })
          }          
        </MDBCol>            
      </MDBRow>
    </MDBContainer>
  );
}