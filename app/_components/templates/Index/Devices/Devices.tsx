import { useTranslations } from 'next-intl'
import DeviceCard from '../DeviceCard/DeviceCard'

export default function Devices() {
    const t = useTranslations("devices")
    return (
        <div id='devices'>
            <div className="container">
                <div className="flex flex-col gap-10 lg:gap-14 2xl:gap-20">
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="flex flex-col gap-2.5 2xl:gap-3.5">
                            <h3 className='text-2xl lg:text-3xl 2xl:text-4xl font-manrope-bold rtl:font-vazir-bold text-black-6 dark:text-white'>
                                {t("title")}
                            </h3>
                            <span className='text-sm lg:text-base 2xl:text-lg font-manrope-regular rtl:font-vazir-regular text-black-30 dark:text-gray-60'>
                                {t("description")}
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 2xl:gap-8">
                        <DeviceCard title="Smartphones" description="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" image="smartphone.svg" />
                        <DeviceCard title="Tablet" description="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" image="tablet.svg" />
                        <DeviceCard title="Smart TV" description="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" image="smart-tv.svg" />
                        <DeviceCard title="Laptops" description="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" image="laptops.svg" />
                        <DeviceCard title="Gaming Consoles" description="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" image="gaming-consoles.svg" />
                        <DeviceCard title="VR Headsets" description="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" image="vr-headsets.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
