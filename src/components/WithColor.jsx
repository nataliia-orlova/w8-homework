import React, { Component } from 'react';

const withColor = (WrappedComponent) => {
    return class WithColor extends Component {
        constructor(props) {
            super(props);

            // Set the initial state
            this.state = {
                backgroundColor: 'white',
                color: 'blue',
                buttonName: 'Click me to toggle color',
            };
        }

        // Toggle the background color and update the button name
        handleClick = () => {
            this.setState((prevState) => ({
                backgroundColor:
                    prevState.backgroundColor === 'white' ? 'black' : 'white',
                color: prevState.color === 'blue' ? 'white' : 'blue',
                buttonName:
                    prevState.backgroundColor === 'white'
                        ? 'Click me to turn WHITE'
                        : 'Click me to turn BLACK',
            }));
        };

        render() {
            const { backgroundColor, color, buttonName } = this.state;

            return (
                <WrappedComponent
                    backgroundColor={backgroundColor}
                    color={color}
                    buttonName={buttonName}
                    handleClick={this.handleClick}
                />
            );
        }
    };
};

export default withColor;
