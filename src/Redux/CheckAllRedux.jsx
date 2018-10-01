import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {requestToggleAll} from './ActionsRedux';

function mapStateToProps(state) {
  return {'completed': state.checkall};
}

function CheckAllRedux({dispatch, completed}) {
  return (
    <div className="CheckboxCheckAll">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(requestToggleAll(!completed))}
      >
      </input>
      <label>
        Check All
      </label>
    </div>
  );
}

CheckAllRedux.propTypes = {
  'dispatch': PropTypes.func.isRequired,
  'completed': PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(CheckAllRedux);
