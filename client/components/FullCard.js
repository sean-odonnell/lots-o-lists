import React, { PropTypes, Component } from 'react';
import CardEditForm from './CardEditForm';

class FullCard extends Component {
    constructor(props) {
        super(props);

        this.handleCardEditFormSubmit = this.handleCardEditFormSubmit.bind(this);

        this.state = {
            isEditing: false
        };
    }

    hideEditForm() {
        this.setState({
            isEditing: false
        });
    }

    showEditForm() {
        this.setState({
            isEditing: true
        });
    }

    handleCardEditFormSubmit(formData) {
        this.props.onCardEditFormSubmit(formData)
            .then(() => this.hideEditForm());
    }

    render() {
        const { isEditing } = this.state;
        const { data } = this.props;

        return (
            <div className="b-full-card">
                {isEditing ? (
                    <CardEditForm
                        data={data}
                        onSubmit={this.handleCardEditFormSubmit}
                        onCancel={() => this.hideEditForm()}
                    />
                ) : (
                    <div className="b-card-text">
                        <div className="b-card-text__text">
                            {data.text}
                        </div>
                        <a
                            className="b-card-text__edit"
                            onClick={() => this.showEditForm()}
                        >
                            Edit text
                        </a>
                    </div>
                )}
            </div>
        );
    }
};

FullCard.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }),
    onCardEditFormSubmit: PropTypes.func.isRequired
};

export default FullCard;
