import Link from "next/link";

interface HeadingProps {
  title: string;
}
const ButtonAboutMe: React.FC<HeadingProps> = ({title}) => {
  return(
        <div>
        <div className="flex justify-center">
        <Link href={'/about'} className="border border-gray 
        py-3 px-5 rounded-3xl hover:bg-darkgray text-gray">{title}</Link>
      </div>
    </div>
  )
}

export default ButtonAboutMe