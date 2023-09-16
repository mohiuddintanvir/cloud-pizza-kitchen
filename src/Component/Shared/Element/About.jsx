import aboutImage from "../../../Asset/Images/about-image.png"


export const About = () => {
    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h1 className="text-2xl font-medium">About Us</h1>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deleniti enim debitis corporis esse officiis aspernatur odio voluptatem, quibusdam beatae tenetur voluptate, perferendis, animi praesentium amet quod illo dolor omnis!F
                    </p>
                </div>
<div className="flex items-center justify-center">
    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover"/>
</div>
            </div>

        </div>
    )
}




