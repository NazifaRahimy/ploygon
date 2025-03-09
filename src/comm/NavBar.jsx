import { useState } from "react";
import { FaBars , FaTimes} from "react-icons/fa";
import {Link} from 'react-scroll'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id:2,
            link: 'event'
        },{
            id: 3,
            link: 'speakers'
        },
        {
            id:4,
            link: 'sponsors'
        },
        {
            id:5,
            link: 'organizer'
        },
        {
            id:6,
            link: 'contact'
        }

    ]
    return ( 
        <>
        <div className="  w-[100%] h-[90px] flex items-center  text-white justify-between bg-[#020918]  px-4 box-border sticky top-0 z-50 ">
            <div>
               <img src="assets/lagos/longlago.PNG" alt="longlago"  className=' w-[160px] '  />
            </div>
            <ul className={`flex flex-col w-[40%] items-start space-y-4 pb-2 md:w-[30%]  justify-center px-5 box-border absolute top-[90px] bg-[#020918] lg:space-x-9 lg:flex-row lg:top-7 lg:right-[35%] lg:items-center lg:space-y-0 ${nav ? 'right-0' : 'right-[-40%]'}`}>
                {
                    links.map(({link,id}) =>{
                        return(
                            <li key={id} className="text-xl capitalize cursor-pointer duration-[0.6s] hover:scale-110  hover:text-violet-600"> <Link to={link} smooth duration={500}>{link}</Link></li>
                        )
                    })
                }              
            </ul>
              <div className="cursor-pointer lg:hidden" onClick={()=> setNav(!nav)}>
              {
                nav ? <FaTimes size={35} className="close"/> : <FaBars size={35}/>
              }
              </div>
            <div className="items-center pr-14 space-x-3 hidden xl:flex  ">
               <img src="assets/lagos/facebook2.png" alt="facebook2"className="duration-[0.5s] hover:scale-110 cursor-pointer" />
               <img src="assets/lagos/inista.png" alt="inista" className="duration-[0.5s] hover:scale-110 cursor-pointer"/>
               <img src="assets/lagos/twitter2.png" alt="twitter2" className="duration-[0.5s] hover:scale-110 cursor-pointer"/>
               <img src="assets/lagos/linkin.png" alt="linkin" className="duration-[0.5s] hover:scale-110 cursor-pointer"/>
            </div>
        </div>
        </>
     );
}
 
export default Navbar;