import React, { PureComponent } from "react";

import Header from '../garden-ui/Header';
import Footer from '../garden-ui/Footer';
import GardenListContainer from '../../containers/main/GardenListContainer';

class MainPage extends PureComponent {
  render() {
    return <>
      <Header />
        <GardenListContainer />
      <Footer />
    </>
  }
}

export default MainPage;