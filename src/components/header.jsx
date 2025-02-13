import { useNavigate } from "react-router-dom"
import Login from "./Login"
export default function Header(){
    const navigate = useNavigate()
    return(

<>
        
        <div className='bg-sky-700 w-full h-20 justify-items-center p-1 rounded-b-md'>
<h1 className=' font-bold text-2xl text-amber-50 p-5'>travel Buddy</h1>
<div className='relative bottom-0 w-xl flex bg-green-500 rounded-md justify-between text-amber-50 p-1 '>
<div className='text-xl'>HOME</div>
<div onClick={()=>navigate("/member")} className='text-xl'>MEMBERS</div>
<div className='text-xl'>ABOUT</div>
</div>
</div>
</>
)
}