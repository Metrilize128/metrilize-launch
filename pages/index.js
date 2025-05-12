export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Metrilize</h1>
        <p className="text-gray-700 text-lg">
          Metrilize is a professional platform for carbon and water footprint calculation, ESG metrics, and sustainability reporting.
          Whether you're a company, institution, or consultant, Metrilize helps you track and manage your environmental impacts with precision.
        </p>
        <p className="text-gray-700 text-md">
          This platform is developed and operated as an official service of the{" "}
          <a href="https://www.unitedmetric.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
            United Metric Association
          </a>, an international NGO based in Austria dedicated to standardized sustainability metrics and transparent ESG reporting.
        </p>
      </div>
    </main>
  );
}
