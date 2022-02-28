import React from 'react'
import Nav from './Nav'
import Search from './Search'

class Header extends React.Component{
    render(){
        return(
            <header id="header" className="App-header">
                <h1>My React Final</h1>
                <Nav />
                <Search />
            </header>
        )
    }
}

export default Header;