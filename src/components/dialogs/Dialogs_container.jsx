import React, { component } from "react";

import Message from "./Message/Message";
import Message_title from "./message_title/Messgage_title";
import Message_search from "./Message_search/Message.search";
import New_message_container from "./new_message/new_message_container";
import {connect} from "react-redux";
import Dialogs from "./dialogs";
import {withAuthRedirect} from "../hoc/hoc";
import {compose} from "redux"


// const Dialogs=(props)=>{
//     let state=props.state.messages
//     let messages=state.messages_data.map(el=>{
//         return <Message name={el.name} message={el.message}/>
//     })
//
//
//
//     return(
//
//             <div className={s.dialogs}>
//                 <div className={s.search_title}>
//             <Message_title/>
//             <Message_search/>
//
//                     <New_message_container state={props.state} dispatch={props.dispatch} />
//                 </div>
//                 <div className={s.message}>
//                   {messages}
//
//
//                 </div>
//             </div>
//
//     )
// }
let mapDispatchToProps=(dispatch)=>{
    return(
        {
            dispatch:dispatch
        }
    )
}

let mapStateToProps=(state)=>{
    return(
        {
          messages:state.messages,
            auth_status: state.login.auth_status



        }

    )


}




// let withDialogsComponent=withAuthRedirect(Dialogs)
// export const Dialogs_container=connect(mapStateToProps,mapDispatchToProps)(withDialogsComponent)

  export default compose(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Dialogs)