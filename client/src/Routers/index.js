import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { SignIn, SignUp } from '../Shared/Pages/Authenticate';
import UserInformation from '../Shared/Pages/User-information';

const PageRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/dev'>
                    <Route path='signin' exact element={<SignIn />} />
                    <Route path='signup' exact element={<SignUp />} />
                    <Route path='info' exact element={<UserInformation />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default PageRouter;
