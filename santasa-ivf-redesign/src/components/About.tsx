import React from 'react';
import { Row, Col, Card, Typography, Space, Timeline } from 'antd';
import { 
  HeartOutlined, 
  TrophyOutlined, 
  TeamOutlined, 
  SafetyOutlined,
  StarOutlined,
  CheckCircleOutlined,
  MedicineBoxOutlined,
  BankOutlined,
  RocketOutlined,
  CrownOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  const achievements = [
    { title: '16+', subtitle: 'Years of Excellence', icon: <TrophyOutlined /> },
    { title: '1000s', subtitle: 'Happy Families', icon: <HeartOutlined /> },
    { title: '2008', subtitle: 'Hassan Established', icon: <StarOutlined /> },
    { title: '2014', subtitle: 'Mysuru Expanded', icon: <BankOutlined /> }
  ];

  const values = [
    {
      icon: <HeartOutlined style={{ fontSize: '40px', color: '#ea3288' }} />,
      title: 'Clinical Excellence',
      description: 'World-class advanced fertility services with international standards of healthcare delivery.'
    },
    {
      icon: <SafetyOutlined style={{ fontSize: '40px', color: '#ea3288' }} />,
      title: 'Cost-Effective Treatment',
      description: 'Making international standard healthcare affordable and accessible to all couples.'
    },
    {
      icon: <TeamOutlined style={{ fontSize: '40px', color: '#ea3288' }} />,
      title: 'Personalized Care',
      description: 'Compassionate, individualized treatment plans tailored to each couple\'s unique needs.'
    },
    {
      icon: <MedicineBoxOutlined style={{ fontSize: '40px', color: '#ea3288' }} />,
      title: 'Comprehensive Services',
      description: 'Complete women\'s healthcare from infertility to advanced endoscopic surgeries.'
    }
  ];

  const milestones = [
    {
      year: '2008',
      title: 'The Foundation',
      description: 'Santasa IVF Hassan established with a revolutionary mission to make international standard healthcare affordable and accessible to all couples.',
      icon: <StarOutlined style={{ fontSize: '20px', color: '#fff' }} />,
      color: '#7e52a1'
    },
    {
      year: '2014', 
      title: 'Strategic Expansion',
      description: 'Opened Mysuru center under Dr. Sowmya Dinesh\'s expert guidance, extending world-class fertility services across Karnataka.',
      icon: <RocketOutlined style={{ fontSize: '20px', color: '#fff' }} />,
      color: '#ea3288'
    },
    {
      year: '2015-2018',
      title: 'Innovation & Growth',
      description: 'Pioneered advanced hysteroscopic and laparoscopic surgeries, establishing ourselves as leaders in minimally invasive reproductive medicine.',
      icon: <MedicineBoxOutlined style={{ fontSize: '20px', color: '#fff' }} />,
      color: '#7e52a1'
    },
    {
      year: '2019-2023',
      title: 'Community Impact',
      description: 'Thousands of couples realized their dreams of parenthood. Launched annual free infertility camps serving the community.',
      icon: <HeartOutlined style={{ fontSize: '20px', color: '#fff' }} />,
      color: '#ea3288'
    },
    {
      year: 'Today',
      title: 'Leading Excellence',
      description: 'Recognized as Karnataka\'s premier fertility center, continuing to innovate with cutting-edge technology and compassionate care.',
      icon: <CrownOutlined style={{ fontSize: '20px', color: '#fff' }} />,
      color: '#7e52a1'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="baby-texture-bg" style={{ 
        padding: '100px 50px 80px 50px',
        background: 'linear-gradient(135deg, #f8f4ff 0%, #fff5fb 100%)'
      }}>
        <div className="floating-hearts"></div>
        <Row justify="center">
          <Col xs={24} lg={16} style={{ textAlign: 'center' }}>
            <Title level={1} style={{ 
              color: '#7e52a1',
              fontSize: '48px',
              marginBottom: '20px'
            }}>
              Santasa IVF & Endosurgery Institute 💝
            </Title>
            <Paragraph style={{ 
              fontSize: '20px',
              color: '#666',
              lineHeight: '1.8',
              marginBottom: '40px'
            }}>
              A pioneering healthcare organization with a mission to make international standard 
              healthcare affordable. Established in Hassan (2008) and expanded to Mysuru (2014), 
              we are dedicated to fulfilling the dreams of childless couples through world-class 
              advanced fertility services.
            </Paragraph>
          </Col>
        </Row>

        {/* Statistics */}
        <Row gutter={[24, 24]} justify="center">
          {achievements.map((achievement, index) => (
            <Col xs={12} md={6} key={index}>
              <Card
                style={{
                  textAlign: 'center',
                  borderRadius: '16px',
                  border: 'none',
                  background: 'rgba(255,255,255,0.9)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}
                bodyStyle={{ padding: '30px 20px' }}
              >
                <div style={{ 
                  fontSize: '30px', 
                  color: '#ea3288', 
                  marginBottom: '10px' 
                }}>
                  {achievement.icon}
                </div>
                <div>
                  <div style={{ 
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#7e52a1',
                    marginBottom: '5px'
                  }}>
                    {achievement.title}
                  </div>
                  <div style={{ 
                    color: '#666',
                    fontSize: '14px'
                  }}>
                    {achievement.subtitle}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Our Story */}
      <div style={{ padding: '80px 50px', background: '#fff' }}>
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <Title level={2} style={{ 
              color: '#7e52a1',
              fontSize: '36px',
              marginBottom: '20px'
            }}>
              Our Story 📖
            </Title>
            <Paragraph style={{ 
              fontSize: '16px',
              color: '#666',
              lineHeight: '1.8',
              marginBottom: '20px'
            }}>
              Santasa IVF Hassan was established in 2008, and our Mysuru center was established in 2014 
              to extend services to the people of Mysuru district, under the guidance of Dr. Sowmya Dinesh. 
              Our main domains of care include Infertility, Advanced hysteroscopic and laparoscopic surgeries, 
              and Well woman and well couple health concepts.
            </Paragraph>
            <Paragraph style={{ 
              fontSize: '16px',
              color: '#666',
              lineHeight: '1.8',
              marginBottom: '20px'
            }}>
              Dr. Sowmya Dinesh and her team, experts in Gynaecology, Endoscopy and Embryology, aim at 
              fulfilling the dreams of childless couples by providing world-class advanced fertility services. 
              Santasa strives to provide the latest women's healthcare innovations addressing common health 
              concerns like infertility, endometriosis, pelvic pain, sexual dysfunctions and perimenopausal problems.
            </Paragraph>
            <Paragraph style={{ 
              fontSize: '16px',
              color: '#666',
              lineHeight: '1.8'
            }}>
              At Santasa, patients will never be alone in their path to parenthood. From the initial testing 
              and diagnosis through the most advanced treatment options, our team is committed to working 
              together with each patient, to find the most effective solution to their family building challenges. 
              Thousands of couples have realized their dream of parenthood at Santasa.
            </Paragraph>
          </Col>
          
          <Col xs={24} lg={12}>
            <div style={{
              background: 'linear-gradient(135deg, #f8f4ff 0%, #fff5fb 100%)',
              borderRadius: '20px',
              padding: '40px',
              textAlign: 'center'
            }}>
              <Title level={3} style={{ 
                color: '#7e52a1',
                marginBottom: '20px'
              }}>
                Our Vision 🌟
              </Title>
              <Paragraph style={{ 
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.8',
                fontStyle: 'italic',
                marginBottom: '25px'
              }}>
                "To deliver excellent, comprehensive, and compassionate care to women and couples."
              </Paragraph>
              
              <div style={{ marginTop: '30px' }}>
                <Title level={4} style={{ 
                  color: '#ea3288',
                  marginBottom: '15px'
                }}>
                  Our Mission 🎯
                </Title>
                <Paragraph style={{ 
                  fontSize: '16px',
                  color: '#666',
                  lineHeight: '1.8'
                }}>
                  To be the centre of choice for women and couples for all their reproductive health needs. 
                  We are proud to offer our patients clinical excellence, cost-effective treatment options, 
                  personalized and compassionate care.
                </Paragraph>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Our Values */}
      <div className="baby-texture-bg" style={{ 
        padding: '80px 50px',
        background: 'linear-gradient(135deg, #f8f4ff 0%, #fff5fb 100%)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Title level={2} style={{ 
            color: '#7e52a1',
            fontSize: '36px',
            marginBottom: '20px'
          }}>
            Our Core Values 💎
          </Title>
          <Paragraph style={{ 
            fontSize: '18px',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            These principles guide everything we do, from patient care to medical innovation.
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {values.map((value, index) => (
            <Col xs={24} md={12} lg={6} key={index}>
              <Card
                style={{
                  height: '100%',
                  borderRadius: '16px',
                  border: 'none',
                  background: 'rgba(255,255,255,0.9)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}
                bodyStyle={{ padding: '30px' }}
                hoverable
              >
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  <div style={{ textAlign: 'center' }}>
                    {value.icon}
                  </div>
                  <Title level={4} style={{ 
                    color: '#7e52a1',
                    textAlign: 'center',
                    marginBottom: '10px',
                    fontSize: '18px'
                  }}>
                    {value.title}
                  </Title>
                  <Paragraph style={{ 
                    color: '#666',
                    textAlign: 'center',
                    fontSize: '14px',
                    lineHeight: '1.6'
                  }}>
                    {value.description}
                  </Paragraph>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Journey Timeline */}
      <div style={{ 
        padding: '80px 50px', 
        background: 'linear-gradient(135deg, #f8f4ff 0%, #fff5fb 100%)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Title level={2} style={{ 
            color: '#7e52a1',
            fontSize: '36px',
            marginBottom: '20px'
          }}>
            Our Journey of Excellence 🛤️
          </Title>
          <Paragraph style={{ 
            fontSize: '18px',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Major milestones in our path from vision to Karnataka's premier fertility center
          </Paragraph>
        </div>

        <Row justify="center">
          <Col xs={24} lg={18}>
            <div style={{ position: 'relative' }}>
              <Timeline
                mode="left"
                style={{ 
                  padding: '20px 0',
                }}
                items={milestones.map((milestone, index) => ({
                  dot: (
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${milestone.color}, ${milestone.color}dd)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                      border: '3px solid white'
                    }}>
                      {milestone.icon}
                    </div>
                  ),
                  children: (
                    <Card
                      style={{
                        marginLeft: '20px',
                        marginBottom: '20px',
                        borderRadius: '16px',
                        border: 'none',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                        background: 'rgba(255,255,255,0.95)'
                      }}
                      bodyStyle={{ padding: '25px' }}
                    >
                      <div style={{ marginBottom: '15px' }}>
                        <span style={{
                          background: `linear-gradient(135deg, ${milestone.color}, ${milestone.color}dd)`,
                          color: 'white',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}>
                          {milestone.year}
                        </span>
                      </div>
                      
                      <Title level={4} style={{ 
                        color: milestone.color,
                        marginBottom: '12px',
                        fontSize: '18px',
                        fontWeight: '600'
                      }}>
                        {milestone.title}
                      </Title>
                      
                      <Paragraph style={{ 
                        color: '#666',
                        fontSize: '15px',
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        {milestone.description}
                      </Paragraph>
                    </Card>
                  )
                }))}
              />
            </div>
          </Col>
        </Row>
      </div>

      {/* Why Choose Santasa */}
      <div style={{ padding: '80px 50px', background: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Title level={2} style={{ 
            color: '#7e52a1',
            fontSize: '36px',
            marginBottom: '20px'
          }}>
            Why Choose Santasa IVF? 🌟
          </Title>
          <Paragraph style={{ 
            fontSize: '18px',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Discover what makes us Karnataka's leading fertility center and the preferred choice for thousands of couples
          </Paragraph>
        </div>

        <Row gutter={[24, 32]}>
          {/* Expert Team */}
          <Col xs={24} lg={12}>
            <Card
              style={{
                height: '100%',
                borderRadius: '16px',
                border: 'none',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}
              bodyStyle={{ padding: '30px' }}
            >
              <div style={{ marginBottom: '20px' }}>
                <TeamOutlined style={{ fontSize: '40px', color: '#ea3288' }} />
              </div>
              <Title level={4} style={{ 
                color: '#7e52a1',
                marginBottom: '15px'
              }}>
                Expert Medical Team
              </Title>
              <ul style={{ color: '#666', fontSize: '14px', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Highly qualified clinicians and embryologists - among India's best IVF experts</li>
                <li>Lead specialists with decades of experience in reproductive medicine</li>
                <li>Post-doctoral fellowship training providers for IVF specialization</li>
                <li>Experienced in treating PCOS, low ovarian reserve, endometriosis, and male factor infertility</li>
              </ul>
            </Card>
          </Col>

          {/* Pioneering Excellence */}
          <Col xs={24} lg={12}>
            <Card
              style={{
                height: '100%',
                borderRadius: '16px',
                border: 'none',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}
              bodyStyle={{ padding: '30px' }}
            >
              <div style={{ marginBottom: '20px' }}>
                <TrophyOutlined style={{ fontSize: '40px', color: '#ea3288' }} />
              </div>
              <Title level={4} style={{ 
                color: '#7e52a1',
                marginBottom: '15px'
              }}>
                Pioneering Achievements
              </Title>
              <ul style={{ color: '#666', fontSize: '14px', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>First IVF center in Hassan District - delivered first test tube babies in 2009</li>
                <li>First Class 10,000 IVF laboratory in Mysuru District</li>
                <li>First to offer post-doctoral fellowship training in IVF in the region</li>
                <li>Pioneers in advanced procedures like IMSI, PICSI, and laser hatching</li>
              </ul>
            </Card>
          </Col>

          {/* Advanced Technology */}
          <Col xs={24} lg={12}>
            <Card
              style={{
                height: '100%',
                borderRadius: '16px',
                border: 'none',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}
              bodyStyle={{ padding: '30px' }}
            >
              <div style={{ marginBottom: '20px' }}>
                <SafetyOutlined style={{ fontSize: '40px', color: '#ea3288' }} />
              </div>
              <Title level={4} style={{ 
                color: '#7e52a1',
                marginBottom: '15px'
              }}>
                Cutting-Edge Technology
              </Title>
              <ul style={{ color: '#666', fontSize: '14px', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Advanced IVF procedures: IMSI, PICSI, laser hatching, and embryo biopsy</li>
                <li>Altruistic surrogacy programs with comprehensive support</li>
                <li>Latest technology made affordable for all patients</li>
                <li>Process-based institute with stringent protocols and quality checks</li>
              </ul>
            </Card>
          </Col>

          {/* Patient Experience */}
          <Col xs={24} lg={12}>
            <Card
              style={{
                height: '100%',
                borderRadius: '16px',
                border: 'none',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}
              bodyStyle={{ padding: '30px' }}
            >
              <div style={{ marginBottom: '20px' }}>
                <HeartOutlined style={{ fontSize: '40px', color: '#ea3288' }} />
              </div>
              <Title level={4} style={{ 
                color: '#7e52a1',
                marginBottom: '15px'
              }}>
                Exceptional Patient Care
              </Title>
              <ul style={{ color: '#666', fontSize: '14px', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>High pregnancy rates comparable to international centers of excellence</li>
                <li>Friendly, empathetic staff providing emotional support</li>
                <li>Stress-free, cordial environment for patient comfort</li>
                <li>High client satisfaction rate with thousands of success stories</li>
              </ul>
            </Card>
          </Col>
        </Row>

        {/* Success Stats */}
        <div style={{ 
          marginTop: '60px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #f8f4ff 0%, #fff5fb 100%)',
          borderRadius: '20px',
          padding: '40px'
        }}>
          <Title level={3} style={{ 
            color: '#7e52a1',
            marginBottom: '20px'
          }}>
            Proven Track Record 📈
          </Title>
          <Paragraph style={{ 
            fontSize: '16px',
            color: '#666',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Our consistent high pregnancy rates, thousands of happy couples, and numerous success stories 
            make us the trusted choice for fertility treatment in Karnataka. We don't just provide medical 
            care - we help build families and fulfill dreams of parenthood.
          </Paragraph>
        </div>
      </div>

      {/* Community Service */}
      <div style={{ padding: '80px 50px', background: 'linear-gradient(135deg, #f8f4ff 0%, #fff5fb 100%)' }}>
        <Row justify="center">
          <Col xs={24} lg={16} style={{ textAlign: 'center' }}>
            <Title level={2} style={{ 
              color: '#7e52a1',
              fontSize: '36px',
              marginBottom: '20px'
            }}>
              Our Community Commitment 🤝
            </Title>
            <Paragraph style={{ 
              fontSize: '18px',
              color: '#666',
              lineHeight: '1.8',
              marginBottom: '40px'
            }}>
              Every year, we conduct free infertility check-ups, scanning, and consultation camps. 
              Thousands of couples have benefited from this charitable initiative, reflecting our 
              commitment to making fertility care accessible to all.
            </Paragraph>
            
            <div style={{
              background: 'rgba(255,255,255,0.9)',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <Title level={3} style={{ 
                color: '#ea3288',
                marginBottom: '20px'
              }}>
                Annual Free Fertility Camps 💝
              </Title>
              <Paragraph style={{ 
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.8'
              }}>
                Our commitment extends beyond medical excellence to social responsibility. 
                Through our annual free infertility camps, we provide hope and healthcare 
                to thousands of couples who might not otherwise have access to fertility services.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>

      {/* Call to Action */}
      <div style={{ 
        padding: '60px 50px',
        background: 'linear-gradient(45deg, #7e52a1, #ea3288)',
        textAlign: 'center'
      }}>
        <Title level={2} style={{ 
          color: 'white',
          fontSize: '32px',
          marginBottom: '20px'
        }}>
          Ready to Start Your Journey? 🌟
        </Title>
        <Paragraph style={{ 
          color: 'rgba(255,255,255,0.9)',
          fontSize: '18px',
          marginBottom: '30px'
        }}>
          Let our experienced team guide you toward your dream of parenthood
        </Paragraph>
      </div>
    </div>
  );
};

export default About;