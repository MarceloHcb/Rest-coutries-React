import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import axios from 'axios'
import "./Element.css"
import { ThemeContext } from "../../data/Context/theme-context/theme-context"
export const Element = () => {
    const { theme } = useContext(ThemeContext)
    const { name } = useParams()
    const [url, setUrl] = useState(`https://restcountries.com/v3.1/name/${name}`)
    const [coutry, setCoutry] = useState({
        name: [],
        nativeName:[],
        image: [],
        population: [],
        region: [],
        subRegion: [],
        capital: [],
        tld: [],
        currencies: [],
        languages: [],
        borderCoutries:[]
    })

    const getCountryElement = async () => {
        const res = await axios.get(url)
        const data = await res.data[0]
        console.log(data)
        
            setCoutry({
                name: data.name.common,
                nativeName:data.name.nativeName,
                image: data.flags,
                population: data.population,
                region: data.region,
                subRegion: data.subregion,
                capital: data.capital,
                tld: data.tld[0],
                currencies: data.currencies,
                languages: data.languages,
                borderCoutries:data.borders
            })
      
    }

    useEffect(() => {
        getCountryElement()
    }, [url])
    console.log(coutry)
    return (
        <>
            <div className="element-content" style={{ background: theme.background, color: theme.color }} >
                <div className="left-element">
                    <Link to={"/"}> < button style={{ background: theme.background, color: theme.color }}> <FaArrowLeft />   Back</button> </Link>
                    <img src={coutry.image.png}></img>
                </div>
                <div className="right-element">
                    <div >
                        <h1>{coutry.name}</h1>
                         <h2><span>Native Name: </span>{coutry?.nativeName && Object.values(coutry?.nativeName).map(nN=>nN.official).join(' ,')} </h2>  
                        <h2><span>Population:</span> {coutry.population}</h2>
                        <h2><span>Region:</span> {coutry.region}</h2>
                        <h2><span>Sub Region:</span> {coutry.subRegion}</h2>
                        <h2><span>Capital:</span> {coutry.capital}</h2>
                        <div className="bottom-element">
                             <div className="bottom"><h2><span>Border Coutries:</span> </h2>{coutry.borderCoutries && Object.values(coutry.borderCoutries).map((bordercoutry,index)=>{return(<div key={index} className="border">{bordercoutry}</div>)})}</div> 
                        </div>
                    </div>
                    <div>
                        <h2><span>Top Level Domain:</span> {coutry.tld}</h2>
                        <h2><span>Currencies:</span>  {coutry?.currencies && Object.values(coutry.currencies).map(currency=>currency.name).join(', ')}</h2>
                        <h2><span>Languages:</span> {coutry?.languages && Object.values(coutry.languages).map(language=>language).join(', ')} </h2>
                    </div>
                </div>

            </div>

        </>
    )
}