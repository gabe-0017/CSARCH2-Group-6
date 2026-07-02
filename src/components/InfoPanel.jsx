export default function InfoPanel({ event }) {
  if (!event) {
    return (
        <div className="h-[500px] bg-white rounded-xl shadow-lg p-8 flex items-center justify-center">
            <p>Select a year to begin.</p>
        </div>
    );
  }

  return (
    <div className="h-[500px] bg-white rounded-xl shadow-lg p-8 overflow-y-auto">

      <span className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-semibold">
        {event.year}
      </span>

      <h2 className="text-3xl font-bold mt-4">
        {event.title}
      </h2>

      <div className="mt-6 space-y-4">

        <p className="text-gray-700 leading-relaxed">
          {event.description}
        </p>

        <div>
          <h3 className="font-semibold">
            📍 Location
          </h3>

          <p>{event.location}</p>
        </div>

      </div>

    </div>
  );
}