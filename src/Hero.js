import React from 'react'
import { useGlobalContext } from './context'
import phoneImg from './images/phone.svg'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1> Payment infrastructure for the internet</h1>
          <p>
            These example sentences are selected automatically from various online news sources to reflect current usage of the word 'para.' Views expressed in the examples do not represent the opinion of Merriam-Webster or its editors. Send us feedback
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  )
}

export default Hero
