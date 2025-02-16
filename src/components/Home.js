import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100/70 to-blue-500/70 text-gray-900">
      <header className="p-6 text-center text-4xl font-bold text-blue-900">Lightning Singh</header>
      <main className="max-w-5xl mx-auto p-6">
        <section className="mb-12 flex flex-col md:flex-row items-center bg-white/70 p-6 rounded-lg shadow-md text-gray-900">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-semibold text-blue-900">About Me</h2>
            <p className="mt-2 text-xl text-gray-700">
              Athlete
              <br /> Entrepreneur in Residence @Urban Company 
              <br />Native: Hardware products
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
            <img 
              src="/FB_IMG_1576685249403_Original.jpg" 
              alt="Lightning Singh" 
              className="h-48 w-48 rounded-full object-cover border-4 border-blue-900 shadow-md"
            />
          </div>
        </section>
        <section className="mb-12 text-center bg-white/70 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-blue-900">Blog</h2>
          <p className="mt-2 text-lg text-gray-700">
            Follow my journey, training routines, and competitions.
          </p>
        </section>
        <section className="mb-12 text-center bg-white/70 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-blue-900">Gallery</h2>
          <p className="mt-2 text-lg text-gray-700">
            A collection of my best moments on and off the track.
          </p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="h-32 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500">Thumbnail 1</div>
            <div className="h-32 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500">Thumbnail 2</div>
            <div className="h-32 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500">Thumbnail 3</div>
          </div>
        </section>
        <section className="mb-12 text-center bg-white/70 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-blue-900">Updates</h2>
          <p className="mt-2 text-lg text-gray-700">
            Stay tuned for upcoming races and achievements.
          </p>
        </section>
        <section className="text-center bg-white/70 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-blue-900">Contact</h2>
          <p className="mt-2 text-lg text-gray-700">
            Reach out for collaborations and sponsorships.
          </p>
        </section>
      </main>
      <footer className="p-6 text-center text-blue-900 font-semibold bg-white/70 shadow-md">
        © 2025 Lightning Singh | Sprinting to Success
      </footer>
    </div>
  );
};

export default Home;
