import React from 'react';

export default function Feature({ Icon, title, description }: { Icon: React.FC; title: string; description: string }) {
    return (
        <div className="">
            <div className='md:hidden flex items-center justify-center flex-wrap sm:flex-nowrap custom-card'>
                <div className='px-2 my-2'>
                    <h1 className='mb-1 md:text-2xl sm:text-xl text-lg font-bold tracking-wide'>{title}</h1>
                    <p className='md:w-auto md:text-base sm:w-96 sm:text-sm text-xs w-64 tracking-wide sm:leading-7 leading-4'>{description}</p>
                </div>
                <div className="icon md:w-52 w-20">
                    <Icon />
                </div>
            </div>

            <div className='hidden md:block'>
                <h1 className='text-center mb-2 md:text-2xl sm:text-xl text-lg font-bold tracking-wide'>{title}</h1>
                <div className="icon w-36 m-auto">
                    <Icon />
                </div>
                <p className='text-sm text-justify w-60 md:w-56 lg:w-72 break-words mt-2 tracking-wide leading-5'>{description}</p>
            </div>
        </div>
    );
}
