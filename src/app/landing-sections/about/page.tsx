import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const About = () => {
  return (
    <div className='grid grid-rows-3 gap-1 px-16'>
      <div id=''>
        <h1 className='md:text-2xl'>Who We are </h1>
        <p>
          Afrikconsult is client-oriented consulting company with the aim of assisting companies interested in automation, expanding and, or investing in Africa. Afrikconsult is specializing in assisting industry and businesses with their Payments & compliance  solutions, market risk assessments and the development and establishment and of businesses & business ventures in Africa. 
          At Afrikconsult, we help our client in assessing and mitigating risks in African markets. We facilitate market entry and provide access into African markets. We have a sound track record of providing effective services  and training to the challenges of African business environments.
        </p>
      </div>
      <div>
        <h1>
          Our Core Values
        </h1>
        Our core values drive the decisions we make, to participate in the development of the African continent, and support our mission to provide our clients with exceptional service. We hire people that share our core values, and encourage our team to embrace them.
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>AFRIKCONSULT CORE VALUES:</AccordionTrigger>
            <AccordionContent>
              PERSONAL AND PROFESSIONAL INTEGRITY
              Hold to principles; deliver outstanding work that meets personal and firm standards
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>SEEK, ACCEPT, AND ENCOURAGE RESPONSIBILITY</AccordionTrigger>
            <AccordionContent>
              Be proactive and be a leader
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>OPENNESS AND COOPERATION</AccordionTrigger>
            <AccordionContent>
              Emphasis on teamwork and open communication; constructive interaction with clients and colleagues
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="item-4">
            <AccordionTrigger>CONTINUOUS IMPROVEMENT</AccordionTrigger>
            <AccordionContent>
              Always raise the bar; never be satisfied with the status quo
            </AccordionContent>
          </AccordionItem>
  
  
        </Accordion>
      </div>
      <div>
        <h1>
          Career Opportunities
        </h1>
        Have we triggered your interest? We offer you an engaging working environment for your personal and professional development.
        Become part of our team and shape with us the future of Afrikconsult. Together with you, we can support our customers in realizing their goals and thus make a lasting contribution to their business success. Whether you are a professional, a beginner or a student, we will be happy to hear from you
      </div>

    </div>
  )
}

export default About;