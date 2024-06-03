import Image from "next/image";
import pro1 from "@assets/proje.jpg";

export default function Worksdone() {
  return (
    <div className="flex justify-center">
      <div className="mt-7 flex md:flex-row flex-col flex-wrap max-auto max-w-sm md:max-w-4xl">
        <div className="relative hover:shadow-lg hover:shadow-yellow m-5">
          <p className="absolute top-6 left-3 text-white bg-darkgray px-3 py-1 rounded-3xl">
            UI/UX
          </p>

          <Image
            src={pro1}
            alt="project"
            className="h-80 w-[405px] rounded-2xl border-4 border-red-400 "
          />
          <div className="absolute bottom-10 left-3">
            <h1 className="font-serif text-white text-xl font-bold">
              TravelHarbor
            </h1>
            <p className="font-sans text-gray text-lg">
              Travel Management System
            </p>
          </div>
        </div>
        <div className="relative hover:shadow-lg hover:shadow-yellow m-5">
          <p className="absolute top-6 left-3 text-white bg-darkgray px-3 py-1 rounded-3xl">
            UI/UX
          </p>

          <Image
            src={pro1}
            alt="project"
            className="h-80 w-[405px] rounded-2xl border-4 border-red-400 "
          />
          <div className="absolute bottom-10 left-3">
            <h1 className="font-serif text-white text-xl font-bold">
              TravelHarbor
            </h1>
            <p className="font-sans text-gray text-lg">
              Travel Management System
            </p>
          </div>
        </div>
        <div className="relative hover:shadow-lg hover:shadow-yellow m-5">
          <p className="absolute top-6 left-3 text-white bg-darkgray px-3 py-1 rounded-3xl">
            UI/UX
          </p>

          <Image
            src={pro1}
            alt="project"
            className="h-80 w-[405px] rounded-2xl border-4 border-red-400 "
          />
          <div className="absolute bottom-10 left-3">
            <h1 className="font-serif text-white text-xl font-bold">
              TravelHarbor
            </h1>
            <p className="font-sans text-gray text-lg">
              Travel Management System
            </p>
          </div>
        </div>
        <div className="relative hover:shadow-lg hover:shadow-yellow m-5">
          <p className="absolute top-6 left-3 text-white bg-darkgray px-3 py-1 rounded-3xl">
            UI/UX
          </p>

          <Image
            src={pro1}
            alt="project"
            className="h-80 w-[405px] rounded-2xl border-4 border-red-400 "
          />
          <div className="absolute bottom-10 left-3">
            <h1 className="font-serif text-white text-xl font-bold">
              TravelHarbor
            </h1>
            <p className="font-sans text-gray text-lg">
              Travel Management System
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
