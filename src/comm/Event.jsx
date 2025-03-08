

const Event = () => {
    return ( 
        <div name='event' className="bg-[#090218] w-full mb-8  relative">
            <h1 className="text-white text-center text-5xl font-bold mt-[170px] uppercase">Evnet details</h1>
            <div className="w-full relative bg-[#090218] mt-20 justify-center items-center h-auto flex flex-col md:flex-row ">
                <div className="w-[80%] border box-border mb-10  text-center border-purple-300 rounded-md  h-[200px] md:mr-6 md:ml-[45px] md:mb-0 ">
                    <img src='assets/lagos/calender.png' alt="calender" 
                    className='mt-9 mx-auto duration-300 hover:scale-110 cursor-pointer' />
                   <h2 className="text-3xl my-4 font-bold text-white ">15th June, 2022</h2>
                   <p className="text-white text-xl f">10:00 AM - 04:00 PM</p>
                </div>
                <div className="w-[80%] border text-white text-center border-purple-300 rounded-md  h-[200px] md:ml-6  md:mr-[45px]">
                     <img src='assets/lagos/point.pnj.png' alt="point"
                     className='mt-9 mx-auto duration-300 hover:scale-110 cursor-pointer' />
                     <h2 className='my-4 text-3xl font-bold'>Zone Tech Park</h2>
                     <p className='text-md xl:px-6'>Plot 9 Gbagada Industrial Scheme, Beside UPS,
                     <br /> Gbagada Expressway</p>
                </div>
            </div>
        </div>
     );
}
 
export default Event;