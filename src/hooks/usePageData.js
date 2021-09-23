import * as React from "react"
import {useEffect, useState} from "react";
import axios from "axios";

export default function UsePageData(){

    const [data, setData] = useState({})
    const [cars, setCars] = useState([])

    const [language, setLanguage] = useState('en')







    useEffect(() => {
        axios.get(`/axios-json-data/${language}/index.json`).then(response => {
            setData(response.data)
        })
        axios.get(`/axios-json-data/${language}/cars.json`).then(response => {
            setCars(response.data)
        })
    }, [language])



    return {data, cars, setLanguage}
}
