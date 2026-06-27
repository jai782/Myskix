import React from "react";

export default function Categories() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Master Kategori</h1>
        <p className="text-gray-500">
          Kelola seluruh kategori barang pada sistem inventori.
        </p>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">
          Daftar Kategori
        </h2>

        <p className="text-gray-500">
          Halaman ini akan menampilkan daftar kategori barang.
        </p>
      </div>
    </div>
  );
}
