import './styles.css';

export default function Home() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen flex justify-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-lg max-w-2xl w-full p-8">
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

        {/* Profile Summary */}
        <section className="mb-6">
          <ul className="list-disc ml-5 space-y-1 text-gray-800">
            <li>
              QA Engineer with 1+ year of leadership experience in Agile QA teams
              (manual & automation).
            </li>
            <li>
              4+ years of experience in automation testing (UI & API) for payment
              applications (RPay).
            </li>
            <li>
              Proficient in manual testing for web, mobile, and enterprise apps
              (HR, game, healthcare, e-commerce).
            </li>
            <li>
              Fluent in Japanese and English; experienced in multicultural,
              international teams.
            </li>
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
              Tools: GitLab CI, SourceTree, Kibana, Confluence, TestRail, Charles,
              Jira, Redmine, Slack, Teams, Visual Studio Code
            </li>
          </ul>
        </section>

        {/* Work Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2">
            Work Experience
          </h2>
          <div className="mb-4">
            <h3 className="font-bold">Rakuten Payment, Inc. | Tokyo</h3>
            <p className="italic text-gray-600">October 2021 - present</p>
            <ul className="ml-5 space-y-1">
              <li>
                <span className="font-semibold">
                  Software QA Engineer - Permanent (March 2024 - present)
                </span>
                <br />
                <span className="font-semibold">
                  Software QA Engineer - Temporary (October 2021 - February 2024)
                </span>
                <div className="ml-3 text-gray-800">
                  - Analyzed AI-generated backend API IT test cases to assess
                  coverage and quality, collaborating with developers to enhance
                  the AI testing tool.
                  <br />
                  - Led Agile QA teams (Manual & Automation), planned testing,
                  developed automation, and communicated directly with
                  stakeholders.
                  <br />
                  - Automated and maintained scripts for 24/7 testing of R Pay&#39;s
                  Android app barcode payment system, leveraging Robotic ARM
                  technology for barcode scanning and API integration for payment
                  processing, to ensure system stability.
                  <br />
                  - Designed and implemented a mobile app automation framework from
                  scratch using Appium, WDIO, and TypeScript. Reviewed team code
                  for regression and sanity suites to reduce manual testing
                  effort.
                  <br />
                  - Set up and managed an in-house device lab with over 50 devices
                  using Kobiton and Appium Hub for automation execution.
                  <br />
                  - Settlement Improvement: Manual Testing with custom SQL queries on
                  OmniDB for confirming database values and expected output.
                  <br />
                  - Hands-on experience with the Katalon scriptless automation tool
                  and the TestOps reporting and analysis platform. Created and
                  maintained a regression suite with 600 test cases.
                  <br />
                  - Hands-on experience with backend functional API testing projects
                  using Newman and Postman.
                  <br />
                  - Implemented and maintained GitLab CI pipelines, including YAML
                  configuration for daily automated execution and on-demand runs
                  from other teams.
                  <br />
                  - Integrated Teams, Allure, TestRail, Email, and Confluence APIs
                  for automated test result reporting.
                  <br />
                  <span className="text-gray-500">
                    Tech Stack: Internal AI Tool (GPT4.0), Confluence, Newman,
                    Postman, Mocha, TypeScript, WDIO, AppiumHub, Robot Arm,
                    UIAutomator2, RestAPI, Mocha, OmniDB, SQL Query, MySQL,
                    Excel.
                  </span>
                </div>
              </li>
            </ul>
            <div className="mt-2">
              <span className="font-semibold">Achievements:</span>
              <ul className="list-disc ml-5">
                <li>
                  Achieved Payment Project Award for RPC project-2025/04 (Increased
                  app onboarding conversion rate 6.7%)
                </li>
                <li>
                  Achieved Payment Project Award for End to End automation testing
                  project 2022/02 (Covered 60% functions of R Pay, able to reduce
                  manual efforts)
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">AXAS CO., LTD. | Tokyo</h3>
            <p className="italic text-gray-600">February 2020 - February 2024</p>
            <ul className="ml-5 space-y-1">
              <li>
                <span className="font-semibold">
                  Software Engineer - Permanent (February 2020 - February 2024)
                </span>
                <div className="ml-3 text-gray-800">
                  - Debugged developed smartphone game projects by playing,
                  checking specifications, game operations, individual functions,
                  event stories, and game characters on iOS and Android devices,
                  reporting bugs to the Development team.
                  <br />
                  - Expense management system: system testing phase.
                  <br />
                  - Managed a Kitting project, involving setup, app installation,
                  recovery, and troubleshooting for customer PC and mobile devices.
                  <br />
                  <span className="text-gray-500">
                    Tech Stack: SQL Server, a5:sql, Redmine, chrome.
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">
              SHIFT ASIA CO., LTD (Subsidiary of SHIFT Inc) | Ho Chi Minh City
            </h3>
            <p className="italic text-gray-600">October 2018 - December 2019</p>
            <ul className="ml-5 space-y-1">
              <li>
                <span className="font-semibold">
                  Test Design Engineer - Permanent (October 2018 - December 2019)
                </span>
                <div className="ml-3 text-gray-800">
                  - Designed test cases for manual testing based on Shift format
                  rules.
                  <br />
                  - HRM system of NEC: Performed integration testing that utilized
                  Java debug tools for code business logic validation, performing
                  database CRUD checks, managing batch files, and creating SQL
                  queries for database value confirmation.
                  <br />
                  - Served as a Bridge SE for 8 months onsite in Japan on a system
                  test project, supporting project progress management,
                  facilitating requirement transfer between the Vietnam QA and
                  Japan Development teams, and reviewing test cases designed by
                  the Vietnam team.
                  <br />
                  <span className="text-gray-500">
                    Technologies & Tools Used: SQL Server, Java, Excel, Backlog,
                    Eclipse, Slack, Jira.
                  </span>
                </div>
              </li>
            </ul>
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
      </div>
    </div>
  );
}
