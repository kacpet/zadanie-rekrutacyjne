import projectsImgs from "./svg/projects.svg";
import arrow from "./svg/arrow.svg";
function Projects() {
  return (
    <div id="projects" className="w-full bg-[#DCC1AB] pt-30 pb-11">
      <h2 className="font-medium mb-24 text-5xl pl-40">
        Nasze <span className="italic font-inter">projekty</span>
      </h2>

      <div className="w-full pb-11 relative">
        <img
          className="w-full h-auto block"
          src={projectsImgs}
          alt="nasze projekty"
        />
        <button className="flex absolute bottom-0 mb-38 left-1/2 -translate-x-[calc(50%+123px) font-inter rounded-[200px] text-black px-5.5 pt-3 pb-3.5 bg-[rgba(,,,0)] border border-black duration-500 hover:scale-105 hover:shadow-[0_2px_10px_rgba(20,83,45,0.15)]">
          Rozwiń
          <img className="ml-2" src={arrow} alt="strzałka"/>
        </button>
      </div>
    </div>
  );
}

export default Projects;
