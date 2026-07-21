export default function Welcome({ next }) {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-10 text-center">

      <h1 className="text-5xl font-bold text-cyan-700 mb-4">
        🇵🇭 Philippine Computing Museum
      </h1>

      <h2 className="text-2xl font-semibold mb-8">
        Who Wants to Be a Tech Pioneer?
      </h2>

      <p className="text-gray-700 mb-10 leading-relaxed">
        You have explored the museum.
        <br />
        Now test everything you've learned through
        six interactive rounds.
      </p>

      <div className="grid grid-cols-2 gap-5 mb-10">

        <div className="border rounded-xl p-5">
          <h3 className="font-bold text-xl">
            6 Rounds!
          </h3>

          <p>
            Different challenge every round.
          </p>
        </div>

        <div className="border rounded-xl p-5">
          <h3 className="font-bold text-xl">
            50 Points!
          </h3>

          <p>
            Become a Digital Pioneer.
          </p>
        </div>

      </div>

      <button
        onClick={next}
        className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-xl text-xl"
      >
        Start Challenge
      </button>

    </div>
  );
}