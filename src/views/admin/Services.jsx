import React from "react";

export default function Services() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Master Jasa</h1>
        <p className="text-gray-500">
          Kelola seluruh data jasa yang tersedia pada sistem POS.
        </p>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">
          Daftar Jasa
        </h2>

        <p className="text-gray-500">
          Halaman ini digunakan untuk mengelola layanan jasa seperti pemasangan,
          servis, dan pekerjaan lainnya.
        </p>
      </div>
    </div>
  );
}
