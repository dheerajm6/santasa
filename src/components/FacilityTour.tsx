import React, { useState } from 'react';
import { Row, Col, Card, Typography, Button, Space } from 'antd';
import { PlayCircleOutlined, EnvironmentOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const FacilityTour: React.FC = () => {
  const [activeCenter, setActiveCenter] = useState<'mysuru' | 'hassan'>('mysuru');

  const centers = {
    mysuru: {
      name: 'Mysuru Center',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
      features: [
        'Class 10,000 IVF Lab',
        'State-of-the-art Operation Theatre',
        'Advanced Embryology Lab',
        'Comfortable Recovery Rooms',
        'Modern Consultation Chambers'
      ],
      address: 'Santasa IVF & Endosurgery Institute, Mysuru',
      established: '2015',
      color: '#ea3288'
    },
    hassan: {
      name: 'Hassan Center',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
      features: [
        'First IVF Center in Hassan District',
        'Dedicated IVF Laboratory',
        'Specialized Fertility OT',
        'Patient-Friendly Environment',
        'Expert Medical Team'
      ],
      address: 'Santasa IVF Center, Hassan',
      established: '2008',
      color: '#7e52a1'
    }
  };

  const currentCenter = centers[activeCenter];

  return (
    <div style={{ 
      padding: '100px 50px',
      background: 'linear-gradient(135deg, #f8f4ff 0%, #fff5fb 100%)',
      position: 'relative'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.03,
        background: `
          radial-gradient(circle at 20% 50%, ${currentCenter.color} 0%, transparent 50%),
          radial-gradient(circle at 80% 50%, ${currentCenter.color} 0%, transparent 50%)
        `,
        transition: 'all 0.5s ease'
      }}></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Title level={2} style={{ 
            color: '#7e52a1',
            fontSize: '36px',
            marginBottom: '20px'
          }}>
            Experience Our World-Class Facilities 🏥
          </Title>
          <Paragraph style={{ 
            fontSize: '18px',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            Take a virtual tour of our state-of-the-art IVF centers in Mysuru and Hassan. 
            See where miracles happen every day.
          </Paragraph>

          {/* Center Selector */}
          <Space size="large">
            <Button
              size="large"
              onClick={() => setActiveCenter('mysuru')}
              style={{
                background: activeCenter === 'mysuru' ? 'linear-gradient(45deg, #ea3288, #ff6b9d)' : 'white',
                color: activeCenter === 'mysuru' ? 'white' : '#ea3288',
                border: `2px solid #ea3288`,
                borderRadius: '25px',
                padding: '0 30px',
                height: '45px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              <EnvironmentOutlined /> Mysuru Center
            </Button>
            <Button
              size="large"
              onClick={() => setActiveCenter('hassan')}
              style={{
                background: activeCenter === 'hassan' ? 'linear-gradient(45deg, #7e52a1, #a084dc)' : 'white',
                color: activeCenter === 'hassan' ? 'white' : '#7e52a1',
                border: `2px solid #7e52a1`,
                borderRadius: '25px',
                padding: '0 30px',
                height: '45px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              <EnvironmentOutlined /> Hassan Center
            </Button>
          </Space>
        </div>

        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} lg={14}>
            <Card
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                border: 'none',
                background: '#000'
              }}
              bodyStyle={{ padding: 0 }}
            >
              <div style={{ 
                position: 'relative',
                paddingBottom: '56.25%', // 16:9 aspect ratio
                height: 0,
                overflow: 'hidden'
              }}>
                {/* Video Placeholder */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(126, 82, 161, 0.1) 0%, rgba(234, 50, 136, 0.1) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '20px'
                }}>
                  <PlayCircleOutlined style={{ 
                    fontSize: '80px', 
                    color: currentCenter.color,
                    transition: 'color 0.3s ease'
                  }} />
                  <Title level={4} style={{ color: '#666', margin: 0 }}>
                    Virtual Tour Coming Soon
                  </Title>
                  <Paragraph style={{ color: '#999' }}>
                    {currentCenter.name} Facility Walkthrough
                  </Paragraph>
                </div>
                {/* When you have actual videos, replace the above div with:
                <iframe
                  src={currentCenter.videoUrl}
                  title={`${currentCenter.name} Virtual Tour`}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                */}
              </div>
            </Card>
          </Col>

          <Col xs={24} lg={10}>
            <div style={{ padding: '20px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: `linear-gradient(45deg, ${currentCenter.color}22, ${currentCenter.color}11)`,
                padding: '8px 16px',
                borderRadius: '20px',
                marginBottom: '20px',
                border: `1px solid ${currentCenter.color}33`
              }}>
                <span style={{ 
                  fontSize: '14px', 
                  color: currentCenter.color, 
                  fontWeight: '600' 
                }}>
                  Established {currentCenter.established}
                </span>
              </div>

              <Title level={3} style={{ 
                color: currentCenter.color,
                marginBottom: '15px',
                transition: 'color 0.3s ease'
              }}>
                {currentCenter.name} Highlights
              </Title>

              <Paragraph style={{ 
                color: '#666',
                fontSize: '16px',
                marginBottom: '30px'
              }}>
                <EnvironmentOutlined /> {currentCenter.address}
              </Paragraph>

              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {currentCenter.features.map((feature, index) => (
                  <div 
                    key={index}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      gap: '12px',
                      opacity: 0,
                      animation: `fadeInUp 0.5s ease forwards`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <CheckCircleOutlined style={{ 
                      color: currentCenter.color, 
                      fontSize: '20px',
                      marginTop: '2px',
                      transition: 'color 0.3s ease'
                    }} />
                    <span style={{ 
                      color: '#444',
                      fontSize: '15px',
                      lineHeight: '1.6'
                    }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </Space>

              <Button
                type="primary"
                size="large"
                icon={<PlayCircleOutlined />}
                style={{
                  marginTop: '30px',
                  background: `linear-gradient(45deg, ${currentCenter.color}, ${currentCenter.color}dd)`,
                  border: 'none',
                  borderRadius: '10px',
                  height: '48px',
                  fontSize: '16px',
                  fontWeight: '600',
                  width: '100%',
                  transition: 'all 0.3s ease'
                }}
              >
                Schedule {currentCenter.name.split(' ')[0]} Visit
              </Button>
            </div>
          </Col>
        </Row>
      </div>

    </div>
  );
};

export default FacilityTour;