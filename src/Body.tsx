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
        <div className="hidden md:flex w-1/2 h-0.25 bg-primary m-0 mt-6 mb-6" />
        <OverlayScrollbar
          scrollbarProps={{
            options: { overflow: { x: "scroll", y: "hidden" } },
          }}
          className="flex md:flex-1 self-stretch md:self-auto overflow-auto"
        >
          <div className="flex flex-row md:flex-col justify-start items-center md:items-end text-base md:text-lg font-semibold uppercase *:not-first:ml-8 md:*:not-first:mt-8">
            {navItems.map((item) => (
              <div
                className={classNames(
                  `flex cursor-pointer hover:bg-primary hover:text-bg-primary p-2 rounded-lg
                      transition-colors duration-300 ease-in-out`,
                  active === item && "bg-primary text-bg-primary"
                )}
                key={item}
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
        Hi, I'm Sharath Karnati – a Master's student in Computer Science at
        Washington State University, expected to graduate in May 2025. I have a
        strong background in software engineering, with hands-on experience in
        full-stack development, data science, machine learning, and project
        management. My work has ranged from building web applications using
        JavaScript and React to developing machine learning models for
        real-world problems.
      </p>

      <p>
        I'm passionate about creating impactful software solutions and
        continuously learning new technologies to improve my craft. Through my
        internships and personal projects, I've gained experience working on
        complex systems, collaborating with diverse teams, and deploying
        solutions that solve real-world challenges. I'm excited to bring my
        skills, curiosity, and problem-solving mindset to new opportunities in
        the tech industry.
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
    items: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "C++",
      "C#",
      "R",
      "HTML",
      "CSS",
    ],
  },
  {
    subheader: "Frameworks & Libraries",
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "Redux",
      "Django",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
    ],
  },
  {
    subheader: "Database & Cloud",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQL",
      "AWS (S3, Lambda, EC2)",
      "Azure",
      "Kubernetes",
      "CI/CD",
    ],
  },
  {
    subheader: "Tools & DevOps",
    items: [
      "Git",
      "Docker",
      "Postman",
      "Jenkins",
      "Maven",
      "Ansible",
      "VS Code",
      "IntelliJ",
      "Power BI",
      "Tableau",
      "MS Excel",
      "Figma",
    ],
  },
  {
    subheader: "Development Practices",
    items: [
      "Agile",
      "SDLC",
      "TDD",
      "SOLID Principles",
      "Microservices",
      "Design Patterns",
      "Documentation",
      "Version Control",
    ],
  },
  {
    subheader: "Operating Systems",
    items: ["Windows", "Linux", "MacOS"],
  },
];


const Experience = () => {
  return (
    <div className="flex flex-col justify-start items-start text-lg font-normal *:not-first:mt-8">

      {/* Experience 1: Data Analyst */}
      <div className="flex flex-col justify-start items-start">
        <h3 className="text-2xl font-bold underline">
          Data Analyst - Peer Education Programs
        </h3>
        <h4 className="text-lg font-semibold">
          OAE, Washington State University
        </h4>
        <p className="text-base font-medium">September 2024 - Present</p>
        <p className="text-base font-medium">Pullman, Washington</p>
      </div>
      <div className="flex flex-col justify-start items-start *:not-first:mt-4">
        <ul className="flex flex-col justify-start items-start gap-2 list-disc list-inside">
          <li>
            Transformed performance tracking for 33+ peer mentors by
            implementing an automated Excel system that increased monitoring
            accuracy by 80% through rigorous data analysis.
          </li>
          <li>
            Developed a custom web portal to centralize mentor details and
            analytics, streamlining reporting and enabling real-time,
            data-driven decision-making.
          </li>
          <li>
            Spearheaded the certification evaluation process for the CRLA
            program, ensuring all mentors met rigorous quality standards.
          </li>
          <li>
            Introduced innovative tracking methodologies and data visualization
            techniques, collaborating with cross-functional teams to deliver
            actionable insights.
          </li>
        </ul>
      </div>

      {/* Experience 2: Software Developer Intern */}
      <div className="flex flex-col justify-start items-start">
        <h3 className="text-2xl font-bold underline">
          Software Developer Intern – Vengai Software Solutions
        </h3>
        <h4 className="text-lg font-semibold">Hyderabad, India</h4>
        <p className="text-base font-medium">September 2022 – March 2023</p>
      </div>
      <div className="flex flex-col justify-start items-start *:not-first:mt-4">
        <ul className="flex flex-col justify-start items-start gap-2 list-disc list-inside">
          <li>
            Engineered and maintained responsive web applications using <strong>React, Node.js, and JavaScript</strong>, improving overall app performance and usability.
          </li>
          <li>
            Developed secure, role-based authentication and session handling systems, significantly enhancing user data protection and access control.
          </li>
          <li>
            Optimized frontend components and backend APIs, reducing page load times by <strong>30%</strong> and elevating user interaction speed.
          </li>
          <li>
            Collaborated with cross-functional teams to deliver production-ready features, following Agile methodology and version control best practices.
          </li>
        </ul>
      </div>

    </div>
  );
};


const projectItems = [
  {
    subheader: "Regale - The Recipe App",
    items: [
      "Built Regale, a full-stack recipe search web app using React, Node.js, Express, MongoDB, HTML, and SCSS, where users can explore over 100,000 recipes by connecting to the Forkify Recipe API.",
      "Added dynamic ingredient adjustments based on serving sizes to give users a more personalized cooking experience.",
      "Implemented a bookmarking feature using localStorage so users can save and revisit their favorite recipes easily.",
      "Followed the MVC architecture and used object-oriented principles, managing state with React and handling async API calls for a smooth and responsive interface.",
      "Developed a feature that allows users to submit their own recipes with ingredients, which are stored and managed in a MongoDB backend."
    ],
    link: "https://regale-login.onrender.com",
  },
  {
    subheader: "Intrusion Detection System using ML",
    items: [
      `Developed an Intrusion Detection System (IDS) using machine learning on the NSL-KDD
                                    dataset to classify network traffic as "normal" or "attack."`,
      `Evaluated multiple models—including Logistic Regression, KNN, Decision Trees, Random
                                    Forest, XGBoost, and Neural Networks—to identify the most effective approach.`,
      `Preprocessed data with feature scaling, PCA for dimensionality reduction, and SMOTE
                                    to handle class imbalance, ensuring robust model performance.`,
      `Employed cosine similarity and feature importance analysis to interpret predictions,
                                    and implemented Neural Networks with dropout and regularization to enhance
                                    generalization and reduce overfitting.`,
    ],
    link: "https://github.com/sharathkumarkarnati/Intrusion-Detection-using-ML",
  },
  {
    subheader: "Movie Recommendation System",
    items: [
      `Developed a content-based movie recommendation system using Python and Streamlit,
                                    leveraging movie features (genres, actors, directors) to compute cosine similarity
                                    for personalized suggestions.`,
      `Designed and implemented an intuitive web interface featuring dedicated tabs for
                                    personalized recommendations, top-rated movies, and user favorites.</li>
                                <li>Hosted the application locally, ensuring seamless performance, fast load times, and
                                    a user-friendly navigation experience.`,
      `Gained hands-on experience in feature extraction, recommendation algorithms, and
                                    full-stack web application development.`,
    ],
    link: "https://github.com/sharathkumarkarnati/Movie-Recommendation-System",
  },
  {
    subheader: "Virtual AI Mouse",
    items: [
      `Developed an AI-powered virtual mouse using hand tracking and gesture recognition,
                                    leveraging OpenCV and MediaPipe for real-time hand landmark detection and gesture
                                    interpretation.`,
      `Implemented deep learning models to achieve accurate hand gesture recognition and
                                    tracking.`,
      `Designed a responsive system that maps hand gestures to mouse functions—cursor
                                    movement, clicking, scrolling, and drag-and-drop—in real time.`,
      `Focused on accessibility by creating a hygienic, intuitive alternative for users
                                    with physical limitations and explored its potential in VR and AR environments.`,
    ],
    link: "https://github.com/sharathkumarkarnati/AI-Virtual-Mouse",
  },
  {
    subheader: "Run Cycle Log",
    items: [
      `Developed RunCycleLog, a dynamic web application for tracking running and cycling
        workouts using JavaScript, HTML, and CSS, and deployed it via GitHub Pages for easy
        accessibility.`,
      `Leveraged the Leaflet.js API to create interactive maps, enabling users to visualize
        their workout routes in real-time.`,
      `Implemented comprehensive workout logging features that capture key metrics—workout
        type (running or cycling), distance, duration, cadence, and elevation gain—while
        ensuring data persistence using local storage.`,
    ],
    link: "https://github.com/sharathkumarkarnati/RunCycleLog",
  },
  {
    subheader: "Resume/CV Parser using NLP",
    items: [
      `Developed an NLP-based Resume Parsing Tool using Python, leveraging SpaCy for
        efficient text extraction, tokenization, and named entity recognition (NER) to
        extract critical information such as skills, education, and experience.`,
      `Implemented cosine similarity algorithms to accurately match resumes with job
        descriptions and trained a KNN model to categorize resumes into relevant job roles.
    `,
      `Integrated PyPDF2 for handling PDF resume formats, ensuring smooth extraction and
        processing of resume data.`,
      `Processed over 2400 resumes, significantly reducing manual screening efforts by
        automating data extraction and candidate-job matching.`,
    ],
    link: "https://github.com/sharathkumarkarnati/AIProject",
  },
  {
    subheader: "Community Detection",
    items: [
      `Analyzed real-world networks (Email EU Core and Twitter Congress) using Python
        libraries NetworkX and igraph.`,
      `Employed centrality measures (degree, betweenness, closeness, eigenvector) to
        identify influential nodes.`,
      `Applied the Louvain algorithm for community detection to uncover tightly-knit
        groups, and compared results between NetworkX and igraph.`,
      `Utilized shortest path algorithms (Dijkstra, PageRank, Random Walk) to evaluate
        network efficiency and connectivity.`,
      `Conducted hubs and authorities analysis to pinpoint key information hubs.`,
      `Explored the small-world phenomenon to understand connectivity patterns and
        communication pathways.`,
    ],
    link: "https://github.com/sharathkumarkarnati/Community-Detection-using-NetworkX",
  },
  {
    subheader: "Smart Home Protection System",
    items: [
      `Developed an IoT-driven home security prototype using Arduino, ESP8266, and IR
        sensors for real-time intrusion detection.`,
      `Wrote C++ firmware for seamless integration of hardware components, ensuring a
        response time under 2 seconds.`,
      `Implemented GSM-based alert notifications to instantly inform users of security
        breaches, reducing potential threats by 40%.`,
      `Leveraged ESP8266 for Wi-Fi connectivity, enabling remote monitoring and real-time
        system control via a cloud-based dashboard.`,
      `Optimized system reliability through extensive testing, ensuring scalability for
        real-world deployment.`,
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
          className="flex flex-col justify-between items-start *:not-first:mt-2"
        >
          <div className="flex flex-1 self-stretch flex-col md:flex-row justify-between items-start md:items-center">
            <div className="text-xl font-semibold underline">
              {item.subheader}
            </div>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline flex flex-row items-center"
              >
                <FaGithub className="w-4 h-4 text-current mr-1" />
                View on GitHub
              </a>
            )}
          </div>
          <ul className="flex flex-col justify-start items-start gap-2 flex-wrap list-disc list-inside">
            {item.items.map((subitem) => (
              <li key={subitem}>{subitem}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const educationItems = [
  {
    subheader: "Master of Science in Computer Science",
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
