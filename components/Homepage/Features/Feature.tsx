import React from 'react';

export default function Feature({ Icon, title, description }: { Icon: React.FC; title: string; description: string }) {
    return (
        <div className="text-center">
            <h1 className='mb-4 md:text-2xl sm:text-xl text-lg font-bold tracking-wide'>{title}</h1>
            <div className="icon md:w-52 sm:w-60 w-40 m-auto">
                <Icon />
            </div>
            <p className='md:w-auto md:text-base sm:w-96 sm:text-sm text-xs w-64 mt-2 tracking-wide sm:leading-7 leading-4'>{description}</p>
        </div>
    );
}
