"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Paul Starr",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
      review:
        "FineAdvice has transformed the way I plan my finances. I'm saving more than ever with its personalized insights.",
      rating: 5,
    },
    {
      name: "Jane Doe",
      image:
        "https://images.unsplash.com/photo-1603415526960-f8f5b0a0f49c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
      review:
        "The personalized advice is spot on. Budgeting has never been this simple and intuitive.",
      rating: 5,
    },
    {
      name: "John Smith",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
      review:
        "Using FineAdvice, I finally understand where my money goes every month. It has been a game changer.",
      rating: 5,
    },
    {
      name: "Emma Wilson",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
      review:
        "The AI insights are incredible. I was able to cut unnecessary expenses quickly and invest smarter.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
      review:
        "A game-changer for managing my finances. The tools are user-friendly, efficient, and very effective.",
      rating: 5,
    },
    {
      name: "Sophia Lee",
      image:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
      review:
        "I love how FineAdvice breaks down complex financial data into simple insights. It’s truly empowering.",
      rating: 5,
    },
    {
      name: "Daniel Kim",
      image:
        "https://images.unsplash.com/photo-1589571894960-20bbe2828dce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
      review:
        "The budgeting tips have saved me from overspending and helped me invest more wisely.",
      rating: 5,
    },
    {
      name: "Olivia Martinez",
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
      review:
        "FineAdvice is my go-to app for financial planning. It's intuitive, effective, and user-friendly.",
      rating: 5,
    },
    {
      name: "Liam Johnson",
      image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
      review:
        "I appreciate the honest reviews and real-time insights. This app keeps me on track with my goals.",
      rating: 5,
    },
    {
      name: "Ava Davis",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80",
      review:
        "The personalized approach to saving and investing has boosted my financial confidence immensely.",
      rating: 5,
    },
  ];

  // Render exactly 5 stars: filled for the rating value, and unfilled for the remainder.
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300 sm:text-5xl mb-8">
          What Our Customers Are Saying
        </h2>
        {/* Desktop Grid Layout */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex justify-center gap-0.5">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="mt-0.5 text-lg font-medium text-gray-200">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">{testimonial.review}</p>
              </blockquote>
            </div>
          ))}
        </div>
        {/* Mobile Carousel Layout */}
        <div className="sm:hidden flex overflow-x-auto snap-x snap-mandatory gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-full snap-center">
              <blockquote className="rounded-lg bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex justify-center gap-0.5">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="mt-0.5 text-lg font-medium text-gray-200">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">{testimonial.review}</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
