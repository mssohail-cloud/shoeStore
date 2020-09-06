import React from 'react'
import { Outlet } from 'react-router'

function ProductList() {
    return (
        <>
            <h2>New Launch</h2>
            <Outlet />
        </>
    )
}


export default ProductList
