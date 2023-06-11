import {BrowserRouter, Routes, Route} from "react-router-dom";
import { HomePage, RecipePage, UserProfilePage } from "./pages";
import './App.css'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe" element={<RecipePage/>}/>
          <Route path="/user" element={<UserProfilePage/>}/>
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
