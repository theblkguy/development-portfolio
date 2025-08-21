import React from 'react'

function App() {
  return (
    <div>
      <header>
        <h1>Your Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>Welcome to my portfolio!</p>
        </section>

        <section id="projects">
          <h2>My Projects</h2>
          <p>Here are some of my works...</p>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default App
