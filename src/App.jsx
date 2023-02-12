import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'

function App() {

  return <main className="modal">
    <section className="qrContainer">
      <img src="./public/images/image-qr-code.png" alt="" />
    </section>
    <section className="titleAndDescription">
    <h1 className="title">Improve your front-end skills by building projects</h1>
      <p className="description">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </section>
  </main>
}

export default App
