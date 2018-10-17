import React, { Component } from 'react';
import { Row, Col, Icon, Button } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

class Order extends Component {
  render() {
    return (
      <div style={{ height: '92vh' }}>
        <Row style={{ padding: '20px', height: '100%' }}>
          <Col span={6} style={{ paddingRight: '10px' }}>
            <Button className='table-tab-new-btn' icon='folder-open' block ghost>Open Table</Button>
            <div className='table-tab-select'>
              <div style={{ paddingTop: '20px' }}># Section A</div>
              <div className='table-tab-select-highlight'># Section B</div>
              <div># Section C</div>
              <div># Section D</div>
              <div># Section E</div>
              <div># VIP Room 1</div>
              <div># VIP Room 2</div>
              <div># Garden</div>
              <div># Lounge</div>
              <div style={{ paddingBottom: '20px' }}># Bar</div>
            </div>
          </Col>
          <Col span={18} style={{ height: '100%' }}>
            <div className='table-tab-tables'>
              <Row>
                <Col span={8} className="table-wrapper">
                  <div className='table-table occupied'>
                    <div className='table-number'>#7</div>
                    <div className='table-status'>Occupied</div>
                    <div className='table-detail-1'><Icon type="team" theme="outlined" /> 4</div>
                    <div className='table-detail-2'>$288.00</div>
                  </div>
                </Col>
                <Col span={8} className="table-wrapper">
                  <div className='table-table occupied'>
                    <div className='table-number'>#8</div>
                    <div className='table-status'>Occupied</div>
                    <div className='table-detail-1'><Icon type="team" theme="outlined" /> 1</div>
                    <div className='table-detail-2'>$19.00</div>
                  </div>
                </Col>
                <Col span={8} className="table-wrapper">
                  <div className='table-table reserved'>
                    <div className='table-number'>#9</div>
                    <div className='table-status'>Reserved</div>
                    <div className='table-detail-1'><Icon type="team" theme="outlined" /> 4</div>
                    <div className='table-detail-2'>$0.00</div>
                  </div>
                </Col>
                <Col span={8} className="table-wrapper">
                  <div className='table-table paid'>
                    <div className='table-number'>#10</div>
                    <div className='table-status'>Paid</div>
                    <div className='table-detail-1'><Icon type="team" theme="outlined" /> 6</div>
                    <div className='table-detail-2'>$529.00</div>
                  </div>
                </Col>
                <Col span={8} className="table-wrapper">
                  <div className='table-table vacant'>
                    <div className='table-number'>#11</div>
                    <div className='table-status'>Vacant</div>
                    <div className='table-detail-1'><Icon type="team" theme="outlined" /> 0</div>
                    <div className='table-detail-2'>$0.00</div>
                  </div>
                </Col>
                <Col span={8} className="table-wrapper">
                  <div className='table-table vacant'>
                    <div className='table-number'>#12</div>
                    <div className='table-status'>Vacant</div>
                    <div className='table-detail-1'><Icon type="team" theme="outlined" /> 0</div>
                    <div className='table-detail-2'>$0.00</div>
                  </div>
                </Col>
                <Col span={8} className="table-wrapper">
                  <div className='table-table reserved'>
                    <div className='table-number'>#13</div>
                    <div className='table-status'>Reserved</div>
                    <div className='table-detail-1'><Icon type="team" theme="outlined" /> 2</div>
                    <div className='table-detail-2'>$0.00</div>
                  </div>
                </Col>
                <Col span={8} className="table-wrapper">
                  <div className='table-table vacant'>
                    <div className='table-number'>#14</div>
                    <div className='table-status'>Vacant</div>
                    <div className='table-detail-1'><Icon type="team" theme="outlined" /> 0</div>
                    <div className='table-detail-2'>$0.00</div>
                  </div>
                </Col>
                <Col span={8} className="table-wrapper">
                  <div className='table-table unavailable'>
                    <div className='table-number'>#15</div>
                    <div className='table-status'>Unavailable</div>
                    <div className='table-detail-1'><Icon type="team" theme="outlined" /> 0</div>
                    <div className='table-detail-2'>$0.00</div>
                  </div>
                </Col>
                <Col span={8} className="table-wrapper">
                  <div className='table-table occupied'>
                    <div className='table-number'>#16</div>
                    <div className='table-status'>Occupied</div>
                    <div className='table-detail-1'><Icon type="team" theme="outlined" /> 4</div>
                    <div className='table-detail-2'>$489.00</div>
                  </div>
                </Col>
                <Col span={8} className="table-wrapper">
                  <div className='table-table paid'>
                    <div className='table-number'>#17</div>
                    <div className='table-status'>Paid</div>
                    <div className='table-detail-1'><Icon type="team" theme="outlined" /> 3</div>
                    <div className='table-detail-2'>$95.00</div>
                  </div>
                </Col>
                <Col span={8} className="table-wrapper">
                  <div className='table-table occupied'>
                    <div className='table-number'>#18</div>
                    <div className='table-status'>Occupied</div>
                    <div className='table-detail-1'><Icon type="team" theme="outlined" /> 4</div>
                    <div className='table-detail-2'>$180.00</div>
                  </div>
                </Col>
                <Col span={8} className="table-wrapper">
                  <div className='table-table occupied'>
                    <div className='table-number'>#19</div>
                    <div className='table-status'>Occupied</div>
                    <div className='table-detail-1'><Icon type="team" theme="outlined" /> 4</div>
                    <div className='table-detail-2'>$288.00</div>
                  </div>
                </Col>
                <Col span={8} className="table-wrapper">
                  <div className='table-table occupied'>
                    <div className='table-number'>#20</div>
                    <div className='table-status'>Occupied</div>
                    <div className='table-detail-1'><Icon type="team" theme="outlined" /> 4</div>
                    <div className='table-detail-2'>$288.00</div>
                  </div>
                </Col>
                <Col span={8} className="table-wrapper">
                  <div className='table-table occupied'>
                    <div className='table-number'>#21</div>
                    <div className='table-status'>Occupied</div>
                    <div className='table-detail-1'><Icon type="team" theme="outlined" /> 4</div>
                    <div className='table-detail-2'>$288.00</div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Order;
