import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      {/* Background Section with Overlay Content */}
      <div
        style={{
          backgroundImage: 'url(/factory-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Header Section */}
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 60px',
          }}
        >
          <Image src="/metrilize-logo.png" alt="Metrilize Logo" width={150} height={40} />

          <div style={{ display: 'flex', gap: '30px', fontSize: '16px', fontWeight: 500 }}>
            <a href="#" style={{ color: '#001f3f', textDecoration: 'none' }}>Products</a>
            <a href="#" style={{ color: '#001f3f', textDecoration: 'none' }}>Solutions</a>
            <a href="#" style={{ color: '#001f3f', textDecoration: 'none' }}>Pricing</a>
            <a href="#" style={{ color: '#001f3f', textDecoration: 'none' }}>About</a>
            <a href="#" style={{ color: '#001f3f', textDecoration: 'none' }}>Login</a>
            <a href="#" style={{ color: '#001f3f', textDecoration: 'none' }}>EN</a>
            <button
              style={{
                backgroundColor: '#f9b233',
                borderRadius: '30px',
                padding: '10px 24px',
                border: 'none',
                color: '#001f3f',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Book Demo
            </button>
          </div>
        </nav>

        {/* Hero Text Content */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '60px',
            maxWidth: '600px',
            color: '#001f3f',
          }}
        >
          <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '20px' }}>
            Sustainability Insights <br /> Designed Around Your Needs
          </h1>
          <p style={{ fontSize: '18px', color: '#00a3e0', marginBottom: '30px' }}>
            ESG & Footprint Compliance Made Simple. <br /> Precision, Expertise, and Clarity in One Platform.
          </p>
          <button
            style={{
              backgroundColor: '#d0f0fd',
              borderRadius: '30px',
              padding: '10px 24px',
              border: 'none',
              color: '#001f3f',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Start your journey
          </button>
        </div>
      </div>
    </div>
  );
}
