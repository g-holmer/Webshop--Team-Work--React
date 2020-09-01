import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'

export default function ProductItemInfo() {
    const { renderProductState } = useContext(ProductContext)
    return (
        <div>
            {renderProductState}
        </div>
    )
}
