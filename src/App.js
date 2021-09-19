import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Typography } from 'antd';

import StateContext from '../src/usestate&usecontext/usestate&usecontext';
import Effect from '../src/useeffect.js/useeffect';


const { Header, Content, Footer } = Layout;
const { Text } = Typography;

function App() {
  return (
    <Router>
    <Layout style={{background:'#556b2f'}}>
      <Header style={{background:'#556b2f', textAlign:'center'}}>
          <Link to="/" style={{margin:'8px', color:'#FFFFFF', fontFamily:'Fantasy', fontSize: '20px'}}>Form</Link>
          <Link to="/effect" style={{margin:'8px', color:'#FFFFFF', fontFamily:'Fantasy', fontSize: '20px'}}>Pilih Barang</Link>
      </Header>
      <Switch>
        <Route path="/" exact component={StateContext} />
        <Route path="/effect" exact component={Effect} />
      </Switch>
      <Content style={{textAlign:'center', display: 'inline-block'}}></Content>
      <Footer style={{background:'#556b2f', fontSize: '20px', textAlign:'center', width:'100%', fontFamily:'Roboto', color:'#FFFFFF'}}>
                  <Text style={{fontFamily:'Fantasy', color:'#FFFFFF', fontSize: '25px', textAlign:'center'}}>
        24's Store
        </Text>
        </Footer>
    </Layout>
    </Router>
 )
}

export default App;