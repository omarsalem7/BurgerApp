import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem active link="/">Burger Builder</NavigationItem>
        <NavigationItem  link="https://www.youtube.com/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;