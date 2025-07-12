import { motion } from "framer-motion";
import { SparklesText } from "@/components/magicui/sparkles-text";

const description = "一位初出茅庐的全栈开发者&设计师，对技术的世界充满了好奇。";
const bio = "Momonga 是一位活泼可爱的小飞鼠，喜欢在互联网上分享自己的知识和经验，您可以通过 QQ、WeChat、Email 联系我。";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ContentSection() {
  return (
    <motion.div 
      className="w-full md:w-2/3 p-8"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={staggerItem}>
          <SparklesText sparklesCount={8} colors={{ first: '#A07CFE', second: '#FE8FB5'}}>
            <div className="text-4xl font-bold mb-0">
              Hi, 我是小飞鼠
            </div>
          </SparklesText>
      </motion.div>

      <motion.div variants={staggerItem} className="mb-4 mt-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          {description}
        </p>
      </motion.div>

      <motion.div variants={staggerItem}>
        <p className="text-gray-600 leading-relaxed">
          {bio}
        </p>
      </motion.div>
    </motion.div>
  );
}