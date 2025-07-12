import React from 'react';
import javaSvg from '../asset/java.svg';
import dockerSvg from '../asset/docker.svg';
import gitSvg from '../asset/git.svg';
import mysqlSvg from '../asset/mysql.svg';
import reactSvg from '../asset/react.svg';
import redisSvg from '../asset/redis.svg';
import springSvg from '../asset/spring.svg';
import tsSvg from '../asset/ts.svg';
import linuxSvg from '../asset/linux.svg';

const defaultTweets: TweetProps[] = [
  {
    avatar: javaSvg,
    author: 'Java',
    content: 'Java is my main programming language and I usually use it to develop back-end projects.',
    progress: 65
  },
  {
    avatar: springSvg,
    author: 'Spring',
    content: 'Commonly used frameworks. Besides, I am also familiar with springboot, spring cloud and spring ai.',
    progress: 60
  },
  {
    avatar: mysqlSvg,
    author: 'MySQL',
    content: 'I am also familiar with commonly used databases such as Cassandra and MongoDB.',
    progress: 65
  },
  {
    avatar: redisSvg,
    author: 'Redis',
    content: 'Common cache middleware, familiar with its data structure, persistence, elimination strategy, etc.',
    progress: 55
  },
  {
    avatar: reactSvg,
    author: 'React',
    content: 'I often use react framework for web development, it is easy for backend developers to get started.',
    progress: 40
  },
  {
    avatar: tsSvg,
    author: 'TypeScript',
    content: 'TypeScript with React is flexible and comfortable, and a combination I am familiar with.',
    progress: 40
  },
  {
    avatar: linuxSvg,
    author: 'Linux',
    content: 'Experience with Linux deployment projects.',
    progress: 40
  },
  {
    avatar: dockerSvg,
    author: 'Docker',
    content: 'It simplifies the environment in which applications are deployed and run.',
    progress: 40
  },
  {
    avatar: gitSvg,
    author: 'Git',
    content: 'Generally, visual plug-ins are used for operation.',
    progress: 30
  },
];

export { Tweet, defaultTweets };

interface TweetProps {
  author: string;
  content: string;
  avatar?: string;
  progress?: number; // 0-100
}

const Tweet: React.FC<TweetProps> = ({ author, content, avatar , progress = 0 }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow w-full max-w-[360px] min-h-[130px] border border-gray-200">
      <div className="flex items-start gap-4">
        <img src={avatar} alt={author} className="w-12 h-12 rounded-full bg-gray-100" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{author}</span>
          </div>
          <p className="mt-2 text-gray-800">{content}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div className="bg-gray-400 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SkillsProps {
  tweets?: TweetProps[];
}

const Skill: React.FC<SkillsProps> = ({ tweets = defaultTweets }) => {
  return (
    <div id="skill" className="py-12 px-4 skill-component">
      <h1 className="text-4xl font-bold text-center mb-12">我的一些技能</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-5xl mx-auto justify-items-center">
        {tweets.map((tweet, index) => (
          <Tweet key={index} {...tweet} />
        ))}
      </div>
    </div>
  );
};

export default Skill;