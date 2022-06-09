import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import CardContainer from "./CardContainer";
import Statistics from "./Statistics";

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setscrollValue] = useState(0);

  useEffect(() => {}, [scrollValue]);

  return (
    <div>
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <HomeContainer />

        <section className="w-full my-6">
          <div className="w-full flex items-center justify-between">
            <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
              Yeni və dadlı
            </p>
            <div className="hidden lg:flex gap-3 items-center">
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center"
                onClick={() => setscrollValue(-300)}
              >
                <MdChevronLeft className="text-lg text-white" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center"
                onClick={() => setscrollValue(300)}
              >
                <MdChevronRight className="text-lg text-white" />
              </motion.div>
            </div>
          </div>

          <RowContainer
            scrollValue={scrollValue}
            flag={true}
            data={foodItems?.filter((n) => n.category === "almameyve")}
          />
        </section>

        <MenuContainer />

        {cartShow && <CardContainer />}
      </div>
      <div>
        {" "}
        <Statistics className="w-full" />
      </div>
    </div>
  );
};

export default MainContainer;
