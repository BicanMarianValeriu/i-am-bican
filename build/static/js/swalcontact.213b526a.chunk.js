(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{250:function(t,e,n){"use strict";n.r(e);var r=n(32),a=n.n(r),o=n(29),i=n.n(o),s=n(41),c=n(5),l=n(6),u=n(75),d=n.n(u),p=n(42),m=function(){function t(e,n){Object(c.a)(this,t),this.el=document.querySelector(e),this.el.WPCF7=this,this.options=Object(p.merge)({},t.defaults,n)}return Object(l.a)(t,[{key:"getApiUrl",value:function(){return this.options.apiUrl}},{key:"getRoute",value:function(t){return this.getApiUrl().replace("contact-form-7/v1","contact-form-7/v1"+t)}},{key:"getFormId",value:function(){var t=this.options.formId||this.el.getAttribute("data-wpcf7-id")||this.el.getAttribute("id").split("-").pop();return parseInt(t,10)}},{key:"sendMail",value:function(){var t=Object(s.a)(i.a.mark(function t(){var e,n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=new FormData(this.el),n=this.getRoute("/contact-forms/"+this.getFormId()+"/feedback"),t.next=4,d.a.post(n,{data:e}).then(function(t){return t.data});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}],[{key:"defaults",get:function(){return{apiUrl:"http://working.on/iambican/wordpress/wp-json/contact-form-7/v1",formId:""}}}]),t}(),f=n(25),w={renderModal:function(){return a.a.fire({title:"Thanks for your interest in contacting me!",html:'<form name="swal-contact" id="wpcf7-6" data-wpcf7-id="6">\n\t\t\t<div class="form-group">\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t<span class="wpcf7-form-control-wrap your-name">\n\t\t\t\t\t\t\t<input id="swal-input1" class="form-control required" name="your-name" type="text" placeholder="Your Name" required/>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t<span class="wpcf7-form-control-wrap your-email">\n\t\t\t\t\t\t\t<input id="swal-input2" class="form-control required" name="your-email" type="email" placeholder="Your Email" required/>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="col">\n\t\t\t\t\t\t<textarea id="swal-input3" class="form-control required" name="your-message" placeholder="Your Message" required></textarea>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</form>',footer:'View your privacy policy &nbsp;<a href="/p/privacy-policy">here</a>.',focusConfirm:!1,customClass:"swal-contact",buttonsStyling:!1,confirmButtonClass:"btn btn-primary",confirmButtonText:"Send Message",showLoaderOnConfirm:!0,showCloseButton:!0,width:"40rem",preConfirm:function(){var t=document.forms["swal-contact"].getElementsByClassName("required"),e=t["your-email"].value;return!1===Object(f.d)(t)?a.a.showValidationMessage("Please fill all fields."):!1===Object(f.c)(e)?a.a.showValidationMessage("Email address is not valid."):void new m("#wpcf7-6",{apiUrl:"//www.iambican.com/dashboard/wp-json/contact-form-7/v1"}).sendMail().then(function(t){console.log(t),"mail_sent"===t.status?a.a.fire({title:"Awesome",text:t.message,type:"success",showConfirmButton:!1,timer:2500}):a.a.fire({title:"Something is wrong",text:t.message,type:"error"})})},allowOutsideClick:function(){return!a.a.isLoading()}}).then(function(t){t.dismiss||a.a.fire({title:"Sending message, please wait...",type:"info",showConfirmButton:!1,allowEscapeKey:!1,allowOutsideClick:!1})})}};e.default=w}}]);
//# sourceMappingURL=swalcontact.213b526a.chunk.js.map