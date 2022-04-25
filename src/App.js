import React, { useState } from "react";
import { Accordion, AccordionGroup,} from "carbon-react/lib/components/accordion";
import CarbonProvider from "carbon-react/lib/components/carbon-provider";
import sageTheme from "carbon-react/lib/style/themes/sage";
import GlobalStyle from "carbon-react/lib/style/global-style";
import Box from "carbon-react/lib/components/box";
import Button from "carbon-react/lib/components/button";
import "carbon-react/lib/style/fonts.css";
import DynamicForm from "./Components/DynamicForm";
import {FormFields} from "./Config/FormsFields";
import { Tabs, Tab } from "carbon-react/lib/components/tabs";
import Help from "carbon-react/lib/components/help";
import {FlatTable,FlatTableHead,FlatTableRow,FlatTableHeader, FlatTableBody, FlatTableCell} from "carbon-react/lib/components/flat-table"
import { GridContainer, GridItem } from "carbon-react/lib/components/grid";
import Pod from "carbon-react/lib/components/pod"
import './App.css';

function App  () {
  const [formData, setFormData] = useState({ data :[], current : {} });
  const createLayout = () => {
    // let data = [];
    // if (model.id) {
    //   data = formData.data.filter(d => {
    //     return d.id != model.id;
    //   });
    // } else {
    //   model.id = +new Date();
    //   data = formData.data.slice();
    // }

    // setFormData({
    //   data: [model, ...data],
    //   current: {} // todo
    // });
  };

  const onChange = (e, key, type = "single") => {
    // console.log(rowField, `${key} changed ${e.target.value} type ${type}`);
    // if (type === "single") {
    //   setRowField({...rowField , [key]: e.target.value });
    // } else {
    //   // Array of values (e.g. checkbox): TODO: Optimization needed.
    //   // let found = rowField[key]
    //   //   ? rowField[key].find(d => d === e.target.value)
    //   //   : false;

    //   // if (found) {
    //   //   let data = rowField[key].filter(d => {
    //   //     return d !== found;
    //   //   });
    //   //   setRowField({
    //   //     [key]: data
    //   //   });
    //   // } else {
    //     console.log("found", key, rowField[key]);
    //     // setRowField({
    //     //   [key]: [e.target.value, ...rowField[key]]
    //     // });
    //     let others = rowField[key] ? [...rowField[key]] : [];
    //     setRowField({
    //       [key]: [e.target.value, ...others]
    //     });
    //   //}
    // }
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <div>
        <header className="main__header">
          <p className="title_text">SAGE</p><span className="help_text"><u><Help>Need Help</Help>Help</u></span>
        </header>
      </div>

      <CarbonProvider theme={sageTheme}>
      <h1 className="main_title">Generate Reports for SAGE BUSINESS </h1>
      <Tabs size="large" align="left" position="top" m={6} className="tabs_div" >
        <Tab errorMessage="error" warningMessage="warning" infoMessage="info" tabId="tab-1" title="Layout Data" key="tab-1">
          <AccordionGroup>
          {Object.keys(FormFields).map((key, index) => (
          FormFields[key].length > 1 ? <>
            <Box m={1} p={1} >
            <Accordion title={key}>
              <DynamicForm
              key={formData.current.id}
              className="headerForm"
              // title={key}
              // defaultValues={formData.current}
              onChange = {onChange}
              model={FormFields[key]}
              index = {index}
              formFields = {FormFields}
              />
            </Accordion>
            </Box>
            </> : null
            )
            )}
           <Box m={3} p={3} >
              <Button onClick={createLayout} fullWidth buttonType="primary" type="submit">
                Create Layout
              </Button>
            </Box>
          </AccordionGroup> 
        </Tab>
       <Tab errorMessage="error" align="right" warningMessage="warning"  infoMessage="info" tabId="tab-2" title="Layout Preview" key="tab-2" className="tab__two">
   <div className="grid_container">
    <GridContainer>
      {/* <GridItem alignSelf="stretch" justifySelf="stretch" >
          <div className="page_nav"><span className="page_navtext">Sage</span></div>
     </GridItem> */}
      <GridItem alignSelf="stretch" justifySelf="stretch" className="grid_heading">
         <div className="grid_headingone">
            H1 Heading
         </div>
      </GridItem>
      <GridItem alignSelf="stretch" justifySelf="stretch" className="grid_heading"  gridColumn="1 / 7" >
         <div className="grid_left">
           H2 Heading
         </div>
      </GridItem>
      <GridItem alignSelf="stretch" justifySelf="stretch" className="grid_heading"  gridColumn="7 / 13" >
         <div className="grid_right">
            H2 Heading
            <Button buttonType="primary" noWrap className="submit_btn">
                Submit update to HMRC
              </Button>
         </div>
      </GridItem>
      <GridItem alignSelf="stretch" justifySelf="stretch" >
         <div className="page_body">
         <FlatTable colorTheme="transparent-white" className="table_div">
         <FlatTableHead>
          <FlatTableRow>
            <FlatTableHeader>Business Expenses</FlatTableHeader>
            <FlatTableHeader align="right">Total Expenses</FlatTableHeader>
            <FlatTableHeader align="right">Total disallowable</FlatTableHeader>
          </FlatTableRow>
        </FlatTableHead>
        <FlatTableBody>
          <FlatTableRow>
              <FlatTableCell>cost </FlatTableCell>
              <FlatTableCell align="right">33,000</FlatTableCell>
              <FlatTableCell align="right">51,000</FlatTableCell>
          </FlatTableRow>
          <FlatTableRow>
              <FlatTableCell>costg </FlatTableCell>
              <FlatTableCell align="right">33,000</FlatTableCell>
              <FlatTableCell align="right">51,000</FlatTableCell>
          </FlatTableRow>
          <FlatTableRow>
              <FlatTableCell>costg </FlatTableCell>
              <FlatTableCell align="right">33,000</FlatTableCell>
              <FlatTableCell align="right">51,000</FlatTableCell>
          </FlatTableRow>
          <FlatTableRow>
          <FlatTableCell>cost </FlatTableCell>
              <FlatTableCell align="right">33,000</FlatTableCell>
              <FlatTableCell align="right">51,000</FlatTableCell>
          </FlatTableRow>
          <FlatTableRow>
             <FlatTableCell>cost </FlatTableCell>
             <FlatTableCell align="right">33,000</FlatTableCell>
              <FlatTableCell align="right">51,000</FlatTableCell>
          </FlatTableRow>
          <FlatTableRow>
             <FlatTableCell>cost </FlatTableCell>
             <FlatTableCell align="right">33,000</FlatTableCell>
              <FlatTableCell align="right">51,000</FlatTableCell>
          </FlatTableRow>
          <FlatTableRow>
             <FlatTableCell>cost </FlatTableCell>
             <FlatTableCell align="right">33,000</FlatTableCell>
              <FlatTableCell align="right">51,000</FlatTableCell>
          </FlatTableRow>
          <FlatTableRow>
              <FlatTableCell>cost </FlatTableCell>
              <FlatTableCell align="right">33,000</FlatTableCell>
              <FlatTableCell align="right">51,000</FlatTableCell>
          </FlatTableRow>
        </FlatTableBody>
      </FlatTable>
    </div>
     </GridItem>
    </GridContainer>
        </div>
        </Tab>
      </Tabs>
      </CarbonProvider>
    </React.Fragment>
  );
};


export default App;
