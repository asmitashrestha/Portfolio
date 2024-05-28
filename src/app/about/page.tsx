import MyDescription from "@/components/MyDescription/MyDescription";
import MyDetails from "@/components/MyDetails/MyDetails";


export default function page() {
  return (
    <div className="flex space-x-2">
      <div className="">
        <MyDetails/>
      </div>
      <div className="">
        <MyDescription/>
      </div>
    </div>
  )
}
