import React from 'react'
import Image from 'next/image'
export default function SwiftGPI({isImageFirst}: {
    isImageFirst: boolean,
}){
  return (
          <div id='swift-gpi' className="my-20 flex flex-col md:flex-row justify-center items-center text-center ">
                {isImageFirst &&
                <div
                    className="relative w-full md:w-5/12 flex flex-col justify-center items-center gap-16 md:gap-24">
                    <Image src='/images/carousel/Swift.png'
                        width="400" height="400"
                        className="rounded-xl"
                        alt="Supalaunch"
                    ></Image>
                </div>}

            <div className="w-full md:w-7/12 md:mr-8">
                <h1 className="md:text-4xl font-bold">Swift GPI</h1>
                <p className="md:text-xl py-6">
                    Swift GPI ensures that international payments meet the industry’s needs for speed, traceability and transparency. It allows banks to provide their customers with a transformed payments experience, enabled through easy to use and simple to set up digital tools.
                </p>
            </div>

            {!isImageFirst &&
                <div
                    className="relative w-full md:w-5/12 flex flex-col justify-center items-center gap-16 md:gap-24">
                    <Image src='/images/carousel/Swift.png'
                        width="400" height="400"
                        className="rounded-xl"
                        alt="Supalaunch"
                    ></Image>
                </div>}

            </div>
    
  )
}

