import React from "react";

export const Slider = () => {
  return (
    <section
      class="hero-slider"
      style={{
        backgroundImage:
          "url(" + "'" + process.env.PUBLIC_URL + "/images/banner-bg.jpg",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <!-- Single Slider --> */}
      <div class="single-slider" style={{ background: "rgba(0,0,0,0.1)" }}>
        <div class="container">
          <div class="row no-gutters">
            <div class="col-lg-9 offset-lg-3 col-12">
              <div class="text-inner">
                <div class="row">
                  <div class="col-lg-7 col-12">
                    <div class="hero-text">
                      {/* <h1 style={{color:"white",fontSize:"55px",marginTop:"170px"}}>
                        <span style={{color:"white",fontSize:"40px"}}>RAKIT PC KAMU SEKARANG DI </span><strong>GIE</strong> KOMPUTER
                      </h1> */}
                      {/* <div class="button">
                        <a href="#" class="btn">
                          Shop Now!
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--/ End Single Slider --> */}
    </section>
  );
};
