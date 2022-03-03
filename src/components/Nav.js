import React from 'react'

class Nav extends React.Component{
    render(){
        return(
            <div style={{width: "500px"}} className="inline">
                <a href='/'>Home</a>&nbsp;
                <a href='/playlists'>Curator List</a>&nbsp;
                <a href='/contact'>Contact</a>&nbsp;
            </div>
        )
    }
}

export default Nav;