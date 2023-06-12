
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Residencies from './components/Residencies/Residencies'
import Companies from './components/companies/Companies'

function App() {

  return (
   <div className="App"> 

    <div>
      <div className="white-gradient" />
    <Header />
    <Hero />
    </div>
    <Companies />
    <Residencies />
   </div>
  )
}

export default App
