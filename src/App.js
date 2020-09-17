import React from 'react';
import { PageNotFound } from './components/common/404PargeNotFound';
import { setup, styled, glob } from 'goober'
import './styles/indes.sass'

setup(React.createElement)

function App() {
  return (
    <div className="App">
       <PageNotFound/>
       <Credits> 
          <p>
             <span className='author'>Author </span> 
             <span> @easyDev</span>
         </p>
          <p> 
            <span className='github'> Github </span> 
            <a href='https://github.com/efscomplex'>
               https://github.com/efscomplex
            </a>
         </p>
      </Credits> 
    </div>
  );
}

glob`.App { position: relative; }`

const Credits = styled('div')`
   padding: 2rem;
   position: absolute;
   bottom: 1rem;
   left: 0;
   color: var(--text-mute);
   .author, .github {
      font-weight: bold;
      color: var(--primary);   
   }
`
export default App;
