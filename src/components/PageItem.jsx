import React from 'react';

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

class PageItem extends React.Component {

    constructor(props) {
        super(props)
        this.deleteElement = <FlatButton primary={true} icon={<DeleteIcon />} onTouchTap={this.handleDeleteClick.bind(this)} />
    }

    handleDeleteClick() {
        this.props.onPageRemoved();
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
  pageName: React.PropTypes.string,
  onPageRemoved: React.PropTypes.func
};

PageItem.defaultProps = {
  pageName: "New Page",
  onPageRemoved: () =>  {}
};

export default PageItem;