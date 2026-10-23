
import { useState } from 'react'
import DashboardLayout from '@/Layouts/DashboardLayout'

type Puskesmas = {
  id: number
  nama: string
  kode: string
  alamat: string
  kecamatan: string
  telepon: string
  status: 'Aktif' | 'Nonaktif'
}

const dataAwal: Puskesmas[] = [
  {
    id: 1,
    nama: 'Puskesmas Bangkalan',
    kode: 'PKM-001',
    alamat: 'Jl. Kesehatan No. 10',
    kecamatan: 'Bangkalan',
    telepon: '031-3090001',
    status: 'Aktif',
  },
  {
    id: 2,
    nama: 'Puskesmas Arosbaya',
    kode: 'PKM-002',
    alamat: 'Jl. Raya Arosbaya',
    kecamatan: 'Arosbaya',
    telepon: '031-3090002',
    status: 'Aktif',
  },
  {
    id: 3,
    nama: 'Puskesmas Kamal',
    kode: 'PKM-003',
    alamat: 'Jl. Raya Kamal',
    kecamatan: 'Kamal',
    telepon: '031-3090003',
    status: 'Nonaktif',
  },
]

export default function PuskesmasIndex() {
  const [data, setData] = useState(dataAwal)
  const [pencarian, setPencarian] = useState('')
  const [modalBuka, setModalBuka] = useState(false)
  const [editId, setEditId] = useState<number | null>(null)
  const [form, setForm] = useState({
    nama: '',
    alamat: '',
    kecamatan: '',
    telepon: '',
    status: 'Aktif' as 'Aktif' | 'Nonaktif',
  })

  const hasilFilter = data.filter((item) =>
    `${item.nama} ${item.kode} ${item.kecamatan}`
      .toLowerCase()
      .includes(pencarian.toLowerCase()),
  )

  function bukaTambah() {
    setEditId(null)
    setForm({
      nama: '',
      alamat: '',
      kecamatan: '',
      telepon: '',
      status: 'Aktif',
    })
    setModalBuka(true)
  }

  function bukaEdit(item: Puskesmas) {
    setEditId(item.id)
    setForm({
      nama: item.nama,
      alamat: item.alamat,
      kecamatan: item.kecamatan,
      telepon: item.telepon,
      status: item.status,
    })
    setModalBuka(true)
  }

  function simpan(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!form.nama.trim() || !form.kecamatan.trim()) {
      alert('Nama puskesmas dan kecamatan wajib diisi.')
      return
    }

    if (editId !== null) {
      setData((sebelumnya) =>
        sebelumnya.map((item) =>
          item.id === editId ? { ...item, ...form } : item,
        ),
      )
    } else {
      setData((sebelumnya) => [
        ...sebelumnya,
        {
          id: Math.max(0, ...sebelumnya.map((item) => item.id)) + 1,
          kode: `PKM-${String(sebelumnya.length + 1).padStart(3, '0')}`,
          ...form,
        },
      ])
    }

    setModalBuka(false)
  }

  function hapus(id: number) {
    if (window.confirm('Yakin ingin menghapus data puskesmas ini?')) {
      setData((sebelumnya) => sebelumnya.filter((item) => item.id !== id))
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Data Puskesmas
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Kelola informasi dan status puskesmas.
            </p>
          </div>

          <button
            onClick={bukaTambah}
            className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            + Tambah Puskesmas
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Puskesmas</p>
            <p className="mt-2 text-3xl font-bold text-gray-800">
              {data.length}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Puskesmas Aktif</p>
            <p className="mt-2 text-3xl font-bold text-green-600">
              {data.filter((item) => item.status === 'Aktif').length}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Puskesmas Nonaktif</p>
            <p className="mt-2 text-3xl font-bold text-red-500">
              {data.filter((item) => item.status === 'Nonaktif').length}
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-gray-200 p-5 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-semibold text-gray-800">Daftar Puskesmas</h2>

            <input
              type="text"
              value={pencarian}
              onChange={(e) => setPencarian(e.target.value)}
              placeholder="Cari nama, kode, kecamatan..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:max-w-xs"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-5 py-4">No.</th>
                  <th className="px-5 py-4">Nama Puskesmas</th>
                  <th className="px-5 py-4">Kecamatan</th>
                  <th className="px-5 py-4">Telepon</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4 text-right">Aksi</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {hasilFilter.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-5 py-4 text-gray-500">{index + 1}</td>
                    <td className="px-5 py-4">
                      <p className="font-semibold text-gray-800">{item.nama}</p>
                      <p className="mt-1 text-xs text-gray-500">
                        {item.kode} · {item.alamat}
                      </p>
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      {item.kecamatan}
                    </td>
                    <td className="px-5 py-4 text-gray-600">{item.telepon || '-'}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          item.status === 'Aktif'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button
                        onClick={() => bukaEdit(item)}
                        className="mr-3 font-medium text-blue-600 hover:text-blue-800"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => hapus(item.id)}
                        className="font-medium text-red-600 hover:text-red-800"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}

                {hasilFilter.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-5 py-12 text-center text-gray-500">
                      Data puskesmas tidak ditemukan.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="border-t border-gray-200 px-5 py-3 text-xs text-gray-500">
            Menampilkan {hasilFilter.length} dari {data.length} data
          </div>
        </div>
      </div>

      {modalBuka && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-800">
                {editId !== null ? 'Edit Puskesmas' : 'Tambah Puskesmas'}
              </h2>
              <button
                onClick={() => setModalBuka(false)}
                className="text-2xl text-gray-400 hover:text-gray-700"
                aria-label="Tutup"
              >
                ×
              </button>
            </div>

            <form onSubmit={simpan} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Nama Puskesmas *
                </label>
                <input
                  required
                  value={form.nama}
                  onChange={(e) => setForm({ ...form, nama: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                  placeholder="Contoh: Puskesmas Bangkalan"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Kecamatan *
                </label>
                <input
                  required
                  value={form.kecamatan}
                  onChange={(e) => setForm({ ...form, kecamatan: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                  placeholder="Nama kecamatan"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Alamat
                </label>
                <textarea
                  value={form.alamat}
                  onChange={(e) => setForm({ ...form, alamat: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                  rows={3}
                  placeholder="Alamat lengkap"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Nomor Telepon
                </label>
                <input
                  value={form.telepon}
                  onChange={(e) => setForm({ ...form, telepon: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                  placeholder="Nomor telepon"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  value={form.status}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      status: e.target.value as 'Aktif' | 'Nonaktif',
                    })
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Nonaktif">Nonaktif</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 border-t border-gray-100 pt-4">
                <button
                  type="button"
                  onClick={() => setModalBuka(false)}
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
