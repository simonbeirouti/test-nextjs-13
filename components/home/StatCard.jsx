export default function StatCard({ stats }) {
  return (
    <>
      {stats.map((stat) => (
        <div
          className="overflow-hidden bg-white border border-gray-200 rounded-lg"
          key={stat.id}
        >
          <div className="px-4 py-6">
            <div className="flex items-start">
              <svg
                className="flex-shrink-0 w-12 h-12 text-fuchsia-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <div className="ml-4">
                <h4 className="text-4xl font-bold text-gray-900">
                  {stat.value}
                </h4>
                <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                  {stat.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
