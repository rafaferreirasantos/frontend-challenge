import styled from "styled-components"
import { ArrowIcon } from "./icons/arrow-icon"
import { useState } from "react";
import { FilterPriority } from "../types/filter-priority";
import { useFilter } from "../hooks/useFilter";

interface FilterByPriorityProps {

}

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 99;

    button {
        border: none;
        background-color: transparent;
        font-family: inherit;
        font-weight: 400;
        line-height: 22px;
        color: var(--text-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        
    }
    `
interface FilterItemProps {
    selected: boolean;
}


const PriorityFilter = styled.ul<FilterItemProps>`
    position: absolute;
    background-color : #FFF;
    padding: 12px 16px;
    box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
    border-radius: 4px;
    list-style: none;
    width: 256px;
     
    top: 100%;

    
    li {
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    li:hover {
        font-weight: 600;
    }
    li + li {
        margin-top: 4px;
    }
`

export function FilterByPriority(props: FilterByPriorityProps) {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    const { setPriority } = useFilter();
    const handlePriority = (value: FilterPriority) => {
        setPriority(value);
        setIsOpen(false);
    }
    return (
        <FilterContainer>
            <button onClick={handleOpen}>
                Organizar por
                <ArrowIcon />
            </button>
            {isOpen &&
                <PriorityFilter selected={false} >
                    <li onClick={() => { handlePriority(FilterPriority.NOVIDADES) }}>Novidades</li>
                    <li onClick={() => { handlePriority(FilterPriority.PRECO_MAIOR) }}>Preço: maior menor</li>
                    <li onClick={() => { handlePriority(FilterPriority.PRECO_MENOR) }}>Preço: menor maior</li>
                    <li onClick={() => { handlePriority(FilterPriority.MAIS_VENDIDOS) }}>Mais vendidos</li>
                </PriorityFilter>
            }
        </FilterContainer>
    )
}