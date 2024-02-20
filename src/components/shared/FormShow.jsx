import React, { useContext } from 'react'
import FormItem from '../FormItem'
import  PropTypes  from 'prop-types'
import DataContext from '../../Context/DataContext'
function FormShow({handleForm1}) {
    const { Data }=useContext(DataContext)
    return(
        <div>
           { Data.map((item) => (
        <FormItem
            item={item} />))
           }</div>
    )}
export default FormShow
