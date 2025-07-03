import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  const [catImage, setCatImage ] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchCatImage = () => {
    setLoading(true);
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
      setCatImage(data[0].url);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching a cat', error);
      setLoading(false);
    });
  };

  useEffect( () => {
    fetchCatImage();
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col items-center justify-center p-6">
  <div className="text-center mb-8">
    <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
      Hi ❤️
      <span className="ml-2">🐱</span>
    </h1>
    <p className="text-gray-500"></p>
  </div>

  <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md flex flex-col items-center">
    {loading ? (
      <div className="flex flex-col items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-blue-300 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-600 font-medium">Loading your purrfect cat...</p>
      </div>
    ) : (
      <div className="relative group">
        <img 
          src={catImage}
          alt="Random Cat"
          className="w-64 h-64 object-cover rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white font-medium">😻 Adorable!</span>
        </div>
      </div>
    )}

    <button 
      onClick={fetchCatImage}
      className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
    >
      Show Me Another Cat
      <span className="ml-2">⟳</span>
    </button>
  </div>

  <footer className="mt-12 text-gray-400 text-sm">
    Made with ❤️ for cat lovers
  </footer>
</div>
  )
}

export default App