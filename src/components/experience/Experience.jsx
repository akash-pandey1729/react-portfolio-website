import React, {useState} from 'react'
import './experience.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import Modal from '../modal/Modal'


const Services = () => {
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);

  const forward = 'Forward Health';
  const forwardUrl = 'https://goforward.com/';
  const forwardProjectName = 'Targeted App Deployment';
  const forwardProjectDetails = 'Created 5 new APIs end to end using Go for targeted App deployment using gRPC and Protobuff. This service is being used by over 40,000 Forward users. Changed the build from Travis CI to GitHub Actions reducing CI/CD pipeline build by 50 percent. Managed and modified an E2E API for Health Apps Service use widely across the company. Worked with AWS stack and cloudformation along with logging services like Honeycomb. Skills developed - GoLang, ProtoBuff, GRPC, Backend, Microservices, Agile, TDD, Git, AWS';
  
  const aws = 'Amazon Web Services';
  const awsUrl = 'https://aws.amazon.com/';
  const awsProjectName = 'Run Metric Math Rules Locally'
  const awsProjectDetails = 'Created and optimized the MetricMath Rule as part of the Health Guardian platform in AWS Lambda Team to enhance Rule integration for a microservice used by AWS Lambda customers. Detected Service Outage and simulated production environment to aid the Amazon Science team to fine- tune Detection Algorithms. Worked in a Test Driven Development (TDD) environment writing unit tests with 95 percent plus coverage along with Integration tests. Skills developed - Java, Backend, Microservices, Agile, TDD, Git';

  const capgemini = 'Capgemini'
  const capgeminiUrl = 'https://www.capgemini.com/us-en/'
  const capgeminiProjectName = 'Data Collection Tool'
  const capgeminiProjectDetails = 'Worked on a commercial technology platform widely used in Insurance Industry called Guidewire, using AGILE SDLC. Created REST APIs and Relational Data models to implement business logic. Skills developed - Python, Django, Agile, Project Management, Full Stack Web Development, Git'
  return (
    <section id = 'services'>
      <h5>What I know</h5>
      <h2>Work Experience</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Company: Forward Health</h3>
            <button className="btn-expand" onClick={() => {setModalOpen1(true);}}>
              Click for Project
            </button>
            {modalOpen1 && <Modal setOpenModal= {setModalOpen1} projectName={forwardProjectName} projectDetails={forwardProjectDetails} companyName={forward} companyUrl = {forwardUrl} />}
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Role: Software Engineer</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Location: San Francisco, CA</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Company: Amazon Web Services</h3>
            <button className="btn-expand" onClick={() => {setModalOpen2(true);}}>
              Click for Project
            </button>
            {modalOpen2 && <Modal setOpenModal= {setModalOpen2} projectName={awsProjectName} projectDetails={awsProjectDetails} companyName={aws} companyUrl = {awsUrl}/>}

          </div>

          <ul className='service__list'>
          <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Role: Software Engineering Intern</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Location: Seattle, WA</p>
            </li>
          </ul>
        </article>

        <article className='service'>

          <div className='service__head'>
            <h3>Company: Capgemini</h3>
            <button className="btn-expand" onClick={() => {setModalOpen3(true);}}>
              Click for Project
            </button>
            {modalOpen3 && <Modal setOpenModal= {setModalOpen3} projectName={capgeminiProjectName} projectDetails={capgeminiProjectDetails} companyName={capgemini} companyUrl = {capgeminiUrl}/>}
          </div>

          <ul className='service__list'>
          <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Role: Associate (Software Engineering) Consultant</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Location: Hyderabad, India</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  );
}

export default Services