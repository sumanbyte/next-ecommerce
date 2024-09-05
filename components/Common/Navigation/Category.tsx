import { useDispatch } from 'react-redux'
import { changeNav } from '@/redux/entities/navbar'
import { BiChevronDown } from 'react-icons/bi'


const Category = (props: { type: string, text: string, state: boolean }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div onClick={() => {
                dispatch(changeNav({ type: props.type, selectedText: props.text }))

            }} className='relative flex items-center'>
                <button className={`capitalize hover:text-red-700 duration-500 after:content-[""] ${props.state ? 'after:absolute after:right-0 after:bg-black after:h-0.5 after:w-full after:-bottom-4' : ''}`}>{props.text}
                <BiChevronDown className={`transition-transform transform ml-0.5 inline ${props.state ? "rotate-180": ""}`} />
                </button>
            </div>
        </div>
    )
}

export default Category