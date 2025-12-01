import React, { useState } from "react";
import { motion } from "framer-motion";

import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    ChevronRight,
} from "lucide-react";

import Layout from "../components/Layout";

interface ContactProps {
    language: "zh" | "en";
    toggleLanguage: () => void;
}

export default function Contact({ language, toggleLanguage }: ContactProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {
            name,
            value
        } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("表单提交成功！我们会尽快与您联系。");

        setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            message: ""
        });
    };

    return (
        <Layout title="联系我们 - 臻世国际物流" language={language} toggleLanguage={toggleLanguage}>
            {}
            <section
                className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">联系我们</h1>
                    <p className="text-xl text-blue-100 max-w-3xl">无论您有任何问题或需求，我们的团队随时为您提供帮助
                                                          </p>
                </div>
            </section>
            {}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {}
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
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">联系方式</h2>
                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-full mr-6 mt-1">
                                        <MapPin className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-800 mb-2">公司地址</h3>
                                        <p className="text-gray-600">深圳市罗湖区笋岗街道田心社区宝安北路 3008 号宝能中心 E 栋 14 层04B.05.06A
                                                                                                            </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-full mr-6 mt-1">
                                        <Phone className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-800 mb-2">联系电话</h3>
                                        <p className="text-gray-600">+86 755 32938501</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-full mr-6 mt-1">
                                        <Mail className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-800 mb-2">电子邮箱</h3>
                                        <p className="text-gray-600">info@zenith.cn</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-full mr-6 mt-1">
                                        <Clock className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-800 mb-2">工作时间</h3>
                                        <p className="text-gray-600">周一至周五: 9:00 - 18:00</p>
                                        <p className="text-gray-600">周六至周日: 休息</p>
                                    </div>
                                </div>
                            </div>
                            {}
                            <div className="mt-12">
                                <h3 className="font-semibold text-lg text-gray-800 mb-4">关注我们</h3>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition">
                                        <Facebook className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-blue-400 hover:bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition">
                                        <Twitter className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-blue-800 hover:bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center transition">
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition">
                                        <Instagram className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                            {}
                            <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                                <h3 className="font-semibold text-lg text-gray-800 mb-4">紧急联系方式</h3>
                                <p className="text-gray-600 mb-4">如需紧急服务，请联系我们的24小时服务热线
                                                                                        </p>
                                <p className="text-xl font-bold text-blue-600">+86 188 8888 8888</p>
                            </div>
                        </motion.div>
                        {}
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
                            <div className="bg-gray-50 p-8 rounded-lg shadow-md"><h2 className="text-2xl font-bold text-gray-800 mb-6">发送消息</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">姓名 <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                placeholder="请输入您的姓名"
                                                required />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">电子邮箱 <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                placeholder="请输入您的电子邮箱"
                                                required />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-gray-700 font-medium mb-2">公司名称
                                                                                                                      </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                placeholder="请输入您的公司名称" />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">联系电话
                                                                                                                      </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                placeholder="请输入您的联系电话" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">留言内容 <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                            placeholder="请输入您的留言内容"
                                            required></textarea>
                                    </div>
                                    <div className="flex items-start">
                                        <input type="checkbox" id="privacy" className="mt-1 mr-2" required />
                                        <label htmlFor="privacy" className="text-sm text-gray-600">我已阅读并同意<a href="#" className="text-blue-600 hover:underline">隐私政策</a>和<a href="#" className="text-blue-600 hover:underline">服务条款</a>
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition flex items-center justify-center">发送消息
                                                                                                    <Send className="h-5 w-5 ml-2" />
                                    </button>
                                </form>
                            </div>
                            {}
                            <div className="mt-10">
                                <h3 className="text-xl font-bold text-gray-800 mb-6">常见问题</h3>
                                <div className="space-y-4">
                                    {[{
                                        question: "如何获取运价？",
                                        answer: "您可以通过我们的在线询价系统、电话或电子邮件联系我们，提供详细的货物信息和运输需求，我们的客服人员将为您提供最新的运价。"
                                    }, {
                                        question: "货物如何跟踪？",
                                        answer: "您可以通过我们的官方网站或联系客服，提供运单号或提单号，即可查询货物的实时状态。"
                                    }, {
                                        question: "需要准备哪些报关文件？",
                                        answer: "通常需要准备的报关文件包括：商业发票、装箱单、提单、原产地证、报关委托书等。具体要求可能因货物类型和目的国不同而有所差异，我们的专业报关团队将为您提供详细的指导。"
                                    }].map(
                                        (item, index) => <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                                            <details className="group">
                                                <summary
                                                    className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 group-open:bg-white">
                                                    <span className="font-medium text-gray-800">{item.question}</span>
                                                    <ChevronRight
                                                        className="h-5 w-5 text-gray-500 group-open:rotate-90 transition-transform" />
                                                </summary>
                                                <div className="p-4 bg-white text-gray-600">
                                                    {item.answer}
                                                </div>
                                            </details>
                                        </div>
                                    )}
                                </div>
                                <></>
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
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">分支机构</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">臻世国际物流在全国主要港口城市设有分支机构，为客户提供本地化的服务
                                                                    </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[{
                            city: "深圳",
                            address: "深圳市罗湖区笋岗街道田心社区宝安北路 3008 号宝能中心 E 栋 14 层",
                            phone: "+86 755 32938501",
                            email: "sz@zenith.cn"
                        }, {
                            city: "上海",
                            address: "上海市浦东新区陆家嘴环路 1000 号恒生银行大厦 25 楼",
                            phone: "+86 21 6122 8888",
                            email: "sh@zenith.cn"
                        }, {
                            city: "宁波",
                            address: "宁波市鄞州区和义路 77 号汇金大厦 15 楼",
                            phone: "+86 574 8777 8888",
                            email: "nb@zenith.cn"
                        }, {
                            city: "青岛",
                            address: "青岛市市南区香港中路 61 号甲远洋大厦 21 楼",
                            phone: "+86 532 8575 8888",
                            email: "qd@zenith.cn"
                        }, {
                            city: "武汉",
                            address: "武汉市江汉区民生路20号世纪中心办公楼2210室",
                            phone: "027-82823211",
                            email: "wh@zenith.cn"
                        }].map((branch, index) => <motion.div
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
                            }}>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{branch.city}分公司</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-gray-600">{branch.address}</span>
                                </li>
                                <li className="flex items-start">
                                    <Phone className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-gray-600">{branch.phone}</span>
                                </li>
                                <li className="flex items-start">
                                    <Mail className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-gray-600">{branch.email}</span>
                                </li>
                            </ul>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">有物流需求？立即联系我们
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