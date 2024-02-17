import {useState, useEffect} from 'react';
const Signup = () => {
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [ image, setImage] = useState(null)
    const [info, setInfo] = useState([])

    const nameFunc = (e) => {
        setImage(e.target.value)
    }
    const userFunc = (e) => {
        setUserName(e.target.value)
    }
    const passwordFunc = (e) => {
        setPassword(e.target.value)
    }
    const confirmFunc = (e) => {
        setConfirm(e.target.value)
    }
    //const nameFunc = (e) => {
     //   setImage(e.target.value)
   // }
    return(
        <div className=' h-screen p-4'>
           <p className='text-center'>FILL IN YOUR DETAILS</p>
           <div className='flex justify-center mt-4'>
           <div className='leading-[50px]'>
            <label>Full Name</label> <br />
            <input type='text' onChange={nameFunc}  className='border-[0.5px] border-slate-500 rounded w-[500px]'/> <br/>
            <label>Profile Picture</label> <br />
            <input type='file' /> <br />
            <label>UserName</label> <br />
            <input type='text' onChange={userFunc}  className='border-[0.5px] border-slate-500 rounded w-[500px]'/> <br />
            <label>Password</label> <br />
            <input type='text' onChange={passwordFunc} className='border-[0.5px] border-slate-500 rounded w-[500px]'/> <br />
            <label>Confirm Password</label> <br />
            <input type='text' onChange={confirmFunc}  className='border-[0.5px] border-slate-500 rounded w-[500px]'/> <br />
            <div className='flex justify-center items-center mt-4'>
            <button className='border-[0.5px] w-[100px] rounded'>Sign Up</button>
            </div>
            
           </div>
           </div>
           
        </div>
    )
}
export default Signup;