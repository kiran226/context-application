import React,{Component} from 'react';
import {ThemeContext} from '../context/ThemeContext'
class ToggleTheme extends Component {
    static contextType=ThemeContext;
    render() { 
        const {toggleTheme}=this.context;
        return ( 
            <div>
                <button onClick={toggleTheme}>Toggle the Theme</button>
            </div>
         );
    }
}
 
export default ToggleTheme;