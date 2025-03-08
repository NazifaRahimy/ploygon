
const Contact = () => {
    return (
      <>
        <div name='contact' className="w-full  flex  flex-col lg:flex-row  bg-[#090218] relative">
            <div className=" w-full lg:w-1/2 h-auto mt-[100px]  bg-[#090218]">
                 <h1 className="ml-[25%]  text-violet-200 text-4xl font-bold lg:ml-[23%] lg:text-5xl">contact us</h1>
                 <p className="text-violet-400 text-lg ml-[20%] mt-[5%] md:text-xl">Fill out the form and our
                  <br />team will get back to you within 24 hours</p>
                  <div className='mt-[30px] ml-[20%]'>
                    <p className='text-violet-400 text-lg'><img src='assets/lagos/twitter.png' alt="twitter" className='inline'/> mkarimi1372</p>
                    <p className='text-violet-400'><img src='assets/lagos/mail.png' alt="mail" className=' inline mr-1'/> azad_afghanistan@gmail.com</p>
                    <p className='text-violet-400'><img src='assets/lagos/mape2.png' alt="mape" className=' inline mr-1'/> kabul, kabul, shahid mazari rood</p>
                  </div>
                  <div className='mt-[20%] flex space-x-3 ml-[25%]'>
                    <img src='assets/lagos/facebook2.png' alt="facebook" className='obgect-cover duration-300 hover:scale-110  cursor-pointer'/>
                    <img src='assets/lagos/twitter2.png' alt="twitter2"className='obgect-cover duration-300 hover:scale-110 cursor-pointer' />
                    <img src='assets/lagos/linkin.png' alt="linkin" className='obgect-cover duration-300 hover:scale-110 cursor-pointer'/>
                    <img src='assets/lagos/inista.png' alt="inista"className='obgect-cover duration-300 hover:scale-110 cursor-pointer' />
                  </div>
            </div>
            <div className="w-full   h-auto lg:w-1/2  mt-[100px] bg-[#090218] relative ">
              <form action="https://getform.io/f/bwnnoyra" method='POST' className='flex flex-col items-center box-border w-[80%]   space-y-3 mx-auto ' >
                 <input type="text" name='name' placeholder='full name' className='w-[90%] lg:w-full h-[60px] rounded-md bg-[#534671]  pl-3 box-border text-xl opacity-15 text-white' />
                 <input type="text" name='email' placeholder=' your email addres' className='w-[90%] lg:w-full h-[60px] rounded-md bg-[#534671] opacity-15 pl-3 box-border text-xl  text-white' />
                 <input type="text" name='subject' placeholder=' subject' className='w-[90%] lg:w-full h-[60px] rounded-md bg-[#534671] opacity-15  pl-3 box-border text-xl  text-white' />
                 <textarea name="massege" placeholder=' your massege' 
                 className=' w-[90%] lg:w-full h-[150px] rounded-md bg-[#534671]  text-white opacity-15 pl-3 box-border text-xl' >
                 </textarea>
                 <button className='text-center w-[90%] lg:w-[100%] h-[60px] text-white bg-violet-500 hover:bg-violet-600 duration-300 rounded-lg py-3 text-xl font-bold hover:text-2xl'>sent massege </button>
              </form>
            </div>
           
        </div>
        
      </>
      );
}
 
export default Contact;