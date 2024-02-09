import React from 'react'
import Image from 'next/image'

export default function  Financialcrime({isImageFirst}: {
    isImageFirst: boolean,
}){
  return (

                <div id='financialcrime' className="my-20 flex flex-col md:flex-row justify-center items-center text-center md:text-left">
                            {isImageFirst &&
                <div
                    className="relative w-full md:w-5/12 flex flex-col justify-center items-center gap-16 md:gap-24">
                    <Image src='/images/carousel/finCrime1.png'
                        width="400" height="400"
                        className="rounded-xl"
                        alt="Supalaunch"
                    ></Image>
                </div>}

            <div className="w-full md:flex-rows">
                <h1 className="md:text-4xl font-bold">Financial Crime Compliance</h1>
                <p className="md:text-xl py-6 text-justify">
                    In today’s world of evolving Financial Crime Compliance expectations, knowing exactly who you are doing business with has never 
                    been more important. At Afrikconsult, we advise you on the best solution available in the market, which will deliver a  more 
                    complete view of your consumer and business risk that enables you to quickly focus resources on relevant financial crime risk. 
                     Therefore, Improve investigation precision and achieve more effective, end-to-end global financial crime compliance.
                </p>
            </div>

            {!isImageFirst &&
                <div
                    className="relative w-full md:w-5/12 flex flex-col justify-center items-center gap-16 md:gap-24">
                    <Image src='/images/carousel/finCrime1.png'
                        width="400" height="400"
                        className="rounded-xl"
                        alt="Supalaunch"
                    ></Image>
                </div>}

            </div>    
  )
}

