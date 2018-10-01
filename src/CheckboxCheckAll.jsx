import React from 'react';
import PropTypes from 'prop-types';

// This component renders out a checkbox that the user can use to check or
// uncheck all of thetodo items at once.

class CheckboxCheckAll extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          className="styled-checkbox"
          id="check-all"
          name="checkbox-checkall-name"
          checked={this.props.checked}
          onChange={this.handleChange}
        />
        <label htmlFor="check-all" className="styled-checkbox-label">Check all</label>
      </div>
    );
  }

  handleChange(event) {
    this.props.toggleAllCheckboxes(event.target.checked);
  }
}

CheckboxCheckAll.propTypes = {
  'checked': PropTypes.bool,
  'toggleAllCheckboxes': PropTypes.func
};

export default CheckboxCheckAll;
