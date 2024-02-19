import { motion } from "framer-motion";
const NotFound = ({ children }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <h1>{children}</h1>
      </motion.div>
    </div>
  );
};

export default NotFound;
