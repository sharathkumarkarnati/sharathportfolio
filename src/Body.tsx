import classNames from "classnames";
import { JSX, useCallback, useState } from "react";
import { OverlayScrollbar } from "./OverlayScrollbar";
import { FaGithub } from "react-icons/fa";
import { DownloadResumePdf } from "./DownloadResumePdf";
import { SwipableContainer } from "./SwipableContainer";

type State = (typeof navItems)[number];

export const Body = () => {
  const [navItemIndex, setNavItemIndex] = useState(0);
  const onSwipe = useCallback((index: number) => {
    setNavItemIndex((prev) => {
      let _index = prev + index;

      if (_index < 0) {
        _index = navItems.length - 1;
      } else if (_index >= navItems.length) {
        _index = 0;
      }
      return _index;
    });
  }, []);

  const active = navItems[navItemIndex];
  const Screen = Screens[active];

  return (
    <div className="flex flex-col md:flex-row flex-1 self-stretch basis-0 overflow-hidden">
      <div className="flex flex-1 md:flex-5 self-stretch order-2 md:order-1 overflow-auto">
        <OverlayScrollbar className="flex-1 overflow-auto px-4">
          <SwipableContainer onSwipe={onSwipe}>
            <Screen />
          </SwipableContainer>
        </OverlayScrollbar>
      </div>

      <div className="flex self-stretch md:flex-1 flex-col justify-start items-start md:items-end order-1 md:order-2 mb-6 md:mb-0">
        <DownloadResumePdf />
        {/* ✅ FIXED LINE */}
        <div className="hidden md:flex w-1/2 h-[1px] bg-primary m-0 mt-6 mb-6"></div>
        <OverlayScrollbar
          scrollbarProps={{
            options: { overflow: { x: "scroll", y: "hidden" } },
          }}
          className="flex md:flex-1 self-stretch md:self-auto overflow-auto"
        >
          <div className="flex flex-row md:flex-col justify-start items-center md:items-end text-base md:text-lg font-semibold uppercase *:not-first:ml-8 md:*:not-first:mt-8">
            {navItems.map((item) => (
              <div
                key={item}
                className={classNames(
                  `flex cursor-pointer hover:bg-primary hover:text-bg-primary p-2 rounded-lg transition-colors duration-300 ease-in-out`,
                  active === item && "bg-primary text-bg-primary"
                )}
                onClick={() => setNavItemIndex(navItems.indexOf(item))}
              >
                {item}
              </div>
            ))}
          </div>
        </OverlayScrollbar>
      </div>
    </div>
  );
};

const navItems = ["about", "experience", "projects", "education"] as const;

const About = () => {
  return (
    <div className="flex flex-col justify-start items-center text-lg font-normal *:not-first:mt-8">
      <p>
        Hi, I’m <strong>Sharath Karnati</strong> — a Software Engineer with an
        <strong> M.S. in Computer Science (AI &amp; ML)</strong> from Washington State University (’25).
        I build production-ready, full-stack applications and applied ML tools using
        <strong> JavaScript/TypeScript, Python, and Java</strong>. My work spans
        <strong> React/Node</strong> web apps, <strong> REST APIs</strong> with
        <strong> JWT/RBAC</strong>, and data layers on <strong> PostgreSQL</strong> and
        <strong> MongoDB</strong>, delivered with testing and CI/CD.
      </p>

      <p>
        Recent projects include <em>Regale</em> (a recipe platform with real-time search over
        <strong> 100k+</strong> items that lifted 30-day retention by <strong> 40%</strong>),
        <em> Stackr</em> (a Dropbox-style file manager that cut median load time by
        <strong> 50%</strong> through query/index tuning and optimized media delivery),
        and <em> Your DSA Buddy</em> (an <strong> LLM-powered Chrome Extension</strong> using the Gemini API
        that keeps problem-solving guidance inline to reduce context switching).
        I’ve also built a Random-Forest-based <em> Intrusion Detection System</em> on the NSL-KDD dataset
        that reached <strong> 99.89%</strong> test accuracy.
      </p>

      <p>
        I care about clear architecture, measurable impact, and maintainable code.
        On teams, I contribute through Agile delivery, code reviews, and Git-based workflows;
        in research settings, I’ve supported data processing and simulation work with
        Python (pandas, NumPy, matplotlib) and MATLAB. I’m always refining how I design,
        test, and ship software — from API contracts and access controls to observability and docs —
        so the next developer (often future me) can move faster with confidence.
      </p>


      <div className="flex flex-col justify-start items-start gap-4 *:not-first:mt-4">
        {aboutItems.map((item) => (
          <div
            key={item.subheader}
            className="flex self-stretch flex-col justify-start items-start *:not-first:mt-2"
          >
            <div className="text-xl font-semibold underline">
              {item.subheader}
            </div>
            <ul className="flex flex-row justify-start items-center gap-2 flex-wrap">
              {item.items.map((subitem) => (
                <li key={subitem}>{subitem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const aboutItems = [
  {
    subheader: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C++"],
  },
  {
    subheader: "Frameworks & Libraries",
    items: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "Django",
      "Drizzle ORM",
      "Chrome Extensions API"
    ],
  },
  {
    subheader: "Database & Cloud",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQL",
      "AWS (EC2, S3, Lambda)",
      "Kubernetes",
      "CI/CD"
    ],
  },
  {
    subheader: "Tools & DevOps",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "GitHub Actions",
      "Docker",
      "Postman",
      "Jenkins",
      "Maven",
      "Ansible",
      "VS Code",
      "ImageKit",
      "MATLAB",
      "Clerk (OTP/RBAC)"
    ],
  },
  {
    subheader: "Security & Access Control",
    items: ["JWT", "Role-Based Access Control (RBAC)"],
  },
  {
    subheader: "AI/ML",
    items: [
      "scikit-learn",
      "pandas",
      "NumPy",
      "matplotlib",
      "LLMs (Gemini API)"
    ],
  },
  {
    subheader: "Testing & QA",
    items: ["pytest", "Unit Testing", "Integration Testing"],
  },
  {
    subheader: "Development Practices",
    items: [
      "Object-Oriented Design",
      "Design Patterns",
      "SOLID Principles",
      "Microservices",
      "REST APIs",
      "TDD",
      "Agile/Scrum",
      "SDLC",
      "Documentation",
      "Version Control"
    ],
  },
  {
    subheader: "Operating Systems",
    items: ["Windows", "Linux", "macOS"],
  },
];



const Experience = () => {
  return (
    <div className="flex flex-col justify-start items-start text-lg font-normal *:not-first:mt-8">

      {/* Experience 0: Research Assistant */}
      <div className="flex flex-col justify-start items-start">
        <h3 className="text-2xl font-bold underline">
          Research Assistant (Volunteer)
        </h3>
        <h4 className="text-lg font-semibold">Washington State University</h4>
        <p className="text-base font-medium">July 2025 – Present</p>
        <p className="text-base font-medium">Pullman, Washington</p>
      </div>
      <div className="flex flex-col justify-start items-start *:not-first:mt-4">
        <ul className="flex flex-col justify-start items-start gap-2 list-disc list-inside">
          <li>
            Prepared Python (<strong>pandas, NumPy, matplotlib</strong>) and <strong>MATLAB</strong> scripts to process datasets and run simulation models for studies in sustainable structural materials and life-cycle assessment.
          </li>
          <li>
            Streamlined recurring data cleaning and visualization; produced weekly summary tables/charts and authored step-by-step procedures to ensure reproducibility.
          </li>
        </ul>
      </div>

      {/* Experience 1: Peer Education Advisor — Data Analytics */}
      <div className="flex flex-col justify-start items-start">
        <h3 className="text-2xl font-bold underline">
          Peer Education Advisor — Data Analytics
        </h3>
        <h4 className="text-lg font-semibold">
          OAE, Washington State University
        </h4>
        <p className="text-base font-medium">September 2024 – May 2025</p>
        <p className="text-base font-medium">Pullman, Washington</p>
      </div>
      <div className="flex flex-col justify-start items-start *:not-first:mt-4">
        <ul className="flex flex-col justify-start items-start gap-2 list-disc list-inside">
          <li>
            Designed and launched a centralized mentor-tracking portal using internal tools; streamlined workflows and reduced administrative overhead by <strong>60%</strong>.
          </li>
          <li>
            Automated Excel/CSV reporting with validations and scheduled runs; increased accuracy by <strong>85%</strong> and cut manual work by <strong>80%</strong>.
          </li>
          <li>
            Assessed cohort trends and attrition signals; advised leadership on retention strategies for <strong>30+</strong> mentors; prepared concise dashboards and briefings for decisions.
          </li>
        </ul>
      </div>

      {/* Experience 2: Software Developer Intern */}
      <div className="flex flex-col justify-start items-start">
        <h3 className="text-2xl font-bold underline">
          Software Developer Intern — Vengai Software Solutions
        </h3>
        <h4 className="text-lg font-semibold">Hyderabad, India</h4>
        <p className="text-base font-medium">September 2022 – March 2023</p>
      </div>
      <div className="flex flex-col justify-start items-start *:not-first:mt-4">
        <ul className="flex flex-col justify-start items-start gap-2 list-disc list-inside">
          <li>
            Implemented end-to-end features across <strong>React</strong> and <strong>Node.js</strong>; produced <strong>REST</strong> endpoints and responsive UIs that increased user engagement by <strong>25%</strong>.
          </li>
          <li>
            Redesigned authentication with <strong>JWT</strong> and guarded routes; reduced initial page load time by <strong>30%</strong> via render refinements and API batching.
          </li>
          <li>
            Collaborated in Agile sprints, conducted PR reviews, and resolved backend defects using <strong>Git</strong> and CI to stabilize releases.
          </li>
        </ul>
      </div>

    </div>
  );
};




const projectItems = [
  {
    subheader: "Regale – The Recipe App",
    cta: "Live Demo",
    items: [
      "Launched a full-stack recipe platform with real-time search across 100k+ curated meals and community submissions.",
      "Defined REST endpoints for search, authentication, and submissions; established server-side MVC with modular React components.",
      "Introduced JWT session management, dynamic ingredient scaling, and user dashboards, increasing 30-day retention by 40%."
    ],
    link: "https://regale-login.onrender.com/",
  },
  {
    subheader: "Stackr – Dropbox-style File Manager",
    cta: "Live Demo",
    items: [
      "Built folder-level uploads, previews, and secure sharing for PDFs/images with persistent sessions.",
      "Devised OTP login and role-based access control (RBAC) via Clerk; refined media delivery with ImageKit and indexed PostgreSQL queries.",
      "Reduced median page load time by 50% and improved cross-session file accessibility through schema tuning and caching."
    ],
    link: "https://stackr-a-dropbox-clone.vercel.app",
  },
  {
    subheader: "Your DSA Buddy – AI Chrome Extension",
    // cta omitted (no link yet)
    items: [
      "Created a Chrome extension that provides progressive, language-aware hints for LeetCode using the Gemini API.",
      "Combined real-time problem-page detection with an in-tab chatbot UI and a 30-minute focus timer to minimize context switching.",
      "Improved learning flow and on-task time by keeping guidance inline within the coding tab."
    ],
    link: "",
  },
  {
    subheader: "Intrusion Detection System using ML",
    cta: "View on GitHub",
    items: [
      "Developed an IDS on the NSL-KDD dataset to classify traffic as normal or attack; Random Forest achieved 99.89% test accuracy.",
      "Evaluated Logistic Regression, KNN, Decision Trees, Random Forest, XGBoost, and a baseline NN to select the best approach.",
      "Preprocessed with feature scaling, PCA for dimensionality reduction, and SMOTE to handle class imbalance for robust performance.",
      "Used cosine similarity and feature-importance analysis for interpretability; applied dropout/regularization in NN to reduce overfitting."
    ],
    link: "https://github.com/sharathkumarkarnati/Intrusion-Detection-using-ML",
  },
  {
    subheader: "Movie Recommendation System",
    cta: "View on GitHub",
    items: [
      "Built a content-based recommender in Python/Streamlit using cosine similarity over genres, cast, and crew metadata.",
      "Designed a clean UI with tabs for personalized recommendations, top-rated movies, and favorites; hosted locally for demos.",
      "Gained experience with feature extraction, recommendation algorithms, and end-to-end app delivery."
    ],
    link: "https://github.com/sharathkumarkarnati/Movie-Recommendation-System",
  },
  {
    subheader: "Virtual AI Mouse",
    cta: "View on GitHub",
    items: [
      "Developed a real-time hand-tracking and gesture interface with OpenCV and MediaPipe.",
      "Implemented gesture recognition for cursor movement, click, scroll, and drag-and-drop.",
      "Explored accessibility and VR/AR use cases with a focus on low latency and intuitive control."
    ],
    link: "https://github.com/sharathkumarkarnati/AI-Virtual-Mouse",
  },
  {
    subheader: "Run Cycle Log",
    cta: "View on GitHub",
    items: [
      "Built a workout tracker with interactive maps (Leaflet.js) and localStorage persistence; deployed via GitHub Pages.",
      "Logged type, distance, duration, cadence, and elevation; visualized routes in real time."
    ],
    link: "https://github.com/sharathkumarkarnati/RunCycleLog",
  },
  {
    subheader: "Resume/CV Parser using NLP",
    cta: "View on GitHub",
    items: [
      "Extracted skills, education, and experience using spaCy NER; processed 2,400+ resumes.",
      "Matched resumes to JDs with cosine similarity; trained a KNN classifier for role categorization.",
      "Integrated PyPDF2 for robust PDF ingestion and parsing."
    ],
    link: "https://github.com/sharathkumarkarnati/AIProject",
  },
  {
    subheader: "Community Detection",
    cta: "View on GitHub",
    items: [
      "Analyzed real-world networks (Email-EU Core, Twitter Congress) using NetworkX and igraph.",
      "Computed centralities (degree, betweenness, closeness, eigenvector) and applied Louvain community detection.",
      "Explored small-world properties; compared results and methodologies across libraries."
    ],
    link: "https://github.com/sharathkumarkarnati/Community-Detection-using-NetworkX",
  },
  {
    subheader: "Smart Home Protection System",
    // cta omitted (no link)
    items: [
      "Developed an IoT intrusion-detection prototype using Arduino, ESP8266, and IR sensors with sub-2s response time.",
      "Wrote C++ firmware, enabled GSM alerts, and added Wi-Fi remote monitoring via a simple cloud dashboard."
    ],
    link: "",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col justify-start items-start text-lg font-normal *:not-first:mt-8">
      {projectItems.map((item) => (
        <div
          key={item.subheader}
          className="flex flex-col justify-between items-start gap-2 rounded-2xl border p-4 shadow-sm *:not-first:mt-2"
        >
          {/* Header row: title left, CTA right (no wrap) */}
          <div className="flex w-full flex-wrap items-center justify-between gap-2 md:flex-nowrap">
            <div className="text-xl font-semibold underline min-w-0 truncate">
              {item.subheader}
            </div>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 shrink-0 whitespace-nowrap underline"
              >
                <FaGithub className="h-4 w-4" />
                {item.cta ?? "View on GitHub"}
              </a>
            )}
          </div>

          {/* Bullets */}
          <ul className="flex flex-col justify-start items-start gap-2 list-disc list-inside">
            {item.items.map((subitem, idx) => (
              <li key={idx}>{subitem}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};




// const projectItems = [
  
//   {
//     subheader: "Regale – The Recipe App",
//     items: [
//       "Launched a full-stack recipe platform with real-time search across 100k+ curated meals and community submissions.",
//       "Defined REST endpoints for search, authentication, and submissions; established server-side MVC with modular React components.",
//       "Introduced JWT session management, dynamic ingredient scaling, and user dashboards, increasing 30-day retention by 40%."
//     ],
//     link: "https://regale-login.onrender.com/",
//   },
//   {
//     subheader: "Stackr – Dropbox-style File Manager",
//     items: [
//       "Built folder-level uploads, previews, and secure sharing for PDFs/images with persistent sessions.",
//       "Devised OTP login and role-based access control (RBAC) via Clerk; refined media delivery with ImageKit and indexed PostgreSQL queries.",
//       "Reduced median page load time by 50% and improved cross-session file accessibility through schema tuning and caching."
//     ],
//     link: "https://stackr-a-dropbox-clone.vercel.app", 
//   },
//   {
//     subheader: "Your DSA Buddy – AI Chrome Extension",
//     items: [
//       "Created a Chrome extension that provides progressive, language-aware hints for LeetCode using the Gemini API.",
//       "Combined real-time problem-page detection with an in-tab chatbot UI and a 30-minute focus timer to minimize context switching.",
//       "Improved learning flow and on-task time by keeping guidance inline within the coding tab."
//     ],
//     link: "", 
//   },
//   {
//     subheader: "Intrusion Detection System using ML",
//     items: [
//       `Developed an Intrusion Detection System (IDS) using machine learning on the NSL-KDD
//                                     dataset to classify network traffic as "normal" or "attack."`,
//       `Evaluated multiple models—including Logistic Regression, KNN, Decision Trees, Random
//                                     Forest, XGBoost, and Neural Networks—to identify the most effective approach.`,
//       `Preprocessed data with feature scaling, PCA for dimensionality reduction, and SMOTE
//                                     to handle class imbalance, ensuring robust model performance.`,
//       `Employed cosine similarity and feature importance analysis to interpret predictions,
//                                     and implemented Neural Networks with dropout and regularization to enhance
//                                     generalization and reduce overfitting.`,
//     ],
//     link: "https://github.com/sharathkumarkarnati/Intrusion-Detection-using-ML",
//   },
//   {
//     subheader: "Movie Recommendation System",
//     items: [
//       `Developed a content-based movie recommendation system using Python and Streamlit,
//                                     leveraging movie features (genres, actors, directors) to compute cosine similarity
//                                     for personalized suggestions.`,
//       `Designed and implemented an intuitive web interface featuring dedicated tabs for
//                                     personalized recommendations, top-rated movies, and user favorites.</li>
//                                 <li>Hosted the application locally, ensuring seamless performance, fast load times, and
//                                     a user-friendly navigation experience.`,
//       `Gained hands-on experience in feature extraction, recommendation algorithms, and
//                                     full-stack web application development.`,
//     ],
//     link: "https://github.com/sharathkumarkarnati/Movie-Recommendation-System",
//   },
//   {
//     subheader: "Virtual AI Mouse",
//     items: [
//       `Developed an AI-powered virtual mouse using hand tracking and gesture recognition,
//                                     leveraging OpenCV and MediaPipe for real-time hand landmark detection and gesture
//                                     interpretation.`,
//       `Implemented deep learning models to achieve accurate hand gesture recognition and
//                                     tracking.`,
//       `Designed a responsive system that maps hand gestures to mouse functions—cursor
//                                     movement, clicking, scrolling, and drag-and-drop—in real time.`,
//       `Focused on accessibility by creating a hygienic, intuitive alternative for users
//                                     with physical limitations and explored its potential in VR and AR environments.`,
//     ],
//     link: "https://github.com/sharathkumarkarnati/AI-Virtual-Mouse",
//   },
//   {
//     subheader: "Run Cycle Log",
//     items: [
//       `Developed RunCycleLog, a dynamic web application for tracking running and cycling
//         workouts using JavaScript, HTML, and CSS, and deployed it via GitHub Pages for easy
//         accessibility.`,
//       `Leveraged the Leaflet.js API to create interactive maps, enabling users to visualize
//         their workout routes in real-time.`,
//       `Implemented comprehensive workout logging features that capture key metrics—workout
//         type (running or cycling), distance, duration, cadence, and elevation gain—while
//         ensuring data persistence using local storage.`,
//     ],
//     link: "https://github.com/sharathkumarkarnati/RunCycleLog",
//   },
//   {
//     subheader: "Resume/CV Parser using NLP",
//     items: [
//       `Developed an NLP-based Resume Parsing Tool using Python, leveraging SpaCy for
//         efficient text extraction, tokenization, and named entity recognition (NER) to
//         extract critical information such as skills, education, and experience.`,
//       `Implemented cosine similarity algorithms to accurately match resumes with job
//         descriptions and trained a KNN model to categorize resumes into relevant job roles.
//     `,
//       `Integrated PyPDF2 for handling PDF resume formats, ensuring smooth extraction and
//         processing of resume data.`,
//       `Processed over 2400 resumes, significantly reducing manual screening efforts by
//         automating data extraction and candidate-job matching.`,
//     ],
//     link: "https://github.com/sharathkumarkarnati/AIProject",
//   },
//   {
//     subheader: "Community Detection",
//     items: [
//       `Analyzed real-world networks (Email EU Core and Twitter Congress) using Python
//         libraries NetworkX and igraph.`,
//       `Employed centrality measures (degree, betweenness, closeness, eigenvector) to
//         identify influential nodes.`,
//       `Applied the Louvain algorithm for community detection to uncover tightly-knit
//         groups, and compared results between NetworkX and igraph.`,
//       `Utilized shortest path algorithms (Dijkstra, PageRank, Random Walk) to evaluate
//         network efficiency and connectivity.`,
//       `Conducted hubs and authorities analysis to pinpoint key information hubs.`,
//       `Explored the small-world phenomenon to understand connectivity patterns and
//         communication pathways.`,
//     ],
//     link: "https://github.com/sharathkumarkarnati/Community-Detection-using-NetworkX",
//   },
//   {
//     subheader: "Smart Home Protection System",
//     items: [
//       `Developed an IoT-driven home security prototype using Arduino, ESP8266, and IR
//         sensors for real-time intrusion detection.`,
//       `Wrote C++ firmware for seamless integration of hardware components, ensuring a
//         response time under 2 seconds.`,
//       `Implemented GSM-based alert notifications to instantly inform users of security
//         breaches, reducing potential threats by 40%.`,
//       `Leveraged ESP8266 for Wi-Fi connectivity, enabling remote monitoring and real-time
//         system control via a cloud-based dashboard.`,
//       `Optimized system reliability through extensive testing, ensuring scalability for
//         real-world deployment.`,
//     ],
//     link: "",
//   },
// ];

// const Projects = () => {
//   return (
//     <div className="flex flex-col justify-start items-start text-lg font-normal *:not-first:mt-8">
//       {projectItems.map((item) => (
//         <div
//           key={item.subheader}
//           className="flex flex-col justify-between items-start *:not-first:mt-2"
//         >
//           <div className="flex flex-1 self-stretch flex-col md:flex-row justify-between items-start md:items-center">
//             <div className="text-xl font-semibold underline">
//               {item.subheader}
//             </div>
//             {item.link && (
//               <a
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="underline flex flex-row items-center"
//               >
//                 <FaGithub className="w-4 h-4 text-current mr-1" />
//                 View on GitHub
//               </a>
//             )}
//           </div>
//           <ul className="flex flex-col justify-start items-start gap-2 flex-wrap list-disc list-inside">
//             {item.items.map((subitem) => (
//               <li key={subitem}>{subitem}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

const educationItems = [
  {
    subheader: "Master of Science in Computer Science (AI & ML)",
    uni: "Washington State University, Pullman, Washington",
    items: ["GPA: 3.82", "August 2023 - May 2025"],
  },
  {
    subheader: "Bachelor of Technology in Electronics and Communication",
    uni: "Vellore Institute of Technology, Vellore, India",
    items: ["GPA: 7.79", "June 2018 - April 2022"],
  },
];

const Education = () => {
  return (
    <div className="flex flex-col justify-start items-start text-lg font-normal *:not-first:mt-8">
      {educationItems.map((item) => (
        <div
          key={item.subheader}
          className="flex flex-col justify-start items-start *:not-first:mt-2"
        >
          <div className="text-xl font-semibold underline">
            {item.subheader}
          </div>
          <div className="text-lg font-semibold">{item.uni}</div>
          <ul className="flex flex-col justify-start items-start gap-2 flex-wrap">
            {item.items.map((subitem) => (
              <li key={subitem}>{subitem}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const Screens: Record<State, () => JSX.Element> = {
  about: About,
  experience: Experience,
  projects: Projects,
  education: Education,
};
