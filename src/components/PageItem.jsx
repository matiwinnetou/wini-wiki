import React, { Component } from 'react';

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Delete from 'material-ui/svg-icons/action/delete';

const PageItem = ({page, selectPage, removePage}) => {
    return (
        <div>
            <ListItem
                secondaryText={page.name}
                onTouchTap={() => selectPage(page.id)}
                rightIcon={<Delete onClick={() => removePage(page.id)}/>}
             />
            <Divider />
        </div>
    )
}

PageItem.propTypes = {
    page: React.PropTypes.object.isRequired,
    selectPage: React.PropTypes.func.isRequired,
    removePage: React.PropTypes.func.isRequired
};

export default PageItem;