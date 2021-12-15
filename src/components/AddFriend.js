import React from 'react';

const AddFriend = () => {
    return (
        <div className="login">
            <h1>ADD FRIEND</h1>
            <form  className='form'>
                    <label className='formInput'>
                        FRIEND NAME
                        <input className='inputBox' type="text" name="friendName"/>
                    </label>
                    <label  className='formInput'>
                        FRIEND EMAIL
                        <input className='inputBox'  type="email" name="friendEmail"/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
        </div>
    )
}

export default AddFriend;