
import DashboardLayout from '../../Layouts/DashboardLayout'

export default function KategoriPenyakitIndex() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Kategori Penyakit
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Kelola kategori penyakit pada aplikasi MonikaApp.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">
          HALAMAN KATEGORI PENYAKIT BERHASIL DIBUKA
        </h2>

        <p className="text-gray-500 mt-2">
          Halaman ini berhasil dimuat. Selanjutnya kita bisa
          menambahkan tabel kategori penyakit.
        </p>
      </div>
    </DashboardLayout>
  )
}
