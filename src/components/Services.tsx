import React from 'react';
import { Row, Col, Card, Typography, Space, Button, Modal } from 'antd';
import { 
  HeartOutlined, 
  StarOutlined,
  CrownOutlined,
  InfoCircleOutlined,
  CloseOutlined
} from '@ant-design/icons';

// Import service icons
import comprehensiveFertilityIcon from '../assets/icons/comprehensive fertility care.png';
import testTubeBabyIcon from '../assets/icons/Test tube Baby Facility.png';
import fertilityEnhancingIcon from '../assets/icons/Fertility Enhancing Surgery.png';
import pgtIcon from '../assets/icons/PGT.png';
import cryostorageIcon from '../assets/icons/Crystorage of sperm.png';
import thirdPartyIcon from '../assets/icons/Third- Party Reproduction.png';
import regenerativeIcon from '../assets/icons/Regenerative Medicine Services.png';
import surrogacyIcon from '../assets/icons/Altruistic Surrogacy.png';
import aestheticIcon from '../assets/icons/Asethetic Gynaecology.png';
import gynacCancerIcon from '../assets/icons/gynac-cancer-screening.png';
import breastClinicIcon from '../assets/icons/beast-clinic.png';
import sexualHealthIcon from '../assets/icons/sexual-health-clinic-hover.png';
import menopauseIcon from '../assets/icons/Menopause.png';

// Import process images
import iuiProcessImage from '../assets/images/IUI Process.jpg';

// Import cryopreservation icons
import delayingPregnancyIcon from '../assets/icons/Delaying Pregnancy.png';
import pgtTestingIcon from '../assets/icons/Preimplantation Genetic Testing.png';
import radiationChemoIcon from '../assets/icons/Who Needs Radiation or Chemotherapy.png';
import unusedEmbryosIcon from '../assets/icons/Unused Frozen Embryos during IVF .png';

// Import third-party reproduction icons
import prematureOvarianFailureIcon from '../assets/icons/Premature ovarian failure.png';
import diminishedOvarianReserveIcon from '../assets/icons/Diminished ovarian reserve.png';
import geneticDiseasesIcon from '../assets/icons/Couple with the chances of Genetically transmitted diseases.png';
import ivfFailureIcon from '../assets/icons/A previous history of IVF failure due to low-quality eggs .png';

const { Title, Paragraph } = Typography;

const detailedServices = {
  'Comprehensive Fertility Care': {
    icon: <img src={comprehensiveFertilityIcon} alt="Comprehensive Fertility Care" style={{ width: '40px', height: '40px' }} />,
    title: 'Comprehensive Fertility Care',
    description: 'Complete fertility evaluation and personalized treatment plans for couples seeking to conceive.',
    detailedContent: {
      overview: `Santasa has a well-standardized andrology lab for preparing the sperms for IUI and a dedicated IUI suite.

Intrauterine insemination (IUI) is another type of treatment for infertility. IUI is known by most people as artificial insemination. In this procedure, the woman is injected with specially prepared sperm. Sometimes the woman is also treated with medicines that stimulate ovulation before IUI.`,
      usedFor: [
        'Unexplained infertility',
        'Mild endometriosis', 
        'Issues with the cervix or cervical mucus',
        'Low sperm count',
        'Decreased sperm motility',
        'Issues with ejaculation or erection',
        'A single woman wishing to conceive through donor sperm',
        'A couple wanting to avoid passing on a genetic defect from the male partner to the child'
      ],
      process: `Before having the insemination procedure, you may take fertility medicines that stimulate ovulation. Semen is collected from your partner or a donor. It goes through a process called "sperm washing" that collects a concentrated amount of healthy sperm from the semen.

Then fertility specialist at Santasa IVF puts the sperm right into your uterus. Pregnancy happens if sperm fertilizes your egg and the fertilized egg implants in the lining of your uterus.`,
      processImage: iuiProcessImage,
      successRate: 'Success rates depend on the causes of you and your partner\'s infertility causes and age. The success rate for IUI with fertility drugs is about 10 - 15% per cycle.'
    }
  },
  'Test Tube Baby Facility - IVF/ICSI': {
    icon: <img src={testTubeBabyIcon} alt="Test Tube Baby Facility" style={{ width: '40px', height: '40px' }} />,
    title: 'Test Tube Baby Facility - IVF/ICSI',
    description: 'Advanced In Vitro Fertilization and Intracytoplasmic Sperm Injection with state-of-the-art laboratory.',
    detailedContent: {
      overview: `Intracytoplasmic Sperm Injection (ICSI) is an advanced assisted reproductive technology where a single sperm is directly injected into an egg. This precise technique is performed in our state-of-the-art embryology laboratory at Santasa IVF, offering hope to couples with severe male fertility issues.`,
      usedFor: [
        'Very low sperm count (also known as oligospermia)',
        'Abnormally shaped sperm (also known as teratozoospermia)',
        'Poor sperm movement (also known as asthenozoospermia)',
        'The previous IVF cycle had few or no fertilized eggs',
        'When frozen sperm is being used'
      ],
      process: `The ICSI procedure involves careful preparation of both eggs and sperm, followed by the precise injection of a single sperm directly into each mature egg using specialized micromanipulation equipment. This ensures fertilization even with the most challenging sperm parameters.`,
      successRate: 'ICSI success rates at Santasa IVF are comparable to conventional IVF when performed by our experienced embryologists, with success rates varying based on age and specific fertility factors.'
    }
  },
  'Fertility Enhancing Surgery': {
    icon: <img src={fertilityEnhancingIcon} alt="Fertility Enhancing Surgery" style={{ width: '40px', height: '40px' }} />,
    title: 'Fertility Enhancing Surgery',
    description: 'Minimally invasive surgical procedures to correct anatomical issues affecting fertility.',
    detailedContent: {
      overview: `ENDOSURGERY DIVISION

A number of highly advanced reproductive surgeries are being done at Santasa, most of them are being done as day care procedures, where in the patient returns home on the day of surgery itself as advanced anaesthetics and micro incisions are utilized.

Endoscopic surgery is an innovative surgical procedure performed through very small incisions in the abdomen or other body cavities, using specialized instruments. The name of a particular surgery like Laparoscopy or Hysteroscopy denotes the body cavity that is being operated.`,
      laparoscopicSurgeries: [
        'Diagnostic Laparoscopy',
        'Adhesiolysis',
        'Ovarian Drilling',
        'Ovarian Cystectomy',
        'Oophorectomy',
        'Tubal / Ectopic Pregnancy',
        'Tubal Sterilization',
        'Laparoscopic Myomectomy',
        'Laparoscopic Hysterectomy'
      ],
      hysteroscopicSurgeries: [
        'Diagnostic Hysteroscopy',
        'Adhesiolysis',
        'Polypectomy',
        'Myometomy',
        'Misplaced Cu T',
        'Septum resection',
        'Endometrial Ablation'
      ],
      specialSurgeries: [
        'Testicular Biopsy/TESA/MESA/PESA : For Men with obstructive azoospermia-prior to ICSI',
        'Tubal Recanalization : For Women who wish to conceive after tubectomy'
      ],
      benefits: [
        'Less invasive, do not require opening of the abdomen as in conventional surgery',
        'Less post operative discomfort since the incisions are much smaller',
        'Quicker recovery times',
        'Shorter hospital stays',
        'Earlier return to full activities',
        'Much smaller scars',
        'There may be less internal scarring when the procedures are performed in a minimally invasive fashion compared to standard open surgery'
      ],
      conditions: [
        'Infertility',
        'Pelvic pain of uncertain cause',
        'Ovarian cysts',
        'Endometriosis',
        'Pelvic adhesions',
        'Ectopic pregnancy',
        'Hysterectomy',
        'Tubal ligation'
      ],
      additionalInfo: 'Hystero Laparoscopy (Combined laparoscopy and Hysteroscopy) is very useful for women who are infertile or having difficulty in becoming pregnant.'
    }
  },
  'PGT (Embryo Biopsy)': {
    icon: <img src={pgtIcon} alt="PGT Embryo Biopsy" style={{ width: '40px', height: '40px' }} />,
    title: 'PGT (Embryo Biopsy)',
    description: 'Preimplantation genetic testing to screen embryos for chromosomal abnormalities.',
    detailedContent: {
      overview: `Pre implantation genetic diagnosis (PGD) is an IVF procedure designed to examine your embryos for chromosomal abnormalities.

Embryos are created by combining eggs and sperm in the laboratory. From each embryo, one or two blastomeres are removed and tested. If the embryo is judged to be free of the disorder, they are transferred to the uterine cavity.`,
      recommendedFor: [
        'Women older than 37',
        'Intended parents with known inherited genetic diseases such as Cystic Fibrosis',
        'History of recurrent miscarriages due to chromosomal abnormalities'
      ],
      process: `The PGD process involves creating embryos through IVF, carefully removing one or two cells (blastomeres) from each embryo for genetic analysis, and then transferring only the healthy embryos to the uterine cavity.`,
      benefits: 'PGD helps prevent the transmission of genetic disorders and reduces the risk of miscarriage by ensuring only chromosomally normal embryos are transferred.'
    }
  },
  'Cryostorage of Sperm, Eggs and Embryos': {
    icon: <img src={cryostorageIcon} alt="Cryostorage of Sperm" style={{ width: '40px', height: '40px' }} />,
    title: 'Cryostorage of Sperm, Eggs and Embryos',
    description: 'Advanced freezing technology for preserving reproductive cells for future use.',
    detailedContent: {
      overview: `Cryopreservation is the systematic freezing and storage of eggs, sperm or embryos, allowing the use of preserved cells in future. Cryopreservation is becoming more and more popular among women and men who are looking to start a family later in life.`,
      recommendedFor: [
        { 
          title: 'Delaying Pregnancy', 
          icon: delayingPregnancyIcon,
          description: 'For individuals planning to start a family later in life'
        },
        { 
          title: 'Preimplantation Genetic Testing', 
          icon: pgtTestingIcon,
          description: 'For couples undergoing genetic testing procedures'
        },
        { 
          title: 'Who Needs Radiation or Chemotherapy', 
          icon: radiationChemoIcon,
          description: 'For patients requiring cancer treatments that may affect fertility'
        },
        { 
          title: 'Unused Frozen Embryos during IVF', 
          icon: unusedEmbryosIcon,
          description: 'For storing surplus healthy embryos from IVF cycles'
        }
      ],
      procedures: {
        eggFreezing: {
          title: 'Egg Freezing',
          process: 'Our fertility experts prescribe some medications for women to stimulate the ovaries to produce many more eggs than normal. Once the eggs are matured, they are removed from the ovarian follicles and frozen by embryologists in the laboratory.'
        },
        spermFreezing: {
          title: 'Sperm Freezing',
          process: 'The man can provide a semen sample for cryopreservation. However, if no sperm are present in the semen or he cannot ejaculate, our fertility experts at Santasa IVF collect sample through surgical sperm extraction. The sperm sample is then frozen and stored at Santasa Lab until ready to be used for intrauterine insemination (IUI) or IVF.'
        },
        embryoCryopreservation: {
          title: 'Embryo Cryopreservation',
          process: 'The woman will be given medication to induce the release of multiple eggs. These eggs are retrieved and are allowed to fertilize with the partner\'s sperm. The resulting embryos are cultured for a few days before the embryos are frozen and stored at our fertility clinic.'
        }
      },
      conclusion: 'If you are not yet ready for childbirth now and want to keep the option open for the future, contact Santasa IVF for cryopreservation. Also, for couples considering IVF or having a failed IVF cycle, then cryopreservation can greatly help to overcome infertility issues.'
    }
  },
  'Third-Party Reproduction': {
    icon: <img src={thirdPartyIcon} alt="Third-Party Reproduction" style={{ width: '40px', height: '40px' }} />,
    title: 'Third-Party Reproduction',
    description: 'Donor programs and reproductive assistance for complex fertility challenges.',
    detailedContent: {
      overview: `Third-party reproduction involves using donated reproductive materials (eggs, sperm, or embryos) to help couples achieve pregnancy when their own reproductive cells are not viable or available.`,
      eggDonation: {
        title: 'Egg Donation',
        description: 'Egg donation is a process in which a fertile woman donates an egg, or oocyte, to another woman to help her conceive through assisted reproductive technology (ART).',
        recommendedFor: [
          { 
            title: 'Premature ovarian failure', 
            icon: prematureOvarianFailureIcon,
            description: 'When ovaries stop functioning before age 40'
          },
          { 
            title: 'Diminished ovarian reserve', 
            icon: diminishedOvarianReserveIcon,
            description: 'When egg quantity and quality are reduced'
          },
          { 
            title: 'Couple with the chances of Genetically transmitted diseases', 
            icon: geneticDiseasesIcon,
            description: 'To prevent transmission of inherited genetic disorders'
          },
          { 
            title: 'A previous history of IVF failure due to low-quality eggs', 
            icon: ivfFailureIcon,
            description: 'When previous cycles failed due to poor egg quality'
          }
        ],
        donorOptions: 'The couple can either opt for an anonymous donor who is currently ovulating or one whose eggs were previously frozen. Sometimes couples can also select a directed donor someone who is known to them.'
      },
      embryoDonation: {
        title: 'Embryo Donation',
        description: 'IVF patients who have completed their families sometimes face a difficult decision about the disposition of their remaining embryos. Santasa IVF offers the option to donate unused embryos to another couple who are yearning to become parents.',
        process: 'Embryo donation is a procedure that enables embryos either that were created by couples undergoing fertility treatment or that were created from donor sperm and donor eggs specifically for the purpose of donation to be transferred to infertile patients in order to achieve a pregnancy.',
        considerations: 'The use of donated embryos may be considered by women with untreatable infertility that involves both partners, untreatable infertility in a single woman, recurrent pregnancy loss thought to be related to the embryo, and genetic disorders affecting one or both partners.'
      },
      spermDonation: {
        title: 'Sperm Donation',
        description: 'When the male partner has low sperm count or his sperm is of low quality, they need some other man who is willing to donate sperm which will fertilize with egg of the female partner to form an embryo.',
        indications: 'Donated sperm is accepted to couple where there is no possibility of retrieving sperm naturally or by surgical procedure for a man. The donor sperms are used to either inseminate the woman (IUI) or to fertilize her egg for ICSI procedure.',
        source: 'For couple opting for donor sperms, semen from certified ART bank is taken.'
      }
    }
  }
};

const services = [
  detailedServices['Comprehensive Fertility Care'],
  detailedServices['Test Tube Baby Facility - IVF/ICSI'],
  detailedServices['Fertility Enhancing Surgery'],
  detailedServices['PGT (Embryo Biopsy)'],
  detailedServices['Cryostorage of Sperm, Eggs and Embryos'],
  detailedServices['Third-Party Reproduction'],
  {
    icon: <img src={regenerativeIcon} alt="Regenerative Medicine Services" style={{ width: '40px', height: '40px' }} />,
    title: 'Regenerative Medicine Services',
    description: 'Cutting-edge regenerative therapies to enhance reproductive health and fertility.'
  },
  {
    icon: <img src={surrogacyIcon} alt="Altruistic Surrogacy" style={{ width: '40px', height: '40px' }} />,
    title: 'Altruistic Surrogacy',
    description: 'Comprehensive surrogacy program with legal and medical support throughout the process.'
  },
  {
    icon: <img src={aestheticIcon} alt="Aesthetic Gynaecology" style={{ width: '40px', height: '40px' }} />,
    title: 'Aesthetic Gynaecology',
    description: 'Cosmetic and functional gynecological procedures for enhanced intimate wellness.'
  },
  {
    icon: <img src={gynacCancerIcon} alt="Gynaec Cancer Screening" style={{ width: '40px', height: '40px' }} />,
    title: 'Gynaec Cancer Screening with Colposcopy',
    description: 'Comprehensive cancer screening and early detection services for women\'s health.'
  },
  {
    icon: <img src={breastClinicIcon} alt="Breast Health Clinic" style={{ width: '40px', height: '40px' }} />,
    title: 'Breast Health Clinic',
    description: 'Comprehensive breast health services including screening, diagnosis, and treatment.'
  },
  {
    icon: <img src={sexualHealthIcon} alt="Sexual Health Clinic" style={{ width: '40px', height: '40px' }} />,
    title: 'Sexual Health and Couple Wellness Clinic',
    description: 'Specialized care addressing intimacy, sexual dysfunction, and relationship wellness.'
  },
  {
    icon: <img src={menopauseIcon} alt="Menopause Clinic" style={{ width: '40px', height: '40px' }} />,
    title: 'Menopause and Well Woman Clinic',
    description: 'Specialized care for menopausal women and comprehensive wellness programs.'
  }
];

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('fertility');
  const [selectedService, setSelectedService] = React.useState<any>(null);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showServiceDetails = (service: any) => {
    setSelectedService(service);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedService(null);
  };

  const serviceCategories = {
    fertility: {
      title: 'Fertility Treatments',
      icon: <HeartOutlined style={{ fontSize: '24px', color: '#ea3288' }} />,
      services: services.slice(0, 5)
    },
    reproductive: {
      title: 'Reproductive Health',
      icon: <StarOutlined style={{ fontSize: '24px', color: '#ea3288' }} />,
      services: services.slice(5, 8)
    },
    wellness: {
      title: 'Women\'s Wellness',
      icon: <CrownOutlined style={{ fontSize: '24px', color: '#ea3288' }} />,
      services: services.slice(8, 13)
    }
  };

  return (
    <div id="services" className="baby-texture-bg baby-scattered-elements" style={{ 
      padding: '100px 50px',
      background: '#fff'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <Title level={2} style={{ 
          color: '#7e52a1',
          fontSize: '36px',
          marginBottom: '20px'
        }}>
          Complete Healthcare Solutions 👶💕
        </Title>
        <Paragraph style={{ 
          fontSize: '18px',
          color: '#666',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          From fertility treatments to comprehensive women's health, 
          we're your trusted partner in every step of your journey.
        </Paragraph>
      </div>

      {/* Tab Navigation */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '40px',
        gap: '20px'
      }}>
        {Object.entries(serviceCategories).map(([key, category]) => (
          <div
            key={key}
            onClick={() => setActiveTab(key)}
            style={{
              padding: '15px 30px',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              background: activeTab === key 
                ? 'linear-gradient(45deg, #7e52a1, #ea3288)' 
                : 'rgba(126, 82, 161, 0.1)',
              color: activeTab === key ? 'white' : '#7e52a1',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: '500',
              border: activeTab === key ? 'none' : '2px solid rgba(126, 82, 161, 0.2)'
            }}
          >
            {category.icon}
            {category.title}
          </div>
        ))}
      </div>

      {/* Service Cards */}
      <Row gutter={[24, 24]}>
        {serviceCategories[activeTab as keyof typeof serviceCategories].services.map((service, index) => (
          <Col xs={24} md={12} lg={8} key={index}>
            <Card
              style={{
                height: '100%',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: 'none',
                transition: 'all 0.3s ease',
                background: 'linear-gradient(135deg, #fff 0%, #fafafa 100%)'
              }}
              bodyStyle={{ padding: '25px' }}
              hoverable
            >
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <div style={{ 
                  textAlign: 'center',
                  padding: '15px',
                  background: 'linear-gradient(45deg, rgba(126, 82, 161, 0.1), rgba(234, 50, 136, 0.1))',
                  borderRadius: '12px'
                }}>
                  {service.icon}
                </div>
                <Title level={5} style={{ 
                  color: '#7e52a1',
                  textAlign: 'center',
                  marginBottom: '8px',
                  fontSize: '16px',
                  fontWeight: '600'
                }}>
                  {service.title}
                </Title>
                <Paragraph style={{ 
                  color: '#666',
                  textAlign: 'center',
                  fontSize: '13px',
                  lineHeight: '1.5',
                  marginBottom: '15px'
                }}>
                  {service.description}
                </Paragraph>
                {(service as any).detailedContent && (
                  <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <Button 
                      type="link"
                      icon={<InfoCircleOutlined />}
                      onClick={() => showServiceDetails(service as any)}
                      style={{
                        color: '#ea3288',
                        fontSize: '13px',
                        padding: '0',
                        height: 'auto',
                        fontWeight: '500',
                        textDecoration: 'underline'
                      }}
                    >
                      Learn More →
                    </Button>
                  </div>
                )}
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      {/* View All Services Button */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <span style={{ 
          color: '#666',
          fontSize: '14px',
          background: 'rgba(126, 82, 161, 0.05)',
          padding: '10px 20px',
          borderRadius: '20px',
          border: '1px solid rgba(126, 82, 161, 0.1)'
        }}>
          ✨ {services.length} comprehensive services available
        </span>
      </div>

      {/* Detailed Service Modal */}
      <Modal
        title={null}
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={800}
        closeIcon={<CloseOutlined style={{ color: '#7e52a1', fontSize: '18px' }} />}
        style={{ top: 20 }}
      >
        {selectedService && selectedService.detailedContent && (
          <div style={{ padding: '20px 0' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{ marginBottom: '15px' }}>
                {selectedService.icon}
              </div>
              <Title level={3} style={{ color: '#7e52a1', marginBottom: '10px' }}>
                {selectedService.title}
              </Title>
              <Paragraph style={{ color: '#666', fontSize: '16px' }}>
                {selectedService.description}
              </Paragraph>
            </div>

            {/* Overview */}
            <div style={{ marginBottom: '25px' }}>
              <Title level={4} style={{ color: '#ea3288', fontSize: '18px', marginBottom: '15px' }}>
                Overview
              </Title>
              <Paragraph style={{ 
                color: '#555', 
                fontSize: '14px', 
                lineHeight: '1.6',
                whiteSpace: 'pre-line'
              }}>
                {selectedService.detailedContent.overview}
              </Paragraph>
            </div>

            {/* Used For */}
            {selectedService.detailedContent.usedFor && (
              <div style={{ marginBottom: '25px' }}>
                <Title level={4} style={{ color: '#ea3288', fontSize: '18px', marginBottom: '15px' }}>
                  {selectedService.title.includes('IVF/ICSI') 
                    ? 'In Santasa IVF, ICSI is often used to treat infertile couples with:'
                    : 'In Santasa IVF, IUI is often used to treat infertile couples with:'
                  }
                </Title>
                <ul style={{ paddingLeft: '20px' }}>
                  {selectedService.detailedContent.usedFor.map((item: string, index: number) => (
                    <li key={index} style={{ 
                      color: '#555', 
                      fontSize: '14px', 
                      lineHeight: '1.6',
                      marginBottom: '8px'
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recommended For */}
            {selectedService.detailedContent.recommendedFor && (
              <div style={{ marginBottom: '25px' }}>
                <Title level={4} style={{ color: '#ea3288', fontSize: '18px', marginBottom: '15px' }}>
                  {selectedService.title.includes('Cryostorage')
                    ? 'At Santasa IVF, Cryopreservation are recommended to couples who are:'
                    : 'At Santasa IVF, PGD testing is recommended for:'
                  }
                </Title>
                {/* Enhanced format with icons for Cryostorage */}
                {selectedService.title.includes('Cryostorage') && Array.isArray(selectedService.detailedContent.recommendedFor) && 
                 typeof selectedService.detailedContent.recommendedFor[0] === 'object' ? (
                  <Row gutter={[16, 16]}>
                    {selectedService.detailedContent.recommendedFor.map((item: any, index: number) => (
                      <Col xs={24} md={12} key={index}>
                        <div style={{ 
                          padding: '15px',
                          background: 'rgba(126, 82, 161, 0.05)',
                          borderRadius: '10px',
                          border: '1px solid rgba(126, 82, 161, 0.1)',
                          textAlign: 'center'
                        }}>
                          <img 
                            src={item.icon} 
                            alt={item.title}
                            style={{ width: '40px', height: '40px', marginBottom: '10px' }}
                          />
                          <Title level={5} style={{ 
                            color: '#7e52a1', 
                            fontSize: '14px', 
                            marginBottom: '8px',
                            fontWeight: '600'
                          }}>
                            {item.title}
                          </Title>
                          <Paragraph style={{ 
                            color: '#666', 
                            fontSize: '12px', 
                            margin: 0,
                            lineHeight: '1.4'
                          }}>
                            {item.description}
                          </Paragraph>
                        </div>
                      </Col>
                    ))}
                  </Row>
                ) : (
                  /* Regular list format for other services */
                  <ul style={{ paddingLeft: '20px' }}>
                    {Array.isArray(selectedService.detailedContent.recommendedFor) && 
                     selectedService.detailedContent.recommendedFor.map((item: any, index: number) => (
                      <li key={index} style={{ 
                        color: '#555', 
                        fontSize: '14px', 
                        lineHeight: '1.6',
                        marginBottom: '8px'
                      }}>
                        {typeof item === 'string' ? item : item.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Laparoscopic Surgeries */}
            {selectedService.detailedContent.laparoscopicSurgeries && (
              <div style={{ marginBottom: '25px' }}>
                <Title level={4} style={{ color: '#ea3288', fontSize: '18px', marginBottom: '15px' }}>
                  Laparoscopic Surgeries
                </Title>
                <Paragraph style={{ color: '#555', fontSize: '14px', marginBottom: '15px' }}>
                  Complete spectrum of fertility enhancing surgeries is available at Santasa.
                </Paragraph>
                <ul style={{ paddingLeft: '20px' }}>
                  {selectedService.detailedContent.laparoscopicSurgeries.map((item: string, index: number) => (
                    <li key={index} style={{ 
                      color: '#555', 
                      fontSize: '14px', 
                      lineHeight: '1.6',
                      marginBottom: '8px'
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Hysteroscopic Surgeries */}
            {selectedService.detailedContent.hysteroscopicSurgeries && (
              <div style={{ marginBottom: '25px' }}>
                <Title level={4} style={{ color: '#ea3288', fontSize: '18px', marginBottom: '15px' }}>
                  Hysteroscopic Surgeries
                </Title>
                <Paragraph style={{ color: '#555', fontSize: '14px', marginBottom: '15px' }}>
                  Santasa is one of the most reliable centres to provide advanced hysteroscopic surgeries.
                </Paragraph>
                <ul style={{ paddingLeft: '20px' }}>
                  {selectedService.detailedContent.hysteroscopicSurgeries.map((item: string, index: number) => (
                    <li key={index} style={{ 
                      color: '#555', 
                      fontSize: '14px', 
                      lineHeight: '1.6',
                      marginBottom: '8px'
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Special Surgeries */}
            {selectedService.detailedContent.specialSurgeries && (
              <div style={{ marginBottom: '25px' }}>
                <Title level={4} style={{ color: '#ea3288', fontSize: '18px', marginBottom: '15px' }}>
                  Special Surgeries
                </Title>
                <ul style={{ paddingLeft: '20px' }}>
                  {selectedService.detailedContent.specialSurgeries.map((item: string, index: number) => (
                    <li key={index} style={{ 
                      color: '#555', 
                      fontSize: '14px', 
                      lineHeight: '1.6',
                      marginBottom: '8px'
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            {selectedService.detailedContent.benefits && (
              <div style={{ marginBottom: '25px' }}>
                <Title level={4} style={{ color: '#ea3288', fontSize: '18px', marginBottom: '15px' }}>
                  {Array.isArray(selectedService.detailedContent.benefits) 
                    ? 'Benefits of Endoscopic Procedures' 
                    : 'Benefits'
                  }
                </Title>
                {Array.isArray(selectedService.detailedContent.benefits) ? (
                  <ul style={{ paddingLeft: '20px' }}>
                    {selectedService.detailedContent.benefits.map((item: string, index: number) => (
                      <li key={index} style={{ 
                        color: '#555', 
                        fontSize: '14px', 
                        lineHeight: '1.6',
                        marginBottom: '8px'
                      }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Paragraph style={{ 
                    color: '#555', 
                    fontSize: '14px', 
                    lineHeight: '1.6'
                  }}>
                    {selectedService.detailedContent.benefits}
                  </Paragraph>
                )}
              </div>
            )}

            {/* Conditions */}
            {selectedService.detailedContent.conditions && (
              <div style={{ marginBottom: '25px' }}>
                <Title level={4} style={{ color: '#ea3288', fontSize: '18px', marginBottom: '15px' }}>
                  Gynecological Conditions Requiring Endoscopic Surgery
                </Title>
                <ul style={{ paddingLeft: '20px' }}>
                  {selectedService.detailedContent.conditions.map((item: string, index: number) => (
                    <li key={index} style={{ 
                      color: '#555', 
                      fontSize: '14px', 
                      lineHeight: '1.6',
                      marginBottom: '8px'
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Cryopreservation Procedures */}
            {selectedService.detailedContent.procedures && (
              <div style={{ marginBottom: '25px' }}>
                <Title level={4} style={{ color: '#ea3288', fontSize: '18px', marginBottom: '20px' }}>
                  Cryopreservation Procedures
                </Title>
                <Row gutter={[16, 16]}>
                  {Object.entries(selectedService.detailedContent.procedures).map(([key, procedure]: [string, any], index: number) => (
                    <Col xs={24} key={index}>
                      <div style={{ 
                        padding: '20px',
                        background: 'rgba(126, 82, 161, 0.03)',
                        borderRadius: '12px',
                        border: '1px solid rgba(126, 82, 161, 0.1)',
                        marginBottom: '15px'
                      }}>
                        <Title level={5} style={{ 
                          color: '#7e52a1', 
                          fontSize: '16px', 
                          marginBottom: '12px',
                          fontWeight: '600'
                        }}>
                          {procedure.title}
                        </Title>
                        <Paragraph style={{ 
                          color: '#555', 
                          fontSize: '14px', 
                          lineHeight: '1.6',
                          margin: 0
                        }}>
                          {procedure.process}
                        </Paragraph>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            )}

            {/* Third-Party Reproduction Sections */}
            {selectedService.detailedContent.eggDonation && (
              <div style={{ marginBottom: '25px' }}>
                <Title level={4} style={{ color: '#ea3288', fontSize: '18px', marginBottom: '15px' }}>
                  {selectedService.detailedContent.eggDonation.title}
                </Title>
                <Paragraph style={{ 
                  color: '#555', 
                  fontSize: '14px', 
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  {selectedService.detailedContent.eggDonation.description}
                </Paragraph>
                
                {/* Egg Donation Recommendations with Icons */}
                {selectedService.detailedContent.eggDonation.recommendedFor && (
                  <div style={{ marginBottom: '20px' }}>
                    <Title level={5} style={{ color: '#7e52a1', fontSize: '16px', marginBottom: '15px' }}>
                      At Santasa IVF, Egg donation is suggested for couples with the following cases:
                    </Title>
                    <Row gutter={[16, 16]}>
                      {selectedService.detailedContent.eggDonation.recommendedFor.map((item: any, index: number) => (
                        <Col xs={24} md={12} key={index}>
                          <div style={{ 
                            padding: '15px',
                            background: 'rgba(126, 82, 161, 0.05)',
                            borderRadius: '10px',
                            border: '1px solid rgba(126, 82, 161, 0.1)',
                            textAlign: 'center'
                          }}>
                            <img 
                              src={item.icon} 
                              alt={item.title}
                              style={{ width: '40px', height: '40px', marginBottom: '10px' }}
                            />
                            <Title level={5} style={{ 
                              color: '#7e52a1', 
                              fontSize: '14px', 
                              marginBottom: '8px',
                              fontWeight: '600'
                            }}>
                              {item.title}
                            </Title>
                            <Paragraph style={{ 
                              color: '#666', 
                              fontSize: '12px', 
                              margin: 0,
                              lineHeight: '1.4'
                            }}>
                              {item.description}
                            </Paragraph>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                )}
                
                {/* Donor Options */}
                {selectedService.detailedContent.eggDonation.donorOptions && (
                  <div style={{ 
                    padding: '15px',
                    background: 'rgba(126, 82, 161, 0.03)',
                    borderRadius: '10px',
                    border: '1px solid rgba(126, 82, 161, 0.1)',
                    marginBottom: '15px'
                  }}>
                    <Title level={5} style={{ color: '#7e52a1', fontSize: '14px', marginBottom: '8px' }}>
                      Donor Options
                    </Title>
                    <Paragraph style={{ 
                      color: '#555', 
                      fontSize: '14px', 
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      {selectedService.detailedContent.eggDonation.donorOptions}
                    </Paragraph>
                  </div>
                )}
              </div>
            )}

            {/* Embryo Donation */}
            {selectedService.detailedContent.embryoDonation && (
              <div style={{ marginBottom: '25px' }}>
                <Title level={4} style={{ color: '#ea3288', fontSize: '18px', marginBottom: '15px' }}>
                  {selectedService.detailedContent.embryoDonation.title}
                </Title>
                <Paragraph style={{ 
                  color: '#555', 
                  fontSize: '14px', 
                  lineHeight: '1.6',
                  marginBottom: '15px'
                }}>
                  {selectedService.detailedContent.embryoDonation.description}
                </Paragraph>
                <Paragraph style={{ 
                  color: '#555', 
                  fontSize: '14px', 
                  lineHeight: '1.6',
                  marginBottom: '15px'
                }}>
                  {selectedService.detailedContent.embryoDonation.process}
                </Paragraph>
                <div style={{ 
                  padding: '15px',
                  background: 'rgba(126, 82, 161, 0.03)',
                  borderRadius: '10px',
                  border: '1px solid rgba(126, 82, 161, 0.1)'
                }}>
                  <Title level={5} style={{ color: '#7e52a1', fontSize: '14px', marginBottom: '8px' }}>
                    Considerations for Embryo Donation
                  </Title>
                  <Paragraph style={{ 
                    color: '#555', 
                    fontSize: '14px', 
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {selectedService.detailedContent.embryoDonation.considerations}
                  </Paragraph>
                </div>
              </div>
            )}

            {/* Sperm Donation */}
            {selectedService.detailedContent.spermDonation && (
              <div style={{ marginBottom: '25px' }}>
                <Title level={4} style={{ color: '#ea3288', fontSize: '18px', marginBottom: '15px' }}>
                  {selectedService.detailedContent.spermDonation.title}
                </Title>
                <Paragraph style={{ 
                  color: '#555', 
                  fontSize: '14px', 
                  lineHeight: '1.6',
                  marginBottom: '15px'
                }}>
                  {selectedService.detailedContent.spermDonation.description}
                </Paragraph>
                <Paragraph style={{ 
                  color: '#555', 
                  fontSize: '14px', 
                  lineHeight: '1.6',
                  marginBottom: '15px'
                }}>
                  {selectedService.detailedContent.spermDonation.indications}
                </Paragraph>
                <div style={{ 
                  padding: '15px',
                  background: 'rgba(126, 82, 161, 0.03)',
                  borderRadius: '10px',
                  border: '1px solid rgba(126, 82, 161, 0.1)'
                }}>
                  <Title level={5} style={{ color: '#7e52a1', fontSize: '14px', marginBottom: '8px' }}>
                    Sperm Source
                  </Title>
                  <Paragraph style={{ 
                    color: '#555', 
                    fontSize: '14px', 
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {selectedService.detailedContent.spermDonation.source}
                  </Paragraph>
                </div>
              </div>
            )}

            {/* Conclusion */}
            {selectedService.detailedContent.conclusion && (
              <div style={{ 
                background: 'linear-gradient(45deg, rgba(126, 82, 161, 0.05), rgba(234, 50, 136, 0.05))',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid rgba(126, 82, 161, 0.1)',
                marginBottom: '25px'
              }}>
                <Title level={4} style={{ color: '#ea3288', fontSize: '18px', marginBottom: '10px' }}>
                  Contact Santasa IVF
                </Title>
                <Paragraph style={{ 
                  color: '#555', 
                  fontSize: '14px', 
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {selectedService.detailedContent.conclusion}
                </Paragraph>
              </div>
            )}

            {/* Additional Info */}
            {selectedService.detailedContent.additionalInfo && (
              <div style={{ 
                background: 'linear-gradient(45deg, rgba(126, 82, 161, 0.05), rgba(234, 50, 136, 0.05))',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid rgba(126, 82, 161, 0.1)',
                marginBottom: '25px'
              }}>
                <Title level={4} style={{ color: '#ea3288', fontSize: '18px', marginBottom: '10px' }}>
                  Additional Information
                </Title>
                <Paragraph style={{ 
                  color: '#555', 
                  fontSize: '14px', 
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {selectedService.detailedContent.additionalInfo}
                </Paragraph>
              </div>
            )}

            {/* Process */}
            {selectedService.detailedContent.process && (
              <div style={{ marginBottom: '25px' }}>
                <Title level={4} style={{ color: '#ea3288', fontSize: '18px', marginBottom: '15px' }}>
                  Process of IUI
                </Title>
                <Paragraph style={{ 
                  color: '#555', 
                  fontSize: '14px', 
                  lineHeight: '1.6',
                  whiteSpace: 'pre-line',
                  marginBottom: '20px'
                }}>
                  {selectedService.detailedContent.process}
                </Paragraph>
                {selectedService.detailedContent.processImage && (
                  <div style={{ 
                    textAlign: 'center',
                    marginTop: '20px',
                    padding: '15px',
                    background: 'rgba(126, 82, 161, 0.02)',
                    borderRadius: '12px',
                    border: '1px solid rgba(126, 82, 161, 0.1)'
                  }}>
                    <img 
                      src={selectedService.detailedContent.processImage}
                      alt="IUI Process"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                      }}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Success Rate */}
            {selectedService.detailedContent.successRate && (
              <div style={{ 
                background: 'linear-gradient(45deg, rgba(126, 82, 161, 0.05), rgba(234, 50, 136, 0.05))',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid rgba(126, 82, 161, 0.1)'
              }}>
                <Title level={4} style={{ color: '#ea3288', fontSize: '18px', marginBottom: '10px' }}>
                  Success Rate
                </Title>
                <Paragraph style={{ 
                  color: '#555', 
                  fontSize: '14px', 
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {selectedService.detailedContent.successRate}
                </Paragraph>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Services;