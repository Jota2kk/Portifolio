import './App.css'
import { NavBar } from './components/header/header'
import { Page2 } from './components/page2/page2'
import { Page3 } from './components/page3/page3'
import { Page4 } from './components/page4/page4'

function App() {

  return (
    <>
        <div className='container'>
          <NavBar />
          <Page2 />
          <Page3 />
          <Page4 />
        </div>
    </>
      
        
  )
}

export default App
