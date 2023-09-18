import "./Home.css"

const Home = () => {
  return (
    <div className="w-full h-full " >
    {/* <div class="bg-fixed relative -z-20  mx-auto w-10/12 " style="background-image: url(./snacks.jpg)"></div> */}
    {/* <div  className="relative bg-fixed   ">
      <img src="./snacks.jpg" alt="img" className="-z-20  mx-auto w-10/12 "/>
    </div> */}
    <div className="parallax" ></div>

      <div className='absolute top-2 w-full  uppercase  text-6xl text-black font-semibold    z-10 '>
        <p className="text-center">Jalaram</p>
      </div>
      
      <ul className='absolute top-24 w-full   z-50 text-black '>
          <ul className="flex justify-evenly  text-lg max-w-2xl mx-auto ">
            <li className="mx-auto">Home</li>
            <li className="mx-auto">About</li>
            <li className="mx-auto">Menu</li>
            <li className="mx-auto">Contact</li>
          </ul>
      </ul>

    
    
    <div className="absolute left-36 top-80 flex flex-wrap translate-y-2/4">
        <p className="text-5xl text-white">
        Thinking of a Quick Break?
        <br/>
        Everywhere, the Best Snacks Around</p>
    </div>
</div>

  )
}

export default Home;