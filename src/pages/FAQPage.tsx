import React, { useState } from 'react';
import { Typography, Collapse, Space, Input, Tag, Row, Col, Card } from 'antd';
import { SearchOutlined, QuestionCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const allFaqs = [
  // Basic Understanding
  {
    category: 'Basic Understanding',
    questions: [
      {
        question: 'What is Infertility?',
        answer: 'Infertility is defined as the inability to conceive after one year of regular, unprotected sexual intercourse. For women over 35, this timeframe is reduced to six months. It affects approximately 10-15% of couples worldwide.'
      },
      {
        question: 'What is Subfertility?',
        answer: 'Subfertility refers to a delay in achieving pregnancy rather than the complete inability to conceive. Couples with subfertility have reduced fertility but may still conceive naturally, though it may take longer than average.'
      },
      {
        question: 'What is the difference between Primary & secondary infertility?',
        answer: 'Primary infertility refers to couples who have never achieved a pregnancy despite trying for at least one year. Secondary infertility occurs when couples who have previously conceived naturally are unable to conceive again after trying for one year.'
      },
      {
        question: 'How common is Infertility?',
        answer: 'Infertility affects about 10-15% of couples globally. In India, approximately 27.5 million couples are affected by infertility. Both male and female factors contribute equally to infertility cases, with about one-third of cases attributed to each.'
      },
      {
        question: "Isn't infertility is a stressful problem to deal with?",
        answer: 'Yes, infertility can be emotionally challenging. It often causes stress, anxiety, depression, and strain on relationships. At Santasa IVF, we provide comprehensive emotional support and counseling alongside medical treatment to help couples cope effectively.'
      }
    ]
  },
  // Causes and Factors
  {
    category: 'Causes and Factors',
    questions: [
      {
        question: 'What are the causes of infertility in women?',
        answer: 'Female infertility can be caused by: ovulation disorders (PCOS, hormonal imbalances), blocked or damaged fallopian tubes, endometriosis, uterine fibroids, cervical factors, premature ovarian failure, pelvic adhesions, and age-related factors.'
      },
      {
        question: "How does age affect a woman's ability to have children?",
        answer: "Women's fertility declines with age, particularly after 35. The quantity and quality of eggs decrease, making conception harder and increasing miscarriage risk. By age 40, the chance of pregnancy per cycle drops to about 5%, compared to 20% at age 30."
      },
      {
        question: 'What causes infertility in men?',
        answer: 'Male infertility causes include: low sperm count (oligospermia), poor sperm motility, abnormal sperm morphology, varicocele, hormonal imbalances, genetic defects, undescended testicles, infections, ejaculation issues, and lifestyle factors like smoking and obesity.'
      },
      {
        question: 'Are there any other causes?',
        answer: 'Yes, other causes include: environmental toxins, certain medications, radiation or chemotherapy, excessive alcohol consumption, drug use, extreme stress, nutritional deficiencies, autoimmune disorders, and certain chronic diseases like diabetes or thyroid disorders.'
      },
      {
        question: 'What is combined infertility?',
        answer: 'Combined infertility occurs when both partners have fertility issues contributing to their inability to conceive. This happens in about 20-30% of infertile couples and often requires treating both partners simultaneously for optimal results.'
      },
      {
        question: 'What is unexplained infertility?',
        answer: 'Unexplained infertility is diagnosed when standard fertility tests fail to identify a specific cause. It accounts for about 15-20% of infertility cases. Despite normal test results, subtle factors may still affect fertility, and treatment can still be successful.'
      }
    ]
  },
  // Diagnosis and Testing
  {
    category: 'Diagnosis and Testing',
    questions: [
      {
        question: 'When should I see the doctor?',
        answer: 'Couples under 35 should seek help after one year of trying to conceive. Women over 35 should consult after six months. See a doctor immediately if you have irregular periods, known fertility issues, history of pelvic infections, or multiple miscarriages.'
      },
      {
        question: "What's involved during the first visit?",
        answer: 'The first visit includes: detailed medical history of both partners, discussion of menstrual cycles and sexual habits, physical examination, basic fertility tests ordering, lifestyle assessment, and creation of a preliminary treatment plan based on findings.'
      },
      {
        question: 'What are the tests usually done?',
        answer: 'Common tests include: hormone blood tests (FSH, LH, AMH, thyroid), ultrasound scans, HSG (hysterosalpingography), semen analysis, ovulation tracking, and sometimes laparoscopy or hysteroscopy. Tests are customized based on individual circumstances.'
      },
      {
        question: 'How are hormone tests interpreted?',
        answer: 'Hormone tests assess ovarian reserve and function. FSH >10 may indicate diminished reserve. AMH <1.0 suggests low egg count. Abnormal thyroid or prolactin levels can affect fertility. Results are interpreted in context with age and other factors.'
      },
      {
        question: 'What is HSG?',
        answer: 'Hysterosalpingography (HSG) is an X-ray procedure using contrast dye to evaluate the uterus and fallopian tubes. It can detect blockages, abnormalities, or scarring. The procedure takes 15-30 minutes and may cause mild cramping.'
      },
      {
        question: 'What is Laparoscopy?',
        answer: 'Laparoscopy is a minimally invasive surgical procedure using a camera to examine pelvic organs. It can diagnose and treat endometriosis, adhesions, blocked tubes, and ovarian cysts. It requires general anesthesia and small abdominal incisions.'
      },
      {
        question: 'What does semen analysis involve?',
        answer: 'Semen analysis evaluates sperm count, motility, morphology, volume, and pH. The sample is collected after 2-5 days of abstinence. Normal values: count >15 million/ml, motility >40%, normal morphology >4%. Multiple samples may be needed.'
      }
    ]
  },
  // Treatment Options
  {
    category: 'Treatment Options',
    questions: [
      {
        question: 'How do doctors treat infertility?',
        answer: 'Treatment depends on the cause and includes: ovulation induction medications, IUI (intrauterine insemination), IVF (in vitro fertilization), surgical corrections, lifestyle modifications, and treatment of underlying conditions. A stepwise approach is usually followed.'
      },
      {
        question: 'What is Ovulation Induction?',
        answer: 'Ovulation induction uses medications to stimulate egg development and release in women with irregular or absent ovulation. Common drugs include Clomiphene, Letrozole, and Gonadotropins. Monitoring with ultrasound and blood tests ensures safe treatment.'
      },
      {
        question: 'Why Induce Ovulation?',
        answer: 'Ovulation induction helps women who don\'t ovulate regularly or at all to produce mature eggs. It\'s used for PCOS, hypothalamic dysfunction, and unexplained infertility. It increases pregnancy chances by ensuring egg availability during fertile periods.'
      },
      {
        question: 'Who Can Benefit from Ovulation Induction?',
        answer: 'Women with PCOS, irregular periods, anovulation, unexplained infertility, or mild male factor infertility (combined with IUI) can benefit. Success depends on age, ovarian reserve, and other fertility factors. Partner\'s sperm should be adequate.'
      },
      {
        question: 'What are the factors Affecting Ovulation Induction?',
        answer: 'Success factors include: woman\'s age, ovarian reserve (AMH levels), body weight, PCOS severity, insulin resistance, thyroid function, prolactin levels, and male partner\'s sperm quality. Lifestyle factors like stress and nutrition also play roles.'
      }
    ]
  },
  // Procedures
  {
    category: 'Procedures',
    questions: [
      {
        question: "IUI - How it's done?",
        answer: 'IUI involves placing washed, concentrated sperm directly into the uterus during ovulation. Steps: ovulation monitoring, sperm collection and preparation, insertion via thin catheter. The procedure is painless, takes 5-10 minutes, and requires no anesthesia.'
      },
      {
        question: 'How successful is an IUI?',
        answer: 'IUI success rates vary: 10-20% per cycle for women under 35, decreasing with age. Factors affecting success: age, cause of infertility, sperm quality, and number of follicles. Multiple cycles (3-6) may be recommended for optimal chances.'
      },
      {
        question: 'What happens during laparoscopy?',
        answer: 'During laparoscopy: general anesthesia is given, small incisions made in abdomen, CO2 gas inflates abdomen, camera inserted to view organs, instruments used for treatment if needed. Procedure typically takes 30-60 minutes depending on findings.'
      },
      {
        question: 'Risk associated with laparoscopy',
        answer: 'Laparoscopy risks are minimal but include: bleeding, infection, organ injury (rare), anesthesia reactions, shoulder pain from gas, and adhesion formation. Serious complications occur in less than 1% of cases when performed by experienced surgeons.'
      },
      {
        question: 'Recovery period following laparoscopy',
        answer: 'Recovery is usually quick: same-day discharge or overnight stay, mild pain for 2-3 days, return to normal activities in 1 week, avoid heavy lifting for 2 weeks. Full internal healing takes 4-6 weeks. Follow-up visit scheduled after 1-2 weeks.'
      },
      {
        question: 'What happens during Hysteroscopy?',
        answer: 'Hysteroscopy involves inserting a thin camera through the cervix to examine the uterine cavity. It can diagnose and treat polyps, fibroids, adhesions, and septum. Usually done under local anesthesia as an outpatient procedure taking 15-30 minutes.'
      }
    ]
  },
  // Specific Conditions
  {
    category: 'Specific Conditions',
    questions: [
      {
        question: 'What happens if I have too much testosterone?',
        answer: 'Excess testosterone in women can cause: irregular periods, reduced fertility, acne, excess hair growth (hirsutism), male-pattern baldness, and PCOS. Treatment includes anti-androgen medications, birth control pills, and lifestyle modifications to restore hormonal balance.'
      },
      {
        question: 'What is ovarian drilling?',
        answer: 'Ovarian drilling is a laparoscopic procedure for PCOS patients who don\'t respond to medications. Small holes are made in ovaries using laser or electrocautery to reduce androgen production and restore ovulation. It\'s an alternative to gonadotropin injections.'
      },
      {
        question: 'Will I get pregnant after ovarian drilling?',
        answer: 'Ovarian drilling success rates: 50-80% of women ovulate regularly afterward, 40-60% conceive within one year. Success is higher in women under 35 with no other fertility factors. Effects may last several years but can diminish over time.'
      },
      {
        question: 'What are the risks of ovarian drilling?',
        answer: 'Risks include: standard surgical risks (infection, bleeding), adhesion formation, rarely ovarian damage or reduced function, and theoretical risk of premature menopause if excessive drilling. When performed correctly by experienced surgeons, risks are minimal and benefits often outweigh them.'
      }
    ]
  }
];

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredFaqs = allFaqs.map(category => ({
    ...category,
    questions: category.questions.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const totalQuestions = allFaqs.reduce((sum, cat) => sum + cat.questions.length, 0);

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8f4ff 0%, #fff5fb 100%)',
      paddingTop: '80px'
    }}>
      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(45deg, #7e52a1, #ea3288)',
        padding: '60px 50px',
        textAlign: 'center',
        color: 'white'
      }}>
        <Title level={1} style={{ 
          color: 'white',
          fontSize: '42px',
          marginBottom: '20px'
        }}>
          Frequently Asked Questions
        </Title>
        <Paragraph style={{ 
          fontSize: '18px',
          color: 'rgba(255,255,255,0.9)',
          maxWidth: '600px',
          margin: '0 auto 30px'
        }}>
          Find answers to {totalQuestions}+ common questions about fertility, treatments, and our services
        </Paragraph>
        
        {/* Search Bar */}
        <Input
          size="large"
          placeholder="Search your question..."
          prefix={<SearchOutlined style={{ color: '#7e52a1' }} />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            maxWidth: '500px',
            borderRadius: '25px',
            height: '50px',
            fontSize: '16px'
          }}
        />
      </div>

      {/* Category Tags */}
      <div style={{ 
        padding: '30px 50px',
        textAlign: 'center',
        background: 'white',
        borderBottom: '1px solid #f0f0f0'
      }}>
        <Space wrap size="middle">
          <Tag
            style={{
              padding: '8px 20px',
              fontSize: '14px',
              cursor: 'pointer',
              background: !activeCategory ? 'linear-gradient(45deg, #7e52a1, #ea3288)' : '#f0f0f0',
              color: !activeCategory ? 'white' : '#666',
              border: 'none'
            }}
            onClick={() => setActiveCategory(null)}
          >
            All Categories
          </Tag>
          {allFaqs.map((category) => (
            <Tag
              key={category.category}
              style={{
                padding: '8px 20px',
                fontSize: '14px',
                cursor: 'pointer',
                background: activeCategory === category.category ? 'linear-gradient(45deg, #7e52a1, #ea3288)' : '#f0f0f0',
                color: activeCategory === category.category ? 'white' : '#666',
                border: 'none'
              }}
              onClick={() => setActiveCategory(category.category)}
            >
              {category.category} ({category.questions.length})
            </Tag>
          ))}
        </Space>
      </div>

      {/* FAQ Content */}
      <div style={{ padding: '50px' }}>
        {filteredFaqs.length === 0 ? (
          <Card style={{ 
            textAlign: 'center', 
            padding: '60px',
            borderRadius: '16px',
            border: 'none',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <QuestionCircleOutlined style={{ fontSize: '48px', color: '#ddd', marginBottom: '20px' }} />
            <Title level={4} style={{ color: '#666' }}>No questions found</Title>
            <Paragraph style={{ color: '#999' }}>
              Try searching with different keywords
            </Paragraph>
          </Card>
        ) : (
          <Row gutter={[32, 32]}>
            {filteredFaqs
              .filter(cat => !activeCategory || cat.category === activeCategory)
              .map((category, catIndex) => (
              <Col span={24} key={catIndex}>
                <Card
                  title={
                    <Title level={3} style={{ 
                      color: '#7e52a1',
                      margin: 0,
                      fontSize: '24px'
                    }}>
                      {category.category}
                    </Title>
                  }
                  style={{
                    borderRadius: '16px',
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                  }}
                  bodyStyle={{ padding: '30px' }}
                >
                  <Collapse
                    ghost
                    expandIconPosition="right"
                    style={{ background: 'transparent' }}
                  >
                    {category.questions.map((faq, index) => (
                      <Panel
                        key={`${catIndex}-${index}`}
                        header={
                          <Title level={5} style={{ 
                            color: '#444',
                            margin: 0,
                            fontSize: '16px',
                            fontWeight: '500'
                          }}>
                            {faq.question}
                          </Title>
                        }
                        style={{
                          marginBottom: '12px',
                          background: '#f8f8f8',
                          borderRadius: '12px',
                          border: 'none'
                        }}
                      >
                        <Paragraph style={{ 
                          color: '#666',
                          fontSize: '14px',
                          lineHeight: '1.8',
                          margin: '10px 0 0 0'
                        }}>
                          {faq.answer}
                        </Paragraph>
                      </Panel>
                    ))}
                  </Collapse>
                </Card>
              </Col>
            ))}
          </Row>
        )}
        
        {/* Still Have Questions */}
        <Card style={{
          marginTop: '50px',
          background: 'linear-gradient(135deg, #f8f4ff 0%, #fff5fb 100%)',
          borderRadius: '16px',
          border: 'none',
          textAlign: 'center',
          padding: '40px'
        }}>
          <QuestionCircleOutlined style={{ 
            fontSize: '48px', 
            color: '#7e52a1',
            marginBottom: '20px'
          }} />
          <Title level={3} style={{ color: '#7e52a1', marginBottom: '15px' }}>
            Still Have Questions?
          </Title>
          <Paragraph style={{ 
            color: '#666', 
            fontSize: '16px',
            marginBottom: '25px',
            maxWidth: '500px',
            margin: '0 auto 25px'
          }}>
            Our fertility specialists are here to provide personalized answers and guidance for your specific situation.
          </Paragraph>
          <Space size="large">
            <a href="tel:9620099936" style={{
              display: 'inline-block',
              padding: '12px 30px',
              background: 'linear-gradient(45deg, #7e52a1, #ea3288)',
              color: 'white',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              Call Us Now
            </a>
            <a href="/#contact" style={{
              display: 'inline-block',
              padding: '12px 30px',
              border: '2px solid #7e52a1',
              color: '#7e52a1',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              Book Consultation
            </a>
          </Space>
        </Card>
      </div>
    </div>
  );
};

export default FAQPage;