"use client"
import * as React from 'react';
import { FAQCardProps } from '@/app/_types/components/FAQCard/FAQCard.types'
import { useTranslations } from 'next-intl'
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} className='bg-transparent before:hidden' />
))();



const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        {...props}
    />
))();

const AccordionDetails = styled(MuiAccordionDetails)();



export default function FAQCard({ index, question, answer }: FAQCardProps) {
    const t = useTranslations("faq")
    const [expanded, setExpanded] = React.useState<string | false>(`q${index}`);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };
    return (
        <li className='relative'>
            <div className="flex justify-between py-5 lg:py-6 2xl:py-8 w-full">
                <div className="flex gap-4 2xl:gap-6">
                    <div className="bg-gray-90 dark:bg-black-12 border border-gray-75 dark:border-black-15 rounded-md lg:rounded-lg 2xl:rounded-xl font-manrope-semibold text-base lg:text-lg 2xl:text-xl text-black-6 dark:text-gray-99 aspect-square text-center flex items-center justify-center w-12 lg:w-14 2xl:w-16 shrink-0 h-fit">
                        {index + 1}
                    </div>
                    <Accordion
                        expanded={expanded === `q`}
                        onChange={handleChange(`q`)}
                    >
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <h5 className='font-manrope-medium rtl:font-vazir-medium text-lg lg:text-xl 2xl:text-2xl text-black-6 dark:text-gray-99'>
                                {t(question)}
                            </h5>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className='text-sm lg:text-base 2xl:text-lg text-black-30 dark:text-gray-60 font-manrope-regular rtl:font-vazir-regular'>
                                {t(answer)}
                            </p>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 2xl:h-8 2xl:w-8 text-black-6 dark:text-gray-99 shrink-0 mt-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
            <div className="h-px w-full absolute bottom-0 left-0 bg-gradient-to-r from-red-45/0 via-red-45/100 to-red-45/0"></div>
        </li>
    )
}
