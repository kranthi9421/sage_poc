import React,{useState} from 'react';
import Help from "carbon-react/lib/components/help";
import { Accordion, AccordionGroup,} from "carbon-react/lib/components/accordion";
import Box from "carbon-react/lib/components/box";
import Textbox from "carbon-react/lib/components/textbox";
import CarbonProvider from "carbon-react/lib/components/carbon-provider";
// import GlobalStyle from "carbon-react/lib/style/global-style";
import sageTheme from "carbon-react/lib/style/themes/sage";
import "carbon-react/lib/style/fonts.css";
import NavigationBar from "carbon-react/lib/components/navigation-bar";
import Button from "carbon-react/lib/components/button";
import ButtonToggle from "carbon-react/lib/components/button-toggle";
import Pill from "carbon-react/lib/components/pill";
import Fieldset from "carbon-react/lib/components/fieldset";
import {FlatTable,FlatTableHead,FlatTableRow,FlatTableHeader, FlatTableBody, FlatTableCell} from "carbon-react/lib/components/flat-table"
import SplitButton from "carbon-react/lib/components/split-button";


import './DemoComponent.css';

function DemoComponent() {

 const [quater,setQuater] = useState('')
 const [dateChoice,setDateChoice] = useState('')

  return (
    <React.Fragment>
         <div className='main_container'>
           {/* <CarbonProvider> */}
            <div>
               <header className="main__header">
                    <p className="title_text">sage</p><span className="help_text"><u><Help>Need Help</Help>Help</u></span>
                </header>
             </div>
             <div className='input_container'>
                 
               <div>
                 <label>Quater : </label>
                 <input type='text' value={quater} onChange={e => setQuater(e.target.value)}/>
               </div>
               <div>
               <div className='date_div'>
                 <label>Date  : </label>
                 <input type='text' value={dateChoice} onChange={e => setDateChoice(e.target.value)}/>
               </div>
             </div>
           </div>
           {/* </CarbonProvider> */}
         </div>
          <div className='accordian__div'>
             <CarbonProvider>
                 <AccordionGroup>
                        <Accordion title="First Accordion">
                                 <Box p={2}>
                                   <Textbox label="Wonder Cakes" />
                                  </Box>
                        </Accordion>
                </AccordionGroup>
             </CarbonProvider>
          </div>
    </React.Fragment>
  )
}

export default DemoComponent