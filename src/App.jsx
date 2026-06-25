import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import DashboardPage from "./pages/DashboardPage";
import WorkspacesPage from "./pages/Workspace/WorkspacePage";
import BoardsPage from "./pages/BoardPage";
import BoardDetailsPage from "./pages/BoardDetailsPage";
import FavoritesPage from "./pages/FavoritesPage";
import ActivityPage from "./pages/ActivityPage";
import NotificationsPage from "./pages/NotificationsPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";

import "./style.css";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<DashboardPage />} />

        <Route path="/workspaces" element={<WorkspacesPage />} />

        <Route path="/boards" element={<BoardsPage />} />

        <Route path="/boards/:boardId" element={<BoardDetailsPage />} />

        <Route path="/favorites" element={<FavoritesPage />} />

        <Route path="/activity" element={<ActivityPage />} />

        <Route path="/notifications" element={<NotificationsPage />} />

        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
