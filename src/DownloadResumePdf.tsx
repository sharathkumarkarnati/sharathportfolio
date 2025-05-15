import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import resumepdf from "./Sharath_resume_SWE.pdf?url";

export const DownloadResumePdf = () => {
  return (
    <a
      href={resumepdf}
      download="Sharath_resume_SWE.pdf"
      className={`flex flex-row justify-center items-center text-base md:text-lg font-semibold cursor-pointer
                    p-2 pl-0 rounded-lg hover:underline`}
      aria-label="Download resume"
    >
      <HiOutlineDocumentArrowDown className="mr-2" />
      <div className="uppercase">Resume</div>
    </a>
  );
};
