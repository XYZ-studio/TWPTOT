import React from 'react';
import './contactus.sass';

/**
 * @return{JSX.Element}
**/
function Contactus(): JSX.Element {
  return (
    <div id="contactus">
      <h1>Team XYZ</h1>
      <h2>我們是這個網站的開發團隊</h2>
      <div id='member'>
        <div className='info'>
          <div className='card'>
            <img src='https://avatars.githubusercontent.com/u/62501690?v=4' />
          </div>
          <h3 className='dcid'>Young#0001</h3>
          <a className="fab fa-github" href="https://github.com/Young-TW"></a>
          <a className="fab fa-facebook" href="https://www.facebook.com/young20050727"></a>
          <a className="fab fa-instagram" href="https://www.instagram.com/young__tw"></a>
        </div>
        <div className='info'>
          <div className='card'>
            <img src='https://avatars.githubusercontent.com/u/60529600?v=4' />
          </div>
          <h3 className='dcid'>xiao xigua#8787</h3>
          <a className="fab fa-github" href="https://github.com/xiaoxigua-1"></a>
          <a className="fab fa-facebook" href="https://www.facebook.com/87408740A"></a>
          <a className="fab fa-instagram" href="https://www.instagram.com/xiaoxigua612/"></a>
        </div>
        <div className='info'>
          <div className='card'>
            <img src='https://avatars.githubusercontent.com/u/77784793?v=4' />
          </div>
          <h3 className='dcid'>Zanzan (Space Master)#6122</h3>
          <a className="fab fa-github" href="https://github.com/zanya945"></a>
          <a className="fab fa-facebook" href="https://www.facebook.com/profile.php?id=100002851670535"></a>
          <a className="fab fa-instagram" href="https://www.instagram.com/owo_music_game/"></a>
        </div>
      </div>
      <h1 className='title'>使用的API</h1>
      <h2>交通部PTX服務平臺</h2>
      <img src="https://ptx.transportdata.tw/PTX/logo.jpg" width="300px"/>
    </div>
  );
}

export default Contactus;
