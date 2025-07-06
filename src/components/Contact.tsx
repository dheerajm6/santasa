import React from 'react';
import { Row, Col, Card, Typography, Space, Button, Form, Input } from 'antd';
import { 
  PhoneOutlined, 
  MailOutlined, 
  EnvironmentOutlined, 
  ClockCircleOutlined,
  CalendarOutlined,
  UserOutlined,
} from '@ant-design/icons';
// Using public folder for reliable image loading
const mysoreImage = '/Mysore.png';
const hassanImage = '/Hassan.png';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Contact: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <div id="contact" className="baby-texture-bg" style={{ 
      padding: '100px 50px',
      background: 'linear-gradient(135deg, #f8f4ff 0%, #fff5fb 100%)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <Title level={2} style={{ 
          color: '#7e52a1',
          fontSize: '36px',
          marginBottom: '20px'
        }}>
          Get In Touch 💝
        </Title>
        <Paragraph style={{ 
          fontSize: '18px',
          color: '#666',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Ready to start your journey to parenthood? Contact us today to schedule 
          your consultation with our fertility specialists.
        </Paragraph>
      </div>
      
      <Row gutter={[32, 32]}>
        <Col xs={24} lg={12}>
          <Card
            style={{
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: 'none',
              height: '100%'
            }}
            bodyStyle={{ padding: '40px' }}
          >
            <Title level={3} style={{ 
              color: '#7e52a1',
              marginBottom: '30px',
              fontSize: '24px'
            }}>
              Contact Information
            </Title>
            
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '20px',
                  gap: '15px'
                }}>
                  <img 
                    src={mysoreImage} 
                    alt="Mysore Landmarks" 
                    style={{ 
                      width: '60px', 
                      height: '60px', 
                      objectFit: 'contain',
                      borderRadius: '8px'
                    }} 
                  />
                  <Title level={4} style={{ 
                    color: '#7e52a1',
                    fontSize: '18px',
                    margin: 0
                  }}>
                    Mysuru Center
                  </Title>
                </div>
                <Space direction="vertical" size="middle">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <PhoneOutlined style={{ color: '#ea3288', marginRight: '15px', fontSize: '16px' }} />
                    <span style={{ color: '#666' }}>9620099936 / 0821-4000718</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <MailOutlined style={{ color: '#ea3288', marginRight: '15px', fontSize: '16px' }} />
                    <span style={{ color: '#666' }}>mysuru@santasaivf.com</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <EnvironmentOutlined style={{ color: '#ea3288', marginRight: '15px', fontSize: '16px', marginTop: '4px' }} />
                    <span style={{ color: '#666' }}>
                      963/1A, New Kanthraju Urs Road Vedanta Hemmige Circle,<br />
                      opp. Rasik Honda Showroom, Lakshmipuram,<br />
                      Mysuru - 570004
                    </span>
                  </div>
                </Space>
              </div>
              
              <div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '20px',
                  gap: '15px'
                }}>
                  <img 
                    src={hassanImage} 
                    alt="Hassan Landmarks" 
                    style={{ 
                      width: '60px', 
                      height: '60px', 
                      objectFit: 'contain',
                      borderRadius: '8px'
                    }} 
                  />
                  <Title level={4} style={{ 
                    color: '#7e52a1',
                    fontSize: '18px',
                    margin: 0
                  }}>
                    Hassan Center
                  </Title>
                </div>
                <Space direction="vertical" size="middle">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <PhoneOutlined style={{ color: '#ea3288', marginRight: '15px', fontSize: '16px' }} />
                    <span style={{ color: '#666' }}>9620099969 / 08172-269770</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <MailOutlined style={{ color: '#ea3288', marginRight: '15px', fontSize: '16px' }} />
                    <span style={{ color: '#666' }}>hassan@santasaivf.com</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <EnvironmentOutlined style={{ color: '#ea3288', marginRight: '15px', fontSize: '16px', marginTop: '4px' }} />
                    <span style={{ color: '#666' }}>
                      1st Floor, Sri Venkatadri Arcade, Next to Reliance Smart,<br />
                      3rd Cross, Shankar Mutt Road, KR Puram,<br />
                      Hassan - 573 201
                    </span>
                  </div>
                </Space>
              </div>
              
              <div>
                <Title level={4} style={{ 
                  color: '#7e52a1',
                  fontSize: '18px',
                  marginBottom: '20px'
                }}>
                  Clinic Hours
                </Title>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ClockCircleOutlined style={{ color: '#ea3288', marginRight: '15px', fontSize: '16px' }} />
                  <span style={{ color: '#666' }}>
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: By Appointment Only
                  </span>
                </div>
              </div>
            </Space>
          </Card>
        </Col>
        
        <Col xs={24} lg={12}>
          <Card
            style={{
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: 'none',
              height: '100%'
            }}
            bodyStyle={{ padding: '40px' }}
          >
            <Title level={3} style={{ 
              color: '#7e52a1',
              marginBottom: '30px',
              fontSize: '24px'
            }}>
              Book Your Consultation
            </Title>
            
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              size="large"
            >
              <Form.Item
                name="name"
                label="Full Name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input 
                  prefix={<UserOutlined style={{ color: '#7e52a1' }} />}
                  placeholder="Enter your full name"
                  style={{ borderRadius: '8px' }}
                />
              </Form.Item>
              
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: 'Please enter your phone number' }]}
              >
                <Input 
                  prefix={<PhoneOutlined style={{ color: '#7e52a1' }} />}
                  placeholder="Enter your phone number"
                  style={{ borderRadius: '8px' }}
                />
              </Form.Item>
              
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
                  style={{ borderRadius: '8px' }}
                />
              </Form.Item>
              
              <Form.Item
                name="message"
                label="Message"
              >
                <TextArea 
                  placeholder="Tell us about your concerns or questions..."
                  rows={4}
                  style={{ borderRadius: '8px' }}
                />
              </Form.Item>
              
              <Form.Item>
                <Button 
                  type="primary"
                  htmlType="submit"
                  icon={<CalendarOutlined />}
                  style={{ 
                    width: '100%',
                    height: '50px',
                    background: 'linear-gradient(45deg, #7e52a1, #ea3288)',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                >
                  Request Consultation
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
      
      {/* Google Maps Section */}
      <Row gutter={[32, 32]} style={{ marginTop: '60px' }}>
        <Col span={24}>
          <Title level={3} style={{ 
            color: '#7e52a1',
            textAlign: 'center',
            marginBottom: '40px',
            fontSize: '28px'
          }}>
            Find Us on Map 📍
          </Title>
        </Col>
        
        <Col xs={24} lg={12}>
          <Card
            style={{
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: 'none',
              overflow: 'hidden'
            }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '20px',
              gap: '15px'
            }}>
              <img 
                src={mysoreImage} 
                alt="Mysore Landmarks" 
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  objectFit: 'contain',
                  borderRadius: '8px'
                }} 
              />
              <Title level={4} style={{ 
                color: '#7e52a1',
                fontSize: '20px',
                margin: 0
              }}>
                Mysuru Center
              </Title>
            </div>
            
            <div style={{ 
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.7636834933895!2d76.6367767!3d12.2950408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf701d6c8a2a7b%3A0x1234567890abcdef!2sSantasa%20IVF%20%26%20Endosurgery%20Institute%2C%20Mysuru!5e0!3m2!1sen!2sin!4v1625731234567!5m2!1sen!2sin"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                  borderRadius: '8px'
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Santasa IVF Mysuru Location"
              />
            </div>
            
            <div style={{ 
              marginTop: '15px',
              padding: '15px',
              backgroundColor: '#f8f4ff',
              borderRadius: '8px'
            }}>
              <Paragraph style={{ 
                margin: 0,
                color: '#666',
                fontSize: '14px'
              }}>
                📍 963/1A, New Kanthraju Urs Road Vedanta Hemmige Circle, opp. Rasik Honda Showroom, Lakshmipuram, Mysuru - 570004
              </Paragraph>
              <Button 
                type="link" 
                href="https://maps.app.goo.gl/LT9ZZ9jUENY8orvS7"
                target="_blank"
                style={{ 
                  color: '#7e52a1',
                  padding: '5px 0',
                  fontSize: '13px'
                }}
              >
                Get Directions →
              </Button>
            </div>
          </Card>
        </Col>
        
        <Col xs={24} lg={12}>
          <Card
            style={{
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: 'none',
              overflow: 'hidden'
            }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '20px',
              gap: '15px'
            }}>
              <img 
                src={hassanImage} 
                alt="Hassan Landmarks" 
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  objectFit: 'contain',
                  borderRadius: '8px'
                }} 
              />
              <Title level={4} style={{ 
                color: '#7e52a1',
                fontSize: '20px',
                margin: 0
              }}>
                Hassan Center
              </Title>
            </div>
            
            <div style={{ 
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4567890123456!2d76.1008923!3d13.0060389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba54a2f3d7b7e5b%3A0x9876543210fedcba!2sSantasa%20Hassan%20IVF%20and%20Endosurgery%20Institute!5e0!3m2!1sen!2sin!4v1625731234567!5m2!1sen!2sin"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                  borderRadius: '8px'
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Santasa IVF Hassan Location"
              />
            </div>
            
            <div style={{ 
              marginTop: '15px',
              padding: '15px',
              backgroundColor: '#f8f4ff',
              borderRadius: '8px'
            }}>
              <Paragraph style={{ 
                margin: 0,
                color: '#666',
                fontSize: '14px'
              }}>
                📍 1st Floor, Sri Venkatadri Arcade, Next to Reliance Smart, 3rd Cross, Shankar Mutt Road, KR Puram, Hassan - 573 201
              </Paragraph>
              <Button 
                type="link" 
                href="https://maps.app.goo.gl/Gv8ExgQVtADaucKPA"
                target="_blank"
                style={{ 
                  color: '#7e52a1',
                  padding: '5px 0',
                  fontSize: '13px'
                }}
              >
                Get Directions →
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;