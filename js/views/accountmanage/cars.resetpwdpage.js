/**
 * Created by Shawn on 15/11/19.
 */
'use strict';
import {Input,ButtonInput,Grid,Row,Col,Fade,Well} from 'react-bootstrap'


class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            email: "",
            mobile: "",
            password: "",
            confirmpwd: "",
            openEmail: "none",
            openMobile: "none",
            openPassword: "none",
            openConfirmpwd: "none",
            errorEmail: "",
            errorMobile: "",
            errorPassword: "",
            errorConfirmpwd: "",
            user: {}
        };
    }

    validataionEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (_.isEmpty(email)) {
            this.setState({
                email: "error",
                openEmail: "inline",
                errorEmail: "Email不能为空"
            });
            return false;
        }
        else if (!re.test(email)) {
            this.setState({
                email: "error",
                openEmail: "inline",
                errorEmail: "请输入正确的Email"
            });
            return false;
        }
        else {
            this.setState({
                email: "",
                openEmail: "none",
                errorEmail: ""
            })
        }
        return true;
    }

    validationMobile(phone) {
        var re = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{4}[-\s\.]{0,1}[0-9]{4}$/;
        if (_.isEmpty(phone)) {
            this.setState({
                mobile: "error",
                openMobile: "inline",
                errorMobile: "手机不能为空"
            });
            return false;
        }
        else if (!re.test(phone)) {
            this.setState({
                mobile: "error",
                openMobile: "inline",
                errorMobile: "请输入正确的手机号码"
            });
            return false;
        }
        else {
            this.setState({
                mobile: "",
                openMobile: "none",
                errorMobile: ""
            })
        }
        return true;
    }

    validationPassword(password) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (_.isEmpty(password)) {
            this.setState({
                password: "error",
                openPassword: "inline",
                errorPassword: "密码不能为空"
            });
            return false;
        }
        else if (password.length < 8) {
            this.setState({
                password: "error",
                openPassword: "inline",
                errorPassword: "请输入至少8位的密码"
            });
            return false;
        }
        else {
            this.setState({
                password: "",
                openPassword: "none",
                errorPassword: ""
            })
        }
        return true;
    }

    validationConfirmpwd(password, confirmpwd) {
        if (_.isEmpty(confirmpwd)) {
            this.setState({
                confirmpwd: "error",
                openConfirmpwd: "inline",
                errorConfirmpwd: "确认密码不能为空"
            });
            return false;
        }
        else if (password != confirmpwd) {
            this.setState({
                confirmpwd: "error",
                openConfirmpwd: "inline",
                errorConfirmpwd: "两次输入的密码不一致"
            });
            return false;
        }
        else {
            this.setState({
                confirmpwd: "",
                openConfirmpwd: "none",
                errorConfirmpwd: ""
            })
        }
        return true;
    }

    validation(user) {
        var eb = this.validataionEmail(user.email);
        var mb = this.validationMobile(user.mobile);
        var pb = this.validationPassword(user.password);
        var cb = this.validationConfirmpwd(user.password, user.confirmpwd);
        if (!eb || !mb || !pb || !cb) {
            return false;
        }
        return true;
    }

    handleSubmit() {
        var user = {
            email: $('#email').val(),
            mobile: $('#mobile').val(),
            password: $('#password').val(),
            confirmpwd: $('#confirmpwd').val()
        };
        if (this.validation(user)) {
        }
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={6} xs={12}>
                        <form className="registry">
                            <ul>
                                <li>
                                    <Input id="email" type="email" bsStyle={this.state.email} label="注册邮箱"
                                           placeholder="请输入注册邮箱"
                                           labelClassName="col-xs-4 col-md-2" wrapperClassName="col-xs-8 col-md-10"/>

                                    <div className="errorMsg" style={{"display":this.state.openEmail}}>
                                        {this.state.errorEmail}
                                    </div>
                                </li>
                                <li><Input id="mobile" type="text" bsStyle={this.state.mobile} label="注册手机"
                                           placeholder="请输入注册手机"
                                           labelClassName="col-xs-4 col-md-2" wrapperClassName="col-xs-8 col-md-10"/>

                                    <div className="errorMsg" style={{"display":this.state.openMobile}}>
                                        {this.state.errorMobile}
                                    </div>
                                </li>
                                <li><Input id="password" type="password" bsStyle={this.state.password} label="密码"
                                           placeholder="请输入密码" labelClassName="col-xs-4 col-md-2"
                                           wrapperClassName="col-xs-8 col-md-10"/>

                                    <div className="errorMsg" style={{"display":this.state.openPassword}}>
                                        {this.state.errorPassword}
                                    </div>
                                </li>
                                <li><Input id="confirmpwd" type="password" bsStyle={this.state.confirmpwd} label="确认密码"
                                           placeholder="请确认密码" labelClassName="col-xs-4 col-md-2"
                                           wrapperClassName="col-xs-8 col-md-10"/>

                                    <div className="errorMsg" style={{"display":this.state.openConfirmpwd}}>
                                        {this.state.errorConfirmpwd}
                                    </div>
                                </li>
                                <li className="button"><ButtonInput onClick={this.handleSubmit.bind(this)} value="免费注册"
                                                                    block
                                                                    wrapperClassName="col-xs-offset-4 col-xs-offset-2"/>
                                </li>
                            </ul>
                        </form>
                    </Col>
                    <Col md={6} xs={12}>
                        <form className="registry">
                            <ul>
                                <li>
                                    <Input id="email" type="email" bsStyle={this.state.email} label="注册邮箱"
                                           placeholder="请输入注册邮箱"
                                           labelClassName="col-xs-4 col-md-2" wrapperClassName="col-xs-8 col-md-10"/>

                                    <div className="errorMsg" style={{"display":this.state.openEmail}}>
                                        {this.state.errorEmail}
                                    </div>
                                </li>
                                <li><Input id="mobile" type="text" bsStyle={this.state.mobile} label="注册手机"
                                           placeholder="请输入注册手机"
                                           labelClassName="col-xs-4 col-md-2" wrapperClassName="col-xs-8 col-md-10"/>

                                    <div className="errorMsg" style={{"display":this.state.openMobile}}>
                                        {this.state.errorMobile}
                                    </div>
                                </li>
                                <li><Input id="password" type="password" bsStyle={this.state.password} label="密码"
                                           placeholder="请输入密码" labelClassName="col-xs-4 col-md-2"
                                           wrapperClassName="col-xs-8 col-md-10"/>

                                    <div className="errorMsg" style={{"display":this.state.openPassword}}>
                                        {this.state.errorPassword}
                                    </div>
                                </li>
                                <li><Input id="confirmpwd" type="password" bsStyle={this.state.confirmpwd} label="确认密码"
                                           placeholder="请确认密码" labelClassName="col-xs-4 col-md-2"
                                           wrapperClassName="col-xs-8 col-md-10"/>

                                    <div className="errorMsg" style={{"display":this.state.openConfirmpwd}}>
                                        <Label bsStyle="info">{this.state.errorConfirmpwd}</Label>
                                    </div>
                                </li>
                                <li className="button"><ButtonInput onClick={this.handleSubmit.bind(this)} value="免费注册"
                                                                    block
                                                                    wrapperClassName="col-xs-offset-4 col-xs-offset-2"/>
                                </li>
                            </ul>
                        </form>
                    </Col>
                </Row>
            </Grid>

        )
    }
}

export default Register;

