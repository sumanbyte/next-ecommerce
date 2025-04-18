import Image from "next/image";
import Link from "next/link";

type PropType = {
  title: string;
  img: string;
  textColor: string;
};

const HeroContent = (props: PropType) => {
  return (
    <div
      className={`absolute h-full w-full py-10 ${props.textColor} font-montserrat`}
    >
      <div className="container ">
        <h1 className="text-4xl md:text-5xl font-bold leading-10">
          {props.title}
        </h1>
        <p className="text-xl md:text-3xl my-1 md:my-2">Festive Sale !</p>
        <p className="font-extrabold my-1 md:my-2 text-sm md:text-2xl">
          Up to 60% Discount
        </p>
        <Link
          href={"/products"}
          className="inline-block mt-2 md:mt-5 px-5 md:px-20 py-2 md:py-3 text-sm md:text-lg bg-secondary-500 uppercase font-extrabold"
        >
          Shop the Sale
        </Link>
      </div>
    </div>
  );
};

export default HeroContent;
