import React from 'react';

const testimonials = [
  {
    id: 1,
    imgSrc: '/mentor.jpg',
    alt: 'Mentor photo',
    quote: "Levis is one of the most driven and forward-thinking engineers I’ve ever mentored... Any team would be lucky to have such a visionary DevOps leader.",
    author: 'Michael Ankinimbom, Founder, ParadigmIT Solutions LLC',
  },
  {
    id: 2,
    imgSrc: '/colleague.jpg',
    alt: 'Colleague photo',
    quote: "Collaborating with Levis has been nothing short of energizing... His clarity and leadership shine.",
    author: 'Ngong Lawrence, Colleague, Senior DevOps Engineer (USA)',
  },
  {
    id: 3,
    imgSrc: '/images/mentee.jpg',
    alt: 'DevOps mentee photo',
    quote: "Before meeting Levis, DevOps felt like a jungle... His mentorship changed the way I approach tech and life.",
    author: 'DevOps Mentee',
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
    <section
      id="testimonials"
      className="bg-slate-800 py-20 px-4 sm:px-6 lg:px-8 text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          🌟 Testimonials
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.map(({ id, imgSrc, alt, quote, author }) => (
            <div
              key={id}
              className="bg-slate-700 p-6 rounded-3xl shadow-xl flex flex-col md:flex-row items-start gap-6 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={imgSrc}
                alt={alt}
                className="w-24 h-24 rounded-full object-cover flex-shrink-0 border-4 border-indigo-500"
              />
              <div className="flex-1">
                <p className="text-gray-200 italic text-lg leading-relaxed">
                  {`“${quote}”`}
                </p>
                <p className="mt-4 font-semibold text-gray-100 text-sm md:text-base">
                  — {author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

