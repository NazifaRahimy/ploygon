import { useState } from "react";

const Home = () => {
    const handleClick =()=>{
        alert('sorry you came late ticket is finish');
    }
    return ( 
        <div name='home' style={{ backgroundImage: "url('assets/image/homeb1.png')"}} className="w-full bg-no-repeat bg-cover h-[770px] bg-[rgb(9, 2, 18)] xl:h-[730px] relative flex flex-col lg:flex-row ">
            <div className="w-full h-full block mx-auto relative text-white p-4 ">
                <h1 className=" text-center black text-[23px] relative font-bold  sm:text-[30px]  md:text-[35px] lg:inline-block lg:text-[45px] xl:text-[55px] mt-[220px] lg:mt-[260px] "><img className="inline w-[100px] xl:w-[150px]" src="assets/lagos/Vector.PNG" alt="verctor" />Stop Hazara Genocide
                <br/>Twitte alot <img className="inline w-[100px] xl:w-[150px]" src="assets/lagos/Vector.PNG" alt="verctor" /></h1>
                <h2 className=" mt-4 text-violet-300 text-center sm:text-[20px] lg:text-2xl lg:text-left lg:ml-[15%] lg:mt-8 xl:text-[22px]">Stop Hazara Genocide is agloble objection <br />which started by Hazara people around the world...</h2>
                <button onClick={handleClick}
                className="group bg-violet-500 hover:bg-violet-600 outline-none ml-[35%] rounded-lg w-[150px] h-[50px] mt-10  relative  duration-300 sm:w-[170px] sm:ml-[36%] md:ml-[40%] lg:ml-[19%]  "><span className='text-md after:content-["\00bb"] after:text-[24px] after:mt-[-7px] after:absolute after:duration-300 after:ml-6 group-hover:after:ml-2 after:opacity-0 duration-300  group-hover:after:opacity-100 group-hover:pr-10 '>Get Tickets</span></button>
               
            </div>
            <div className=" relative mx-auto lg:mx-0 lg:mr-[5%] xl:mr-[7%]">
                <img src="assets/lagos/lago.png" alt="logo" className="w-[280px] h-[280px] mt-[50px] animate-bounce lg:w-[400px] lg:h-[400px]  lg:mt-[300px] 2xl:w-[450px] 2xl:h-[450px] "/>
            </div> 

        </div>
     );
}
 
export default Home;