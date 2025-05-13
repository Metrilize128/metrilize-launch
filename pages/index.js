export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-50 to-white text-center p-6">
      <h1 className="text-4xl font-bold text-green-800 mb-4">Welcome to Metrilize</h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-6">
        Metrilize is a professional platform for carbon and water footprint calculation, ESG metrics, and sustainability reporting.
        Whether you're a company, institution, or consultant, Metrilize helps you track and manage your environmental impacts with precision.
      </p>
      <p className="text-sm text-gray-600 mb-8">
        This platform is developed and operated as an official service of the{' '}
        <a
          href="https://unitedmetric.com"
          className="text-blue-700 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          United Metric Association
        </a>
        , an international NGO based in Austria dedicated to standardized sustainability metrics and transparent ESG reporting.
      </p>
      <div className="flex gap-4">
        <a
          href="/carbon"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Calculate Carbon Footprint
        </a>
        <a
          href="/water"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Calculate Water Footprint
        </a>
      </div>
    </main>
  );
}
