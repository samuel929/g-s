import React from 'react'
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './backdrop/Backdrop'
class Header extends React.Component {
    state={
      sideDrawerOpen:false
    }
    
    drawerToggleClickHandler=()=>{
    this.setState((prevState)=>{
      return {sideDrawerOpen:!prevState.sideDrawerOpen}
    })
    }
    
    backdropClickHandler=()=>{
      this.setState({sideDrawerOpen:false})
    }
      render(){
        let sideDrawer;
        let backdrop;
    
        if(this.state.sideDrawerOpen){
          sideDrawer=    <SideDrawer/>;
          backdrop=<Backdrop click={this.backdropClickHandler}/>
        }
      return (
        <div style={{height:'100%'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
         {sideDrawer}
         {backdrop}
        </div>
      );
    }
    }

    export default Header;