import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
    Ship,
    Plane,
    Truck,
    Warehouse,
    FileText,
    Globe,
    MessageCircle,
    ChevronRight,
    ArrowRight,
    Star,
} from "lucide-react";

import Layout from "../components/Layout";
import { asset } from "@/lib/asset";

interface HomeProps {
    language: "zh" | "en";
    toggleLanguage: () => void;
}

export default function Home({ language, toggleLanguage }: HomeProps) {
    const companyStats = [{
        value: "15+",
        label: "年行业经验"
    }, {
        value: "50+",
        label: "全球合作伙伴"
    }, {
        value: "100+",
        label: "全球港口覆盖"
    }, {
        value: "98%",
        label: "客户满意度"
    }];

    const services = [{
        title: "海运整箱/拼箱",
        icon: <Ship className="h-8 w-8 text-blue-600" />,
        description: "全球主要航线的整箱和拼箱服务，提供灵活的运输方案和具有竞争力的价格。"
    }, {
        title: "空运服务",
        icon: <Plane className="h-8 w-8 text-blue-600" />,
        description: "全球空运网络，提供快速、安全的航空货运服务，满足紧急货物运输需求。"
    }, {
        title: "陆运配送",
        icon: <Truck className="h-8 w-8 text-blue-600" />,
        description: "完善的陆地运输网络，提供门到门配送服务，确保货物安全准时送达。"
    }, {
        title: "仓储服务",
        icon: <Warehouse className="h-8 w-8 text-blue-600" />,
        description: "现代化仓库设施，提供货物存储、分拣、包装等一站式仓储解决方案。"
    }, {
        title: "报关报检",
        icon: <FileText className="h-8 w-8 text-blue-600" />,
        description: "专业的报关报检团队，熟悉各类货物的通关流程，确保快速高效清关。"
    }, {
        title: "全球供应链管理",
        icon: <Globe className="h-8 w-8 text-blue-600" />,
        description: "定制化的供应链解决方案，优化物流流程，降低成本，提高效率。"
    }];

    const routes = [{
        region: "南美东",
        countries: "巴西、阿根廷、乌拉圭、巴拉圭"
    }, {
        region: "南美西",
        countries: "智利、秘鲁、厄瓜多尔、哥伦比亚"
    }, {
        region: "加勒比",
        countries: "巴拿马、古巴、牙买加、多米尼加"
    }, {
        region: "中东地区",
        countries: "阿联酋、沙特阿拉伯、卡塔尔、科威特"
    }, {
        region: "北美地区",
        countries: "美国、加拿大、墨西哥"
    }, {
        region: "亚太地区",
        countries: "中国、日本、韩国、新加坡、马来西亚、越南"
    }];

    const testimonials = [{
        content: "臻世国际物流提供的服务非常专业，我们的货物总是能够准时到达，而且他们的团队随时都能提供详细的物流信息。",
        author: "张先生",
        company: "某电子科技有限公司"
    }, {
        content: "与臻世合作多年，他们的全球网络和专业知识帮助我们大幅降低了物流成本，提高了供应链效率。",
        author: "李女士",
        company: "某国际贸易公司"
    }, {
        content: "臻世的报关团队非常专业，处理复杂的海关事务总是得心应手，为我们节省了大量时间和精力。",
        author: "王先生",
        company: "某医疗器械公司"
    }];

    return (
        <Layout title="臻世国际物流 - 专业海运货代服务" language={language} toggleLanguage={toggleLanguage}>
            {}
            <section
                className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
                    <div
                        className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
                </div>
                <div
                    className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center">
                    <motion.div
                        className="md:w-1/2 mb-10 md:mb-0"
                        initial={{
                            opacity: 0,
                            x: -50
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 0.8
                        }}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">专业海运货代服务<br />
                            <span className="text-blue-300">连接全球贸易</span>
                        </h1>
                        <p className="text-xl mb-8 text-blue-100">臻世国际物流提供全方位的国际物流解决方案，凭借丰富的行业经验和全球网络，为您的货物保驾护航。
                                                                                </p>
                        <></>
                    </motion.div>
                    <motion.div
                        className="md:w-1/2"
                        initial={{
                            opacity: 0,
                            x: 50
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3
                        }}>
                        <img
                            src={asset("/images/external/image-11.jpg")}
                            alt="国际海运"
                            className="rounded-lg shadow-2xl w-full object-cover h-80" />
                    </motion.div>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">关于臻世国际物流</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">臻世国际物流有限公司成立于2024年，是一家专业的国际货运代理企业，专注于为客户提供全方位的物流解决方案。</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -30
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            transition={{
                                duration: 0.6
                            }}
                            viewport={{
                                once: true
                            }}>
                            <img
                                src={asset("/images/external/image-1.jpg")}
                                alt="公司办公环境"
                                className="rounded-lg shadow-xl w-full h-auto" />
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 30
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            transition={{
                                duration: 0.6
                            }}
                            viewport={{
                                once: true
                            }}>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">我们的优势</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                                        <Globe className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-gray-800">全球网络</h4>
                                        <p className="text-gray-600">与全球50多家知名船公司和航空公司建立了长期合作关系，覆盖全球主要港口和机场。</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                                        <FileText className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-gray-800">专业团队</h4>
                                        <p className="text-gray-600">拥有一支经验丰富的专业团队，熟悉各种货物的运输流程和相关法规，提供专业的物流咨询服务。</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                                        <Star className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-gray-800">优质服务</h4>
                                        <p className="text-gray-600">以客户为中心，提供定制化的物流解决方案，确保货物安全、准时送达，为客户创造价值。</p>
                                    </div>
                                </li>
                            </ul>
                            <></>
                        </motion.div>
                    </div>
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
                        initial={{
                            opacity: 0,
                            y: 20
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2
                        }}
                        viewport={{
                            once: true
                        }}>
                        {companyStats.map(
                            (stat, index) => <div key={index} className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
                                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        )}
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">我们的服务</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">臻世国际物流提供全方位的国际物流服务，满足您不同的运输需求。
                                                                                </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => <motion.div
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
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
                            <div className="mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                            <p className="text-gray-600 mb-6">{service.description}</p>
                            <></>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">航线优势</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">臻世国际物流拥有广泛的全球航线网络，覆盖六大洲主要港口。
                                                                                </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {routes.map((route, index) => <motion.div
                            key={index}
                            className="bg-gray-50 p-6 rounded-lg shadow-sm"
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
                            <h3 className="text-xl font-bold text-blue-700 mb-4">{route.region}</h3>
                            <p className="text-gray-600">{route.countries}</p>
                        </motion.div>)}
                    </div>
                     <motion.div
                        className="mt-12 text-center"
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.3
                        }}
                        viewport={{
                            once: true
                        }}>
                         <Link to="/routes" className="inline-block">
                                <button
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>查看完整航线网络
                                </button>
                            </Link>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">客户评价</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">听听我们的客户怎么说。
                                                                                </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => <motion.div
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-md"
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
                            <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                            <div>
                                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                                <p className="text-gray-500">{testimonial.company}</p>
                            </div>
                        </motion.div>)}
                    </div>
                </div>
            </section>
            {}
            <section className="py-20 px-6 bg-white"><div className="max-w-7xl mx-auto">
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">新闻资讯</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">了解最新的行业动态和公司新闻。
                                                                                </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map(item => <motion.div
                            key={item}
                            className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
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
                                delay: item * 0.1
                            }}
                            viewport={{
                                once: true
                            }}>
                            <img
                                src={asset("/images/external/image-12.jpg")}
                                alt={`新闻图片 ${item}`}
                                className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <p className="text-gray-500 text-sm mb-3">2025-11-{10 + item}</p>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">全球海运市场最新趋势分析</h3>
                                <p className="text-gray-600 mb-4">随着全球经济的复苏，海运市场呈现出新的发展趋势，我们的专家为您详细解读。</p>
                                <button
                                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center">阅读全文
                                                                                                            <ChevronRight className="h-4 w-4 ml-1" />
                                </button>
                            </div>
                        </motion.div>)}
                    </div>
                    <motion.div
                        className="mt-12 text-center"
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.3
                        }}
                        viewport={{
                            once: true
                        }}>
                         <Link to="/news">
                            <button
                                className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md transition"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>查看更多新闻
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
            {}
            <section className="py-20 px-6 bg-blue-900 text-white">
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">联系我们</h2>
                        <div className="w-20 h-1 bg-blue-300 mx-auto mb-6"></div>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">无论您有任何问题或需求，我们的团队随时为您提供帮助。
                                                                                </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -30
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            transition={{
                                duration: 0.6
                            }}
                            viewport={{
                                once: true
                            }}>
                            <h3 className="text-2xl font-bold mb-8">联系方式</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-blue-800 p-3 rounded-full mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">公司地址</h4>
                                        <p className="text-blue-200">深圳市罗湖区笋岗街道田心社区宝安北路 3008 号宝能中心 E 栋 14 层04B.05.06A.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-800 p-3 rounded-full mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">联系电话</h4>
                                        <p className="text-blue-200">+86 755 32938501</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-800 p-3 rounded-full mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">电子邮箱</h4>
                                        <p className="text-blue-200">info@zenith.cn</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 30
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            transition={{
                                duration: 0.6
                            }}
                            viewport={{
                                once: true
                            }}>
                            <div className="bg-white p-8 rounded-lg shadow-xl">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">发送消息</h3>
                                <form className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">姓名</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                            placeholder="请输入您的姓名" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">电子邮箱</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                            placeholder="请输入您的电子邮箱" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">留言内容</label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                            placeholder="请输入您的留言内容"></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition">发送消息
                                                                                                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}