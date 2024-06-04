import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Ulogin from './Users/Ulogin';
import Ologin from './Organizer/Ologin';
import Osignup from './Organizer/Osignup';
import Usignup from './Users/Usingup';
import Alogin from './Admin/Alogin';
import Asignup from './Admin/Asingup';
import Ohome from './Organizer/Ohome';
import Odarshans from './Organizer/Odarshans';
import CreatedDarshan from './Organizer/CreatedDarshan';
import Mytemple from './Organizer/Mytemple';
import EVChargeFinder from './Organizer/Ohome';
import CreateTemple from './Organizer/CreateTemple';
import EditTemple from './Organizer/EditTemple';
import Uhome from './Users/Uhome';
import Utemples from './Users/Utemples';
import Utemple from './Users/Utemple';
import BookDarshan from './Users/BookDarshan';
import Mybookings from './Users/Mybookings';
import Bookings from './Organizer/Bookings';
import Ahome from './Admin/Ahome';
import Anavbar from './Admin/Anavbar';
import Users from './Admin/Users';
import Organizers from './Admin/Organizers';
import UserEdit from './Admin/UserEdit';
import OrganizerEdit from './Admin/OrganizerEdit';
import Rough from './Components/Rough';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Admin */}
        <Route path="/alogin" element={<Alogin />} />
        <Route path="/asignup" element={<Asignup />} />
        <Route path="/ahome" element={<Ahome />} />
        <Route path="/users" element={<Users />} />
        <Route path="/useredit/:id" element={<UserEdit />} />
        <Route path="/organizers" element={<Organizers />} />
        <Route path="/organizeredit/:id" element={<OrganizerEdit />} />

        {/* Organizer */}
        <Route path="/ologin" element={<Ologin />} />
        <Route path="/osignup" element={<Osignup />} />
        <Route path="/ohome" element={<Ohome />} />
        <Route path="/mytemple" element={<Mytemple />} />
        <Route path="/createtemple" element={<CreateTemple />} />
        <Route path="/edittemple/:id" element={<EditTemple />} />
        <Route path="/createdarshan" element={<CreatedDarshan />} />
        <Route path="/bookings" element={<Bookings />} />

        {/* User */}
        <Route path="/ulogin" element={<Ulogin />} />
        <Route path="/usignup" element={<Usignup />} />
        <Route path="/uhome" element={<Uhome />} />
        <Route path="/utemples" element={<Utemples />} />
        <Route path="/utemple/:id" element={<Utemple />} />
        <Route path="/odarshans" element={<Odarshans />} />
        <Route path="/bookdarshan/:id" element={<BookDarshan />} />
        <Route path="/mybookings" element={<Mybookings />} />
        <Route path="/mybookings" element={<Rough/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
