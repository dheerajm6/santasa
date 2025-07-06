import React from 'react';
import { Row, Col, Card, Typography, Space, Avatar, Tag } from 'antd';
import { UserOutlined, StarOutlined } from '@ant-design/icons';

// Import doctor images
import drSowmyaImage from '../assets/doctors/Dr sowmya.png';
import drYogithaImage from '../assets/doctors/Dr Yogitha.png';
import drSrividhyaImage from '../assets/doctors/Dr Srividhya.png';

const { Title, Paragraph } = Typography;

const doctors = [
  {
    name: 'Dr. Sowmya Dinesh H R',
    specialization: 'Medical Director & Founder',
    qualifications: 'MBBS, MS, FMAS, FFM, FSCRM(IASRM), FRM(Singapore), FRCOG(UK)',
    experience: '15+ Years',
    expertise: ['IVF & ART', 'Endoscopic Surgery', 'Reproductive Medicine', 'Embryology', 'Stem Cells & Regenerative Medicine', 'Fetal Medicine'],
    description: 'Fellow of Royal College of Obstetricians and Gynaecologists, London. Multiple international fellowships in Reproductive Medicine, Minimally Invasive Surgery, Fetal Medicine, and Stem Cells. Award-winning innovator and social entrepreneur.',
    image: drSowmyaImage
  },
  {
    name: 'Dr. Yogitha Rao Mudradi',
    specialization: 'Medical Director & Chief Embryologist',
    qualifications: 'MBBS, DGO, PGA (U.K), MSc Clinical Embryology & PGD',
    experience: '12+ Years',
    expertise: ['Clinical Embryology', 'PGD', 'Embryo Biopsy', 'Andrology', 'IVF Laboratory Management', 'Reproductive Technology'],
    description: 'Medical Director and Chief Embryologist with international training from UK, Australia, Denmark, and Singapore. Expert in advanced embryology techniques and reproductive medicine.',
    image: drYogithaImage
  },
  {
    name: 'Dr. Srividhya N B',
    specialization: 'Fertility Specialist & Reproductive Medicine Expert',
    qualifications: 'MBBS, MS (OBG), FMAS, Fellow Reproductive Medicine (RGUHS)',
    experience: '10+ Years',
    expertise: ['Reproductive Medicine', 'Advanced Laparoscopy', 'IVF Procedures', 'Fertility Enhancement', 'Minimally Invasive Surgery', 'Women\'s Health'],
    description: 'Expert in reproductive medicine with advanced training in fertility treatments and minimally invasive surgical techniques.',
    image: drSrividhyaImage
  }
];

const Doctors: React.FC = () => {
  return (
    <div className="baby-texture-bg" style={{ 
      padding: '100px 50px',
      background: 'linear-gradient(135deg, #f8f4ff 0%, #fff5fb 100%)'
    }}>
      <div className="floating-hearts"></div>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <Title level={2} style={{ 
          color: '#7e52a1',
          fontSize: '36px',
          marginBottom: '20px'
        }}>
          Meet Our Expert Team 👨‍⚕️👩‍⚕️✨
        </Title>
        <Paragraph style={{ 
          fontSize: '18px',
          color: '#666',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Our internationally trained specialists bring decades of experience 
          and cutting-edge expertise to your fertility journey.
        </Paragraph>
      </div>
      
      <Row gutter={[24, 24]}>
        {doctors.map((doctor, index) => (
          <Col xs={24} lg={8} key={index}>
            <Card
              style={{
                height: '100%',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                border: 'none',
                overflow: 'hidden'
              }}
              bodyStyle={{ padding: '30px' }}
            >
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <Avatar
                  size={100}
                  src={doctor.image}
                  icon={<UserOutlined />}
                  style={{ 
                    background: 'linear-gradient(45deg, #7e52a1, #ea3288)',
                    marginBottom: '15px',
                    border: '3px solid #7e52a1'
                  }}
                />
                <Title level={4} style={{ 
                  color: '#7e52a1',
                  marginBottom: '5px',
                  fontSize: '18px'
                }}>
                  {doctor.name}
                </Title>
                <Paragraph style={{ 
                  color: '#ea3288',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '10px'
                }}>
                  {doctor.specialization}
                </Paragraph>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '15px'
                }}>
                  <StarOutlined style={{ color: '#ffa940', marginRight: '5px' }} />
                  <span style={{ color: '#666', fontSize: '14px' }}>{doctor.experience}</span>
                </div>
              </div>
              
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <div>
                  <Title level={5} style={{ 
                    color: '#7e52a1',
                    fontSize: '14px',
                    marginBottom: '8px'
                  }}>
                    Qualifications
                  </Title>
                  <Paragraph style={{ 
                    color: '#666',
                    fontSize: '12px',
                    lineHeight: '1.4'
                  }}>
                    {doctor.qualifications}
                  </Paragraph>
                </div>
                
                <div>
                  <Title level={5} style={{ 
                    color: '#7e52a1',
                    fontSize: '14px',
                    marginBottom: '8px'
                  }}>
                    Expertise
                  </Title>
                  <div style={{ marginBottom: '10px' }}>
                    {doctor.expertise.map((skill, skillIndex) => (
                      <Tag
                        key={skillIndex}
                        color="purple"
                        style={{ 
                          marginBottom: '4px',
                          borderRadius: '12px',
                          fontSize: '11px'
                        }}
                      >
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </div>
                
                <Paragraph style={{ 
                  color: '#666',
                  fontSize: '12px',
                  lineHeight: '1.5'
                }}>
                  {doctor.description}
                </Paragraph>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Doctors;