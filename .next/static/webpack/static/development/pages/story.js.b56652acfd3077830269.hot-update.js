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
    className: "jsx-3620400614" + " " + "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3620400614" + " " + "comment-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, comment.user), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    className: "jsx-3620400614" + " " + "comment-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), comment.comments && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3620400614" + " " + "nested-comments",
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
    id: "3620400614",
    __self: this
  }, ".comment.jsx-3620400614{margin-bottom:1.5em;}.comment-user.jsx-3620400614{font-size:0.9rem;font-weight:bold;margin-bottom:0.5em;}.comment-content.jsx-3620400614{font-size:0.9rem;}.comment-content.jsx-3620400614 p.jsx-3620400614{margin:0;margin-bottom:0.5em;word-wrap:break-word;}.comment-content.jsx-3620400614 a.jsx-3620400614{color:#f60;-webkit-text-decoration:underline;text-decoration:underline;}.comment-content.jsx-3620400614 pre.jsx-3620400614{max-width:100%;overflow:scroll;}.nested-comments.jsx-3620400614{margin-top:1em;border-left:1px solid rgba(0,0,0,0.1);padding-left:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL1dlYkplbGx5L1dlYnNpdGVzL2hhY2tlci1uZXh0L2NvbXBvbmVudHMvQ29tbWVudC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWlCLEFBRzZCLEFBR0gsQUFLQSxBQUdSLEFBS0UsQUFJSSxBQUlBLFNBWkssRUFLTSxJQUlWLEFBSXNCLEVBckJyQixBQUtsQixHQVJBLFNBWXNCLEVBU3RCLEdBakJxQixnQkFTckIsR0FZa0IsQ0FwQmxCLGdCQXFCQSxDQVRBIiwiZmlsZSI6Ii9ob21lL1dlYkplbGx5L1dlYnNpdGVzL2hhY2tlci1uZXh0L2NvbXBvbmVudHMvQ29tbWVudC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb21tZW50ID0gKHtjb21tZW50fSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC11c2VyXCI+e2NvbW1lbnQudXNlcn08L2Rpdj5cbiAgICA8ZGl2XG4gICAgIGNsYXNzTmFtZT1cImNvbW1lbnQtY29udGVudFwiXG4gICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29tbWVudC5jb250ZW50fX1cbiAgICAgLz5cbiAgICAge2NvbW1lbnQuY29tbWVudHMgJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXN0ZWQtY29tbWVudHNcIj5cbiAgICAgIHtjb21tZW50LmNvbW1lbnRzLm1hcChuZXN0ZWRDb21tZW50ID0+IChcbiAgICAgICA8Q29tbWVudCBrZXk9e25lc3RlZENvbW1lbnQuaWR9IGNvbW1lbnQ9e25lc3RlZENvbW1lbnR9IC8+XG4gICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICApfVxuXG4gICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAuY29tbWVudCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xuICAgICAgIH1cbiAgICAgICAuY29tbWVudC11c2VyIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICB9XG4gICAgICAgLmNvbW1lbnQtY29udGVudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgIH1cbiAgICAgICAuY29tbWVudC1jb250ZW50IHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgfVxuICAgICAgIC5jb21tZW50LWNvbnRlbnQgYSB7XG4gICAgICAgIGNvbG9yOiAjZjYwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICB9XG4gICAgICAgLmNvbW1lbnQtY29udGVudCBwcmUge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgfVxuICAgICAgIC5uZXN0ZWQtY29tbWVudHMge1xuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgICAgICB9XG4gICAgIGB9PC9zdHlsZT5cblxuICAgIDwvZGl2PlxuKTtcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XG4iXX0= */\n/*@ sourceURL=/home/WebJelly/Websites/hacker-next/components/Comment.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ })

})
//# sourceMappingURL=story.js.b56652acfd3077830269.hot-update.js.map