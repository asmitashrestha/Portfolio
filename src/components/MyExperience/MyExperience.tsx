import { experienceData } from "../Constant/Constant";

export default function MyExperience() {
  return (
    <div className="flex justify-center text-center ">
      {experienceData.map((exp, index) => (
        <div key={index} className="m-2 w-56 py-12 bg-darkgray rounded-2xl font-serif ">
          <p className="text-gray text-[16px] mb-5">{exp.title}</p>
          <h1 className="text-white text-2xl font-bold">{exp.number}</h1>{" "}
        </div>
      ))}
    </div>
  );
}
