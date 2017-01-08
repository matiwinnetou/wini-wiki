import React, { Component } from 'react';

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Delete from 'material-ui/svg-icons/action/delete';

const PageItem = ({pageId, pageName, selectPage, removePage}) => {
    return (
        <div>
            <ListItem
                primaryText={pageName}
                onTouchTap={() => selectPage(pageId)}
                rightIcon={<Delete onClick={() => removePage(pageId)} />}
             />
            <Divider />
        </div>
    )
}

export default PageItem;