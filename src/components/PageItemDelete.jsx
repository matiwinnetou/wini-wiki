import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

const PageItemDelete = ({ pageId, removePage }) => {
    return <FlatButton 
        icon={<DeleteIcon />}
        onTouchTap={() => removePage(pageId)}
    />
}

export default PageItemDelete;