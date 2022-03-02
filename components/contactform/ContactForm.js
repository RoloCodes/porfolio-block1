import React, { useState } from 'react'
import css from 'styled-jsx/css'
import Button from 'components/button/Button'
import { useFormik } from 'formik'
import { TailSpin } from 'react-loader-spinner'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import axios from 'axios'

function ContactForm() {
  const [status, setStatus] = useState('unsubmitted')

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: async (values) => {
      setStatus('submitting')
      const res = await axios.post('/api/contact', values)
      setStatus('success')
    },
  })

  return (
    <>
      <style jsx>{styles}</style>
      <div className="container">
        {(function () {
          if (status == 'unsubmitted') {
            return (
              <>
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                  <div className="button-wrapper">
                    <Button>Get in Touch!</Button>
                  </div>
                </form>
              </>
            )
          } else if (status == 'submitting') {
            return (
              <figure>
                <TailSpin color="blue" width="200" height="200" />
              </figure>
            )
          } else if (status == 'success') {
            return (
              <figure>
                <FaCheckCircle color="green" size="200" />
                <p>Thank you for submitting, I&apos;ll reach out soon!</p>
              </figure>
            )
          } else if (status == 'failed') {
            return (
              <figure>
                <FaTimesCircle color="red" size="200" />
                <p>Something went wrong, try again later :(.</p>
              </figure>
            )
          }
        })()}
      </div>
    </>
  )
}

const styles = css`
  .container {
    display: flex;
    height: 400px;
    justify-content: center;
  }
  form {
    margin: auto;
    flex: 1 1 100%;
    align-self: stretch;
    max-width: 700px;
    padding-bottom: 60px;
  }
  label {
    display: block;
    font-size: 24px;
  }
  input {
    display: block;
    width: 100%;
    font-size: 24px;
    line-height: 32px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    display: block;
    color: #eee;
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 10px 0;
  }
  input:focus {
    color: #2e9ed2;
    border-bottom: 1px solid #2e9ed2;
  }
  .button-wrapper {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  p {
    font-size: 24px;
    padding-top: 30px;
    align-self: stretch;
  }
  figure {
    display: flex;
    flex-direction: column;
    justify-content: center;
    alight-items: center;
  }
`

export default ContactForm
