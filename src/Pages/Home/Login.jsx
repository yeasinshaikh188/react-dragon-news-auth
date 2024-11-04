import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
    // useContext 
    const {signIn} = useContext(AuthContext); 
    const location = useLocation(); 
    const navigate = useNavigate(); 
    console.log('location in the log in page', location)

    // handlLogin 
    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);  
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get("password"); 
        console.log(password, email)

        signIn(email, password)
        .then(result =>{
            console.log(result.user)

            // navigate after login
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            console.error(error); 
        })
    }

    // This can also be done----------
    // const handleLogin = e =>{
    //     e.preventDefault(); 
    //     const email = e.target.email.value 
    // }


     return (
        <div className="p-2">
            <Navbar></Navbar>
           <div className="shadow-2xl mt-10 p-9 w-[100%] md:w-[70%] mx-auto">
           <h2 className="text-3xl font-bold text-center mb-9">Login your account</h2>
            <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-3/4 mx-auto">
            
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center">Do Not Have An Account ? <Link className="text-red-500  font-bold" to="/register">Register</Link> </p>
           </div>

        </div>
    );
};

export default Login;