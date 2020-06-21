import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const ProductList = () => {

    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [price, setPrice] = useState(0)
    const [rating, setRating] = useState("")
    const [warranty_years, setWarrantyYears] = useState(0)
    const [available, setAvailable] = useState(false)

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });

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

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    

    const classes = useStyles();


    return (
        <div className="App FadeIn">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}


export default ProductList;
