import React, { useState } from 'react';
import { Row, Col, Card, Typography, Space, Button, Form, Input, Select, Upload, Divider, Timeline, Alert } from 'antd';
import SEO from './SEO';
import { 
  RocketOutlined, 
  TrophyOutlined, 
  BookOutlined, 
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  CalendarOutlined,
  FileTextOutlined,
  UploadOutlined,
  CheckCircleOutlined,
  StarOutlined,
  TeamOutlined,
  SafetyCertificateOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const Careers: React.FC = () => {
  const [form] = Form.useForm();
  const [submitLoading, setSubmitLoading] = useState(false);

  const onFinish = async (values: any) => {
    setSubmitLoading(true);
    console.log('Application submitted:', values);
    // Simulate API call
    setTimeout(() => {
      setSubmitLoading(false);
      form.resetFields();
    }, 2000);
  };

  const fellowshipProgram = {
    title: "Post-Doctoral Fellowship Programme",
    specializations: ["Reproductive Medicine", "Clinical Embryology"],
    accreditation: "ACCREDITED BY RGUHS",
    duration: "18 Months",
    seats: "2 Seats Each",
    intake: "Every 6 months (Starts in January of every year)",
    color: "#7e52a1",
    icon: <BookOutlined />
  };

  const eligibilityCriteria = [
    "Has to be a Citizen of India",
    "MBBS Degree from a University recognised by the MCI",
    "M.D. / M.S. (or its equivalent recognised degree) in Obstetrics & Gynaecology from a University recognised by the MCI or DGO with 3 years' experience",
    "Selection by: Written Exam followed by Interviews in June & December"
  ];

  return (
    <>
      <SEO 
        title="Careers at Santasa IVF - Join Our Team | Fellowship Programs in Karnataka"
        description="Join Santasa IVF team! Career opportunities for fertility specialists, embryologists, and healthcare professionals. RGUHS accredited fellowship programs in Reproductive Medicine and Clinical Embryology."
        keywords="IVF jobs, fertility clinic careers, reproductive medicine fellowship, embryology fellowship, RGUHS accredited, Karnataka medical jobs, IVF specialist jobs"
        url="https://santasaivf.com/careers"
      />
      <div style={{ 
        padding: '100px 50px 50px 50px',
        background: 'linear-gradient(135deg, #f8f4ff 0%, #fff5fb 100%)',
        minHeight: '100vh'
      }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <div style={{ 
          display: 'inline-block',
          padding: '12px 24px',
          background: 'linear-gradient(45deg, #7e52a1, #ea3288)',
          borderRadius: '25px',
          marginBottom: '20px'
        }}>
          <RocketOutlined style={{ color: 'white', fontSize: '24px', marginRight: '10px' }} />
          <Text style={{ color: 'white', fontSize: '16px', fontWeight: '600' }}>
            JOIN OUR TEAM
          </Text>
        </div>
        
        <Title level={1} style={{ 
          color: '#7e52a1',
          fontSize: '42px',
          marginBottom: '24px',
          lineHeight: '1.2'
        }}>
          Build Your Career in 
          <span style={{ color: '#ea3288' }}> Reproductive Medicine</span>
        </Title>
        
        <Paragraph style={{ 
          fontSize: '18px',
          color: '#666',
          maxWidth: '800px',
          margin: '0 auto 40px auto',
          lineHeight: '1.8'
        }}>
          Santasa IVF provides a great opportunity for professionals to further their careers. 
          We are ideally suited for those who are willing to take on challenges and be part of a 
          company that is a game-changer in the healthcare industry. We invite you to be part of 
          our successful team and join us on this memorable journey that will also give a great 
          boost to your career.
        </Paragraph>
      </div>

      {/* Career Opportunities */}
      <Row gutter={[32, 32]} style={{ marginBottom: '80px' }}>
        <Col span={24}>
          <Title level={2} style={{ 
            color: '#7e52a1',
            textAlign: 'center',
            marginBottom: '30px',
            fontSize: '32px'
          }}>
            <TeamOutlined style={{ marginRight: '15px' }} />
            Career Opportunities
          </Title>
          <Paragraph style={{ 
            fontSize: '16px',
            color: '#666',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 50px auto'
          }}>
            Join our team of dedicated professionals and make a difference in the lives of families seeking fertility solutions.
          </Paragraph>
        </Col>
        
        <Col xs={24} lg={8}>
          <Card
            style={{
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: 'none',
              height: '100%',
              textAlign: 'center'
            }}
            bodyStyle={{ padding: '30px' }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #7e52a1, #ea3288)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <UserOutlined style={{ color: 'white', fontSize: '24px' }} />
            </div>
            <Title level={4} style={{ color: '#7e52a1', marginBottom: '15px' }}>
              Medical Professionals
            </Title>
            <ul style={{ textAlign: 'left', color: '#666', lineHeight: '1.8' }}>
              <li>IVF Specialists</li>
              <li>Gynecologists</li>
              <li>Embryologists</li>
              <li>Andrologists</li>
              <li>Fertility Counselors</li>
            </ul>
          </Card>
        </Col>
        
        <Col xs={24} lg={8}>
          <Card
            style={{
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: 'none',
              height: '100%',
              textAlign: 'center'
            }}
            bodyStyle={{ padding: '30px' }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #ea3288, #7e52a1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <TeamOutlined style={{ color: 'white', fontSize: '24px' }} />
            </div>
            <Title level={4} style={{ color: '#7e52a1', marginBottom: '15px' }}>
              Support Staff
            </Title>
            <ul style={{ textAlign: 'left', color: '#666', lineHeight: '1.8' }}>
              <li>Nursing Staff</li>
              <li>Lab Technicians</li>
              <li>Patient Coordinators</li>
              <li>Administrative Staff</li>
              <li>Quality Control</li>
            </ul>
          </Card>
        </Col>
        
        <Col xs={24} lg={8}>
          <Card
            style={{
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: 'none',
              height: '100%',
              textAlign: 'center'
            }}
            bodyStyle={{ padding: '30px' }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #52c41a, #1890ff)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <RocketOutlined style={{ color: 'white', fontSize: '24px' }} />
            </div>
            <Title level={4} style={{ color: '#7e52a1', marginBottom: '15px' }}>
              Growth Opportunities
            </Title>
            <ul style={{ textAlign: 'left', color: '#666', lineHeight: '1.8' }}>
              <li>Continuous Learning</li>
              <li>Research Projects</li>
              <li>Conference Participation</li>
              <li>Career Advancement</li>
              <li>Skill Development</li>
            </ul>
          </Card>
        </Col>
      </Row>

      {/* Fellowship Programs */}
      <Row gutter={[32, 32]} style={{ marginBottom: '80px' }}>
        <Col span={24}>
          <Title level={2} style={{ 
            color: '#7e52a1',
            textAlign: 'center',
            marginBottom: '30px',
            fontSize: '32px'
          }}>
            <TrophyOutlined style={{ marginRight: '15px' }} />
            Fellowship Programs
          </Title>
          <Paragraph style={{ 
            fontSize: '16px',
            color: '#666',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 50px auto'
          }}>
            Comprehensive training programs for medical professionals seeking specialization in reproductive medicine.
          </Paragraph>
        </Col>
        
        <Col xs={24} lg={16} style={{ margin: '0 auto' }}>
          <Card
            style={{
              borderRadius: '20px',
              boxShadow: '0 12px 48px rgba(0,0,0,0.1)',
              border: 'none',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              background: `linear-gradient(90deg, ${fellowshipProgram.color}, #ea3288)`
            }} />
            
            <div style={{ padding: '40px' }}>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                marginBottom: '30px'
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '15px',
                  background: `linear-gradient(45deg, ${fellowshipProgram.color}, #ea3288)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '25px'
                }}>
                  <span style={{ color: 'white', fontSize: '30px' }}>
                    {fellowshipProgram.icon}
                  </span>
                </div>
                <div>
                  <Title level={2} style={{ 
                    color: '#333',
                    margin: 0,
                    fontSize: '24px',
                    lineHeight: '1.3'
                  }}>
                    {fellowshipProgram.title}
                  </Title>
                  <Text style={{ 
                    color: fellowshipProgram.color,
                    fontSize: '14px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {fellowshipProgram.accreditation}
                  </Text>
                </div>
              </div>
              
              {/* Specializations */}
              <div style={{ marginBottom: '30px' }}>
                <Title level={4} style={{ 
                  color: '#333',
                  fontSize: '18px',
                  marginBottom: '15px'
                }}>
                  Specializations Available:
                </Title>
                <Row gutter={[16, 16]}>
                  {fellowshipProgram.specializations.map((spec, index) => (
                    <Col xs={24} md={12} key={index}>
                      <div style={{
                        padding: '20px',
                        background: index === 0 ? '#f8f4ff' : '#fff5fb',
                        borderRadius: '12px',
                        border: `2px solid ${index === 0 ? '#7e52a1' : '#ea3288'}`,
                        textAlign: 'center'
                      }}>
                        <StarOutlined style={{
                          color: index === 0 ? '#7e52a1' : '#ea3288',
                          fontSize: '24px',
                          marginBottom: '10px'
                        }} />
                        <div style={{
                          fontSize: '16px',
                          fontWeight: '600',
                          color: '#333'
                        }}>
                          {spec}
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
              
              <Row gutter={[24, 16]}>
                <Col xs={24} md={8}>
                  <div style={{ 
                    padding: '20px',
                    backgroundColor: '#f8f4ff',
                    borderRadius: '12px',
                    textAlign: 'center'
                  }}>
                    <CalendarOutlined style={{ 
                      color: fellowshipProgram.color,
                      fontSize: '24px',
                      marginBottom: '10px'
                    }} />
                    <div style={{ fontSize: '14px', color: '#666' }}>Duration</div>
                    <div style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>
                      {fellowshipProgram.duration}
                    </div>
                  </div>
                </Col>
                <Col xs={24} md={8}>
                  <div style={{ 
                    padding: '20px',
                    backgroundColor: '#fff5fb',
                    borderRadius: '12px',
                    textAlign: 'center'
                  }}>
                    <TeamOutlined style={{ 
                      color: '#ea3288',
                      fontSize: '24px',
                      marginBottom: '10px'
                    }} />
                    <div style={{ fontSize: '14px', color: '#666' }}>Available Seats</div>
                    <div style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>
                      {fellowshipProgram.seats}
                    </div>
                  </div>
                </Col>
                <Col xs={24} md={8}>
                  <div style={{ 
                    padding: '20px',
                    backgroundColor: '#f0f9ff',
                    borderRadius: '12px',
                    textAlign: 'center'
                  }}>
                    <CheckCircleOutlined style={{ 
                      color: '#52c41a',
                      fontSize: '24px',
                      marginBottom: '10px'
                    }} />
                    <div style={{ fontSize: '14px', color: '#666' }}>Intake</div>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#333' }}>
                      {fellowshipProgram.intake}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>

      {/* About RGUHS */}
      <Row gutter={[32, 32]} style={{ marginBottom: '80px' }}>
        <Col span={24}>
          <Card
            style={{
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: 'none',
              background: 'linear-gradient(135deg, #7e52a1 0%, #ea3288 100%)',
              color: 'white'
            }}
          >
            <div style={{ padding: '40px' }}>
              <Title level={2} style={{ 
                color: 'white',
                textAlign: 'center',
                marginBottom: '30px',
                fontSize: '28px'
              }}>
                <SafetyCertificateOutlined style={{ marginRight: '15px' }} />
                About Rajiv Gandhi University of Health Sciences (RGUHS)
              </Title>
              
              <Paragraph style={{ 
                color: 'rgba(255,255,255,0.9)',
                fontSize: '16px',
                lineHeight: '1.8',
                textAlign: 'center',
                maxWidth: '900px',
                margin: '0 auto'
              }}>
                Rajiv Gandhi University of Health Sciences (RGUHS), Karnataka, established on June 1, 1996, 
                in Bangalore by the Government of Karnataka through the Rajiv Gandhi University of Health Sciences Act, 1994, 
                is a premier institution for health science education in India. It was created to unify health science colleges 
                previously affiliated with various universities in Karnataka, aiming to standardize instruction, training, and research 
                in both modern and Indian medicine. RGUHS's vision is to ensure uniform teaching standards and a common curriculum 
                across Karnataka's health science colleges to better meet healthcare needs.
              </Paragraph>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Course Objective & Training */}
      <Row gutter={[32, 32]} style={{ marginBottom: '80px' }}>
        <Col xs={24} lg={12}>
          <Card
            style={{
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: 'none',
              height: '100%'
            }}
          >
            <div style={{ padding: '40px' }}>
              <Title level={3} style={{ 
                color: '#7e52a1',
                marginBottom: '30px',
                fontSize: '24px'
              }}>
                <BookOutlined style={{ marginRight: '15px' }} />
                Course Objective
              </Title>
              
              <Paragraph style={{ 
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.8',
                marginBottom: '30px'
              }}>
                To train a general obstetrician/gynaecologist to function as an independent consultant in reproductive medicine.
              </Paragraph>
              
              <Paragraph style={{ 
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.8'
              }}>
                Santasa with its state of the art facilities provides a comprehensive training programme, 
                specifically aimed at making clinicians with a very practical, effective approach to solve 
                challenges posed by infertility causing conditions.
              </Paragraph>
            </div>
          </Card>
        </Col>
        
        <Col xs={24} lg={12}>
          <Card
            style={{
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: 'none',
              height: '100%'
            }}
          >
            <div style={{ padding: '40px' }}>
              <Title level={3} style={{ 
                color: '#7e52a1',
                marginBottom: '30px',
                fontSize: '24px'
              }}>
                <CheckCircleOutlined style={{ marginRight: '15px' }} />
                Eligibility Criteria
              </Title>
              
              <Timeline
                items={eligibilityCriteria.map((criteria, index) => ({
                  dot: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
                  children: (
                    <Text style={{ 
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.6'
                    }}>
                      {criteria}
                    </Text>
                  )
                }))}
              />
            </div>
          </Card>
        </Col>
      </Row>

      {/* Application Form */}
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <Card
            style={{
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: 'none'
            }}
          >
            <div style={{ padding: '40px' }}>
              <Title level={2} style={{ 
                color: '#7e52a1',
                textAlign: 'center',
                marginBottom: '40px',
                fontSize: '28px'
              }}>
                <FileTextOutlined style={{ marginRight: '15px' }} />
                Join Our Team - Apply Now
              </Title>
              
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
                style={{ maxWidth: '800px', margin: '0 auto' }}
              >
                <Row gutter={[24, 0]}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="fullName"
                      label="Full Name"
                      rules={[{ required: true, message: 'Please enter your full name' }]}
                    >
                      <Input 
                        prefix={<UserOutlined style={{ color: '#7e52a1' }} />}
                        placeholder="Enter your full name"
                        style={{ borderRadius: '10px' }}
                      />
                    </Form.Item>
                  </Col>
                  
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="email"
                      label="Email Address"
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' }
                      ]}
                    >
                      <Input 
                        prefix={<MailOutlined style={{ color: '#7e52a1' }} />}
                        placeholder="Enter your email address"
                        style={{ borderRadius: '10px' }}
                      />
                    </Form.Item>
                  </Col>
                  
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="phone"
                      label="Phone Number"
                      rules={[{ required: true, message: 'Please enter your phone number' }]}
                    >
                      <Input 
                        prefix={<PhoneOutlined style={{ color: '#7e52a1' }} />}
                        placeholder="Enter your phone number"
                        style={{ borderRadius: '10px' }}
                      />
                    </Form.Item>
                  </Col>
                  
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="applicationFor"
                      label="Application For"
                      rules={[{ required: true, message: 'Please select application type' }]}
                    >
                      <Select
                        placeholder="Choose application type"
                        style={{ borderRadius: '10px' }}
                      >
                        <Option value="fellowship-reproductive">Fellowship - Reproductive Medicine</Option>
                        <Option value="fellowship-embryology">Fellowship - Clinical Embryology</Option>
                        <Option value="consultant-ivf">Consultant - IVF Specialist</Option>
                        <Option value="consultant-gynec">Consultant - Gynecologist</Option>
                        <Option value="embryologist">Senior Embryologist</Option>
                        <Option value="andrologist">Andrologist</Option>
                        <Option value="counselor">Fertility Counselor</Option>
                        <Option value="nursing">Nursing Staff</Option>
                        <Option value="lab-technician">Lab Technician</Option>
                        <Option value="other">Other Position</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="qualification"
                      label="Highest Qualification"
                      rules={[{ required: true, message: 'Please enter your qualification' }]}
                    >
                      <Input 
                        placeholder="e.g., MD/MS in Obstetrics & Gynaecology"
                        style={{ borderRadius: '10px' }}
                      />
                    </Form.Item>
                  </Col>
                  
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="experience"
                      label="Years of Experience"
                      rules={[{ required: true, message: 'Please enter your experience' }]}
                    >
                      <Input 
                        placeholder="Enter years of experience"
                        style={{ borderRadius: '10px' }}
                      />
                    </Form.Item>
                  </Col>
                  
                  <Col span={24}>
                    <Form.Item
                      name="motivation"
                      label="Why do you want to join Santasa IVF?"
                      rules={[{ required: true, message: 'Please share your motivation' }]}
                    >
                      <TextArea 
                        placeholder="Share your motivation, career goals, and what you can contribute to our team..."
                        rows={4}
                        style={{ borderRadius: '10px' }}
                      />
                    </Form.Item>
                  </Col>
                  
                  <Col span={24}>
                    <Form.Item
                      name="resume"
                      label="Upload Resume/CV"
                      rules={[{ required: true, message: 'Please upload your resume' }]}
                    >
                      <Upload
                        accept=".pdf,.doc,.docx"
                        beforeUpload={() => false}
                        maxCount={1}
                      >
                        <Button 
                          icon={<UploadOutlined />}
                          style={{ 
                            borderRadius: '10px',
                            height: '50px',
                            width: '100%'
                          }}
                        >
                          Click to Upload Resume
                        </Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                </Row>
                
                <Divider />
                
                <div style={{ textAlign: 'center' }}>
                  <Alert
                    message="Contact Information"
                    description={
                      <div>
                        <Text strong>For any queries, contact us:</Text><br />
                        <Text>Phone: 9845688608</Text><br />
                        <Text>We will get back to you within 24 hours</Text>
                      </div>
                    }
                    type="info"
                    style={{ 
                      marginBottom: '30px',
                      borderRadius: '10px'
                    }}
                  />
                  
                  <Button 
                    type="primary"
                    htmlType="submit"
                    loading={submitLoading}
                    style={{ 
                      height: '50px',
                      width: '200px',
                      background: 'linear-gradient(45deg, #7e52a1, #ea3288)',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '16px',
                      fontWeight: '600'
                    }}
                  >
                    Submit Application
                  </Button>
                </div>
              </Form>
            </div>
          </Card>
        </Col>
      </Row>
      </div>
    </>
  );
};

export default Careers;