import React from 'react';
import { styled } from 'goober'

export function PageNotFound(){
   return (
      <Page>
         <Text>
            <span className='number'>404</span> 
            <Wrap>
               <div className='pageNot'>
                  <span className='page'>PAGE</span> 
                  <span className='not'>NOT</span>
               </div>
            </Wrap>
            <span className='found'>found</span>
         </Text>
      </Page>
   )
}
const Wrap = styled('div')`
   display: inline-flex;
   align-items: center;
   .pageNot {
      display: inline-flex;
      flex-direction: column;
      font-size:2.5em;
      opacity: .7;
   }
   .page {
      font-size: 1em;
      line-height: .7em;
   }
   .not {
      font-size: 1.2em;
      line-height: .7em;
   }
`
const Text = styled('span')`
   text-transform: capitalize;
   display: flex;
   align-items: center;
   transform: translateY(-60%);
   .number {
      font-size: 5.5em;
   }
   .found {
      writing-mode: vertical-rl;
      text-orientation: upright;
      font-size: .9em;
      letter-spacing: -.2em;
      font-weight: 500;
   }
`
const Page = styled('div')`
   font-size: 2.35rem;

   height: 100vh;
   with: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #333;

   color: white;   
   * { line-height: 1em;}
`
