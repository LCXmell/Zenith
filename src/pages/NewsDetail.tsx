import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Calendar, Tag, FileText, ArrowLeft } from "lucide-react";
import Layout from "../components/Layout";

interface NewsDetailProps {
    language: "zh" | "en";
    toggleLanguage: () => void;
}

// 新闻数据，与News.tsx保持一致
const newsData = [
  {
    id: 1,
    title: "全球海运市场最新趋势分析",
    category: "industry",
    date: "2025-11-15",
    excerpt: "随着全球经济的复苏，海运市场呈现出新的发展趋势，我们的专家为您详细解读。",
    imageUrl: "/images/external/image-13.jpg",
    views: 1254
  },
  {
    id: 2,
    title: "臻世国际物流新增南美东航线服务",
    category: "company",
    date: "2025-11-10",
    excerpt: "为了更好地服务客户，臻世国际物流新增了从中国到南美东的定期航线服务，提供更具竞争力的价格和更稳定的舱位保障。",
    imageUrl: "/images/external/image-14.jpg",
    views: 987
  },
  {
    id: 3,
    title: "2025年国际物流行业展望",
    category: "industry",
    date: "2025-11-05",
    excerpt: "2025年，国际物流行业将面临哪些挑战和机遇？本文为您详细分析。",
    imageUrl: "/images/external/image-15.jpg",
    views: 1567
  },
  {
    id: 4,
    title: "臻世国际物流荣获\"优秀物流企业\"称号",
    category: "company",
    date: "2025-10-28",
    excerpt: "在近日举行的国际物流行业峰会上，臻世国际物流凭借卓越的服务质量和专业的团队，荣获\"优秀物流企业\"称号。",
    imageUrl: "/images/external/image-16.jpg",
    views: 876
  },
  {
    id: 5,
    title: "海运整箱和拼箱的区别及选择指南",
    category: "knowledge",
    date: "2025-10-20",
    excerpt: "在选择海运方式时，整箱和拼箱有什么区别？本文为您详细介绍，并提供选择指南。",
    imageUrl: "/images/external/image-17.jpg",
    views: 2103
  },
  {
    id: 6,
    title: "臻世国际物流完成数字化物流平台升级",
    category: "company",
    date: "2025-10-15",
    excerpt: "为了提升服务效率和客户体验，臻世国际物流完成了数字化物流平台的全面升级，新增了多项功能。",
    imageUrl: "/images/external/image-18.jpg",
    views: 765
  }
];

// 随机生成新闻内容的函数
const generateRandomContent = () => {
  const paragraphs = [
    "随着全球经济的持续复苏，国际海运市场呈现出一系列新的发展趋势。根据最新数据显示，2025年全球集装箱吞吐量预计将达到4.5亿TEU，同比增长5.2%。这一增长主要得益于亚洲地区的强劲需求，特别是中国、印度和东南亚国家的出口增长。",
    "在航线布局方面，各大船公司正在调整其全球航线网络，加强对新兴市场的覆盖。南美东、中东和非洲航线的运力投放持续增加，而传统的欧美航线则面临着运力过剩的压力。这种调整反映了全球贸易格局的变化，新兴市场正在成为全球贸易的新增长点。",
    "数字化转型是当前海运行业的另一个重要趋势。越来越多的船公司和货代企业开始投资数字化平台，提供在线订舱、货物跟踪、电子提单等服务。这些数字化服务不仅提高了运营效率，也提升了客户体验，成为企业竞争的新优势。",
    "可持续发展也是海运行业关注的焦点。随着国际海事组织(IMO)环保 regulations的日益严格，船公司正在加快船队更新，推广使用低硫燃油和清洁能源。同时，港口也在加强环保设施建设，减少碳排放和环境污染。",
    "对于货主来说，这些趋势意味着更多的选择和更好的服务，但也面临着运费波动和供应链不确定性的挑战。在这种情况下，选择一家专业、可靠的货代合作伙伴显得尤为重要。",
    "臻世国际物流作为行业领先的货代企业，始终密切关注市场动态，不断调整服务策略，以满足客户的多样化需求。我们拥有广泛的全球网络和专业的团队，能够为客户提供全方位的物流解决方案，帮助客户在复杂的市场环境中保持竞争优势。",
    "未来，我们将继续加大在数字化和可持续发展方面的投入，不断提升服务质量和效率，为客户创造更大的价值。我们相信，通过与客户的紧密合作，我们能够共同应对市场挑战，实现互利共赢。"
  ];
  
  // 随机选择3-5个段落
  const randomParagraphs = [];
  const paragraphCount = Math.floor(Math.random() * 3) + 3;
  
  for (let i = 0; i < paragraphCount; i++) {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    randomParagraphs.push(paragraphs[randomIndex]);
  }
  
  return randomParagraphs;
};

export default function NewsDetail({ language, toggleLanguage }: NewsDetailProps) {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<typeof newsData[0] | null>(null);
  const [content, setContent] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟API请求延迟
    const timer = setTimeout(() => {
      const foundNews = newsData.find(item => item.id === parseInt(id || "0"));
      setNews(foundNews || null);
      setContent(generateRandomContent());
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <Layout title="加载中..." language={language} toggleLanguage={toggleLanguage}>
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-xl text-gray-600">正在加载新闻内容...</p>
          </div>
        </section>
      </Layout>
    );
  }

  if (!news) {
    return (
      <Layout title="新闻不存在" language={language} toggleLanguage={toggleLanguage}>
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">新闻不存在</h1>
            <p className="text-xl text-gray-600 mb-8">您访问的新闻可能已被删除或不存在</p>
            <a href="/news" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              返回新闻列表
            </a>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout title={`${news.title} - 臻世国际物流`} language={language} toggleLanguage={toggleLanguage}>
      {/* 页面标题区域 */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{news.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-blue-100">
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {news.date}
            </span>
            <span className="flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              {news.category === 'company' && '公司动态'}
              {news.category === 'industry' && '行业资讯'}
              {news.category === 'knowledge' && '物流知识'}
            </span>
            <span className="flex items-center">
              <FileText className="h-4 w-4 mr-1" />
              {news.views} 阅读
            </span>
          </div>
        </div>
      </section>

      {/* 新闻内容 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* 新闻图片 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <img
              src={news.imageUrl}
              alt={news.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          {/* 返回按钮 */}
          <motion.a
            href="/news"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回新闻列表
          </motion.a>

          {/* 新闻摘要 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10"
          >
            <p className="text-xl text-gray-700 font-medium leading-relaxed">
              {news.excerpt}
            </p>
          </motion.div>

          {/* 新闻正文 */}
          <div className="space-y-8">
            {content.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-gray-600 leading-relaxed text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* 相关推荐 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 pt-16 border-t border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8">相关推荐</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsData
                .filter(item => item.id !== news.id)
                .slice(0, 3)
                .map((relatedNews, index) => (
                  <a
                    key={relatedNews.id}
                    href={`/news/${relatedNews.id}`}
                    className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition block"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={relatedNews.imageUrl}
                        alt={relatedNews.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 hover:text-blue-600 transition">
                        {relatedNews.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedNews.excerpt}
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {relatedNews.date}
                      </div>
                    </div>
                  </a>
                ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}