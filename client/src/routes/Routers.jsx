import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../assets/pages/dashboard/DashBoard'
import ProtectedRoutes from './ProtectedRoutes'
import Signup from '../assets/pages/Signup'
import Admin from '../assets/pages/Admin'
import Mentor from '../assets/pages/Mentor'
import Recruitor from '../assets/pages/Recruitor'
import Home from '../assets/pages/Home'
import Login from '../assets/pages/Login'
import AtsScanner from '../assets/pages/AtsScanner'
import PlayLists from '../assets/pages/youtube/PlayLists'
import PlaylistContent from '../assets/pages/youtube/PlayListContent'
import InterviewPrep from '../assets/pages/InterviewPrep'
import PlacementResources from '../assets/pages/PlacementResources'
import JobSearch from '../assets/pages/JobSearch'
import Landing from '../components/Landing'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/student' element={<ProtectedRoutes allowedRoles={["student"]}><DashBoard/></ProtectedRoutes>}/>
        <Route path='/admin' element={<ProtectedRoutes allowedRoles={["admin"]}><Admin/></ProtectedRoutes>}/>
        <Route path='/mentor' element={<ProtectedRoutes allowedRoles={["mentor"]}><Mentor/></ProtectedRoutes>}/>
        <Route path='/recruitor' element={<ProtectedRoutes allowedRoles={["recruitor"]}><Recruitor/></ProtectedRoutes>}/>
        <Route path="/ats" element={<AtsScanner />} />
          <Route path="/interview-prep" element={<InterviewPrep />} />
          <Route pasth="/resources" element={<PlacementResources />} />
          <Route path="/jobs" element={<JobSearch />} />
          <Route path="/playlist" element={<PlayLists />} />
          <Route path="/playlist/:id" element={<PlaylistContent />} />
    </Routes>
  )
}

export default Routers
