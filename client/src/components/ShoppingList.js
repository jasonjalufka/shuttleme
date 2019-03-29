import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class ShoppingList extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
          {items.map(({ _id, name }) => (
            <ListGroupItem>
              {this.props.isAuthenticated ? (
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={this.onDeleteClick.bind(this, _id)}
                >
                  &times;
                </Button>
              ) : null}
              {name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
  prefs: state.prefs
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
