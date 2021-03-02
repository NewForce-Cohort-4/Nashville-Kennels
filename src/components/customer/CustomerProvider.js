import React, {useState, useEffect} from "react"

export const CustomerContext = React.createContext()

export const CustomerProvider = props => {
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
        .then(res => res.json())
        .then((data) => {
            setCustomers(data)
        })
    }

    return <CustomerContext.Provider value ={{customers, getCustomers}}>
        {props.children}
    </CustomerContext.Provider>
}