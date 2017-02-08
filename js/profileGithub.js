// ======================= Modernizr =============================== //

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-hasevent-prefixed-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var f in g)if(g.hasOwnProperty(f)){if(e=[],n=g[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),y.push((o?"":"no-")+a.join("-"))}}function i(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?_.className.baseVal=n:_.className=n)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(e,n){return!!~(""+e).indexOf(n)}function f(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function u(e,n){return function(){return e.apply(n,arguments)}}function l(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?u(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=f(w?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var i,s,a,u,l="modernizr",p=f("div"),c=d();if(parseInt(r,10))for(;r--;)a=f("div"),a.id=o?o[r]:l+(r+1),p.appendChild(a);return i=f("style"),i.type="text/css",i.id="s"+l,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=l,c.fake&&(c.style.background="",c.style.overflow="hidden",u=_.style.overflow,_.style.overflow="hidden",_.appendChild(c)),s=t(p,e),c.fake?(c.parentNode.removeChild(c),_.style.overflow=u,_.offsetHeight):p.parentNode.removeChild(p),!!s}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(n[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,o,i){function u(){p&&(delete N.style,delete N.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var l=m(e,o);if(!r(l,"undefined"))return l}for(var p,d,c,v,h,y=["modernizr","tspan","samp"];!N.style&&y.length;)p=!0,N.modElem=f(y.shift()),N.style=N.modElem.style;for(c=e.length,d=0;c>d;d++)if(v=e[d],h=N.style[v],a(v,"-")&&(v=s(v)),N.style[v]!==t){if(i||r(o,"undefined"))return u(),"pfx"==n?v:!0;try{N.style[v]=o}catch(g){}if(N.style[v]!=h)return u(),"pfx"==n?v:!0}return u(),!1}function h(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+S.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,o,i):(a=(e+" "+E.join(s+" ")+s).split(" "),l(a,n,t))}var y=[],g=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){g.push({name:e,fn:n,options:t})},addAsyncTest:function(e){g.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var _=n.documentElement,w="svg"===_.nodeName.toLowerCase(),x="Moz O ms Webkit",S=C._config.usePrefixes?x.split(" "):[];C._cssomPrefixes=S;var b=function(n){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=prefixes[s],f=a.toUpperCase()+"_"+r;if(f in i)return"@-"+a.toLowerCase()+"-"+n}return!1};C.atRule=b;var E=C._config.usePrefixes?x.toLowerCase().split(" "):[];C._domPrefixes=E;var z={elem:f("modernizr")};Modernizr._q.push(function(){delete z.elem});var N={style:z.elem.style};Modernizr._q.unshift(function(){delete N.style}),C.testAllProps=h;var P=(C.prefixed=function(e,n,t){return 0===e.indexOf("@")?b(e):(-1!=e.indexOf("-")&&(e=s(e)),n?h(e,n,t):h(e,"pfx"))},function(){function e(e,n){var o;return e?(n&&"string"!=typeof n||(n=f(n||"div")),e="on"+e,o=e in n,!o&&r&&(n.setAttribute||(n=f("div")),n.setAttribute(e,""),o="function"==typeof n[e],n[e]!==t&&(n[e]=t),n.removeAttribute(e)),o):!1}var r=!("onblur"in n.documentElement);return e}());C.hasEvent=P,o(),i(y),delete C.addTest,delete C.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);

//starwars


(function(){	

	var transformProp = Modernizr.prefixed('transform');
	var translateProp = Modernizr.prefixed('transition') ;
	var transEndEventNames = {
		'WebkitTransition' : 'webkitTransitionEnd', 
		'MozTransition'    : 'transitionend',   
		'transition'       : 'transitionend'   
	}
	var translateEndProp = transEndEventNames[ translateProp ];

	var _githubProfile = _githubProfile || {};
	_githubProfile.utils = function()
	{
		this.attachListener = function( el, listener, callback ){
			
			function _parentAttach( el, lstn, callback ){
			
				function _attach( el, lstn ){
					if(el !== window){
						if( lstn === translateEndProp ) 
							el.addEventListener(lstn, callback, false);
						else{
							/pointerlockchange|mozpointerlockchange|webkitpointerlockchange|pointerlockerror|mozpointerlockerror|webkitpointerlockerror/i.test(lstn) ?
							el.addEventListener(lstn, callback, false) :
							( Modernizr.hasEvent(lstn) ?
								el.addEventListener(lstn, callback, false):
								el.attachEvent('on'+lstn, callback) ) ;
						}
					}else{
						el.attachEvent && el.attachEvent('on'+lstn, callback) ||
							el.addEventListener(lstn, callback, false)
					}
						
				}
				
				lstn = lstn.indexOf(' ')  === -1 ? lstn : lstn.split(' ');
				lstn = lstn.length <= 1 ? lstn.join('') : lstn;			
				
				if(lstn instanceof Array)
				{
					while(lstn.length)
						_attach( el, lstn.pop() );
				}else
					_attach( el, lstn );
			}
			
			if( this.objToString && 
				'[object Array]' === this.objToString( el ))
				{
					while(el.length) 
					{
						var ii = el.pop()
						for(var ll in ii)
						{
							if(ll in ii[ll])
								_parentAttach.apply(null, ii[ll]);
						}
					}
			}else{
				
				_parentAttach( el, listener, callback )
				
			}
		}
		
		this.extend = function(obj, _obj, deep) 
		{
			if(deep === true){
				for(var ii in _obj) if(ii in _obj) obj[ii] = _obj[ii];
			}else{
				state: for(var ii in _obj) if(ii in _obj) 
				{
					for(var jj in obj) {
						if(jj in obj 
							&& ii.toLowerCase() === jj.toLowerCase() 
							&& ii.toLowerCase().indexOf('strict') !== -1){
								continue state;
						}
					}		
					
					if('function' === typeof _obj[ii]){
						obj[ii] = _obj[ii]
						obj[ii]()
					}else{ 
						obj[ii] = _obj[ii]
					}
				}
			}
		}
		
		this.qs = function(idClass, activeEl)
		{
			var idClass = idClass.indexOf('.') === -1 ? '.'+idClass : idClass;
			return !!activeEl && activeEl.querySelector(idClass) || document.querySelector(idClass)
		}
		
		this.slice = function(args, index)
		{
			return index && Array.prototype.slice.call(args, index)[0] || Array.prototype.slice.call(args)
		}
		
		this.delay = (function(){
		  var timer = setTimeout(function(){});
		  return function(firecallback, ms){
			clearTimeout (timer);
			timer = setTimeout(firecallback, ms);
		  };
		}())
		
		this.text = function (el, text) {
			el.innerText ? el.innerText = text : el.textContent = text;
		}
		
		this.capitalize = function(string) {
			return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
		}
	}
	
	_githubProfile.transport = function()
	{
		scope = this;
		scope.slice(arguments).forEach(function(_obj)
		{	
			var obj = {
				charset : _obj.charset || 'application/json;charset=UTF-8',
				http : window.XMLHttpRequest ?  new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"),
				callback : _obj.callback,
				onerror : _obj.error || 'ops, request time out',
				timeout : _obj.setTimeout || 23000,
				url : _obj.url,
				type : _obj.type,
				dataset : _obj.dataset || {},
				requestHeader : function(){
					var self = { 'Content-Type': this.charset }
					scope.extend(self , _obj.requestHeader)
					return self;
				},
				setRequest : function(){
					var self = this, http = self.http;
					for(var ii in self) if(ii in self){
						for(var jj in http) if(jj in http){
							if(jj.toLowerCase() 
								=== ii.toLowerCase()){
								http[ii] = self[ii]
							}
						}
					}
					
					http.open(self.type, self.url, true)
					for(var kk in self.requestHeader())
						http.setRequestHeader(kk, self.requestHeader()[kk]);
							
					http.send(JSON.stringify(self.dataset));
					http.ontimeout = ('function' === typeof self.onerror) && self.onerror || function(){
						http.abort()
						console.log(self.onerror);
						self.setRequest()
					}
					
					
					http.onload =  function (e) {	
						if(4 === http.readyState){
							200 === http.status ?
								self.callback.call(this, http.responseText ) :
							404 === http.status ?
								console.log('Page not found') :
							403 === http.status ?
								console.log('Forbidden') :	
							500 === http.status ? ( 
								!!self.dataset.id && (function(){
									/TokenMismatchException/i.test(http.responseText) ? 
										window.location.reload() : self.setRequest();
								}())
							) :
							300 === http.status ?	
								console.log('Page Redirect') :
								console.log('Unknown')
						}
					};
				}
			}
			obj['setRequest']();
		})

	}
	
	_githubProfile.template = function()
	{
		this.containerProfileSearch = function( avatar, name , type ){
			return (
				'<li>'+
				'	<div class="profile-pic">'+
				'		<img src="'+ avatar +'">'+
				'	</div>'+
				'	<div class="content">'+
				'		<h2>'+
							name +
				'		</h2>'+
				'		<span class="type">'+ type +'</span>'+
				'	</div>'+
				'</li>'
			)
		}
		
		this.containerProfileDetail = function( profileDetail, objRepo ){
			var avatar = profileDetail.avatar_url,
			name = profileDetail.login,
			detail = [], repos = [];
			
			//user detail 
			for( var ii in profileDetail ) {
				detail.push (
					'<h4>'+
						ii +
					'	<span> ' + profileDetail[ii] + ' </span>'+
					'</h4>'
				)
			}
			
			
			//user repos
			for( var ii in objRepo ) {
				repos.push (
					'<h4>' +
					' Name ' +
					'	<span> ' + objRepo[ii].name + ' </span>'+
					'</h4>' +
					'<h4>' +
					' Url ' +
					'	<span> ' + objRepo[ii].html_url + ' </span>'+
					'</h4>'+
					'<hr>'
				)
			}
			
			 return (
				'<li>'+
				'	<div class="profile-pic">'+
				'		<img src="'+ avatar +'">'+
				'	</div>'+
				'	<div class="content">'+
				'		<h2> ' +
							name +
				'		</h2> ' +
							detail.join('\n') +
				'		<h2> ' +
				'			<br> Repository' +
				'		</h2> ' +	
							repos.join('\n')+				
				'	</div>'+
				'</li>'
			 )
		}
		
		this.containerLoadingContent = function(){
			return (
				'<div class="loading-content"> LOADING ... </div>'
			)
		}
	}
	
	_githubProfile.main = function( _obj, fn )
	{	
		var scope = this;
		//register utils and transport in main namespace
		fn.apply(null, [scope, _obj])
		
		scope.pageOnload()
		scope.performSearch()
	}
	
	_githubProfile.main.prototype.performSearch = function()
	{
		var scope = this;
		
		scope.attachListener( scope.input , 'keyup', function( event )
		{
			var input = this;
			
			scope.delay(function()
			{
				if( input.value )
				{
					scope.searchFn( input.value, 'eventClick' )
				}
				
			},1000)
			
			scope.loading.style.display = "block"
			if( input.value ) scope.text( scope.loading, 'Loading' );
			else scope.loading.style.display = "none";
		})
		
	}
	
	_githubProfile.main.prototype.searchFn = function( value, from, needCallback, target )
	{
		var scope = this;
		
		scope.transport({
			url:'https://api.github.com/search/users?q='+  value  ,
			type:'get',
			callback:function( textmsg ){
				var text = JSON.parse( textmsg ), result,
				msg = text.total_count > 30 ?  
					'Display 30 profiles from ' + text.total_count +' total results':
					text.total_count +' profiles found ';
				
				scope.text( scope.loading, msg )
				
				results = text.items;
				
				scope.container.innerHTML = '';
				for(var ii = 0; ii < results.length ; ii++ ){
				
					var name = results[ii].login,
					type = scope.capitalize(results[ii].type),
					avatar = results[ii].avatar_url;
					
					scope.container.innerHTML += scope.containerProfileSearch( avatar, name, type );
					
				}
				
				//trigger results to click event
				scope.performClick()
				scope.searchCallback = text;
				
				//push state search
				(from !== 'popstate') && scope.page( 'search', value )
				
				//close content
				scope.pageClose( 'search' )
				
				//pageOnload
				!!needCallback && needCallback.call( scope, target )
			}
		})
	}
		
	_githubProfile.main.prototype.performClick = function()
	{
		var scope = this,
		elements = scope.slice( scope.containerSearch.getElementsByTagName('li') );
		
		//profile detail
		for(var ii = 0; ii < elements.length ; ii ++)
		{ 
			scope.attachListener( elements[ii] , 'click', function( element, target )
			{
				scope.clickFn( target, 'clickEvent' )
			}.bind( scope, elements[ii], ii ))
		}
		
		//close profile
		scope.attachListener( scope.closeBtn , 'click', function()
		{
			scope.pageClose( 'search' )
		})
		
	}

	
	_githubProfile.main.prototype.clickFn = function( target, from )
	{	
		var scope = this,
		result = scope.searchCallback.items[ target ];
		
		scope.pageClose( 'content' )
		
		scope.containerDetail.innerHTML = scope.containerLoadingContent()
		
		scope.transport({
			url: result.repos_url ,
			type:'get',
			callback:function( textmsg )
			{
				var repos = JSON.parse( textmsg );
				scope.containerDetail.innerHTML = scope.containerProfileDetail( result, repos );
				//push state user name
				(from !== 'popstate') && scope.page( 'user', target, result.login  )
			}
		})
	}
	
	_githubProfile.main.prototype.pageClose = function( init )
	{
		if( init === 'search' ){
		
			scope.containerSearch.style.display = 'block';
			scope.containerContent.style.display = 'none';
		}else if( init === 'content' ){
		
			scope.containerSearch.style.display = 'none';
			scope.containerContent.style.display = 'block';
		
		}else if( init === 'all' ){
		
			scope.containerSearch.style.display = 'none';
			scope.containerContent.style.display = 'none';
		}
	}
	
	_githubProfile.main.prototype.pageOnload = function( initial, target, id )
	{
		var scope = this, params, 
		value = scope.input.value,
		path = window.location.href;
		
		params =  ( path.indexOf( '/search&user?' ) !== -1) && function(url)
		{
			var url = url.split('/search&user?')[1],
			pa = url.split('~');
			
			//onload user detail
			return { searchVal : pa[0], targetLoad : pa[1] }
			
		}( path ) || ( path.indexOf( '/search?' ) !== -1) && function( url )
		{
			var pa = url.split('/search?')[1];
			
			//onload search detail
			return { searchVal : pa }
			
		}( path ) || {}
		
		if( !params.searchVal ){
					
			scope.pageClose( 'all' )
			scope.input.value = ''
			scope.text( scope.loading, '' )
			
		}else if( path.indexOf( 'user' ) !== -1 ){
			
			scope.searchFn( params.searchVal, 'popstate', scope.clickFn, params.targetLoad );
			scope.input.value = params.searchVal;
		
		}else if( path.indexOf( 'search' ) !== -1 ){
			
			scope.searchFn( params.searchVal, 'popstate' )
			scope.input.value = params.searchVal
		
		}
	}
	
	_githubProfile.main.prototype.page = function( initial, target, id )
	{
		var scope = this, pushUrl, 
		value = scope.input.value,
		path = window.location.href;
	
		path = ( path.indexOf( 'search' ) !== -1) && path.split('/search')[0] || path;
		
		if( initial === 'user' ) pushUrl = path + '/search&user?'+ value +'~'+ target +'~'+ id ;
		if( initial === 'search' ) pushUrl = path + '/search?'+target ;

		history.pushState( { url: pushUrl, target: target } ,'', pushUrl )
			
		//popstate
		window.onpopstate = function(event) 
		{
			scope.delay( function()
			{	
				var url = event.state ? event.state.url : event.state ;
				
				if( url === null ){
					
					scope.pageClose( 'all' )
					scope.input.value = ''
					scope.text( scope.loading, '' )
					
				}else if( url.indexOf( 'user' ) !== -1 ){
					
					scope.clickFn( event.state.target, 'popstate' )
				
				}else if( url.indexOf( 'search' ) !== -1 ){
					
					var val = event.state.target;
					scope.searchFn( val, 'popstate' )
					scope.input.value = val
				
				}
				
			}, 500 )
		};
	}
	
	_githubProfile.init = function() {
		var fn = new _githubProfile.utils,
		_obj = {
			//elements
			input : fn.qs('field'),
			loading : fn.qs('loading'),
			container : fn.qs('container-search'),
			containerSearch : fn.qs('container-search'),
			containerContent : fn.qs('container-content'),
			containerDetail : fn.qs('list-content'),
			closeBtn : fn.qs('close'),
			
			//ajax callback
			searchCallback :'' ,
			
			//fn
			utils : _githubProfile.utils,
			template : _githubProfile.template,
			transport : _githubProfile.transport
		} 
		
		//main constructor
		new _githubProfile.main(_obj, fn.extend)			
		
	};

	(new _githubProfile.utils)
		.attachListener(window,'DOMContentLoaded', _githubProfile.init);
	
}())