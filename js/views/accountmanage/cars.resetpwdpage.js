/**
 * Created by Shawn on 15/11/19.
 */
'use strict';
import {Input,ButtonInput,Grid,Row,Col,Fade,Well,Label} from 'react-bootstrap'

class Email extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            validstr: "",
            errorEmail: "",
            errorValidStr: "",
            user:{}
        };
    }

    validataionEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (_.isEmpty(email)) {
            this.setState({
                email: "error",
                errorEmail: "Email不能为空"
            });
            return false;
        }
        else if (!re.test(email)) {
            this.setState({
                email: "error",
                errorEmail: "请输入正确的Email"
            });
            return false;
        }
        else {
            this.setState({
                email: "",
                errorEmail: ""
            })
        }
        return true;
    }

    validationStr(){

    }

    validation(user) {
        var eb = this.validataionEmail(user.email);
        var pb = this.validationStr(user.password);
        if (!eb || !mb || !pb || !cb) {
            return false;
        }
        return true;
    }

    handleSubmit() {
        var user = {
            password: this.refs.password.getValue(),
            validstr: this.refs.validstr.getValue()
        };
        if (this.validation(user)) {
        }
    }

    render() {
        return (
            <form className="reset-email">
                <ul>
                    <li>
                        <Input help={this.state.errorMobile} ref="email" type="email" bsStyle={this.state.email} label="注册邮箱"
                               placeholder="请输入注册邮箱"
                               labelClassName="col-xs-4 col-md-2" wrapperClassName="col-xs-8 col-md-10"/>
                    </li>
                    <li><Input help={this.state.errorValidStr} ref="validstr" type="password" bsStyle={this.state.validstr} label="确认密码"
                               placeholder="请确认密码" labelClassName="col-xs-4 col-md-2"
                               wrapperClassName="col-xs-8 col-md-10"/>
                    </li>
                    <li className="button"><ButtonInput onClick={this.handleSubmit.bind(this)} value="重设密码"
                                                        block
                                                        wrapperClassName="col-xs-offset-4 col-xs-offset-2"/>
                    </li>
                </ul>
            </form>
        )
    }
}

class Mobile extends React.Component {
    constructor(){
        super();
        this.state = {
            mobile: "",
            validstr: "",
            errorMobile:"",
            errorValidStr:"",
            user: {}
        };
    }

    validationMobile(phone) {
        var re = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{4}[-\s\.]{0,1}[0-9]{4}$/;
        if (_.isEmpty(phone)) {
            this.setState({
                mobile: "error",
                errorMobile: "手机不能为空"
            });
            return false;
        }
        else if (!re.test(phone)) {
            this.setState({
                mobile: "error",
                errorMobile: "请输入正确的手机号码"
            });
            return false;
        }
        else {
            this.setState({
                mobile: "",
                errorMobile: ""
            })
        }
        return true;
    }

    validationStr(){

    }

    validation(user) {
        var mb = this.validationMobile(user.mobile);
        var pb = this.validationStr(user.password);
        if (!eb || !mb || !pb || !cb) {
            return false;
        }
        return true;
    }

    handleSubmit() {
        var user = {
            password: this.refs.password.getValue(),
            validstr: this.refs.validstr.getValue()
        };
        if (this.validation(user)) {
        }
    }

    render() {
        return (
            <form className="reset-mobile">
                <ul>
                    <li><Input help={this.state.errorMobile} ref="mobile" type="text" bsStyle={this.state.mobile} label="注册手机"
                               placeholder="请输入注册手机"
                               labelClassName="col-xs-4 col-md-2" wrapperClassName="col-xs-8 col-md-10"/>
                    </li>
                    <li><Input help={this.state.errorValidStr} ref="validstr" type="password" bsStyle={this.state.validstr} label="确认密码"
                               placeholder="请确认密码" labelClassName="col-xs-4 col-md-2"
                               wrapperClassName="col-xs-8 col-md-10"/>
                    </li>
                    <li className="button"><ButtonInput onClick={this.handleSubmit.bind(this)} value="重设密码"
                                                        block
                                                        wrapperClassName="col-xs-offset-4 col-xs-offset-2"/>
                    </li>
                </ul>
            </form>
        )
    }
}

class ResetPassword extends React.Component {

    render() {
        return (
            <Grid className="account-reset">
                <span className="title">找回密码</span>
                <Row>
                    <Col md={6} xs={12}>
                        <Email/>
                    </Col>
                    <Col md={6} xs={12}>
                        <Mobile/>
                    </Col>
                </Row>
            </Grid>

        )
    }
}

export default ResetPassword;

