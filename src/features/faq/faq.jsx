import './faq.style.css';
import { faq } from '../../data/faq';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Add } from '@mui/icons-material';

const Faq = () => {
  return (
    <div className="faqHolder">
      <div className="faqMain">
        <h1>Frequently Asked Questions</h1>
        <div className="accordionHolder">
          {faq.map((oneFaq) => {
            return (
              <Accordion key={oneFaq.id}>
                <AccordionSummary
                  expandIcon={<Add />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    {oneFaq.faqTitle}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      color: '#212b36',
                    }}
                  >
                    {oneFaq.faqText}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
