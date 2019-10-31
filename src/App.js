import React from 'react'

import Form from './Form'
import {FormContext} from './context/form.js'


export default function App() {
    return <Form display={FormContext.display} />
}

