import React from 'react';
import {Button, Menu, Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'


const menuItems = [
    {
        key:'home',
        icon:<HomeOutlined/>,
        label:"Home"
    },
    {
        key:'cryptocurrencies',
        icon:<FundOutlined/>,
        label:"Cryptocurrencies"
    },
    {
        key:'exchanges',
        icon:<MoneyCollectOutlined/>,
        label:"Exchanges"
    },
    {
        key:'news',
        icon:<BulbOutlined/>,
        label:"News"
    },
]

export const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
             <Avatar src={icon} size="large"/>
             <Typography.Title level={2} className="logo">
                 <Link to="/">Cryptoverse</Link>
             </Typography.Title>
        </div>
        <Menu theme="dark" items={menuItems}/>
    </div>
  )
}
