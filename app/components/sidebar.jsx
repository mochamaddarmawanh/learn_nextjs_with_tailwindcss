export default function Sidebar() {
    return (
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
    );
}