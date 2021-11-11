import React from 'react';
import SignUp from './components/SignUp';
import { Route , Routes  } from 'react-router-dom';
import Login from './components/Login';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<SignUp />} />
            </Routes>
        </div>
    );
};

export default App;