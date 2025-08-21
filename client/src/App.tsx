
import { useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('')

  const handleMenuClick = (section: string) => {
    setActiveSection(section)
    // You can add navigation logic here later
    console.log(`Navigating to ${section}`)
  }

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#C8A8D8' }}>
      {/* Main Content */}
      <div className="flex items-center justify-start min-h-screen pl-16">
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6">
            Bradley 'Banjoko' Chude Williams
          </h1>
          <div className="space-y-2 text-gray-700">
            <p className="text-lg md:text-xl">Software Developer</p>
            <p className="text-lg md:text-xl">Problem Solver</p>
            <p className="text-lg md:text-xl">Dream Builder</p>
          </div>
        </div>
      </div>

      {/* Circular Navigation Menu */}
      <div className="fixed bottom-16 right-16">
        <div 
          className="w-48 h-48 rounded-full flex items-center justify-center relative"
          style={{ backgroundColor: '#FF7F7F' }}
        >
          {/* Menu Items */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <button
                onClick={() => handleMenuClick('about')}
                className="block text-gray-800 hover:text-gray-600 transition-colors duration-200 text-lg font-medium"
              >
                About
              </button>
              <button
                onClick={() => handleMenuClick('work')}
                className="block text-gray-800 hover:text-gray-600 transition-colors duration-200 text-lg font-medium"
              >
                Work
              </button>
              <button
                onClick={() => handleMenuClick('contact')}
                className="block text-gray-800 hover:text-gray-600 transition-colors duration-200 text-lg font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
