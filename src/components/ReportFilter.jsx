import React, { useState } from "react";

export default function ReportFilter({ onFilter }) {
  const [filter, setFilter] = useState({
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onFilter) {
      onFilter(filter);
    }
  };

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">
        Filter Laporan
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 md:grid-cols-3"
      >
        <div>
          <label className="mb-2 block text-sm font-medium">
            Tanggal Mulai
          </label>

          <input
            type="date"
            name="startDate"
            value={filter.startDate}
            onChange={handleChange}
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Tanggal Selesai
          </label>

          <input
            type="date"
            name="endDate"
            value={filter.endDate}
            onChange={handleChange}
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Terapkan Filter
          </button>
        </div>
      </form>
    </div>
  );
}
