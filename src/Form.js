import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    MenuItem,
    TextField,
    Button,
} from '@material-ui/core/';

import {FormContext} from './context/form.js'


export default function Form() {
    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
        textAreaField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        menu: {
            width: 200,
        },
        button: {
            margin: theme.spacing(1),
            height: 40,
        },
    }));

    const classes = useStyles();

    const [display, setDisplay] = React.useState([
        ...FormContext.display,
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
