export default function Home() {
  return (
    <div style={{
      backgroundImage: "url('/factory-bg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      color: '#0a1b35'
    }}>
      {/* Navbar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '30px 50px'
      }}>
        <img src="/metrilize-logo.png" alt="Metrilize Logo" style={{ height: '50px' }} />
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center', fontSize: '16px' }}>
          <a href="#" style={{ color: '#0a1b35', textDecoration: 'none' }}>Products</a>
          <a href="#" style={{ color: '#0a1b35', textDecoration: 'none' }}>Solutions</a>
          <a href="#" style={{ color: '#0a1b35', textDecoration: 'none' }}>Pricing</a>
          <a href="#" style={{ color: '#0a1b35', textDecoration: 'none' }}>About</a>
          <a href="#" style={{ color: '#0a1b35', textDecoration: 'none' }}>Login</a>
          <a href="#" style={{ color: '#0a1b35', textDecoration: 'none' }}>EN</a>
          <button style={{
            backgroundColor: '#f9c841',
            color: '#0a1b35',
            padding: '10px 22px',
            borderRadius: '30px',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer'
          }}>
            Book Demo
          </button>
        </div>
      </nav>

      {/* Hero Text */}
      <div style={{
        padding: '60px 50px',
        maxWidth: '600px'
      }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          lineHeight: '1.4',
          marginBottom: '20px'
        }}>
          Sustainability Insights <br /> Designed Around Your Needs
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#3c82c2',
          lineHeight: '1.6',
          marginBottom: '40px'
        }}>
          ESG & Footprint Compliance Made Simple. <br />
          Precision, Expertise, and Clarity in One Platform.
        </p>
        <button style={{
          backgroundColor: '#d4edf9',
          padding: '12px 24px',
          borderRadius: '12px',
          fontWeight: 'bold',
          border: 'none',
          cursor: 'pointer'
        }}>
          Start your journey
        </button>
      </div>
    </div>
  );
}
