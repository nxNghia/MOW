import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { SignIn, SignUp } from '../Shared/Pages/Authenticate';

const PageRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/signin' exact element={<SignIn />} />
                <Route path='/signup' exact element={<SignUp />} />
            </Routes>
        </Router>
    )
}

export default PageRouter;
