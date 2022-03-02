import Navbar from 'components/navbar/Navbar'
import React from 'react'

function Layout({ children }) {
  return (
    <>
      <style jsx>{`
        .container {
          max-width: 1024px;
          margin: auto;
          padding-left: 30px;
          padding-right: 30px;
        }
      `}</style>
      <Navbar />
      <main className="container">{children}</main>
    </>
  )
}

export default Layout
