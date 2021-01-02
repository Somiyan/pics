import axios from 'axios';

export default axios.create({
  baseURL : 'https://api.unsplash.com',
  headers :{
    Authorization: 'Client-ID SIFK3eRDS_tpc5FgkuJyGC2wQeaKyUjZhOVBazTz60Y'
  }
});
