import Image from "next/image";


export default function Feature({isImageFirst}: {
    isImageFirst: boolean,
}) {
    return (
    <>
    <section>
        <div className="w-full md:mr-8">
            <h1 className="md:text-5xl font-bold">SWIFT   <span
                className='md:text-primary'>Components</span></h1>
        </div>
    </section>
    <section
        className="my-20 flex flex-col md:flex-col justify-center items-center text-center ">
            <div className="flex flex-row text-ellipsis">
                {isImageFirst &&
                <div
                    className="relative w-full md:w-5/12 flex flex-col justify-center items-center gap-16 md:gap-24">
                    <Image src='/images/feature-img.png'
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
                    <Image src='/images/feature-img.png'
                        width="400" height="400"
                        className="rounded-xl"
                        alt="Supalaunch"
                    ></Image>
                </div>}

            </div>

            <div className="flex flex-row text-ellipsis">
                            {isImageFirst &&
                <div
                    className="relative w-full md:w-5/12 flex flex-col justify-center items-center gap-16 md:gap-24">
                    <Image src='/images/feature-img.png'
                        width="400" height="400"
                        className="rounded-xl"
                        alt="Supalaunch"
                    ></Image>
                </div>}

            <div className="w-full md:w-7/12 md:mr-8">
                <h1 className="md:text-4xl font-bold">Swift Go</h1>
                <p className="md:text-xl py-6 text-justify">
                   Swift Go is an interbank service dedicated to low-value, cross-border transactions. With Swift Go, financial institutions can enable their small and medium-sized enterprises (SME) and retail customers to exchange predicable, fast, highly secure, and competitively priced, low-value, cross border payments anywhere in the world, directly from their bank accounts. The service is available for both GPI and non-GPI customers and uses the high-speed rails of Swift GPI, which have transformed the speed and predictability of high-value, cross-border payments, to strengthen the capabilities of banks to serve their customers in the high-growth, small business, and consumer segments
                </p>
            </div>

            {!isImageFirst &&
                <div
                    className="relative w-full md:w-5/12 flex flex-col justify-center items-center gap-16 md:gap-24">
                    <Image src='/images/feature-img.png'
                        width="400" height="400"
                        className="rounded-xl"
                        alt="Supalaunch"
                    ></Image>
                </div>}

            </div>


            <div className="flex flex-row text-ellipsis">
              {isImageFirst &&
                <div
                    className="relative w-full md:w-5/12 flex flex-col justify-center items-center gap-16 md:gap-24">
                    <Image src='/images/feature-img.png'
                        width="400" height="400"
                        className="rounded-xl"
                        alt="Supalaunch"
                    ></Image>
                </div>}

            <div className="w-full md:w-7/12 md:mr-8">
                <h1 className="md:text-4xl font-bold">Case Management</h1>
                <p className="md:text-xl py-6 text-justify">
                   Is aiming at reducing friction in cross-border payments and comprise of two services notably:
                </p>
            </div>

            {!isImageFirst &&
                <div
                    className="relative w-full md:w-5/12 flex flex-col justify-center items-center gap-16 md:gap-24">
                    <Image src='/images/feature-img.png'
                        width="400" height="400"
                        className="rounded-xl"
                        alt="Supalaunch"
                    ></Image>
                </div>}

            </div>

            

        </section></>
    )
}