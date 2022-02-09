import { ACCESS_TOKEN } from 'appconstants'

export const header = {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
        'Content-Type': 'application/json'
    }
}

export const getUser = JSON.parse(localStorage.getItem("user"))


