import React from 'react';
import './rick.sass';

/**
 * @return{JSX}
**/
function Rick() {
  return (
    <div>
      <iframe id="rick" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1&loop=1&playlist=dQw4w9WgXcQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      <h1 style={{margin: 0, textAlign: 'center'}}>你被Rick了</h1>
    </div>
  );
}

export default Rick;
