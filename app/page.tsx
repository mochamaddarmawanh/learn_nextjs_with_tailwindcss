export default function Dashboard() {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-64 flex-none bg-blue-500 text-white p-4 shadow">

        <div className="mb-6 text-2xl font-bold">
          Dashboard
        </div>

        <div className="flex flex-col gap-4">
          <div className="hover:underline cursor-pointer">
            Dashboard
          </div>
          <div className="hover:underline cursor-pointer">
            Projects
          </div>
          <div className="hover:underline cursor-pointer">
            Analytics
          </div>
          <div className="hover:underline cursor-pointer">
            Settings
          </div>
        </div>

      </div>

      {/* Main Content */}
      <div className="flex-1 bg-blue-300">

        <div className="flex flex-wrap bg-blue-400 p-4 shadow">

          <div className="w-32 flex-none text-2xl font-bold">
            Navbar
          </div>

          <div className="mt-2 flex-1 flex gap-4">

            <div className="cursor-pointer hover:underline">
              Home
            </div>
            <div className="cursor-pointer hover:underline">
              Products
            </div>
            <div className="cursor-pointer hover:underline">
              Locations
            </div>

            <div className="lg:ml-auto flex gap-4">
              <div className="cursor-pointer hover:underline">
                Profile
              </div>

              <div className="cursor-pointer hover:underline">
                Logout
              </div>
            </div>

          </div>

        </div>

        <div className="p-4">
          <div className="mb-4 text-4xl font-bold">Content</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div className="rounded-sm bg-blue-200 p-6 shadow">
              <div className="text-gray-800 font-bold">Card 1</div>
              <div className="text-gray-600 text-justify mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quam facere facilis eaque iure vel, fugit ea. Quos quam natus amet tempora itaque, nesciunt porro odio, laudantium voluptatibus, ipsa quis.
              </div>
            </div>
            <div className="rounded-sm bg-blue-200 p-6 shadow">
              <div className="text-gray-800 font-bold">Card 1</div>
              <div className="text-gray-600 text-justify mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quam facere facilis eaque iure vel, fugit ea. Quos quam natus amet tempora itaque, nesciunt porro odio, laudantium voluptatibus, ipsa quis.
              </div>
            </div>
            <div className="rounded-sm bg-blue-200 p-6 shadow">
              <div className="text-gray-800 font-bold">Card 1</div>
              <div className="text-gray-600 text-justify mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quam facere facilis eaque iure vel, fugit ea. Quos quam natus amet tempora itaque, nesciunt porro odio, laudantium voluptatibus, ipsa quis.
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}