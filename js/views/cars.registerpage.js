/**
 * Created by Shawn on 15/11/19.
 */
import {Input,ButtonInput} from 'react-bootstrap'
'use strict';

class Register extends React.Component {

    render() {
        return (
            <form className="registry">
                <Input type="email" label="注册邮箱" placeholder="请输入注册邮箱" />
                <Input type="text" label="注册手机" placeholder="请输入注册手机" />
                <Input type="password" label="密码" placeholder="请输入密码" />
                <Input type="password" label="确认密码" placeholder="请重复输入密码" />
                <ButtonInput value="免费注册" />
            </form>
        )
    }
}

export default Register;

