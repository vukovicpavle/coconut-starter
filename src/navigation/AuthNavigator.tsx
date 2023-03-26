import React from 'react';
import StackNavigatorFactory from '../views/components/StackNavigatorFactory';
import ForgotPassword from '../views/pages/ForgotPassword';
import ForgotPasswordVerification from '../views/pages/ForgotPasswordVerification';
import Login from '../views/pages/Login';
import PrivacyPolicy from '../views/pages/PrivacyPolicy';
import Register from '../views/pages/Register';
import RegisterVerification from '../views/pages/RegisterVerification';
import ResetPassword from '../views/pages/ResetPassword';
import TermsAndConditions from '../views/pages/TermsAndConditions';

export default function AuthNavigator() {
  return (
    <StackNavigatorFactory
      routes={[
        {
          name: 'Login',
          component: Login,
          options: {title: 'Login'},
        },
        {
          name: 'Register',
          component: Register,
          options: {title: 'Register'},
        },
        {
          name: 'RegisterVerification',
          component: RegisterVerification,
          options: {title: 'Verify your email'},
        },
        {
          name: 'ForgotPassword',
          component: ForgotPassword,
          options: {title: 'Forgot Password'},
        },
        {
          name: 'ForgotPasswordVerification',
          component: ForgotPasswordVerification,
          options: {title: 'Verify your email'},
        },
        {
          name: 'ResetPassword',
          component: ResetPassword,
          options: {title: 'Reset Password'},
        },
        {
          name: 'TermsAndConditions',
          component: TermsAndConditions,
          options: {title: 'Terms and Conditions'},
        },
        {
          name: 'PrivacyPolicy',
          component: PrivacyPolicy,
          options: {title: 'Privacy Policy'},
        },
      ]}
    />
  );
}
