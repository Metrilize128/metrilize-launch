export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 0, margin: 0 }}>
      {/* Navigation */}
      <nav style={{ backgroundColor: '#002C4B', padding: '20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Metrilize Logo</div>
        <div style={{ display: 'flex', gap: '25px', fontSize: '14px' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Products</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Solutions</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Pricing</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Login</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>EN</a>
          <button style={{ backgroundColor: '#F5C518', color: '#002C4B', border: 'none', padding: '10px 20px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }}>
            Book Demo
          </button>
        </div>
      </nav>

      {/* Hero Section 1 */}
      <div style={{ backgroundColor: '#003F6A', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#A2FF00' }}>Sustainability Insights<br />Designed Around Your Needs</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: '#D0E8F2' }}>
          ESG & Footprint Compliance Made Simple.<br />
          Precision, Expertise, and Clarity in One Platform.
        </p>
        <button style={{ marginTop: '30px', backgroundColor: 'white', color: '#003F6A', padding: '10px 20px', border: 'none', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>
          Start your journey
        </button>
        <div style={{ marginTop: '40px', fontSize: '18px', lineHeight: '2' }}>
          <span style={{ margin: '0 15px', color: '#FFFF66' }}>CARBON Footprint</span>
          <span style={{ margin: '0 15px', color: '#00FFFF' }}>LCA</span>
          <span style={{ margin: '0 15px', color: '#FFA500' }}>EPD</span>
          <span style={{ margin: '0 15px', color: '#00FF00' }}>LCC</span>
          <span style={{ margin: '0 15px', color: '#00CED1' }}>WATER Footprint</span>
          <span style={{ margin: '0 15px', color: '#66FFCC' }}>ESG</span>
        </div>
      </div>

      {/* Hero Section 2 - Placeholder */}
      <div style={{ backgroundColor: '#F4F7F9', padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>
          Measure your Carbon footprint across your company or product without the cost or complexity.
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '14px', color: '#555' }}>
          Professional, data-driven reports that go beyond numbers delivering clear insights and actionable recommendations.
          <br />Built for businesses. Trusted by experts.
        </p>
        <button style={{ marginTop: '30px', backgroundColor: '#F5C518', color: '#002C4B', padding: '10px 20px', border: 'none', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>
          Book Demo
        </button>
      </div>
    </div>
  );
}
