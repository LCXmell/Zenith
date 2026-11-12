import React from "react";
import { motion } from "framer-motion";
import { Globe, FileText, Star, ChevronRight, Award, Users, Building, Target } from "lucide-react";
import Layout from "../components/Layout";
import { asset } from "@/lib/asset";

interface AboutProps {
    language: "zh" | "en";
    toggleLanguage: () => void;
}

export default function About({ language, toggleLanguage }: AboutProps) {
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

    const developmentHistory = [{
        year: "2010",
        event: "公司成立，专注于海运整箱业务"
    }, {
        year: "2013",
        event: "拓展空运服务，建立全球代理网络"
    }, {
        year: "2016",
        event: "开设仓储服务，完善供应链解决方案"
    }, {
        year: "2019",
        event: "通过ISO9001质量体系认证"
    }, {
        year: "2022",
        event: "建立数字化物流平台，提升服务效率"
    }, {
        year: "2024",
        event: "完成战略重组，更名为臻世国际物流"
    }];

    return (
        <Layout title="关于我们 - 臻世国际物流" language={language} toggleLanguage={toggleLanguage}>
            {}
            <section
                className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">关于臻世国际物流</h1>
                    <p className="text-xl text-blue-100 max-w-3xl">专业的国际货运代理企业，专注于为客户提供全方位的物流解决方案
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
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">公司简介</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
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
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">臻世国际物流有限公司（ZENITH LOGISTICS CO.,LTD）成立于2024年，是一家专业的国际货运代理企业，专注于为客户提供全方位的物流解决方案。
                                                公司总部位于深圳，在全国主要港口城市设有分支机构，并与全球50多家知名船公司和航空公司建立了长期合作关系。
                                              </p>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">我们拥有一支经验丰富的专业团队，熟悉各种货物的运输流程和相关法规，能够为客户提供定制化的物流解决方案，确保货物安全、准时送达，为客户创造价值。
                                              </p>
                            <div className="flex flex-col md:flex-row gap-6 mt-10">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <Building className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">注册资本</h3>
                                        <p className="text-gray-600">1000万人民币</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <Users className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">员工规模</h3>
                                        <p className="text-gray-600">100-200人</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
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
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">我们的优势</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
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
                                duration: 0.5
                            }}
                            viewport={{
                                once: true
                            }}>
                            <div
                                className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                                <Globe className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">全球网络</h3>
                            <p className="text-gray-600">与全球50多家知名船公司和航空公司建立了长期合作关系，覆盖全球主要港口和机场，能够为客户提供全球范围内的物流服务。
                                              </p>
                        </motion.div>
                        <motion.div
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
                                delay: 0.1
                            }}
                            viewport={{
                                once: true
                            }}>
                            <div
                                className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                                <Users className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">专业团队</h3>
                            <p className="text-gray-600">拥有一支经验丰富的专业团队，熟悉各种货物的运输流程和相关法规，提供专业的物流咨询服务，为客户解决各种复杂的物流问题。
                                              </p>
                        </motion.div>
                        <motion.div
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
                                delay: 0.2
                            }}
                            viewport={{
                                once: true
                            }}>
                            <div
                                className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                                <Star className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">优质服务</h3>
                            <p className="text-gray-600">以客户为中心，提供定制化的物流解决方案，确保货物安全、准时送达，为客户创造价值。我们的客户满意度高达98%。
                                              </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            {}
            <></>
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
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">企业资质</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
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
                                duration: 0.5
                            }}
                            viewport={{
                                once: true
                            }}>
                            <div
                                className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                                <Award className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">ISO9001认证</h3>
                            <p className="text-gray-600">公司通过ISO9001国际质量管理体系认证，确保为客户提供标准化、规范化的物流服务。
                                              </p>
                        </motion.div>
                        <motion.div
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
                                delay: 0.1
                            }}
                            viewport={{
                                once: true
                            }}>
                            <div
                                className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                                <FileText className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">无船承运人资质</h3>
                            <p className="text-gray-600">拥有无船承运人资质（NVOCC），能够直接与船公司签订运价协议，为客户提供更具竞争力的价格。
                                              </p>
                        </motion.div>
                        <motion.div
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
                                delay: 0.2
                            }}
                            viewport={{
                                once: true
                            }}>
                            <div
                                className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                                <Target className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">国际货运代理资质</h3>
                            <p className="text-gray-600">拥有国际货运代理资质，能够为客户提供海运、空运、陆运等全方位的国际货运代理服务。
                                              </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            {}
            <section className="py-16 px-6 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
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
                        {companyStats.map((stat, index) => <div key={index} className="text-center">
                            <p className="text-4xl font-bold text-blue-300 mb-2">
                                {stat.value}
                            </p>
                            <p className="text-blue-100">{stat.label}</p>
                        </div>)}
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}