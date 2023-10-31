
import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import MainPage from "./pages/MainPage.jsx";
import Cart from "./pages/Cart.jsx";
import Error from "./pages/Error.jsx";

function App() {

  return (
    <>
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path={'/cart'} element={<Cart/>}/>
        <Route path={'*'} element={<Error/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
