import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Info from './pages/Info';
import Moreinfo from './pages/Moreinfo';


function App() {
    return (
        <>
            <div style={{margin:"0",padding:"0"}}>
                <Router>
                    <Routes>
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/info' element={<Info />} />
                        <Route path='/Moreinfo' element={<Moreinfo />} />
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;