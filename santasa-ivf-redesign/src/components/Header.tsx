import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu, Button, Space, Row, Col, Drawer } from 'antd';
import { PhoneOutlined, MailOutlined, CalendarOutlined, MenuOutlined } from '@ant-design/icons';
import santasaLogo from '../assets/logos/santasa-ivf.png';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPhone, setCurrentPhone] = useState(0);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const phoneNumbers = [
    { number: '9620099936', location: 'Mysuru', color: '#ea3288' },
    { number: '9620099969', location: 'Hassan', color: '#7e52a1' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhone(prev => (prev + 1) % phoneNumbers.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [phoneNumbers.length]);

  const handleMenuClick = (key: string) => {
    // Close mobile menu when item is clicked
    setMobileMenuVisible(false);
    
    switch (key) {
      case 'home':
        navigate('/');
        break;
      case 'about':
        navigate('/about');
        break;
      case 'services':
        if (location.pathname === '/') {
          // If on homepage, scroll to services section
          const servicesElement = document.getElementById('services');
          if (servicesElement) {
            servicesElement.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // If on other page, navigate to homepage with services hash
          navigate('/#services');
        }
        break;
      case 'ivf-process':
        navigate('/ivf-process');
        break;
      case 'doctors':
        navigate('/doctors');
        break;
      case 'faq':
        navigate('/faq');
        break;
      case 'careers':
        navigate('/careers');
        break;
      case 'contact':
        if (location.pathname === '/') {
          // If on homepage, scroll to contact section
          const contactElement = document.getElementById('contact');
          if (contactElement) {
            contactElement.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // If on other page, navigate to homepage with contact hash
          navigate('/#contact');
        }
        break;
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <>
      <AntHeader style={{ padding: 0, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <Row justify="space-between" align="middle" style={{ padding: '0 20px' }}>
          {/* Logo */}
          <Col xs={18} md={6}>
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={handleLogoClick}
            >
              <img 
                src={santasaLogo} 
                alt="Santasa IVF - Bringing Baby Bliss" 
                style={{ 
                  height: '45px',
                  width: 'auto',
                  marginRight: '8px'
                }}
              />
              <div style={{ 
                fontSize: '11px', 
                color: '#666',
                fontStyle: 'italic',
                display: window.innerWidth < 768 ? 'none' : 'block'
              }}>
                Bringing Baby Bliss
              </div>
            </div>
          </Col>
          
          {/* Desktop Menu */}
          <Col xs={0} md={12}>
            <Menu 
              mode="horizontal" 
              style={{ 
                border: 'none', 
                fontSize: '15px',
                justifyContent: 'center',
                display: 'flex'
              }}
              selectedKeys={
                location.pathname === '/about' ? ['about'] : 
                location.pathname === '/doctors' ? ['doctors'] :
                location.pathname === '/ivf-process' ? ['ivf-process'] :
                location.pathname === '/faq' ? ['faq'] :
                location.pathname === '/careers' ? ['careers'] : []
              }
              onClick={({ key }) => handleMenuClick(key)}
              overflowedIndicator={null}
            >
              {location.pathname !== '/' && <Menu.Item key="home" style={{ padding: '0 8px' }}>Home</Menu.Item>}
              <Menu.Item key="about" style={{ padding: '0 8px' }}>About</Menu.Item>
              <Menu.Item key="services" style={{ padding: '0 8px' }}>Services</Menu.Item>
              <Menu.Item key="ivf-process" style={{ padding: '0 8px' }}>IVF Process</Menu.Item>
              <Menu.Item key="doctors" style={{ padding: '0 8px' }}>Doctors</Menu.Item>
              <Menu.Item key="careers" style={{ padding: '0 8px' }}>Careers</Menu.Item>
              <Menu.Item key="contact" style={{ padding: '0 8px' }}>Contact</Menu.Item>
            </Menu>
          </Col>
          
          {/* Desktop Contact Info */}
          <Col xs={0} md={6}>
            <Space style={{ justifyContent: 'flex-end', width: '100%' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                fontSize: '13px'
              }}>
                <PhoneOutlined style={{ color: phoneNumbers[currentPhone].color }} />
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '4px',
                  transition: 'all 0.5s ease',
                  opacity: 1
                }}>
                  <span style={{ fontWeight: '500' }}>
                    {phoneNumbers[currentPhone].number}
                  </span>
                  <span style={{ 
                    fontSize: '10px',
                    color: phoneNumbers[currentPhone].color,
                    fontWeight: '600',
                    transition: 'color 0.5s ease'
                  }}>
                    ({phoneNumbers[currentPhone].location})
                  </span>
                </div>
              </div>
              <Button 
                type="primary" 
                icon={<CalendarOutlined />}
                size="small"
                style={{ 
                  background: 'linear-gradient(45deg, #7e52a1, #ea3288)',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '13px'
                }}
              >
                Book Now
              </Button>
            </Space>
          </Col>

          {/* Mobile Menu Button */}
          <Col xs={6} md={0} style={{ textAlign: 'right' }}>
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setMobileMenuVisible(true)}
              style={{
                fontSize: '18px',
                color: '#7e52a1',
                border: 'none',
                height: '40px',
                width: '40px'
              }}
            />
          </Col>
        </Row>
      </AntHeader>

      {/* Mobile Menu Drawer */}
      <Drawer
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={santasaLogo} 
              alt="Santasa IVF" 
              style={{ height: '30px', marginRight: '10px' }}
            />
            <span style={{ color: '#7e52a1', fontWeight: '600' }}>Santasa IVF</span>
          </div>
        }
        placement="right"
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
        width={280}
        bodyStyle={{ padding: 0 }}
        headerStyle={{ borderBottom: '1px solid #f0f0f0' }}
      >
        <Menu
          mode="vertical"
          selectedKeys={
            location.pathname === '/about' ? ['about'] : 
            location.pathname === '/doctors' ? ['doctors'] :
            location.pathname === '/ivf-process' ? ['ivf-process'] :
            location.pathname === '/faq' ? ['faq'] :
            location.pathname === '/careers' ? ['careers'] : []
          }
          onClick={({ key }) => handleMenuClick(key)}
          style={{ border: 'none' }}
        >
          {location.pathname !== '/' && <Menu.Item key="home">🏠 Home</Menu.Item>}
          <Menu.Item key="about">ℹ️ About</Menu.Item>
          <Menu.Item key="services">🏥 Services</Menu.Item>
          <Menu.Item key="ivf-process">🧬 IVF Process</Menu.Item>
          <Menu.Item key="doctors">👨‍⚕️ Doctors</Menu.Item>
          <Menu.Item key="careers">💼 Careers</Menu.Item>
          <Menu.Item key="contact">📞 Contact</Menu.Item>
        </Menu>
        
        {/* Mobile Contact Info */}
        <div style={{ 
          padding: '20px', 
          borderTop: '1px solid #f0f0f0',
          backgroundColor: '#f8f4ff'
        }}>
          <div style={{ marginBottom: '15px' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              marginBottom: '8px'
            }}>
              <PhoneOutlined style={{ color: '#ea3288' }} />
              <span style={{ fontWeight: '500', fontSize: '14px' }}>
                {phoneNumbers[0].number} (Mysuru)
              </span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px'
            }}>
              <PhoneOutlined style={{ color: '#7e52a1' }} />
              <span style={{ fontWeight: '500', fontSize: '14px' }}>
                {phoneNumbers[1].number} (Hassan)
              </span>
            </div>
          </div>
          <Button 
            type="primary" 
            icon={<CalendarOutlined />}
            block
            style={{ 
              background: 'linear-gradient(45deg, #7e52a1, #ea3288)',
              border: 'none',
              borderRadius: '6px',
              height: '40px'
            }}
          >
            Book Appointment
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default Header;