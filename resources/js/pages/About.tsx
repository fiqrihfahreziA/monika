import DashboardLayout from '@/Layouts/DashboardLayout'

export default function About() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Tentang Aplikasi</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <p className="text-gray-600">
          Monika adalah sistem informasi yang dibangun menggunakan Laravel, React, dan Inertia.js.
        </p>
      </div>
    </DashboardLayout>
  )
}