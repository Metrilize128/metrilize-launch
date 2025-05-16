export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      {/* Section 1 - Factory Hero */}
      <section
        style={{
          backgroundImage: "url('/factory-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          color: '#0a1b35',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>

        {/* Navbar */}
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px 50px' }}>
          <img src="/metrilize-logo.png" alt="Metrilize Logo" style={{ height: '75px' }} />
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center', fontSize: '16px' }}>
            {['Products', 'Solutions', 'Pricing', 'About', 'Login', 'EN'].map((item, index) => (
              <a
                key={index}
                href="#"
                style={{
                  color: '#0a1b35',
                  textDecoration: 'none',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  transition: '0.3s',
                  backgroundColor: 'transparent'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#e0e0e0';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                {item}
              </a>
            ))}
            <button style={{
              backgroundColor: '#f9c841',
              color: '#0a1b35',
              padding: '12px 26px',
              borderRadius: '30px',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer'
            }}>
              Book Demo
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div style={{ padding: '60px 50px', maxWidth: '620px' }}>
          <h1 style={{ fontSize: '40px', fontWeight: 'bold', lineHeight: '1.4', marginBottom: '20px' }}>
            Sustainability Insights <br /> Designed Around Your Needs
          </h1>
          <p style={{ fontSize: '20px', color: '#3c82c2', lineHeight: '1.6', marginBottom: '40px' }}>
            ESG & Footprint Compliance Made Simple with Sustainability Reporting Built In. <br />
            Precision, Expertise, and Clarity in One Platform.
          </p>
          <button style={{
            backgroundColor: '#d4edf9',
            padding: '14px 28px',
            borderRadius: '14px',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer'
          }}>
            Start your journey
          </button>
        </div>
      </section>

      {/* Section 2 - Carbon Hero */}
      <section
        style={{
          backgroundImage: "url('/Carbon-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '85vh',
          display: 'flex',
          alignItems: 'center',
          color: '#1c3a1d',
          padding: '60px 50px'
        }}>
        <div style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
            Measure your Carbon footprint <br /> across your company or product
          </h2>
          <p style={{ fontSize: '16px', marginBottom: '30px', lineHeight: '1.6' }}>
            Professional, data-driven reports that go beyond numbers delivering clear insights and actionable recommendations.<br />
            Built for businesses. Trusted by experts.
          </p>
          <button style={{
            backgroundColor: '#2e5d2e',
            color: 'white',
            padding: '12px 28px',
            borderRadius: '12px',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer'
          }}>
            Book Demo
          </button>
        </div>
      </section>

      {/* Section 3 - Water Hero */}
      <section
        style={{
          backgroundImage: "url('/water-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '85vh',
          display: 'flex',
          alignItems: 'center',
          color: '#015e90',
          padding: '60px 50px'
        }}>
        <div style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
            Understand your Water Impact <br /> From Source to Drain
          </h2>
          <p style={{ fontSize: '16px', marginBottom: '30px', lineHeight: '1.6' }}>
            Track and reduce your water footprint with clarity, from production to wastewater — powered by smart data and sustainability insights.
          </p>
          <button style={{
            backgroundColor: '#00b4d8',
            color: 'white',
            padding: '12px 28px',
            borderRadius: '12px',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer'
          }}>
            Book Demo
          </button>
        </div>
      </section>
    </div>
  );
}
