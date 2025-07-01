import React from 'react'
import './App.css'
import WikiPageRegistry from './components/Header'
import { BrowserRouter} from 'react-router-dom'
import Hero from './sections/Hero'
import WhyDocumentSection from './sections/WhyDocumentSection'
import './index.css';
import StorySection from './sections/StorySection'



function App() {
 

  return (
    <>
    <BrowserRouter>
    <WikiPageRegistry/>
    <Hero/>
    <WhyDocumentSection />
    <StorySection/>
    {/* <Footer /> */}
    </BrowserRouter>

    </>
  )
}

export default App
