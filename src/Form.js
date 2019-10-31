import React from 'react';
import {
    MenuItem,
    TextField,
    Button,
    Dialog,
} from '@material-ui/core/';

import {useStyles} from './style.js'

export default function Form(props) {
    const classes = useStyles();

    // handling form data
    const [display, setDisplay] = React.useState([
        ...props.display,
    ]);

    const handleChange = idx => event => {
        const value = [ ...display ]
        value[idx].value = event.target.value
        setDisplay(value);
    };


    // handling modals
    const [open, setOpen] = React.useState(Array(display.length).fill(false));

    const handleClickOpen = (arr, idx) => {
        const open = [ ...arr ]
        open[idx] = true
        setOpen(open);
    };

    const handleClose = (arr, idx) => {
        const open = [ ...arr ]
        open[idx] = false
        setOpen(open);
    };


    return (
        <form className={classes.container} noValidate autoComplete="off">
            { display.map((el, idx) =>
                [
                    (
                        el.type === "text" &&
                        <TextField
                            key={el.field}
                            label={el.name}
                            className={classes.textField}
                            value={el.value}
                            onChange={handleChange(idx)}
                            margin="normal"
                        />
                    ),(
                        el.type === "textarea" &&
                        <TextField
                            key={el.field}
                            multiline
                            label={el.name}
                            className={classes.textAreaField}
                            value={el.value}
                            onChange={handleChange(idx)}
                            margin="normal"
                        />
                    ),(
                        el.type === "select" &&
                        <TextField
                            key={el.field}
                            select
                            label={el.name}
                            className={classes.textField}
                            value={el.value}
                            onChange={handleChange(idx)}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            helperText="Please select your currency"
                            margin="normal"
                        >
                            {el.options.map(option => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    ),(
                        el.type === "date" &&
                        <TextField
                            key={el.field}
                            label="el.name"
                            className={classes.textField}
                            type="date"
                            value={el.value}
                            onChange={handleChange(idx)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    ),(
                        el.type === "button" &&
                        [(
                            <Button
                                key={el.field}
                                variant="contained"
                                className={classes.button}
                                onClick={() => handleClickOpen(open, idx)}
                            >
                                {el.name}
                            </Button>
                        ),(
                            <SimpleDialog
                                key={el.field + "simapleDialog"}
                                idx={idx}
                                open={open[idx]}
                                onClose={() => handleClose(open, idx)}
                                display={el.display}
                            />
                        )]
                    )
                ]
            )}

            <Button
                variant="contained"
                className={classes.button}
            > CANCEL </Button>

            <Button
                variant="contained"
                color="primary"
                className={classes.button}
            > APPROVE </Button>

            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
            > SAVE & APPROVE </Button>
        </form>
    );
}




function SimpleDialog(props) {
    const { onClose, open } = props;

    return (
        <Dialog
            onClose={onClose}
            open={open}
        >
            <Form display={props.display} />
        </Dialog>
    );
}


