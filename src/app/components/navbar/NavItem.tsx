import { motion } from "framer-motion";

type Props = {
  text: string;
};

export default function NavItem({ text }: Props) {
  return (
    <li>
      <p>{text}</p>
      <svg viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 2,
          }}
          strokeWidth={4}
          d="M 0, 5 L 100, 5"
        />
      </svg>
    </li>
  );
}
