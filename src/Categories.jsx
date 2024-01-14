import { useEffect, useState } from "react"
import "./categories.css"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Categories() {
    const [categories, setCategories] = useState({})

    useEffect(() => {
        axios.get('https://jbh-mockserver.onrender.com/categories')
            .then(res => setCategories(res.data))
    }, [])
    return (
        <div className="cards">
            {Object.keys(categories).map(c => (
                <Link to={"/categories/" + c}>
                    <div className="card card-img" style={{ backgroundImage: `url(${categories[c]})` }}>
                        <span className="card__title">{c}</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}
