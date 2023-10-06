import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import LoginRoute from "./layouts/LoginRoute";
import Home from "./components/Home/Home";
import JobVacancy from "./components/JobVacancy/JobVacancy";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import AuthRoute from "./layouts/AuthRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import LayoutDashboard from "./layouts/LayoutDashboard";
import JobVacancyList from "./components/Dashboard/JobVacancyList";
import FormJob from "./components/Dashboard/FormJob";
import FormJobEdit from "./components/Dashboard/FormJobEdit";
import Profile from "./components/Dashboard/Profile";
import ChangePassword from "./components/Dashboard/ChangePassword";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/job-vacancy"
            element={
              <Layout>
                <JobVacancy />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <LoginRoute>
                <Layout>
                  <Login />
                </Layout>
              </LoginRoute>
            }
          />
          <Route
            path="/register"
            element={
              <Layout>
                <Register />
              </Layout>
            }
          />
          <Route
              path="/dashboard"
              element={
                <AuthRoute>
                  <LayoutDashboard>
                    <Dashboard />
                  </LayoutDashboard>
                </AuthRoute>
              }
            />
            <Route
              path="/dashboard/job-vacancy-list"
              element={
                <AuthRoute>
                  <LayoutDashboard>
                    <JobVacancyList />
                  </LayoutDashboard>
                </AuthRoute>
              }
            />
            <Route
              path="/dashboard/job-vacancy-list/form"
              element={
                <AuthRoute>
                  <LayoutDashboard>
                    <FormJob />
                  </LayoutDashboard>
                </AuthRoute>
              }
            />
            <Route
              path="/dashboard/job-vacancy-list/form/:id"
              element={
                <AuthRoute>
                  <LayoutDashboard>
                    <FormJobEdit />
                  </LayoutDashboard>
                </AuthRoute>
              }
            />
            <Route
              path="/dashboard/profile"
              element={
                <AuthRoute>
                  <LayoutDashboard>
                    <Profile />
                  </LayoutDashboard>
                </AuthRoute>
              }
            />
            <Route
              path="/dashboard/change-password"
              element={
                <AuthRoute>
                  <LayoutDashboard>
                    <ChangePassword />
                  </LayoutDashboard>
                </AuthRoute>
              }
            />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
