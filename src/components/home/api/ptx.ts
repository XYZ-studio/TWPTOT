import axios, {AxiosInstance} from 'axios';
import jsSHA from 'jssha';

/**
 * this function fuck ptxAPI
 * @return {AxiosInstance}
**/
export function ptxAPI(): AxiosInstance {
  const xDate = new Date().toUTCString();
  // eslint-disable-next-line new-cap
  const ShaObj = new jsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey('hDYdNJa8TdNMxrmOJpWhL2bod2Q', 'TEXT');
  ShaObj.update('x-date: ' + xDate);
  const HMAC = ShaObj.getHMAC('B64');
  // console.log(HMAC);

  return axios.create(
      {
        baseURL: 'https://ptx.transportdata.tw/MOTC/v2',
        headers: {
          'Accept': 'application/json',
          // eslint-disable-next-line max-len
          'Authorization': `hmac username="cfce14bb837e4b32b4935c4f6905bd93", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`,
          'X-Date': xDate,
        },
      },
  );
}
