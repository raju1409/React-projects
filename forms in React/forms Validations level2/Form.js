import {useForm} from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"

import "./App.css"

export const Form = () => {

    const schema = yup.object().shape({
        fullname: yup.string().required("Your Fullname is Required"),
        age : yup.number().positive().integer().min(18).required("Age must be >18"),
        gmail : yup.string().email().required("Incorrect mail"),
        password : yup.string().min(4).max(8).required(),
        confirmpassword : yup.string().oneOf([yup.ref("password"), null],"Password dint not Match ! ").required("Confirm password required")
    })

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => { 
        console.log(data)
    }
    
    return (
            <form className="formSubmit" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="fullname" {...register("fullname")}></input>
                <p>{errors.fullname?.message}</p>
                <input type="number" placeholder="age" {...register("age")}></input>
                <p>{errors.age?.message}</p>
                <input type="text" placeholder="gmail" {...register("gmail")}></input>
                <p>{errors.gmail?.message}</p>
                <input type="password" placeholder="password" {...register("password")}></input>
                <p>{errors.password?.message}</p>
                <input type="password" placeholder="confirmpassword" {...register("confirmpassword")}></input>
                <p>{errors.confirmpassword?.message}</p>
                <input type="submit"></input>
            </form>
    )
}
