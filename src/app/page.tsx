"use client";
import AboutMe from "@/components/AboutMe/AboutMe";
import Homes from "@/components/Home/Home";
import MyStack from "@/components/MyStack/MyStack";

export default function Home() {
  return (
    <div className="">
      <Homes />
      <div className="mt-9">
        <AboutMe />
      </div>
    </div>
  );
}
