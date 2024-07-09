import Section from './section'
import curve from '../assets/hero/curve.png'
import Button from './Button'
import robot from '../assets/hero/robot.jpg'
const Hero = () => {
  return (
    <Section className='pt-[12rem] -mt-[5.25rem]' crosses crossesOffset="lg:traslate-y-[5.25rem]" customPaddings id="hero">
        <div className='container realtive'>
            <div className='realtive z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]'>
                <h1 className='h1 mb-6'>
                    Explore the Possibilites of AI Chatting with <span className='inline-block relative'> Brainwave
                        <img src={curve} alt="curve" className='absolute top-full left-0 w-full xl:mt-2' width={624} height={28}/>
                    </span>
                </h1>
                <p className='body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus eum architecto doloribus praesentium eius expedita id.</p>
                <Button href="/pricing" white>Get Started</Button>
            </div>

            <div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24'>
                <div className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient'>
                    <div className='relative bg-n-8 rounded-[1rem]'>
                        <div className='h-[1.4rem] bg-n-10 rounded-t-[0.9rem]' />

                        <div className='aspect-[33/40] rounded-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]'>
                            <img src={robot} alt="hero" className='w-full' width={1440} height={1880} />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </Section>
  )
}

export default Hero