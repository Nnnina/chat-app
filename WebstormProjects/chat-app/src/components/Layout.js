import React, { Component } from 'react';
import io from 'socket.io-client';
import { USER_CONNECTED, LOGOUT } from '../Events';
import LoginForm from './LoginForm';
import ChatContainer from './Chats/ChatContainer';

const socketUrl = "http://localhost:3231";
export default class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            socket: null,
            user: null
        };
    }

    componentWillMount() {
        this.initSocket();
    }
    //initialize Socket, arrow function(don't have to worry about context
    initSocket = () => {
        const socket = io(socketUrl);//socket是建立的连接
        socket.on('connect', () => {
            console.log("connected");
        });
        this.setState({socket});
    };

    // Sets the user property in state
    // @param user {id: number, name: string}

    setUser = (user) => {
        const { socket } = this.state;
        socket.emit(USER_CONNECTED, user);
        this.setState({user});
        console.log(user);
    };

    //sets the user property in state to null

    logout = () => {
        const { socket } = this.state;
        socket.emit(LOGOUT);
        this.setState({user:null});
    };


    render() {
        const { socket, user } = this.state;
        return (
            <div className="container">
                {
                    !user ?
                        <LoginForm socket={socket} setUser={this.setUser} />
                        :
                        <ChatContainer socket={socket} user={user} logout={this.logout} />
                }
            </div>
        );
    };
};