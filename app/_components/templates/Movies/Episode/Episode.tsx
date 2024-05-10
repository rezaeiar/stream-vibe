"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} className='bg-transparent before:hidden' />
))();

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        {...props}
    />
))();

const AccordionDetails = styled(MuiAccordionDetails)();

export default function Episode() {
    const t = useTranslations("episode")

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };
    return (
        <div className="flex flex-col gap-4 lg:gap-5 bg-gray-99 dark:bg-black-6 border border-gray-75 dark:border-black-15 py-7 2xl:py-8 px-5 lg:px-10 2xl:px-12 rounded-xl">
            <div className="flex items-center justify-between">
                <Accordion
                    expanded={expanded === `q`}
                    onChange={handleChange(`q`)}
                >
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex gap-2.5 items-center">
                                <h4 className='text-base lg:text-xl 2xl:text-2xl font-manrope-semibold rtl:font-vazir-semibold text-black-6 dark:text-gray-99'>
                                    {t("Season")} 01
                                </h4>
                                <span className='text-sm lg:text-base 2xl:text-lg text-black-30 dark:text-gray-60 font-manrope-medium rtl:font-vazir-medium'>
                                    9 {t("Episodes")}
                                </span>
                            </div>
                            <div className="flex">
                                <div className="flex p-3 2xl:p-3.5 bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-full">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 lg:w-6 lg:h-6 text-black-30 dark:text-gray-60 transition-all ${expanded ? "rotate-180": "rotate-0"}`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="flex flex-col">
                            <div className="border-t border-gray-75 dark:border-black-15 py-5 lg:py-8 2xl:py-10 flex flex-col lg:flex-row gap-4">
                                <div className="flex items-center gap-4">
                                    <span className='font-semibold text-2xl text-black-30 dark:text-gray-60'>
                                        01
                                    </span>
                                    <div className="w-full lg:w-36">
                                        <Image
                                            src="/images/assets/episode.jpg"
                                            alt="video-trailer"
                                            width="100"
                                            height="100"
                                            sizes="100vw"
                                            className="rounded-xl border border-gray-75 dark:border-black-15 w-full"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex flex-col justify-center gap-2.5 2xl:gap-3.5">
                                        <h3 className='font-manrope-semibold text-base lg:text-lg 2xl:text-xl text-black-6 dark:text-gray-99'>
                                            Chapter One : The Vanishing of Will Byers
                                        </h3>
                                        <span className='font-manrope-regular text-black-30 dark:text-gray-60 text-base 2xl:text-lg hidden lg:block'>
                                            Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t border-gray-75 dark:border-black-15 py-5 lg:py-8 2xl:py-10 flex flex-col lg:flex-row gap-4">
                                <div className="flex items-center gap-4">
                                    <span className='font-semibold text-2xl text-black-30 dark:text-gray-60'>
                                        02
                                    </span>
                                    <div className="w-full lg:w-36">
                                        <Image
                                            src="/images/assets/episode.jpg"
                                            alt="video-trailer"
                                            width="100"
                                            height="100"
                                            sizes="100vw"
                                            className="rounded-xl border border-gray-75 dark:border-black-15 w-full"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex flex-col justify-center gap-2.5 2xl:gap-3.5">
                                        <h3 className='font-manrope-semibold text-base lg:text-lg 2xl:text-xl text-black-6 dark:text-gray-99'>
                                            Chapter One : The Vanishing of Will Byers
                                        </h3>
                                        <span className='font-manrope-regular text-black-30 dark:text-gray-60 text-base 2xl:text-lg hidden lg:block'>
                                            Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}
