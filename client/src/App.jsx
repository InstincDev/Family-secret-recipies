import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import RecipePage from "./pages/RecipePage/RecipePage.jsx";
import {UserProfilePage} from "./pages/UserProfilePage/UserProfilePage.jsx";
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
