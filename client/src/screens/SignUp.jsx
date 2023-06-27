import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    }else{
      alert("data added");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container">
        
   <h1>Student Register</h1>
      <form action="" method="POST"  onSubmit={handleSubmit}>  
        <input
          type="text"
          name="name"
          required
          value={credentials.name}
          onChange={onChange}
          placeholder="Enter Name"
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          required
          value={credentials.email}
          onChange={onChange}
          placeholder="Enter Email"
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          required
          value={credentials.password}
          onChange={onChange}
          placeholder="Enter Password"
        />
        <br />
        <br />
        <input
          type="location"
          name="location"
          required
          value={credentials.location}
          onChange={onChange}
          placeholder="Enter location"
        />
        <br />
        <br />
        <input type="submit" value="submit" />
        <br />
        <br />
        <Link to="/login" className="btn text-decoration-none"> i'm Already validate user </Link>
        
      </form>
      </div>
    </>
  );
}








      // <section className="vh-100" style={{ backgroundColor: "#282c34" }}>
      //     <div className="container h-100">
      //       <div className="row d-flex justify-content-center align-items-center h-100">
      //         <div className="col-lg-10 col-xl-8 ">
      //           <div
      //             className="card text-black"
      //             style={{ borderRadius: "25px" }}
      //           >
      //             <div className="card-body p-md-5">
      //               <div className="row justify-content-center">
      //                 <div className="col-md-10 col-lg-8 col-xl-12 order-2 order-lg-1">
      //                   <p className="text-center text-success h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
      //                     Sign up
      //                   </p>

      //                   <form className="mx-1 mx-md-4" method="POST" action="" onSubmit={handleSubmit}>
      //                     <div className="d-flex flex-row align-items-center mb-4 text-light">
      //                       <i className="fas fa-user fa-lg me-3 fa-fw"></i>
      //                       <div className="form-outline flex-fill mb-0">
      //                         <input
      //                           required
      //                           name="name"
      //                           value={credentials.name}
      //                           onChange={onChange}
      //                           type="text"
      //                           id="form3Example1c"
      //                           className="form-control"
      //                         />
      //                         <label
      //                           className="form-label"
      //                           htmlFor="form3Example1c"
      //                         >
      //                           Your Name
      //                         </label>
      //                       </div>
      //                     </div>

      //                     <div className="d-flex flex-row align-items-center mb-4 text-light">
      //                       <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
      //                       <div className="form-outline flex-fill mb-0">
      //                         <input
      //                           required
      //                           name="email"
      //                           value={credentials.email}
      //                           onChange={onChange}
      //                           type="email"
      //                           id="form3Example3c"
      //                           className="form-control"
      //                         />
      //                         <label
      //                           className="form-label"
      //                           htmlFor="form3Example3c"
      //                         >
      //                           Your Email
      //                         </label>
      //                       </div>
      //                     </div>

      //                     <div className="d-flex flex-row align-items-center mb-4 text-light">
      //                       <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
      //                       <div className="form-outline flex-fill mb-0">
      //                         <input
      //                           required
      //                           name="password"
      //                           value={credentials.password}
      //                           onChange={onChange}
      //                           type="password"
      //                           id="form3Example4c"
      //                           className="form-control"
      //                         />
      //                         <label
      //                           className="form-label"
      //                           htmlFor="form3Example4c"
      //                         >
      //                           Password
      //                         </label>
      //                       </div>
      //                     </div>

      //                     <div className="d-flex flex-row align-items-center mb-4 text-light">
      //                       <i className="fas fa-key fa-lg me-3 fa-fw"></i>
      //                       <div className="form-outline flex-fill mb-0">
      //                         <input
      //                           required
      //                           name="location"
      //                           value={credentials.location}
      //                           onChange={onChange}
      //                           type="text"
      //                           id="form3Example4cd"
      //                           className="form-control"
      //                         />
      //                         <label
      //                           className="form-label"
      //                           htmlFor="form3Example4cd"
      //                         >
      //                           Enter your location
      //                         </label>
      //                       </div>
      //                     </div>

      //                     {/* <div className="d-flex flex-row align-items-center mb-4">
      //                       <i className="fas fa-key fa-lg me-3 fa-fw"></i>
      //                       <div className="form-outline flex-fill mb-0">
      //                         <input
      //                           required
      //                           name="name"
      //                           value={credentials.name}
      //                           onChange={onChange}
      //                           type="password"
      //                           id="form3Example4cd"
      //                           className="form-control"
      //                         />
      //                         <label
      //                           className="form-label"
      //                           htmlFor="form3Example4cd"
      //                         >
      //                           Repeat your password
      //                         </label>
      //                       </div>
      //                     </div> */}

      //                     <div className="form-check d-flex justify-content-center mb-5 text-light">
      //                       <input
      //                         required
      //                         className="form-check-input me-2"
      //                         type="checkbox"
      //                         value=""
      //                         id="form2Example3c"
      //                       />
      //                       <label
      //                         className="form-check-label"
      //                         htmlFor="form2Example3"
      //                       >
      //                         I agree all statements in{" "}
      //                         <a href="#!">Terms of service</a>
      //                       </label>
      //                     </div>

      //                     <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 text-light">
      //                       <button
      //                         type="button"
      //                         className="btn btn-primary btn-lg m-3"
      //                       >
      //                         Register
      //                       </button>

      //                       <button
      //                         type="button"
      //                         className="btn btn-secondary btn-lg m-3"
      //                       >
      //                         <Link
      //                           to="/login"
      //                           className="  btn text-decoration-none "
      //                         >
      //                           i'm Already validate user
      //                         </Link>
      //                       </button>
      //                     </div>
      //                   </form>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </section>