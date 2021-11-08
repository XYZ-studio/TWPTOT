import React from 'react';
import './404.sass';

/**
 * @return {JSX.Element}
**/
function Page404(): JSX.Element {
  return (
    <div>
      <div id="center">
        <h1>
          糟糕！我們找不到頁面。<br />
          Oops! We cant find the page.
        </h1>
        <h2>
          我們找不到你想要瀏覽的網頁，但是我們可以帶你回首頁。<br />
          The page is not found,but we can bring you to homepage.
        </h2>
      </div>
      <a href='/'>
        <button className="button-29" role="button">
          GO TO HOMEPAGE
        </button>
      </a>
    </div>
  );
}

export default Page404;
