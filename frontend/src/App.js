import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
    return (
        <>
            <div style={{margin:"0",padding:"0"}}>
                <Router>
                    <Routes>
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;