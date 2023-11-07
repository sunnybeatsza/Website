import React from "react";
import NavigationBar from "../Navbar/Navigationbar";
import Carosel from "../Carosel/Carosel";
import Footer from "../Footer/Footer";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="mb-3">
        <NavigationBar />
      </div>

      <div className="carosel-container ">
        <div>
          <Carosel />
        </div>
      </div>

      <div>
        <div class="container col-xxl-8 px-4 py-5 mt-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img
                src="../../../Assets/images/dashboard-merc.jpg"
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

      <div className="container px-4 py-5">
        <h2 className="pb-2 border-bottom text-light">Features with title</h2>
        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div className="col d-flex flex-column align-items-start gap-2">
            <h2 className="fw-bold text-body-light">
              Left-aligned title explaining these awesome features
            </h2>
            <p className="text-light">
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" className="btn btn-primary btn-lg">
              Primary button
            </a>
          </div>
          <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 g-4">
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#collection" />
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  Featured title
                </h4>
                <p className="text-body-secondary">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#gear-fill" />
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  Featured title
                </h4>
                <p className="text-body-secondary">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#speedometer" />
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  Featured title
                </h4>
                <p className="text-body-secondary">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#table" />
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  Featured title
                </h4>
                <p className="text-body-secondary">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="../assets/brand/bootstrap-logo.svg"
          alt=""
          width={72}
          height={57}
        />
        <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Primary button
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Secondary
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
