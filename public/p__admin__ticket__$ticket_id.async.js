(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),i=a("3a4m"),r=a.n(i),c=a("/MKj"),l=a("20nU"),o=a("yWgo");class m extends s.a.Component{constructor(){super(...arguments),this.state={nav:[]}}componentDidMount(){var e=[{title:"\u4eea\u8868\u76d8",type:"item",href:"/dashboard",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8ba2\u9605",type:"heading"},{title:"\u6211\u7684\u8ba2\u9605",type:"item",href:"/subscribe",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-badge"})},{title:"\u8d2d\u4e70\u8ba2\u9605",type:"item",href:"/plan",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u6211\u7684\u8ba2\u5355",type:"item",href:"/order",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u6211\u7684\u9080\u8bf7",type:"item",href:"/invite",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u7528\u6237",type:"heading"},{title:"\u4e2a\u4eba\u4e2d\u5fc3",type:"item",href:"/profile",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-user"})},{title:"\u6211\u7684\u5de5\u5355",type:"item",href:"/ticket",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-support"})},{title:"\u4f7f\u7528\u6559\u7a0b",type:"item",href:"/tutorial",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-book-open"})}],t=[{title:"\u8fd4\u56de\u7528\u6237\u4e2d\u5fc3",type:"item",href:"/dashboard",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})},{title:"\u4eea\u8868\u76d8",type:"item",href:"/admin/dashboard",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8bbe\u7f6e",type:"heading"},{title:"\u7cfb\u7edf\u914d\u7f6e",type:"item",href:"/admin/config/system",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-equalizer"})},{title:"\u652f\u4ed8\u914d\u7f6e",type:"item",href:"/admin/config/payment",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-credit-card"})},{title:"\u670d\u52a1\u5668",type:"heading"},{title:"\u8282\u70b9\u7ba1\u7406",type:"item",href:"/admin/server",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-vector"})},{title:"\u6743\u9650\u7ec4\u7ba1\u7406",type:"item",href:"/admin/server/group",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-wrench"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u8ba2\u9605\u7ba1\u7406",type:"item",href:"/admin/plan",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8ba2\u5355\u7ba1\u7406",type:"item",href:"/admin/order",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u4f63\u91d1\u7ba1\u7406",type:"item",href:"/admin/commission",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-user-following"})},{title:"\u7528\u6237",type:"heading"},{title:"\u7528\u6237\u7ba1\u7406",type:"item",href:"/admin/user",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u516c\u544a\u7ba1\u7406",type:"item",href:"/admin/notice",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-speech"})},{title:"\u5de5\u5355\u7ba1\u7406",type:"item",href:"/admin/ticket",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-support"})}];Object(o["b"])("is_admin")&&e.unshift({title:"\u8fd4\u56de\u7ba1\u7406\u4e2d\u5fc3",type:"item",href:"/admin/dashboard",icon:s.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})}),this.isAdmin()?this.setState({nav:t}):this.setState({nav:e})}renderMenu(e,t,a,n){switch(e){case"heading":return s.a.createElement("li",{className:"nav-main-heading"},t);case"item":return s.a.createElement("li",{className:"nav-main-item"},s.a.createElement("a",{className:"nav-main-link ".concat(this.props.location.pathname===a&&"active"),onClick:()=>{r.a.push(a),this.props.dispatch({type:"header/showNav"})}},n&&n,s.a.createElement("span",{className:"nav-main-link-name"},t)))}}isAdmin(){return-1!==this.props.location.pathname.indexOf("admin")}render(){return s.a.createElement("nav",{id:"sidebar","aria-label":"Main Navigation"},s.a.createElement("div",{className:"smini-visible-block"},s.a.createElement("div",{className:"content-header bg-black-10"},s.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},s.a.createElement("span",{className:"text-white-75"},"X"),s.a.createElement("span",{className:"text-white"},"H")))),s.a.createElement("div",{className:"smini-hidden ".concat(1===l["a"].theme?"":"bg-header-dark")},s.a.createElement("div",{className:"content-header justify-content-lg-center bg-black-10"},s.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},s.a.createElement("span",{className:"text-white-75"},window.v2board.title?window.v2board.title:"V2Board")),s.a.createElement("div",{className:"d-lg-none"},s.a.createElement("a",{className:"text-white ml-2","data-toggle":"layout","data-action":"sidebar_close",href:"javascript:void(0)",onClick:()=>this.props.dispatch({type:"header/showNav"})},s.a.createElement("i",{className:"fa fa-times-circle"}))))),s.a.createElement("div",{className:"content-side content-side-full"},s.a.createElement("ul",{className:"nav-main"},this.state.nav.map(e=>{return this.renderMenu(e.type,e.title,e.href,e.icon)}))))}}var d=Object(c["c"])(e=>{var t=e.header;return{header:t}})(m),h=a("t3Un");class p extends s.a.Component{constructor(){super(...arguments),this.state={showAvatarMenu:!1,loading:!1,showSearchBar:!1}}componentDidMount(){var e=this;this.props.header.userInfo.email||this.setState({loading:!0},()=>{this.props.dispatch({type:"header/getUserInfo",complete:()=>e.setState({loading:!1})})})}showAvatarMenu(){var e=this;this.setState({showAvatarMenu:!this.state.showAvatarMenu},()=>{document.onclick=function(t){e.state.showAvatarMenu&&e.setState({showAvatarMenu:!1}),document.onclick=void 0}})}logout(){Object(h["a"])("/user/logout").then(e=>{r.a.push("/login")})}render(){return s.a.createElement("header",{id:"page-header"},s.a.createElement("div",{className:"content-header"},s.a.createElement("div",{className:"sidebar-toggle",style:{display:this.props.search?"block":"none"}},s.a.createElement("button",{type:"button",className:"btn btn-dual mr-1 d-lg-none","data-toggle":"layout","data-action":"sidebar_toggle",onClick:()=>this.props.dispatch({type:"header/showNav"})},s.a.createElement("i",{className:"fa fa-fw fa-bars"})),this.props.search&&s.a.createElement("button",{type:"button",className:"btn btn-dual",onClick:()=>{this.setState({showSearchBar:!0})}},s.a.createElement("i",{className:"fa fa-fw fa-search"})," ",s.a.createElement("span",{className:"ml-1 d-none d-sm-inline-block"},"\u641c\u7d22"))),s.a.createElement("div",null),s.a.createElement("div",null,this.state.loading?s.a.createElement("div",{className:"spinner-grow text-primary"}):s.a.createElement("div",{className:"dropdown d-inline-block"},s.a.createElement("button",{type:"button",className:"btn btn-dual",id:"page-header-user-dropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:()=>this.showAvatarMenu()},s.a.createElement("img",{className:"img-avatar img-avatar32 img-avatar-thumb",src:this.props.header.userInfo.avatar_url,alt:""}),s.a.createElement("span",{className:"d-none d-lg-inline ml-1"},this.props.header.userInfo.email),s.a.createElement("i",{className:"fa fa-fw fa-angle-down ml-1"})),s.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 ".concat(this.state.showAvatarMenu&&"show"),"aria-labelledby":"page-header-user-dropdown"},s.a.createElement("div",{className:"p-2"},s.a.createElement("a",{className:"dropdown-item d-flex justify-content-between align-items-center",href:"javascript:;",onClick:()=>this.logout()},"\u9000\u51fa\u767b\u5f55",s.a.createElement("i",{className:"fa fa-fw fa-sign-out-alt text-danger ml-1"}))))))),this.props.search&&s.a.createElement("div",{className:"overlay-header bg-dark ".concat(this.state.showSearchBar?"show":"")},s.a.createElement("div",{className:"content-header bg-dark"},s.a.createElement("div",{className:"w-100"},s.a.createElement("div",{className:"input-group"},s.a.createElement("div",{className:"input-group-prepend"},s.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:()=>{this.setState({showSearchBar:!1})}},s.a.createElement("i",{className:"fa fa-fw fa-times-circle"}))),s.a.createElement("input",{type:"text",className:"form-control border-0",placeholder:this.props.search.placeholder,onChange:e=>this.props.search.onChange(e.target.value)}))))))}}var u=Object(c["c"])(e=>{var t=e.header;return{header:t}})(p);class g extends s.a.Component{render(){return s.a.createElement("footer",{id:"page-footer",className:"bg-body-light"},s.a.createElement("div",{className:"content py-0"},s.a.createElement("div",{className:"row font-size-sm"},s.a.createElement("div",{className:"col-sm-6 order-sm-2 mb-1 mb-sm-0 text-center text-sm-right"},s.a.createElement("i",{className:"fa fa-heart text-danger"})," ",window.v2board.title?window.v2board.title:"V2Board"),s.a.createElement("div",{className:"col-sm-6 order-sm-1 text-center text-sm-left"},s.a.createElement("a",{className:"font-w600",href:"/",target:"_blank"},"V2Board v0.2"),s.a.createElement("span",{"data-toggle":"year-copy"})))))}}class f extends s.a.Component{render(){return s.a.createElement("div",{id:"page-container",className:"sidebar-o ".concat(1===l["a"].theme?"sidebar-dark":"page-header-dark"," side-scroll page-header-fixed main-content-boxed side-trans-enabled ").concat(this.props.header.showNav&&"sidebar-o-xs")},s.a.createElement(d,this.props),s.a.createElement(u,{search:this.props.search}),this.props.loading?s.a.createElement("main",{id:"main-container"},s.a.createElement("div",{className:"content content-full"},s.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},s.a.createElement("span",{className:"sr-only"},"Loading...")))):this.props.children,s.a.createElement(g,null))}}t["a"]=Object(c["c"])(e=>{var t=e.header;return{header:t}})(f)},Lre1:function(e,t,a){"use strict";a.r(t);var n=a("jehZ"),s=a.n(n),i=(a("miYZ"),a("tsqr")),r=a("p0pE"),c=a.n(r),l=a("q1tI"),o=a.n(l),m=a("Bl7J"),d=a("/MKj"),h=a("t3Un"),p=(a("yWgo"),a("yW/I"));class u extends o.a.Component{constructor(){super(...arguments),this.state={message:[],loading:!0,submit:{},sendLoading:!1,user:{}}}componentDidMount(){this.fetchData();var e=()=>setTimeout(()=>{this.fetchData(),e()},5e3);e()}fetchData(){Object(h["a"])("/admin/ticket",{id:this.props.match.params.ticket_id}).then(e=>{200===e.code&&this.setState(c()({},e.data,{loading:!1}))})}reply(e){this.setState({sendLoading:!0},()=>{i["a"].loading("\u53d1\u9001\u4e2d"),Object(h["b"])("/admin/ticket/reply",c()({id:this.props.match.params.ticket_id},this.state.submit)).then(t=>{i["a"].destroy(),this.setState({sendLoading:!1}),200===t.code&&(i["a"].success("\u53d1\u9001\u6210\u529f"),this.fetchData(),this.setState({submit:{}},()=>{e()}))})})}render(){return console.log(this.state),o.a.createElement(m["a"],s()({},this.props,{loading:this.state.loading}),o.a.createElement("main",{id:"main-container"},o.a.createElement("div",{className:"content content-full"},o.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},o.a.createElement("h2",{className:"font-w300 mt-4 mb-3"},"# \u5de5\u5355",this.props.match.params.ticket_id)),o.a.createElement(p["a"],{title:this.state.user.email,description:"\u7528\u6237",message:this.state.message,onKeyDown:(e,t)=>{13!==e.keyCode||this.state.sendLoading||this.reply(t)},onChange:e=>{this.setState({submit:{message:e.target.value}})}}))))}}t["default"]=Object(d["c"])()(u)},"yW/I":function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a("q1tI"),s=a.n(n),i=a("wd/R"),r=a.n(i);class c extends s.a.Component{constructor(){super(...arguments),this.state={},this.chatCount=0}componentDidMount(){this.chatScroll()}componentDidUpdate(){this.chatCount!==this.props.message.length&&(this.chatCount=this.props.message.length,this.chatScroll())}chatScroll(){this.refs.chat&&this.refs.chat.scrollTo(0,this.refs.chat.scrollHeight)}render(){return s.a.createElement("div",{className:"block block-rounded"},s.a.createElement("div",{className:"block-content block-content-full bg-primary"},s.a.createElement("p",{className:"font-size-lg font-w600 text-white mt-0 mb-0"},this.props.title),s.a.createElement("p",{className:"text-white-75 mb-0"},this.props.description)),s.a.createElement("div",{className:"js-chat-messages block-content block-content-full text-wrap-break-word overflow-y-auto",style:{height:window.innerHeight-450},ref:"chat"},this.props.message.map(e=>{return e.is_me?s.a.createElement("div",null,s.a.createElement("div",{className:"font-size-sm font-italic text-muted animated fadeIn my-2 text-right"},r()(1e3*e.created_at).format("YYYY/MM/DD HH:mm")),s.a.createElement("div",{className:"text-right ml-4"},s.a.createElement("div",{className:"d-inline-block font-w600 animated fadeIn bg-body-light border-3x px-3 py-2 mb-2 shadow-sm mw-100 border-right border-primary rounded-left text-left"},e.message))):s.a.createElement("div",null,s.a.createElement("div",{className:"font-size-sm font-italic text-muted animated fadeIn my-2"},r()(1e3*e.created_at).format("YYYY/MM/DD HH:mm")),s.a.createElement("div",{className:"mr-4"},s.a.createElement("div",{className:"d-inline-block font-w600 animated fadeIn bg-body-light border-3x px-3 py-2 mb-2 shadow-sm mw-100 border-left border-dark rounded-right"},e.message)))})),s.a.createElement("div",{className:"js-chat-form block-content p-2 bg-body-dark"},s.a.createElement("input",{onKeyDown:e=>this.props.onKeyDown(e,()=>{this.refs.message&&(this.refs.message.value="")}),ref:"message",type:"text",className:"js-chat-input form-control form-control-alt",placeholder:"\u8f93\u5165\u5185\u5bb9\u56de\u590d\u5de5\u5355...",onChange:e=>this.props.onChange(e)})))}}}}]);