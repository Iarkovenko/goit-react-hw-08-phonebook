(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[5],{134:function(e,t,a){e.exports={container:"RegisterView_container__poo8e",form:"RegisterView_form__TM3g0",formDark:"RegisterView_formDark__3KI_G",label:"RegisterView_label__3Dzya",input:"RegisterView_input__1KNP1",btn:"RegisterView_btn__3n_jf",btnDark:"RegisterView_btnDark__1z6WD",error:"RegisterView_error__200Tc"}},142:function(e,t,a){"use strict";a.r(t);var r=a(2),s=a(18),n=a(19),i=a(32),o=a(53),c=a(0),l=a(9),p=a(133),h=a(17),m=a(13),b=a(134),u=a.n(b),g=a(1),j=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={name:"",email:"",password:""},e.handleChange=function(t){var a=t.currentTarget,s=a.name,n=a.value;e.setState(Object(r.a)({},s,n))},e.handleSubmit=function(t){t.preventDefault(),e.props.onRegister(e.state),e.resetForm()},e.resetForm=function(){e.setState({name:"",email:"",password:""})},e}return Object(n.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,r=e.password;return Object(g.jsx)("div",{className:u.a.container,children:Object(g.jsxs)("form",{className:this.props.themeLight?u.a.form:u.a.formDark,onSubmit:this.handleSubmit,autoComplete:"off",children:[Object(g.jsxs)("label",{className:u.a.label,children:[this.props.t("registerFormName"),Object(g.jsx)("input",{className:u.a.input,type:"text",name:"name",value:t,onChange:this.handleChange})]}),Object(g.jsxs)("label",{className:u.a.label,children:[this.props.t("registerFormEmail"),Object(g.jsx)("input",{className:u.a.input,type:"text",name:"email",value:a,onChange:this.handleChange})]}),Object(g.jsxs)("label",{className:u.a.label,children:[this.props.t("registerFormPassword"),Object(g.jsx)("input",{className:u.a.input,type:"password",name:"password",value:r,onChange:this.handleChange})]}),this.props.registrationError&&Object(g.jsx)("p",{className:u.a.error,children:this.props.registrationError}),Object(g.jsx)("button",{className:this.props.themeLight?u.a.btn:u.a.btnDark,type:"submit",children:this.props.t("registerFormBtn")})]})})}}]),a}(c.Component),_={onRegister:m.a.register};t.default=Object(p.a)()(Object(l.b)((function(e){return{themeLight:Object(h.a)(e),registrationError:m.c.getErrorMessage(e)}}),_)(j))}}]);
//# sourceMappingURL=register-view.0eaf2b18.chunk.js.map