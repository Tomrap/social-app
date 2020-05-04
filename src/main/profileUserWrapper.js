import React , { Component }  from 'react';
import { FirebaseContext } from '../firebase';
import ProfilePage from './profilePage'


class ProfileUserWrapper extends Component {    
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
            return <div>Loader</div>
        } else {
            return <ProfilePage user={this.state.user} history={this.props.history} />
        }
    }  
}
ProfileUserWrapper.contextType = FirebaseContext
export default ProfileUserWrapper
    
