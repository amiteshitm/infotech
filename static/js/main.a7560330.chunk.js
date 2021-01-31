(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{60:function(e,n,t){},61:function(e,n,t){},66:function(e,n,t){"use strict";t.r(n);var a=t(2),c=t(0),i=t.n(c),r=t(10),s=t.n(r),o=(t(60),t(40)),l=t(41),j=t(47),f=t(45),d=(t(61),t(28)),v=t(90),u=t(93),R=t(96),m=t(46),b=t(100),x=t(92),O=t(99),h=t(97),y=t(98),p=t(67),g=Object(v.a)((function(e){return{root:{width:"100%",background:"#06bcf3"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1),background:"#06bcf3"},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)}}}));function N(e){switch(e){case 0:return"Create Payment Link";case 1:return"Share Payment Link";case 2:return"Customer Makes Payment.";default:return"Unknown step"}}function C(){var e=g(),n=i.a.useState(0),t=Object(m.a)(n,2),c=t[0],r=t[1],s=["Step 1","Step 2","Step 3"],o=function(){r((function(e){return e+1}))},l=function(){r((function(e){return e-1}))};return Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(b.a,{activeStep:c,orientation:"vertical",children:s.map((function(n,t){return Object(a.jsxs)(x.a,{children:[Object(a.jsx)(O.a,{children:n}),Object(a.jsxs)(h.a,{children:[Object(a.jsx)(u.a,{children:N(t)}),Object(a.jsx)("div",{className:e.actionsContainer,children:Object(a.jsxs)("div",{children:[Object(a.jsx)(y.a,{disabled:0===c,onClick:l,className:e.button,children:"Back"}),Object(a.jsx)(y.a,{variant:"contained",color:"primary",onClick:o,className:e.button,children:c===s.length-1?"Finish":"Next"})]})})]})]},n)}))}),c===s.length&&Object(a.jsxs)(p.a,{square:!0,elevation:0,className:e.resetContainer,children:[Object(a.jsx)(u.a,{children:"All steps completed - you're finished"}),Object(a.jsx)(y.a,{onClick:function(){r(0)},className:e.button,children:"Reset"})]})]})}var P=t(94),A=t(43),S=t.n(A),L=t(95),U=t(44),q=t.n(U),J=Object(v.a)((function(e){return{root:{textAlign:"center",marginTop:50},pytm:{marginTop:10,color:"#06bcf3",fontWeight:600,fontSize:18},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:16,textAlign:"center",fontWeight:600},button:{textTransform:"none",background:"#06bcf3"},pos:{fontWeight:600,fontSize:25}}}));function V(){var e=J();e.bullet;return Object(a.jsx)(P.a,{className:e.root,children:Object(a.jsxs)(L.a,{children:[Object(a.jsx)(u.a,{className:e.title,variant:"h5",component:"h2",children:"Share Payment Link"}),Object(a.jsx)(u.a,{variant:"h5",component:"h2",children:Object(a.jsx)("img",{src:"data:image/png;base64,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",style:{width:40,marginTop:15}})}),Object(a.jsx)(u.a,{className:e.pos,children:"\u20b9 3,062"}),Object(a.jsx)(u.a,{variant:"body2",component:"p",color:"textSecondary",children:"August Grocery bill"}),Object(a.jsx)(u.a,{className:e.pytm,children:"P-y.tm/9qwer"}),Object(a.jsxs)(R.a,{container:!0,style:{marginTop:20},children:[Object(a.jsx)(R.a,{item:!0,sm:3}),Object(a.jsx)(R.a,{item:!0,sm:3,children:Object(a.jsx)(y.a,{variant:"contained",color:"primary",size:"small",className:e.button,startIcon:Object(a.jsx)(S.a,{}),children:"Share Link"})}),Object(a.jsx)(R.a,{item:!0,sm:3,children:Object(a.jsx)(y.a,{variant:"contained",color:"primary",size:"small",className:e.button,startIcon:Object(a.jsx)(q.a,{}),children:"Copy"})})]})]})})}var k=Object(v.a)((function(e){return{root:{flexGrow:1,margin:40},type:{textAlign:"center",marginBottom:60,fontWeight:600},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function H(){var e,n=k();return Object(a.jsxs)("div",{className:n.root,children:[Object(a.jsx)(u.a,(e={variant:"body2",component:"h6"},Object(d.a)(e,"variant","h4"),Object(d.a)(e,"className",n.type),Object(d.a)(e,"children","Collect Payments in 3 Easy Steps"),e)),Object(a.jsxs)(R.a,{container:!0,spacing:3,children:[Object(a.jsx)(R.a,{item:!0,sm:2}),Object(a.jsx)(R.a,{item:!0,sm:5,children:Object(a.jsx)(V,{className:n.paper})}),Object(a.jsx)(R.a,{item:!0,xs:3,children:Object(a.jsx)(C,{className:n.paper})}),Object(a.jsx)(R.a,{item:!0,xs:3})]})]})}var F=function(e){Object(j.a)(t,e);var n=Object(f.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(H,{})})}}]),t}(i.a.Component),w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,102)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),a(e),c(e),i(e),r(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root")),w()}},[[66,1,2]]]);
//# sourceMappingURL=main.a7560330.chunk.js.map