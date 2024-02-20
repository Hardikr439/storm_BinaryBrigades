import React, { useContext } from 'react'
import FormItem from '../FormItem'
import  PropTypes  from 'prop-types'
import DataContext from '../../Context/DataContext'
function FormShow({handleForm1}) {
    const { Data } = useContext(DataContext)
    return(
        <>
           { Data.map((item) => (
        <FormItem
            key={item.heading}
            item={item} />))
           }</>
    )}
export default FormShow

