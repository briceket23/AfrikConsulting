import Link from "next/link";
import Image from "next/image";


 function Hero() {
    return (
        <div
            className="my-20 flex flex-col md:flex-row justify-center items-center text-center md:text-left">
            <div className="w-full md:w-7/12 md:mr-8">
                <h1 className="md:text-5xl font-bold">SWIFT Payment  <span
                    className='md:text-primary'>Integration </span> Simplified</h1>
                <p className="md:text-xl py-6 text-justify">
                    Afrikconsult is here to guide you on making the right decision train your staff and help you implement Swift solutions which will allow you to transact securely and reliably, comply with regulation, improve operational efficiency and innovate at scale to serve your customers better. Installing and maintaining Swift products requires specific skills which may not be available within your organisation. In such cases, our Implementation Services team can provide onsite installation and training services for the below solutions.
                </p>
                <Link
                    href='/'
                    className="btn btn-primary"
                >
                    Call to action
                </Link>
            </div>
            <div
                className="relative w-full md:w-5/12 flex flex-col justify-start items-center gap-16 md:gap-24">
                <Image src='/images/hero-img.png'
                       width="400" height="400"
                       className="rounded-xl"
                       alt="Supalaunch"
                ></Image>
            </div>
        </div>

    )
}

export default Hero;