
import './App.css'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import GetStarted from './components/GetStarted/GetStarted'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Residencies from './components/Residencies/Residencies'
import Companies from './components/companies/Companies'
import Value from './components/value/Value'

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
    <Value />
    <Contacts />
    <GetStarted />
    <Footer />
   </div>
  )
}

export default App
