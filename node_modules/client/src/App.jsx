import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [printers, setPrinters] = useState([]);
  const [loading, setLoading] = useState(true);

  // In a real app, this would be mDNS discovery. 
  // For the prototype web client, we'll poll localhost:8000.
  useEffect(() => {
    const scanNetwork = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/status');
        if (res.ok) {
          const data = await res.json();
          setPrinters([{
            id: 'local-sim',
            name: 'Fetch Reference Simulator',
            ip: 'localhost:8000',
            status: data.state,
            supplies: data.supplies
          }]);
        }
      } catch (err) {
        console.log('No printers found or simulator offline.');
        setPrinters([]);
      }
      setLoading(false);
    };

    scanNetwork();
    const interval = setInterval(scanNetwork, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrint = async (ip) => {
    try {
      const res = await fetch(`http://${ip}/api/jobs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/pdf' },
        body: 'mock-pdf-content'
      });
      if (res.ok) {
        alert('Print job submitted successfully!');
      }
    } catch (err) {
      alert('Failed to submit print job.');
    }
  };

  return (
    <div className="dashboard">
      <header>
        <h1>Fetch Dashboard</h1>
        <p className="subtitle">Universal Printing Protocol • Reference Client</p>
      </header>

      {loading ? (
        <div className="loader">Scanning local network...</div>
      ) : printers.length === 0 ? (
        <div className="loader" style={{ color: 'var(--text-muted)' }}>
          No Fetch-compatible printers found. Ensure the simulator is running.
        </div>
      ) : (
        <div className="printers-grid">
          {printers.map(printer => (
            <div key={printer.id} className="printer-card">
              <div className="status-badge">
                <span className="status-dot"></span>
                {printer.status === 'idle' ? 'Ready to Print' : printer.status}
              </div>
              
              <h2 className="printer-name">{printer.name}</h2>
              <p className="subtitle" style={{ fontSize: '0.9rem' }}>{printer.ip}</p>

              <div className="supplies">
                {Object.entries(printer.supplies).map(([color, level]) => (
                  <div key={color} className="supply-item">
                    <span className="supply-label">{color}</span>
                    <div className="supply-bar-bg">
                      <div 
                        className={`supply-bar-fill fill-${color}`} 
                        style={{ width: `${level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="action-btn" onClick={() => handlePrint(printer.ip)}>
                Print Test Page
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
