import { styled } from "styled-components"
import { useFilter } from "../hooks/useFilter";
import { FilterType } from "../types/filter-types";

interface FilterByTypeProps {

}

interface FilterItemProps {
    selected: boolean;
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
`

const FilterItem = styled.li<FilterItemProps>`
    color: var(--text-dark);
    text-transform: uppercase;
    text-align: center;
    line-height: 22px;
    font-size: 16px;
    font-weight: ${props => props.selected ? '600' : '400'};
    font-family: inherit;
    list-style: none;
    cursor: pointer;

    border-bottom: ${props => props.selected ? '4px solid var(--orange-low);' : ''}
`

export function FilterByType(props: FilterByTypeProps) {
    const { type, setType } = useFilter();
    const handleChangeType = (value: FilterType) => {
        setType(value);
    }
    return (
        <FilterList>
            <FilterItem selected={type === FilterType.ALL} onClick={() => handleChangeType(FilterType.ALL)}>Todos os produtos</FilterItem>
            <FilterItem selected={type === FilterType.SHIRT} onClick={() => handleChangeType(FilterType.SHIRT)}>Camisetas</FilterItem>
            <FilterItem selected={type === FilterType.MUG} onClick={() => handleChangeType(FilterType.MUG)}>Canecas</FilterItem>
        </FilterList>
    )
}