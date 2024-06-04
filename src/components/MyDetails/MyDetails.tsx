import { myDetails } from "../Constant/Constant";

export default function MyDetails() {
  return (
    <div className="bg-stone-950 w-[370px] p-3 m-3 rounded-2xl">
      <div className=" w-[350px] py-6 ">
        {myDetails.map((details, index) => (
          <div
            key={index}
            className="sans-serif flex space-x-7  text-white text-lg
       bg-darkgray rounded-2xl p-4 m-4 hover:border-2
        hover:border-yellow"
          >
            <div className="font-semibold">{details.date}</div>
            <div className="">
              <h1 className="font-serif font-semibold">{details.company}</h1>
              <p className="text-gray font-sans">{details.stack}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
