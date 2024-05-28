// import Header from "@/components/Header/Header";
import Homes from "@/components/Home/Home";
import MyDescription from "@/components/MyDescription/MyDescription";
import MyDetails from "@/components/MyDetails/MyDetails";


export default function Home() {
  return (
    <div className="">

        {/* <Header /> */}
        <Homes />
        <div className="mt-9">
        <MyDetails />
      </div>
      <div className="mt-8">
        <MyDescription/>
      </div>

    </div>
  );
}
