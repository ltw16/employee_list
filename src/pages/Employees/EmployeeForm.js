import { FormControl, FormControlLabel, FormLabel, Grid, Radio, TextField } from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import Input from '../../components/controls/Input';
import RadioGroup from '../../components/controls/RadioGroup';
import Select from '../../components/controls/Select';
import { useForm, Form } from '../../components/useForm';
import * as employeeService from '../../services/employeeService';
 

const genderItems = [
    {id: 'male', title:'Male'},
    {id: 'female', title:'Female'},
    {id: 'other', title:'Other'},
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

export default function EmployeeForm() {

    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFValues);


    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Input 
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                    <Input 
                        label='Email'
                        name='email'
                        value={values.email}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <RadioGroup 
                        name='gender'    
                        label='Gender'
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                    />
                </Grid>
            </Grid>
        </Form>
    )
}
