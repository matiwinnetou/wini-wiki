import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

const PageItemDelete = ({ id, removePage }) => {
    return <FlatButton 
        icon={<DeleteIcon />}
        onTouchTap={() => removePage(id)}
    />
}

export default PageItemDelete;