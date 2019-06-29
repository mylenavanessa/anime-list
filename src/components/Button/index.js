import React from 'react';
import { Button } from 'reactstrap';
import './styles.scss';

const ButtonComponent = props => (
  <Button id="Button" {...props}>
    {props.children}
  </Button>
)

export default ButtonComponent;
