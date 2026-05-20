import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import StatCard from "./components/statistics_card";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "12,000",
    },
    {
      title: "Revenue",
      value: "$45,000",
    },
    {
      title: "Projects",
      value: "120",
    },
  ];

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-blue-300">

        {/* Navbar */}
        <Navbar />

        <div className="p-4">
          <div className="mb-4 text-4xl font-bold">Content</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

            {/* Stat Cards */}
            {
              stats.map((item) => (
                <StatCard
                  key={item.title}
                  title={item.title}
                  value={item.value}
                />
              ))
            }

          </div>
        </div>

      </div>

    </div>
  );
}