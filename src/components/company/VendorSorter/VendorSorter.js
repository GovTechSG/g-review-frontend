import React, { Component } from 'react';
import { Nav, NavItem, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import VendorListingBox from '../VendorListingBox/VendorListingBox';
// import API from '../../_utility/Api';
import './VendorSorter.scss';

export default class VendorSorter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedView: 'best_ratings'
    };
  }

  handleSelect(eventKey, event) {
    event.preventDefault();
    this.setState({
      selectedView: eventKey
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm={12}>
            <Nav className="nav-sorter" bsStyle="tabs" activeKey={this.state.selectedView} onSelect={(k, event) => this.handleSelect(k, event)}>
              <NavItem eventKey="best_ratings">
                <FormattedMessage id="vendorsorter.best.ratings" />
              </NavItem>
              <NavItem eventKey="newly_added">
                <FormattedMessage id="vendorsorter.newly.added" />
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <VendorListingBox selectedView={this.state.selectedView} />
          </Col>
        </Row>
      </div>
    );
  }
}
