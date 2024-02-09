
import React from 'react' 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { BellIcon, CheckIcon } from 'lucide-react'

const notifications = [
        {
            title: 'Risk Assessment ',
            content: 'Afrikconsult helps in mitigating the risks for a company desiring to enter any given market in Africa. Our basic assessment will identify common and known risks inherent in any business venture, and our team will also identify hidden risks in relation to the specific African country to which your company seeks entry.  Our assessments are honest, direct, and based on real-time information.'
        },
        {
            title: 'Competitive Itenlligence',
            content: 'Apart from Market Research and Risk Assessment, Afrikconsult competitive intelligence is designed to help you convert information into usable “intelligence” that will make your organization more competitive across the entire operating environment and assist you in making sound business decisions regarding the expansion of your company into African countries. We provide information on clients, competitors, distributors, technology, and other macro- and micro-economic factors to provide your business with the necessary information to make strategic decisions and maximise the best opportunity for success.'
        },
        {
            title: 'Market Research',
            content: 'Afrikconsult provides assistance in gathering the necessary and often hard-to-find tactical research relating to a given African market. This real-time, “on-the-ground” information will help determine the feasibility of your specific capital venture as it relates to political risk & macro economy outlook, business environment, and place offering for the specific product or service you wish to provide. Our market research includes country risk assessment, specific industry analysis, export/export opportunities, and international regulations of trade and export.'
        },
        {
          title:"Training",
          content:"Afrikconsult believes Resource is an essential link in achieving your strategic Objectives. Our Experts support you in developing a Training Plan that is completely in line with your Business Plan. We identify your Teams' Areas of Improvement as part of a conventional evaluation process. Our Experts provide you with quality content based on Standards and best practices in this area."
        }
    ]

type CardProps = React.ComponentProps<typeof Card>
function Services({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[100%]", className)} {...props}>
      <CardHeader>
        <CardTitle>Our Services</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className='grid md:grid-cols-2'>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="md:text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        
          <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
        
      </CardFooter>
    </Card>
  )
}
export default Services;

