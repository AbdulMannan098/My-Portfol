import React, { useState } from 'react'
import vg from '../assets/images/vg.png'
import {toast} from 'react-hot-toast'
import {motion} from 'framer-motion'
import { addDoc,collection } from 'firebase/firestore'
import { db } from '../firebase'
const Contact = () => {
    const animations={
        form:{
            initial:{
                x:"-100%",
                opacity:0,
            },
            whileInView:{
                x:0,
                opacity:1
            }
        },
        button:{
            initial:{
                y:"-100%",
                opacity:0, 
            },
            whileInView:{
                y:0,
                opacity:1
            },
            transition:{
                delay:0.5,
            }
        }
    }
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")
    const [disableBtn,setDisableBtn]=useState(false)

    const submitHandler=async(e)=>{
        e.preventDefault();
        setDisableBtn(true)
        // console.log(name,email,message);
        try {
        await addDoc(collection(db,"contacts"),{
            name,
            email,
            message,
        })
        toast.success("Message has been sent");
        setDisableBtn(false)
        setName("");
        setEmail("");
        setMessage("");
    } catch (error) {
            toast.error("Error")
            console.log("Error in Sending message", error);
            setDisableBtn(false)
            setName("");
            setEmail("");
            setMessage("");
        }
    }
  return (
    <div id='contact'>
    <section>
        <motion.form {...animations.form} onSubmit={submitHandler}>
            <h2>Contact Me</h2>

            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Your Name' required/>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Your Email' required/>
            <input type='text' value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Your Message' required/>
            <motion.button className={disableBtn ? "disableBtn" : ""} disabled={disableBtn} {...animations.button} type='submit' onSubmit={submitHandler}>Send</motion.button>
        </motion.form>
    </section>
    <aside>
        <img src={vg} alt='Graphics'/>
    </aside>
    </div>
  )
}

export default Contact