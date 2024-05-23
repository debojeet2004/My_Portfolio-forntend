import { Container, Footer } from './Components/compnents'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <Container classes={`px-5 flex flex-col items-center justify-start cursor-default selection:bg-stone-500 `}>
      <Outlet/>
      {/* <Footer/> */}
    </Container>
  )
}

export default App

//https://gdsc.community.dev/jis-university-kolkata-india/    // GDSC link
