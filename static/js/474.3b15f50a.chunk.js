"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[474],{9474:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(5861),a=n(885),i=n(7757),s=n.n(i),c=n(501),o=n(6871),u=n(2791),v=n(2134),l=n(273),d=n(4039),m={movieCardContainer:"MovieCard_movieCardContainer__octe8",movieCardDesc:"MovieCard_movieCardDesc__vnvGE",movieGenres:"MovieCard_movieGenres__ux446",movieCardTitle:"MovieCard_movieCardTitle__EpyYN"},p=n(184);var f=function(e){var t=e.movie,n=t.poster_path,r=t.title,a=t.release_date,i=t.vote_average,s=t.overview,c=t.genres;return(0,p.jsxs)("div",{className:m.movieCardContainer,children:[(0,p.jsx)("img",{className:m.movieCardImg,src:"".concat(l._n).concat(n),alt:r,width:"300"}),(0,p.jsxs)("div",{className:m.movieCardDesc,children:[(0,p.jsxs)("h2",{className:m.movieCardTitle,children:[r,"(",a.slice(0,4),")"]}),(0,p.jsxs)("p",{children:["User score: ",10*i,"%"]}),(0,p.jsx)("h3",{className:m.movieCardTitle,children:"Overview"}),(0,p.jsx)("p",{children:s}),(0,p.jsx)("h3",{className:m.movieCardTitle,children:"Genres"}),(0,p.jsx)("ul",{className:m.movieGenres,children:c.map((function(e){var t=e.id,n=e.name;return(0,p.jsx)("li",{children:n},t)}))})]})]})},h="MovieDetailsPage_movieCard__BMoxK",_="MovieDetailsPage_movieCardBtn__TuMVa",x="MovieDetailsPage_movieEdition__9-NTy",g="MovieDetailsPage_movieEditionList__yG4Hh",j="MovieDetailsPage_movieEditionTitle__S123G",C="MovieDetailsPage_movieEditionLink__cehiz",k="MovieDetailsPage_activeLink__XM0zo";var w=function(){var e,t,n,i,m=(0,o.UO)().movieId,w=(0,o.TH)(),b=(0,u.useState)(null),y=(0,a.Z)(b,2),M=y[0],N=y[1],D=(0,u.useState)(!1),Z=(0,a.Z)(D,2),S=Z[0],T=Z[1],E=(0,u.useState)(null),U=(0,a.Z)(E,2),G=U[0],P=U[1],L=null!==(e=null===(t=w.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),e.prev=1,e.next=4,(0,l.Mc)(m);case 4:t=e.sent,N(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),P(e.t0);case 11:return e.prev=11,T(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]),(0,p.jsxs)("section",{className:h,children:[(0,p.jsxs)(c.rU,{to:L,className:_,children:[(0,p.jsx)(v.FtK,{size:"12",fill:"#ffffff"}),"Back to movies"]}),S&&(0,p.jsx)(d.Z,{}),G&&(0,p.jsx)("p",{children:G.message}),M&&(0,p.jsx)(f,{movie:M}),!G&&(0,p.jsxs)("div",{className:x,children:[(0,p.jsx)("h3",{className:j,children:"Additional information"}),(0,p.jsxs)("ul",{className:g,children:[(0,p.jsx)("li",{children:M&&(0,p.jsx)(c.OL,{to:"cast",state:{from:null===w||void 0===w||null===(n=w.state)||void 0===n?void 0:n.from},className:function(e){return e.isActive?k:C},children:"Cast"})}),(0,p.jsx)("li",{children:M&&(0,p.jsx)(c.OL,{to:"reviews",state:{from:null===w||void 0===w||null===(i=w.state)||void 0===i?void 0:i.from},className:function(e){return e.isActive?k:C},children:"Reviews"})})]}),(0,p.jsx)(u.Suspense,{fallback:(0,p.jsx)(d.Z,{}),children:(0,p.jsx)(o.j3,{movieeId:m})})]})]})}},273:function(e,t,n){n.d(t,{DE:function(){return d},Hx:function(){return p},Mc:function(){return l},_k:function(){return v},_n:function(){return o},uV:function(){return m}});var r=n(5861),a=n(7757),i=n.n(a),s=n(4569),c=n.n(s),o="https://image.tmdb.org/t/p/w300/",u="0b8103dd54def1b2724a61ab95182ae5";c().defaults.baseURL="https://api.themoviedb.org/3";var v=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/trending/movie/day?api_key=".concat(u));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=474.3b15f50a.chunk.js.map