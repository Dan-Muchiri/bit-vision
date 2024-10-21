import React, { useState } from 'react';
import styles from './FAQStyles.module.css';
import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null); // Tracks which FAQ is open

  const toggleDropdown = (index) => {
    // If the clicked FAQ is already open, close it. Otherwise, open the clicked one.
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Why choose Bit Vision?',
      answer: 'At Bit Vision, creativity and transparency aren\'t just words—they\'re the pillars of everything we do. Our journey has been filled with exciting projects and countless opportunities to add real value. As a top web design agency, we thrive on selecting projects that not only ignite our passion but also where we can leverage our extensive experience for maximum impact. Our commitment to excellence is reflected in the numerous web design and branding awards we\'ve received from esteemed organizations like Clutch.co, Awwards, Upcity, and Digital Agency Network, among others. Our consistent 5-star ratings across all platforms stand as a testament to our dedication and the high-quality service we provide to every project. With Brand Vision, you can be confident that you\'re in capable hands that are as invested in your success as you are. Contact us today to learn more about how we can help bring your vision to life.'
    },
    {
        question: 'What services do you offer?',
        answer: 'At Bit Vision, an award-winning web design agency, we specialize in a range of services designed to elevate your brand and enhance your online presence. Our primary areas of expertise include: ‍ Web Design and Development: We craft visually stunning and functionally robust websites that provide a seamless user experience. ‍ Branding: As a top branding agency, we create cohesive brand identities that resonate with your target audience and differentiate you from your competitors. This includes research and strategy to understand your market and visual identity development to create a distinctive look for your brand. ‍ Marketing Consultation/Audit: As a top marketing consultation agency, we provide strategic insights to help you navigate the complex landscape of digital marketing and achieve your business objectives. ‍ SEO: As a top SEO agency, we implement effective search engine optimization techniques to improve your website\'s visibility and drive organic traffic. ‍ In addition to these core services, we also offer content marketing to engage and inform your audience and graphic design to ensure your visual content is impactful and memorable. ‍ Contact Bit Vision, an award-winning web design agency and award-winning branding agency, to learn more about our comprehensive range of services and how we can support your business\'s growth and success.'
      }, 
      {
        question: 'How long does a web design project take?',
        answer: 'Brand Vision, a top web design agency, is committed to providing high-quality digital marketing and web design services in an efficient and effective manner. Here\'s an overview of the typical timelines for our various services: Web Design and Development: Our projects typically range from as little as 4 weeks up to more than 12 weeks, depending on the complexity and scope. We ensure that every website we create is meticulously crafted to meet your specific needs and goals. Branding: As a top branding agency, our branding projects can vary in duration but generally take between 4 and 8 weeks. This includes the development of a brand strategy, logo design, and other brand elements to create a cohesive and impactful brand identity, incorporating research and visual identity development...'
      },
      {
        question: 'How big is your team?',
        answer: 'At Bit Vision, a top web design agency, our team is comprised of more than 15 dedicated senior members, including a Creative Director, Project Managers, Web Designers/Developers, UX/UI Specialists, Full Stack Developers, Branding Strategists, Content Strategists, and more. Each member brings a unique set of skills and expertise, ensuring comprehensive support for your projects across various specialties, from web design and development to branding and content strategy. ‍ To learn more about our team and how we can support your business\'s growth and success, please visit our About Us page.'
      },
      {
        question: 'Do you offer copywriting services?',
        answer: 'Yes, we offer copywriting services. At Bit Vision, a top web design agency, we understand that compelling content is the cornerstone of effective digital marketing. Our team of content strategists has worked with various industries, ensuring that our services are tailored to your specific projects. To ensure a perfect fit, we\'ll assign you an experienced copywriter who suits your project or industry. ‍Furthermore, our team includes acclaimed copywriters who contribute to our publication company, Bit Vision Insights, ensuring that your content is not only engaging and persuasive but also SEO-friendly and resonates with your target audience. ‍Whether you need website copy, blog posts, product descriptions, or any other form of written content, we\'re here to help you communicate your message clearly and effectively. Contact us today to learn more about our copywriting services and how we can enhance your brand\'s online presence.'
      },
      {
        question: 'What is typically included in a standard branding package?',
        answer: 'Our standard branding package at Bit Vision, a top branding agency, is designed to provide a holistic and comprehensive approach to building your brand\'s identity. The package is divided into two main categories: ‍Branding Research and Strategy: This category focuses on understanding your market, target audience, and competitive landscape. It includes developing a brand strategy that aligns with your business goals and objectives, ensuring that your brand is well-defined and resonates with your target audience. ‍Brand Visual Identity: Often the most recognized part of branding, this category includes the development of a logo, colour palette, typography, visual guidelines, and other design elements that ensure a consistent and cohesive visual representation of your brand across all touchpoints.'
      },
      {
        question: 'Do you offer marketing audit and consultation service?',
        answer: 'Yes, as a top marketing consultation agency, Bit Vision offers comprehensive marketing audit and consultation services. Our detailed audit covers all aspects of your marketing efforts, including your website, branding, SEO, social media, and other marketing assets. We provide you with a prioritized list of recommended improvements, complete with potential effects and estimated costs, empowering you to make informed decisions for your business\'s growth and success.'
      }, 
      {
        question: 'Do you offer SEO services?',
        answer: 'Yes, we offer SEO services. As a top SEO agency, we specialize in comprehensive ongoing SEO packages that are customized to meet your unique needs. Our services encompass both on-page and off-page SEO strategies, which include content creation, on-page optimization, link building, and more. Whether you\'re looking for one of our general packages or need something more tailored, we\'re prepared to assist. Get in touch with us today to discuss your specific SEO requirements and start enhancing your online visibility.'
      },
      {
        question: 'What clientele or industries do you work with?',
        answer: 'At Bit Vision, a top web design agency, our journey in web design and branding began in 2016. Over the past decade, we\'ve expanded our reach across Canada and North America, working with some of the world\'s most exciting brands to enhance their online marketing and their digital presence. Our expertise as an award-winning web design agency extends to a diverse range of clients, from small-to-medium businesses to enterprise-level organizations. We cater to professional service and solution providers of all types, including real estate, tech, startups, and non-profit organizations. Our goal is to deliver innovative digital solutions that provide measurable results, paired with creative branding and web designs that set you apart. Contact Bit Vision, a top web design agency, to learn more about how we can help elevate your brand and achieve your business goals.'
      },
      {
        question: 'Do you offer maintenance services?',
        answer: 'Yes, we offer maintenance services. At Bit Vision, a top web design agency, we understand the importance of keeping your website and digital assets up-to-date and functioning optimally. We offer flexible maintenance options to suit your needs, including an hourly maintenance fee for on-demand support or a monthly package for ongoing maintenance and updates. Whether you need occasional tweaks or regular upkeep, our team is here to ensure your digital presence remains strong and secure. Contact us to learn more about our maintenance services and how we can help keep your website and branding in top condition.'
      }
      
            
      
    // Add more FAQs here if needed
  ];

  return (
    <section id='faqs' className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.titleBlock}>
            <div className={styles.caption}>FAQs</div>
            <p className={styles.leftP1}>Answers To Frequently ‍Asked Questions</p>
            <p className={styles.leftP}>Curious about how Brand Vision, a leading Web Design Company and Marketing Agency, operates? Explore our FAQ section for a comprehensive understanding of our services and procedures.</p>
            <div className={styles.buttons}>
              <Link to="/" className={styles.link}>
                Let's Discuss <IoArrowForward />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.list}>
            {faqs.map((faq, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.drop} onClick={() => toggleDropdown(index)}>
                  <div className={styles.toggle}>
                    <p className={styles.text}>
                      {faq.question}
                    </p>
                    <div className={styles.icon}>
                      {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />} {/* Toggle icon based on state */}
                    </div>
                  </div>
                  {openIndex === index && (
                    <div className={styles.answer}>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
