import React from 'react';
import backgroundImg from './images/96VibezImg.png'; // ✅ your background image

const HomePage = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen w-full bg-bullBlack"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-lg text-center shadow-xl backdrop-blur-sm">
        <h1 className="text-5xl font-bold text-bullRed mb-4 animate-bounce">
          96Vibez
        </h1>
        <p className="text-lg text-bullWhite mb-8 animate-fadeIn">
          Join us and stay updated! Enter your email to vote for 96Vibez.
        </p>

        <form
          action="https://formspree.io/f/mwpornop"
          method="POST"
          className="flex flex-col items-center"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="p-3 mb-4 rounded-lg border-2 border-bullRed bg-bullBlack text-bullWhite placeholder:text-bullWhite w-72"
          />
          <button
            type="submit"
            className="bg-bullRed text-bullBlack px-8 py-3 rounded-full text-xl font-bold transition-all duration-300 hover:bg-bullWhite hover:text-bullRed animate-pulse"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
