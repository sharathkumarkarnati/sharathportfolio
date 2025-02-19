import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

export const DownloadResumePdf = () => {
  return (
    <a
      href="/Sharath_Karnati_Resume.pdf"
      download="Sharath_Karnati_Resume.pdf"
      className={`flex flex-row justify-center items-center text-base md:text-lg font-semibold cursor-pointer
                    p-2 pl-0 rounded-lg hover:underline`}
      aria-label="Download resume"
    >
      <HiOutlineDocumentArrowDown className="mr-2" />
      <div className="uppercase">Resume</div>
    </a>
  );
};
