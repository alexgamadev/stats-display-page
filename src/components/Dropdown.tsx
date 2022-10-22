import { useState } from 'react';

interface DropdownProps {
    options: Array<string>,
    setOption: (index: number) => void;
}

interface DropdownItemProps {
    active: boolean,
    index: number,
    text: string,
    setActive: (index: number) => void;
}

const Dropdown = ( props: DropdownProps ) => {
    const [ activeOption, setActiveOption ] = useState( 0 );
    const { options, setOption } = props;

    setOption(activeOption);

    return (
        <div className="dropdown dropdown-hover ">
            <label tabIndex={0} className="btn m-1 bg-accent-focus text-neutral-focus hover:bg-accent font-bold">{options[0]}</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-neutral rounded-md text-slate-200 w-52">
                {
                    options.map( ( text, index ) => {
                        return (
                            <DropdownItem 
                                active={activeOption === index}
                                setActive={setActiveOption}
                                index={index}
                                text={text}
                            />
                        )
                    })
                }
            </ul>
        </div>
    );
}

const DropdownItem = ({ active, index, text, setActive }: DropdownItemProps) => {
    const activeStyles = "bg-neutral-focus pointer-events-none"

    return (
        <li>
            <a 
                className={`${active ? activeStyles : ""} my-1`} 
                onClick={() => setActive(index)}>
                {text}
            </a>
        </li>
    )
}

export default Dropdown;