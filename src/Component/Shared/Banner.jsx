import Button from "./Element/Button"

export const Banner =()=>{
    return(
        <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center justify-between">
    <div className="banner-description w-full md:w-1/2 p-3">
<h1 className="mb-6 text-4xl text-red-600 py-2">
Food Ordering Made Easy 
</h1>
<p className="font-semibold text-lg text-red-600 py-2">
Get Start Today!
</p>
<div className="btn-container">
    <button className="text-white bg-yellow-500 px-5 py-2 rounded-md">Order <span className="text-black">Now</span> </button>
    <a href="/menu" className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3">
        See Menu
    </a>
</div>
    </div>
    <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
<img src={require("../../Asset/Images/pizza_banner.png")} alt="banner" className="max-h-95" />
    </div>

</div>
    )

}