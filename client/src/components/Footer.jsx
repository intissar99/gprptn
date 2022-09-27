import React from "react";

function Footer() {
  return (
    <footer class="bg-secondary fixed-bottom text-white text-center text-lg-start">
      <div class="container p-4">
        <div class="row">
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">What We Stand For:</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
              molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
              voluptatem veniam, est atque cumque eum delectus sint!
            </p>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Follow US</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-white">Facebook</a>
              </li>
              <li>
                <a href="#!" class="text-white">Instagram</a>
              </li>
              <li>
                <a href="#!" class="text-white">Linkedin</a>
              </li>
              <li>
                <a href="#!" class="text-white">Twiter</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-0">Navigate</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!" class="text-white">Contact Us</a>
              </li>
              <li>
                <a href="#!" class="text-white">Forum</a>
              </li>
              <li>
                <a href="#!" class="text-white">Services</a>
              </li>
              <li>
                <a href="#!" class="text-white">Products</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="text-center p-3" >
        © 2020 Copyright:
        <a class="text-white" href="#!">GPPRO.com</a>
      </div>
    </footer>
  );
}

export default Footer;
