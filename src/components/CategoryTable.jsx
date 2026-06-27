import React from "react";

const dummyCategories = [
  {
    id: 1,
    nama: "Lampu",
    deskripsi: "Kategori lampu kendaraan",
  },
  {
    id: 2,
    nama: "Aksesoris",
    deskripsi: "Aksesoris mobil dan motor",
  },
  {
    id: 3,
    nama: "Audio",
    deskripsi: "Perangkat audio kendaraan",
  },
];

export default function CategoryTable() {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left">No</th>
            <th className="px-4 py-3 text-left">Nama Kategori</th>
            <th className="px-4 py-3 text-left">Deskripsi</th>
            <th className="px-4 py-3 text-center">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {dummyCategories.map((item, index) => (
            <tr
              key={item.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="px-4 py-3">{index + 1}</td>

              <td className="px-4 py-3 font-medium">
                {item.nama}
              </td>

              <td className="px-4 py-3">
                {item.deskripsi}
              </td>

              <td className="px-4 py-3 text-center space-x-2">
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
