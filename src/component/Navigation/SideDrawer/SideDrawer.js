import React from 'react';
import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Auxilirity from '../../../hoc/Auxilirity/Auxilirity';
import BackDrop from '../../UI/BackDrop/BackDrop';

const sideDrawer = (props) => {
let attachedClass=[classes.SideDrawer,classes.Close];
if(props.open){
    attachedClass=[classes.SideDrawer,classes.Open];
}
    return (
        <Auxilirity>
            <BackDrop show={props.open} clicked={props.closed}  />
            <div className={attachedClass.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxilirity>
    );
}
export default sideDrawer;