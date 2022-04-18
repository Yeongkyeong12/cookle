import MyJumbotron from "../components/MyJumbotron";
import Recommended from "../components/Recommended";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MyJumbotron />
      <Recommended />
    </motion.div>
  );
}

export default Home;
