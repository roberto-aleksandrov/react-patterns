import React from 'react';
import {Accordion, AccordionElement} from '../components/compound.components/accordion';

const AccordionUsage = () => (
    <Accordion>
          <AccordionElement name='Element 1'>            
                <h3>Header 1</h3>
                <div>
                    <div>Option 1</div>
                    <div>Option 2</div>
                </div>
          </AccordionElement>
          <AccordionElement name='Element 2'>            
                <h3>Header 2</h3> 
                <div>
                    <div>Option 1</div>
                    <div>Option 2</div>
                </div>
          </AccordionElement>
          <AccordionElement name='Element 3'>            
                <h3>Header 3</h3>
                <div>
                    <div>Option 1</div>
                    <div>Option 2</div>
                </div>
          </AccordionElement>
        </Accordion>
)

export default AccordionUsage;