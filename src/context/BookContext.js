import React,{useState, createContext} from 'react';
export const BookContext=createContext();
const BookContextProvider = (props) => {
    const [books,setBooks]=useState([
        {title :"Bhagavatgita", id:1},
        {title:"Ramayanam",id:2},
        {title:"Mahabharatam", id:3},
        {title:"Garuda Puranam", id:4}
    ])
    return (  
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;