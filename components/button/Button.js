import React from 'react'
import css from 'styled-jsx/css'

function Button({ children, large }) {
  return (
    <>
      <style jsx>{styles}</style>
      <button className={large ? 'large' : 'small'}>{children}</button>
    </>
  )
}

const styles = css`
  button {
    display: flex;
    background-image: linear-gradient(270deg, #2edad8 0%, #9c48fa 100%);
    border: none;
    outline: none;
    color: white;
    transition: all 0.4s;
    cursor: pointer;
  }
  .small {
    font-size: 18px;
    border-radius: 10px;
    font-weight: 600;
    padding: 10px 20px;
  }
  .large {
    font-size: 24px;
    border-radius: 50px;
    font-weight: 600;
    padding: 18px 50px;
    margin-top: 40px;
  }
  button:hover {
    transform: scale(1.04);
  }
`

export default Button
