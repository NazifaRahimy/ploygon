
const Speaker = () => {
    const images =[
        {
            id:1,
            src: 'assets/image/sp1.PNG',
        }
        ,{
            id:2,
            src: 'assets/image/sp2.PNG',
        }
        ,{
          id: 3,
          src: 'assets/image/sp3.png'
        },
        {
            id: 4,
            src:'assets/image/sp5.png'
        },{
            id:5,
            src: 'assets/image/sp4.png',
        }
        ,{
            id: 6,
            src:'assets/image/sp5.png'
        } ,
        {
            id: 7,
            src: 'assets/image/sp2.PNG'
        },{
            id:8,
            src: 'assets/image/sp7.png'
        },
        {
            id:9,
            src: 'assets/image/sp8.png'
        },{
            id: 10,
            src: 'assets/image/sp9.png'
        },
        {
            id:11,
            src: 'assets/image/sp6.png'
        },
        {
            id: 12,
            src: 'assets/image/sp3.png'
        }
    ]
    return (
        <div name='speakers' className="w-full h-auto bg-[#090218] box-border px-10">
             <h1 className="text-center text-white uppercase text-4xl font-bold lg:text-6xl mt-[90px]">meet the speakers</h1>
            <div className="xl:w-[90%] 2xl:w-full mx-auto mb-10 grid grid-cols-1  mt-20 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-10">
             {
                images.map(({id,src})=>(
                    <div key={id} className='w-[300px] mx-auto lg:w-[290px] xl:w-[300px]   h-[320px] shadow-md shadow-purple-200 duration-300 hover:scale-110 cursor-pointer '>
                    <img src={src} className='w-full h-[240px] object-cover' alt="" />
                    <div style={{backgroundColor: 'rgba(21, 15, 30, 1)'}} className='w-full h-[90px]   box-border py-1   px-3 text-white rounded-b-md'>
                        <h4 >Anwer basubut</h4>
                        <p  className='mb-1'>Sarshar & Shavqi</p>
                        <img src='assets/lagos/facebook.png' alt="facebook" className='inline  cursor-pointer duration-300 hover:scale-110 ' />
                        <img src='assets/lagos/in.png' alt="in" className='inline pl-3 cursor-pointer duration-300 hover:scale-110' />
                        <img src='assets/lagos/twitter.png' alt="twitter" className='inline cursor-pointer pl-3 duration-300 hover:scale-110' />
                    </div>
                </div>
                ))
             }
            </div>
        </div>
      );
}
 
export default Speaker;