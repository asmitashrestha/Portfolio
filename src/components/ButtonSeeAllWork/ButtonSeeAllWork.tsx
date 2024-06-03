import Link from "next/link";

interface HeadingProps {
  title: string;
}
const ButtonSeeAllWork: React.FC<HeadingProps> = ({title}) => {
  return(
        <div>
        <div className="flex justify-center">
        <Link href={'/works'} className="border border-gray 
        py-3 px-5 rounded-3xl text-gray">{title}</Link>
      </div>
    </div>
  )
}

export default ButtonSeeAllWork