import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <DIV>
      <p>Designed and build by Vinod Hadmode with ❤️ 2023, All rights reserved. </p>
    </DIV>
  )
}

export default Footer

const DIV=styled.div`
   background-color: rgb(25, 25, 27);
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   height: 100px;
   box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
   /* border-radius: 30px 0px; */
`