import NavItem from "./NavItem";

export interface NavModalProp {
    title: string;

}

export default function NavModal(props: NavModalProp) {
    return (
        <div className="">
        
            <div className="w-full h-60 bg-orange-400 duration-500 z-10 absolute">
                <div className={props.title !== "search" ?`px-9 py-3 grid grid-cols-3`: ""}>
                    <NavItem title={props.title} />
                </div>
            </div>
        </div>
    );
}