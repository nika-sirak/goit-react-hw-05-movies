"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[474],{9474:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(5861),a=n(885),i=n(7757),s=n.n(i),c=n(501),o=n(6871),u=n(2791),v=n(2134),l=n(273),d=n(4039),p={movieCardContainer:"MovieCard_movieCardContainer__octe8",movieCardDesc:"MovieCard_movieCardDesc__vnvGE",movieGenres:"MovieCard_movieGenres__ux446",movieCardTitle:"MovieCard_movieCardTitle__EpyYN"},m=n(184);var f=function(e){var t=e.movie,n=t.poster_path,r=t.title,a=t.release_date,i=t.vote_average,s=t.overview,c=t.genres;return(0,m.jsxs)("div",{className:p.movieCardContainer,children:[(0,m.jsx)("img",{className:p.movieCardImg,src:"".concat(l._n).concat(n),alt:r,width:"300"}),(0,m.jsxs)("div",{className:p.movieCardDesc,children:[(0,m.jsxs)("h2",{className:p.movieCardTitle,children:[r,"(",a.slice(0,4),")"]}),(0,m.jsxs)("p",{children:["User score: ",10*i,"%"]}),(0,m.jsx)("h3",{className:p.movieCardTitle,children:"Overview"}),(0,m.jsx)("p",{children:s}),(0,m.jsx)("h3",{className:p.movieCardTitle,children:"Genres"}),(0,m.jsx)("ul",{className:p.movieGenres,children:c.map((function(e){var t=e.id,n=e.name;return(0,m.jsx)("li",{children:n},t)}))})]})]})},h="MovieDetailsPage_movieCard__BMoxK",_="MovieDetailsPage_movieCardBtn__TuMVa",x="MovieDetailsPage_movieEdition__9-NTy",g="MovieDetailsPage_movieEditionList__yG4Hh",j="MovieDetailsPage_movieEditionTitle__S123G",C="MovieDetailsPage_movieEditionLink__cehiz",k="MovieDetailsPage_activeLink__XM0zo";var w=function(){var e,t,n=(0,o.UO)().movieId,i=(0,o.TH)(),p=(0,u.useState)(null),w=(0,a.Z)(p,2),b=w[0],y=w[1],M=(0,u.useState)(!1),N=(0,a.Z)(M,2),D=N[0],Z=N[1],S=(0,u.useState)(null),T=(0,a.Z)(S,2),E=T[0],U=T[1],G=null!==(e=null===(t=i.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.prev=1,e.next=4,(0,l.Mc)(n);case 4:t=e.sent,y(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),U(e.t0);case 11:return e.prev=11,Z(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,m.jsxs)("section",{className:h,children:[(0,m.jsxs)(c.rU,{to:G,className:_,children:[(0,m.jsx)(v.FtK,{size:"12",fill:"#ffffff"}),"Back to movies"]}),D&&(0,m.jsx)(d.Z,{}),E&&(0,m.jsx)("p",{children:E.message}),b&&(0,m.jsx)(f,{movie:b}),!E&&(0,m.jsxs)("div",{className:x,children:[(0,m.jsx)("h3",{className:j,children:"Additional information"}),(0,m.jsxs)("ul",{className:g,children:[(0,m.jsx)("li",{children:b&&(0,m.jsx)(c.OL,{to:"cast",className:function(e){return e.isActive?k:C},children:"Cast"})}),(0,m.jsx)("li",{children:b&&(0,m.jsx)(c.OL,{to:"reviews",className:function(e){return e.isActive?k:C},children:"Reviews"})})]}),(0,m.jsx)(u.Suspense,{fallback:(0,m.jsx)(d.Z,{}),children:(0,m.jsx)(o.j3,{movieeId:n})})]})]})}},273:function(e,t,n){n.d(t,{DE:function(){return d},Hx:function(){return m},Mc:function(){return l},_k:function(){return v},_n:function(){return o},uV:function(){return p}});var r=n(5861),a=n(7757),i=n.n(a),s=n(4569),c=n.n(s),o="https://image.tmdb.org/t/p/w300/",u="0b8103dd54def1b2724a61ab95182ae5";c().defaults.baseURL="https://api.themoviedb.org/3";var v=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/trending/movie/day?api_key=".concat(u));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=474.8c6e5b09.chunk.js.map