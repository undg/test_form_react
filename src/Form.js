import React from 'react';
import {
    MenuItem,
    TextField,
    Button,
} from '@material-ui/core/';

import {FormContext} from './context/form.js'
import {useStyles} from './style.js'

function Form(props) {
    const classes = useStyles();

    const [display, setDisplay] = React.useState([
        ...props.display,
    ]);

    const handleChange = idx => event => {
        const value = [ ...display ]
        value[idx].value = event.target.value
        setDisplay(value);
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
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
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
                        <Button
                            key={el.field}
                            variant="contained"
                            className={classes.button}
                        >
                            {el.name}
                        </Button>
                    )
                ]
            )}
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
            >
                SEND
            </Button>
        </form>
    );
}

const MainForm   = () => <Form display={FormContext.display} />
const OneToMany  = () => <Form display={FormContext.display2} />
const ManyToMany = () => <Form display={FormContext.display3} />

export default function init() {
    return (
        <React.Fragment>
            <MainForm  key="main" />
            <OneToMany key="modal1" />
            <ManyToMany key="modal2" />
        </React.Fragment>
    )
}
