import { TestimonialsTypes } from '@/shared/types';

// return number of stars
const renderStars = (numStars: number) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-markals-yellow"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>,
    );
  }
  return stars;
};
// Testimonials Component
const Testimonial: React.FC<{ data: TestimonialsTypes[] }> = ({ data }) => {
  return (
    <section className="bg-markals-light mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16 flex flex-col gap-5 ">
      {/* heading */}
      <h3 className="text-4xl font-light lg:text-center">
        <span className="font-bold">CUSTOMERS </span>
        STORIES
      </h3>
      {/* testimonials */}
      <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
        <div className="w-full flex justify-center flex-col gap-2   bg-white p-2 shadow-sm sm:p-8 items-center py-8 mb-8  rounded-lg hover:shadow-lg transition-all duration-300 ">
          <div className="flex h-8 items-center text-4xl font-bold text-markals-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            4.5
          </div>

          <p className="text-sm text-gray-500">Average User Rating</p>
        </div>
        {/* Individual Testimonials */}
        {data.map((review: TestimonialsTypes) => (
          <div className="mb-8 sm:break-inside-avoid" key={review.id}>
            <blockquote className="rounded-lg bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 sm:p-8">
              <div className="flex items-center gap-4">
                <img alt="Man" src={review.imgUrl} className="h-14 w-14 rounded-full object-cover" />

                <div>
                  <div className="flex justify-start gap-0.5 text-yellow-400">
                    {/* star */}
                    {renderStars(review?.stars ?? 3)}
                  </div>

                  <p className="mt-0.5 text-lg font-medium text-gray-900">{review?.author}</p>

                  <p className="mt-0.5 text-sm font-normal text-gray-500">{review?.company}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">{review.content}</p>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
