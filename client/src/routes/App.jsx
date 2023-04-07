import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Login from '@pages/Login';
import PasswordRecovery from '@pages/PasswordRecovery';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import PrivacyPolicy from '@pages/PrivacyPolicy';
import Documentations from '@pages/Documentations';
import TermsConditions from '@pages/TermsConditions';
import NotFound from '@pages/NotFound';
import AppContext from '@context/AppContext'
import useAuthentication from '@hooks/useAuthentication';
import '@styles/global.css';

const App = () => {
    const { isAuthenticated } = useAuthentication();
    return (
        <AppContext.Provider value={{ useAuthentication }}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sign-in" element={isAuthenticated ? <Navigate to='/my-account' /> : <Login />} />
                        <Route path="/password-recovery" element={<PasswordRecovery />} />
                        <Route path="/send-email" element={<SendEmail />} />
                        <Route path="/new-password" element={<NewPassword />} />
                        <Route path="/my-account" element={isAuthenticated ? <MyAccount /> : <Navigate to='/sign-in' />} />
                        <Route path="/sign-up" element={isAuthenticated ? <Navigate to='/my-account' /> : <CreateAccount />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/terms-conditions" element={<TermsConditions />} />
                        <Route path="/docs" element={<Documentations />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;