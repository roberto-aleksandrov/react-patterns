import React from 'react';

const headerStyle = {
    border: 'solid 1px',
    marginLeft: '30%',
    marginRight: '30%'
}

const AccordionElement = ({name, children, display, toggle}) => console.log(toggle, display) || (
    <div>
        <div style={headerStyle} onClick={e => toggle(e, name)}>{name}</div>
        {display && <div>{children}</div>}
    </div>
)

export default AccordionElement;

