import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Home from './Home';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetails';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import ProfileForm from './ProfileForm';

/** Shows routes to:
 * - homepage
 * - companies
 * - companies/:handle
 * - jobs
 * - login
 * - signup
 * - profile
 *
 * Props: none
 *
 * State: none
 *
 * App -> RouteList
 */

function RouteList() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/companies"
        element={<CompanyList />}
      />

      <Route
        path="/companies/:handle"
        element={<CompanyDetail />}
      />

      <Route
        path="/jobs"
        element={<JobList />}
      />

      <Route
        path="/login"
        element={<LoginForm />}
      />

      <Route
        path="/signup"
        element={<SignUpForm />}
      />

      <Route
        path="/profile"
        element={<ProfileForm />}
      />

      <Route
        path="/*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
}

export default RouteList;