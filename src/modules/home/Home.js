import React, { Component } from 'react';
import { Accordion, AccordionItem, Breadcrumb, BreadcrumbItem } from 'carbon-components-react';
import 'carbon-components/scss/globals/scss/styles.scss';

class Home extends Component {

  render() {
    return (
      <div className="home-demo">
        <h3 className="App__demo-title">Carbon Components</h3>
        <Accordion className="accordion">
          <AccordionItem title="Example">
            <p>
              This is a Component imported from Carbon and styled with the CSS
              from the main Carbon Components GitHub repo!
            </p>
          </AccordionItem>
          <AccordionItem title="Questions?">
            <p>
              Hi there!{' '}
              <span aria-label="Hand wave" role="img">
                👋{' '}
              </span>{' '}
              if you have any questions about this demo, or are running into
              any issues setting this up in your own development environment,
              please feel free to reach out to us on Slack or make an issue on
              the GitHub Repository.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default Home;