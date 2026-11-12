import React from "react";
import { motion } from "framer-motion";

import {
    Ship,
    Plane,
    Truck,
    Warehouse,
    FileText,
    Globe,
    ChevronRight,
    BarChart2,
    PackageOpen,
    Shield,
    Clock,
    DollarSign,
} from "lucide-react";

import Layout from "../components/Layout";
import { asset } from "@/lib/asset";

interface ServicesProps {
    language: "zh" | "en";
    toggleLanguage: () => void;
}

export default function Services({ language, toggleLanguage }: ServicesProps) {
    const services = [{
        title: "海运整箱/拼箱",
        icon: <Ship className="h-10 w-10 text-blue-600" />,
        description: "全球主要航线的整箱和拼箱服务，提供灵活的运输方案和具有竞争力的价格。",
        features: ["全球主要港口覆盖", "优势运价协议", "灵活的箱型选择", "专业的货物跟踪"],
        imageUrl: asset("/images/external/image-28.jpg")
    }, {
        title: "空运服务",
        icon: <Plane className="h-10 w-10 text-blue-600" />,
        description: "全球空运网络，提供快速、安全的航空货运服务，满足紧急货物运输需求。",
        features: ["全球主要机场覆盖", "加急货物处理", "门到门服务", "实时货物跟踪"],
        imageUrl: asset("/images/external/image-29.jpg")
    }, {
        title: "陆运配送",
        icon: <Truck className="h-10 w-10 text-blue-600" />,
        description: "完善的陆地运输网络，提供门到门配送服务，确保货物安全准时送达。",
        features: ["全国公路运输网络", "专业的车队管理", "货物保险服务", "实时配送跟踪"],
        imageUrl: asset("/images/external/image-30.jpg")
    }, {
        title: "仓储服务",
        icon: <Warehouse className="h-10 w-10 text-blue-600" />,
        description: "现代化仓库设施，提供货物存储、分拣、包装等一站式仓储解决方案。",
        features: ["现代化仓库设施", "专业的仓储管理系统", "货物分拣包装", "库存管理服务"],
        imageUrl: asset("/images/external/image-31.jpg")
    }, {
        title: "报关报检",
        icon: <FileText className="h-10 w-10 text-blue-600" />,
        description: "专业的报关报检团队，熟悉各类货物的通关流程，确保快速高效清关。",
        features: ["专业的报关团队", "熟悉各类货物通关流程", "快速高效清关", "海关政策咨询"],
        imageUrl: asset("/images/external/image-32.jpg")
    }, {
        title: "全球供应链管理",
        icon: <Globe className="h-10 w-10 text-blue-600" />,
        description: "定制化的供应链解决方案，优化物流流程，降低成本，提高效率。",
        features: ["定制化供应链解决方案", "物流流程优化", "成本控制管理", "供应链可视化"],
        imageUrl: asset("/images/external/image-33.jpg")
    }];

    const serviceProcess = [{
        step: "1",
        title: "需求咨询",
        description: "了解客户需求，提供专业的物流咨询服务",
        icon: <BarChart2 className="h-6 w-6 text-blue-600" />
    }, {
        step: "2",
        title: "方案定制",
        description: "根据客户需求，定制最优的物流解决方案",
        icon: <PackageOpen className="h-6 w-6 text-blue-600" />
    }, {
        step: "3",
        title: "操作执行",
        description: "专业团队全程跟进，确保物流过程顺利进行",
        icon: <Shield className="h-6 w-6 text-blue-600" />
    }, {
        step: "4",
        title: "货物跟踪",
        description: "实时跟踪货物状态，及时反馈给客户",
        icon: <Clock className="h-6 w-6 text-blue-600" />
    }, {
        step: "5",
        title: "费用结算",
        description: "透明的费用结算，提供详细的费用清单",
        icon: <DollarSign className="h-6 w-6 text-blue-600" />
    }];

    return (
        <Layout title="服务项目 - 臻世国际物流" language={language} toggleLanguage={toggleLanguage}>
            {}
            <section
                className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">我们的服务</h1>
                    <p className="text-xl text-blue-100 max-w-3xl">臻世国际物流提供全方位的国际物流服务，满足您不同的运输需求
                                  </p>
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
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">核心服务</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">我们提供全方位的国际物流服务，从海运、空运到陆运、仓储、报关报检，为您的货物保驾护航
                                        </p>
                    </motion.div>
                    <div className="space-y-24">
                        {services.map((service, index) => <motion.div
                            key={index}
                            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                            initial={{
                                opacity: 0,
                                y: 30
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.8
                            }}
                            viewport={{
                                once: true
                            }}>
                            <div>
                                <motion.img
                                    src={service.imageUrl}
                                    alt={service.title}
                                    className="rounded-lg shadow-xl w-full h-auto"
                                    initial={{
                                        scale: 0.95,
                                        opacity: 0.8
                                    }}
                                    whileInView={{
                                        scale: 1,
                                        opacity: 1
                                    }}
                                    transition={{
                                        duration: 0.5
                                    }}
                                    viewport={{
                                        once: true
                                    }} />
                            </div>
                            <div>
                                <div className="mb-6">{service.icon}</div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {service.features.map((feature, i) => <motion.li
                                        key={i}
                                        className="flex items-start"
                                        initial={{
                                            opacity: 0,
                                            x: -10
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            delay: i * 0.1
                                        }}
                                        viewport={{
                                            once: true
                                        }}>
                                        <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                                            <ChevronRight className="h-4 w-4 text-blue-600" />
                                        </div>
                                        <span className="text-gray-700">{feature}</span>
                                    </motion.li>)}
                                </ul>
                                <></>
                            </div>
                        </motion.div>)}
                    </div>
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
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">服务流程</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">我们拥有标准化的服务流程，确保为客户提供高效、专业的物流服务
                                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {serviceProcess.map((process, index) => <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md relative"
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
                            {}
                            {index < serviceProcess.length - 1 && <div
                                className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-blue-200 z-0"></div>}
                            {}
                            <div
                                className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 relative z-10">
                                <span className="text-xl font-bold text-blue-600">{process.step}</span>
                            </div>
                            {}
                            <div
                                className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                                {process.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-3">{process.title}</h3>
                            <p className="text-gray-600 text-sm">{process.description}</p>
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
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">为什么选择我们</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
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
                                duration: 0.5
                            }}
                            viewport={{
                                once: true
                            }}>
                            <div
                                className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <Clock className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">高效便捷</h3>
                            <p className="text-gray-600">我们拥有完善的物流网络和专业的操作流程，能够为客户提供高效便捷的物流服务，确保货物按时送达。
                                              </p>
                        </motion.div>
                        <motion.div
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
                                delay: 0.1
                            }}
                            viewport={{
                                once: true
                            }}>
                            <div
                                className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <Shield className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">安全可靠</h3>
                            <p className="text-gray-600">我们拥有严格的货物安全管理体系和专业的保险服务，确保货物在运输过程中的安全，让客户无后顾之忧。
                                              </p>
                        </motion.div>
                        <motion.div
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
                                delay: 0.2
                            }}
                            viewport={{
                                once: true
                            }}>
                            <div
                                className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <DollarSign className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">性价比高</h3>
                            <p className="text-gray-600">我们与全球主要的船公司和航空公司建立了长期合作关系，能够为客户提供具有竞争力的价格，同时保证服务质量。
                                              </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            {}
            <section
                className="py-20 px-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">有物流需求？立即咨询我们
                                        </h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">我们的专业团队将为您提供定制化的物流解决方案，满足您的各种运输需求
                                        </p>
                        <button
                            className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition">立即咨询
                                        </button>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}