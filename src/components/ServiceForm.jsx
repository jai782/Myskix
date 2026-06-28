import React, { useState } from "react";

export default function ServiceForm({ onSave }) {
  const [form, setForm] = useState({
    nama: "",
    harga: "",
    estimasi: "",
    deskripsi: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nama || !form.harga) {
      alert("Nama jasa dan harga wajib diisi!");
      return;
    }

    if (onSave) {
      onSave(form);
    }

    setForm({
      nama: "",
      harga: "",
      estimasi: "",
      deskripsi: "",
    });
  };

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold">
        Tambah Jasa
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="mb-2 block text-sm font-medium">
            Nama Jasa
          </label>

          <input
            type="text"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-2"
            placeholder="Contoh: Pemasangan Lampu LED"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Harga
          </label>

          <input
            type="number"
            name="harga"
            value={form.harga}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-2"
            placeholder="50000"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Estimasi Pengerjaan
          </label>

          <input
            type="text"
            name="estimasi"
            value={form.estimasi}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-2"
            placeholder="30 Menit"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Deskripsi
          </label>

          <textarea
            rows="4"
            name="deskripsi"
            value={form.deskripsi}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-2"
            placeholder="Deskripsi jasa..."
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700"
        >
          Simpan Jasa
        </button>

      </form>
    </div>
  );
}
