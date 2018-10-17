import React, { Component } from 'react';
import { Row, Col, Icon, Button } from 'antd';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';

class Menu extends Component {
  render() {
    return (
      <div style={{ height: '92vh' }}>
        <Row style={{ padding: '20px', height: '100%' }}>
          <Col span={6} style={{ paddingRight: '10px' }}>
            <Button className='table-tab-new-btn' style={{ border: 'none' }} block ghost>Serving <Icon type="appstore" theme="outlined" />18</Button>
            <Button className='table-tab-new-btn' icon='scan' block ghost>Scan Item</Button>
            <div className='table-tab-select'>
              <div style={{ paddingTop: '20px' }}># Appetizer</div>
              <div># Seafood</div>
              <div># Salads</div>
              <div className='table-tab-select-highlight'><Link to='/menu' style={{ color: 'white' }}># Mains & Meats</Link></div>
              <div># Sides</div>
              <div># Desserts</div>
              <div><Link to='/menuB' style={{ color: 'grey' }}># Beverages</Link></div>
              <div style={{ paddingBottom: '20px' }}># Cheeses</div>
            </div>
          </Col>
          <Col span={18} style={{ height: '100%', overflow: 'hidden' }}>
            <div className='table-tab-tables'>
              <Row>
                <Col span={24} className="menu-wrapper">
                  <div className='menu-menu'>
                    <div className='menu-name'>Fish of the day with charred heirloom tomato sauce, rocket and fennel salad</div>
                    <div className='menu-price'>Market price (Prep fee applies)</div>
                    <div className='menu-attn'>
                      <Icon style={{ marginLeft: '5px' }} type="heart" theme="twoTone" twoToneColor="#eb2f96" />
                      <Icon style={{ marginLeft: '5px' }} type="fire" theme="twoTone" twoToneColor="orange" />
                      <Icon style={{ marginLeft: '5px' }} type="star" theme="twoTone" twoToneColor="yellow" />
                      <Icon style={{ marginLeft: '5px' }} type="like" theme="twoTone" twoToneColor="#52c41a" />
                    </div>
                    <div className='menu-img'>
                      <div className='menu-img2' style={{ backgroundImage: 'url("https://www.viamagazine.com/sites/default/files/styles/780x565/public/images/Western-Plate-montana-elk-cafe-kandahar-whitefish.jpg?itok=iK5tm4RK")' }}></div>
                    </div>
                  </div>
                </Col>
                <Col span={24} className="menu-wrapper">
                  <div className='menu-menu alt'>
                    <div className='menu-name'>Bouillabaisse red snapper, Hokkaido clams, bouchot mussels and scampi, with rouille and grilled baguette</div>
                    <div className='menu-price'>42</div>
                    <div className='menu-attn'>
                      <Icon style={{ marginLeft: '5px' }} type="fire" theme="twoTone" twoToneColor="orange" />
                      <Icon style={{ marginLeft: '5px' }} type="star" theme="twoTone" twoToneColor="yellow" />
                      <Icon style={{ marginLeft: '5px' }} type="like" theme="twoTone" twoToneColor="#52c41a" />
                    </div>
                  </div>
                </Col>
                <Col span={24} className="menu-wrapper">
                  <div className='menu-menu out'>
                    <div className='menu-name'>Bouchot mussels (AOP) marinière in white wine, garlic and parsley broth, served with fries </div>
                    <div className='menu-price'>36</div>
                    <div className='menu-attn'>
                      <Icon style={{ marginLeft: '5px' }} type="heart" theme="twoTone" twoToneColor="#eb2f96" />
                    </div>
                  </div>
                </Col>
                <Col span={24} className="menu-wrapper">
                  <div className='menu-menu alt'>
                    <div className='menu-name'>Maori Lakes lamb chops with rosemary jus, potato gnocchi, garden peas and spinach </div>
                    <div className='menu-price'>38</div>
                    <div className='menu-attn'>
                      <Icon style={{ marginLeft: '5px' }} type="heart" theme="twoTone" twoToneColor="#eb2f96" />
                      <Icon style={{ marginLeft: '5px' }} type="fire" theme="twoTone" twoToneColor="orange" />
                    </div>
                  </div>
                </Col>
                <Col span={24} className="menu-wrapper">
                  <div className='menu-menu'>
                    <div className='menu-name'>Grilled Snake River Farm Kurobuta Pork Chop with braised kale, sautéed Ratte potatoes, mustard and cider jus </div>
                    <div className='menu-price'>35</div>
                    <div className='menu-attn'>
                      <Icon style={{ marginLeft: '5px' }} type="star" theme="twoTone" twoToneColor="yellow" />
                      <Icon style={{ marginLeft: '5px' }} type="like" theme="twoTone" twoToneColor="#52c41a" />
                    </div>
                  </div>
                </Col>
                <Col span={24} className="menu-wrapper">
                  <div className='menu-menu alt'>
                    <div className='menu-name'>Crispy skin ocean trout with pickled beets, sugar snap peas and avocado salad horseradish crème fraiche</div>
                    <div className='menu-price'>32</div>
                    <div className='menu-attn'>
                    </div>
                  </div>
                </Col>
                <Col span={24} className="menu-wrapper">
                  <div className='menu-menu alt'>
                    <div className='menu-name'>Castaing duck confit with balsamic roasted radicchio and baby carrots, potatoes sautéed in duck fat</div>
                    <div className='menu-price'>36</div>
                    <div className='menu-attn'>
                    </div>
                  </div>
                </Col>
                <Col span={24} className="menu-wrapper">
                  <div className='menu-menu alt'>
                    <div className='menu-name'>Fish and chips with tartare sauce and leaf salad</div>
                    <div className='menu-price'>30</div>
                    <div className='menu-attn'>
                      <Icon style={{ marginLeft: '5px' }} type="heart" theme="twoTone" twoToneColor="#eb2f96" />
                    </div>
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

export default Menu;
