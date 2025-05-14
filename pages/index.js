export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '0', margin: '0' }}>

      {/* Hero Section 1 */}
      <div style={{ position: 'relative', textAlign: 'left', color: 'white' }}>
        <img
          src="/metrilize-hero-1.png"
          alt="Metrilize Hero 1"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          transform: 'translateY(-50%)',
          maxWidth: '500px'
        }}>
          <h2 style={{ color: '#B6FF6F', fontSize: '24px' }}>
            Sustainability Insights<br />
            Designed Around Your Needs
          </h2>
          <p style={{ color: '#ccc' }}>
            ESG & Footprint Compliance Made Simple.<br />
            Precision, Expertise, and Clarity in One Platform.
          </p>
          <button style={{
            backgroundColor: '#f0f0f0',
            padding: '10px 20px',
            borderRadius: '25px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: '10px'
          }}>
            Start your journey
          </button>
        </div>
      </div>

      {/* Hero Section 2 */}
      <div style={{ position: 'relative', textAlign: 'left', color: '#000' }}>
        <img
          src="/metrilize-hero-2.png"
          alt="Metrilize Hero 2"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          transform: 'translateY(-50%)',
          maxWidth: '500px'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>
            Measure your Carbon footprint across your company or product without the cost or complexity.
          </h2>
          <p style={{ color: '#333', fontSize: '14px' }}>
            Professional, data-driven reports that go beyond numbers delivering clear insights and actionable recommendations.<br />
            Built for businesses. Trusted by experts.
          </p>
          <button style={{
            backgroundColor: '#F3C543',
            padding: '10px 20px',
            borderRadius: '25px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: '10px'
          }}>
            Book Demo
          </button>
        </div>
      </div>

    </div>
  );
}
