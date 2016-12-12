import React, { Component } from 'react';

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import PageItemDelete from "./PageItemDelete";

const PageItem = ({page, selectPage, removePage}) => {
    return (
        <div>
            <ListItem
                primaryText={page.name}
                onTouchTap={() => selectPage(page.id)}
                rightIconButton={<PageItemDelete id={page.id} removePage={removePage} />}
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