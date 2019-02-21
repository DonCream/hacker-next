webpackHotUpdate("static/development/pages/story.js",{

/***/ "./components/Comment.jsx":
/*!********************************!*\
  !*** ./components/Comment.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/WebJelly/Websites/hacker-next/components/Comment.jsx";



var Comment = function Comment(_ref) {
  var comment = _ref.comment;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2870390991" + " " + "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2870390991" + " " + "comment-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, comment.user), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    className: "jsx-2870390991" + " " + "comment-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), comment.comments && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2870390991" + " " + "nested-comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, comment.comments.map(function (nestedComment) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Comment, {
      key: nestedComment.id,
      comment: nestedComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2870390991",
    __self: this
  }, ".comment.jsx-2870390991{margin-bottom:1.5em;}.comment-user.jsx-2870390991{font-size:0.9rem;font-weight:bold;margin-bottom:0.5em;}.comment-content.jsx-2870390991{font-size:0.9rem;}.comment-content.jsx-2870390991 global(p).jsx-2870390991{margin:0;margin-bottom:0.5em;word-wrap:break-word;}.comment-content.jsx-2870390991 a.jsx-2870390991{color:#f60;-webkit-text-decoration:underline;text-decoration:underline;}.comment-content.jsx-2870390991 pre.jsx-2870390991{max-width:100%;overflow:scroll;}.nested-comments.jsx-2870390991{margin-top:1em;border-left:1px solid rgba(0,0,0,0.1);padding-left:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL1dlYkplbGx5L1dlYnNpdGVzL2hhY2tlci1uZXh0L2NvbXBvbmVudHMvQ29tbWVudC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWMsQUFHeUIsQUFHSCxBQUtBLEFBR1IsQUFLRSxBQUlJLEFBSUEsU0FaSyxFQUtNLElBSVYsQUFJeUIsRUFyQnhCLEFBS2xCLEdBUkEsU0FZc0IsRUFTdEIsR0FqQnFCLGdCQVNyQixHQVlrQixDQXBCbEIsZ0JBcUJBLENBVEEiLCJmaWxlIjoiL2hvbWUvV2ViSmVsbHkvV2Vic2l0ZXMvaGFja2VyLW5leHQvY29tcG9uZW50cy9Db21tZW50LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENvbW1lbnQgPSAoeyBjb21tZW50IH0pID0+IChcbiA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50LXVzZXJcIj57Y29tbWVudC51c2VyfTwvZGl2PlxuICA8ZGl2XG4gICBjbGFzc05hbWU9XCJjb21tZW50LWNvbnRlbnRcIlxuICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb21tZW50LmNvbnRlbnQgfX1cbiAgLz5cbiAge2NvbW1lbnQuY29tbWVudHMgJiYgKFxuICAgPGRpdiBjbGFzc05hbWU9XCJuZXN0ZWQtY29tbWVudHNcIj5cbiAgICB7Y29tbWVudC5jb21tZW50cy5tYXAobmVzdGVkQ29tbWVudCA9PiAoXG4gICAgIDxDb21tZW50IGtleT17bmVzdGVkQ29tbWVudC5pZH0gY29tbWVudD17bmVzdGVkQ29tbWVudH0gLz5cbiAgICApKX1cbiAgIDwvZGl2PlxuICApfVxuXG4gIDxzdHlsZSBqc3g+e2BcbiAgIC5jb21tZW50IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgIH1cbiAgIC5jb21tZW50LXVzZXIge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgfVxuICAgLmNvbW1lbnQtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICB9XG4gICAuY29tbWVudC1jb250ZW50IGdsb2JhbChwKSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgIH1cbiAgIC5jb21tZW50LWNvbnRlbnQgYSB7XG4gICAgY29sb3I6ICNmNjA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICB9XG4gICAuY29tbWVudC1jb250ZW50IHByZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICB9XG4gICAubmVzdGVkLWNvbW1lbnRzIHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XG4gICB9XG4gIGB9PC9zdHlsZT5cbiA8L2Rpdj5cbik7XG5leHBvcnQgZGVmYXVsdCBDb21tZW50O1xuIl19 */\n/*@ sourceURL=/home/WebJelly/Websites/hacker-next/components/Comment.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ })

})
//# sourceMappingURL=story.js.b17286fe8f6878095233.hot-update.js.map