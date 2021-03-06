import React from "react";
import Delivery from "../img/fast-delivery.png";
import Market from "../img/market.png";
import Partnership from "../img/handshake.png";

const Statistics = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-5 mx-auto">
        <div class="flex flex-col text-center w-full mb-5">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Dəyərli məlumatlar
          </h1>
        </div>
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg transition duration-300 hover:bg-white hover:scale-105 lg:hover:scale-110 hover:border-orange-200">
              <img src={Delivery} class="w-12 h-12 mb-3 inline-block" />

              <h2 class="title-font font-medium text-3xl text-gray-900">
                2700
              </h2>
              <p class="leading-relaxed">Çatdırılma</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg transition duration-300 hover:bg-white hover:scale-105 lg:hover:scale-110 hover:border-orange-200">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-black w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">
                1300
              </h2>
              <p class="leading-relaxed">İstifadəçi</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg transition duration-300 hover:bg-white hover:scale-105 lg:hover:scale-110 hover:border-orange-200">
              <img
                src={Market}
                class="text-yellow-500 w-12 h-12 mb-3 inline-block"
              />

              <h2 class="title-font font-medium text-3xl text-gray-900">150</h2>
              <p class="leading-relaxed">Mağaza</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg transition duration-300 hover:bg-white hover:scale-105 lg:hover:scale-110 hover:border-orange-200">
              <img
                src={Partnership}
                class="text-yellow-500 w-12 h-12 mb-3 inline-block"
              />

              <h2 class="title-font font-medium text-3xl text-gray-900">5</h2>
              <p class="leading-relaxed">Partnyor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
