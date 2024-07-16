import React from "react";

const TopRowWrapper: React.FC = () => {
  return (
    <div className="bg-[#24A1AE] text-black py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div id="link_location_locator" className="top-row--schedule">
          <a href="/reviews" className="location-link flex items-center">
            <span className="star--wrapper flex space-x-1 mr-2">
              <span className="icon-star">★</span>
              <span className="icon-star">★</span>
              <span className="icon-star">★</span>
              <span className="icon-star">★</span>
              <span className="icon-star">★</span>
            </span>
            See what our customers have to say!
          </a>
        </div>

        <div id="store_locator" className="top-row--schedule hidden">
          <div id="fx_store_locator" className="hidden">
            <a className="location-link flex items-center">
              <span className="icon-location mr-2">📍</span>
              Scheduling Now in <span className="location ml-1">...</span>
            </a>
          </div>

          <div className="top-row--reviews hidden sm:flex items-center">
            <i className="icon-star">★</i>
            <i className="icon-star">★</i>
            <i className="icon-star">★</i>
            <i className="icon-star">★</i>
            <i className="icon-star">★</i>
            Read the latest reviews for our
            <div className="fx-closest-location ml-1"> location</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRowWrapper;
