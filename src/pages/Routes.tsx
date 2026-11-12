import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Globe, ChevronRight, Search, Ship, Plane, ArrowRight } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Layout from "../components/Layout";
import { asset } from "@/lib/asset";

interface RoutesProps {
    language: "zh" | "en";
    toggleLanguage: () => void;
}

export default function Routes({ language, toggleLanguage }: RoutesProps) {
    const [activeRegion, setActiveRegion] = useState("southamerica");

    const routesData = {
        southamerica: {
            title: "南美航线",
            description: "臻世国际物流提供从中国主要港口到南美东、南美西和加勒比地区的定期海运服务，与多家知名船公司建立了长期合作关系，确保为客户提供稳定、可靠的运输服务。",

            east: {
                name: "南美东",
                countries: "巴西、阿根廷、乌拉圭、巴拉圭",
                ports: "桑托斯、里约热内卢、布宜诺斯艾利斯、蒙得维的亚",
                frequency: "每周3-4班",
                transitTime: "25-35天",
                imageUrl: asset("/images/external/image-22.jpg")
            },

            west: {
                name: "南美西",
                countries: "智利、秘鲁、厄瓜多尔、哥伦比亚",
                ports: "瓦尔帕莱索、圣安东尼奥、卡亚俄、瓜亚基尔",
                frequency: "每周2-3班",
                transitTime: "20-30天",
                imageUrl: asset("/images/external/image-23.jpg")
            },

            caribbean: {
                name: "加勒比",
                countries: "巴拿马、古巴、牙买加、多米尼加",
                ports: "科隆、哈瓦那、金斯敦、圣多明各",
                frequency: "每周1-2班",
                transitTime: "28-38天",
                imageUrl: asset("/images/external/image-24.jpg")
            }
        },

        middleeast: {
            title: "中东航线",
            description: "臻世国际物流提供从中国主要港口到中东地区的海运服务，覆盖波斯湾、红海等主要港口，为客户提供高效、可靠的运输解决方案。",

            details: {
                name: "中东地区",
                countries: "阿联酋、沙特阿拉伯、卡塔尔、科威特",
                ports: "迪拜、杰贝阿里、达曼、多哈、科威特",
                frequency: "每周4-5班",
                transitTime: "15-25天",
                imageUrl: asset("/images/external/image-25.jpg")
            }
        },

        northamerica: {
            title: "北美航线",
            description: "臻世国际物流提供从中国主要港口到美国、加拿大和墨西哥的海运服务，包括美西、美东和墨西哥湾等主要港口，为客户提供全方位的物流解决方案。",

            details: {
                name: "北美地区",
                countries: "美国、加拿大、墨西哥",
                ports: "洛杉矶、长滩、纽约、温哥华、曼萨尼约",
                frequency: "每周5-7班",
                transitTime: "12-30天",
                imageUrl: asset("/images/external/image-26.jpg")
            }
        },

        asia: {
            title: "亚太航线",
            description: "臻世国际物流提供从中国主要港口到亚太地区的海运服务，覆盖东北亚、东南亚和大洋洲等主要港口，为客户提供快速、可靠的运输服务。",

            details: {
                name: "亚太地区",
                countries: "日本、韩国、新加坡、马来西亚、越南、澳大利亚",
                ports: "东京、釜山、新加坡、巴生、胡志明市、悉尼",
                frequency: "每周7-10班",
                transitTime: "3-15天",
                imageUrl: asset("/images/external/image-27.jpg")
            }
        }
    };

    const chartData = [{
        month: "1月",
        南美东: 85,
        南美西: 75,
        加勒比: 65,
        中东: 90,
        北美: 100,
        亚太: 120
    }, {
        month: "2月",
        南美东: 80,
        南美西: 70,
        加勒比: 60,
        中东: 85,
        北美: 95,
        亚太: 115
    }, {
        month: "3月",
        南美东: 90,
        南美西: 80,
        加勒比: 70,
        中东: 95,
        北美: 105,
        亚太: 125
    }, {
        month: "4月",
        南美东: 95,
        南美西: 85,
        加勒比: 75,
        中东: 100,
        北美: 110,
        亚太: 130
    }, {
        month: "5月",
        南美东: 100,
        南美西: 90,
        加勒比: 80,
        中东: 105,
        北美: 115,
        亚太: 135
    }, {
        month: "6月",
        南美东: 105,
        南美西: 95,
        加勒比: 85,
        中东: 110,
        北美: 120,
        亚太: 140
    }];

    return (
        <Layout title="航线优势 - 臻世国际物流" language={language} toggleLanguage={toggleLanguage}>
            {}
            <section
                className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">航线优势</h1>
                    <p className="text-xl text-blue-100 max-w-3xl">臻世国际物流拥有广泛的全球航线网络，覆盖六大洲主要港口
                                  </p>
                </div>
            </section>
            {}
            <section className="py-12 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.button
                            className={`px-6 py-3 rounded-full ${activeRegion === "southamerica" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-50"} transition`}
                            whileHover={{
                                scale: 1.05
                            }}
                            whileTap={{
                                scale: 0.95
                            }}
                            onClick={() => setActiveRegion("southamerica")}>南美航线
                                        </motion.button>
                        <motion.button
                            className={`px-6 py-3 rounded-full ${activeRegion === "middleeast" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-50"} transition`}
                            whileHover={{
                                scale: 1.05
                            }}
                            whileTap={{
                                scale: 0.95
                            }}
                            onClick={() => setActiveRegion("middleeast")}>中东航线
                                        </motion.button>
                        <motion.button
                            className={`px-6 py-3 rounded-full ${activeRegion === "northamerica" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-50"} transition`}
                            whileHover={{
                                scale: 1.05
                            }}
                            whileTap={{
                                scale: 0.95
                            }}
                            onClick={() => setActiveRegion("northamerica")}>北美航线
                                        </motion.button>
                        <motion.button
                            className={`px-6 py-3 rounded-full ${activeRegion === "asia" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-50"} transition`}
                            whileHover={{
                                scale: 1.05
                            }}
                            whileTap={{
                                scale: 0.95
                            }}
                            onClick={() => setActiveRegion("asia")}>亚太航线
                                        </motion.button>
                    </div>
                </div>
            </section>
            {}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.5
                        }}
                        key={activeRegion}>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">{routesData[activeRegion as keyof typeof routesData].title}</h2>
                        <p className="text-gray-600 text-lg mb-12 max-w-4xl">
                            {routesData[activeRegion as keyof typeof routesData].description}
                        </p>
                        {activeRegion === "southamerica" ? <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{[
                                routesData.southamerica.east,
                                routesData.southamerica.west,
                                routesData.southamerica.caribbean
                            ].map((route, index) => <motion.div
                                key={index}
                                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
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
                                }}>
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={route.imageUrl}
                                        alt={route.name}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                                        <h3 className="text-xl font-bold text-gray-800">{route.name}</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="flex">
                                            <span className="font-medium text-gray-700 w-20">覆盖国家:</span>
                                            <span className="text-gray-600">{route.countries}</span>
                                        </li>
                                        <li className="flex">
                                            <span className="font-medium text-gray-700 w-20">主要港口:</span>
                                            <span className="text-gray-600">{route.ports}</span>
                                        </li>
                                        <li className="flex">
                                            <span className="font-medium text-gray-700 w-20">航班频率:</span>
                                            <span className="text-gray-600">{route.frequency}</span>
                                        </li>
                                        <li className="flex">
                                            <span className="font-medium text-gray-700 w-20">航程时间:</span>
                                            <span className="text-gray-600">{route.transitTime}</span>
                                        </li>
                                    </ul>
                                    <></>
                                </div>
                            </motion.div>)}
                        </div> : <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: -30
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    duration: 0.6
                                }}>
                                <img
                                    src={routesData[activeRegion as keyof typeof routesData].details.imageUrl}
                                    alt={routesData[activeRegion as keyof typeof routesData].details.name}
                                    className="rounded-lg shadow-xl w-full h-auto" />
                            </motion.div>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: 30
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.2
                                }}>
                                <div className="flex items-center mb-6">
                                    <Globe className="h-6 w-6 text-blue-600 mr-3" />
                                    <h3 className="text-2xl font-bold text-gray-800">
                                        {routesData[activeRegion as keyof typeof routesData].details.name}
                                    </h3>
                                </div>
                                <ul className="space-y-5">
                                    <li className="flex">
                                        <span className="font-medium text-gray-700 w-24">覆盖国家:</span>
                                        <span className="text-gray-600">{routesData[activeRegion as keyof typeof routesData].details.countries}</span>
                                    </li>
                                    <li className="flex">
                                        <span className="font-medium text-gray-700 w-24">主要港口:</span>
                                        <span className="text-gray-600">{routesData[activeRegion as keyof typeof routesData].details.ports}</span>
                                    </li>
                                    <li className="flex">
                                        <span className="font-medium text-gray-700 w-24">航班频率:</span>
                                        <span className="text-gray-600">{routesData[activeRegion as keyof typeof routesData].details.frequency}</span>
                                    </li>
                                    <li className="flex">
                                        <span className="font-medium text-gray-700 w-24">航程时间:</span>
                                        <span className="text-gray-600">{routesData[activeRegion as keyof typeof routesData].details.transitTime}</span>
                                    </li>
                                </ul>
                                <div className="mt-8 space-y-4">
                                    <h4 className="font-bold text-gray-800">航线优势:</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                                                <ChevronRight className="h-4 w-4 text-blue-600" />
                                            </div>
                                            <span className="text-gray-600">与多家知名船公司建立长期合作关系</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                                                <ChevronRight className="h-4 w-4 text-blue-600" />
                                            </div>
                                            <span className="text-gray-600">提供具有竞争力的价格和稳定的舱位保障</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                                                <ChevronRight className="h-4 w-4 text-blue-600" />
                                            </div>
                                            <span className="text-gray-600">专业的操作团队提供全程跟踪服务</span>
                                        </li>
                                    </ul>
                                </div>
                                <button
                                    className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition flex items-center">获取最新运价
                                                        <ChevronRight className="h-4 w-4 ml-2" />
                                </button>
                            </motion.div>
                        </div>}
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
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">航线运输量统计</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">臻世国际物流各航线运输量统计，数据来源于公司内部运营系统
                                        </p>
                    </motion.div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="h-96">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="南美东" stroke="#3b82f6" strokeWidth={2} />
                                    <Line type="monotone" dataKey="南美西" stroke="#10b981" strokeWidth={2} />
                                    <Line type="monotone" dataKey="加勒比" stroke="#f59e0b" strokeWidth={2} />
                                    <Line type="monotone" dataKey="中东" stroke="#8b5cf6" strokeWidth={2} />
                                    <Line type="monotone" dataKey="北美" stroke="#ec4899" strokeWidth={2} />
                                    <Line type="monotone" dataKey="亚太" stroke="#ef4444" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
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
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">我们的合作伙伴</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map(item => <motion.div
                            key={item}
                            className="bg-white p-8 rounded-lg shadow-sm flex items-center justify-center h-32"
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
                            }}
                            whileHover={{
                                y: -5,
                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                            }}>
                            <Ship className="h-12 w-12 text-blue-600" />
                        </motion.div>)}
                    </div>
                </div>
            </section>
        </Layout>
    );
}