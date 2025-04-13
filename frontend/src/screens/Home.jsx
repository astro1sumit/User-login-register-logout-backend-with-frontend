import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/user.context'

const Home = () => {
  const { user } = useContext(UserContext)

  const portfolioItems = [
    { id: 1, title: 'Project 1', description: 'A modern e-commerce platform with a sleek design.', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Project 2', description: 'A task management app to boost productivity.', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Project 3', description: 'A portfolio website showcasing creative work.', image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Project 4', description: 'A blogging platform with rich features.', image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Project 5', description: 'A social media app with real-time chat hhghhhhjhjgv.', image: 'https://via.placeholder.com/150' },
    { id: 6, title: 'Project 6', description: 'An online learning platform with courses.', image: 'https://via.placeholder.com/150' },
  ]

  const [startIndex, setStartIndex] = useState(0)

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % portfolioItems.length)
  }

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 3 + portfolioItems.length) % portfolioItems.length)
  }

  const visibleItems = portfolioItems.slice(startIndex, startIndex + 3)


  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000) // Automatically scroll every 3 seconds
    return () => clearInterval(interval) // Cleanup interval on component unmount
  }, [])


  return (
    <div className="font-sans text-gray-800 p-5 text-center">
      <header className="bg-gray-100 p-5 rounded-lg mb-5">
        <img
          src="https://via.placeholder.com/150"   ></img>
        <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg mt-2">Hi, I'm {user?.name || 'Guest'}, a passionate developer!</p>
      </header>
      <section className="my-5">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-2">
          I specialize in creating modern, responsive web applications. Check out my work below!
        </p>
      </section>
      <section className="my-5">
        <h2 className="text-2xl font-semibold">Portfolio</h2>
        <div className="flex justify-between items-center mt-5">
          <button
            onClick={handlePrev}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            &lt;
          </button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 p-5 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg hover:bg-gray-200"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 object-cover rounded-md mb-3 transform transition-transform hover:rotate-3"
                />
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2">{item.description}</p>
              </div>  
            ))}
          </div>
          <button
            onClick={handleNext}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            &gt;
          </button>
        </div>
      </section>
      <footer className="mt-5 text-sm text-gray-600">
        <p>© 2023 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home