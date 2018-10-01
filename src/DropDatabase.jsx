import React from 'react';

const warn = '⚠️ WARNING ⚠️';
const URL = 'http://localhost:5000/dropdatabase';

class DropDatabase extends React.Component {
  isCancelled = false;

  constructor(props) {
    super(props);
    this.state = {'message': ''};
    this.dropDB = this.dropDB.bind(this);
  }

  async dropDB() {
    try {
      const response = await fetch(URL, {'method': 'GET'});
      const status = await response.status;
      if (!this.isCancelled && status === 200) {
        this.setState({'message': 'Dropped the database successfully'});
      }
    } catch (exception) {
      console.log(`Fail Drop DB: ${exception}`);
      if (!this.isCancelled) {
        this.setState({'message': exception.toString()});
      }
    }
  }

  componendWillUnmount() {
    this.isCancelled = true;
  }

  render() {
    return (
      <div className="DropDatabase">
        <h1>{warn}</h1>
        <h2>Pressing this button will drop the database!</h2>
        <button
          onClick={this.dropDB}
        >Drop</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default DropDatabase;
