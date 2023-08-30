import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Home from './Home';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetails';
import JobList from './JobList';

function RouteList({ }) {
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
        path="/*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
}

export default RouteList;