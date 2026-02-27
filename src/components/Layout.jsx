import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 768) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  }, [screenSize]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar toggle={toggleSidebar} />

      <div style={{ display: 'flex', flex: 1, position: 'relative', overflow: 'hidden' }}>
        
        {showSidebar && screenSize <= 768 && (
          <div
            onClick={() => setShowSidebar(false)}
            style={{
              position: 'fixed',
              top: '60px',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              zIndex: 99,
              animation: 'fadeIn 0.3s ease'
            }}
          />
        )}

        {screenSize > 768 && (
          <div
            style={{
              width: '250px',
              position: 'relative',
              height: '100%',
              backgroundColor: '#ffffff',
              borderRight: '1px solid #d0d8e0',
              overflowY: 'auto'
            }}
          >
            <Sidebar onClose={() => setShowSidebar(false)} />
          </div>
        )}

        {showSidebar && screenSize <= 768 && (
          <div
            style={{
              width: '250px',
              position: 'fixed',
              left: 0,
              top: '60px',
              height: 'calc(100vh - 60px)',
              zIndex: 100,
              animation: 'slideIn 0.3s ease',
              backgroundColor: '#ffffff',
              borderRight: '1px solid #d0d8e0',
              overflowY: 'auto'
            }}
          >
            <Sidebar onClose={() => setShowSidebar(false)} />
          </div>
        )}

        <div
          style={{
            flex: 1,
            padding: screenSize <= 480 ? '0.75rem' : screenSize <= 768 ? '1rem' : '1.5rem',
            backgroundColor: '#f5f6f7',
            overflow: 'auto',
            width: '100%'
          }}
        >
          {children}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Layout;