import React from "react";

const AboutHero = () => {
  return (
    <section className="min-h-screen bg-emerald-600 -100 flex items-center justify-center px-8">
      <div className="w-full max-w-screen-lg bg-blue-600 text-amber-300 rounded-xl shadow-2xl p-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Conheça a Nova Serra Verde
        </h1>
        <p className="text-lg md:text-xl leading-relaxed">
          Somos apaixonados por turismo local e comprometidos com o
          desenvolvimento sustentável. Nossa missão é conectar pessoas a
          experiências inesquecíveis enquanto valorizamos nossa cultura,
          natureza e comunidade.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;