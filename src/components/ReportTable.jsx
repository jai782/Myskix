import React from "react";

const reportData = [
  {
    id: 1,
    tanggal: "2026-06-28",
    transaksi: "TRX001",
    pelanggan: "Andi",
    total: 250000,
    status: "Selesai",
  },
  {
    id: 2,
    tanggal: "2026-06-29",
    transaksi: "TRX002",
    pelanggan: "Budi",
    total: 175000,
    status: "Selesai",
  },
  {
    id: 3,
    tanggal: "2026-06-30",
    transaksi: "TRX003",
    pelanggan: "Candra",
    total: 320000,
    status: "Pending",
  },
];

export default function ReportTable() {
  return (
    <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
      <div className="border-b px-6 py-4">
        <h2 className="text-lg font-semibold">
          Data Laporan Penjualan
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Tanggal</th>
              <th className="px-4 py-3 text-left">Kode</th>
              <th className="px-4 py-3 text-left">Pelanggan</th>
              <th className="px-4 py-3 text-left">Total</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {reportData.map((item) => (
              <tr
                key={item.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-4 py-3">{item.tanggal}</td>
                <td className="px-4 py-3">{item.transaksi}</td>
                <td className="px-4 py-3">{item.pelanggan}</td>
                <td className="px-4 py-3">
                  Rp {item.total.toLocaleString("id-ID")}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      item.status === "Selesai"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
