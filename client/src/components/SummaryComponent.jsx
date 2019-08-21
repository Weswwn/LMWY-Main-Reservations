import React from 'react';

class SummaryComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numberOfReviews: 717,
            foodRating: null,
            serviceRating: null,
            ambienceRating: null,
            valueRating: null,
            noise: null,
            percentageRecommended: null,
            numOf5Stars: null,
            numOf4Stars: null,
            numOf3Stars: null,
            numOf2Stars: null,
            numOf1Stars: null,
        }
    }

    render() {
        return (
            <div className="review-summary-component">
                <h1>What {this.state.numberOfReviews} People Are Saying</h1>
            </div>
        )
    }
}

export default SummaryComponent;