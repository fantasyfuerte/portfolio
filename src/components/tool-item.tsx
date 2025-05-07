"use client";

import { motion } from "motion/react";

interface Props {
  name: string;
  icon: string;
}


function ToolItem({ name, icon }: Props) {
  return (
    <motion.div
      className="w-full h-full flex flex-col justify-center items-center mb-1"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div
        key={name}
        className="h-10 w-10 flex items-center justify-center my-2"
      >
        <img
          src={icon}
          alt={name}
          width={40}
          height={40}
          className="w-full h-full object-contain drop-shadow-custom"
        />
      </div>
      <span className="font-bold text-[12px] text-center opacity-90">
        {name}
      </span>
    </motion.div>
  );
}

export default ToolItem;
