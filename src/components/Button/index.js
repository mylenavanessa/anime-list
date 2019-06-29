import React from 'react';
import { Button } from 'reactstrap';
import './styles.scss';

export default function ButtonComponent(props) {
  return (
    <Button id="Button" {...props}>
      {props.children}
    </Button>
  );
}


