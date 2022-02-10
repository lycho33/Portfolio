import React, { useState } from "react"
import '../css/Experience.css'
import {ExperienceData} from './ExperienceData'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';

function Experience({child}) {

  return <div style={child} className='child bg2'>
      <div className='experience-contents'>
        <h1>Experience</h1>
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
          <Tabs defaultTab="vertical-tab-one" vertical>
            <TabList>
              <Tab tabFor='vertical-tab-one'>Indiana University Bloomington</Tab>
              <Tab tabFor='vertical-tab-two'>Northwestern University</Tab>
            </TabList>

            <TabPanel tabId='vertical-tab-one'>
              <h2>Consultant</h2>
              <p>Built a prototype network platform for Jacob School of Music (JSoM) global community</p>
            </TabPanel>
            <TabPanel tabId='vertical-tab-two'>
              <h2>Teaching Assistant</h2>
              <p>Created a new form of curriculum for K-12 Northwestern String Academy students, focused on how to improve practicing and performance skills with a more holistic view of the psychology of the performer</p>
            </TabPanel>
          </Tabs>
      </div>
  </div>;
}

export default Experience;
