import React from "react";
import { NavLink } from "react-router-dom";

function Voting() {
    return (
        <div class="px-4 py-5 my-5">
            <div class="container col-lg-9 text-center">
                <h1 class="lead mb-4 display-5 fw-bold">How to vote</h1>
                <hr />
            </div>
            <div class="col-lg-8 mx-auto">
                <h4 class=" fw-bold lh-1 mb-3 text-left">Voting Eligibility</h4>
                <p class="lead">In ultricies fermentum aliquet. Pellentesque dui magna, condimentum non ullamcorper at, cursus in sem. Nunc condimentum, purus ac enenatis commodo libero, am auctor porta tortor, nec consequat nibh finibus a. Sed ultrices risus eget iaculis luctus. Mauris vel gravida magna. </p>

                <h4 class=" fw-bold lh-1 mb-3 text-left">COVID-19 Safety Measures</h4>
                <p class="lead">In ultricies fermentum aliquet. Pellentesque dui magna, condimentum non ullamcorper at, cursus in sem. Nunc condimentum, purus ac enenatis commodo libero, am auctor porta tortor, nec consequat nibh finibus a. Sed ultrices risus eget iaculis luctus. Mauris vel gravida magna. </p>

                <h4 class=" fw-bold lh-1 mb-3 text-left">Important Dates</h4>
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                        <h5 class="card-title">2022 Federal Election</h5>
                        <h6 class="card-subtitle mb-2 text-muted">May 7th, 14th or 21st</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Voting;