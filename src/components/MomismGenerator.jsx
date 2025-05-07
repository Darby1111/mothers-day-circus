
import React, { useState } from 'react';

const momisms = [
  "Because I said so!",
  "Don’t make me turn this car around.",
  "Money doesn’t grow on trees.",
  "Were you born in a barn?",
  "This too shall pass.",
  "You’ll understand when you’re older."
];

export default function MomismGenerator() {
  const [quote, setQuote] = useState('Click to hear a Mom-ism!');

  const generate = () => {
    const random = momisms[Math.floor(Math.random() * momisms.length)];
    setQuote(random);
  };

  return (
    <div className="mt-6 text-center">
      <button onClick={generate} className="bg-purple-300 hover:bg-purple-400 text-white py-2 px-4 rounded-full shadow-md">
        Show Mom-ism
      </button>
      <p className="mt-3 font-semibold italic">{quote}</p>
    </div>
  );
}
