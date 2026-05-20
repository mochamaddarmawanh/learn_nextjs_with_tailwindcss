type Props = {
    title: string;
    value: string;
};

export default function StatCard({
    title,
    value,
}: Props) {
    return (
        <div className="rounded-sm bg-blue-200 p-6 shadow">
            <div className="text-gray-800 font-bold">{title}</div>
            <div className="text-gray-600 text-justify mt-2">
                {value}
            </div>
        </div>
    );
}