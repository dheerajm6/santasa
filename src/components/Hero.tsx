import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Typography, Space } from 'antd';
import { PhoneOutlined, CalendarOutlined, HeartOutlined, StarOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Hero: React.FC = () => {
  const [heartbeat, setHeartbeat] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartbeat(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const emotionalQuotes = [
    "Every heartbeat holds hope",
    "Dreams bloom into reality",
    "Love creates miracles",
    "Hope grows families"
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % emotionalQuotes.length);
    }, 4000);
    return () => clearInterval(quoteInterval);
  }, [emotionalQuotes.length]);

  return (
    <div style={{ 
      position: 'relative',
      background: 'linear-gradient(135deg, #f0f4ff 0%, #fef7f7 50%, #f8f4ff 100%)',
      minHeight: '100vh',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 15% 25%, rgba(126, 82, 161, 0.08) 0%, transparent 40%),
          radial-gradient(circle at 85% 75%, rgba(234, 50, 136, 0.08) 0%, transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.05) 0%, transparent 30%)
        `,
        animation: 'gentleMove 25s ease-in-out infinite'
      }}></div>

      {/* Floating Hearts */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            fontSize: `${12 + (i % 4) * 4}px`,
            opacity: 0.15,
            animation: `gentleFloat ${12 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 1.5}s`,
            top: `${5 + (i * 8)}%`,
            left: `${3 + (i * 8)}%`,
            zIndex: 1,
            color: i % 3 === 0 ? '#7e52a1' : i % 3 === 1 ? '#ea3288' : '#FFD700'
          }}
        >
          {['💝', '🌟', '✨', '💫', '🤍', '💛'][i % 6]}
        </div>
      ))}

      <div style={{ 
        width: '100%', 
        maxWidth: '1400px', 
        margin: '0 auto',
        padding: 'clamp(20px, 5vw, 50px)',
        position: 'relative', 
        zIndex: 2 
      }}>
        <Row justify="space-between" align="middle" gutter={[60, 60]}>
          {/* Left Content */}
          <Col xs={24} lg={13}>
            <div style={{ maxWidth: '650px' }}>
              {/* Emotional Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'linear-gradient(45deg, rgba(126, 82, 161, 0.1), rgba(234, 50, 136, 0.1))',
                padding: 'clamp(8px, 2vw, 12px) clamp(16px, 4vw, 24px)',
                borderRadius: '50px',
                marginBottom: 'clamp(20px, 5vw, 35px)',
                border: '1px solid rgba(126, 82, 161, 0.15)',
                animation: 'softGlow 3s ease-in-out infinite'
              }}>
                <HeartOutlined style={{ 
                  color: '#ea3288', 
                  marginRight: '8px',
                  fontSize: '16px',
                  animation: heartbeat ? 'heartPulse 0.6s ease' : 'none'
                }} />
                <span style={{ 
                  fontSize: '14px', 
                  color: '#7e52a1', 
                  fontWeight: '600',
                  letterSpacing: '0.5px'
                }}>
                  Where Dreams Become Families
                </span>
              </div>

              {/* Main Headline */}
              <Title level={1} style={{ 
                fontSize: 'clamp(32px, 8vw, 64px)', 
                color: '#2c1810',
                marginBottom: '25px',
                lineHeight: '1.1',
                fontWeight: '800',
                letterSpacing: '-1px'
              }}>
                Your Journey to{' '}
                <span style={{
                  background: 'linear-gradient(45deg, #7e52a1, #ea3288, #FFD700)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'gradientShift 4s ease-in-out infinite'
                }}>
                  Parenthood
                </span>
                <br/>
                Begins with{' '}
                <span style={{ color: '#ea3288' }}>Hope</span>
              </Title>

              {/* Emotional Subtitle */}
              <div style={{
                fontSize: '22px',
                color: '#7e52a1',
                marginBottom: '30px',
                fontWeight: '500',
                fontStyle: 'italic',
                opacity: 0.9,
                animation: 'fadeSlide 4s ease-in-out infinite',
                minHeight: '28px'
              }}>
                "{emotionalQuotes[currentQuote]}"
              </div>
              
              <Paragraph style={{ 
                fontSize: '18px', 
                color: '#5a5a5a',
                marginBottom: '40px',
                lineHeight: '1.8',
                fontWeight: '400'
              }}>
                At Santasa IVF, we understand that every family's story is unique. With over 16 years of compassionate care, 
                we've helped thousands of couples experience the joy of holding their little miracle.
              </Paragraph>

              {/* Emotional Stats */}
              <div style={{ 
                display: 'flex', 
                gap: 'clamp(20px, 5vw, 50px)', 
                marginBottom: 'clamp(25px, 5vw, 45px)',
                flexWrap: 'wrap',
                background: 'rgba(255,255,255,0.7)',
                padding: 'clamp(15px, 4vw, 25px) clamp(20px, 5vw, 35px)',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.3)'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: 'clamp(24px, 6vw, 32px)', 
                    fontWeight: 'bold', 
                    color: '#ea3288',
                    marginBottom: '5px'
                  }}>1000s</div>
                  <div style={{ 
                    fontSize: 'clamp(11px, 2.5vw, 13px)', 
                    color: '#666',
                    fontWeight: '500'
                  }}>Tiny Miracles</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: 'clamp(24px, 6vw, 32px)', 
                    fontWeight: 'bold', 
                    color: '#7e52a1',
                    marginBottom: '5px'
                  }}>16+</div>
                  <div style={{ 
                    fontSize: 'clamp(11px, 2.5vw, 13px)', 
                    color: '#666',
                    fontWeight: '500'
                  }}>Years of Care</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: 'clamp(24px, 6vw, 32px)', 
                    fontWeight: 'bold', 
                    color: '#7e52a1',
                    marginBottom: '5px'
                  }}>2</div>
                  <div style={{ 
                    fontSize: 'clamp(11px, 2.5vw, 13px)', 
                    color: '#666',
                    fontWeight: '500'
                  }}>Loving Centers</div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <Space size="large" wrap>
                <Button 
                  type="primary" 
                  size="large"
                  icon={<CalendarOutlined />}
                  style={{ 
                    background: 'linear-gradient(45deg, #7e52a1, #ea3288)',
                    border: 'none',
                    borderRadius: '50px',
                    height: 'clamp(50px, 10vw, 60px)',
                    fontSize: 'clamp(14px, 3vw, 16px)',
                    fontWeight: '600',
                    paddingLeft: 'clamp(20px, 5vw, 35px)',
                    paddingRight: 'clamp(20px, 5vw, 35px)',
                    boxShadow: '0 12px 35px rgba(126, 82, 161, 0.4)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 16px 45px rgba(126, 82, 161, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0px)';
                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(126, 82, 161, 0.4)';
                  }}
                >
                  Begin Your Journey
                </Button>
                
                <Button 
                  size="large"
                  icon={<PhoneOutlined />}
                  style={{ 
                    border: '2px solid #7e52a1',
                    color: '#7e52a1',
                    borderRadius: '50px',
                    height: 'clamp(50px, 10vw, 60px)',
                    fontSize: 'clamp(14px, 3vw, 16px)',
                    fontWeight: '600',
                    paddingLeft: 'clamp(20px, 5vw, 35px)',
                    paddingRight: 'clamp(20px, 5vw, 35px)',
                    background: 'rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#7e52a1';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.8)';
                    e.currentTarget.style.color = '#7e52a1';
                    e.currentTarget.style.transform = 'translateY(0px)';
                  }}
                >
                  Talk to Our Experts
                </Button>
              </Space>
            </div>
          </Col>
          
          {/* Right Visual */}
          <Col xs={24} lg={11}>
            <div style={{ 
              position: 'relative',
              height: 'clamp(400px, 80vw, 650px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Main Circle - Journey of Love */}
              <div style={{
                position: 'relative',
                width: 'clamp(300px, 70vw, 550px)',
                height: 'clamp(300px, 70vw, 550px)',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,244,255,0.9) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 40px 100px rgba(126, 82, 161, 0.15)',
                border: '1px solid rgba(255,255,255,0.5)',
                backdropFilter: 'blur(20px)',
                overflow: 'hidden'
              }}>
                {/* Rotating Gradient Ring */}
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, rgba(126, 82, 161, 0.1), rgba(234, 50, 136, 0.1), rgba(255, 215, 0, 0.1), rgba(126, 82, 161, 0.1))',
                  animation: 'slowRotate 40s linear infinite',
                  opacity: 0.7
                }}></div>

                {/* Inner Content Circle */}
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  textAlign: 'center',
                  background: 'rgba(255,255,255,0.95)',
                  borderRadius: '50%',
                  width: 'clamp(240px, 50vw, 340px)',
                  height: 'clamp(240px, 50vw, 340px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.08)',
                  border: '2px solid rgba(126, 82, 161, 0.1)'
                }}>
                  {/* Journey Stages */}
                  <div style={{ marginBottom: 'clamp(20px, 4vw, 28px)' }}>
                    <div style={{ 
                      fontSize: 'clamp(40px, 10vw, 65px)', 
                      marginBottom: 'clamp(12px, 3vw, 16px)',
                      animation: 'gentlePulse 3s ease-in-out infinite'
                    }}>
                      👨‍👩‍👧‍👦
                    </div>
                    <div style={{ 
                      fontSize: 'clamp(16px, 3vw, 20px)', 
                      color: '#7e52a1', 
                      fontWeight: '700',
                      marginBottom: 'clamp(4px, 1vw, 8px)',
                      letterSpacing: 'clamp(0.2px, 0.5vw, 0.5px)'
                    }}>
                      Your Complete Family
                    </div>
                    <div style={{ 
                      fontSize: 'clamp(12px, 2.5vw, 14px)', 
                      color: '#ea3288',
                      fontWeight: '500',
                      fontStyle: 'italic'
                    }}>
                      Awaits Your First Step
                    </div>
                  </div>

                  {/* Journey Steps */}
                  <div style={{
                    display: 'flex',
                    gap: 'clamp(8px, 2vw, 12px)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 'clamp(15px, 3vw, 20px)'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 'clamp(16px, 4vw, 20px)', marginBottom: 'clamp(2px, 1vw, 4px)' }}>💝</div>
                      <div style={{ fontSize: 'clamp(8px, 2vw, 10px)', color: '#7e52a1', fontWeight: '600' }}>Hope</div>
                    </div>
                    <div style={{ color: '#ea3288', fontSize: 'clamp(12px, 2.5vw, 14px)', margin: '0 clamp(2px, 1vw, 4px)' }}>→</div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 'clamp(16px, 4vw, 20px)', marginBottom: 'clamp(2px, 1vw, 4px)' }}>🌟</div>
                      <div style={{ fontSize: 'clamp(8px, 2vw, 10px)', color: '#7e52a1', fontWeight: '600' }}>Care</div>
                    </div>
                    <div style={{ color: '#ea3288', fontSize: 'clamp(12px, 2.5vw, 14px)', margin: '0 clamp(2px, 1vw, 4px)' }}>→</div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 'clamp(16px, 4vw, 20px)', marginBottom: 'clamp(2px, 1vw, 4px)' }}>👶</div>
                      <div style={{ fontSize: 'clamp(8px, 2vw, 10px)', color: '#7e52a1', fontWeight: '600' }}>Joy</div>
                    </div>
                  </div>

                  {/* Trust Indicator */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'clamp(4px, 1vw, 6px)',
                    background: 'linear-gradient(45deg, rgba(126, 82, 161, 0.1), rgba(234, 50, 136, 0.1))',
                    padding: 'clamp(3px, 1vw, 5px) clamp(8px, 2vw, 12px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(126, 82, 161, 0.15)'
                  }}>
                    <StarOutlined style={{ color: '#FFD700', fontSize: 'clamp(8px, 2vw, 10px)' }} />
                    <span style={{ 
                      fontSize: 'clamp(7px, 1.5vw, 9px)', 
                      color: '#7e52a1',
                      fontWeight: '600'
                    }}>
                      Trusted by Thousands of Families
                    </span>
                  </div>
                </div>

                {/* Orbiting Success Elements */}
                {[
                  { emoji: '👶', label: 'New Life', delay: '0s', distance: '200px' },
                  { emoji: '💕', label: 'Love', delay: '2s', distance: '220px' },
                  { emoji: '🍼', label: 'Care', delay: '4s', distance: '210px' },
                  { emoji: '👣', label: 'Steps', delay: '6s', distance: '230px' },
                  { emoji: '🌟', label: 'Hope', delay: '8s', distance: '205px' },
                  { emoji: '💝', label: 'Gift', delay: '10s', distance: '225px' }
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      fontSize: 'clamp(24px, 6vw, 36px)',
                      animation: `gentleOrbit 20s linear infinite`,
                      animationDelay: item.delay,
                      transformOrigin: 'clamp(150px, 35vw, 275px) clamp(150px, 35vw, 275px)',
                      filter: 'drop-shadow(0 4px 15px rgba(126, 82, 161, 0.2))'
                    }}
                  >
                    <div style={{
                      background: 'rgba(255,255,255,0.9)',
                      borderRadius: '50%',
                      padding: 'clamp(6px, 2vw, 10px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                      border: '2px solid rgba(126, 82, 161, 0.1)'
                    }}>
                      {item.emoji}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <style>{`
        /* Mobile-specific optimizations */
        @media (max-width: 576px) {
          /* Hide orbiting elements on very small screens */
          div[style*="gentleOrbit"] {
            display: none !important;
          }
          
          /* Ensure better spacing on mobile */
          .ant-space-item {
            margin-bottom: 10px !important;
          }
          
          /* Make sure buttons stack properly */
          .ant-space.ant-space-horizontal.ant-space-wrap {
            justify-content: center !important;
          }
        }
        
        @media (max-width: 768px) {
          /* Reduce transform origins for smaller circles */
          div[style*="transformOrigin"] {
            transform-origin: 50% 50% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;