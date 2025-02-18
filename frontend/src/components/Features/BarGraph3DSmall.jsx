import { motion } from "framer-motion";

const BarGraph3DSmall = () => {
  const data = [30, 50, 80, 40, 70];

  return (
    <div className="bar-graph-container">
      {data.map((value, index) => (
        <motion.div
          key={index}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: `${value}%`, opacity: 1 }}
          transition={{ duration: 0.8, delay: index * 0.2, repeat: Infinity, repeatDelay: 3 }}
          className="bar"
        />
      ))}
    </div>
  );
};

export default BarGraph3DSmall; 