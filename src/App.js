import React, { useState } from "react";
import { Accordion, AccordionGroup,} from "carbon-react/lib/components/accordion";
import CarbonProvider from "carbon-react/lib/components/carbon-provider";
import sageTheme from "carbon-react/lib/style/themes/sage";
import GlobalStyle from "carbon-react/lib/style/global-style";
// import Box from "carbon-react/lib/components/box";
// import Button from "carbon-react/lib/components/button";
import "carbon-react/lib/style/fonts.css";
import DynamicForm from "./Components/DynamicForm";
import {FormFields} from "./Config/FormsFields";
import { Tabs, Tab } from "carbon-react/lib/components/tabs";
import Help from "carbon-react/lib/components/help";
import './App.css';


function App  () {
  const [formData, setFormData] = useState({ data :[], current : {} });
  const onSubmit = model => {
    let data = [];
    if (model.id) {
      data = formData.data.filter(d => {
        return d.id != model.id;
      });
    } else {
      model.id = +new Date();
      data = formData.data.slice();
    }

    setFormData({
      data: [model, ...data],
      current: {} // todo
    });
  };

  return (
    <React.Fragment>
         <div>
               <header className="main__header">
                    <p className="title_text">sage</p><span className="help_text"><u><Help>Need Help</Help>Help</u></span>
                </header>
        </div>
      <GlobalStyle />
    <CarbonProvider theme={sageTheme}>
      <h1 className="main_title">Generate Reports for Sage</h1>
      <Tabs size="large" align="left" position="top" m={6}>
           <Tab errorMessage="error" warningMessage="warning" infoMessage="info" tabId="tab-1" title="Layout Data" key="tab-1">
       <AccordionGroup>
        <Accordion title="Header">
          <DynamicForm
          key={formData.current.id}
          className="headerForm"
          title="Header Data"
          defaultValues={formData.current}
          model={FormFields}
          onSubmit={model => {
            onSubmit(model);
          }}
      />
          </Accordion>
      </AccordionGroup> 
       </Tab>
       <Tab errorMessage="error" warningMessage="warning" infoMessage="info" tabId="tab-2" title="Layout Preview" key="tab-2" className="tab__two">
            <h3>Welcome to Sage Reports</h3>
            <h3>Welcome to Sage Reports</h3>
            <h3>Welcome to Sage Reports</h3>
            <h3>Welcome to Sage Reports</h3>
        </Tab>
      </Tabs>
    </CarbonProvider>
    </React.Fragment>
  );
};


export default App;
