
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Campaigns from "./Pages/Campaign";
import Campaign_edit from "./Pages/Campaign_edit";
import Calendar from "./Pages/CalendarPage";
import CreateCampaign from "./Pages/CreateCampaign";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/campaign_edit" element={<Campaign_edit />} />
      </Route>

      <Route
        path="/campaigns/calendar"
        element={<Calendar />}
      />

      <Route
        path="/create-campaign"
        element={<CreateCampaign />}
      />
    </Routes>
  );
}

export default App;
