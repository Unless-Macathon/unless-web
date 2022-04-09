import React from "react";
import { NavLink } from "react-router-dom";


function Home() {
//     let navigate = NavLink(); 
//   const routeChange = () =>{ 
//     let path = `/MP`; 
//     navigate(path);
// }
  return (
    <div className="px-4 py-5 my-5 text-center">
      <div class="container col-lg-8">
        <h1 class="display-7 fw-bold">Homepage</h1>
        <hr/>
          <div class="col-lg-10">
          </div>
          <div class="col-lg-16 mx-auto">
              <h2>Be Ready to Vote Today </h2><br/>
            <p class="lead mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <h1 class="display-7 fw-bold">Search for your MP</h1>
            <hr/>
            <br/>
            <form class> 
                <div class="input-group"> 
                    <div class = "col-lg-10 mx-auto"> 
                        <input type="text" class="form-control" placeholder="Search for Name, Postcode, Electorate..." aria-label="Search"></input>
                    </div>
                    <div class = "input-group-button"> 
                    <button class="btn btn-default" style={{color: '#7B2CBF', border: "2px solid #7B2CBF"}} type="submit"> 
                    <NavLink className="" style={{color: '#7B2CBF', textDecoration: "none"}} to="/MP">
                        Search
                    </NavLink>
                        {/* Search */}
                    </button>
                    </div>
                </div>
            </form>
          </div>
        </div>
      </div>

  );
}

export default Home;