// pages/index.js

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/factory-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '40px',
        fontFamily: 'Arial, sans-serif',
        color: '#002C4B',
      }}
    >
      {/* Navigation Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src="/metrilize-logo.png" alt="Metrilize Logo" style={{ height: '50px' }} />
        <nav style={{ display: 'flex', gap: '24px' }}>
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Login</a>
          <a href="#">EN</a>
          <button style={{
            backgroundColor: '#FFD447',
            color: '#002C4B',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '20px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Book Demo
          </button>
        </nav>
      </div>

      {/* Hero Section */}
      <div style={{ marginTop: '80px', maxWidth: '600px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>
          Sustainability Insights<br />
          Designed Around Your Needs
        </h1>
        <p style={{ marginTop: '20px', fontSize: '18px', color: '#008DCB' }}>
          ESG & Footprint Compliance Made Simple.<br />
          Precision, Expertise, and Clarity in One Platform.
        </p>
        <button style={{
          marginTop: '20px',
          backgroundColor: '#DAF2FC',
          color: '#002C4B',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '25px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Start your journey
        </button>
      </div>
    </div>
  );
}
