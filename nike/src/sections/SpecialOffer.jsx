import Button from '../components/Button'
import {offer} from '../assets/images'
import { arrowRight } from '../assets/icons'
const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      
      <div className='flex-1'>
        <img src={offer} alt="" width={773} height={687} className='object-contain w-full'/>
      </div>
      
      <div className="flex flex-1 flex-col">
        <h1 className='mt-10 font-palanquin text-4xl font-bold capitalize lg:max-w-lg'><span className='text-coral-red inline-block mt-3'>Special</span> Offer</h1>
        <p className='mt-4 lg:max-w-lg info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cumque reiciendis soluta recusandae officiis est perferendis dolorem quos suscipit ad accusantium unde doloremque ullam, ab dicta iusto dolorum, velit deleniti.</p>
        <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quasi dolorem, corporis necessitatibus itaque sed libero, odit impedit velit ab rerum saepe exercitationem vitae eos nihil, dolore inventore aliquam placeat.</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View Details" iconURL={arrowRight}/>
          <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer