import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Login from '@pages/Login';
import PasswordRecovery from '@pages/PasswordRecovery';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import User from '@pages/User';
import CreateAccount from '@pages/CreateAccount';
import PrivacyPolicy from '@pages/PrivacyPolicy';
import Playground from '@pages/Playground';
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
                        <Route path="/sign-in" element={isAuthenticated ? <Navigate to='/user' /> : <Login />} />
                        <Route path="/password-recovery" element={<PasswordRecovery />} />
                        <Route path="/send-email" element={<SendEmail />} />
                        <Route path="/new-password" element={<NewPassword />} />
                        <Route path="/user/:username?" element={<User />} />
                        <Route path="/sign-up" element={isAuthenticated ? <Navigate to='/user' /> : <CreateAccount />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/terms-conditions" element={<TermsConditions />} />
                        <Route path="/playground" element={<Playground />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;