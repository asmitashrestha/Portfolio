interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <h1
      className=" mt-2  font-serif 
    font-bold text-[40px] text-center items-center text-gray"
    >
      {title}
    </h1>
  );
};

export default Heading;
