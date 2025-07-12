import { motion } from "framer-motion";
import avatar from "src/asset/小飞鼠.jpg";

const avatarImg = avatar;

export default function AvatarSection() {
  return (
    <motion.div 
      className="relative w-full md:w-1/3 flex justify-center items-center"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-52 h-52 rounded-full overflow-hidden shadow-lg"
        whileHover={{ 
          scale: 1.05, 
          rotate: 2,
          boxShadow: "0 0 20px 5px rgba(216, 180, 254, 0.6)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        <img 
          src={avatarImg} 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}