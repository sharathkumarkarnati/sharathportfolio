import { FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="flex flex-col self-stretch *:not-first:mt-2">
      <h2 className="flex text-4xl font-extrabold">Sharath Kumar Karnati</h2>
      <Tags />
      <Contact />
    </div>
  );
};

const Contact = () => {
  return (
    <div className="flex flex-1 self-stretch flex-row justify-start items-center text-sm font-light flex-wrap">
      {items.map((item, index) => (
        <div className="flex self-stretch flex-row" key={item.text}>
          <div className="flex self-stretch">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center self-stretch"
            >
              <item.Icon className="md:mr-2" />
              <div className="underline hidden md:inline-block">
                {item.text}
              </div>
            </a>
          </div>
          {index < items.length - 1 && <VerticalDivider />}
        </div>
      ))}
    </div>
  );
};

const items = [
  {
    Icon: MdMailOutline,
    href: "mailto:sharathkumarrkarnati@gmail.com",
    text: "sharathkumarrkarnati(at)gmail.com",
  },
  {
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/sharathkumarrkarnati",
    text: "linkedin.com/sharathkumarrkarnati",
  },
  {
    Icon: FaGithub,
    href: "https://github.com/sharathkumarkarnati",
    text: "github.com/sharathkumarkarnati",
  },
];

const Tags = () => (
  <div
    className={`flex flex-1 self-stretch flex-col md:flex-row justify-start 
    md:items-center sm:text-base md:text-lg font-semibold flex-wrap`}
  >
    <div>Software Engineer</div>
    <DotSeparator />
    <div>Full-stack Developer</div>
    <DotSeparator />
    <div>Tech Enthusiast</div>
  </div>
);

const VerticalDivider = () => {
  return <div className={"h-6 w-0.5 mx-2 bg-primary"} />;
};

const DotSeparator = () => {
  return <div className="mx-1 md:mx-2 hidden md:inline-block">•</div>;
};
