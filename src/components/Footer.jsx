import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-muted">Copyright &copy; UNLESS 2022</p>
          <a
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          ></a>
          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="/" class="nav-link px-2 text-muted">
                All Parties
              </a>
            </li>
            <li class="nav-item">
              <a href="/" class="nav-link px-2 text-muted">
                Voting
              </a>
            </li>
            <li class="nav-item">
              <a href="/" class="nav-link px-2 text-muted">
                Statistics
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
