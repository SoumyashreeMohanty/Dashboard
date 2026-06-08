import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Untitled",
    start: new Date(2026, 5, 2),
    end: new Date(2026, 5, 2),
  },
  {
    title: "Untitled",
    start: new Date(2026, 5, 3),
    end: new Date(2026, 5, 3),
  },
  {
    title: "Untitled",
    start: new Date(2026, 5, 4),
    end: new Date(2026, 5, 4),
  },
];

const CalendarPage = () => {
  return (
    <div
      style={{
        height: "700px",
        background: "#fff",
        padding: "20px",
      }}
    >
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
      />
    </div>
  );
};

export default CalendarPage;