import React from "react";

const dummyServices = [
  {
    id: 1,
    nama: "Pemasangan Lampu LED",
    harga: 50000,
    estimasi: "30 Menit",
  },
  {
    id: 2,
    nama: "Servis Audio",
    harga: 150000,
    estimasi: "2 Jam",
  },
  {
    id: 3,
    nama: "Pemasangan Kamera Mundur",
    harga: 200000,
    estimasi: "1 Jam",
  },
];

export default function ServiceTable() {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left">No</th>
            <th className="px-4 py-3 text-left">Nama Jasa</th>
            <th className="px-4 py-3 text-left">Harga</th>
            <th className="px-4 py-3 text-left">Estimasi</th>
            <th className="px-4 py-3 text-center">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {dummyServices.map((service, index) => (
            <tr key={service.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-3">{index + 1}</td>

              <td className="px-4 py-3 font-medium">
                {service.nama}
              </td>

              <td className="px-4 py-3">
                Rp {service.harga.toLocaleString("id-ID")}
              </td>

              <td className="px-4 py-3">
                {service.estimasi}
              </td>

              <td className="space-x-2 px-4 py-3 text-center">
                <button className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600">
                  Edit
                </button>

                <button className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600">
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
