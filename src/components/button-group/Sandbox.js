import React, { useState } from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../button/Button';
import { v4 as uuidv4 } from 'uuid';

const Sandbox = () => {
  const [switchOn, setSwitchOn] = useState(true);

  const handleSwitchOn = () => {
    setSwitchOn(true);
  };

  const handleSwitchOff = () => {
    setSwitchOn(false);
  };

  return (
    <>
      <h2>
        <span>1. Horizontal button group:</span>
      </h2>
      <ButtonGroup id={uuidv4()}>
        <Button id={uuidv4()} onClick={(e, id) => console.log(id)} active>
          First
        </Button>
        <Button id={uuidv4()}>Middle</Button>
        <Button id={uuidv4()}>Last</Button>
      </ButtonGroup>

      <h2>
        <span>2. Vertical button group:</span>
      </h2>
      <ButtonGroup id={uuidv4()} vertical>
        <Button id={uuidv4()}>First</Button>
        <Button id={uuidv4()} active>
          Middle
        </Button>
        <Button id={uuidv4()}>Last</Button>
      </ButtonGroup>

      <h2>
        <span>3. Switcher button group:</span>
      </h2>
      <ButtonGroup id={uuidv4()}>
        <Button id={uuidv4()} onClick={handleSwitchOn} active={switchOn}>
          ON
        </Button>
        <Button id={uuidv4()} onClick={handleSwitchOff} active={!switchOn}>
          OFF
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Sandbox;
