import React, { Component } from 'react';
import Api from '../../Api';
import parseFromString from "react-native-xml2js";
import {   
  MDBTable,
  MDBTableHead,
  MDBTableBody,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, 
} from 'mdbreact';

class Details extends Component {

  constructor(props) {
    super(props);

    this.state = {
      images: props.images,
      cntntsNo: props.cntntsNo,
      info: []
    }
  }

  componentDidMount() {
    this.getDetailsInfo();
  }

  getDetailsInfo = async () => {
    await Api.get('/gardenDtl', {
      params: {        
        cntntsNo: this.state.cntntsNo
      }
    })
    .then(res => {      
      parseFromString.parseString(res.data, (err, result) => {
        let info = JSON.parse(JSON.stringify(result)).response.body[0].item[0];
        this.setState({
          info
        });
      });
    })
    .catch(error => {
      console.log("axios error");
    })
  }

  render() {
    return (this.state.info.length !== 0) && (
      <>
      <MDBCarousel
        activeItem={1}
        length={this.state.images.split("|").length}
        showControls={true}
        showIndicators={true}
        className="z-depth-1 mb-3 details"
      >
      <MDBCarouselInner>
        {
          this.state.images.split("|").map((value, index) => {
            return (
              <MDBCarouselItem itemId={index + 1} key={index}>
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={"http://www.nongsaro.go.kr/cms_contents/301/" + value}
                    alt="First slide"
                  />
                </MDBView>
              </MDBCarouselItem>
            )
          })
        }
      </MDBCarouselInner>
      </MDBCarousel>

      <MDBTable striped className="text-center">
        <MDBTableHead color="primary-color" textWhite>
          <tr>
            <th>꽃색</th>
            <th>열매색</th>
            <th>꽃피는 계절</th>
            <th>번식 시기</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>{(this.state.info.flclrCodeNm[0].length) ? this.state.info.flclrCodeNm : "정보 없음"}</td>
            <td>{(this.state.info.fmldecolrCodeNm[0].length) ? this.state.info.fmldecolrCodeNm : "정보 없음"}</td>
            <td>{(this.state.info.fmldeSeasonCodeNm[0].length) ? this.state.info.fmldeSeasonCodeNm : "정보 없음"}</td>
            <td>{(this.state.info.prpgtEraInfo[0].length) ? this.state.info.prpgtEraInfo : "정보 없음"}</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
      </>
    );
  }    
}

export default Details;