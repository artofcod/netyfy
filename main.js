(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/post.actions.ts":
/*!*****************************************!*\
  !*** ./src/app/actions/post.actions.ts ***!
  \*****************************************/
/*! exports provided: loadPosts, loadPostsSuccess, loadPostsFailure, SecelectPost, insertPost, insertPostsSuccess, insertPostsFailure, updatePost, updatePostsSuccess, updatePostsFailure, deletePost, deletePostSuccess, deletePostFaliure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPosts", function() { return loadPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPostsSuccess", function() { return loadPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPostsFailure", function() { return loadPostsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecelectPost", function() { return SecelectPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertPost", function() { return insertPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertPostsSuccess", function() { return insertPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertPostsFailure", function() { return insertPostsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePost", function() { return updatePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePostsSuccess", function() { return updatePostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePostsFailure", function() { return updatePostsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePost", function() { return deletePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePostSuccess", function() { return deletePostSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePostFaliure", function() { return deletePostFaliure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

//load post list
const loadPosts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post List Component] Load Posts');
const loadPostsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post List Effect] Load Posts Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadPostsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post List Effect] Load Posts Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
//load single post
//using selector
const SecelectPost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Current Post ID Component & Reducer] Select Single Posts', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
//insert post
const insertPost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[insert post Component] Load Posts', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const insertPostsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[isert post Effect] Load Posts Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const insertPostsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[insert post Effect] Load Posts Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
//update post
const updatePost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[update post Component] Load Posts', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updatePostsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[update post Effect] update Post Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updatePostsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[update post Effect] update Post Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
//delete post
const deletePost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Delete post Component] Delete post', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deletePostSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Delete post Effect] Delete post Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deletePostFaliure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Delete post Effect] Delete post Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _view_backend_post_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/backend/post/post.component */ "./src/app/view/backend/post/post.component.ts");
/* harmony import */ var _app_view_frontend_common_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/view/frontend/common/layout/layout.component */ "./src/app/view/frontend/common/layout/layout.component.ts");







// import { PostReducer } from './reducers/post.reducer';
const router = [
    {
        path: '',
        component: _app_view_frontend_common_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | view-frontend-frontend-module */ "view-frontend-frontend-module").then(__webpack_require__.bind(null, /*! ./view/frontend/frontend.module */ "./src/app/view/frontend/frontend.module.ts")).then(m => m.FrontendModule)
            }
        ]
    },
    {
        path: 'edit/:uid',
        component: _view_backend_post_post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"],
        data: {
            title: "edit post"
        }
    },
    {
        path: 'ngrx',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./view/backend/post.module */ "./src/app/view/backend/post.module.ts")).then(m => m.PostModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(router),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(router),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'fesh';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/ngrx-store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _effects_post_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./effects/post.effects */ "./src/app/effects/post.effects.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _view_frontend_common_layout_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view/frontend/common/layout/layout.component */ "./src/app/view/frontend/common/layout/layout.component.ts");
/* harmony import */ var _view_backend_post_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view/backend/post.module */ "./src/app/view/backend/post.module.ts");










// import { PostComponent } from './post/post/post.component';



// import {CommonModuleFront} from './view/frontend/common/common.module'

//my modules





// import{LayoutComponent}from './view/frontend/common/layout/layout.component';
const LAYOUT = [
    _view_frontend_common_layout_layout_component__WEBPACK_IMPORTED_MODULE_13__["LayoutComponent"]
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"], {
                metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_5__["metaReducers"],
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true,
                }
            }),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument() : [],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([_effects_post_effects__WEBPACK_IMPORTED_MODULE_9__["PostEffects"]]),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
            _view_backend_post_module__WEBPACK_IMPORTED_MODULE_14__["PostModule"],
            // CommonModuleFront,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _view_frontend_common_layout_layout_component__WEBPACK_IMPORTED_MODULE_13__["LayoutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsRootModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
        _view_backend_post_module__WEBPACK_IMPORTED_MODULE_14__["PostModule"],
        // CommonModuleFront,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    // HeaderComponent,
                    // FooterComponent,
                    // LayoutComponent
                    ...LAYOUT,
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"], {
                        metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_5__["metaReducers"],
                        runtimeChecks: {
                            strictStateImmutability: true,
                            strictActionImmutability: true,
                        }
                    }),
                    !_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument() : [],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([_effects_post_effects__WEBPACK_IMPORTED_MODULE_9__["PostEffects"]]),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                    _view_backend_post_module__WEBPACK_IMPORTED_MODULE_14__["PostModule"],
                    // CommonModuleFront,
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/effects/post.effects.ts":
/*!*****************************************!*\
  !*** ./src/app/effects/post.effects.ts ***!
  \*****************************************/
/*! exports provided: PostEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEffects", function() { return PostEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_post_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/post.actions */ "./src/app/actions/post.actions.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");








class PostEffects {
    constructor(actions$, postService) {
        this.actions$ = actions$;
        this.postService = postService;
        //Extra datastore for few moment
        this.HoldInsert = undefined;
        this.HoldUpdate = undefined;
        this.HoldDelete = undefined;
        this.loadPosts$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_4__["loadPosts"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.postService.getPosts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(posts => (_actions_post_actions__WEBPACK_IMPORTED_MODULE_4__["loadPostsSuccess"]({ posts })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_4__["loadPostsFailure"]({ error }))))))));
        this.InsertPost$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_4__["insertPost"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((action) => {
            this.HoldInsert = action.post;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((action) => this.postService.insertPosts(action.post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((post, action) => {
            const x = {
                "id": post.insertedId,
                "firstname": this.HoldInsert.firstname,
                "lastname": this.HoldInsert.lastname,
            };
            return _actions_post_actions__WEBPACK_IMPORTED_MODULE_4__["insertPostsSuccess"]({ post: x });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_4__["insertPostsFailure"]({ error })))))));
        this.UpdatePost$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_4__["updatePost"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((action) => {
            this.HoldUpdate = action;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((action) => this.postService.updatePost(action.id, action.post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((post) => {
            return _actions_post_actions__WEBPACK_IMPORTED_MODULE_4__["updatePostsSuccess"]({
                payload: {
                    id: this.HoldUpdate.id,
                    changes: this.HoldUpdate.post
                }
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_4__["updatePostsFailure"]({ error })))))));
        this.DeletePost$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_4__["deletePost"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((action) => {
            this.HoldDelete = action.id;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((action) => this.postService.deltePost(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((post) => {
            return _actions_post_actions__WEBPACK_IMPORTED_MODULE_4__["deletePostSuccess"]({ id: this.HoldDelete });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_4__["deletePostFaliure"]({ error })))))));
    }
}
PostEffects.ɵfac = function PostEffects_Factory(t) { return new (t || PostEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"])); };
PostEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostEffects, factory: PostEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _post_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.reducer */ "./src/app/reducers/post.reducer.ts");


const reducers = {
    post: _post_reducer__WEBPACK_IMPORTED_MODULE_1__["PostReducer"],
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/reducers/post.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/post.reducer.ts ***!
  \******************************************/
/*! exports provided: postFeatureKey, adapter, initialState, PostReducer, getSelectdPostId, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postFeatureKey", function() { return postFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostReducer", function() { return PostReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectdPostId", function() { return getSelectdPostId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _actions_post_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/post.actions */ "./src/app/actions/post.actions.ts");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/ngrx-entity.js");



const postFeatureKey = 'post';
//creating entity adapter(interface)
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__["createEntityAdapter"])();
//generating initial state using entity
const initialState = adapter.getInitialState({
    error: undefined,
    currentSelectedPost: null,
});
//reducer which are setting value
const PostReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, 
//for getting all data from database
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["loadPostsSuccess"], (state, action) => {
    return adapter.setAll(action.posts, state);
}), 
//for insterting a single data into database and state
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["insertPostsSuccess"], (state, action) => {
    return adapter.addOne(action.post, state);
}), 
//stting error if thair is any erro in insert
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["insertPostsFailure"], (state, action) => (Object.assign(Object.assign({}, state), { error: action.error }))), 
//setting id to  state
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["SecelectPost"], (state, action) => {
    return Object.assign(Object.assign({}, state), { currentSelectedPost: action.postId });
}), 
//for update a single data into database and state
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["updatePostsSuccess"], (state, action) => {
    return adapter.updateOne(action.payload, state);
}), 
//for successful delete data also delete from store
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["deletePostSuccess"], (state, action) => {
    return adapter.removeOne(action.id, state);
}), 
//for unsuccessful delete error will add to store
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["deletePostFaliure"], (state, action) => (Object.assign(Object.assign({}, state), { error: action.error }))));
//getting and exporting state to access from another file
const getSelectdPostId = (state) => { return state.currentSelectedPost; };
// for exporting this reducer to index reducer
function reducer(state, action) {
    return PostReducer(state, action);
}
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/selectors/post.selectors.ts":
/*!*********************************************!*\
  !*** ./src/app/selectors/post.selectors.ts ***!
  \*********************************************/
/*! exports provided: reducers, selectPostFeature, selectPostsEntities, currentSinglePostId, singlePostBasedOnId, Test, TestAll, selectPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPostFeature", function() { return selectPostFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPostsEntities", function() { return selectPostsEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentSinglePostId", function() { return currentSinglePostId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singlePostBasedOnId", function() { return singlePostBasedOnId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test", function() { return Test; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestAll", function() { return TestAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPosts", function() { return selectPosts; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _reducers_post_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/post.reducer */ "./src/app/reducers/post.reducer.ts");


//reducre maybe
const reducers = {
    posts: _reducers_post_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
};
//for seleceting feature selector
const selectPostFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_reducers_post_reducer__WEBPACK_IMPORTED_MODULE_1__["postFeatureKey"]);
//selecting only entity or in other words actuals state
const selectPostsEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPostFeature, formPost => formPost.entities);
const currentSinglePostId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPostFeature, 
//coming from state method wich is exported
_reducers_post_reducer__WEBPACK_IMPORTED_MODULE_1__["getSelectdPostId"]);
const singlePostBasedOnId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPostFeature, currentSinglePostId, (state, id) => state.entities[id]);
const Test = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPostFeature, _reducers_post_reducer__WEBPACK_IMPORTED_MODULE_1__["selectIds"]);
//get state and  convert entity object to arry
const TestAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPostsEntities, entities => Object.keys(entities).map(k => entities[k]));
//same as converting to arrat like upper function
const selectPosts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPostFeature, _reducers_post_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);


/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class PostService {
    constructor(http) {
        this.http = http;
        this.api = "https://ngrx-app.herokuapp.com";
        this.header = {
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };
        this.post = {};
    }
    getPosts() {
        return this.http.get(this.api + '/user');
    }
    insertPosts(data) {
        return this.http.post(this.api + "/create_user", data, this.header);
    }
    updatePost(postId, postData) {
        return this.http.put(`${this.api}/edit_user/${postId}`, postData, this.header);
    }
    deltePost(postId) {
        return this.http.delete(`${this.api}/del_user/${postId}`);
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/view/backend/backend-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/view/backend/backend-routing.module.ts ***!
  \********************************************************/
/*! exports provided: BackendRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendRoutingModule", function() { return BackendRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post/post.component */ "./src/app/view/backend/post/post.component.ts");





const routes = [
    {
        path: '',
        component: _post_post_component__WEBPACK_IMPORTED_MODULE_2__["PostComponent"]
    }
];
class BackendRoutingModule {
}
BackendRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BackendRoutingModule });
BackendRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BackendRoutingModule_Factory(t) { return new (t || BackendRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BackendRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/view/backend/post.module.ts":
/*!*********************************************!*\
  !*** ./src/app/view/backend/post.module.ts ***!
  \*********************************************/
/*! exports provided: PostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostModule", function() { return PostModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _backend_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backend-routing.module */ "./src/app/view/backend/backend-routing.module.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post/post.component */ "./src/app/view/backend/post/post.component.ts");






class PostModule {
}
PostModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PostModule });
PostModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PostModule_Factory(t) { return new (t || PostModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _backend_routing_module__WEBPACK_IMPORTED_MODULE_3__["BackendRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostModule, { declarations: [_post_post_component__WEBPACK_IMPORTED_MODULE_4__["PostComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _backend_routing_module__WEBPACK_IMPORTED_MODULE_3__["BackendRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _post_post_component__WEBPACK_IMPORTED_MODULE_4__["PostComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _backend_routing_module__WEBPACK_IMPORTED_MODULE_3__["BackendRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/view/backend/post/post.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/view/backend/post/post.component.ts ***!
  \*****************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_selectors_post_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/selectors/post.selectors */ "./src/app/selectors/post.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var src_app_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/actions/post.actions */ "./src/app/actions/post.actions.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function PostComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_22_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_22_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name atleaset 2 or more charecters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostComponent_div_22_small_1_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostComponent_div_22_small_2_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formSubmitted && ctx_r2.formValAfterValidated.firstnamex.errors.whitespace);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formSubmitted && ctx_r2.formValAfterValidated.firstnamex.errors.minlength);
} }
function PostComponent_div_29_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_29_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name atleaset 2 or more charecters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostComponent_div_29_small_1_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostComponent_div_29_small_2_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.formSubmitted && ctx_r3.formValAfterValidated.LastNameValidated.errors.whitespace);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.formSubmitted && ctx_r3.formValAfterValidated.LastNameValidated.errors.minlength);
} }
function PostComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_div_33_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.clearaData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Goto insert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.totlalUser);
} }
function PostComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_41_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_div_41_tr_13_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const d_r18 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.edit(d_r18.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_div_41_tr_13_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const d_r18 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.deletePost(d_r18.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r19 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r18.firstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r18.lastname);
} }
function PostComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PostComponent_div_41_tr_13_Template, 12, 3, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 1, ctx_r10.data$));
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class PostComponent {
    constructor(store, formBuilder) {
        this.store = store;
        this.formBuilder = formBuilder;
        this.formSubmitted = false;
        //data lodd
        this.loading = true;
    }
    ngOnInit() {
        this.GetPostFromAPI();
        this.FieldValidation();
    }
    noWhiteSpaceValidator(control) {
        const isWhitespace = (control.value || '').trim().length === 0;
        const isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    }
    FieldValidation() {
        this.CreateUserForm = this.formBuilder.group({
            firstnamex: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                    this.noWhiteSpaceValidator
                ]
            ],
            LastNameValidated: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                    this.noWhiteSpaceValidator
                ]
            ]
        });
    }
    get formValAfterValidated() {
        return this.CreateUserForm.controls;
    }
    doSave() {
        //validating formfields
        this.formSubmitted = true;
        if (this.CreateUserForm.invalid) {
            console.log(this.CreateUserForm);
            return;
        }
        //performing insert and update
        this.updatingId === undefined ?
            this.insert() :
            this.update(this.updatingId);
    }
    clearaData() {
        this.updatingId = undefined;
        this.formSubmitted = false;
        this.uid = undefined;
        this.firstname = undefined;
        this.lastname = undefined;
    }
    getData() {
        return {
            id: this.uid,
            firstname: this.firstname,
            lastname: this.lastname
        };
    }
    setData(data) {
        this.uid = data.id;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
    }
    setTotal(total) {
        this.totlalUser = total;
    }
    GetPostFromAPI() {
        // geting data form service unsing effct and dispatching aciton
        this.store.dispatch(src_app_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["loadPosts"]());
        this.data$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_selectors_post_selectors__WEBPACK_IMPORTED_MODULE_1__["selectPosts"]));
        this.data$.subscribe(r => {
            this.loading = false;
            this.setTotal(r.length);
        });
    }
    insert() {
        this.store.dispatch(src_app_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["insertPost"]({ post: this.getData() }));
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_selectors_post_selectors__WEBPACK_IMPORTED_MODULE_1__["selectPosts"]));
        this.clearaData();
    }
    //when clicking on edit button setting id global to update  data after change
    edit(id) {
        this.updatingId = id;
        //setting data to state 
        this.store.dispatch(src_app_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["SecelectPost"]({ postId: id }));
        //fetch data according to  id
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_selectors_post_selectors__WEBPACK_IMPORTED_MODULE_1__["singlePostBasedOnId"])).subscribe(
        //for not set data if action is compleated
        r => this.updatingId ? this.setData(r) : "");
    }
    update(id) {
        this.store.dispatch(src_app_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["updatePost"]({ id, post: this.getData() }));
        this.clearaData();
    }
    deletePost(id) {
        this.store.dispatch(src_app_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["deletePost"]({ id: id }));
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], decls: 42, vars: 20, consts: [[1, "container-fluid", "py-4", "header"], [1, "row"], [1, "col", "text-center"], [1, "hidden-lg-down", "display-ngrx", "text-light"], [1, "subtitle"], ["routerLink", "/", 1, "ml-3", "mt-3", "btn", "rounded", "btn-outline-primary", "contact"], [1, "container", "mt-5"], ["class", "action-ber-save rounded p-2", 4, "ngIf"], ["class", "action-ber-update rounded p-2", 4, "ngIf"], [1, "container", "border", "border-secondary", "rounded", "mt-3", "p-3"], [1, "col-12", "col-md-5", "border-seperator"], [3, "formGroup", "ngSubmit"], [1, "col"], [1, "form-group"], ["for", "title"], ["type", "text", "name", "title", "id", "title", "formControlName", "firstnamex", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [4, "ngIf"], ["for", "body", 1, ""], ["type", "text", "name", "body", "id", "body", "formControlName", "LastNameValidated", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["class", "col", 4, "ngIf"], ["class", "col text-right", 4, "ngIf"], [1, "col-12", "col-md-7", "mt-4", "mt-md-0"], [1, "user-board", "w-100"], ["class", "col table-responsive-sm", 4, "ngIf"], [1, "action-ber-save", "rounded", "p-2"], [1, "action-ber-update", "rounded", "p-2"], ["class", " mt-5 text-danger", 4, "ngIf"], [1, "mt-5", "text-danger"], [1, "btn", "btn-success", "btn-sm", "px-md-5", "w-50", "w-sm-100"], [1, "btn", "btn-warning", "btn-sm", "px-md-5"], [1, "col", "text-right"], [1, "btn", "btn-primary", "btn-sm", "px-md-5", 3, "click"], ["src", "../../../../assets/images/loading.gif", 1, "img-fluid"], [1, "lead", "text-white"], [1, "display-2", "text-light"], ["src", "../../../../assets/images/tableLoading.gif", 1, "img-fluid"], [1, "col", "table-responsive-sm"], [1, "table", "table-hover", "table-dark"], ["scope", "col"], ["scope", "col", 1, "text-center"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "text-center"], [1, "px-3", "btn", "btn-warning", "mr-md-4", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Angular and NGRX - 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "With node and mysql inside Docker Container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Back to home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PostComponent_div_10_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PostComponent_div_11_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PostComponent_Template_form_ngSubmit_15_listener() { return ctx.doSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostComponent_Template_input_ngModelChange_21_listener($event) { return ctx.firstname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PostComponent_div_22_Template, 3, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostComponent_Template_input_ngModelChange_28_listener($event) { return ctx.lastname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PostComponent_div_29_Template, 3, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PostComponent_div_31_Template, 3, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PostComponent_div_32_Template, 3, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PostComponent_div_33_Template, 3, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, PostComponent_div_36_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, PostComponent_div_37_Template, 5, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, PostComponent_div_40_Template, 2, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PostComponent_div_41_Template, 15, 3, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.updatingId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updatingId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.CreateUserForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstname)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.formSubmitted && ctx.formValAfterValidated.firstnamex.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formValAfterValidated.firstnamex.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastname)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.formSubmitted && ctx.formValAfterValidated.LastNameValidated.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formValAfterValidated.LastNameValidated.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.updatingId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updatingId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updatingId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".header[_ngcontent-%COMP%] {\n    background: #440f62\n  }\n.subtitle[_ngcontent-%COMP%] {\n    color: #6c61a2\n  }\n.action-ber-save[_ngcontent-%COMP%] {\n    background: #c5ffdc;\n    color: #264d1e;\n  }\n.action-ber-update[_ngcontent-%COMP%] {\n    background: #ffd47f;\n    color: #9e4c00;\n  }\n.user-board[_ngcontent-%COMP%] {\n    background: #410807;\n    color: white;\n    text-align: center;\n    padding: 9% 0%;\n    margin: 0px;\n    border-radius: 11px;\n  }\n.border-seperator[_ngcontent-%COMP%] {\n  \n    border-right: 1px solid blue;\n  }\n.display-ngrx[_ngcontent-%COMP%] {\n    font-size: 4.5rem;\n    font-weight: 300;\n    line-height: 1.2;\n  }\n@media (max-width: 992px) {\n    body[_ngcontent-%COMP%] {\n      font-size: 14px;\n    }\n  \n    .display-ngrx[_ngcontent-%COMP%] {\n      font-size: 3.5rem;\n      font-weight: 300;\n      line-height: 1.2;\n    }\n  }\n@media (max-width:768px) {\n    .border-seperator[_ngcontent-%COMP%] {\n      border-right: none\n    }\n  \n    .display-ngrx[_ngcontent-%COMP%] {\n      font-size: 3.5rem;\n      font-weight: 300;\n      line-height: 1.2;\n    }\n  }\n@media (max-width: 576px) {\n    .display-ngrx[_ngcontent-%COMP%] {\n      font-size: 2.5rem;\n      font-weight: 300;\n      line-height: 1.2;\n  \n    }\n  \n    .subtitle[_ngcontent-%COMP%] {\n      padding-top: 25px;\n      border-top: 2px solid;\n      text-align: left;\n      font-size: 18px;\n      margin-top: 20px;\n    }\n  \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9iYWNrZW5kL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtJQUNJO0VBQ0Y7QUFFQTtJQUNFO0VBQ0Y7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCO0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjtBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7QUFFQTs7SUFFRSw0QkFBNEI7RUFDOUI7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0FBR0E7SUFDRTtNQUNFLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLGdCQUFnQjtJQUNsQjtFQUNGO0FBRUE7SUFDRTtNQUNFO0lBQ0Y7O0lBRUE7TUFDRSxpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLGdCQUFnQjtJQUNsQjtFQUNGO0FBRUE7SUFDRTtNQUNFLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsZ0JBQWdCOztJQUVsQjs7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixxQkFBcUI7TUFDckIsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixnQkFBZ0I7SUFDbEI7O0VBRUYiLCJmaWxlIjoic3JjL2FwcC92aWV3L2JhY2tlbmQvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4uaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDQwZjYyXG4gIH1cbiAgXG4gIC5zdWJ0aXRsZSB7XG4gICAgY29sb3I6ICM2YzYxYTJcbiAgfVxuICBcbiAgLmFjdGlvbi1iZXItc2F2ZSB7XG4gICAgYmFja2dyb3VuZDogI2M1ZmZkYztcbiAgICBjb2xvcjogIzI2NGQxZTtcbiAgfVxuICBcbiAgLmFjdGlvbi1iZXItdXBkYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZkNDdmO1xuICAgIGNvbG9yOiAjOWU0YzAwO1xuICB9XG4gIFxuICAudXNlci1ib2FyZCB7XG4gICAgYmFja2dyb3VuZDogIzQxMDgwNztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDklIDAlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIH1cbiAgXG4gIC5ib3JkZXItc2VwZXJhdG9yIHtcbiAgXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmx1ZTtcbiAgfVxuICBcbiAgLmRpc3BsYXktbmdyeCB7XG4gICAgZm9udC1zaXplOiA0LjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICB9XG4gIFxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgYm9keSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICBcbiAgICAuZGlzcGxheS1uZ3J4IHtcbiAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDo3NjhweCkge1xuICAgIC5ib3JkZXItc2VwZXJhdG9yIHtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZVxuICAgIH1cbiAgXG4gICAgLmRpc3BsYXktbmdyeCB7XG4gICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgLmRpc3BsYXktbmdyeCB7XG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICBcbiAgICB9XG4gIFxuICAgIC5zdWJ0aXRsZSB7XG4gICAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgXG4gIH1cbiAgXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/view/frontend/common/layout/layout.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/view/frontend/common/layout/layout.component.ts ***!
  \*****************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class LayoutComponent {
    constructor() { }
    mailto(emailAddress, emailSubject) {
        return "mailto:" + emailAddress + "?subject=" + emailSubject;
    }
    phone() {
        return 'tel: +91 877 739 4986';
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 80, vars: 2, consts: [[1, "navbar", "navbar-expand-lg"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], [1, "fa", "fa-line-chart"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["href", "", "routerLink", "/", 1, "nav-link", "smoothScroll"], ["href", "", "routerLink", "/ourwork", 1, "nav-link", "smoothScroll"], ["href", "", "routerLink", "/about", 1, "nav-link", "smoothScroll"], ["href", "", "routerLink", "/feature", 1, "nav-link"], ["href", "", "routerLink", "/ngrx", 1, "nav-link", "contact"], ["href", "", "routerLink", "/contact", 1, "nav-link", "contact"], [1, "site-footer"], [1, "row"], [1, "col-lg-5", "mx-lg-auto", "col-md-8", "col-10"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "text-white"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-lg-3", "col-md-6", "col-12"], [1, "my-4"], [1, "mb-1"], [1, "fa", "fa-phone", "mr-2", "footer-icon"], [3, "href"], ["href", "#"], [1, "fa", "fa-envelope", "mr-2", "footer-icon"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-3", "col-md-6", "col-12"], [1, "fa", "fa-home", "mr-2", "footer-icon"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "col-lg-4", "mx-lg-auto", "text-center", "col-md-8", "col-12"], [1, "copyright-text"], ["data-aos", "fade-up", "data-aos-delay", "500", 1, "col-lg-4", "mx-lg-auto", "col-md-6", "col-12"], [1, "footer-link"], ["data-aos", "fade-up", "data-aos-delay", "600", 1, "col-lg-3", "mx-lg-auto", "col-md-6", "col-12"], [1, "social-icon"], ["href", "#", 1, "fa", "fa-instagram"], ["href", "#", 1, "fa", "fa-twitter"], ["href", "#", 1, "fa", "fa-facebook"], ["href", "#", 1, "fa", "fa-linkedin"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Digital Angle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Studio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Our Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "NGRX-10 Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "footer", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "We make creative ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Contact Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "+91 877 739 4986 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "psoumitra22@gamil.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Our Studio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Sonarpur, kolkata - 700145 , WB, India ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Copyright \u00A9 2020 Digitl Angle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Stories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Work with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.phone(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.mailto("example@mail.com", "newSubject"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvZnJvbnRlbmQvY29tbW9uL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ola/for pracktisk/ngrx/hindi/ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map