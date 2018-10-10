import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {requestToggleAll} from './ReduxActions';
import {store} from './ReduxIndex';

function mapStateToProps(state) {
  return {'completed': state.checkall};
}

export function CheckAll({completed}) {
  return (
    <div className="CheckboxCheckAll">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => store.dispatch(requestToggleAll(!completed))}
      >
      </input>
      <label>
        Check All
      </label>
    </div>
  );
}

CheckAll.propTypes = {'completed': PropTypes.bool.isRequired};

export default connect(mapStateToProps)(CheckAll);
