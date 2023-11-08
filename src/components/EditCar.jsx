import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";

export default function EditCar(props) {

    //states
    const [car, setCar] = useState({ brand: '', model: '' });
    const [open, setOpen] = useState(false); //is dialog visible, false=not visible

    // functions
    const handleClose = (event, reason) => {
        if (reason != 'backdropClick') {
            setOpen(false);
        }
    }

    const handleInputChange = (event) => {
        setCar({ ...car, [event.target.name]: event.target.value });
    }

    const handleSave = () => {
        props.addCar(car); //todo
        setOpen(false);
    }


    //return 
    // addbutton
    // dialog 
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}>
                <DialogTitle>Edit Car</DialogTitle>
                <DialogContent>
                    <TextField
                        label='Brand'
                        name="brand"
                        value={car.brand}
                        onChange={handleInputChange}>

                    </TextField>
                    <TextField
                        label='Model'
                        name="model"
                        value={car.model}
                        onChange={handleInputChange}>

                    </TextField>
                    <TextField
                        label='Color'
                        name="color"
                        value={car.color}
                        onChange={handleInputChange}>

                    </TextField>
                    <TextField
                        label='Fuel'
                        name="fuel"
                        value={car.fuel}
                        onChange={handleInputChange}>

                    </TextField>
                    <TextField
                        label='Year'
                        name="year"
                        value={car.year}
                        onChange={handleInputChange}>

                    </TextField>
                    <TextField
                        label='Price'
                        name="price"
                        value={car.price}
                        onChange={handleInputChange}>

                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleSave}>
                        Edit
                    </Button>
                    <Button
                        onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )

}


//olli tää on se mitä mä oon aina halunnu