import React, { Component } from 'react';
import { Row, Col, Icon, Button } from 'antd';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';

class MenuB extends Component {
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
                <Col span={8} className="table-wrapper">
                  <Link to="/menuC" style={{ textDecoration: 'none', color: 'white' }}>
                    <div className='menu-select-sub' style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXkDGPxyhY-jqSVzznEIiSYHtV5hD2Fx5uAaDtd7uWc12fP5gnuA")' }}>
                      <div className='menu-select-sub-title'>White Wine</div>
                    </div>
                  </Link>
                </Col>
                <Col span={8} className="table-wrapper">
                  <Link to="/menuC" style={{ textDecoration: 'none', color: 'white' }}>
                    <div className='menu-select-sub' style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUjl2G81Rq3nMw5uKeKawjaKyUPtwifYR5GifCZvd0QQpI6vLsg")' }}>
                      <div className='menu-select-sub-title'>Red Wine</div>
                    </div>
                  </Link>
                </Col>
                <Col span={8} className="table-wrapper">
                  <Link to="/menuC" style={{ textDecoration: 'none', color: 'white' }}>
                    <div className='menu-select-sub' style={{ backgroundImage: 'url("http://www.wineland.co.za/wp-content/uploads/2017/07/sommeliers_crop.jpg")' }}>
                      <div className='menu-select-sub-title'>Sommelier's Selections</div>
                    </div>
                  </Link>
                </Col>
                <Col span={8} className="table-wrapper">
                  <Link to="/menuC" style={{ textDecoration: 'none', color: 'white' }}>
                    <div className='menu-select-sub' style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnVysVnpLa1gj7SkdPpCo79big6PDv1odDc30GRzGYl-OaaOEgQ")' }}>
                      <div className='menu-select-sub-title'>Rosé</div>
                    </div>
                  </Link>
                </Col>
                <Col span={8} className="table-wrapper">
                  <Link to="/menuC" style={{ textDecoration: 'none', color: 'white' }}>
                    <div className='menu-select-sub' style={{ backgroundImage: 'url("https://mynorth.com/wp-content/uploads/2018/02/TVM-0218-_-Dave-Weidner-_-Northern-Michigan-Dessert-Wines.jpg")' }}>
                      <div className='menu-select-sub-title'>Dessert Wine</div>
                    </div>
                  </Link>
                </Col>
                <Col span={8} className="table-wrapper">
                  <Link to="/menuC" style={{ textDecoration: 'none', color: 'white' }}>
                    <div className='menu-select-sub' style={{ backgroundImage: 'url("https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2015/11/Champagne-Andy-Roberts-GettyImages-151814127-630x417.jpg")' }}>
                      <div className='menu-select-sub-title'>Champagne</div>
                    </div>
                  </Link>
                </Col>
                <Col span={8} className="table-wrapper">
                  <Link to="/menuC" style={{ textDecoration: 'none', color: 'white' }}>
                    <div className='menu-select-sub' style={{ backgroundImage: 'url("http://www.pierrofino.com/Assets/Category/the-digestifs.jpg")' }}>
                      <div className='menu-select-sub-title'>Digestifs</div>
                    </div>
                  </Link>
                </Col>
                <Col span={8} className="table-wrapper">
                  <Link to="/menuC" style={{ textDecoration: 'none', color: 'white' }}>
                    <div className='menu-select-sub' style={{ backgroundImage: 'url("http://www.littleitalyltd.com/wp-content/uploads/2015/02/ACQUA-PANNA-1.jpg")' }}>
                      <div className='menu-select-sub-title'>Mineral Water</div>
                    </div>
                  </Link>
                </Col>
                <Col span={8} className="table-wrapper">
                  <Link to="/menuC" style={{ textDecoration: 'none', color: 'white' }}>
                    <div className='menu-select-sub' style={{ backgroundImage: 'url("https://previews.123rf.com/images/poznyakov/poznyakov1608/poznyakov160800123/61009104-wooden-boards-are-ice-cold-beverage-two-glasses-with-red-berries-lemon-cocktail-alcohol-cocktail-num.jpg")' }}>
                      <div className='menu-select-sub-title'>Cold Drinks</div>
                    </div>
                  </Link>
                </Col>
                <Col span={8} className="table-wrapper">
                  <Link to="/menuC" style={{ textDecoration: 'none', color: 'white' }}>
                    <div className='menu-select-sub' style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4w78GBk8GhdbJdxECVsIzEYqQ_gF_NOc3AVe-PBWqX1NqZ6H")' }}>
                      <div className='menu-select-sub-title'>Hot Drinks</div>
                    </div>
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div >
    );
  }
}

export default MenuB;
