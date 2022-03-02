import Button from 'components/button/Button'
import Link from 'next/link'
import React from 'react'
import css from 'styled-jsx/css'

function Hero({ heading, subHeading, buttonText, bgImage }) {
  return (
    <>
      <style jsx>
        {`
          div {
            max-width: 580px;
          }
          h1 {
            font-weight: bold;
            font-size: 66px;
          }
          p {
            font-size: 24px;
            font-weight: 300;
            line-height: 40px;
            color: rgba(255, 255, 255, 0.7);
          }
          section {
            background-image: url(${bgImage});
            background-repeat: no-repeat;
            background-position: right center;
            background-size: 300px;
          }
        `}
      </style>
      <section>
        <div>
          <h1>{heading}</h1>
          <p>{subHeading}</p>
          <Link href="/about">
            <a>
              <Button large>{buttonText}</Button>
            </a>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Hero
