import React from 'react'   // React import (needed for JSX)
import Navbar from './components/Navbar'  // Importing Navbar component

// Root App Component
const App = () => {
  return (
    <div>
      {/* Rendering Navbar at the top */}
      <Navbar />  
    </div>
  )
}

export default App  // Exporting App so it can be used in index.js
