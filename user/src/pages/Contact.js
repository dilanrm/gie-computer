import React, { useState } from "react";
import GoogleMap from "google-map-react";
import { Breadcrumb } from "../components/Breadcrumb";
import { Loading } from "../components/Loading";
import { Map } from "../components/Map";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

export const Contact = ({ loading }) => {
  const render = (status) => {
    return <h1>{status}</h1>;
  };
  const [clicks, setClicks] = useState([]);
  const [zoom, setZoom] = useState(18); // initial zoom
  const [center, setCenter] = useState({
    lat: -6.816771655482246,
    lng: 107.14793176137599,
  });

  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <div>
          <Breadcrumb />
          <section id="contact-us" class="contact-us section">
            <div class="container">
              <div class="contact-head">
                <div class="row">
                  <div class="col-lg-8 col-12">
                    <div class="form-main">
                      <div class="title">
                        <h4>Get in touch</h4>
                        <h3>Write us a message</h3>
                      </div>
                      <form class="form" method="post">
                        <div class="row">
                          <div class="col-lg-6 col-12">
                            <div class="form-group">
                              <label>
                                Your Name<span>*</span>
                              </label>
                              <input name="name" type="text" placeholder="" />
                            </div>
                          </div>
                          <div class="col-lg-6 col-12">
                            <div class="form-group">
                              <label>
                                Your Subjects<span>*</span>
                              </label>
                              <input
                                name="subject"
                                type="text"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div class="col-lg-6 col-12">
                            <div class="form-group">
                              <label>
                                Your Email<span>*</span>
                              </label>
                              <input name="email" type="email" placeholder="" />
                            </div>
                          </div>
                          <div class="col-lg-6 col-12">
                            <div class="form-group">
                              <label>
                                Your Phone<span>*</span>
                              </label>
                              <input
                                name="company_name"
                                type="text"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-group message">
                              <label>
                                your message<span>*</span>
                              </label>
                              <textarea
                                name="message"
                                placeholder=""
                              ></textarea>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-group button">
                              <button type="submit" class="btn ">
                                Send Message
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ height: "50vh", width: "100%" }}>
                <GoogleMap
                  apiKey={"AIzaSyBBrMsenYag_p7n2b3rJ_Smf-0jgTVZcCc"} // set if you need stats etc ...
                  center={center}
                  zoom={zoom}
                >
                  <Map
                    lat={-6.816771655482246}
                    lng={107.14793176137599}
                    text={"A"} /* Kreyser Avrora */
                  />
                </GoogleMap>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};
