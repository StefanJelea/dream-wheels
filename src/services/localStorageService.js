import React from 'react'


export default function localStorageIsDefined() {
    return typeof window !== 'undefined' && window.localStorage

}


export function localStorageSet(key, value) {
    if (localStorageIsDefined()) {
        window.localStorage.setItem(key, value)
    }
}

export function localStorageGet(key) {
    if (localStorageIsDefined()) {
        return window.localStorage.getItem(key)
    }
    return null
}

