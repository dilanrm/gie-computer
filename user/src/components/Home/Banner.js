import React from "react";
import { SingleBanner } from "./SingleBanner";

export const Banner = () => {
  return (
    <section class="small-banner section">
      <div class="container-fluid">
        <div class="row">
          {/* <!-- Single Banner  --> */}
          <SingleBanner />
          {/* <!-- /End Single Banner  --> */}
        </div>
      </div>
    </section>
  );
};
