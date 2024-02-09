import React from "react";
import Image from "next/image";

export default function SwiftPayementPrevalidation({
  isImageFirst,
}: {
  isImageFirst: boolean;
}) {
  return (
    <section
      id='swiftpayemenpre'
      className='my-20 flex flex-col md:flex-row justify-center items-center text-center md:text-left'
    >
      {isImageFirst && (
        <div className='relative w-full md:w-5/12 flex flex-col justify-center items-center gap-16 md:gap-24'>
          <Image
            src='/images/carousel/transaction.svg'
            width='400'
            height='400'
            className='rounded-xl'
            alt='Supalaunch'
          ></Image>
        </div>
      )}

      <div className='w-full md:w-7/12 md:mr-8'>
        <h1 className='md:text-4xl font-bold'>Swift Payment Pre-validation </h1>
        <div className='md:text-xl py-6 text-justify'>
          Payment Pre-validation is a suite of services that enables banks (the
          Payment Pre-validation consumers) to verify if the data in their
          payment instructions is correct – and matches the specific
          requirements at the destination country – before their transactions
          are initiated. Payment Pre-validation consumers can use the services
          to:
          <ul role='list' className='mb-8 space-y-4 text-left'>
            <li className='flex items-center space-x-3'>
              <svg
                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'></path>
              </svg>
              <span>
                <b className='text-lg'></b>determine if their cross-border
                payment information results in a successful fund transfer with
                the financial institutions and complies with specific
                requirements at the destination country{" "}
              </span>
            </li>
            <li className='flex items-center space-x-3'>
              <svg
                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'></path>
              </svg>
              <span>
                <b className='text-lg'></b>obtain suggestions about how to
                improve the quality of the payment data and smooth the payment
                execution
              </span>
            </li>
            <li className='flex items-center space-x-3'>
              <svg
                className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'></path>
              </svg>
              <span>
                <b className='text-lg'></b>determine if their cross-border
                payment information complies with the Swift Go Rulebook and get
                predictability information such as routing options and payment’s
                time to creditor.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {!isImageFirst && (
        <div className='relative w-full md:w-5/12 flex flex-col justify-center items-center gap-16 md:gap-24'>
          <Image
            src='/images/carousel/transaction.svg'
            width='400'
            height='400'
            className='rounded-xl'
            alt='Supalaunch'
          ></Image>
        </div>
      )}
    </section>
  );
}
