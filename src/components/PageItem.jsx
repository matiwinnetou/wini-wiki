import React from 'react';

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

class PageItem extends React.Component {

    constructor(props) {
        super(props)
        this.deleteElement = <FlatButton primary={true} icon={<DeleteIcon />} onTouchTap={this.handleDeleteClick} />
    }

    handleDeleteClick() {
    }

    render() {
        const { pageName } = this.props; 

        return (
            <div id={pageName}>
                <ListItem primaryText={pageName} rightIconButton={this.deleteElement} />
                <Divider />
            </div>
        )
    }

}

PageItem.propTypes = {
  pageName: React.PropTypes.string
};

export default PageItem;