import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-20 pb-8 px-6 bg-slate-900 text-slate-200">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">
          Levis Ngakop
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-2">
          Cloud Native DevOps Engineer
        </h2>
        <p className="text-lg text-slate-300 mb-2">
          DevOps Engineer Consultant at <strong>ParadigmIT Solutions LLC</strong>
        </p>
        <p className="text-lg text-slate-400">
          Available for remote work (EU/UK time zones)
        </p>
        <div className="mt-6">
          <a
            href="/Levis_Ngakop_Resume.pdf"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
