import React, { Component } from 'react';
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
    }
  }

render() {
  return (
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

      <MDBTable striped>
            <MDBTableHead color="primary-color" textWhite>
              <tr>
                <th>#</th>
                <th>First</th>
                <th>Last</th>
                <th>Handle</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
      </>
    );
  }
}

export default Details;