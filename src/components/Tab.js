import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { faCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Feed from './Feed';
import InputComponent from './InputComponent';
import circle from '../circle.png';
import Services from '../pages/Services';

library.add(faCircle, faPlay);

export default function TabsComponent() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className=" ">
    <Box sx={{ width: '100%', typography: 'body1'}}> {/* Box container to handle tabs */}
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" className="bg-[#F3FCFF] cursor-pointer fixed top-20 z-40 w-full shadow-md ">
            <Tab label="Access" value="1" />
            <Tab label="Choose" value="2" />
          </TabList>
        </Box>
        <div className="w-[90%] sm:w-[60%] mx-auto"> {/* First tab - Access */}
          <TabPanel value="1">
            <div className="flex items-center text-gray-800 pt-8 mt-28">
            <img src={circle} alt="alt 1" className="w-10 h-10 rounded-full mr-2" />
              <h2 className="text-3xl p-2 text-gray-900 font-bold">My Requests</h2>
            </div>
            <div className="mb-5 text-gray-800">
              <p className="pl-14 text-wrap">1. Request services from skilled persons. Eg Teachers, Cooks, Lawyers, Care-givers, Plumbers, Bankers, Traders, Pastors, et all</p>
              <div className="pl-14 pt-5"><Feed /></div>
            </div>
            <div ><InputComponent /></div>
          </TabPanel>
        </div>

        <TabPanel value="2" sx={{ p: 0, backgroundImage: 'url("https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat:'no-repeat', height: 'dvh' }}> {/* Second tab- Choose */}
            <p>
              <Services/>
            </p>
        </TabPanel>
      </TabContext>
    </Box>
    </div>
  );
}