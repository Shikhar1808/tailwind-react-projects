import {reviews} from '../constants'
import { star } from '../assets/icons'
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas tempora quasi necessitatibus distinctio id, alias amet.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => {
          return (
            <div key={index} className="review-card flex flex-col items-center">
              <img src={review.imgURL} alt={review.customerName} className="rounded-full w-20 h-20" />
              <p className="info-text text-center mt-5">{review.feedback}</p>
              <p className="info-text text-center mt-2 flex gap-1.5"><img src={star} alt="star" />({review.rating})</p>
              <h4 className="text-2xl font-bold mt-4">{review.customerName}</h4>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default CustomerReviews