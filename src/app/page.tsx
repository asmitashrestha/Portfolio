"use client";
import AboutMe from "@/components/AboutMe/AboutMe";
import ButtonAboutMe from "@/components/ButtonAboutMe/ButtonAboutMe";
import ButtonSeeAllWork from "@/components/ButtonSeeAllWork/ButtonSeeAllWork";
import Heading from "@/components/Heading/Heading";
import Homes from "@/components/Home/Home";
import Worksdone from "@/components/Worksdone/Worksdone";

export default function Home() {
  return (
    <div className="">
      <Homes />
      <div className="mt-9">
        <div className="mt-24">
          <Heading title="Selected Works" />
        </div>

        <Worksdone limit={4} />
        <div className="pt-9">
        <ButtonSeeAllWork title="See All Works"/>  
        </div>
        
        <AboutMe />
        <ButtonAboutMe title="Know more about me" />
      </div>
    </div>
  );
}
