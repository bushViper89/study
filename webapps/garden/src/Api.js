import axios from 'axios';

const Api = axios.create({
  baseURL: '/garden',
  params: {
    apiKey: '20201130LORDNUL4PV0R0IAIVEVOQ',
  }
})

export default Api;