import React from "react";
import TeamMembers from "../img/team-member.png"

const WhoAreWe = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 pt-5 pb-20 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Biz kimik və
            <br class="hidden lg:inline-block" />
            niyə bizi seçməlisiz ?
          </h1>
          <p class="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tristique leo vestibulum, rhoncus justo venenatis, posuere lorem.
            Vivamus posuere ut nisi sit amet tristique. Vivamus at posuere sem,
            rutrum rhoncus diam. Donec malesuada tincidunt felis, vitae dapibus
            massa tempus in.
          </p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="teamMember"
            src={TeamMembers}
          />
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
