import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from "mdbreact";
import Details from "./Details";

class PlantList extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      modal: false,
      isFirst: true,
      isLast: false,
      container: {minHeight: "500px"},
      list: props.list,
      imgURL: "http://www.nongsaro.go.kr/cms_contents/301/",
      title: "",
      details: [],
      images: "",
      cntntsNo: ""
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { imgURL, list } = this.state;

    let details;
    if (this.state.modal)
    {
      details = <Details cntntsNo={this.state.cntntsNo} images={this.state.images}/>;
    }
    else {      
      details = <></>;
    }

    return (
      <MDBContainer className="pt-3" style={ this.state.container }>          
        <MDBRow>
          <MDBCol>

            <MDBListGroup>
              {
                list.map((value, index) => {
                  return (
                    <MDBListGroupItem className="blue-grey-text d-flex align-items-center" hover key={index} 
                      onClick={() => { 
                        this.toggle();
                        if (!this.state.modal) this.setState({images: value.rtnStreFileNm[0], title: value.cntntsSj, cntntsNo: value.cntntsNo[0]});
                       }}
                    >
                      <img src={imgURL + value.rtnThumbFileNm[0].split("|")[0]} className="rounded float-left" alt={value.cntntsSj} />
                      <div className="p-2">
                        <span className="pl-2">No.{value.cntntsNo}</span>
                        <h5 className="pl-2 font-weight-bold">{value.cntntsSj}</h5>
                      </div>
                      <MDBIcon icon="angle-right" size="3x" className="ml-auto grey-text" />              
                    </MDBListGroupItem>
                  )
                })
              }
            </MDBListGroup>

          </MDBCol>
        </MDBRow>
        
        <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
          <MDBModalHeader toggle={this.toggle}><MDBIcon icon="leaf" />{" " + this.state.title}</MDBModalHeader>
          <MDBModalBody>
            {details}            
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      

      </MDBContainer>
    );
  }
}

export default PlantList;