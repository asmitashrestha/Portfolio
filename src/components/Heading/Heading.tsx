
interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div className="flex mt-2 justify-center font-serif 
    font-bold text-[40px] text-center items-center text-gray">
      <h1>{title}</h1>
    </div>
  );
};

export default Heading;