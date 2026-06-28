import React from "react";

export default function SalesChart() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">
        Grafik Penjualan
      </h2>

      <div className="flex h-72 items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
        <div className="text-center text-gray-500">
          <p className="text-5xl">📈</p>
          <p className="mt-2">
            Grafik penjualan akan ditampilkan di sini.
          </p>
        </div>
      </div>
    </div>
  );
}
