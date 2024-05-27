import Image from "next/image"
import Link from "next/link";

type PropType = {
    title: string;
    img: string;
    textColor: string;
}

const HeroContent = (props: PropType) => {
    return (
        <>
            <div className={`absolute top-1 sm:top-10 left-1 sm:left-10 ${props.textColor} font-montserrat`}>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold ">{props.title}</h1>
                <p className=' text-xs sm:text-xl md:text-3xl my-1 md:my-2'>Festive Sale !</p>
                <p className='font-extrabold my-1 md:my-2 text-xs sm:text-sm md:text-2xl'>Up to 60% Discount</p>
                <Link
                    href={"/products"}
                    className='mt-0 sm:mt-2 md:mt-5 px-2 sm:px-5 md:px-20 py-1 sm:py-2 md:py-3 text-[10px] sm:text-sm md:text-lg bg-secondary-500 uppercase font-extrabold'>Shop the Sale</Link>
            </div>
            <Image className='w-full' src={`/images/herosection/${props.img}`} width={1600} height={900} alt="" />
        </>
    )
}

export default HeroContent