import React, { useContext } from 'react'
import {ThemeContext} from '../context/ThemeContext'

const BookList = () => {
    const {isLightTheme,light,dark}=useContext(ThemeContext);
    const theme=isLightTheme?light:dark;
    return (  
        <div className="book-list" style={{color:theme.syntax,background:theme.bg}}>
                <ul>
                    <li style={{background: theme.ui}}>Bhagavatgita</li>
                    <li style={{background: theme.ui}}>Ramayanama</li>
                    <li style={{background: theme.ui}}>Mahabharatam</li>
                </ul>
        </div>
    );
}
 
export default BookList;


