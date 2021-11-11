import React from 'react';
import './contactus.sass';

/**
 * @return{JSX.Element}
**/
function Contactus(): JSX.Element {
  return (
    <div>
      <h1>Team XYZ</h1>
      <p>我們是這個網站的開發團隊</p>
      <div className='card'>
        <img src='https://avatars.githubusercontent.com/u/62501690?v=4' />
      </div>
      <div className='card'>
        <img src='https://avatars.githubusercontent.com/u/60529600?v=4' />
      </div>
      <div className='card'>
        <img src='https://avatars.githubusercontent.com/u/77784793?v=4' />
      </div>
      <h1>使用交通部PTX服務平臺</h1>
      <img src="https://ptx.transportdata.tw/PTX/logo.jpg" width="300px"/>
    </div>
  );
}

export default Contactus;
