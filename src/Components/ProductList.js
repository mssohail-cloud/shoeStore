import React from 'react'
import { Outlet } from 'react-router'

function ProductList() {
    return (
        <div>
            <h2>New Launch</h2>
            <Outlet />
        </div>
    )
}


export default ProductList
