import React , { Component }  from 'react';
import { FirebaseContext } from '../firebase';
import ProfilePage from '../main/profilePage'
import { withRouter } from "react-router";


class UserWrapper extends Component {    
    constructor(props) {
        super(props);
        this.state = {
          user: props.user,
          userId: ''        };
      }

  render() {
        const context = this.context
        if(this.props.location.search != "" && this.state.userId != this.props.location.search) {
            context.getUser(this.props.location.search.substr(1)).then(result=>{          
                this.setState({
                    user: result,
                    userId: this.props.location.search
                })
            })
            //loading
            return <div></div>
        } else {
            return <ProfilePage user={this.state.user} />
        }
    }  
}
UserWrapper.contextType = FirebaseContext
export default withRouter(UserWrapper)
    
