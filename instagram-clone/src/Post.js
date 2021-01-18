import { Avatar } from '@material-ui/core'
import React from 'react'

function Post() {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar className="post_avatar" alt="myUsername" src="/static/images/avatar/1.jpg" />
                <h3>Username</h3>
            </div>
            {/* image */}
            <img className="post_image" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
            {/* details - username - post caption */}
            <h4 className="post_text"><strong>MyUsername</strong> Love getting in the gym.</h4>
            {/* comments */}
        </div>
    )
}

export default Post
