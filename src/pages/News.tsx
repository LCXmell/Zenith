import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Calendar,
  FileText,
  Tag,
  Search,
  ArrowRight
} from "lucide-react";
import Layout from "../components/Layout";
import { asset } from "@/lib/asset";

interface NewsProps {
    language: "zh" | "en";
    toggleLanguage: () => void;
}

export default function News({ language, toggleLanguage }: NewsProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const news = [
    {
      id: 1,
      title: "全球海运市场最新趋势分析",
      category: "industry",
      date: "2025-11-15",
      excerpt: "随着全球经济的复苏，海运市场呈现出新的发展趋势，我们的专家为您详细解读。",
      imageUrl: asset("/images/external/image-13.jpg"),
      views: 1254
    },
    {
      id: 2,
      title: "臻世国际物流新增南美东航线服务",
      category: "company",
      date: "2025-11-10",
      excerpt: "为了更好地服务客户，臻世国际物流新增了从中国到南美东的定期航线服务，提供更具竞争力的价格和更稳定的舱位保障。",
      imageUrl: asset("/images/external/image-14.jpg"),
      views: 987
    },
    {
      id: 3,
      title: "2025年国际物流行业展望",
      category: "industry",
      date: "2025-11-05",
      excerpt: "2025年，国际物流行业将面临哪些挑战和机遇？本文为您详细分析。",
      imageUrl: asset("/images/external/image-15.jpg"),
      views: 1567
    },
    {
      id: 4,
      title: "臻世国际物流荣获\"优秀物流企业\"称号",
      category: "company",
      date: "2025-10-28",
      excerpt: "在近日举行的国际物流行业峰会上，臻世国际物流凭借卓越的服务质量和专业的团队，荣获\"优秀物流企业\"称号。",
      imageUrl: asset("/images/external/image-16.jpg"),
      views: 876
    },
    {
      id: 5,
      title: "海运整箱和拼箱的区别及选择指南",
      category: "knowledge",
      date: "2025-10-20",
      excerpt: "在选择海运方式时，整箱和拼箱有什么区别？本文为您详细介绍，并提供选择指南。",
      imageUrl: asset("/images/external/image-17.jpg"),
      views: 2103
    },
    {
      id: 6,
      title: "臻世国际物流完成数字化物流平台升级",
      category: "company",
      date: "2025-10-15",
      excerpt: "为了提升服务效率和客户体验，臻世国际物流完成了数字化物流平台的全面升级，新增了多项功能。",
      imageUrl: asset("/images/external/image-18.jpg"),
      views: 765
    }
  ];
  
  const filteredNews = activeCategory === "all" 
    ? news 
    : news.filter(item => item.category === activeCategory);

  // 热门文章
  const popularNews = news
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  return (
    <Layout title="新闻资讯 - 臻世国际物流" language={language} toggleLanguage={toggleLanguage}>
      {/* 页面标题区域 */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">新闻资讯</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            了解最新的行业动态和公司新闻
          </p>
        </div>
      </section>

      {/* 内容区域 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* 新闻列表 */}
            <div className="lg:col-span-2">
              {/* 分类筛选 */}
              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  className={`px-6 py-2 rounded-full flex items-center ${
                    activeCategory === "all"
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-50"
                  } transition`}
                  onClick={() => setActiveCategory("all")}
                >
                  全部
                </button>
                <button
                  className={`px-6 py-2 rounded-full flex items-center ${
                    activeCategory === "company"
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-50"
                  } transition`}
                  onClick={() => setActiveCategory("company")}
                >
                  公司动态
                </button>
                <button
                  className={`px-6 py-2 rounded-full flex items-center ${
                    activeCategory === "industry"
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-50"
                  } transition`}
                  onClick={() => setActiveCategory("industry")}
                >
                  行业资讯
                </button>
                <button
                  className={`px-6 py-2 rounded-full flex items-center ${
                    activeCategory === "knowledge"
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-50"
                  } transition`}
                  onClick={() => setActiveCategory("knowledge")}
                >
                  物流知识
                </button>
              </div>

              {/* 新闻文章 */}
              <div className="space-y-8">
                {filteredNews.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="flex flex-col md:flex-row gap-6 bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                  >
                    <div className="md:w-1/3">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          {item.date}
                        </span>
                        <span className="flex items-center mr-4">
                          <Tag className="h-4 w-4 mr-1" />
                          {item.category === 'company' && '公司动态'}
                          {item.category === 'industry' && '行业资讯'}
                          {item.category === 'knowledge' && '物流知识'}
                        </span>
                        <span className="flex items-center">
                          <FileText className="h-4 w-4 mr-1" />
                          {item.views} 阅读
                        </span>
                      </div>
                      <a href={`/news/${item.id}`} className="block">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition">
                          {item.title}
                        </h3>
                      </a>
                      <p className="text-gray-600 mb-4">{item.excerpt}</p>
                      <a href={`/news/${item.id}`} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                        阅读全文
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 分页 */}
              <div className="mt-12 flex justify-center">
                <nav className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">上一页</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-current="page"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-600 text-sm font-medium text-white"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    3
                  </a>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                  </span>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    8
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">下一页</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>

            {/* 侧边栏 */}
            <div className="lg:col-span-1">
              {/* 搜索框 */}
              <div className="mb-10">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="搜索新闻..."
                    className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* 热门文章 */}
              <div className="bg-gray-50 p-6 rounded-lg mb-10">
                <h3 className="text-xl font-bold text-gray-800 mb-6">热门文章</h3>
                <div className="space-y-6">
                  {popularNews.map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="flex gap-4"
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                      }}
                      viewport={{
                        once: true,
                      }}
                    >
                      <div className="w-24 h-24 flex-shrink-0">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div>
                        <a href={`/news/${item.id}`} className="block">
                        <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition">
                          {item.title}
                        </h4>
                      </a>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 新闻分类 */}
              <div className="bg-gray-50 p-6 rounded-lg mb-10">
                <h3 className="text-xl font-bold text-gray-800 mb-6">新闻分类</h3>
                <ul className="space-y-3">
                  {[
                    { name: "公司动态", count: 12 },
                    { name: "行业资讯", count: 28 },
                    { name: "物流知识", count: 15 },
                    { name: "政策法规", count: 8 },
                    { name: "客户案例", count: 10 }
                  ].map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex justify-between items-center text-gray-700 hover:text-blue-600 transition"
                      >
                        <span>{category.name}</span>
                        <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                          {category.count}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 订阅资讯 */}
              <div className="bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">订阅资讯</h3>
                <p className="text-blue-100 mb-6">
                  订阅我们的资讯，获取最新的行业动态和公司新闻
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="请输入您的邮箱"
                    className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-900 hover:bg-blue-50 px-4 py-3 rounded-lg font-medium transition"
                  >
                    立即订阅
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 行业洞察 */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">行业洞察</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我们的专家团队为您提供深度的行业分析和市场洞察
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "2025年全球供应链发展趋势",
                description: "随着全球化的深入和技术的发展，全球供应链正在发生深刻变革。本文为您分析2025年全球供应链的发展趋势。",
                imageUrl: asset("/images/external/image-19.jpg")
              },
              {
                title: "数字化转型对物流行业的影响",
                description: "数字化转型正在改变物流行业的运营模式和服务方式。本文探讨数字化转型对物流行业的深远影响。",
                imageUrl: asset("/images/external/image-20.jpg")
              },
              {
                title: "可持续发展与绿色物流",
                description: "可持续发展已成为全球共识，绿色物流是物流行业未来的发展方向。本文介绍绿色物流的实践和发展前景。",
                imageUrl: asset("/images/external/image-21.jpg")
              }
            ].map((insight, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={insight.imageUrl}
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{insight.title}</h3>
                  <p className="text-gray-600 mb-6">{insight.description}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition flex items-center">
                    阅读全文
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 咨询服务 */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">需要物流咨询服务？</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              我们的专业团队随时为您提供物流咨询服务，帮助您解决物流难题
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition flex items-center justify-center mx-auto">
              立即咨询
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}