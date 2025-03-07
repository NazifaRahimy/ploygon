
const Sponsor = () => {
    return (
        <div name='sponsors' className=" bg-[#090218] relative w-full h-auto  ">
            <h1 className="text-white text-3xl uppercase text-center lg:text-5xl font-bold mt-[100px]">Our Amazing Sponsors</h1>
        
            <div className="w-[80%] h-auto border border-purple-300 rounded-md mx-auto mt-20 box-border  flex items-center justify-center flex-wrap">
               <div><img src='assets/lagos/binance.png' alt="binance" className='mx-6 mt-[50px] '/></div>
               <div><img src='assets/lagos/google.png' alt="google" className='mx-6 mt-[50px] ' /></div>
               <div><img src='assets/lagos/amazon.png' alt="amazon" className='mx-6 mt-[50px] '/></div>
               <div><img src='assets/lagos/meta.png' alt="meta" className='mx-6 mt-[50px] '/></div>
               <div><img src='assets/lagos/meta.png' alt="meta" className='mx-6 my-[50px] '/></div>
               <div><img src='assets/lagos/google.png' alt="google" className='mx-6 my-[50px] ' /></div>
               <div><img src='assets/lagos/binance.png' alt="binance" className='mx-6 my-[50px] '/></div>
            </div>
        </div> 
      );
}
 
export default Sponsor;