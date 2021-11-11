import React from 'react';
import './contactus.sass';

/**
 * @return{JSX.Element}
**/
function Contactus(): JSX.Element {
  return (
    <div>
      <h1>Team XYZ</h1>
      <h2>我們是這個網站的開發團隊</h2>
      <div id='member'>
        <div>
          <div className='card'>
            <img src='https://avatars.githubusercontent.com/u/62501690?v=4' />
          </div>
          <h3 className='dcid'>Young#0001</h3>
        </div>
        <div>
          <div className='card'>
            <img src='https://avatars.githubusercontent.com/u/60529600?v=4' />
          </div>
          <h3 className='dcid'>xiao xigua#8787</h3>
        </div>
        <div>
          <div className='card'>
            <img src='https://avatars.githubusercontent.com/u/77784793?v=4' />
          </div>
          <h3 className='dcid'>Zanzan (Space Master)#6122</h3>
        </div>
      </div>
      <h1 className='title'>使用的API</h1>
      <div id='box'>
        <h2>交通部PTX服務平臺</h2>
        <img src="https://ptx.transportdata.tw/PTX/logo.jpg" width="300px"/>
      </div>
    </div>
  );
}

export default Contactus;
