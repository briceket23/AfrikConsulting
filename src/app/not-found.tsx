import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <main className='text-center h-[50vh]'>
      <h2>
        Welcome to our site in full metamorphosis! We're currently building
        something amazing, and you've come across our under construction page.
      </h2>
      <p className='flex gap-2'>
        return to the
        <Link href={"/"} className='underline'>
          <li> home page</li>
        </Link>
      </p>
    </main>
  );
};

export default notFound;
