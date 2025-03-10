import React from 'react';

type State = {
  keyPressed: string;
};

export class App extends React.Component {
  state: State = {
    keyPressed: '',
  };

  handlerKeydown = (event: KeyboardEvent) => {
    this.setState({ keyPressed: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlerKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlerKeydown);
  }

  render() {
    const { keyPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyPressed
            ? `The last pressed key is [${keyPressed}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
