import React from "react";

function AllParties() {
    return (
        <div class="px-4 py-5 my-5">
            <div class="container col-lg-9 text-center">
                <h1 class="lead mb-4 display-5 fw-bold">All Political Parties</h1>
                <hr />
            </div>
            <div class="col-lg-8 mx-auto">
                <h4 class=" fw-bold lh-1 mb-3 text-left">Current political party</h4>
                <p class="lead">In ultricies fermentum aliquet. Pellentesque dui magna, condimentum non ullamcorper at, cursus in sem. Nunc condimentum, purus ac enenatis commodo libero, am auctor porta tortor, nec consequat nibh finibus a. Sed ultrices risus eget iaculis luctus. Mauris vel gravida magna. </p>

                <h4 class=" fw-bold lh-1 mb-3 text-left">Opposition party</h4>
                <p class="lead">In ultricies fermentum aliquet. Pellentesque dui magna, condimentum non ullamcorper at, cursus in sem. Nunc condimentum, purus ac enenatis commodo libero, am auctor porta tortor, nec consequat nibh finibus a. Sed ultrices risus eget iaculis luctus. Mauris vel gravida magna. </p>


                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Ideology</th>
                            <th scope="col">Party Leader</th>
                            <th scope="col">House Seats</th>
                            <th scope="col">Senate Seats</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Liberal Party of Australia</th>
                            <td>Liberal conservatism</td>
                            <td>Scott Morrison</td>
                            <td>75/151</td>
                            <td>35/76</td>
                        </tr>
                        <tr>
                            <th scope="row">Australian Labour Party</th>
                            <td>Social democracy</td>
                            <td>Anthony Albanese</td>
                            <td>68/151</td>
                            <td>26/76</td>
                        </tr>
                        <tr>
                            <th scope="row">Australian Greens</th>
                            <td>Green politics</td>
                            <td>Adam Bandt</td>
                            <td>1/151</td>
                            <td>9/76</td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    );
}

export default AllParties;