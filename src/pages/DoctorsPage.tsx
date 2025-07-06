import React, { useState } from 'react';
import { Row, Col, Card, Typography, Space, Tag, Button, Tabs } from 'antd';
import { 
  UserOutlined, 
  StarOutlined, 
  MedicineBoxOutlined, 
  TrophyOutlined,
  PhoneOutlined,
  CalendarOutlined,
  BookOutlined,
  SafetyOutlined,
  HeartOutlined,
  CrownOutlined,
  DownOutlined,
  UpOutlined
} from '@ant-design/icons';

// Import doctor images
import drSowmyaImage from '../assets/doctors/Dr sowmya.png';
import drYogithaImage from '../assets/doctors/Dr Yogitha.png';
import drSrividhyaImage from '../assets/doctors/Dr Srividhya.png';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

const DoctorsPage: React.FC = () => {
  const [expandedDoctor, setExpandedDoctor] = useState<number | null>(null);

  const toggleExpansion = (index: number) => {
    setExpandedDoctor(expandedDoctor === index ? null : index);
  };

  const doctors = [
    {
      name: 'Dr. Sowmya Dinesh H R',
      designation: 'Medical Director & Founder',
      qualifications: 'MBBS, MS, FMAS, FFM, FSCRM(IASRM), FRM(Singapore), FRCOG(UK)',
      experience: '15+ Years',
      specialization: 'Reproductive Medicine, Infertility & ART',
      expertise: [
        'Infertility and Assisted Reproductive Techniques',
        'IVF & ICSI Procedures',
        'Gynaecological Endoscopic Surgeries',
        'Advanced Ultrasound',
        'Embryology & Laboratory Management',
        'Stem Cells and Regenerative Medicine',
        'Fetal Medicine',
        'Minimally Invasive Surgery'
      ],
      achievements: [
        'Fellow of Royal College of Obstetricians and Gynaecologists, London',
        'Fellowships in Reproductive Medicine, Minimally Invasive Surgery, Fetal Medicine',
        'Fellowship in Stem Cells and Regenerative Medicine',
        'Accelerating Innovation Award - IASRM 2024',
        'Innovators and Innovation Award - IASRM',
        'Janamecchida Vaidya - 2024',
        'Amma Award - 2023',
        'Best Woman Entrepreneur TOI - 2020',
        'FM Super Sadhaki - 2018'
      ],
      about: 'Dr. Sowmya Dinesh H R is the Medical Director and Founder of Santasa Fertility and IVF Institutes. She is a Fellow of Royal College of Obstetricians and Gynaecologists, London, with multiple international fellowships. A pioneering fertility specialist, innovative researcher, and social entrepreneur committed to advancing reproductive medicine and community welfare.',
      image: drSowmyaImage,
      positions: [
        'Medical Director - Santasa Fertility and IVF Institutes, Mysuru & Hassan',
        'Medical Director - SSM Multispeciality Hospital Pvt Ltd, Hassan',
        'Member - Karnataka State Government ART & Surrogacy Board (2024-)',
        'Founder - Santasa Foundation',
        'Joint Secretary - Swami Vivekananda Youth Movement [NGO] (2020-2024)',
        'Trustee - Hasirubhoomi Prathisthana [NGO] (2023-)',
        'Secretary - Hassan Society of Obs & Gynae (2010-2012)',
        'Joint Treasurer KISAR (2023-)',
        'EC Member - KSOGA & KISAR (2018-2020)'
      ],
      fellowships: [
        'Fellow of Royal College of Obstetricians and Gynaecologists, London (FRCOG)',
        'Fellowship in Reproductive Medicine, Singapore (FRM)',
        'Fellowship in Minimally Invasive Surgery (FMAS)',
        'Fellowship in Fetal Medicine (FFM)',
        'Fellowship in Stem Cells and Regenerative Medicine (FSCRM - IASRM)'
      ],
      interests: [
        'Infertility and Assisted Reproductive Techniques',
        'Gynaecological Endoscopic Surgeries & Ultrasound',
        'Embryology, Stem cells and Regenerative Medicine',
        'Social and Environmental Welfare Activities',
        'Author and Translator - textbooks and patient education'
      ]
    },
    {
      name: 'Dr. Yogitha Rao Mudradi',
      designation: 'Medical Director & Chief Embryologist',
      qualifications: 'MBBS, DGO, PGA (U.K), MSc Clinical Embryology & PGD',
      experience: '12+ Years',
      specialization: 'Clinical Embryology & Reproductive Technology',
      expertise: [
        'Clinical Embryology',
        'Preimplantation Genetic Diagnosis (PGD)',
        'Embryo Biopsy & Trophectoderm Biopsy',
        'IVF Laboratory Management',
        'Advanced Andrology',
        'Platelet Rich Plasma (PRP) Therapy',
        'Sperm DNA Fragmentation Analysis',
        'WHO Semen Analysis',
        'Cryopreservation Techniques'
      ],
      achievements: [
        'Post Graduate Award in Reproductive Technology - Warwick University, Coventry, UK',
        'Certificate Course in Embryology - Queensland University, Australia',
        'Trophectoderm Biopsy Training - Denmark',
        'Andrology Advanced Certification - American Society of Reproductive Medicine (ASRM)',
        'Trained in IVF techniques from Singapore (Gleneagle, Sincere, Thomson) and UK (Coventry & NHS)',
        'Poster presentation at FERTILITY 2020 conference, Edinburgh',
        'Training team member for EMBRYO BIOPSY HANDS ON WORKSHOP, Chennai (2019)',
        'Conducted WHO SEMEN ANALYSIS workshop, Mysuru (2020)',
        'Multiple international conference presentations and workshops'
      ],
      about: 'Dr. Yogitha Rao Mudradi is the Medical Director and Chief Embryologist at Santasa Fertility with extensive international training. She serves as Deputy Director & Assistant Professor at Asia Pacific Institute of Embryology, Mysuru, and is an executive committee member of IFS Karnataka chapter. She holds memberships in prestigious international organizations including ESHRE, British Fertility Society, ASRM, ISAR, IFS, ACE, and FOGSI.',
      image: drYogithaImage,
      positions: [
        'Medical Director and Chief Embryologist at Santasa Fertility Pvt. Ltd.',
        'Deputy Director & Asst. Professor - Asia Pacific Institute of Embryology, Mysuru',
        'Executive committee member IFS - Karnataka chapter',
        'Member of ESHRE, British Fertility Society and ASRM',
        'Member of ISAR, IFS, ACE, FOGSI'
      ],
      specialTraining: [
        'Post Graduate Award in Reproductive Technology - Warwick University, Coventry, UK',
        'Certificate Course in Embryology - Queensland University of Australia',
        'Trophectoderm Biopsy Training - Denmark',
        'Andrology Advanced Certification - American Society of Reproductive Medicine ASRM',
        'IVF techniques training from multiple international centers (Singapore & UK)'
      ]
    },
    {
      name: 'Dr. Srividhya N B',
      designation: 'Director & Fertility Specialist',
      qualifications: 'MBBS, MS (OBG), FMAS, Fellow Reproductive Medicine (RGUHS)',
      experience: '8+ Years',
      specialization: 'Reproductive Medicine & High Risk Obstetrics',
      expertise: [
        'Reproductive Medicine',
        'Advanced Laparoscopy',
        'IVF Procedures',
        'Fertility Enhancement',
        'Minimally Invasive Surgery',
        'Women\'s Health',
        'High Risk Obstetrics',
        'Infertility Management'
      ],
      achievements: [
        'MBBS with distinction from Bangalore Medical College & Research Institute (2010)',
        'MS in Obstetrics and Gynecology from UCMS, Delhi University (2014)',
        'FMAS training in advanced laparoscopic surgery from World Laparoscopic Hospital, New Delhi (2016)',
        'Fellowship in Reproductive Medicine from RGUHS (2020)',
        'FOGSI President\'s rotating trophy as Secretary (2017-2018)',
        'Paper and poster presentation at RCOG London (2018)',
        'YUVA faculty in AICOG 2019 Bangalore',
        'Gold medallist in Quiz finals, 57th AICOG, Patna',
        'Gold medallist in paper presentation, 57th AICOG, Patna'
      ],
      about: 'Dr. Srividhya N B is the Director at Santasa Fertility Pvt. Ltd. with 8 years of experience in obstetrics and gynecology. She has special interest in high-risk obstetrics and infertility management, and is trained in laparoscopic and hysteroscopic surgeries. She holds key organizational positions including Secretary of Hassan Society of Obstetricians and Gynecologists and Secretary of Indian Medical Association Ladies Wing Hassan.',
      image: drSrividhyaImage,
      positions: [
        'Director at Santasa Fertility Pvt. Ltd.',
        'Director SSM Multispeciality Hospital Hassan',
        'Secretary - Hassan Society of Obstetricans and Gynecologists (2017-2018)',
        'Secretary – Indian Medical Association Ladies Wing Hassan (2019-2021)'
      ]
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
              Meet Our Expert Team 👨‍⚕️👩‍⚕️
            </Title>
            <Paragraph style={{ 
              fontSize: '20px',
              color: '#666',
              lineHeight: '1.8',
              marginBottom: '40px'
            }}>
              Our internationally trained specialists bring decades of experience and 
              cutting-edge expertise to your fertility journey. Each doctor is committed 
              to providing personalized, compassionate care.
            </Paragraph>
          </Col>
        </Row>

        {/* Quick Stats */}
        <Row gutter={[24, 24]} justify="center">
          <Col xs={12} md={6}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', color: '#ea3288', fontWeight: 'bold' }}>15+</div>
              <div style={{ color: '#666', fontSize: '14px' }}>Years Experience</div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', color: '#7e52a1', fontWeight: 'bold' }}>1000s</div>
              <div style={{ color: '#666', fontSize: '14px' }}>Successful Cases</div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', color: '#ea3288', fontWeight: 'bold' }}>3</div>
              <div style={{ color: '#666', fontSize: '14px' }}>Specialist Doctors</div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', color: '#7e52a1', fontWeight: 'bold' }}>24/7</div>
              <div style={{ color: '#666', fontSize: '14px' }}>Patient Support</div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Doctors Profiles - New Dynamic Design */}
      <div style={{ padding: '80px 50px', background: '#fff' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {doctors.map((doctor, index) => (
            <Card
              key={index}
              style={{
                borderRadius: '20px',
                border: 'none',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                marginBottom: '40px',
                transition: 'all 0.3s ease'
              }}
              bodyStyle={{ padding: 0 }}
            >
              <Row gutter={0}>
                {/* Left Column - Doctor Image & Actions */}
                <Col xs={24} lg={8}>
                  <div style={{
                    minHeight: '450px',
                    background: 'linear-gradient(135deg, #f8f4ff 0%, #fff5fb 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px 20px',
                    position: 'relative'
                  }}>
                    {/* Doctor Image */}
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                      {doctor.image ? (
                        <img 
                          src={doctor.image} 
                          alt={doctor.name}
                          style={{
                            width: '180px',
                            height: '180px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '4px solid #7e52a1',
                            boxShadow: '0 8px 30px rgba(126, 82, 161, 0.3)'
                          }}
                        />
                      ) : (
                        <div style={{
                          width: '180px',
                          height: '180px',
                          borderRadius: '50%',
                          background: 'linear-gradient(45deg, #7e52a1, #ea3288)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '60px',
                          color: 'white'
                        }}>
                          <UserOutlined />
                        </div>
                      )}
                    </div>

                    {/* Quick Stats */}
                    <div style={{ 
                      background: 'rgba(255,255,255,0.9)',
                      padding: '20px',
                      borderRadius: '15px',
                      textAlign: 'center',
                      marginBottom: '25px',
                      width: '100%',
                      maxWidth: '250px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', justifyContent: 'center' }}>
                        <StarOutlined style={{ color: '#ffa940' }} />
                        <span style={{ color: '#666', fontSize: '14px', fontWeight: '500' }}>{doctor.experience}</span>
                      </div>
                      <div style={{ color: '#7e52a1', fontSize: '12px', fontWeight: '500' }}>
                        {doctor.specialization}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <Space direction="vertical" size="middle" style={{ width: '100%', maxWidth: '200px' }}>
                      <Button 
                        type="primary"
                        icon={<CalendarOutlined />}
                        block
                        size="large"
                        style={{ 
                          background: 'linear-gradient(45deg, #7e52a1, #ea3288)',
                          border: 'none',
                          borderRadius: '25px',
                          height: '45px',
                          fontWeight: '600'
                        }}
                      >
                        Book Consultation
                      </Button>
                      <Button 
                        icon={<PhoneOutlined />}
                        block
                        size="large"
                        style={{ 
                          border: '2px solid #7e52a1',
                          color: '#7e52a1',
                          borderRadius: '25px',
                          height: '45px',
                          fontWeight: '600'
                        }}
                      >
                        Contact Doctor
                      </Button>
                    </Space>
                  </div>
                </Col>

                {/* Right Column - Doctor Details */}
                <Col xs={24} lg={16}>
                  <div style={{ padding: '40px' }}>
                    {/* Header - Always Visible */}
                    <div style={{ marginBottom: '25px' }}>
                      <Title level={2} style={{ 
                        color: '#7e52a1',
                        marginBottom: '8px',
                        fontSize: '32px'
                      }}>
                        {doctor.name}
                      </Title>
                      <Title level={4} style={{ 
                        color: '#ea3288',
                        marginBottom: '15px',
                        fontSize: '18px',
                        fontWeight: '500'
                      }}>
                        {doctor.designation}
                      </Title>
                      
                      {/* Qualifications Badge */}
                      <div style={{
                        background: 'linear-gradient(135deg, #f8f4ff 0%, #fff5fb 100%)',
                        padding: '12px 20px',
                        borderRadius: '15px',
                        borderLeft: '4px solid #7e52a1',
                        marginBottom: '20px'
                      }}>
                        <div style={{ fontSize: '13px', color: '#7e52a1', fontWeight: '600', marginBottom: '5px' }}>
                          <BookOutlined style={{ marginRight: '6px' }} />Qualifications
                        </div>
                        <div style={{ fontSize: '14px', color: '#666' }}>
                          {doctor.qualifications}
                        </div>
                      </div>
                    </div>

                    {/* About - Always Visible */}
                    <div style={{ marginBottom: '25px' }}>
                      <Paragraph style={{ 
                        color: '#666',
                        fontSize: '15px',
                        lineHeight: '1.7'
                      }}>
                        {doctor.about.substring(0, 200)}...
                      </Paragraph>
                    </div>

                    {/* Key Expertise - Always Visible */}
                    <div style={{ marginBottom: '25px' }}>
                      <Title level={5} style={{ 
                        color: '#7e52a1',
                        marginBottom: '12px',
                        fontSize: '16px'
                      }}>
                        <SafetyOutlined style={{ marginRight: '8px' }} />
                        Key Expertise
                      </Title>
                      <div>
                        {doctor.expertise.slice(0, 4).map((skill, skillIndex) => (
                          <Tag
                            key={skillIndex}
                            color="purple"
                            style={{ 
                              marginBottom: '8px',
                              marginRight: '8px',
                              borderRadius: '15px',
                              fontSize: '12px',
                              padding: '4px 12px'
                            }}
                          >
                            {skill}
                          </Tag>
                        ))}
                        {doctor.expertise.length > 4 && (
                          <Tag
                            style={{ 
                              marginBottom: '8px',
                              borderRadius: '15px',
                              fontSize: '12px',
                              padding: '4px 12px',
                              background: '#f0f0f0',
                              color: '#666',
                              border: '1px dashed #ccc'
                            }}
                          >
                            +{doctor.expertise.length - 4} more
                          </Tag>
                        )}
                      </div>
                    </div>

                    {/* Expandable Content */}
                    {expandedDoctor === index && (
                      <div style={{ 
                        marginTop: '30px',
                        animation: 'fadeIn 0.3s ease-in'
                      }}>
                        <Tabs 
                          defaultActiveKey="1" 
                          type="card"
                          style={{ marginBottom: '20px' }}
                        >
                          {/* Achievements & Awards Tab */}
                          <TabPane 
                            tab={
                              <span>
                                <TrophyOutlined />
                                Awards & Achievements
                              </span>
                            } 
                            key="1"
                          >
                            <ul style={{ 
                              color: '#666', 
                              fontSize: '13px', 
                              lineHeight: '1.6',
                              paddingLeft: '20px'
                            }}>
                              {doctor.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} style={{ marginBottom: '6px' }}>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </TabPane>

                          {/* Positions & Leadership Tab */}
                          {doctor.positions && (
                            <TabPane 
                              tab={
                                <span>
                                  <CrownOutlined />
                                  Leadership
                                </span>
                              } 
                              key="2"
                            >
                              <ul style={{ 
                                color: '#666', 
                                fontSize: '13px', 
                                lineHeight: '1.6',
                                paddingLeft: '20px'
                              }}>
                                {doctor.positions.map((position, posIndex) => (
                                  <li key={posIndex} style={{ marginBottom: '6px' }}>
                                    {position}
                                  </li>
                                ))}
                              </ul>
                            </TabPane>
                          )}

                          {/* Training & Certifications Tab */}
                          {(doctor.fellowships || doctor.specialTraining) && (
                            <TabPane 
                              tab={
                                <span>
                                  <BookOutlined />
                                  Training
                                </span>
                              } 
                              key="3"
                            >
                              {doctor.fellowships && (
                                <div style={{ marginBottom: '20px' }}>
                                  <Title level={5} style={{ color: '#7e52a1', fontSize: '14px', marginBottom: '10px' }}>
                                    International Fellowships
                                  </Title>
                                  <ul style={{ 
                                    color: '#666', 
                                    fontSize: '13px', 
                                    lineHeight: '1.6',
                                    paddingLeft: '20px'
                                  }}>
                                    {doctor.fellowships.map((fellowship, fellowIndex) => (
                                      <li key={fellowIndex} style={{ marginBottom: '6px' }}>
                                        {fellowship}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              {doctor.specialTraining && (
                                <div>
                                  <Title level={5} style={{ color: '#7e52a1', fontSize: '14px', marginBottom: '10px' }}>
                                    Special Training & Certifications
                                  </Title>
                                  <ul style={{ 
                                    color: '#666', 
                                    fontSize: '13px', 
                                    lineHeight: '1.6',
                                    paddingLeft: '20px'
                                  }}>
                                    {doctor.specialTraining.map((training, trainIndex) => (
                                      <li key={trainIndex} style={{ marginBottom: '6px' }}>
                                        {training}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </TabPane>
                          )}

                          {/* Research & Interests Tab */}
                          {doctor.interests && (
                            <TabPane 
                              tab={
                                <span>
                                  <HeartOutlined />
                                  Research
                                </span>
                              } 
                              key="4"
                            >
                              <ul style={{ 
                                color: '#666', 
                                fontSize: '13px', 
                                lineHeight: '1.6',
                                paddingLeft: '20px'
                              }}>
                                {doctor.interests.map((interest, interestIndex) => (
                                  <li key={interestIndex} style={{ marginBottom: '6px' }}>
                                    {interest}
                                  </li>
                                ))}
                              </ul>
                            </TabPane>
                          )}
                        </Tabs>
                      </div>
                    )}

                    {/* Read More/Less Button */}
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                      <Button
                        type="text"
                        icon={expandedDoctor === index ? <UpOutlined /> : <DownOutlined />}
                        onClick={() => toggleExpansion(index)}
                        style={{
                          color: '#7e52a1',
                          fontWeight: '600',
                          height: 'auto',
                          padding: '8px 20px',
                          border: '1px solid #7e52a1',
                          borderRadius: '20px'
                        }}
                      >
                        {expandedDoctor === index ? 'Show Less' : 'Read More Details'}
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          ))}
        </Space>
      </div>

      {/* Complete Medical Team */}
      <div style={{ padding: '80px 50px', background: '#f9f9f9' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Title level={2} style={{ 
            color: '#7e52a1',
            fontSize: '36px',
            marginBottom: '20px'
          }}>
            Our Complete Medical Team 👥
          </Title>
          <Paragraph style={{ 
            fontSize: '18px',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Meet our comprehensive team of specialists, coordinators, and support staff dedicated to your care
          </Paragraph>
        </div>

        <Row gutter={[24, 32]}>
          {/* Leadership */}
          <Col xs={24} lg={12}>
            <Card
              title={
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CrownOutlined style={{ color: '#ea3288' }} />
                  <span style={{ color: '#7e52a1' }}>Leadership Team</span>
                </div>
              }
              style={{ borderRadius: '16px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
              bodyStyle={{ padding: '20px' }}
            >
              <div style={{ marginBottom: '15px' }}>
                <Title level={5} style={{ color: '#ea3288', marginBottom: '5px', fontSize: '14px' }}>
                  Founder & CEO
                </Title>
                <div style={{ color: '#666', fontSize: '14px' }}>Dr. Sowmya Dinesh H R</div>
              </div>
              <div>
                <Title level={5} style={{ color: '#ea3288', marginBottom: '5px', fontSize: '14px' }}>
                  Director of Clinical Research
                </Title>
                <div style={{ color: '#666', fontSize: '14px' }}>Dr. Vibhu Dhawan, MBBS, ABIM (Nephro) USA</div>
              </div>
            </Card>
          </Col>

          {/* Visiting Consultants */}
          <Col xs={24} lg={12}>
            <Card
              title={
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <UserOutlined style={{ color: '#ea3288' }} />
                  <span style={{ color: '#7e52a1' }}>Visiting Consultants</span>
                </div>
              }
              style={{ borderRadius: '16px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
              bodyStyle={{ padding: '20px' }}
            >
              <div style={{ display: 'grid', gap: '8px' }}>
                <div style={{ color: '#666', fontSize: '13px' }}>Dr. Savithri A, MBBS, DGO, MD</div>
                <div style={{ color: '#666', fontSize: '13px' }}>Dr. Sonia Mandappa, MBBS, DGO</div>
                <div style={{ color: '#666', fontSize: '13px' }}>Dr. Rangalakshmi, MBBS, DGO, MD</div>
                <div style={{ color: '#666', fontSize: '13px' }}>Dr. Poornima Mahesh, MBBS, DGO</div>
                <div style={{ color: '#666', fontSize: '13px' }}>Dr. Sridhara S K, MBBS, MS</div>
                <div style={{ color: '#666', fontSize: '13px' }}>Dr. Kirana K V, MBBS, DNB(OBG)</div>
                <div style={{ color: '#666', fontSize: '13px' }}>Dr. Raghupathi, MBBS, MS</div>
              </div>
            </Card>
          </Col>

          {/* Embryologists */}
          <Col xs={24} lg={12}>
            <Card
              title={
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MedicineBoxOutlined style={{ color: '#ea3288' }} />
                  <span style={{ color: '#7e52a1' }}>Embryologists</span>
                </div>
              }
              style={{ borderRadius: '16px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
              bodyStyle={{ padding: '20px' }}
            >
              <div style={{ display: 'grid', gap: '8px' }}>
                <div style={{ color: '#666', fontSize: '13px' }}>Dr. Yogitha Rao Mudradi, MBBS, DGO, PGA (U.K), MSc Clinical Embryology & PGD</div>
                <div style={{ color: '#666', fontSize: '13px' }}>Mrs. Sowmya Venugopal, B.Sc, M.Sc, (PhD)</div>
                <div style={{ color: '#666', fontSize: '13px' }}>Ms. Niyanka, MSc Clinical Embryology & PGD</div>
              </div>
            </Card>
          </Col>

          {/* Andrologists */}
          <Col xs={24} lg={12}>
            <Card
              title={
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SafetyOutlined style={{ color: '#ea3288' }} />
                  <span style={{ color: '#7e52a1' }}>Andrologists</span>
                </div>
              }
              style={{ borderRadius: '16px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
              bodyStyle={{ padding: '20px' }}
            >
              <div style={{ display: 'grid', gap: '8px' }}>
                <div style={{ color: '#666', fontSize: '13px' }}>Dr. Sanjay H R, MBBS, MS, Fellowship in Clinical Andrology (ASRM)</div>
                <div style={{ color: '#666', fontSize: '13px' }}>Dr. Yatheesh, MBBS, MS, MCh Urology</div>
              </div>
            </Card>
          </Col>

          {/* Physicians */}
          <Col xs={24} lg={12}>
            <Card
              title={
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <HeartOutlined style={{ color: '#ea3288' }} />
                  <span style={{ color: '#7e52a1' }}>Physicians</span>
                </div>
              }
              style={{ borderRadius: '16px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
              bodyStyle={{ padding: '20px' }}
            >
              <div style={{ display: 'grid', gap: '8px' }}>
                <div style={{ color: '#666', fontSize: '13px' }}>Dr. Venugopal, MBBS, MD</div>
                <div style={{ color: '#666', fontSize: '13px' }}>Dr. Manohar, MBBS, MD</div>
                <div style={{ color: '#666', fontSize: '13px' }}>Dr. Sunil K, MBBS, MD</div>
              </div>
            </Card>
          </Col>

          {/* Radiologists */}
          <Col xs={24} lg={12}>
            <Card
              title={
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <StarOutlined style={{ color: '#ea3288' }} />
                  <span style={{ color: '#7e52a1' }}>Radiologists</span>
                </div>
              }
              style={{ borderRadius: '16px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
              bodyStyle={{ padding: '20px' }}
            >
              <div style={{ display: 'grid', gap: '8px' }}>
                <div style={{ color: '#666', fontSize: '13px' }}>Dr. Abhilasha, MD</div>
                <div style={{ color: '#666', fontSize: '13px' }}>Dr. Shashidar K, MD, DM</div>
                <div style={{ color: '#666', fontSize: '13px' }}>Dr. Shailesh Prabhu, MD, DM</div>
              </div>
            </Card>
          </Col>

          {/* Counsellors & Coordinators */}
          <Col xs={24} lg={12}>
            <Card
              title={
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <BookOutlined style={{ color: '#ea3288' }} />
                  <span style={{ color: '#7e52a1' }}>Counsellors & IVF Coordinators</span>
                </div>
              }
              style={{ borderRadius: '16px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
              bodyStyle={{ padding: '20px' }}
            >
              <div style={{ display: 'grid', gap: '8px' }}>
                <div style={{ color: '#666', fontSize: '13px' }}>Mrs. Ramya Dharani</div>
                <div style={{ color: '#666', fontSize: '13px' }}>Dr. Qudsiya Nida</div>
                <div style={{ color: '#666', fontSize: '13px' }}>Dr. Shruthi Yuvraj, BAMS</div>
                <div style={{ color: '#666', fontSize: '13px' }}>Dr. Sneha, Ayush</div>
                <div style={{ color: '#666', fontSize: '13px' }}>Mrs. Kalpana</div>
              </div>
            </Card>
          </Col>

          {/* Patient Coordinators */}
          <Col xs={24} lg={12}>
            <Card
              title={
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <PhoneOutlined style={{ color: '#ea3288' }} />
                  <span style={{ color: '#7e52a1' }}>Patient Coordinators</span>
                </div>
              }
              style={{ borderRadius: '16px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
              bodyStyle={{ padding: '20px' }}
            >
              <div style={{ display: 'grid', gap: '8px' }}>
                <div style={{ color: '#666', fontSize: '13px' }}>Mrs. Monisha M B</div>
                <div style={{ color: '#666', fontSize: '13px' }}>Mrs. Jayashree</div>
                <div style={{ color: '#666', fontSize: '13px' }}>Mrs. Kalpana</div>
              </div>
            </Card>
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
          Ready to Meet Our Experts? 👨‍⚕️👩‍⚕️
        </Title>
        <Paragraph style={{ 
          color: 'rgba(255,255,255,0.9)',
          fontSize: '18px',
          marginBottom: '30px'
        }}>
          Schedule a consultation with our fertility specialists today
        </Paragraph>
        <Space>
          <Button 
            size="large"
            style={{ 
              background: 'white',
              color: '#7e52a1',
              border: 'none',
              borderRadius: '8px',
              height: '50px',
              fontSize: '16px',
              fontWeight: '500'
            }}
            icon={<CalendarOutlined />}
          >
            Book Consultation
          </Button>
          <Button 
            size="large"
            style={{ 
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              borderRadius: '8px',
              height: '50px',
              fontSize: '16px'
            }}
            icon={<PhoneOutlined />}
          >
            Call Now
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default DoctorsPage;