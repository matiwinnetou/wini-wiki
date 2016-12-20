import React, {Component} from 'react';

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

class PageItem extends React.Component {

    constructor(props) {
        super(props)
    }

    createDeleteElement() {
        const { id } = this.props;

        return <FlatButton 
            primary={true}
            icon={<DeleteIcon />}
            onTouchTap={() => this.props.onPageRemove(id)}
         />
    }

    render() {
        const { id } = this.props;

        return (
            <div>
                <Dialog ref="dialog" title="Are you sure?" actions="">
                    dialog content
                </Dialog>
                <ListItem 
                    primaryText={this.props.pageName}
                    onTouchTap={() => this.props.onPageSelect(id)}
                    rightIconButton={this.createDeleteElement()} />
                <Divider />
            </div>
        )
    }

}

PageItem.propTypes = {
  pageName: React.PropTypes.string.isRequired,
  onPageSelect: React.PropTypes.func.isRequired,
  onPageRemove: React.PropTypes.func.isRequired
};

export default PageItem;