import './App.css'
import { Page2 } from './components/page2/page2'
import { Page3 } from './components/page3/page3'
import { Page4 } from './components/page4/page4'
import { Header } from './components/header/header'

function App() {

  return (
    <>
        <div className='container'>
          <Header />
          <Page2 />
          <Page3 />
          <Page4 />
        </div>
    </>
      
        
  )
}

export default App
