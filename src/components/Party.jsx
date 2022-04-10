import React from "react";

function Party() {
    return (
        <div class="px-4 py-5 my-5">
            <div class="container col-lg-9 text-center">
                <h1 class="lead mb-4 display-5 fw-bold">Party Name</h1>
                <hr />
            </div>
            <div class="col-lg-8 mx-auto">
                <h4 class=" fw-bold lh-1 mb-3 text-left">Party Leader</h4>

                <table class="table table-bordered">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>All the Lorem Ipsum</td>
                        </tr>
                    </tbody>
                </table>

                <h4 class=" fw-bold lh-1 mb-3 text-left">Policies</h4>
                <p class="lead">In ultricies fermentum aliquet. Pellentesque dui magna, condimentum non ullamcorper at, cursus in sem. Nunc condimentum, purus ac enenatis commodo libero, am auctor porta tortor, nec consequat nibh finibus a. Sed ultrices risus eget iaculis luctus. Mauris vel gravida magna. </p>
            </div>
        </div>
    );
}

export default Party;