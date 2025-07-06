import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Typography, Progress, Button } from 'antd';
import { HeartFilled, StarFilled } from '@ant-design/icons';
import SEO from '../components/SEO';

// Import process icons
import initialConsultIcon from '../assets/icons/Initial Consultation.png';
import reviewTestIcon from '../assets/icons/Review on Test  reports.png';
import ovarianStimIcon from '../assets/icons/Ovarian Stimulation.png';
import growthMonitorIcon from '../assets/icons/Growth Monitoring.png';
import triggeredShotIcon from '../assets/icons/Triggered shot.png';
import eggRetrievalIcon from '../assets/icons/Egg Retrieval.png';
import spermCollectionIcon from '../assets/icons/Sperm Collection.png';
import fertilisationIcon from '../assets/icons/Fertilisation.png';
import embryoImplantIcon from '../assets/icons/Embryo impantation.png';
import pregnancyTestIcon from '../assets/icons/Pregnancy Test.png';

const { Title, Paragraph } = Typography;

const ivfSteps = [
  {
    id: 1,
    title: 'Initial Consultation',
    icon: initialConsultIcon,
    duration: 'Day 1',
    emoji: '🤝',
    color: '#7e52a1',
    story: '"Every miracle begins with hope"',
    description: "When couples visit Santasa IVF Center for an initial consultation, the specialist will first gather essential information and review any existing medical records. They will take the time to understand your concerns and discuss your fertility history in detail. Based on this assessment, the specialist will recommend necessary tests, such as ultrasounds, and develop a personalized plan tailored to your needs. Additionally, you will receive expert advice on medications and the next steps in your treatment, ensuring a comprehensive and supportive approach to your fertility journey.",
    emotional: "The moment you walk through our doors, you're not just a patient - you're family. We've seen countless dreams come true, and yours could be next. ✨"
  },
  {
    id: 2,
    title: 'Review of Test Reports',
    icon: reviewTestIcon,
    duration: 'Day 3-5',
    emoji: '📋',
    color: '#8e5ca5',
    story: '"Knowledge lights the path forward"',
    description: "The doctor will review test reports, including ultrasounds, blood tests, and tubal assessments, and will develop a detailed treatment plan based on these findings.",
    emotional: "Each test result brings us closer to understanding your unique journey. We celebrate every positive indicator and address every challenge with expertise and care. 🔬💜"
  },
  {
    id: 3,
    title: 'Ovarian Stimulation',
    icon: ovarianStimIcon,
    duration: 'Day 5-12',
    emoji: '🌸',
    color: '#9e66a9',
    story: '"Nurturing nature\'s beautiful process"',
    description: "The female partner is provided with medications to stimulate the ovaries for follicular growth.",
    emotional: "Your body is doing something absolutely incredible right now! Each day brings new growth, new possibilities. We're here supporting you every step of the way. 🌺"
  },
  {
    id: 4,
    title: 'Growth Monitoring',
    icon: growthMonitorIcon,
    duration: 'Day 8-14',
    emoji: '🔍',
    color: '#ae70ad',
    story: '"Watching dreams take shape"',
    description: "The female partner visits Santasa IVF Center for ultrasound monitoring of follicle size.",
    emotional: "It's magical watching life preparing to happen! Those little follicles on the screen represent pure potential - your future baby taking shape. 👶✨"
  },
  {
    id: 5,
    title: 'Trigger Shot',
    icon: triggeredShotIcon,
    duration: 'Day 12-14',
    emoji: '⏰',
    color: '#be7ab1',
    story: '"Perfect timing creates miracles"',
    description: "A trigger shot is administered to induce follicle maturation once the follicles reach the appropriate size.",
    emotional: "This is the moment everything aligns perfectly! Your eggs are almost ready for their incredible journey. We've timed this to perfection just for you! ⭐"
  },
  {
    id: 6,
    title: 'Egg Retrieval',
    icon: eggRetrievalIcon,
    duration: 'Day 14-16',
    emoji: '✨',
    color: '#ce84b5',
    story: '"Collecting precious treasures"',
    description: "Under short anesthesia, eggs are collected and sent to the embryology lab for further processing.",
    emotional: "Today we collect the most precious gifts - your eggs! Each one is a potential miracle, handled with the utmost care and love. This is your day! 🥚💎"
  },
  {
    id: 7,
    title: 'Sperm Collection',
    icon: spermCollectionIcon,
    duration: 'Day 14-16',
    emoji: '💪',
    color: '#de8eb9',
    story: '"Partners united in purpose"',
    description: "Semen samples from the male partner are collected, sometimes through specialized procedures like TESA.",
    emotional: "Both partners play such a beautiful role in this journey! Every element is prepared with love and scientific precision. Together, you're unstoppable! 👫💕"
  },
  {
    id: 8,
    title: 'Fertilization',
    icon: fertilisationIcon,
    duration: 'Day 16-18',
    emoji: '💖',
    color: '#ea3288',
    story: '"Where love meets science"',
    description: "In a controlled laboratory environment, eggs and sperm are brought together to facilitate fertilization. As a result, embryos are formed.",
    emotional: "This is it - the moment of creation! In our lab, love becomes life. Each embryo is a tiny miracle, your future baby taking its first form. 👶💕"
  },
  {
    id: 9,
    title: 'Embryo Implantation',
    icon: embryoImplantIcon,
    duration: 'Day 19-21',
    emoji: '🏠',
    color: '#ea4590',
    story: '"Coming home to love"',
    description: "Three to five days after fertilization, the embryos are transferred to the woman's uterus. Following this, a complex interaction occurs between the embryo and the uterine lining, determining the success of implantation.",
    emotional: "Welcome home, little one! Your embryo is now exactly where it belongs - in the warmth and love of your womb. The two-week wait begins with hope! 🏡💕"
  },
  {
    id: 10,
    title: 'Pregnancy Test',
    icon: pregnancyTestIcon,
    duration: 'Day 35',
    emoji: '🎉',
    color: '#ea5898',
    story: '"Dreams becoming reality"',
    description: "Two weeks after embryo transfer, a blood test is conducted to determine if pregnancy has occurred. The presence of a hormone called Beta hCG, produced by the developing embryo, will be elevated in the blood if implantation is successful.",
    emotional: "This could be THE day! The day you've dreamed of, prayed for, hoped for. Whatever the result, you've been incredibly brave on this journey. 🌈👶"
  }
];

const IVFProcessPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay] = useState(false);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setActiveStep(prev => {
          const next = (prev + 1) % ivfSteps.length;
          return next;
        });
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [autoPlay]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };


  return (
    <>
      <SEO 
        title="IVF Journey - Step by Step Process at Santasa IVF | Emotional & Scientific Excellence"
        description="Experience the complete IVF journey with emotional support and scientific precision. Follow our 10-step process from consultation to pregnancy - Your path to parenthood."
        keywords="IVF journey, IVF process timeline, fertility treatment steps, emotional IVF support, IVF procedure Mysuru Hassan"
        url="https://santasaivf.com/ivf-process"
      />
      
      <div style={{ 
        background: 'linear-gradient(135deg, #f0f4ff 0%, #fef7f7 50%, #f8f4ff 100%)',
        minHeight: '100vh'
      }}>
        {/* Hero Section */}
        <div style={{
          padding: 'clamp(80px, 10vw, 120px) clamp(20px, 5vw, 50px) clamp(40px, 8vw, 60px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated Background Elements */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: 'clamp(60px, 15vw, 100px)',
            height: 'clamp(60px, 15vw, 100px)',
            background: 'radial-gradient(circle, rgba(126, 82, 161, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 20s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: 'clamp(50px, 12vw, 80px)',
            height: 'clamp(50px, 12vw, 80px)',
            background: 'radial-gradient(circle, rgba(234, 50, 136, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 25s ease-in-out infinite reverse'
          }}></div>

          <div style={{
            display: 'inline-block',
            padding: 'clamp(8px, 2vw, 12px) clamp(16px, 4vw, 30px)',
            background: 'linear-gradient(45deg, #7e52a1, #ea3288)',
            borderRadius: '30px',
            marginBottom: '30px',
            animation: 'pulse 2s ease-in-out infinite'
          }}>
            <span style={{ color: 'white', fontSize: 'clamp(14px, 2.5vw, 16px)', fontWeight: '600' }}>
              ✨ Your Miracle Journey ✨
            </span>
          </div>

          <Title level={1} style={{ 
            fontSize: 'clamp(36px, 6vw, 56px)',
            background: 'linear-gradient(45deg, #7e52a1, #ea3288, #FFD700)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '25px',
            fontWeight: '800'
          }}>
            Your Beautiful Journey to Parenthood
          </Title>
          
          <Paragraph style={{ 
            fontSize: 'clamp(16px, 3vw, 20px)',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto clamp(30px, 5vw, 40px) auto',
            lineHeight: '1.8',
            padding: '0 clamp(10px, 2vw, 20px)'
          }}>
            Every step filled with hope, science, and endless possibilities. 
            Watch your dreams unfold through our caring, expert guidance. 💕
          </Paragraph>

        </div>

        {/* Dynamic Timeline Progress Bar */}
        <div style={{ padding: '0 clamp(15px, 3vw, 50px)', marginBottom: 'clamp(30px, 5vw, 40px)' }}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: 'clamp(20px, 4vw, 30px)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Progress Bar */}
            <div style={{ 
              marginBottom: 'clamp(20px, 4vw, 30px)',
              position: 'relative'
            }}>
              <div style={{
                width: '100%',
                height: '8px',
                background: '#f0f0f0',
                borderRadius: '10px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${((activeStep + 1) / ivfSteps.length) * 100}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #7e52a1, #ea3288)',
                  borderRadius: '10px',
                  transition: 'width 1s ease',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    right: '-10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '20px',
                    height: '20px',
                    background: '#ea3288',
                    borderRadius: '50%',
                    boxShadow: '0 0 15px rgba(234, 50, 136, 0.5)',
                    animation: 'pulse 1.5s ease-in-out infinite'
                  }}></div>
                </div>
              </div>
            </div>

            {/* Timeline Steps */}
            <div style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'nowrap',
              overflowX: 'auto',
              gap: '10px',
              paddingBottom: '10px',
              scrollbarWidth: 'thin',
              WebkitOverflowScrolling: 'touch'
            }}>
              {ivfSteps.map((step, index) => (
                <div
                  key={step.id}
                  onClick={() => handleStepClick(index)}
                  style={{
                    minWidth: 'clamp(80px, 10vw, 120px)',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: activeStep === index ? 'scale(1.1)' : 'scale(1)',
                    opacity: activeStep === index ? 1 : 0.7
                  }}
                >
                  <div style={{
                    width: 'clamp(40px, 8vw, 60px)',
                    height: 'clamp(40px, 8vw, 60px)',
                    borderRadius: '50%',
                    background: activeStep === index 
                      ? `linear-gradient(135deg, ${step.color}, #ea3288)` 
                      : '#f5f5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 10px auto',
                    transition: 'all 0.3s ease',
                    boxShadow: activeStep === index 
                      ? `0 8px 25px ${step.color}40` 
                      : '0 2px 10px rgba(0,0,0,0.1)',
                    border: activeStep === index ? '3px solid white' : 'none'
                  }}>
                    <img 
                      src={step.icon} 
                      alt={step.title} 
                      style={{ 
                        width: 'clamp(20px, 5vw, 30px)', 
                        height: 'clamp(20px, 5vw, 30px)',
                        filter: activeStep === index ? 'brightness(0) invert(1)' : 'none'
                      }} 
                    />
                  </div>
                  <div style={{
                    fontSize: 'clamp(10px, 2vw, 12px)',
                    fontWeight: activeStep === index ? '600' : '400',
                    color: activeStep === index ? step.color : '#999',
                    transition: 'all 0.3s ease'
                  }}>
                    {step.title.split(' ').slice(0, 2).join(' ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Step Details */}
        <div style={{ padding: '0 clamp(15px, 3vw, 50px) clamp(40px, 8vw, 80px)' }}>
          <Row gutter={[40, 40]} align="middle">
            <Col xs={24} lg={12}>
              <Card style={{
                borderRadius: '25px',
                background: `linear-gradient(135deg, ${ivfSteps[activeStep].color}08, white)`,
                border: `2px solid ${ivfSteps[activeStep].color}20`,
                boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
                height: '100%',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Background Pattern */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '200px',
                  height: '200px',
                  background: `radial-gradient(circle, ${ivfSteps[activeStep].color}15 0%, transparent 70%)`,
                  borderRadius: '50%'
                }}></div>

                <div style={{ padding: 'clamp(20px, 5vw, 40px)', position: 'relative', zIndex: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'clamp(10px, 3vw, 20px)',
                    marginBottom: 'clamp(20px, 4vw, 30px)',
                    flexWrap: 'wrap'
                  }}>
                    <div style={{
                      fontSize: 'clamp(40px, 8vw, 60px)',
                      animation: 'bounce 2s ease-in-out infinite'
                    }}>
                      {ivfSteps[activeStep].emoji}
                    </div>
                    <div>
                      <div style={{
                        background: ivfSteps[activeStep].color,
                        color: 'white',
                        padding: 'clamp(6px, 1.5vw, 8px) clamp(12px, 3vw, 16px)',
                        borderRadius: '20px',
                        fontSize: 'clamp(10px, 2vw, 12px)',
                        fontWeight: '600',
                        display: 'inline-block',
                        marginBottom: 'clamp(6px, 2vw, 10px)'
                      }}>
                        Step {ivfSteps[activeStep].id} • {ivfSteps[activeStep].duration}
                      </div>
                      <Title level={2} style={{ 
                        color: ivfSteps[activeStep].color,
                        margin: 0,
                        fontSize: 'clamp(20px, 5vw, 28px)',
                        fontWeight: '700'
                      }}>
                        {ivfSteps[activeStep].title}
                      </Title>
                    </div>
                  </div>

                  <div style={{
                    background: 'white',
                    padding: 'clamp(15px, 4vw, 25px)',
                    borderRadius: '15px',
                    marginBottom: 'clamp(15px, 4vw, 25px)',
                    borderLeft: `4px solid ${ivfSteps[activeStep].color}`,
                    boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
                  }}>
                    <Title level={4} style={{ 
                      color: ivfSteps[activeStep].color,
                      marginBottom: 'clamp(10px, 2vw, 15px)',
                      fontSize: 'clamp(14px, 3vw, 18px)',
                      fontStyle: 'italic'
                    }}>
                      {ivfSteps[activeStep].story}
                    </Title>
                    <Paragraph style={{ 
                      color: '#444',
                      lineHeight: '1.8',
                      fontSize: 'clamp(14px, 2.5vw, 16px)',
                      margin: 0
                    }}>
                      {ivfSteps[activeStep].description}
                    </Paragraph>
                  </div>

                  <div style={{
                    background: `${ivfSteps[activeStep].color}10`,
                    padding: 'clamp(15px, 3vw, 20px)',
                    borderRadius: '15px',
                    border: `1px solid ${ivfSteps[activeStep].color}20`
                  }}>
                    <div style={{ 
                      fontSize: 'clamp(12px, 2.5vw, 14px)',
                      color: ivfSteps[activeStep].color,
                      fontWeight: '600',
                      marginBottom: 'clamp(6px, 2vw, 10px)'
                    }}>
                      💭 A Message of Hope
                    </div>
                    <Paragraph style={{ 
                      color: '#666',
                      lineHeight: '1.7',
                      fontSize: 'clamp(13px, 2.5vw, 15px)',
                      margin: 0,
                      fontStyle: 'italic'
                    }}>
                      {ivfSteps[activeStep].emotional}
                    </Paragraph>
                  </div>
                </div>
              </Card>
            </Col>

            <Col xs={24} lg={12}>
              <div style={{
                textAlign: 'center',
                padding: 'clamp(20px, 5vw, 40px)',
                background: 'white',
                borderRadius: '25px',
                boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Background Animation */}
                <div style={{
                  position: 'absolute',
                  top: '20%',
                  left: '20%',
                  width: '60%',
                  height: '60%',
                  background: `radial-gradient(circle, ${ivfSteps[activeStep].color}08 0%, transparent 70%)`,
                  borderRadius: '50%',
                  animation: 'pulse 3s ease-in-out infinite'
                }}></div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <img 
                    src={ivfSteps[activeStep].icon} 
                    alt={ivfSteps[activeStep].title} 
                    style={{ 
                      width: 'clamp(80px, 15vw, 120px)', 
                      height: 'clamp(80px, 15vw, 120px)',
                      marginBottom: 'clamp(20px, 4vw, 30px)',
                      filter: `drop-shadow(0 10px 30px ${ivfSteps[activeStep].color}40)`,
                      animation: 'float 6s ease-in-out infinite'
                    }} 
                  />

                  <Title level={3} style={{ 
                    color: '#333',
                    marginBottom: 'clamp(15px, 3vw, 20px)',
                    fontSize: 'clamp(18px, 4vw, 24px)'
                  }}>
                    You're on Step {ivfSteps[activeStep].id} of 10
                  </Title>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    marginBottom: '30px'
                  }}>
                    {[1,2,3,4,5].map((_, i) => (
                      <StarFilled 
                        key={i}
                        style={{ 
                          fontSize: 'clamp(20px, 4vw, 24px)',
                          color: i < Math.ceil((activeStep + 1) / 2) ? '#FFD700' : '#f0f0f0',
                          animation: i < Math.ceil((activeStep + 1) / 2) ? 'sparkle 1.5s ease-in-out infinite' : 'none'
                        }} 
                      />
                    ))}
                  </div>

                  <Progress
                    type="circle"
                    percent={Math.round(((activeStep + 1) / ivfSteps.length) * 100)}
                    strokeColor={{
                      '0%': ivfSteps[activeStep].color,
                      '100%': '#ea3288',
                    }}
                    strokeWidth={8}
                    size={120}
                    format={(percent) => (
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: ivfSteps[activeStep].color }}>
                          {percent}%
                        </div>
                        <div style={{ fontSize: '12px', color: '#999' }}>
                          Complete
                        </div>
                      </div>
                    )}
                  />

                  <div style={{ marginTop: '30px' }}>
                    <HeartFilled style={{ 
                      fontSize: '40px',
                      color: '#ea3288',
                      animation: 'heartbeat 1.5s ease-in-out infinite'
                    }} />
                    <Paragraph style={{ 
                      marginTop: '15px',
                      color: '#666',
                      fontSize: '16px',
                      fontWeight: '500'
                    }}>
                      "Every step brings you closer to your miracle"
                    </Paragraph>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Call to Action */}
        <div style={{
          padding: 'clamp(40px, 8vw, 60px) clamp(20px, 5vw, 50px)',
          background: 'linear-gradient(135deg, #7e52a1, #ea3288)',
          textAlign: 'center',
          color: 'white'
        }}>
          <HeartFilled style={{ 
            fontSize: 'clamp(35px, 8vw, 50px)',
            marginBottom: 'clamp(15px, 4vw, 25px)',
            animation: 'heartbeat 2s ease-in-out infinite'
          }} />
          <Title level={2} style={{ 
            color: 'white',
            marginBottom: 'clamp(15px, 3vw, 20px)',
            fontSize: 'clamp(24px, 6vw, 32px)'
          }}>
            Ready to Begin Your Miracle Journey?
          </Title>
          <Paragraph style={{ 
            color: 'rgba(255,255,255,0.9)',
            fontSize: 'clamp(16px, 3vw, 18px)',
            marginBottom: 'clamp(20px, 5vw, 30px)',
            maxWidth: '600px',
            margin: '0 auto clamp(20px, 5vw, 30px) auto'
          }}>
            Our caring team is here to guide you through every beautiful step. 
            Your dreams of parenthood are our mission. 💕
          </Paragraph>
          <Button
            type="primary"
            size="large"
            href="/#contact"
            style={{
              background: 'white',
              color: '#7e52a1',
              border: 'none',
              borderRadius: '30px',
              padding: '0 clamp(20px, 5vw, 40px)',
              height: 'clamp(50px, 10vw, 60px)',
              fontSize: 'clamp(16px, 3vw, 18px)',
              fontWeight: '600',
              boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
              animation: 'pulse 2s ease-in-out infinite'
            }}
          >
            🌟 Start Your Journey Today 🌟
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes sparkle {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
        }
        
        /* Mobile specific styles */
        @media (max-width: 768px) {
          .ant-row {
            margin-left: -8px !important;
            margin-right: -8px !important;
          }
          .ant-col {
            padding-left: 8px !important;
            padding-right: 8px !important;
          }
          /* Hide decorative elements on mobile */
          div[style*="animation: float"] {
            display: none !important;
          }
        }
        
        /* Ensure timeline is scrollable on mobile */
        @media (max-width: 576px) {
          div[style*="overflowX: 'auto'"] {
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
          }
          div[style*="minWidth: 'clamp"] {
            scroll-snap-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default IVFProcessPage;