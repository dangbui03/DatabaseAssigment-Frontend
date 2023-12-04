import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  text: string;
};

export default function NavItem({ text }: Props) {
  const [isHovered, setHovered] = useState(false);
  return (
    <div
      style={{ stroke: "#ffffff" }}
      className=" overflow-hidden w-40 whitespace-nowrap z-50"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p>{text}</p>
      <svg viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isHovered ? 1 : 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          strokeWidth={4}
          d="M 0, 5 L 100, 5"
        />
      </svg>
    </div>
  );
}
