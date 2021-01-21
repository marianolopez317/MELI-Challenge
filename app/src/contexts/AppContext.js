import React, { useContext, useState } from "react"

const CategoriesContext = React.createContext();
const SearchValueContext = React.createContext();

export const useCategories = () => {
    return useContext(CategoriesContext);
}

export const useSearchValue = () => {
    return useContext(SearchValueContext);
}

export const AppProvider = ({ children}) => {
    const [ categories, setCategories ] = useState([]);
    const [ searchValue, setSearchValue ] = useState('');
    return (
        <CategoriesContext.Provider 
            value={
                {
                    categories,
                    setCategories
                }
            }
        >
            <SearchValueContext.Provider
                value={
                    {
                        searchValue,
                        setSearchValue
                    }
                }
            >
                {children}
            </SearchValueContext.Provider>
        </CategoriesContext.Provider>
    )
}
