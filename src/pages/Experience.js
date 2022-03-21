import React from "react"
import '../css/Experience.css'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import {motion} from 'framer-motion'

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
                  <Tab tabFor='vertical-tab-one' className="tab"><h2>Indiana University Bloomington</h2></Tab>
                  <Tab tabFor='vertical-tab-two' className="tab"><h2>Harvard Graduate School of Education</h2></Tab>
                  <Tab tabFor='vertical-tab-three' className="tab"><h2>Northwestern University</h2></Tab>
                </TabList>

                <TabPanel tabId='vertical-tab-one' className="description">
                  <h2>Consultant</h2>
                  <li>Built a prototype network platform for Jacob School of Music (JSoM) global community</li>
                  <li>Researched LMS digital training platforms (MOOCs [Massive Online Open Courses], commercial websites) for the university to optimize the school’s positioning in the digital market</li>
                  <li>Created a competitive analysis amongst 15 major collegiate music universities, 4 MOOCs platforms and 4 commercial online music services</li>
                </TabPanel>
                <TabPanel tabId='vertical-tab-two' className="description">
                  <h2>Intern</h2>
                  <li>Collaborated with team members to support a 2-week seminar for 452 incoming HGSE students</li>
                  <li>Updated Marketing Cloud messages for the current year in order to recruit and coordinate with alumni advisors</li>
                  <li>Personalized and customized content for 4 journeys in Salesforce</li>
                </TabPanel>
                <TabPanel tabId='vertical-tab-three' className="description">
                  <h2>Teaching Assistant</h2>
                  <li>Created a new form of curriculum for K-12 Northwestern String Academy students, focused on how to improve practicing and performance skills with a more holistic view of the psychology of the performer </li>
                  <li>Taught private weekly violin lessons and group string lessons, while collaborating with the head instructor and parents to provide guidance on each student’s musical development </li>
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
