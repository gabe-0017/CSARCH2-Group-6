import { useState } from "react";
import { timeline } from "../data/Timeline";
import InfoPanel from "./InfoPanel";
import PhilippineMap from "./PhilippineMap";
// import MapPlaceholder from "./MapPlaceholder";

export default function TimelineExhibit() {
  const [selectedYear, setSelectedYear] = useState(1967);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Show all events up to the selected year
  const visibleEvents = timeline.filter(
    (event) => event.year <= selectedYear
  );

  // Default to the most recent visible event unless a marker was clicked
  const currentEvent =
    selectedEvent ??
    (visibleEvents.length > 0 ? visibleEvents[visibleEvents.length - 1] : null);

  // When the slider moves, clear any manually selected marker
  // so it falls back to "most recent event" behavior again
  const handleYearChange = (year) => {
    setSelectedYear(year);
    setSelectedEvent(null);
  };

  return (
    <section className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-2">
        Evolution of Computing in the Philippines
      </h1>
      <p className="text-gray-600 mb-8">
        Drag the timeline to explore important milestones in Philippine
        computing history.
      </p>

      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span>1967</span>
          <span className="font-semibold">
            Selected Year: {selectedYear}
          </span>
          <span>2025</span>
        </div>
        <input
          type="range"
          min="1967"
          max="2025"
          value={selectedYear}
          onChange={(e) => handleYearChange(Number(e.target.value))}
          className="w-full accent-cyan-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        <PhilippineMap
          events={visibleEvents}
          selectedEvent={currentEvent}
          onSelectEvent={setSelectedEvent}
        />
        <InfoPanel event={currentEvent} />
      </div>
    </section>
  );
}
