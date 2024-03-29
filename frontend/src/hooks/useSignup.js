import {useState} from 'react'
import toast from 'react-hot-toast'

const useSignup = () => {
    const [loading, setLoading] = useState(false)

    const signup = async({fullName, username, password, confirmPassword, gender}) => {
        const success = handleInputErrors({fullName,username,password,confirmPassword,gender})
        if(!success) return;

        setLoading(true)
        try{
            // '/api' = http://localhost:5000
            const res = await fetch("/api/auth/signup",{
            // const res = await fetch("http://localhost:5000/api/auth/signup",{
                method : "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({fullName, username, password, confirmPassword, gender})
            })

            const data = await res.json();
            console.log(data)

        } catch (error){
            toast.error(error.message)
        } finally{
            setLoading(false)
        }


    }
    return { loading,signup};
}


export default useSignup

function handleInputErrors({fullName, username, password, confirmPassword, gender}  ) { 
    if (!fullName || !username || !password || !gender) 
    {
        toast.error("Please fill in all fields.")
        return false 
    }
    if (password !== confirmPassword)
    {
        toast.error("Password do not match")
        return false
    }

    if (password.length < 6) {
        toast.error("min length = 6")
        return false
    }

    return true;
}

// export { handleInputErrors };














