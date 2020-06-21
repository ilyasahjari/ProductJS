import React, { useState } from "react"

const ProductAdd =()=>{
    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [price, setPrice] = useState(0)
    const [rating, setRating] = useState("")
    const [warranty_years, setWarrantyYears] = useState(0)
    const [available, setAvailable] = useState(false)

    const handleIdChange = (e) => {
        const id = e.target.value
        setId(id)
    }

    const handleNameChange = (e) => {
        const name = e.target.value;
        setName(name)
    }

    const handleTypeChange = (e) => {
        const type = e.target.value;
        setType(type)
    }

    const handleRatingChange = (e) => {
        const rating = e.target.value;
        setRating(rating)
    }

    const handlePriceChange = (e) => {
        const price = e.target.value;
        setPrice(price)
    }

    const handleWarranty = (e) => {
        const warranty = e.target.value;
        setWarrantyYears(warranty)
    }

    const handleAvailable = (e) => {
        const available = e.target.value;
        setAvailable(available)
    }

    return (
        <div>
        </div>
    )
}