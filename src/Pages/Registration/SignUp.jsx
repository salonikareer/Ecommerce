import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import MyContext from '../../Context/Data/myContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../Firebase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';

function Signup() {
   const[name,setName]=useState("");
   const[email,setEmail]=useState("");
   const[pwd,setPwd]=useState("");
const context = useContext(MyContext);
const{loading,setLoading}=context

const signup = async() =>{
    setLoading(true);
    if(name === "" || email === "" || pwd === "" ){
    return toast.error("All fields are required");}
// const handleChange=(e)=>{
//     setName(e.target.value);

// console.log(name, email,pwd)

try{
          const users= await createUserWithEmailAndPassword(auth,email,pwd);
          console.log(users)
          const user = {
            name: name,
            uid: users.user.uid,
            email: users.user.email,
            time:Timestamp.now()
          }

          const useRef= collection(fireDB,"user");
          await addDoc(useRef,user);
          toast.success("Signup Succesfully")
          setName("");
          setEmail("");
          setPwd("");
          setLoading(false)
}
catch(error) { 
    console.error(error) 
    setLoading(false);
}
}
    return (
        <div className=' flex justify-center bg-sky-200 items-center h-screen'>
             {loading && <Loader/>}
            <div className=' bg-gray-800 px-10 py-10 rounded-xl'>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input type="text"
                    onChange={(e)=> setName(e.target.value)}
                        name='text'
                        value={name}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Name'
                    />
                </div> 
                <div>
                    <input type="email"
                      onChange={(e)=> setEmail(e.target.value)}
                      value={email}
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div> 
                <div>
                    <input
                        type="password"
                        onChange={(e)=> setPwd(e.target.value)}
                        value={pwd}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button 
                    onClick={signup}
                        className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Have an account <Link className=' text-red-500 font-bold ml-2' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Signup;