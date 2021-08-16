import React, { Component } from "react";
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,  
} from "mdbreact";

class PageNavi extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      currentPage: props.currentPage,
      totalPage: props.totalPage,
      isFirst: props.currentPage==="1",
      isLast: props.currentPage.toString()===props.totalPage.toString()
    };
  }

  render() {
    let page = [];
    let cur = Number(this.state.currentPage);
    let total = Number(this.state.totalPage);

    if (this.state.isFirst) {
      page = [cur, cur +1, cur +2];
    }
    else if (this.state.isLast) {
      page = [total -2, total -1, total];
    }
    else {
      page = [cur -1, cur, cur +1];
    }

    return <MDBContainer>
      <MDBRow>
        <MDBCol className="mt-3">
          <MDBPagination className="d-flex align-items-center justify-content-center">
            <MDBPageItem disabled={cur===1}>
              <MDBPageNav className="page-link" href="/home/1">
                <MDBIcon icon="angle-double-left" size="2x"/>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem disabled={cur===1}>
              <MDBPageNav className="page-link" aria-label="Previous" href={"/home/" + ((cur <= 2) ? 1 : cur -2)}>
                <MDBIcon icon="angle-left" size="2x"/>
              </MDBPageNav>
            </MDBPageItem>
            
            {
              page.map((value, index) => {
                return <MDBPageItem active={(cur===value)} key={index}>
                  <MDBPageNav className="page-link" href={"/home/" + value}>
                    {value} { (cur===value) ? <span className="sr-only">(current)</span>: <></> }
                  </MDBPageNav>
                </MDBPageItem>
              })
            }            
            
            <MDBPageItem disabled={cur===total}>
              <MDBPageNav className="page-link" href={"/home/" + (cur +3)}>
                <MDBIcon icon="angle-right" size="2x"/>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem disabled={cur===total}>
              <MDBPageNav className="page-link" href={"/home/" + total}>
              <MDBIcon icon="angle-double-right" size="2x"/>
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  }
}

export default PageNavi;