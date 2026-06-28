import React from "react";

export default function Reports() {
  return (
    <div className="space-y-6 p-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Laporan Penjualan
        </h1>
        <p className="mt-1 text-gray-500">
          Monitoring transaksi dan pendapatan toko variasi kendaraan.
        </p>
      </div>

      {/* Statistik */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Pendapatan</p>
          <h2 className="mt-2 text-2xl font-bold text-green-600">
            Rp 0
          </h2>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Jumlah Transaksi</p>
          <h2 className="mt-2 text-2xl font-bold text-blue-600">
            0
          </h2>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Produk Terjual</p>
          <h2 className="mt-2 text-2xl font-bold text-purple-600">
            0
          </h2>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Jasa Terjual</p>
          <h2 className="mt-2 text-2xl font-bold text-orange-600">
            0
          </h2>
        </div>

      </div>

      {/* Area Grafik */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">
          Grafik Penjualan
        </h2>

        <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed text-gray-400">
          Grafik akan ditampilkan di sini
        </div>
      </div>

      {/* Area Tabel */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">
          Riwayat Laporan
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">Tanggal</th>
                <th className="px-4 py-3 text-left">Transaksi</th>
                <th className="px-4 py-3 text-left">Pendapatan</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td
                  colSpan="4"
                  className="py-10 text-center text-gray-400"
                >
                  Belum ada data laporan.
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
}
