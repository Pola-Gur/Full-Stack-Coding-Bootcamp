import { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import ErrorBoundary from './components/ErrorBoundary.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

const HomeScreen = () => (
  <div>
    <h1>HomePage</h1>
    <img
      src="https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_1280.jpg"
      alt="Homepage"
      width="40%" />
  </div>
);


const ProfileScreen = () => (
  <div>
    <h1>ProfileSCreen</h1>
    <img
      src="https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_1280.jpg"
      alt="ProfileScreen"
      width="40%" />
  </div>
)

const ShopScreen = () => {
  throw new Error 
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <NavLink
          to="/messages"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Messages
        </NavLink>; */}
         <div>
           <ul>
             <li>
               <Link to="/">HomePage</Link>
             </li>
             <li>
               <Link to="/profile">ProfileScreen</Link>
             </li>
             <li>
               <Link to="/shop">ShopScreen</Link>
             </li>
           </ul>
           <Routes>
           
             <Route path="/" element={
              <ErrorBoundary>
                <HomeScreen />
              </ErrorBoundary>} />
            
             
             <Route path="/profile" element={<ErrorBoundary>
              <ProfileScreen />
             </ErrorBoundary> 
             } />
              
             
             <Route path="/shop" element={
              <ErrorBoundary>
                <ShopScreen />
             </ErrorBoundary>} />

           </Routes>
         </div>

    </>
  )
}

export default App
