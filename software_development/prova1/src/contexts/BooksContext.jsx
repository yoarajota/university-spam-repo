import { createContext, useEffect, useReducer } from "react";
import api from "../axios";

const BooksContext = createContext('books');

/* eslint-disable react/prop-types */
const BooksProvider = ({ children }) => {
    const [{ currentPage, data }, reduc] = useReducer((prev, data) => ({ ...prev, ...data }), { currentPage: null, data: [] })

    useEffect(() => {
        const fetch = () => {
            api.get("/api/v1/Books").then((res) => reduc({ data: res.data }))
        }

        fetch();
    }, [])

    const setCurrentPage = (id) => {
        reduc({ currentPage: id })
    }

    return <BooksContext.Provider value={{ data, setCurrentPage, currentPage }}>
        {children}
    </BooksContext.Provider>
}

export { BooksProvider, BooksContext };