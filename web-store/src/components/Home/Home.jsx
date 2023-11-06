import React from "react";
import NavigationBar from "../Navbar/Navigationbar";
import Carosel from "../Carosel/Carosel";
import "./Home.css";

function Home() {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>

      <div>
        <div class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img
                src="../../../Assets/images/man-suit.jpg"
                class="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="500"
                height="300"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold text-body-light lh-1 mb-3">
                MADE WITH THE HIGHSET QUALITY AND LUXURY CARE
              </h1>
              <p class="display text-light">
                Welcome to our luxury men's boutique. Experience timeless
                sophistication with our handcrafted suits, explore prestigious
                fragrances, and discover premium watches. Elevate your style and
                essence at our exclusive emporium for the modern gentleman.
              </p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-lg px-4"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Carosel />
    </div>
  );
}

export default Home;
