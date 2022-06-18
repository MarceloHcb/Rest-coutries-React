import "./Header.css"
import { TbMoon } from "react-icons/tb"
import { useContext } from "react"
import { ThemeContext } from "../../data/Context/theme-context/theme-context"
import { themes } from "../../themes/themes"
export const Header = (props) => {
    const { theme, setTheme } = useContext(ThemeContext)       
    return (<>
    <header style={{ background:theme.elements, color:theme.color}}>
    <div className="container" >
             <h1> <a href="/" style={{color:theme.color}}>{props.title} </a> </h1>
            <div className="themes" onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}> <h3><TbMoon /> Dark Mode</h3></div>
        </div>
    </header>        

    </>)
}