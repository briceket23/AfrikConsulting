"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Risk Assessment",
    href: "../landing-sections/services",
    description:
      "Afrikconsult helps in mitigating the risks for a company desiring to enter any given market in Africa.",
  },
  {
    title: "Competitive Itenlligence",
    href: "../landing-sections/services",
    description:
      "Apart from Market Research and Risk Assessment, Afrikconsult competitive intelligence is designed to help you convert information into usable “intelligence” ",
  },
  {
    title: "Market Research",
    href: "../landing-sections/services",
    description:
      "Afrikconsult provides assistance in gathering the necessary and often hard-to-find tactical research relating to a given African market.",
  },
  {
    title: "Training",
    href: "../landing-sections/services",
    description:
      "Afrikconsult believes Resource is an essential link in achieving your strategic Objectives.",
  },
];
const payements: { title: string; href: string; description: string }[] = [
  {
    title: "SWIFT Payment Integration Simplified",
    href: "/",
    description:
      "Afrikconsult is here to guide you on making the right decision train your staff and help you implement Swift solutions which will allow you to transact securely and reliably, comply with regulation, improve operational efficiency and innovate at scale to serve your customers better.",
  },
  {
    title: "SWIFT Components",
    href: "#swift-go",
    description:
      "Swift GPI ensures that ... Swift Go is an interbank service dedicated ... ",
  },
  {
    title: "Swift Case Management",
    href: "#swiftcase",
    description:
      "Is aiming at reducing friction in cross-border payments and comprise of two services notably:",
  },
  {
    title: "Swift Payment Pre-validation",
    href: "#swiftpayementpre",
    description:
      "Payment Pre-validation is a suite of services that enables banks (the Payment Pre-validation consumers) to verify if the data in their payment instructions is correct ",
  },
  {
    title: "Financial Crime Compliance",
    href: "#financialcrime",
    description:
      "In today’s world of evolving Financial Crime Compliance expectations, knowing exactly who you are doing business with has never been more important. ",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <NavigationMenuLink asChild>
                  <a
                    className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                    href='../landing-sections/about'
                  >
                    <div className='mb-2 mt-4 text-lg font-medium'>
                      Who we are
                    </div>
                    <p className='text-sm leading-tight text-muted-foreground'>
                      Afrikconsult is client-oriented consulting company with
                      the aim of assisting companies interested in automation,
                      expanding and, or investing in Africa.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href='../landing-sections/about'
                title='Our core values'
              >
                Our core values drive the decisions we make, to participate in
                the development of the African continent, and support our
                mission to provide our clients with exceptional service.
              </ListItem>
              <ListItem
                href='../landing-sections/about'
                title='Career Opportunities'
              >
                Have we triggered your interest? We offer you an engaging
                working environment for your personal and professional
                development.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {components.map(component => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Payements</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {payements.map(payement => (
                <ListItem
                  key={payement.title}
                  title={payement.title}
                  href={payement.href}
                >
                  {payement.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='../landing-sections/contact' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
