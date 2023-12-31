import Ratings from "@/utils/Ratings";
import { styles } from "@/utils/styles";
import { Avatar, Card } from "@nextui-org/react";
import React from "react";

const SellerCard = () => {
  return (
    <Card className="py-4 bg-[#100d21] m-3 w-full md:w-[31%] 2xl:w-[23%] flex flex-col items-center text-white border border-[#ffffff22]">
      <Avatar
        src="https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_640.jpg"
        className="w-[80px] h-[80px]"
      />
      <span className={`${styles.label} py-2 text-xl`}>name</span>
      <div className="flex items-center">
        <span className={`${styles.label} pr-2`}>4/5</span>
        <Ratings rating={4} />
      </div>
      <span className={`${styles.label} py-2`}>Total Sales: 23</span>
    </Card>
  );
};

export default SellerCard;
