
const Organizer = () => {
    const image =[
        {
            id: 1,
            src: 'assets/image/sp10.png'
        },
        {
            id: 2,
            src: 'assets/image/sp11.png'
        },
        {
            id: 3,
            src: 'assets/image/sp10.png'
        },
        {
            id: 4,
            src: 'assets/image/sp11.png'
        },
        {
            id: 5,
            src: 'assets/image/sp6.png'
        },
        {
            id: 6,
            src: 'assets/image/sp11.png'
        },
        {
            id:7,
            src: 'assets/image/sp10.png'
        },
        {
            id:8,
            src: 'assets/image/sp11.png'
        },
        {
            id:9,
            src : 'assets/image/sp10.png'
        }

    ]
    return (  
        <div name='organizer' className=" w-full h-auto bg-[#090218] mt-20 "> 
            <h1 className="text-white text-center uppercase font-bold text-3xl lg:text-5xl">Meet the Organizers</h1>
            <div className="w-[83%] 2xl:w-[90%] h-auto mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mb-6">
                 {
                    image.map(({id,src}) => (
                        <div key={id} className="w-[300px] h-[320px] mx-auto shadow-md lg:w-[280px] xl:w-[300px] shadow-purple-200 hover:scale-110 duration-300" >
                    <img src={src} alt=""  className='w-full h-[250px] cursor-pointer'/>
                    <div style={{backgroundColor: 'rgba(21, 15, 30, 1)'}} className='w-auto  px-3  h-[80px] rounded-b-md text-white mb-2 '>
                       <h4>Shah kuku Nazdana</h4>
                       <p> Sarshar & Shavqi</p>
                        <img src='assets/lagos/facebook.png' alt="facebook" className='inline duration-300 hover:scale-110 cursor-pointer'/>
                        <img src='assets/lagos/in.png' alt="linkin" className='mx-2 inline duration-300 hover:scale-110 cursor-pointer' />
                        <img src='assets/lagos/twitter.png' alt="twitter"  className='inline duration-300 hover:scale-110 cursor-pointer'/>
                    </div>
                 </div>
                    ))
                 }
                 
            </div>
        </div>
    );
}
 
export default Organizer ;