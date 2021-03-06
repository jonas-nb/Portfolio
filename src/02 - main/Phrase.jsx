import React from "react";

import { FaQuoteLeft } from "react-icons/fa";
const Phrase = () => {
  return (
    <div className="m-auto mt-5 h-36 w-11/12 lg:w-2/5 bg-slate-200 rounded shadow-lg">
      <section>
        <article>
          <h1>
            <FaQuoteLeft className="text-black text-4xl p-2" />
          </h1>
          <blockquote>
            <p className="text-center lg:text-lg font-mono font-semibold ">
              Any sufficiently advanced technology is indistinguishable from
              magic
            </p>
            <q className="font-mono text-xs lg:text-lg text-right block mt-1 mr-1">
              Arthur C. Clarke
            </q>
          </blockquote>
        </article>
      </section>
    </div>
  );
};

export default Phrase;
