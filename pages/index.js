export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Metrilize</h1>
      <p className="max-w-2xl text-lg text-gray-700">
        Metrilize is a professional platform for carbon and water footprint calculation, ESG metrics, and sustainability reporting. 
        Whether you're a company, institution, or consultant, Metrilize helps you track and manage your environmental impacts with precision.
      </p>
      <p className="mt-6 text-base text-gray-600">
        This platform is developed and operated as an official service of the{' '}
        <a href="https://www.unitedmetric.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
          United Metric Association
        </a>
        , an international NGO based in Austria dedicated to standardized sustainability metrics and transparent ESG reporting.
      </p>
    </div>
  );
}
