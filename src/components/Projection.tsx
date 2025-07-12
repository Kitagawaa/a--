import { ChatBubbleIcon, AspectRatioIcon } from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/magicui/BentoGrid";
import { ReactComponent as CommunityIcon } from "../asset/community.svg";

const features = [
  {
    Icon: AspectRatioIcon,
    name: "豆子社区",
    description: "一个生活社区项目，用户可以发布笔记、点赞、评论、搜索等功能。",
    href: "/",
    cta: "了解更多",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: ChatBubbleIcon,
    name: "小豆子 AI 聊天",
    description: "基于多模型架构的 AI 对话系统，支持 DeepSeek、OpenAI 等主流大模型灵活切换。",
    href: "/",
    cta: "了解更多",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-2 lg:col-end-3",
  }
];

export function Projection() {
  return (
    <div className="p-8">
       <p className="text-center mb-8 text-2xl font-bold">我的项目</p>
       <BentoGrid className="grid-cols-2 max-w-4xl mx-auto gap-8">
       {features.map((feature) => (
           <BentoCard key={feature.name} {...feature} />
       ))}
       </BentoGrid>
    </div>
  );
}

export default Projection;
