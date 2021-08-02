import React, { Component } from "react";
import axios from "axios";
import parseFromString from "react-native-xml2js";
import Loader from "../components/Loader";
import PlantList from "../components/PlantList";
import PageNavi from "../components/PageNavi";
import NotFound from "./NotFound";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isError: true,
      plants: [],
      currentPage: props.match.params.page,
      rows: 8,
    }
  }

  componentDidMount() {
    this.getGardenList();
  }

  getGardenList = async () => {
    await axios('/garden/gardenList', {
      params: {
        apiKey: '20201130LORDNUL4PV0R0IAIVEVOQ',
        pageNo: this.state.currentPage,
        numOfRows: this.state.rows,
      }
    })
    .then(res => {
      parseFromString.parseString(res.data, (err, result) => {
        let info = JSON.parse(JSON.stringify(result)).response.body[0].items[0];
        // console.log(info);
        this.setState({
          isLoading: false,
          isError: (info.item === undefined),
          plants: info.item,
          totalPage: Math.ceil(info.totalCount[0] / this.state.rows)
        });
      });
    })
    .catch(error => {
      console.log("axios error");
      this.setState({
        isLoading: false,
        isError: true,
      })
    })
  }

  render() {
    return <>
      {this.state.isLoading ?
        <Loader />
        :
        (this.state.isError ?
          <NotFound />
          :
          (<><PlantList list={this.state.plants} /><PageNavi currentPage={this.state.currentPage} totalPage={this.state.totalPage} /></>)
        )
      }
    </>
  }
}

export default Home;