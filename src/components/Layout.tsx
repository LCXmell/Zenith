import React, { ReactNode } from "react";
import { Globe, MapPin, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
    children: ReactNode;
    title: string;
    language: "zh" | "en";
    toggleLanguage: () => void;
}

export default function Layout(
    {
        children,
        title,
        language,
        toggleLanguage
    }: LayoutProps
) {
    const location = useLocation();

    const navItems = [{
        path: "/",

        label: {
            zh: "首页",
            en: "Home"
        }
    }, {
        path: "/about",

        label: {
            zh: "关于我们",
            en: "About Us"
        }
    }, {
        path: "/services",

        label: {
            zh: "服务项目",
            en: "Services"
        }
    }, {
        path: "/routes",

        label: {
            zh: "航线优势",
            en: "Routes"
        }
    }, {
        path: "/cases",

        label: {
            zh: "案例展示",
            en: "Cases"
        }
    }, {
        path: "/news",

        label: {
            zh: "新闻资讯",
            en: "News"
        }
    }, {
        path: "/contact",

        label: {
            zh: "联系我们",
            en: "Contact"
        }
    }];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const Logo = (
        {
            className
        }: {
            className?: string;
        }
    ) => {
        return (
            <img
                src="/images/logo.png"
                alt="公司LOGO"
                className={`h-20 w-20 ${className}`}
                style={{
                    objectFit: "contain"
                }} />
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
            {}
            <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-2" onClick={scrollToTop}>
                        {}
                        <Logo className="text-blue-600" />
                        <span className="text-xl font-bold text-blue-800">
                            {language === "zh" ? "臻世国际物流" : "Zenith Logistics"}
                        </span>
                    </Link>
                    <div className="hidden md:flex space-x-8">
                        {navItems.map(item => <Link
                            key={item.path}
                            to={item.path}
                            className={`font-medium transition ${location.pathname === item.path ? "text-blue-700" : "text-gray-600 hover:text-blue-700"}`}
                            onClick={scrollToTop}>
                            {item.label[language]}
                        </Link>)}
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition flex items-center"
                            onClick={toggleLanguage}>
                            <Globe className="h-4 w-4 mr-2" />
                            {language === "zh" ? "English" : "中文"}
                        </button>
                        <button className="md:hidden text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            {}
            <main className="flex-grow">{children}</main>
            {}
            <footer className="bg-gray-900 text-gray-300 py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {}
                        <div>
                            <div className="flex items-center space-x-2 mb-6">
                                {}
                                <Logo className="text-blue-400" />
                                <span className="text-xl font-bold text-white">
                                    {language === "zh" ? "臻世国际物流" : "Zenith Logistics"}
                                </span>
                            </div>
                            <p className="mb-6">
                                {language === "zh" ? "专业的国际货运代理企业，为客户提供全方位的物流解决方案。" : "Professional international freight forwarding company, providing comprehensive logistics solutions for customers."}
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true">
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        {}
                        <div>
                            <h4 className="text-white text-lg font-semibold mb-6">
                                {language === "zh" ? "快速链接" : "Quick Links"}
                            </h4>
                            <ul className="space-y-4">
                                {navItems.map(item => <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className="hover:text-white transition"
                                        onClick={scrollToTop}>
                                        {item.label[language]}
                                    </Link>
                                </li>)}
                            </ul>
                        </div>
                        {}
                        <div>
                            <h4 className="text-white text-lg font-semibold mb-6">
                                {language === "zh" ? "服务项目" : "Our Services"}
                            </h4>
                            <ul className="space-y-4">
                                <li>
                                    <Link
                                        to="/services"
                                        className="hover:text-white transition"
                                        onClick={scrollToTop}>
                                        {language === "zh" ? "海运整箱/拼箱" : "FCL/LCL Shipping"}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services"
                                        className="hover:text-white transition"
                                        onClick={scrollToTop}>
                                        {language === "zh" ? "空运服务" : "Air Freight"}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services"
                                        className="hover:text-white transition"
                                        onClick={scrollToTop}>
                                        {language === "zh" ? "陆运配送" : "Road Transportation"}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services"
                                        className="hover:text-white transition"
                                        onClick={scrollToTop}>
                                        {language === "zh" ? "仓储服务" : "Warehousing"}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services"
                                        className="hover:text-white transition"
                                        onClick={scrollToTop}>
                                        {language === "zh" ? "报关报检" : "Customs Clearance"}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {}
                        <div>
                            <h4 className="text-white text-lg font-semibold mb-6">
                                {language === "zh" ? "联系我们" : "Contact Us"}
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-400">
                                        {language === "zh" ? "深圳市罗湖区笋岗街道田心社区宝安北路 3008 号宝能中心 E 栋 14 层" : "14th Floor, Block E, Baoneng Center, No. 3008 Baoan North Road, Shenzhen"}
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                                    <span className="text-gray-400">+86 755 32938501</span>
                                </li>
                                <li className="flex items-center">
                                    <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                                    <span className="text-gray-400">info@zenith.cn</span>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        {language === "zh" ? "隐私政策" : "Privacy Policy"}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        {language === "zh" ? "服务条款" : "Terms of Service"}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
                        <p>© 2025 {language === "zh" ? "臻世国际物流有限公司. 保留所有权利." : "Zenith Logistics Co., Ltd. All rights reserved."}</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}