import { useEffect, useState } from "react"
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { Button } from "@mui/material";
import { Snackbar } from "@mui/material";



export default function Carlist() {

    //state variables
    const [cars, setCars] = useState([]);
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('');

    const deleteCar = (params) => {
        console.log("params.data._links.car.href = " + params.data._links.car.href);

        if (window.confirm('Are you sure')) {
            fetch(params.data._links.car.href, { method: 'DELETE' })
                .then(response => {
                    if (response.ok) {
                        setMsg('Car is deleted successfully!');
                        setOpen(true);
                        getCars();
                    } else {
                        alert('Something went wrong in deletion: ' + response.status);
                    }

                })
                .catch(err => console.error(err));
        }
    }

    //columns
    const columns = [
        { field: 'brand' },
        { field: 'model' },
        { field: 'color' },
        { field: 'fuel' },
        { field: 'year' },
        { field: 'price' },
        {
            cellRenderer: params =>
                <Button size="small" color="error" onClick={() => deleteCar(params)}>
                    Delete
                </Button>
        }
    ]

    useEffect(() => getCars(), []);

    const RESTURL = 'http://carrestapi.herokuapp.com/cars';

    const getCars = () => {
        fetch(RESTURL)
            .then(response => response.json())
            .then(responseData => {
                setCars(responseData._embedded.cars)
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <div className="ag-theme-material"
                style={{ height: '700px', widt: '95%', margin: 'auto' }}>
                <AgGridReact
                    rowData={cars}
                    columnDefs={columns}
                    pagination={true}
                    paginationPageSize={10}>

                </AgGridReact>
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={() => setOpen(false)}
                    message={msg} />
            </div>
        </div>
    )
}