import { Outlet } from "react-router-dom"
import { Container, Navbar2 } from "./Components/compnents"

function App() {
    return (
    <div className="flex relative">
    <Container classes={`px-5 flex flex-col items-center justify-center gap-2 cursor-default selection:bg-stone-500 `}>
        <Outlet/>
    </Container>
    <Navbar2/>
    </div>
    )
}

export default App