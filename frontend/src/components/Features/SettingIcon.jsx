import { motion } from "framer-motion";
import { Cog } from "lucide-react";

const SettingIcon = () => {
  return (
    <div className="setting-icon-container">
      <motion.div
        animate={{ 
          rotate: 360 
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
        className="setting-icon"
      >
        <Cog className="w-8 h-8 text-[#7586B4]" />
      </motion.div>
    </div>
  );
};

export default SettingIcon;
