import Button from "../components/Button"

import {shoe8} from '../assets/images'
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h1 className='mt-10 font-palanquin text-4xl font-bold capitalize lg:max-w-lg'>We Provide You <span className='text-coral-red inline-block mt-3'>Super</span> <span className='text-coral-red inline-block mt-3'>Quality</span> Shoes</h1>
        <p className='mt-4 lg:max-w-lg info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cumque reiciendis soluta recusandae officiis est perferendis dolorem quos suscipit ad accusantium unde doloremque ullam, ab dicta iusto dolorum, velit deleniti.</p>
        <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatem autem exercitationem est vero.</p>
        <div className="mt-11 ">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe*" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality