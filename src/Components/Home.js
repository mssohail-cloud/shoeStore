import React from 'react'
import { Link } from '@material-ui/core'
import ProductList from './ProductList'
import { Routes, Route } from 'react-router'

function Home() {
    return (
        <div>
            <Routes>
                <Route path="ProductList" element={<ProductList />} />
            </Routes>
            <h1>Welcome to our store, See our collection in products section</h1>
        </div>
    )
}

export default Home
