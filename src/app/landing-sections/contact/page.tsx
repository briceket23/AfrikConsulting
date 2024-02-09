import ProfileForm from "@/components/general/contact-form";
import { Label } from "@/components/ui/label";
import React from "react";

const ContactPage = () => {
  return (
    <section className='flex items-center justify-center max-w-6xl flex-col gap-6'>
      <Label className='text-xl'>Contact Us</Label>
      <section className=' w-[600px]'>
        <ProfileForm />
      </section>
    </section>
  );
};

export default ContactPage;
