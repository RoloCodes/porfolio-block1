import React from 'react'
import css from 'styled-jsx/css'

function SectionBreak() {
  return (
    <>
      <style jsx>{styles}</style>
      <div></div>
    </>
  )
}

const styles = css`
  div {
    width: 124px;
    height: 6px;
    border-radius: 10px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
    margin-top: 80px;
  }
`

export default SectionBreak
