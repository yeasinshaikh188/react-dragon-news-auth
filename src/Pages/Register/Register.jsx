import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    
    
       // handlRegister
       const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);  
        const form = new FormData(e.currentTarget); 

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const passord = form.get('password'); 
        console.log(name, photo, email, passord)

        // createUser 
        createUser(email, passord)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }


    return (
        <div>   
            <Navbar></Navbar>
           <div className="shadow-2xl mt-10 p-9 w-[100%] md:w-[70%] mx-auto">
           <h2 className="text-3xl font-bold text-center mb-9">Register your account</h2>
            <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-3/4 mx-auto">

              {/*name */}
              <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
        </div>

            {/* your photo */}
            <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Phoot URL" className="input input-bordered" required />
        </div>

          

            {/* email */}
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>

        {/* password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        {/* login button  */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center">Already Have An Account ? <Link className="text-red-500  font-bold" to="/login">Login</Link> </p>
           </div>

        </div>
    );
};

export default Register;