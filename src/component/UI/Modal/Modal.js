import React from 'react';
import classes from './Modal.module.css';
import Auxilirity from '../../../hoc/Auxilirity/Auxilirity';
import BackDrop from '../BackDrop/BackDrop';
import { Component } from 'react';
class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }
    componentWillUpdate(){
        console.log('[modal] willUpdate');
    }
    render() {
        return (
            <Auxilirity>
                <BackDrop show={this.props.show} clicked={this.props.modelClosed} />
                <div className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxilirity>
        );
    }
}

export default Modal;