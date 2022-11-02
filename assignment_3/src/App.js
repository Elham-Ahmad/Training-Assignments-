import logo from './logo.svg';
import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard';
import AdminLogin from './components/admin/adminLogin';
import UserLogin from './components/user/userLogin';
import UserDashboard from './components/user/userDashboard';
import UserRegister from './components/user/userRegister';
import AdminPanel from './components/admin/adminPanel';
import AddHotel from './components/admin/addHotel';
import Hotels from './components/admin/hotels';
import {useState} from 'react';
import CanceledBooking from './components/admin/canceledBooking';
import UpdateHotels from './components/admin/updateHotels';
import Users from './components/admin/users';
import Navigation from './components/navigation';
import UpdateHotel from './components/admin/updateHotel';

function App() {
  
  const [hotels, sethotels] = useState([])

  const userDataHandler =(hotel)=>{
    sethotels((prevData)=>{
        return [...prevData,hotel]
    })
    console.log(hotels)
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Dashboard/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/admin' element ={<AdminLogin/>}/>
        <Route path='/user' element ={<UserDashboard/>}/>
        <Route path='/userLogin' element ={<UserLogin/>}/>
        <Route path='/userRegister' element ={<UserRegister/>}/>
        <Route path='/adminPanel' element ={<AdminPanel/>}/>
        <Route path='/addHotel' element ={<AddHotel userDataHandler={userDataHandler}/>}/>
        {/* <Route path='/addHotel' element ={<AddHotel/>}/> */}
        <Route path='/hotels' element ={<Hotels hotelData = {hotels} />}/>
        {/* <Route path='/hotels' element ={<Hotels  />}/> */}

        <Route path='/updateHotels' element ={<UpdateHotels updateHotelData = {hotels} />}/>
        {/* <Route path='/updateHotels' element ={<UpdateHotels />}/> */}

        <Route path='/canceledBooking' element ={<CanceledBooking />}/>
        <Route path='/users' element ={<Users/>}/> 
        <Route path='/updateHotel' element ={<UpdateHotel updateHotelData  = {hotels} />}/> 

       
       

      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
