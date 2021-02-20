import React from 'react'
import PageHeader from '../../components/PageHeader'
import EmployeeForm from './EmployeeForm'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Employees() {

    const classes = useStyle();

    return (
        <>
            <PageHeader 
            title="New Employee"
            subTitle="Form design with validation"
            icon={<PeopleOutlineTwoToneIcon fontSize='large' />}
            /> 
            <Paper className={classes.pageContent}>
                <EmployeeForm />
            </Paper>
        </>
        
    )
}
