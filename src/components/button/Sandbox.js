import React, { Fragment } from 'react';
import Button from './Button';
import { v4 as uuidv4 } from 'uuid';

const Sandbox = () => (
  <Fragment>
    <h2>
      <span>1. Text and onClick function:</span>
    </h2>
    <Button
      id={uuidv4()}
      onClick={() => {
        console.log('!!!!');
      }}
    >
      Button text
    </Button>

    <h2>
      <span>2. Disabled button:</span>
    </h2>
    <Button
      id={uuidv4()}
      onClick={() => {
        console.log('!!!!');
      }}
      disabled
    />

    <h2>
      <span>3. Active button:</span>
    </h2>
    <Button id={uuidv4()} active />

    <h2>
      <span>4. Supporting data, type and etc. attributes:</span>
    </h2>
    <Button id={uuidv4()} data-name='button' />
    <Button id={uuidv4()} type='submit' />

    <h2>
      <span>5. Button link</span>
    </h2>
    <Button id={uuidv4()} href='test'>
      Link
    </Button>
    <Button id={uuidv4()} href='test' disabled>
      Link
    </Button>
  </Fragment>
);

export default Sandbox;
