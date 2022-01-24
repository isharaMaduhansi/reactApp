import React, { useState } from 'react';
import '../cssFiles/Post.css';

const styles = {
    color: 'purple'
}

const Post = (props) => {

    const [stateCounter, setCounter] = useState({
        counter: 0
    });

    const submit = () => {
        setCounter({
            counter: stateCounter.counter + 1
        })
    }

    return (
        <div className='Post Post1'>
            <h1>Post componenet</h1>
            <p style={{ color: 'green' }}> loremjnjjdh dfhbfhbfbf hbfbf</p>
            <h2 style={styles}>Ishara</h2>
            <div style={{ textAlign: 'left' }}>
                <br />
                {stateCounter.counter}
                <br />
                <input type={'button'} onClick={submit} value="Submit" />
            </div>
            <p>This is props name: {props.name}</p>
        </div>
    );
}


export default Post;