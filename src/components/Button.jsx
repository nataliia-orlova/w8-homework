import { PureComponent } from 'react';

class Button extends PureComponent {
    render() {
        const { backgroundColor } = this.props;
        const { color } = this.props;
        const { buttonName } = this.props;
        const { handleClick } = this.props;

        return (
            <button
                style={{
                    backgroundColor: backgroundColor,
                    color: color,
                }}
                onClick={handleClick}
            >
                {buttonName}
            </button>
        );
    }
}

export default Button;
