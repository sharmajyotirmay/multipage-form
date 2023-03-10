import { useState, createContext } from "react";

const FormContext = createContext();

export const FormProvider = ({Children}) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [nickname, setNickName] = useState("")
    
    return (
        <FormContext.Provider
        value = {{
            firstName,
            lastName,
            email,
            userName,
            nickname,
            setFirstName,
            setLastName,
            setEmail,
            setUserName,
            setNickName
        }}
        >
        {Children}
    </FormContext.Provider>
)
}

export default FormContext;