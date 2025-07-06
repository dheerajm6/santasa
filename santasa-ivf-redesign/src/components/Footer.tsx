import React from 'react';
import { Layout, Row, Col, Typography, Space, Divider } from 'antd';
import { 
  PhoneOutlined, 
  MailOutlined, 
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  HeartOutlined
} from '@ant-design/icons';
import santasaLogo from '../assets/logos/santasa-ivf.png';

const { Footer: AntFooter } = Layout;
const { Title, Paragraph } = Typography;

const Footer: React.FC = () => {
  return (
    <AntFooter style={{ 
      background: '#7e52a1',
      color: 'white',
      padding: '60px 50px 20px 50px'
    }}>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={12} lg={6}>
          <Space direction="vertical" size="middle">
            <div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <img 
                  src={santasaLogo} 
                  alt="Santasa IVF - Bringing Baby Bliss" 
                  style={{ 
                    height: '60px',
                    width: 'auto',
                    filter: 'brightness(0) invert(1)' // Makes logo white
                  }}
                />
              </div>
            </div>
            
            <Paragraph style={{ 
              color: 'rgba(255,255,255,0.8)',
              fontSize: '14px',
              lineHeight: '1.6'
            }}>
              Leading fertility clinic providing world-class reproductive healthcare 
              with compassionate care and advanced technology.
            </Paragraph>
            
            <Space size="middle">
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '10px',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <FacebookOutlined style={{ fontSize: '18px', color: '#FFD700' }} />
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '10px',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <InstagramOutlined style={{ fontSize: '18px', color: '#FFD700' }} />
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '10px',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <TwitterOutlined style={{ fontSize: '18px', color: '#FFD700' }} />
              </div>
            </Space>
          </Space>
        </Col>
        
        <Col xs={24} sm={12} lg={6}>
          <Space direction="vertical" size="middle">
            <Title level={4} style={{ 
              color: 'white',
              fontSize: '18px',
              marginBottom: '20px'
            }}>
              Quick Links
            </Title>
            
            <Space direction="vertical" size="small">
              <a href="#home" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Home</a>
              <a href="#about" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>About Us</a>
              <a href="#services" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Services</a>
              <a href="#doctors" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Our Doctors</a>
              <a href="#faq" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>FAQ</a>
              <a href="#contact" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Contact</a>
            </Space>
          </Space>
        </Col>
        
        <Col xs={24} sm={12} lg={6}>
          <Space direction="vertical" size="middle">
            <Title level={4} style={{ 
              color: 'white',
              fontSize: '18px',
              marginBottom: '20px'
            }}>
              Services
            </Title>
            
            <Space direction="vertical" size="small">
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>IVF & ICSI</span>
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>Embryo Biopsy</span>
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>Fertility Surgery</span>
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>Cryopreservation</span>
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>Sexual Health</span>
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>Menopause Care</span>
            </Space>
          </Space>
        </Col>
        
        <Col xs={24} sm={12} lg={6}>
          <Space direction="vertical" size="middle">
            <Title level={4} style={{ 
              color: 'white',
              fontSize: '18px',
              marginBottom: '20px'
            }}>
              Contact Info
            </Title>
            
            <Space direction="vertical" size="small">
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                padding: '8px 0'
              }}>
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '8px',
                  borderRadius: '8px',
                  marginRight: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <PhoneOutlined style={{ 
                    color: '#FFD700', 
                    fontSize: '16px'
                  }} />
                </div>
                <div>
                  <span style={{ color: 'white', fontSize: '14px', fontWeight: '500' }}>9620099936 (Mysuru)</span>
                  <br />
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>9620099969 (Hassan)</span>
                </div>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                padding: '8px 0'
              }}>
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '8px',
                  borderRadius: '8px',
                  marginRight: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MailOutlined style={{ 
                    color: '#FFD700', 
                    fontSize: '16px'
                  }} />
                </div>
                <div>
                  <span style={{ color: 'white', fontSize: '14px', fontWeight: '500' }}>hassan@santasaivf.com</span>
                  <br />
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>mysuru@santasaivf.com</span>
                </div>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start',
                padding: '8px 0'
              }}>
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '8px',
                  borderRadius: '8px',
                  marginRight: '12px',
                  marginTop: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <EnvironmentOutlined style={{ 
                    color: '#FFD700', 
                    fontSize: '16px'
                  }} />
                </div>
                <span style={{ color: 'white', fontSize: '14px', fontWeight: '500' }}>
                  Mysuru & Hassan<br />
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: '400' }}>Karnataka, India</span>
                </span>
              </div>
            </Space>
          </Space>
        </Col>
      </Row>
      
      <Divider style={{ borderColor: 'rgba(255,255,255,0.2)', margin: '40px 0 20px 0' }} />
      
      <Row justify="space-between" align="middle">
        <Col>
          <Paragraph style={{ 
            color: 'rgba(255,255,255,0.6)',
            fontSize: '12px',
            margin: 0
          }}>
            © 2025 Santasa IVF & Endosurgery Institute. All rights reserved.
          </Paragraph>
        </Col>
        <Col>
          <Space style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', alignItems: 'center' }}>
            <span>Made with</span>
            <HeartOutlined style={{ 
              color: '#FFD700', 
              fontSize: '14px',
              margin: '0 2px'
            }} />
            <span>for families</span>
          </Space>
        </Col>
      </Row>
    </AntFooter>
  );
};

export default Footer;