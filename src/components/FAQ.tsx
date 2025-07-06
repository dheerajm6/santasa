import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Collapse, Typography, Space, Button } from 'antd';
import { QuestionCircleOutlined, PlusOutlined, ArrowRightOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const faqs = [
  {
    question: 'What is Infertility?',
    answer: 'Infertility is defined as the inability to conceive after one year of regular, unprotected sexual intercourse. It affects approximately 10-15% of couples worldwide and can be due to factors in either partner or both.'
  },
  {
    question: 'What is the difference between Primary & Secondary Infertility?',
    answer: 'Primary infertility refers to couples who have never been able to conceive, while secondary infertility refers to couples who have previously conceived but are now unable to become pregnant again.'
  },
  {
    question: 'How common is Infertility?',
    answer: 'Infertility affects about 10-15% of couples globally. In India, it affects approximately 10-14% of the population, with both male and female factors contributing equally to infertility cases.'
  },
  {
    question: 'What are the causes of infertility in women?',
    answer: 'Female infertility can be caused by ovulation disorders, blocked fallopian tubes, endometriosis, uterine or cervical problems, age-related factors, PCOS, and other hormonal imbalances.'
  },
  {
    question: 'How does age affect a woman\'s ability to have children?',
    answer: 'A woman\'s fertility declines with age, particularly after 35. Egg quality and quantity decrease over time, making it harder to conceive and increasing the risk of miscarriage and chromosomal abnormalities.'
  },
  {
    question: 'What causes infertility in men?',
    answer: 'Male infertility can result from low sperm count, poor sperm motility, abnormal sperm shape, blockages in reproductive tract, hormonal problems, genetic defects, or lifestyle factors like smoking and excessive alcohol consumption.'
  },
  {
    question: 'What is IVF and how does it work?',
    answer: 'IVF (In Vitro Fertilization) is a process where eggs are retrieved from the ovaries and fertilized with sperm in a laboratory. The resulting embryos are then transferred back to the uterus to achieve pregnancy.'
  },
  {
    question: 'What is the success rate of IVF?',
    answer: 'IVF success rates vary based on age, cause of infertility, and clinic expertise. Generally, success rates range from 30-60% per cycle, with younger women typically having higher success rates.'
  }
];

const FAQ: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div id="faq" className="baby-texture-bg" style={{ 
      padding: '100px 50px',
      background: '#fff'
    }}>
      <div className="floating-hearts"></div>
      <Row gutter={[48, 48]} align="middle">
        <Col xs={24} lg={10}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
              <Title level={2} style={{ 
                color: '#7e52a1',
                fontSize: '36px',
                marginBottom: '20px'
              }}>
                Frequently Asked Questions 🤔💭
              </Title>
              <Paragraph style={{ 
                fontSize: '18px',
                color: '#666',
                lineHeight: '1.6'
              }}>
                Get answers to common questions about fertility, treatments, and our services. 
                Our expert team is here to guide you through every step of your journey.
              </Paragraph>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #f8f4ff 0%, #fff5fb 100%)',
              padding: '30px',
              borderRadius: '16px',
              textAlign: 'center'
            }}>
              <QuestionCircleOutlined style={{ 
                fontSize: '48px', 
                color: '#7e52a1',
                marginBottom: '15px'
              }} />
              <Title level={4} style={{ color: '#7e52a1', marginBottom: '10px' }}>
                Have More Questions?
              </Title>
              <Paragraph style={{ color: '#666', marginBottom: '20px' }}>
                Our specialists are available for personalized consultations
              </Paragraph>
              <a href="#contact" style={{ 
                color: '#ea3288',
                textDecoration: 'underline',
                fontWeight: '500'
              }}>
                Schedule a Consultation
              </a>
            </div>
          </Space>
        </Col>
        
        <Col xs={24} lg={14}>
          <Collapse
            expandIcon={({ isActive }) => (
              <PlusOutlined 
                rotate={isActive ? 45 : 0} 
                style={{ 
                  color: '#7e52a1',
                  fontSize: '16px',
                  transition: 'transform 0.3s ease'
                }}
              />
            )}
            ghost
            size="large"
          >
            {faqs.map((faq, index) => (
              <Panel
                key={index}
                header={
                  <Title level={5} style={{ 
                    color: '#7e52a1',
                    margin: 0,
                    fontSize: '16px'
                  }}>
                    {faq.question}
                  </Title>
                }
                style={{
                  marginBottom: '16px',
                  background: '#fff',
                  borderRadius: '12px',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}
              >
                <Paragraph style={{ 
                  color: '#666',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  margin: '10px 0 0 0'
                }}>
                  {faq.answer}
                </Paragraph>
              </Panel>
            ))}
          </Collapse>
          
          {/* View More Button */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              onClick={() => navigate('/faq')}
              style={{
                background: 'linear-gradient(45deg, #7e52a1, #ea3288)',
                border: 'none',
                borderRadius: '25px',
                height: '48px',
                fontSize: '16px',
                fontWeight: '600',
                padding: '0 40px'
              }}
            >
              View All FAQs
            </Button>
            <Paragraph style={{ 
              color: '#666', 
              fontSize: '14px',
              marginTop: '10px'
            }}>
              Explore 30+ more frequently asked questions
            </Paragraph>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FAQ;