import './App.css'
import { Route, Routes } from 'react-router-dom'
import UserContext from './context/UserContext';
import { useContext , useState } from 'react';

import HomePage from './pages/HomePage';
import HomeLayout from './HomeLayout'
import ProblemPage from './pages/Problem_Page/ProblemPage'
import Create from './pages/Create_Problem/Create';
import Signup from './pages/Signup';
import LoginPage from './pages/LoginPage';
// import UserContextProvider from './context/UserContextProvider';
import PrivateRoute from './components/PrivateRoute';
import StandingPage from './pages/standings/StandingPage';
import AdminRoute from './components/AdminRoute';
import AdminDashboard from './pages/Admin Panel/AdminDashboard';
import MainPage from './pages/Admin Panel/admin_pages/MainPage';
import Problems from './pages/Admin Panel/admin_pages/Problems';
import Users from './pages/Admin Panel/admin_pages/Users';
import EditProblem from './pages/Admin Panel/admin_pages/EditProblem';

function App() {

  const { darkMode} = useContext(UserContext)

  return (
    <div className={darkMode && "tw-dark"}>
      {/* <UserContextProvider> */}
        <Routes>
          <Route path='/' element={<HomeLayout />}>
            <Route index element={<HomePage />} />

            <Route path='/submissions' element={<StandingPage />} />
          </Route>
          {/* <Route path='/problem/:id' element={<ProblemPage />} /> */}
          <Route path='/problem/:id' element={<PrivateRoute component={ProblemPage} redirectPath={"/login"} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<LoginPage />} />

          {/* <Route path="/admin" element={<HomeLayout />}>
            <Route path="" element={<AdminRoute component={AdminDashboard} redirectPath={"/login"} />}>

            </Route>
              <Route path='create' element={<AdminRoute component={Create} redirectPath={"/login"} />} />
          </Route> */}

          <Route path="/admin" element={<AdminDashboard />}>
            <Route path='dashboard' element={<AdminRoute component={MainPage} redirectPath={"/login"} />} />
            <Route path='create' element={<AdminRoute component={Create} redirectPath={"/login"} />} />
            <Route path='problems' element={<AdminRoute component={Problems} redirectPath={"/login"} />} />
            <Route path='users' element={<AdminRoute component={Users} redirectPath={"/login"} />} />
            <Route path='problem/edit/:id' element={<AdminRoute component={EditProblem} redirectPath={"/login"} />} />
          </Route>


        </Routes>
      {/* </UserContextProvider> */}
    </div>
  )
}

export default App
