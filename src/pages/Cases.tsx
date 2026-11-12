import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Star, Filter, Search } from "lucide-react";
import Layout from "../components/Layout";
import { asset } from "@/lib/asset";

interface CasesProps {
    language: "zh" | "en";
    toggleLanguage: () => void;
}

export default function Cases({ language, toggleLanguage }: CasesProps) {
    const [activeFilter, setActiveFilter] = useState("all");

    const cases = [{
        id: 1,
        title: "电子产品出口至南美东",
        category: "electronics",
        client: "某电子科技有限公司",
        description: "为客户提供从深圳到巴西桑托斯的电子产品海运服务，包括整箱运输、报关报检、目的港清关等一站式服务。",
        imageUrl: asset("/images/external/image-2.jpg"),
        year: "2024",
        region: "南美东",
        feedback: "臻世国际物流提供的服务非常专业，我们的货物总是能够准时到达，而且他们的团队随时都能提供详细的物流信息。"
    }, {
        id: 2,
        title: "医疗器械进口项目",
        category: "medical",
        client: "某医疗器械公司",
        description: "为客户提供从德国汉堡到上海的医疗器械进口服务，包括空运、报关报检、仓储配送等一站式服务。",
        imageUrl: asset("/images/external/image-3.jpg"),
        year: "2024",
        region: "欧洲",
        feedback: "臻世的报关团队非常专业，处理复杂的海关事务总是得心应手，为我们节省了大量时间和精力。"
    }, {
        id: 3,
        title: "服装纺织品出口至北美",
        category: "textile",
        client: "某服装贸易公司",
        description: "为客户提供从广州到美国洛杉矶的服装纺织品海运服务，包括拼箱运输、仓储分拣、目的港派送等服务。",
        imageUrl: asset("/images/external/image-4.jpg"),
        year: "2023",
        region: "北美",
        feedback: "臻世国际物流的服务非常贴心，能够根据我们的需求提供定制化的物流解决方案，帮助我们降低了物流成本。"
    }, {
        id: 4,
        title: "汽车零部件出口至中东",
        category: "automotive",
        client: "某汽车零部件制造商",
        description: "为客户提供从青岛到阿联酋迪拜的汽车零部件海运服务，包括整箱运输、保险、目的港清关等服务。",
        imageUrl: asset("/images/external/image-5.jpg"),
        year: "2023",
        region: "中东",
        feedback: "臻世国际物流的全球网络和专业知识帮助我们大幅降低了物流成本，提高了供应链效率。"
    }, {
        id: 5,
        title: "食品进口项目",
        category: "food",
        client: "某食品贸易公司",
        description: "为客户提供从澳大利亚悉尼到上海的食品进口服务，包括海运、报关报检、冷链运输等一站式服务。",
        imageUrl: asset("/images/external/image-6.jpg"),
        year: "2023",
        region: "大洋洲",
        feedback: "臻世国际物流的冷链运输服务非常专业，确保了我们的食品在运输过程中的新鲜度和安全。"
    }, {
        id: 6,
        title: "化工产品出口至东南亚",
        category: "chemical",
        client: "某化工企业",
        description: "为客户提供从南京到新加坡的化工产品海运服务，包括危险品运输、报关报检、目的港清关等服务。",
        imageUrl: asset("/images/external/image-7.jpg"),
        year: "2022",
        region: "亚太",
        feedback: "臻世国际物流在危险品运输方面的专业知识和经验让我们非常放心，他们能够妥善处理各种复杂情况。"
    }];

    const filteredCases = activeFilter === "all" ? cases : cases.filter(item => item.category === activeFilter);

    return (
        <Layout title="案例展示 - 臻世国际物流" language={language} toggleLanguage={toggleLanguage}>
            {}
            <section
                className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">案例展示</h1>
                    <p className="text-xl text-blue-100 max-w-3xl">臻世国际物流成功服务过众多行业客户，为您提供专业的物流解决方案
                                  </p>
                </div>
            </section>
            {}
            <section className="py-12 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-wrap gap-4">
                            <button
                                className={`px-6 py-2 rounded-full flex items-center ${activeFilter === "all" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-50"} transition`}
                                onClick={() => setActiveFilter("all")}>全部案例
                                              </button>
                            <button
                                className={`px-6 py-2 rounded-full flex items-center ${activeFilter === "electronics" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-50"} transition`}
                                onClick={() => setActiveFilter("electronics")}>电子产品
                                              </button>
                            <button
                                className={`px-6 py-2 rounded-full flex items-center ${activeFilter === "medical" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-50"} transition`}
                                onClick={() => setActiveFilter("medical")}>医疗器械
                                              </button>
                            <button
                                className={`px-6 py-2 rounded-full flex items-center ${activeFilter === "textile" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-50"} transition`}
                                onClick={() => setActiveFilter("textile")}>纺织品
                                              </button>
                            <button
                                className={`px-6 py-2 rounded-full flex items-center ${activeFilter === "automotive" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-50"} transition`}
                                onClick={() => setActiveFilter("automotive")}>汽车零部件
                                              </button>
                        </div>
                        <div className="w-full md:w-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="搜索案例..."
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full md:w-64" />
                                <Search
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.5
                        }}>
                        {filteredCases.map((caseItem, index) => <motion.div
                            key={caseItem.id}
                            className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1
                            }}
                            whileHover={{
                                y: -5
                            }}>
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={caseItem.imageUrl}
                                    alt={caseItem.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm text-gray-500">{caseItem.year}| {caseItem.region}</span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                        {caseItem.category === "electronics" && "电子产品"}
                                        {caseItem.category === "medical" && "医疗器械"}
                                        {caseItem.category === "textile" && "纺织品"}
                                        {caseItem.category === "automotive" && "汽车零部件"}
                                        {caseItem.category === "food" && "食品"}
                                        {caseItem.category === "chemical" && "化工产品"}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{caseItem.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">{caseItem.description}</p>
                                <div className="border-t border-gray-200 pt-4 mt-4">
                                    <p className="text-sm font-medium text-gray-700 mb-2">客户评价</p>
                                    <div className="flex text-yellow-400 mb-2">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4" fill="currentColor" />)}
                                    </div>
                                    <p className="text-gray-600 text-sm italic">"{caseItem.feedback}"</p>
                                    <p className="text-sm text-gray-500 mt-2">— {caseItem.client}</p>
                                </div>
                                <></>
                            </div>
                        </motion.div>)}
                    </motion.div>
                </div>
            </section>
            {}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{
                            opacity: 0,
                            y: 20
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.6
                        }}
                        viewport={{
                            once: true
                        }}>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">行业解决方案</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">针对不同行业的特点，我们提供定制化的物流解决方案
                                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[{
                            title: "电子产品行业",
                            description: "为电子产品提供安全、高效的物流解决方案，包括防震包装、保险服务、实时跟踪等。",
                            imageUrl: asset("/images/external/image-8.jpg")
                        }, {
                            title: "医疗器械行业",
                            description: "为医疗器械提供专业的物流解决方案，包括温控运输、报关报检、资质审核等服务。",
                            imageUrl: asset("/images/external/image-9.jpg")
                        }, {
                            title: "服装纺织行业",
                            description: "为服装纺织品提供灵活的物流解决方案，包括拼箱运输、仓储分拣、快速清关等服务。",
                            imageUrl: asset("/images/external/image-10.jpg")
                        }].map((solution, index) => <motion.div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1
                            }}
                            viewport={{
                                once: true
                            }}
                            whileHover={{
                                y: -5
                            }}>
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={solution.imageUrl}
                                    alt={solution.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{solution.title}</h3>
                                <p className="text-gray-600 mb-6">{solution.description}</p>
                                <></>
                            </div>
                        </motion.div>)}
                    </div>
                </div>
            </section>
            {}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{
                            opacity: 0,
                            y: 20
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.6
                        }}
                        viewport={{
                            once: true
                        }}>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">客户反馈</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">听听我们的客户怎么说
                                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[{
                            content: "臻世国际物流提供的服务非常专业，我们的货物总是能够准时到达，而且他们的团队随时都能提供详细的物流信息。",
                            author: "张先生",
                            company: "某电子科技有限公司",
                            position: "物流总监"
                        }, {
                            content: "与臻世合作多年，他们的全球网络和专业知识帮助我们大幅降低了物流成本，提高了供应链效率。",
                            author: "李女士",
                            company: "某国际贸易公司",
                            position: "采购经理"
                        }, {
                            content: "臻世的报关团队非常专业，处理复杂的海关事务总是得心应手，为我们节省了大量时间和精力。",
                            author: "王先生",
                            company: "某医疗器械公司",
                            position: "运营总监"
                        }].map((testimonial, index) => <motion.div
                            key={index}
                            className="bg-blue-50 p-8 rounded-lg"
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1
                            }}
                            viewport={{
                                once: true
                            }}>
                            <div className="flex text-yellow-400 mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5" fill="currentColor" />)}
                            </div>
                            <p className="text-gray-700 mb-8 italic">"{testimonial.content}"</p>
                            <div className="flex items-center">
                                <div
                                    className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                    <span className="font-bold">{testimonial.author.charAt(0)}</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">{testimonial.author}</p>
                                    <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                                </div>
                            </div>
                        </motion.div>)}
                    </div>
                </div>
            </section>
            {}
            <section className="py-20 px-6 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.6
                        }}
                        viewport={{
                            once: true
                        }}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">寻找专业的物流合作伙伴？
                                        </h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">我们的专业团队将为您提供定制化的物流解决方案，满足您的各种运输需求
                                        </p>
                        <button
                            className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition flex items-center justify-center mx-auto">咨询合作
                                          <ArrowRight className="h-5 w-5 ml-2" />
                        </button>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}