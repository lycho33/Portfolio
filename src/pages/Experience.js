import React, { useState } from "react"
import '../css/Experience.css'
import {ExperienceData} from './ExperienceData'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 1.5 }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

function Experience() {

  return (
    <div>
      <div className='vl'></div>
      <motion.div className='home container'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
        <div>
          <h1 className="e-title">Experience</h1>
          <div className='experienceContainer'>
              <Tabs defaultTab="vertical-tab-one" vertical className="tabList">
                <TabList>
                  <Tab tabFor='vertical-tab-one' className="tab">Indiana University Bloomington</Tab>
                  <Tab tabFor='vertical-tab-two' className="tab">Harvard Graduate School of Education</Tab>
                  <Tab tabFor='vertical-tab-three' className="tab">Northwestern University</Tab>
                </TabList>

                <TabPanel tabId='vertical-tab-one' className="description">
                  <h2>Consultant</h2>
                  <li>Collaborated with the digital learning management team to build a prototype network platform for the university global community, to build a strong user-base for the university`s digital courses and help build the online brand </li>
                  <li>Investigated LMS digital training platforms (MOOCs, commercial websites) for Indiana University`s Jacob School of Music (JSoM) to optimize the school`s positioning in the market</li>
                  <li>Created a competitive analysis amongst 15 major collegiate music universities, 4 MOOCs platforms and 4 commercial online music services</li>
                </TabPanel>
                <TabPanel tabId='vertical-tab-two' className="description">
                  <h2>Intern</h2>
                  <li>Collaborated to support a 2-week seminar for 452 incoming HGSE students.</li>
                  <li>Managed LMS through Salesforce, Openscholar </li>
                  <li>Updated Marketing Cloud messages for the current year. Recruited and coordinated alumni advisors. Personalized and customized content four journeys in Salesforce</li>
                  <li>Updated Marketing Cloud messages for the current year. Recruited and coordinated alumni advisors. Personalized and customized content four journeys in Salesforce</li>
                </TabPanel>
                <TabPanel tabId='vertical-tab-three' className="description">
                  <h2>Teaching Assistant</h2>
                  <li>Created a new form of curriculum for K-12 Northwestern String Academy students, focused on how to improve practicing and performance skills with a more holistic view of the psychology of the performer</li>
                  <li>Co-created with the Chair of the Dean`s Advisory Council; Consulted JSoM`s potential trajectory for a 2020 pilot online music training program with forecasts of potential return on investment. </li>
                  <li>Educated 8 graduate and undergraduate Northwestern students by teaching for their development in violin and coordinated performance opportunities </li>
                </TabPanel>
              </Tabs>
          </div>
          {/* <div className='btn-container-e'>
            <span className='link'><Link to="/projects"><span className='text'><b>What have I made?</b></span></Link></span>
          </div>     */}
              {/* {ExperienceData.map((info, index) => {
            return (
                <div className="apps">
                  <Tabs defaultTab="vertical-tab-one" vertical>
                    <TabList>
                      <Tab tabFor={`vertical-tab-${info.id}`}>{info.company}</Tab>
                    </TabList>

                    <TabPanel tabId={`vertical-tab-${info.id}`}>
                      <h2>{info.jobTitle}</h2>
                      <p>{info.description}</p>
                    </TabPanel>
                  </Tabs>
                </div>
            )
          }) }         */}
        </div>
      </motion.div>
    </div>
  );
}

export default Experience;
