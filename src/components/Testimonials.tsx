import React from 'react';

const testimonials = [
  {
    id: 1,
    imgSrc: '/images/mentor.jpg',
    alt: 'Mentor photo',
    quote: "Levis is one of the most driven and forward-thinking engineers I’ve ever mentored... Any team would be lucky to have such a visionary DevOps leader.",
    author: 'Mentor, Founder, ParadigmIT Solutions LLC',
  },
  {
    id: 2,
    imgSrc: '/images/mentee.jpg',
    alt: 'DevOps mentee photo',
    quote: "Before meeting Levis, DevOps felt like a jungle... His mentorship changed the way I approach tech and life.",
    author: 'DevOps Mentee',
  },
  {
    id: 3,
    imgSrc: '/images/colleague.jpg',
    alt: 'Colleague photo',
    quote: "Collaborating with Levis has been nothing short of energizing... His clarity and leadership shine.",
    author: 'Colleague, Senior Cloud Engineer (USA)',
  },
  {
    id: 4,
    imgSrc: '/images/student.jpg',
    alt: 'Former student photo',
    quote: "As my teacher and mentor, Mr. Levis ignited my love for critical thinking... He’s a rare gem.",
    author: 'Former Student, EMC Member',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">🌟 Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map(({ id, imgSrc, alt, quote, author }) => (
            <div
              key={id}
              className="bg-white p-6 rounded-2xl shadow-md text-left flex items-start space-x-6"
            >
              <img
                src={imgSrc}
                alt={alt}
                className="w-20 h-20 rounded-full object-cover flex-shrink-0 border-2 border-indigo-600"
              />
              <div>
                <p className="text-gray-700 italic">{`“${quote}”`}</p>
                <p className="mt-4 font-semibold text-gray-900">— {author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

