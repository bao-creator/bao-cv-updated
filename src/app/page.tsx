"use client";

import { useState } from "react";
import './styles.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'cv' | 'visual'>('cv');
  const [showRakuten, setShowRakuten] = useState(true);
  const [showAXAS, setShowAXAS] = useState(true);
  const [showShiftAsia, setShowShiftAsia] = useState(true);

  return (
    <div className="font-sans bg-gray-50 min-h-screen flex justify-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-lg max-w-2xl w-full p-8">
        {/* Tabs */}
        <div className="flex mb-6 border-b">
          <button
            className={`px-4 py-2 font-semibold ${activeTab === 'cv' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('cv')}
          >
            Full CV
          </button>
          <button
            className={`px-4 py-2 font-semibold ml-2 ${activeTab === 'visual' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('visual')}
          >
            Visual Summary
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'cv' ? (
          <>
            {/* Header */}
            <header className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Dang Quoc Bao</h1>
              <p className="text-gray-700">Tokyo, Setagaya, Sangenjaya 1-23-2</p>
              <p className="text-gray-700">
                Mobile: 080-3570-8896 &nbsp; | &nbsp; E-mail:{" "}
                <a
                  href="mailto:dqb2411@gmail.com"
                  className="text-blue-600"
                >
                  dqb2411@gmail.com
                </a>
              </p>
            </header>

            {/* Summary */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold border-b pb-1 mb-2">Summary</h2>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  QA Engineer with 1+ year of leadership experience in Agile QA teams (manual & automation).
                </li>
                <li>4+ years of experience in automation testing (UI & API) for payment applications (RPay).</li>
                <li>
                  Proficient in manual testing for web, mobile, and enterprise apps (HR, game, healthcare, e-commerce).
                </li>
                <li>Fluent in Japanese and English; experienced in multicultural, international teams.</li>
              </ul>
            </section>

            {/* Skills */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold border-b pb-1 mb-2">Skills</h2>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  App UI Automation: WDIO, Appium, XCUITest, UIAutomator2, Katalon
                </li>
                <li>Device Farm: Kobiton, AppiumHub</li>
                <li>
                  API Functional Automation Testing: Newman, Postman
                </li>
                <li>Scripting languages: TypeScript, Groovy</li>
                <li>
                  Test Reporting & Integration: Allure, Team Notifications, Confluence
                  APIs, TestRail APIs
                </li>
                <li>AI assistance tools: GitHub Copilot, ChatGPT</li>
                <li>
                  Tools: GitLab CI, SourceTree, Kibana, newRelic, Confluence, TestRail, Charles,
                  Jira, Redmine, Slack, Teams, Visual Studio Code
                </li>
              </ul>
            </section>

            {/* Work Experience */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold border-b pb-1 mb-2">
                Work Experience
              </h2>
              {/* Rakuten Payment */}
              <div className="mb-4">
                <div
                  className="flex items-center gap-2 cursor-pointer hover:underline"
                  onClick={() => setShowRakuten((v) => !v)}
                >
                  <span className={`transition-transform duration-200 ${showRakuten ? "rotate-90" : ""}`}>
                    ▶
                  </span>
                  <h3 className="font-bold text-gray-900">
                    Rakuten Payment, Inc. | Tokyo
                  </h3>
                  <button
                    className="ml-2 text-xs text-blue-600 underline focus:outline-none"
                    tabIndex={-1}
                    aria-label={showRakuten ? "Hide details" : "Show details"}
                  >
                    {showRakuten ? "Hide details" : "Show details"}
                  </button>
                </div>
                <p className="italic text-gray-700">October 2021 - present</p>
                {showRakuten && (
                  <>
                    <span className="font-semibold text-gray-900">
                      Software QA Engineer - Permanent (March 2024 - present)
                    </span>
                    <br />
                    <span className="font-semibold text-gray-900">
                      Software QA Engineer - Temporary (October 2021 - February 2024)
                    </span>
                    <div className="ml-5 text-gray-800 space-y-1 mt-1">
                      <div>- Analyzed AI-generated backend API IT test cases to assess coverage and quality, collaborating with developers to enhance the AI testing tool.</div>
                      <div>- Led Agile QA teams (Manual & Automation), planned testing, developed automation, and communicated directly with stakeholders.</div>
                      <div>- Automated and maintained scripts for 24/7 testing of R Pay&apos;s Android app barcode payment system, leveraging Robotic ARM technology for barcode scanning and API integration for payment processing, to ensure system stability.</div>
                      <div>- Designed and implemented a mobile app automation framework from scratch using Appium, WDIO, and TypeScript. Reviewed team code for regression and sanity suites to reduce manual testing effort.</div>
                      <div>- Set up and managed an in-house device lab with over 50 devices using Kobiton and Appium Hub for automation execution.</div>
                      <div>- Settlement Improvement: Manual Testing with custom SQL queries on OmniDB for confirming database values and expected output.</div>
                      <div>- Hands-on experience with the Katalon scriptless automation tool and the TestOps reporting and analysis platform. Created and maintained a regression suite with 600 test cases.</div>
                      <div>- Hands-on experience with backend functional API testing projects using Newman and Postman.</div>
                      <div>- Implemented and maintained GitLab CI pipelines, including YAML configuration for daily automated execution and on-demand runs from other teams.</div>
                      <div>- Integrated Teams, Allure, TestRail, Email, and Confluence APIs for automated test result reporting.</div>
                      <div className="text-gray-500">
                        Tech Stack: Internal AI Tool (GPT4.0), Confluence, Newman, Postman, Mocha, TypeScript, WDIO, AppiumHub, Robot Arm, UIAutomator2, XCUITest,RestAPI, Mocha, OmniDB, SQL Query, MySQL, Excel.
                      </div>
                    </div>
                  </>
                )}
              </div>
              {/* AXAS CO., LTD. */}
              <div className="mb-4">
                <div
                  className="flex items-center gap-2 cursor-pointer hover:underline"
                  onClick={() => setShowAXAS((v) => !v)}
                >
                  <span className={`transition-transform duration-200 ${showAXAS ? "rotate-90" : ""}`}>
                    ▶
                  </span>
                  <h3 className="font-bold text-gray-900">
                    AXAS CO., LTD. | Tokyo
                  </h3>
                  <button
                    className="ml-2 text-xs text-blue-600 underline focus:outline-none"
                    tabIndex={-1}
                    aria-label={showAXAS ? "Hide details" : "Show details"}
                  >
                    {showAXAS ? "Hide details" : "Show details"}
                  </button>
                </div>
                <p className="italic text-gray-700">February 2020 - February 2024</p>
                {showAXAS && (
                  <>
                    <span className="font-semibold text-gray-900">
                      Software Engineer - Permanent (February 2020 - February 2024)
                    </span>
                    <div className="ml-5 text-gray-800 space-y-1 mt-1">
                      <div>- Debugged developed smartphone game projects by playing, checking specifications, game operations, individual functions, event stories, and game characters on iOS and Android devices, reporting bugs to the Development team.</div>
                      <div>- Expense management system: system testing phase.</div>
                      <div>- Managed a Kitting project, involving setup, app installation, recovery, and troubleshooting for customer PC and mobile devices.</div>
                      <div className="text-gray-500">
                        Tech Stack: SQL Server, a5:sql, Redmine, chrome.
                      </div>
                    </div>
                  </>
                )}
              </div>
              {/* SHIFT ASIA CO., LTD */}
              <div className="mb-4">
                <div
                  className="flex items-center gap-2 cursor-pointer hover:underline"
                  onClick={() => setShowShiftAsia((v) => !v)}
                >
                  <span className={`transition-transform duration-200 ${showShiftAsia ? "rotate-90" : ""}`}>
                    ▶
                  </span>
                  <h3 className="font-bold text-gray-900">
                    SHIFT ASIA CO., LTD | Ho Chi Minh City
                  </h3>
                  <button
                    className="ml-2 text-xs text-blue-600 underline focus:outline-none"
                    tabIndex={-1}
                    aria-label={showShiftAsia ? "Hide details" : "Show details"}
                  >
                    {showShiftAsia ? "Hide details" : "Show details"}
                  </button>
                </div>
                <p className="italic text-gray-700">October 2018 - December 2019</p>
                {showShiftAsia && (
                  <>
                    <span className="font-semibold text-gray-900">
                      Test Design Engineer - Permanent (October 2018 - December 2019)
                    </span>
                    <div className="ml-5 text-gray-800 space-y-1 mt-1">
                      <div>- Designed test cases for manual testing based on Shift format rules.</div>
                      <div>- HRM system of NEC: Performed integration testing that utilized Java debug tools for code business logic validation, performing database CRUD checks, managing batch files, and creating SQL queries for database value confirmation.</div>
                      <div>- Served as a Bridge SE for 8 months onsite in Japan on a system test project, supporting project progress management, facilitating requirement transfer between the Vietnam QA and Japan Development teams, and reviewing test cases designed by the Vietnam team.</div>
                      <div className="text-gray-500">
                        Technologies & Tools Used: SQL Server, Java, Excel, Backlog, Eclipse, Slack, Jira.
                      </div>
                    </div>
                  </>
                )}
              </div>
            </section>

            {/* Education */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold border-b pb-1 mb-2">Education</h2>
              <div>
                <h3 className="font-bold">FPT University | Ho Chi Minh City</h3>
                <p>Software Engineering | 10/2018</p>
                <p className="text-gray-500">GPA: 7.8</p>
              </div>
            </section>

            {/* Qualifications / Special Skills */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold border-b pb-1 mb-2">
                Qualifications / Special Skills
              </h2>
              <ul className="list-disc ml-5">
                <li>
                  Japanese-Language Proficiency Test (日本語能力試験): N2 (2021)
                </li>
                <li>
                  TOEIC Listening and Reading Test: 800 (2024)
                </li>
              </ul>
            </section>
          </>
        ) : (
          // Visual Summary tab content
          <div className="space-y-8">
            {/* Mobile Automation Architecture */}
            <section>
              <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Mobile App Automation Architecture at Rakuten Payment
              </h2>
              
              {/* Architecture Diagram */}
              <div className="architecture-container bg-white p-8 rounded-xl border-2 border-gray-200 mb-8 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  
                  {/* Left Side - Test Scripts & Development */}
                  <div className="space-y-6">
                    {/* TypeScript Development */}
                    <div className="tech-node p-4 text-center hover:scale-105 transition-transform duration-300">
                      <div className="logo-container w-16 h-16 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                        <img src="/logo/typescript.png" alt="TypeScript" className="w-full h-full object-contain p-2" />
                      </div>
                      <h3 className="font-bold text-gray-800">TypeScript</h3>
                      <p className="text-sm text-gray-600">Script Development</p>
                    </div>
                    
                    {/* WDIO Framework */}
                    <div className="tech-node p-4 text-center hover:scale-105 transition-transform duration-300">
                      <div className="logo-container w-16 h-16 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                        <img src="/logo/wdio.png" alt="WebdriverIO" className="w-full h-full object-contain p-2" />
                      </div>
                      <h3 className="font-bold text-gray-800">WebdriverIO</h3>
                      <p className="text-sm text-gray-600">Test Framework</p>
                    </div>
                    
                    {/* GitLab Repository */}
                    <div className="tech-node p-4 text-center hover:scale-105 transition-transform duration-300">
                      <div className="logo-container w-16 h-16 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                        <img src="/logo/GitLab_logo.svg.png" alt="GitLab" className="w-full h-full object-contain p-2" />
                      </div>
                      <h3 className="font-bold text-gray-800">GitLab Repo</h3>
                      <p className="text-sm text-gray-600">Source Code</p>
                    </div>
                  </div>

                  {/* Center - Appium Server & CI/CD */}
                  <div className="space-y-6">
                    {/* Appium Server */}
                    <div className="tech-node p-6 text-center hover:scale-105 transition-transform duration-300 relative">
                      <div className="logo-container w-20 h-20 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                        <img src="/logo/appium.png" alt="Appium" className="w-full h-full object-contain p-2" />
                      </div>
                      <h3 className="font-bold text-gray-800 text-lg">Appium Server</h3>
                      <p className="text-sm text-gray-600">Local Hub</p>
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                        HUB
                      </div>
                    </div>
                    
                    {/* GitLab CI Pipeline */}
                    <div className="tech-node p-4 text-center hover:scale-105 transition-transform duration-300">
                      <div className="logo-container w-16 h-16 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                        <img src="/logo/GitLab_logo.svg.png" alt="GitLab CI" className="w-full h-full object-contain p-2" />
                      </div>
                      <h3 className="font-bold text-gray-800">GitLab CI</h3>
                      <p className="text-sm text-gray-600">Pipeline</p>
                    </div>
                  </div>

                  {/* Right Side - Device Testing & Reporting */}
                  <div className="space-y-6">
                    {/* XCUITest Framework */}
                    <div className="tech-node p-4 text-center hover:scale-105 transition-transform duration-300">
                      <div className="logo-container w-16 h-16 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                        <img src="/logo/XCUITest.jpg" alt="XCUITest" className="w-full h-full object-contain p-2" />
                      </div>
                      <h3 className="font-bold text-gray-800">XCUITest</h3>
                      <p className="text-sm text-gray-600">iOS Native Framework</p>
                    </div>
                    
                    {/* UIAutomator2 Framework */}
                    <div className="tech-node p-4 text-center hover:scale-105 transition-transform duration-300">
                      <div className="logo-container w-16 h-16 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                        <img src="/logo/UIautomator.png" alt="UIAutomator2" className="w-full h-full object-contain p-2" />
                      </div>
                      <h3 className="font-bold text-gray-800">UIAutomator2</h3>
                      <p className="text-sm text-gray-600">Android Native Framework</p>
                    </div>
                    
                    {/* iOS Devices */}
                    <div className="tech-node p-4 text-center hover:scale-105 transition-transform duration-300">
                      <div className="logo-container w-16 h-16 mx-auto mb-3 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200">
                        <span className="text-xs text-gray-600 font-medium">📱</span>
                      </div>
                      <h3 className="font-bold text-gray-800">iOS Devices</h3>
                      <p className="text-sm text-gray-600">Real iOS Devices</p>
                    </div>
                    
                    {/* Android Devices */}
                    <div className="tech-node p-4 text-center hover:scale-105 transition-transform duration-300">
                      <div className="logo-container w-16 h-16 mx-auto mb-3 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200">
                        <span className="text-xs text-gray-600 font-medium">🤖</span>
                      </div>
                      <h3 className="font-bold text-gray-800">Android Devices</h3>
                      <p className="text-sm text-gray-600">Real Android Devices</p>
                    </div>
                    
                    {/* Test Results */}
                    <div className="tech-node p-4 text-center hover:scale-105 transition-transform duration-300">
                      <div className="logo-container w-16 h-16 mx-auto mb-3 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200">
                        <span className="text-xs text-gray-600 font-medium">📊</span>
                      </div>
                      <h3 className="font-bold text-gray-800">Test Results</h3>
                      <p className="text-sm text-gray-600">Execution Data</p>
                    </div>
                  </div>
                </div>

                {/* Flow Legend */}
                <div className="flow-legend mt-6 flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span className="text-gray-600">Development Flow</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-gray-600">GitLab CI/CD Pipeline</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-gray-600">Appium → Native Frameworks → Devices</span>
                  </div>
                </div>
              </div>

              {/* Multi-Platform Reporting */}
              <div className="reporting-section bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                  <span className="mr-2">📤</span>
                  Multi-Platform Test Reporting
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="reporting-tool bg-white p-3 rounded-lg text-center hover:scale-105 transition-transform duration-300">
                    <div className="logo-container w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-blue-600 font-medium">VB</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700">Viber</p>
                  </div>
                  <div className="reporting-tool bg-white p-3 rounded-lg text-center hover:scale-105 transition-transform duration-300">
                    <div className="logo-container w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-blue-600 font-medium">TM</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700">Teams</p>
                  </div>
                  <div className="reporting-tool bg-white p-3 rounded-lg text-center hover:scale-105 transition-transform duration-300">
                    <div className="logo-container w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-blue-600 font-medium">TR</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700">TestRail</p>
                  </div>
                  <div className="reporting-tool bg-white p-3 rounded-lg text-center hover:scale-105 transition-transform duration-300">
                    <div className="logo-container w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-blue-600 font-medium">EM</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700">Email</p>
                  </div>
                  <div className="reporting-tool bg-white p-3 rounded-lg text-center hover:scale-105 transition-transform duration-300">
                    <div className="logo-container w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-blue-600 font-medium">CF</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700">Confluence</p>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="benefits-grid grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="benefit-card bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-3">🔄 Cross-Platform</h4>
                  <p className="text-blue-100">Single codebase runs on both iOS and Android devices</p>
                </div>
                
                <div className="benefit-card bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-3">⚡ Real Device Testing</h4>
                  <p className="text-green-100">Tests run on actual devices ensuring real-world reliability</p>
                </div>
                
                <div className="benefit-card bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-3">🤖 Automated Pipeline</h4>
                  <p className="text-purple-100">GitLab CI automatically triggers tests and distributes results</p>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
