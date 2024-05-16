import React from "react";

function Newsletter() {
  return (
    <div
      className="grid grid-cols-3 items-center justify-center py-2 md:py-4 px-10 md:px-80
     bg-slate-100 text-left shadow">
      <div className="col-span-2">
        <h1 className="text-lg md:text-3xl font-bold text-gray-700">
          Subscribe to Newsletter
        </h1>
        <h3 className="text-gray-500 text-xs md:text-lg font-medium mt-2">
          Stay fresh and informed! Subscribe to our newsletter for juicy
          updates, exclusive offers, and fruit-filled inspiration.
        </h3>
      </div>
      <div>
        <img
          className="drop-shadow-2xl w-full sm:w-max"
          src="/images/strawberry.png"
          alt="Blueberry"
        />
      </div>
      <div className="flex my-2">
        <form class="flex">
          <label for="email-address" class="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            required=""
            class="py-2 px-4 rounded-md border-0 bg-white/5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            class="py-2 px-4 flex-none rounded-md bg-white text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Notify me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
