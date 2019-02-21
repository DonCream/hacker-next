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
    className: "jsx-3134291372" + " " + "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3134291372" + " " + "comment-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, comment.user), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    className: "jsx-3134291372" + " " + "comment-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), comment.comments && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3134291372" + " " + "nested-comments",
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
    id: "3134291372",
    __self: this
  }, ".comment.jsx-3134291372{margin-bottom:1.5em;}.comment-user.jsx-3134291372{font-size:0.9rem;font-weight:bold;margin-bottom:0.5em;}.comment-content.jsx-3134291372{font-size:0.9rem;}.comment-content.jsx-3134291372 p.jsx-3134291372{margin:0;margin-bottom:0.5em;word-wrap:break-word;}.comment-content.jsx-3134291372 a.jsx-3134291372{color:#f60;-webkit-text-decoration:underline;text-decoration:underline;}.comment-content.jsx-3134291372 pre.jsx-3134291372{max-width:100%;overflow:scroll;}.nested-comments.jsx-3134291372{margin-top:1em;border-left:1px solid rgba(0,0,0,0.1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL1dlYkplbGx5L1dlYnNpdGVzL2hhY2tlci1uZXh0L2NvbXBvbmVudHMvQ29tbWVudC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWlCLEFBRzRCLEFBR0gsQUFLQSxBQUdSLEFBS0UsQUFJSSxBQUlBLFNBWkssRUFLTSxJQUlWLEFBS2xCLEVBdEJtQixBQUtsQixHQVJBLFNBWXNCLEVBU3RCLEdBakJxQixnQkFTckIsR0FZQSxDQXBCQSxpQkFZQSIsImZpbGUiOiIvaG9tZS9XZWJKZWxseS9XZWJzaXRlcy9oYWNrZXItbmV4dC9jb21wb25lbnRzL0NvbW1lbnQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ29tbWVudCA9ICh7Y29tbWVudH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnQtdXNlclwiPntjb21tZW50LnVzZXJ9PC9kaXY+XG4gICAgPGRpdlxuICAgICBjbGFzc05hbWU9XCJjb21tZW50LWNvbnRlbnRcIlxuICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbW1lbnQuY29udGVudH19XG4gICAgIC8+XG4gICAgIHtjb21tZW50LmNvbW1lbnRzICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmVzdGVkLWNvbW1lbnRzXCI+XG4gICAgICB7Y29tbWVudC5jb21tZW50cy5tYXAobmVzdGVkQ29tbWVudCA9PiAoXG4gICAgICAgPENvbW1lbnQga2V5PXtuZXN0ZWRDb21tZW50LmlkfSBjb21tZW50PXtuZXN0ZWRDb21tZW50fSAvPlxuICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgKX1cblxuICAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29tbWVudCB7XG4gICAgICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gICAgICB9XG4gICAgICAuY29tbWVudC11c2VyIHtcbiAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgIH1cbiAgICAgIC5jb21tZW50LWNvbnRlbnQge1xuICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgfVxuICAgICAgLmNvbW1lbnQtY29udGVudCBwIHtcbiAgICAgICBtYXJnaW46IDA7XG4gICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgfVxuICAgICAgLmNvbW1lbnQtY29udGVudCBhIHtcbiAgICAgICBjb2xvcjogI2Y2MDtcbiAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICAgIC5jb21tZW50LWNvbnRlbnQgcHJlIHtcbiAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgIH1cbiAgICAgIC5uZXN0ZWQtY29tbWVudHMge1xuICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKVxuICAgICAgfVxuXG4gICAgIGB9PC9zdHlsZT5cblxuICAgIDwvZGl2PlxuKTtcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XG4iXX0= */\n/*@ sourceURL=/home/WebJelly/Websites/hacker-next/components/Comment.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ })

})
//# sourceMappingURL=story.js.b8b039e6c466a1c66923.hot-update.js.map