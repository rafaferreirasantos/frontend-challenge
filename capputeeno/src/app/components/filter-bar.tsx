"use client"
import { styled } from "styled-components";
import { FilterByType } from "./filter-by-type";

const FilterContainer = styled.div`
    display: flex;  
    align-items: start;
    width: 100%;
`

export function FilterBar() {
    return (
        <FilterContainer>
            <FilterByType />
        </FilterContainer>
    )
}