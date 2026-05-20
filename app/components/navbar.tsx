export default function Navbar() {
    return (
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
    )
}