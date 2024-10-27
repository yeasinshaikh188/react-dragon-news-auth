import logo from '../../../assets/logo.png'
import moment from 'moment';

function Header() {
  return (
    <div className='text-center space-y-3'>
        <img className='mx-auto' src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  )
}

export default Header

// moment().format("dddd, MMMM Do YYYY, h:mm:ss a")