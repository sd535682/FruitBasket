import React from "react";

function Banner() {
  return (
    <div className="grid md:grid-cols-2 w-full items-center py-2 md:py-4 px-2 md:px-4 bg-slate-100 text-center md:text-left">
      <div>
        <img
          className="drop-shadow-2xl"
          src="/images/blueberry.png"
          alt="Blueberry"
        />
      </div>
      <div>
        <h1 className="font-bold text-3xl md:text-6xl text-green-600">
          The Fastest Delivery in <h1 className="text-gray-600">Your City</h1>
        </h1>
        <h3 className="py-8 font-medium text-gray-400">
          Enjoy nature's freshest bounty delivered straight to your door. Order
          a wide variety of seasonal fruits sourced locally with just a few
          clicks.
        </h3>
        <button className="bg-green-600 text-white py-2 px-4 rounded-lg font-semibold drop-shadow-md">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Banner;
