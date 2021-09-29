import * as React from "react"
import {useEffect, useState} from "react";
import axios from "axios";
import localStorageIsDefined, {localStorageGet} from "../services/localStorageService";
import localStorageService from "../services/localStorageService";


export default function UsePageData() {

    // let defaultLanguage = 'en'
    // if(localStorageIsDefined()){
    //     defaultLanguage = window.localStorage.getItem('language') || defaultLanguage
    // }
    //
    // const [language, setLanguage] = useState(defaultLanguage)



    const [language, setLanguage] = useState(localStorageGet('language') || 'en')

    const [cars, setCars] = useState([])


    const [dataRo, setDataRo] = useState({})
    const [dataEn, setDataEn] = useState({})


    useEffect(() => {
        if (Object.keys(language === 'en' ? dataEn : dataRo).length === 0) {
            axios.get(`/axios-json-data/${language}/index.json`).then(response => {
                if (language === 'en') {
                    setDataEn(response.data)
                } else {
                    setDataRo(response.data)
                }
            })
        }
        axios.get(`/axios-json-data/cars.json`).then(response => {
            setCars(response.data)
        })


    }, [language])


    return {data: language === "en" ? dataEn : dataRo, cars, setLanguage}
}
