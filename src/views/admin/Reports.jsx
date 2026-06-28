import React from "react";
import ReportFilter from "../../components/ReportFilter";
import ReportCard from "../../components/ReportCard";
import SalesChart from "../../components/SalesChart";
import ReportTable from "../../components/ReportTable";

export default function Reports() {
  const handleFilter = (filter) => {
    console.log("Filter:", filter);
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Laporan
        </h1>

        <p className="text-gray-500">
          Lihat ringkasan penjualan dan aktivitas sistem.
        </p>
      </div>

      {/* Filter */}
      <ReportFilter onFilter={handleFilter} />

      {/* Statistik */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <ReportCard
          title="Total Penjualan"
          value="Rp 15.500.000"
          color="text-green-600"
          icon="💰"
        />

        <ReportCard
          title="Total Transaksi"
          value="126"
          color="text-blue-600"
          icon="🛒"
        />

        <ReportCard
          title="Kategori"
          value="18"
          color="text-orange-600"
          icon="📦"
        />

        <ReportCard
          title="Jasa"
          value="9"
          color="text-purple-600"
          icon="🛠️"
        />
      </div>

      {/* Grafik */}
      <SalesChart />

      {/* Tabel */}
      <ReportTable />
    </div>
  );
}
