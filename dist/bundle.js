!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":6}],2:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/promise"),__esModule:!0}},{"core-js/library/fn/promise":7}],3:[function(require,module,exports){"use strict";exports["default"]=function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")},exports.__esModule=!0},{}],4:[function(require,module,exports){"use strict";var _Object$defineProperty=require("babel-runtime/core-js/object/define-property")["default"];exports["default"]=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),_Object$defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),exports.__esModule=!0},{"babel-runtime/core-js/object/define-property":1}],5:[function(require,module,exports){"use strict";exports["default"]=function(obj){return obj&&obj.__esModule?obj:{"default":obj}},exports.__esModule=!0},{}],6:[function(require,module,exports){var $=require("../../modules/$");module.exports=function(it,key,desc){return $.setDesc(it,key,desc)}},{"../../modules/$":33}],7:[function(require,module,exports){require("../modules/es6.object.to-string"),require("../modules/es6.string.iterator"),require("../modules/web.dom.iterable"),require("../modules/es6.promise"),module.exports=require("../modules/$.core").Promise},{"../modules/$.core":12,"../modules/es6.object.to-string":55,"../modules/es6.promise":56,"../modules/es6.string.iterator":57,"../modules/web.dom.iterable":58}],8:[function(require,module,exports){module.exports=function(it){if("function"!=typeof it)throw TypeError(it+" is not a function!");return it}},{}],9:[function(require,module,exports){var isObject=require("./$.is-object");module.exports=function(it){if(!isObject(it))throw TypeError(it+" is not an object!");return it}},{"./$.is-object":25}],10:[function(require,module,exports){var cof=require("./$.cof"),TAG=require("./$.wks")("toStringTag"),ARG="Arguments"==cof(function(){return arguments}());module.exports=function(it){var O,T,B;return void 0===it?"Undefined":null===it?"Null":"string"==typeof(T=(O=Object(it))[TAG])?T:ARG?cof(O):"Object"==(B=cof(O))&&"function"==typeof O.callee?"Arguments":B}},{"./$.cof":11,"./$.wks":52}],11:[function(require,module,exports){var toString={}.toString;module.exports=function(it){return toString.call(it).slice(8,-1)}},{}],12:[function(require,module,exports){var core=module.exports={};"number"==typeof __e&&(__e=core)},{}],13:[function(require,module,exports){var aFunction=require("./$.a-function");module.exports=function(fn,that,length){if(aFunction(fn),~length&&void 0===that)return fn;switch(length){case 1:return function(a){return fn.call(that,a)};case 2:return function(a,b){return fn.call(that,a,b)};case 3:return function(a,b,c){return fn.call(that,a,b,c)}}return function(){return fn.apply(that,arguments)}}},{"./$.a-function":8}],14:[function(require,module,exports){function ctx(fn,that){return function(){return fn.apply(that,arguments)}}function $def(type,name,source){var key,own,out,exp,isGlobal=type&$def.G,isProto=type&$def.P,target=isGlobal?global:type&$def.S?global[name]:(global[name]||{})[PROTOTYPE],exports=isGlobal?core:core[name]||(core[name]={});isGlobal&&(source=name);for(key in source)own=!(type&$def.F)&&target&&key in target,own&&key in exports||(out=own?target[key]:source[key],isGlobal&&"function"!=typeof target[key]?exp=source[key]:type&$def.B&&own?exp=ctx(out,global):type&$def.W&&target[key]==out?!function(C){exp=function(param){return this instanceof C?new C(param):C(param)},exp[PROTOTYPE]=C[PROTOTYPE]}(out):exp=isProto&&"function"==typeof out?ctx(Function.call,out):out,exports[key]=exp,isProto&&((exports[PROTOTYPE]||(exports[PROTOTYPE]={}))[key]=out))}var global=require("./$.global"),core=require("./$.core"),PROTOTYPE="prototype";$def.F=1,$def.G=2,$def.S=4,$def.P=8,$def.B=16,$def.W=32,module.exports=$def},{"./$.core":12,"./$.global":19}],15:[function(require,module,exports){module.exports=function(it){if(void 0==it)throw TypeError("Can't call method on  "+it);return it}},{}],16:[function(require,module,exports){var isObject=require("./$.is-object"),document=require("./$.global").document,is=isObject(document)&&isObject(document.createElement);module.exports=function(it){return is?document.createElement(it):{}}},{"./$.global":19,"./$.is-object":25}],17:[function(require,module,exports){var cof=require("./$.cof"),$Object=Object;module.exports=0 in $Object("z")?$Object:function(it){return"String"==cof(it)?it.split(""):$Object(it)}},{"./$.cof":11}],18:[function(require,module,exports){var ctx=require("./$.ctx"),call=require("./$.iter-call"),isArrayIter=require("./$.is-array-iter"),anObject=require("./$.an-object"),toLength=require("./$.to-length"),getIterFn=require("./core.get-iterator-method");module.exports=function(iterable,entries,fn,that){var length,step,iterator,iterFn=getIterFn(iterable),f=ctx(fn,that,entries?2:1),index=0;if("function"!=typeof iterFn)throw TypeError(iterable+" is not iterable!");if(isArrayIter(iterFn))for(length=toLength(iterable.length);length>index;index++)entries?f(anObject(step=iterable[index])[0],step[1]):f(iterable[index]);else for(iterator=iterFn.call(iterable);!(step=iterator.next()).done;)call(iterator,f,step.value,entries)}},{"./$.an-object":9,"./$.ctx":13,"./$.is-array-iter":24,"./$.iter-call":27,"./$.to-length":48,"./core.get-iterator-method":53}],19:[function(require,module,exports){var global="undefined"!=typeof self&&self.Math==Math?self:Function("return this")();module.exports=global,"number"==typeof __g&&(__g=global)},{}],20:[function(require,module,exports){var hasOwnProperty={}.hasOwnProperty;module.exports=function(it,key){return hasOwnProperty.call(it,key)}},{}],21:[function(require,module,exports){var $=require("./$"),createDesc=require("./$.property-desc");module.exports=require("./$.support-desc")?function(object,key,value){return $.setDesc(object,key,createDesc(1,value))}:function(object,key,value){return object[key]=value,object}},{"./$":33,"./$.property-desc":36,"./$.support-desc":44}],22:[function(require,module,exports){module.exports=require("./$.global").document&&document.documentElement},{"./$.global":19}],23:[function(require,module,exports){module.exports=function(fn,args,that){var un=void 0===that;switch(args.length){case 0:return un?fn():fn.call(that);case 1:return un?fn(args[0]):fn.call(that,args[0]);case 2:return un?fn(args[0],args[1]):fn.call(that,args[0],args[1]);case 3:return un?fn(args[0],args[1],args[2]):fn.call(that,args[0],args[1],args[2]);case 4:return un?fn(args[0],args[1],args[2],args[3]):fn.call(that,args[0],args[1],args[2],args[3]);case 5:return un?fn(args[0],args[1],args[2],args[3],args[4]):fn.call(that,args[0],args[1],args[2],args[3],args[4])}return fn.apply(that,args)}},{}],24:[function(require,module,exports){var Iterators=require("./$.iterators"),ITERATOR=require("./$.wks")("iterator");module.exports=function(it){return("Array"in Iterators?Iterators.Array:Array.prototype[ITERATOR])===it}},{"./$.iterators":32,"./$.wks":52}],25:[function(require,module,exports){module.exports=function(it){return null!==it&&("object"==typeof it||"function"==typeof it)}},{}],26:[function(require,module,exports){module.exports="keys"in[]&&!("next"in[].keys())},{}],27:[function(require,module,exports){function close(iterator){var ret=iterator["return"];void 0!==ret&&anObject(ret.call(iterator))}var anObject=require("./$.an-object");module.exports=function(iterator,fn,value,entries){try{return entries?fn(anObject(value)[0],value[1]):fn(value)}catch(e){throw close(iterator),e}}},{"./$.an-object":9}],28:[function(require,module,exports){"use strict";var $=require("./$"),IteratorPrototype={};require("./$.hide")(IteratorPrototype,require("./$.wks")("iterator"),function(){return this}),module.exports=function(Constructor,NAME,next){Constructor.prototype=$.create(IteratorPrototype,{next:require("./$.property-desc")(1,next)}),require("./$.tag")(Constructor,NAME+" Iterator")}},{"./$":33,"./$.hide":21,"./$.property-desc":36,"./$.tag":45,"./$.wks":52}],29:[function(require,module,exports){"use strict";function returnThis(){return this}var LIBRARY=require("./$.library"),$def=require("./$.def"),$redef=require("./$.redef"),hide=require("./$.hide"),has=require("./$.has"),SYMBOL_ITERATOR=require("./$.wks")("iterator"),Iterators=require("./$.iterators"),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values";module.exports=function(Base,NAME,Constructor,next,DEFAULT,IS_SET,FORCE){function createMethod(kind){switch(kind){case KEYS:return function(){return new Constructor(this,kind)};case VALUES:return function(){return new Constructor(this,kind)}}return function(){return new Constructor(this,kind)}}require("./$.iter-create")(Constructor,NAME,next);var methods,key,TAG=NAME+" Iterator",proto=Base.prototype,_native=proto[SYMBOL_ITERATOR]||proto[FF_ITERATOR]||DEFAULT&&proto[DEFAULT],_default=_native||createMethod(DEFAULT);if(_native){var IteratorPrototype=require("./$").getProto(_default.call(new Base));require("./$.tag")(IteratorPrototype,TAG,!0),!LIBRARY&&has(proto,FF_ITERATOR)&&hide(IteratorPrototype,SYMBOL_ITERATOR,returnThis)}if((!LIBRARY||FORCE)&&hide(proto,SYMBOL_ITERATOR,_default),Iterators[NAME]=_default,Iterators[TAG]=returnThis,DEFAULT)if(methods={keys:IS_SET?_default:createMethod(KEYS),values:DEFAULT==VALUES?_default:createMethod(VALUES),entries:DEFAULT!=VALUES?_default:createMethod("entries")},FORCE)for(key in methods)key in proto||$redef(proto,key,methods[key]);else $def($def.P+$def.F*require("./$.iter-buggy"),NAME,methods)}},{"./$":33,"./$.def":14,"./$.has":20,"./$.hide":21,"./$.iter-buggy":26,"./$.iter-create":28,"./$.iterators":32,"./$.library":34,"./$.redef":37,"./$.tag":45,"./$.wks":52}],30:[function(require,module,exports){var SYMBOL_ITERATOR=require("./$.wks")("iterator"),SAFE_CLOSING=!1;try{var riter=[7][SYMBOL_ITERATOR]();riter["return"]=function(){SAFE_CLOSING=!0},Array.from(riter,function(){throw 2})}catch(e){}module.exports=function(exec){if(!SAFE_CLOSING)return!1;var safe=!1;try{var arr=[7],iter=arr[SYMBOL_ITERATOR]();iter.next=function(){safe=!0},arr[SYMBOL_ITERATOR]=function(){return iter},exec(arr)}catch(e){}return safe}},{"./$.wks":52}],31:[function(require,module,exports){module.exports=function(done,value){return{value:value,done:!!done}}},{}],32:[function(require,module,exports){module.exports={}},{}],33:[function(require,module,exports){var $Object=Object;module.exports={create:$Object.create,getProto:$Object.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:$Object.getOwnPropertyDescriptor,setDesc:$Object.defineProperty,setDescs:$Object.defineProperties,getKeys:$Object.keys,getNames:$Object.getOwnPropertyNames,getSymbols:$Object.getOwnPropertySymbols,each:[].forEach}},{}],34:[function(require,module,exports){module.exports=!0},{}],35:[function(require,module,exports){var $redef=require("./$.redef");module.exports=function(target,src){for(var key in src)$redef(target,key,src[key]);return target}},{"./$.redef":37}],36:[function(require,module,exports){module.exports=function(bitmap,value){return{enumerable:!(1&bitmap),configurable:!(2&bitmap),writable:!(4&bitmap),value:value}}},{}],37:[function(require,module,exports){module.exports=require("./$.hide")},{"./$.hide":21}],38:[function(require,module,exports){module.exports=Object.is||function(x,y){return x===y?0!==x||1/x===1/y:x!=x&&y!=y}},{}],39:[function(require,module,exports){function check(O,proto){if(anObject(O),!isObject(proto)&&null!==proto)throw TypeError(proto+": can't set as prototype!")}var getDesc=require("./$").getDesc,isObject=require("./$.is-object"),anObject=require("./$.an-object");module.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(buggy,set){try{set=require("./$.ctx")(Function.call,getDesc(Object.prototype,"__proto__").set,2),set({},[])}catch(e){buggy=!0}return function(O,proto){return check(O,proto),buggy?O.__proto__=proto:set(O,proto),O}}():void 0),check:check}},{"./$":33,"./$.an-object":9,"./$.ctx":13,"./$.is-object":25}],40:[function(require,module,exports){var global=require("./$.global"),SHARED="__core-js_shared__",store=global[SHARED]||(global[SHARED]={});module.exports=function(key){return store[key]||(store[key]={})}},{"./$.global":19}],41:[function(require,module,exports){var $=require("./$"),SPECIES=require("./$.wks")("species");module.exports=function(C){!require("./$.support-desc")||SPECIES in C||$.setDesc(C,SPECIES,{configurable:!0,get:function(){return this}})}},{"./$":33,"./$.support-desc":44,"./$.wks":52}],42:[function(require,module,exports){module.exports=function(it,Constructor,name){if(!(it instanceof Constructor))throw TypeError(name+": use the 'new' operator!");return it}},{}],43:[function(require,module,exports){var toInteger=require("./$.to-integer"),defined=require("./$.defined");module.exports=function(TO_STRING){return function(that,pos){var a,b,s=String(defined(that)),i=toInteger(pos),l=s.length;return 0>i||i>=l?TO_STRING?"":void 0:(a=s.charCodeAt(i),55296>a||a>56319||i+1===l||(b=s.charCodeAt(i+1))<56320||b>57343?TO_STRING?s.charAt(i):a:TO_STRING?s.slice(i,i+2):(a-55296<<10)+(b-56320)+65536)}}},{"./$.defined":15,"./$.to-integer":47}],44:[function(require,module,exports){module.exports=!!function(){try{return 2==Object.defineProperty({},"a",{get:function(){return 2}}).a}catch(e){}}()},{}],45:[function(require,module,exports){var has=require("./$.has"),hide=require("./$.hide"),TAG=require("./$.wks")("toStringTag");module.exports=function(it,tag,stat){it&&!has(it=stat?it:it.prototype,TAG)&&hide(it,TAG,tag)}},{"./$.has":20,"./$.hide":21,"./$.wks":52}],46:[function(require,module,exports){"use strict";function run(){var id=+this;if(queue.hasOwnProperty(id)){var fn=queue[id];delete queue[id],fn()}}function listner(event){run.call(event.data)}var defer,channel,port,ctx=require("./$.ctx"),invoke=require("./$.invoke"),html=require("./$.html"),cel=require("./$.dom-create"),global=require("./$.global"),process=global.process,setTask=global.setImmediate,clearTask=global.clearImmediate,MessageChannel=global.MessageChannel,counter=0,queue={},ONREADYSTATECHANGE="onreadystatechange";setTask&&clearTask||(setTask=function(fn){for(var args=[],i=1;arguments.length>i;)args.push(arguments[i++]);return queue[++counter]=function(){invoke("function"==typeof fn?fn:Function(fn),args)},defer(counter),counter},clearTask=function(id){delete queue[id]},"process"==require("./$.cof")(process)?defer=function(id){process.nextTick(ctx(run,id,1))}:global.addEventListener&&"function"==typeof postMessage&&!global.importScripts?(defer=function(id){global.postMessage(id,"*")},global.addEventListener("message",listner,!1)):MessageChannel?(channel=new MessageChannel,port=channel.port2,channel.port1.onmessage=listner,defer=ctx(port.postMessage,port,1)):defer=ONREADYSTATECHANGE in cel("script")?function(id){html.appendChild(cel("script"))[ONREADYSTATECHANGE]=function(){html.removeChild(this),run.call(id)}}:function(id){setTimeout(ctx(run,id,1),0)}),module.exports={set:setTask,clear:clearTask}},{"./$.cof":11,"./$.ctx":13,"./$.dom-create":16,"./$.global":19,"./$.html":22,"./$.invoke":23}],47:[function(require,module,exports){var ceil=Math.ceil,floor=Math.floor;module.exports=function(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it)}},{}],48:[function(require,module,exports){var toInteger=require("./$.to-integer"),min=Math.min;module.exports=function(it){return it>0?min(toInteger(it),9007199254740991):0}},{"./$.to-integer":47}],49:[function(require,module,exports){var ES5Object=require("./$.es5-object"),defined=require("./$.defined");module.exports=function(it,realString){return(realString?Object:ES5Object)(defined(it))}},{"./$.defined":15,"./$.es5-object":17}],50:[function(require,module,exports){var id=0,px=Math.random();module.exports=function(key){return"Symbol(".concat(void 0===key?"":key,")_",(++id+px).toString(36))}},{}],51:[function(require,module,exports){module.exports=function(){}},{}],52:[function(require,module,exports){var store=require("./$.shared")("wks"),Symbol=require("./$.global").Symbol;module.exports=function(name){return store[name]||(store[name]=Symbol&&Symbol[name]||(Symbol||require("./$.uid"))("Symbol."+name))}},{"./$.global":19,"./$.shared":40,"./$.uid":50}],53:[function(require,module,exports){var global=require("./$.global"),classof=require("./$.classof"),ITERATOR=require("./$.wks")("iterator"),Iterators=require("./$.iterators");module.exports=require("./$.core").getIteratorMethod=function(it){var Symbol=global.Symbol;return void 0!=it?it[Symbol&&Symbol.iterator||"@@iterator"]||it[ITERATOR]||Iterators[classof(it)]:void 0}},{"./$.classof":10,"./$.core":12,"./$.global":19,"./$.iterators":32,"./$.wks":52}],54:[function(require,module,exports){var setUnscope=require("./$.unscope"),step=require("./$.iter-step"),Iterators=require("./$.iterators"),toObject=require("./$.to-object");require("./$.iter-define")(Array,"Array",function(iterated,kind){this._t=toObject(iterated),this._i=0,this._k=kind},function(){var O=this._t,kind=this._k,index=this._i++;return!O||index>=O.length?(this._t=void 0,step(1)):"keys"==kind?step(0,index):"values"==kind?step(0,O[index]):step(0,[index,O[index]])},"values"),Iterators.Arguments=Iterators.Array,setUnscope("keys"),setUnscope("values"),setUnscope("entries")},{"./$.iter-define":29,"./$.iter-step":31,"./$.iterators":32,"./$.to-object":49,"./$.unscope":51}],55:[function(require,module,exports){},{}],56:[function(require,module,exports){"use strict";function testResolve(sub){var test=new P(function(){});return sub&&(test.constructor=Object),P.resolve(test)===test}function isPromise(it){return isObject(it)&&(useNative?"Promise"==classof(it):RECORD in it)}function sameConstructor(a,b){return LIBRARY&&a===P&&b===Wrapper?!0:same(a,b)}function getConstructor(C){var S=anObject(C)[SPECIES];return void 0!=S?S:C}function isThenable(it){var then;return isObject(it)&&"function"==typeof(then=it.then)?then:!1}function notify(record,isReject){if(!record.n){record.n=!0;var chain=record.c;asap.call(global,function(){function run(react){var ret,then,cb=ok?react.ok:react.fail;try{cb?(ok||(record.h=!0),ret=cb===!0?value:cb(value),ret===react.P?react.rej(TypeError("Promise-chain cycle")):(then=isThenable(ret))?then.call(ret,react.res,react.rej):react.res(ret)):react.rej(value)}catch(err){react.rej(err)}}for(var value=record.v,ok=1==record.s,i=0;chain.length>i;)run(chain[i++]);chain.length=0,record.n=!1,isReject&&setTimeout(function(){asap.call(global,function(){isUnhandled(record.p)&&(isNode?process.emit("unhandledRejection",value,record.p):global.console&&console.error&&console.error("Unhandled promise rejection",value)),record.a=void 0})},1)})}}function isUnhandled(promise){var react,record=promise[RECORD],chain=record.a||record.c,i=0;if(record.h)return!1;for(;chain.length>i;)if(react=chain[i++],react.fail||!isUnhandled(react.P))return!1;return!0}function $reject(value){var record=this;record.d||(record.d=!0,record=record.r||record,record.v=value,record.s=2,record.a=record.c.slice(),notify(record,!0))}function $resolve(value){var then,record=this;if(!record.d){record.d=!0,record=record.r||record;try{(then=isThenable(value))?asap.call(global,function(){var wrapper={r:record,d:!1};try{then.call(value,ctx($resolve,wrapper,1),ctx($reject,wrapper,1))}catch(e){$reject.call(wrapper,e)}}):(record.v=value,record.s=1,notify(record,!1))}catch(e){$reject.call({r:record,d:!1},e)}}}var Wrapper,$=require("./$"),LIBRARY=require("./$.library"),global=require("./$.global"),ctx=require("./$.ctx"),classof=require("./$.classof"),$def=require("./$.def"),isObject=require("./$.is-object"),anObject=require("./$.an-object"),aFunction=require("./$.a-function"),strictNew=require("./$.strict-new"),forOf=require("./$.for-of"),setProto=require("./$.set-proto").set,same=require("./$.same"),species=require("./$.species"),SPECIES=require("./$.wks")("species"),RECORD=require("./$.uid")("record"),PROMISE="Promise",process=global.process,isNode="process"==classof(process),asap=process&&process.nextTick||require("./$.task").set,P=global[PROMISE],useNative=function(){function P2(x){var self=new P(x);return setProto(self,P2.prototype),self}var works=!1;try{if(works=P&&P.resolve&&testResolve(),setProto(P2,P),P2.prototype=$.create(P.prototype,{constructor:{value:P2}}),P2.resolve(5).then(function(){})instanceof P2||(works=!1),works&&require("./$.support-desc")){var thenableThenGotten=!1;P.resolve($.setDesc({},"then",{get:function(){thenableThenGotten=!0}})),works=thenableThenGotten}}catch(e){works=!1}return works}();useNative||(P=function(executor){aFunction(executor);var record={p:strictNew(this,P,PROMISE),c:[],a:void 0,s:0,d:!1,v:void 0,h:!1,n:!1};this[RECORD]=record;try{executor(ctx($resolve,record,1),ctx($reject,record,1))}catch(err){$reject.call(record,err)}},require("./$.mix")(P.prototype,{then:function(onFulfilled,onRejected){var S=anObject(anObject(this).constructor)[SPECIES],react={ok:"function"==typeof onFulfilled?onFulfilled:!0,fail:"function"==typeof onRejected?onRejected:!1},promise=react.P=new(void 0!=S?S:P)(function(res,rej){react.res=aFunction(res),react.rej=aFunction(rej)}),record=this[RECORD];return record.c.push(react),record.a&&record.a.push(react),record.s&&notify(record,!1),promise},"catch":function(onRejected){return this.then(void 0,onRejected)}})),$def($def.G+$def.W+$def.F*!useNative,{Promise:P}),require("./$.tag")(P,PROMISE),species(P),species(Wrapper=require("./$.core")[PROMISE]),$def($def.S+$def.F*!useNative,PROMISE,{reject:function(r){return new this(function(res,rej){rej(r)})}}),$def($def.S+$def.F*(!useNative||testResolve(!0)),PROMISE,{resolve:function(x){return isPromise(x)&&sameConstructor(x.constructor,this)?x:new this(function(res){res(x)})}}),$def($def.S+$def.F*!(useNative&&require("./$.iter-detect")(function(iter){P.all(iter)["catch"](function(){})})),PROMISE,{all:function(iterable){var C=getConstructor(this),values=[];return new C(function(res,rej){forOf(iterable,!1,values.push,values);var remaining=values.length,results=Array(remaining);remaining?$.each.call(values,function(promise,index){C.resolve(promise).then(function(value){results[index]=value,--remaining||res(results)},rej)}):res(results)})},race:function(iterable){var C=getConstructor(this);return new C(function(res,rej){forOf(iterable,!1,function(promise){C.resolve(promise).then(res,rej)})})}})},{"./$":33,"./$.a-function":8,"./$.an-object":9,"./$.classof":10,"./$.core":12,"./$.ctx":13,"./$.def":14,"./$.for-of":18,"./$.global":19,"./$.is-object":25,"./$.iter-detect":30,"./$.library":34,"./$.mix":35,"./$.same":38,"./$.set-proto":39,"./$.species":41,"./$.strict-new":42,"./$.support-desc":44,"./$.tag":45,"./$.task":46,"./$.uid":50,"./$.wks":52}],57:[function(require,module,exports){var $at=require("./$.string-at")(!0);require("./$.iter-define")(String,"String",function(iterated){this._t=String(iterated),this._i=0},function(){var point,O=this._t,index=this._i;return index>=O.length?{value:void 0,done:!0}:(point=$at(O,index),this._i+=point.length,{value:point,done:!1})})},{"./$.iter-define":29,"./$.string-at":43}],58:[function(require,module,exports){require("./es6.array.iterator");var Iterators=require("./$.iterators");Iterators.NodeList=Iterators.HTMLCollection=Iterators.Array},{"./$.iterators":32,"./es6.array.iterator":54}],59:[function(require,module,exports){module.exports=function(params){var template="precision mediump float; \n \n// Textures \nuniform sampler2D u_image0; \nuniform sampler2D u_image1; \nuniform sampler2D u_pattern; \n \nuniform float u_patternWidth; \n \n// Texture coords passed from vertex shader \nvarying vec2 v_texCoord; \n \nvoid main() { \n    // Transpose canvas coords to texture coords \n    vec2 textureCoords =  v_texCoord * vec2(1.0, -1.0); \n    textureCoords =  0.5 + (0.5 * textureCoords); \n \n    gl_FragColor = mix( \n        texture2D(u_image0, textureCoords), \n        texture2D(u_image1, textureCoords), \n        step(texture2D(u_pattern, textureCoords).r, u_patternWidth) \n    ); \n} \n";params=params||{};for(var key in params){var matcher=new RegExp("{{"+key+"}}","g");template=template.replace(matcher,params[key])}return template}},{}],60:[function(require,module,exports){"use strict";var _interopRequireDefault=require("babel-runtime/helpers/interop-require-default")["default"],_paternizeJs=require("./paternize.js"),_paternizeJs2=_interopRequireDefault(_paternizeJs);window.onload=function(){var canvas=document.getElementById("imageCanvas"),rangeSelector=document.getElementById("rangeSelector"),canvasSize=Math.min(window.innerHeight-100,window.innerWidth-100),paternize=new _paternizeJs2["default"](canvas,canvasSize);paternize.init(),rangeSelector.addEventListener("input",function(event){var newValue=rangeSelector.value/100;paternize.updatePatternScale(newValue)})}},{"./paternize.js":61,"babel-runtime/helpers/interop-require-default":5}],61:[function(require,module,exports){"use strict";var _createClass=require("babel-runtime/helpers/create-class")["default"],_classCallCheck=require("babel-runtime/helpers/class-call-check")["default"],_Promise=require("babel-runtime/core-js/promise")["default"],_interopRequireDefault=require("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(exports,"__esModule",{value:!0});var _vertexShaderVert=require("./vertex-shader.vert"),_vertexShaderVert2=_interopRequireDefault(_vertexShaderVert),_fragmentShaderFrag=require("./fragment-shader.frag"),_fragmentShaderFrag2=_interopRequireDefault(_fragmentShaderFrag),IMAGE_SIZE=512,PaternizeApp=function(){function PaternizeApp(canvas,desiredSize){_classCallCheck(this,PaternizeApp),this.canvas=canvas;var size=Math.min(IMAGE_SIZE,desiredSize);this.canvas.height=size,this.canvas.width=size,this.image0Src="textures/windmills.jpg",this.image1Src="textures/earth.jpg",this.patternSrc="textures/spiral.png",this.texImage0=null,this.texImage1=null,this.texPattern=null,this.uPatternWidth=null,this.currentPatternScale=null,this.requestedPatternScale=.3,this.drawing=!1}return _createClass(PaternizeApp,[{key:"init",value:function(){this.gl=this.canvas.getContext("webgl")||this.canvas.getContext("experimental-webgl");var shaderProg=this.createShaderProgram_(_vertexShaderVert2["default"](),_fragmentShaderFrag2["default"]());this.gl.useProgram(shaderProg),this.setImageCoords(shaderProg),this.uPatternWidth=this.gl.getUniformLocation(shaderProg,"u_patternWidth");var self=this;this.loadImage(self.image0Src).then(function(image){return self.texImage0=self.loadTexture(image),self.loadImage(self.image1Src)}).then(function(image){return self.texImage1=self.loadTexture(image),self.loadImage(self.patternSrc)}).then(function(image){self.texPattern=self.loadTexture(image),self.bindTexturesToTextureUnits(shaderProg),self.draw()})["catch"](function(err){console.error("Error Caught: ",err)})}},{key:"draw",value:function(){this.currentPatternScale!==this.requestedPatternScale?(this.gl.uniform1f(this.uPatternWidth,this.requestedPatternScale),this.gl.drawArrays(this.gl.TRIANGLES,0,6),this.currentPatternScale=this.requestedPatternScale,window.requestAnimationFrame(this.draw.bind(this))):this.drawing=!1}},{key:"updatePatternScale",value:function(value){this.requestedPatternScale=value,this.drawing||this.draw()}},{key:"setImageCoords",value:function(shaderProg){var attributeCoords=this.gl.getAttribLocation(shaderProg,"a_coords");this.gl.enableVertexAttribArray(attributeCoords);var bufferCoords=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,bufferCoords),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(attributeCoords,2,this.gl.FLOAT,!1,0,0)}},{key:"bindTexturesToTextureUnits",value:function(program){var uImage0=this.gl.getUniformLocation(program,"u_image0"),uImage1=this.gl.getUniformLocation(program,"u_image1"),uPattern=this.gl.getUniformLocation(program,"u_pattern");this.gl.uniform1i(uImage0,0),this.gl.uniform1i(uImage1,1),this.gl.uniform1i(uPattern,2),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texImage0),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texImage1),this.gl.activeTexture(this.gl.TEXTURE2),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texPattern)}},{key:"createShaderProgram_",value:function(vertexShaderSource,fragmentShaderSource){var vsh=this.gl.createShader(this.gl.VERTEX_SHADER);if(this.gl.shaderSource(vsh,vertexShaderSource),this.gl.compileShader(vsh),!this.gl.getShaderParameter(vsh,this.gl.COMPILE_STATUS))throw"Error in vertex shader: "+this.gl.getShaderInfoLog(vsh);var fsh=this.gl.createShader(this.gl.FRAGMENT_SHADER);if(this.gl.shaderSource(fsh,fragmentShaderSource),this.gl.compileShader(fsh),!this.gl.getShaderParameter(fsh,this.gl.COMPILE_STATUS))throw"Error in Fragment Shader: "+this.gl.getShaderInfoLog(fsh);var prog=this.gl.createProgram();if(this.gl.attachShader(prog,vsh),this.gl.attachShader(prog,fsh),this.gl.linkProgram(prog),!this.gl.getProgramParameter(prog,this.gl.LINK_STATUS))throw"LInk error in program: "+this.gl.getProgramInfoLog(prog);return prog}},{key:"loadImage",value:function(src){return new _Promise(function(resolve,reject){var img=new Image;img.onload=function(){resolve(img)},img.onerror=function(err){reject(err)},img.src=src})}},{key:"loadTexture",value:function(image){var texture=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,texture),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,image),texture}}]),PaternizeApp}();exports["default"]=PaternizeApp,module.exports=exports["default"]},{"./fragment-shader.frag":59,"./vertex-shader.vert":62,"babel-runtime/core-js/promise":2,"babel-runtime/helpers/class-call-check":3,"babel-runtime/helpers/create-class":4,"babel-runtime/helpers/interop-require-default":5}],62:[function(require,module,exports){module.exports=function(params){var template="attribute vec2 a_coords; \nvarying vec2 v_texCoord; \n \nvoid main() { \n  v_texCoord = a_coords; \n  gl_Position = vec4(a_coords, 0, 1); \n} \n";params=params||{};for(var key in params){var matcher=new RegExp("{{"+key+"}}","g");template=template.replace(matcher,params[key])}return template}},{}]},{},[60]);
//# sourceMappingURL=bundle.js.map