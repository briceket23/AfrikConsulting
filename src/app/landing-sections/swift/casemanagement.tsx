import React from 'react'
import Image from 'next/image'

export default function  CaseManagement({isImageFirst}: {
    isImageFirst: boolean,
}){
  return (

                <div id='swiftcase' className="my-20 flex flex-col md:flex-row justify-center items-center text-center md:text-left">
                            {isImageFirst &&
                <div
                    className="relative w-full md:w-5/12 flex flex-col justify-center items-center gap-16 md:gap-24">
                    <Image src='/images/carousel/market_ania.svg'
                        width="400" height="400"
                        className="rounded-xl"
                        alt="Supalaunch"
                    ></Image>
                </div>}

            <div className="w-full md:flex-rows">
                <h1 className="md:text-4xl font-bold">Swift Case Management</h1>
                <p className="md:text-xl py-6 text-justify">
                   Is aiming at reducing friction in cross-border payments and comprise of two services notably:
                </p>
                <ul role="list" className="mb-8 space-y-4 text-left">
                      <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                                    </svg>
                                    <span><b className='text-lg'></b>The Stop and Recall (SRP) service, which aims at stopping a payment instruction before it is credited 
                                    on the creditor's account at any point in the payment chain, in case of anomalies or suspicious transactions.</span>
                     </li>
                     <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                                    </svg>
                                    <span><b className='text-lg'></b>The Case Resolution (CASE) service, which aims at quickly addressing payment 
                                    exceptions handling due to missing/incorrect information.</span>
                     </li>
                </ul>
            </div>

            {!isImageFirst &&
                <div
                    className="relative w-full md:w-5/12 flex flex-col justify-center items-center gap-16 md:gap-24">
                    <Image src='/images/carousel/market_ania.svg'
                        width="400" height="400"
                        className="rounded-xl"
                        alt="Supalaunch"
                    ></Image>
                </div>}

            </div>    
  )
}