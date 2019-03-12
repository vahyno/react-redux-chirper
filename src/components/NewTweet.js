import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddTweet } from '../actions/tweets'
 
class NewTweet extends Component {
    state = {
        text: '',
    }

    handleChange = (e) => {
        const text = e.target.value;
        this.setState(()=>({
            text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { text } = this.state;
        const { dispatch, id } = this.props;

        // console.log('NEW TWEET', text);
        dispatch(handleAddTweet(text, id));

        this.setState(()=>({
            text: '',
        }))
    }

    render() {
        const { text } = this.state;

        {/* TODO: redirect to '/' if submitted */}

        const tweetLeft = 280 - text.length;
        return (
            <div>
                <h3 className='center'>Compose new Tweet</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <textarea 
                        className='textarea'
                        maxLength={280}
                        placeholder="What's happening?"
                        onChange={this.handleChange}
                        value={text}
                    />
                    {tweetLeft <=100 && (
                        <div className='tweet-length'>{tweetLeft}</div>
                    )}
                    <button 
                        className='btn'
                        type='submit'
                        disabled={text === ''}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(NewTweet);


