import React, { Component } from 'react';
import { Row, Col, Icon, Button } from 'antd';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';

class MenuC extends Component {
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
              <div><Link to='/menu' style={{ color: 'grey' }}># Mains & Meats</Link></div>
              <div># Sides</div>
              <div># Desserts</div>
              <div className='table-tab-select-highlight'><Link to='/menuB' style={{ color: 'white' }}># Beverages</Link></div>
              <div style={{ paddingBottom: '20px' }}># Cheeses</div>
            </div>
          </Col>
          <Col span={18} style={{ height: '100%' }}>
            <div className='table-tab-tables'>
              <Row>
                <Col span={24} className="menu-wrapper">
                  <div className='menu-menu-drink'>
                    <div className='menu-img-drink' style={{ backgroundImage: 'url("https://www.vinissimus.co.uk/images/prfmtgrande/vi/pzbru17_art800.jpg")' }}></div>
                    <div className='menu-name-drink'>Torres Pazo das Bruxas Albariño 2017 (Glass)</div>
                    <div className='menu-price-drink'>14</div>
                    <div className='menu-attn'>
                      <Icon style={{ marginLeft: '5px' }} type="heart" theme="twoTone" twoToneColor="#eb2f96" />
                    </div>
                  </div>
                </Col>
                <Col span={24} className="menu-wrapper">
                  <div className='menu-menu-drink'>
                    <div className='menu-img-drink' style={{ backgroundImage: 'url("https://www.vinissimus.co.uk/images/prfmtgrande/vi/pzbru17_art800.jpg")' }}></div>
                    <div className='menu-name-drink'>Torres Pazo das Bruxas Albariño 2017 (Bottle)</div>
                    <div className='menu-price-drink'>53</div>
                    <div className='menu-attn'>
                    </div>
                  </div>
                </Col>
                <Col span={24} className="menu-wrapper">
                  <div className='menu-menu-drink'>
                    <div className='menu-img-drink' style={{ backgroundImage: 'url("https://cdn1.wine-searcher.net/images/labels/70/13/como-estate-viognier-margaret-river-australia-10667013.jpg")' }}></div>
                    <div className='menu-name-drink'>Como Estate Viognier 2012 Margaret River, Australia (Glass)</div>
                    <div className='menu-price-drink'>15</div>
                    <div className='menu-attn'>
                      <Icon style={{ marginLeft: '5px' }} type="star" theme="twoTone" twoToneColor="yellow" />
                      <Icon style={{ marginLeft: '5px' }} type="like" theme="twoTone" twoToneColor="#52c41a" />
                    </div>
                  </div>
                </Col>
                <Col span={24} className="menu-wrapper">
                  <div className='menu-menu-drink'>
                    <div className='menu-img-drink' style={{ backgroundImage: 'url("https://cdn1.wine-searcher.net/images/labels/70/13/como-estate-viognier-margaret-river-australia-10667013.jpg")' }}></div>
                    <div className='menu-name-drink'>Como Estate Viognier 2012 Margaret River, Australia (Bottle)</div>
                    <div className='menu-price-drink'>57</div>
                    <div className='menu-attn'>
                      <Icon style={{ marginLeft: '5px' }} type="fire" theme="twoTone" twoToneColor="orange" />
                    </div>
                  </div>
                </Col>
                <Col span={24} className="menu-wrapper">
                  <div className='menu-menu-drink'>
                    <div className='menu-img-drink' style={{ backgroundImage: 'url("http://4.bp.blogspot.com/_bp-eCUYbDYA/SJ7mv0kEohI/AAAAAAAABfM/oj1Y4HK0mCA/s1600/IMG_6540.JPG")' }}></div>
                    <div className='menu-name-drink'>Petaluma Hanlin Hill Riesling 2017 Clare Valley, Australia (Glass)</div>
                    <div className='menu-price-drink'>17</div>
                    <div className='menu-attn'>
                    </div>
                  </div>
                </Col>
                <Col span={24} className="menu-wrapper">
                  <div className='menu-menu-drink'>
                    <div className='menu-img-drink' style={{ backgroundImage: 'url("http://4.bp.blogspot.com/_bp-eCUYbDYA/SJ7mv0kEohI/AAAAAAAABfM/oj1Y4HK0mCA/s1600/IMG_6540.JPG")' }}></div>
                    <div className='menu-name-drink'>Petaluma Hanlin Hill Riesling 2017 Clare Valley, Australia (Bottle)</div>
                    <div className='menu-price-drink'>67</div>
                    <div className='menu-attn'>
                      <Icon style={{ marginLeft: '5px' }} type="like" theme="twoTone" twoToneColor="#52c41a" />
                    </div>
                  </div>
                </Col>
                <Col span={24} className="menu-wrapper">
                  <div className='menu-menu-drink'>
                    <div className='menu-img-drink' style={{ backgroundImage: 'url("https://www.vinissimus.co.uk/images/prfmtgrande/vi/trbws09_art800.jpg")' }}></div>
                    <div className='menu-name-drink'>Torbreck Woodcutter’s Semillon 2016 Barossa Valley, Australia (Glass)</div>
                    <div className='menu-price-drink'>18</div>
                    <div className='menu-attn'>
                    </div>
                  </div>
                </Col>
                <Col span={24} className="menu-wrapper">
                  <div className='menu-menu-drink'>
                    <div className='menu-img-drink' style={{ backgroundImage: 'url("https://www.vinissimus.co.uk/images/prfmtgrande/vi/trbws09_art800.jpg")' }}></div>
                    <div className='menu-name-drink'>Torbreck Woodcutter’s Semillon 2016 Barossa Valley, Australia (Bottle)</div>
                    <div className='menu-price-drink'>69</div>
                    <div className='menu-attn'>
                    </div>
                  </div>
                </Col>
                <Col span={24} className="menu-wrapper">
                  <div className='menu-menu-drink'>
                    <div className='menu-img-drink' style={{ backgroundImage: 'url("https://www.vinissimus.co.uk/images/prfmtgrande/vi/lagma17_art800.jpg")' }}></div>
                    <div className='menu-name-drink'>Lagrave-Martillac Blanc 2016 Pessac Léognan, France (Glass)</div>
                    <div className='menu-price-drink'>22</div>
                    <div className='menu-attn'>
                    </div>
                  </div>
                </Col>
                <Col span={24} className="menu-wrapper">
                  <div className='menu-menu-drink'>
                    <div className='menu-img-drink' style={{ backgroundImage: 'url("https://www.vinissimus.co.uk/images/prfmtgrande/vi/lagma17_art800.jpg")' }}></div>
                    <div className='menu-name-drink'>Lagrave-Martillac Blanc 2016 Pessac Léognan, France (Bottle)</div>
                    <div className='menu-price-drink'>85</div>
                    <div className='menu-attn'>
                    </div>
                  </div>
                </Col>
                <Col span={24} className="menu-wrapper">
                  <div className='menu-menu-drink'>
                    <div className='menu-img-drink' style={{ backgroundImage: 'url("https://cdn.ct-static.com/labels/747518.jpg")' }}></div>
                    <div className='menu-name-drink'>Inama Vulcaia Fumé Sauvignon 2013 Veneto, Italy (Glass)</div>
                    <div className='menu-price-drink'>25</div>
                    <div className='menu-attn'>
                    </div>
                  </div>
                </Col>
                <Col span={24} className="menu-wrapper">
                  <div className='menu-menu-drink'>
                    <div className='menu-img-drink' style={{ backgroundImage: 'url("https://cdn.ct-static.com/labels/747518.jpg")' }}></div>
                    <div className='menu-name-drink'>Inama Vulcaia Fumé Sauvignon 2013 Veneto, Italy (Bottle)</div>
                    <div className='menu-price-drink'>99</div>
                    <div className='menu-attn'>
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

export default MenuC;
