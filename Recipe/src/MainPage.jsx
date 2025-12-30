import React, { useState } from 'react'
import { MealCart } from './MealCart';

export const MainPage = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(false); // ✅ loading state

    const handelinput = (e) => {
        setSearch(e.target.value);
    };

    const myFun = async () => {
        setLoading(true); // 🔥 start loading
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json();

        if (jsonData.meals) {
            setData(jsonData.meals);
            setNotFound(false);
        } else {
            setData([]);
            setNotFound(true);
        }
        setLoading(false); // ✅ stop loading
    };

    return (
        <div className="container">
            <h1 className="title">🍽️ Food Recipe Finder</h1>

            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Enter Dish Name..." 
                    onChange={handelinput} 
                />
                <button onClick={myFun}>Search</button>
            </div>

            <div className="meal-list">
                {/* ✅ Loading Spinner */}
                {loading && (
                    <div className="loader">
                        <div className="spinner"></div>
                        <p style={{ color: "white" }}>Loading recipes...</p>
                    </div>
                )}

                {/* ✅ Show Meals / Not Found */}
                {!loading && (
                    notFound ? (
                        <p style={{ textAlign: "center", fontSize: "1.2rem", color: "red" }}>
                            ❌ No items found. Try another dish!
                        </p>
                    ) : (
                        <MealCart detail={data} />
                    )
                )}
            </div>
        </div>
    );
};
