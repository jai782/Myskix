import React from "react";

export default function ReportCard({
  title,
  value,
  color = "text-blue-600",
  icon = "📊",
}) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className={`mt-2 text-2xl font-bold ${color}`}>
            {value}
          </h2>
        </div>

        <div className="text-4xl">
          {icon}
        </div>
      </div>
    </div>
  );
}
