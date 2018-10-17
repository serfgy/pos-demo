import React, { Component } from 'react';
import { Row, Col, Avatar, Icon, Button } from 'antd';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Table from './Table.js';
import TableB from './TableB.js';
import Menu from './Menu.js';
import MenuB from './MenuB.js';
import MenuC from './MenuC.js';
import Order from './Order.js';
import 'antd/dist/antd.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          {/* left side */}
          <Col style={{ backgroundColor: 'white', height: '100vh' }} span={12}>
            <div style={{ height: '84vh' }}>
              <Row style={{ padding: '10px', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '5px', fontSize: '1.5vh' }}>
                <Col span={12} style={{ textAlign: 'left' }}>signed in as <b><i>Debbie K. Ng</i></b>, serving <b><i>Table 18</i></b></Col>
                <Col span={12} style={{ textAlign: 'right' }}>13 Oct 2018, 11:58 am</Col>
              </Row>
              <Row style={{ paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px' }}>
                <Col span={3}>
                  <div className="flip-box">
                    <div className="flip-box-inner">
                      <div className="flip-box-front">
                        <Avatar shape="square" size={64} src="https://s5.favim.com/mini/54/girl-photography-red-lips-526007.jpg" />
                      </div>
                      <div className="flip-box-back">
                        <Avatar shape="square" size={64} style={{ fontFamily: 'Varela Round', color: '#f56a00', backgroundColor: '#fde3cf' }}>DKN</Avatar>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={3}><Avatar shape="square" size={64} style={{ fontFamily: 'Varela Round', color: '#f56a00', backgroundColor: '#fde3cf' }}><Icon type="appstore" theme="outlined" /> 18</Avatar></Col>
                <Col span={3}><Avatar shape="square" size={64} style={{ fontFamily: 'Varela Round', color: '#8956FF', backgroundColor: '#E3D7FF' }}><Icon type="team" theme="outlined" /> 4</Avatar></Col>
                <Col span={3}>
                  <div className="flip-box">
                    <div className="flip-box-inner">
                      <div className="flip-box-front">
                        <Avatar shape="square" size={64} style={{ fontFamily: 'Varela Round', color: '#8956FF', backgroundColor: '#E3D7FF' }}>RMT</Avatar>
                      </div>
                      <div className="flip-box-back">
                        <Avatar shape="square" size={64} src="http://www.bayanlar.com.tr/wp-content/uploads/2015/06/erkek-Akrep-Burcu-%C3%9Cnl%C3%BCleri.jpg" />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={12} style={{ textAlign: 'right' }}>
                  <div>
                    <Button style={{ border: 'none', paddingRight: '0' }} icon='file-text' type="dashed" >INV-201810220001</Button>
                    <Button style={{ marginLeft: '100px', border: 'none', paddingRight: '0' }} icon="idcard" type="dashed" >Robert M. Taylor</Button>
                  </div>
                </Col>
              </Row>
              <div>
                <table id='tableorder-detail-table'>
                  <tr>
                    <th style={{ width: '10%' }} className='tableorder-detail-table-header'>Qty</th>
                    <th style={{ width: '60%' }} className='tableorder-detail-table-header'>Desc</th>
                    <th style={{ width: '15%' }} className='tableorder-detail-table-header'>Unit Price</th>
                    <th style={{ width: '15%' }} className='tableorder-detail-table-header'>Total</th>
                  </tr>
                  {/* <tr>
                    <td style={{ borderLeft: 'solid #E84855 5px' }}>1</td>
                    <td>
                      <div className='tableorder-detail-table-desc'>Gratinated escargots with garlic and parsley butter</div>
                    </td>
                    <td>$22.00</td>
                    <td>$22.00</td>
                  </tr>
                  <tr>
                    <td style={{ borderLeft: 'solid #FFB86F 5px' }}> 1</td>
                    <td>
                      <div className='tableorder-detail-table-desc'>Maori Lakes lamb chops with rosemary jus, potato gnocchi, garden peas and spinach</div>
                      <div className='tableorder-detail-table-remark'>No Peas</div>
                    </td>
                    <td>$38.00</td>
                    <td>$38.00</td>
                  </tr> */}
                  <tr>
                    <td style={{ borderLeft: 'solid #FFDE73 5px' }}>1</td>
                    <td>
                      <div className='tableorder-detail-table-desc'>Double R Ranch (Northwest) Grain-fed top 1/3 USDA Prime beef</div>
                      <div className='tableorder-detail-table-remark'>Medium Rare, no pepper</div>
                    </td>
                    <td>$32.00</td>
                    <td>$32.00</td>
                  </tr>
                  <tr>
                    <td style={{ borderLeft: 'solid #30BEAE 5px' }}>1</td>
                    <td>
                      <div className='tableorder-detail-table-desc'>1824 Premium Beef (Queensland And The Northern Territory) </div>
                      <div className='tableorder-detail-table-remark'></div>
                    </td>
                    <td>$44.00</td>
                    <td>$44.00</td>
                  </tr>
                  <tr>
                    <td style={{ borderLeft: 'solid #87CEFA 5px', background: '#87CEFA' }}>1</td>
                    <td>
                      <div className='tableorder-detail-table-custom' style={{ color: '#87CEFA' }}>Culina pick-your-own cut</div>
                      <div className='tableorder-detail-table-remark'>rare</div>
                      <div className='tableorder-detail-table-add'>+ 1824 Premium Beef (Queensland and the Northern Territory) ($48.00)</div>
                      <div className='tableorder-detail-table-add'>+ red wine sauce ($0.00)</div>
                      <div className='tableorder-detail-table-add'>+ prep fee ($15.00)</div>
                    </td>
                    <td>$63.00</td>
                    <td>$63.00</td>
                  </tr>
                  <tr>
                    <td style={{ borderLeft: 'solid #DA70D6 5px', background: '#DA70D6' }}>1</td>
                    <td>
                      <div className='tableorder-detail-table-custom' style={{ color: '#DA70D6' }}>Culina Compose-your-own cheese plate</div>
                      <div className='tableorder-detail-table-remark'>Swap crackers for fruits</div>
                      <div className='tableorder-detail-table-add'>+ brie ($5.90)</div>
                      <div className='tableorder-detail-table-add'>+ gouda ($6.50)</div>
                      <div className='tableorder-detail-table-add'>+ camembert ($4.30)</div>
                      <div className='tableorder-detail-table-add'>+ percorino romano ($5.50)</div>
                      <div className='tableorder-detail-table-add'>+ manchego ($9.80)</div>
                      <div className='tableorder-detail-table-add'>+ prep fee ($6.00)</div>
                    </td>
                    <td>$38.00</td>
                    <td>$38.00</td>
                  </tr>
                  {/* <tr>
                    <td></td>
                    <td></td>
                    <td><span className='tableorder-detail-table-summary-header'>Discounts</span></td>
                    <td>-$25.00</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td><span className='tableorder-detail-table-summary-header'>Service</span></td>
                    <td>$11.10</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td><span className='tableorder-detail-table-summary-header'>Subtotal</span></td>
                    <td>$122.10</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td><span className='tableorder-detail-table-summary-header'>GST</span></td>
                    <td>$8.55</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td><span style={{ fontWeight: 'bold' }}>Total</span></td>
                    <td><span style={{ fontSize: '2.3vh', fontWeight: 'bold' }}>$130.65</span></td>
                  </tr> */}
                </table>
              </div>
            </div>

            {/* lower left */}
            <div style={{ marginTop: '-2px', height: '16vh', paddingLeft: '2px', paddingRight: '2px' }}>

              {/* padding same as gutter */}
              <Row gutter={2}>
                <Col className='menu-bar-tile' span={6}>
                  <Button style={{ width: '100%', height: '95%', color: '#2A79A8' }} icon='mail' type="dashed" >Send Ticket</Button>
                </Col>
                <Col className='menu-bar-tile' span={6}>
                  <Button style={{ width: '100%', height: '95%', color: '#FFB86F' }} icon='printer' type="dashed" >Print Receipt</Button>
                </Col>
                <Col className='menu-bar-tile' span={6}>
                  <Button style={{ width: '100%', height: '95%', color: '#756F68' }} icon='setting' type="dashed" >Functions</Button>
                </Col>
                <Col className='menu-bar-tile' span={6}>
                  <Button style={{ width: '100%', height: '95%', color: '#E84855' }} icon='credit-card' type="dashed" >Pay</Button>
                </Col>
              </Row>
              <Row gutter={2}>
                <Col className='menu-bar-tile' span={6}>
                  <Button style={{ width: '100%', height: '95%', color: '#2A79A8' }} icon='close' type="dashed" >Void</Button>
                </Col>
                <Col className='menu-bar-tile' span={6}>
                  <Button style={{ width: '100%', height: '96%', color: '#FFB86F' }} icon='folder-open' type="dashed" >Open Drawer</Button>
                </Col>
                <Col className='menu-bar-tile' span={6}>
                  <Button style={{ width: '100%', height: '96%', color: '#756F68' }} icon='copy' type="dashed" >Split Bill</Button>
                </Col>
                <Col className='menu-bar-tile' span={6}>
                  <Button style={{ width: '100%', height: '96%', color: '#E84855' }} icon='file' type="dashed" >Merge Bill</Button>
                </Col>
              </Row>
            </div>
          </Col>

          {/* right side router enabled */}
          <Router>
            <Col style={{ backgroundColor: '#23272A', height: '100vh' }} span={12}>
              <Switch>
                <Route exact path="/" component={Table} />
                <Route exact path="/tableB" component={TableB} />
                <Route path="/menu" component={Menu} />
                <Route path="/menuB" component={MenuB} />
                <Route path="/menuC" component={MenuC} />
                <Route path="/order" component={Order} />
              </Switch>
              <div style={{ marginTop: '-2px', height: '8vh', paddingLeft: '2px', paddingRight: '2px' }}>
                {/* padding same as gutter */}
                <Row gutter={2}>
                  <Col className='menu-bar-tile' span={8} style={{ overflow: 'hidden' }}>
                    <Link to="/">
                      <Button style={{ width: '100%', height: '95%', color: '#2A79A8', border: 'none' }} icon='appstore' ghost>Open Table</Button>
                    </Link>
                  </Col>
                  <Col className='menu-bar-tile' span={8} style={{ overflow: 'hidden' }}>
                    <Link to="/menu">
                      <Button style={{ width: '100%', height: '95%', color: '#FFB86F', border: 'none' }} icon='edit' ghost>Take Order</Button>
                    </Link>
                  </Col>
                  <Col className='menu-bar-tile' span={8} style={{ overflow: 'hidden' }}>
                    <Link to="/order">
                      <Button style={{ width: '100%', height: '95%', color: '#E84855', border: 'none' }} icon='export' ghost>Check Out</Button>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>
          </Router>
        </Row>
      </div >
    );
  }
}

export default App;
