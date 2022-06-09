import React from "react";
import Delivery from "../img/fast-delivery.png";
import Like from "../img/like.png";
import Support from "../img/support.png";

const WhyUs = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-5 mx-auto">
        <div class="flex flex-col text-center w-full mb-10">
          <h2 class="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">
            Ən yaxşısını istəyirik
          </h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Bizi niyə seçməlisiniz ?
          </h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 transition duration-300 hover:bg-white hover:scale-105 lg:hover:scale-110 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                  <img src={Delivery} class="w-15 h-15" />
                </div>
                <h2 class="text-gray-900 text-lg title-font font-medium">
                  Ən sürətli çatdırılma
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  Sifarişiniz 20 dəqiqə ərzində qapınızda.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col transition duration-300 hover:bg-white hover:scale-105 lg:hover:scale-110">
              <div class="flex items-center mb-3">
                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                  <img src={Like} class="w-15 h-15" />
                </div>
                <h2 class="text-gray-900 text-lg title-font font-medium">
                  Keyfiyyətli
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  Həmişə keyfiyyətimiz ilə seçilirik
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col transition duration-300 hover:bg-white hover:scale-105 lg:hover:scale-110">
              <div class="flex items-center mb-3">
                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                  <img src={Support} class="w-15 h-15" />
                </div>
                <h2 class="text-gray-900 text-lg title-font font-medium">
                  Dəstək
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  7/24 dəstək xidməti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
