"use client"

import { ReactNode, createContext, useState } from "react";
import { FilterType } from "../types/filter-types";
import { FilterPriority } from "../types/filter-priority";

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.ALL,
    priority: FilterPriority.NOVIDADES,
    setSearch: (value: string) => { },
    setPage: (value: number) => { },
    setType: (value: FilterType) => { },
    setPriority: (value: FilterPriority) => { }
})

interface ProviderProps {
    children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps) {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [type, setType] = useState(FilterType.ALL);
    const [priority, setPriority] = useState(FilterPriority.NOVIDADES);
    return (
        <FilterContext.Provider value={{ search, page, type, priority, setSearch, setPage, setType, setPriority }}>
            {children}
        </FilterContext.Provider>
    )
}