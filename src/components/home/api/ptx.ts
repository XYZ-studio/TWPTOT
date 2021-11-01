import axios from 'axios';

export const ptxAPI = axios.create(
    {
      baseURL: 'https://ptx.transportdata.tw/MOTC/v2',
    },
);
