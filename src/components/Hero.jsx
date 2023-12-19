import React from 'react'
import {logo } from "../assets"

const Hero = () => {
  return (
    <header className="w-full flex justify-between items-center  flex-col ">
      <nav className="w-full flex justify-between items-center mb-10 pt-3 ">
        <img
          src={logo}
          alt="summarizer_logo"
          className="w-28 object-contain "
        />
        <button
          type="button"
          onClick={() => window.open("https://github.com/Sai-Manikanta-Andey")}
          className="black_btn "
        >
          Github
        </button>
      </nav>

      <h1 className='head_text'>Summarize Articles With <br className='max-md:hidden' /> <span className='orange_gradient'>Summarizer</span> </h1>
      <h2 className='desc'>Simplify your reading with Summarizer, that transforms lengthy articles into clear & concise summaries powered by OpenAI GPT-4</h2>
    </header>
  );
}

export default Hero