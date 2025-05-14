export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px' }}>
      {/* Hero Section 1 */}
      <div style={{ marginBottom: '60px', textAlign: 'center' }}>
        <img
          src="/images/metrilize-hero-1.png"
          alt="Metrilize Hero 1"
          style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}
        />
        <h2 style={{ color: '#2c8a42', fontSize: '24px' }}>
          Sustainability Insights<br />Designed Around Your Needs
        </h2>
        <p style={{ color: '#444', maxWidth: '600px', margin: '20px auto' }}>
          ESG & Footprint Compliance Made Simple. Precision, Expertise, and Clarity in One Platform.
        </p>
        <button style={{
          backgroundColor: '#f0f0f0',
          padding: '10px 20px',
          borderRadius: '25px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Start your journey
        </button>
      </div>

      {/* Hero Section 2 */}
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <img
          src="/images/metrilize-hero-2.png"
          alt="Metrilize Hero 2"
          style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}
        />
        <h2 style={{ fontSize: '20px' }}>
          Measure your Carbon footprint across your company or product without the cost or complexity.
        </h2>
        <p style={{ color: '#444', maxWidth: '600px', margin: '20px auto' }}>
          Professional, data-driven reports that go beyond numbers delivering clear insights and actionable recommendations.
          <br />Built for businesses. Trusted by experts.
        </p>
        <button style={{
          backgroundColor: '#f5c518',
          padding: '10px 25px',
          borderRadius: '25px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Book Demo
        </button>
      </div>
    </div>
  );
}
