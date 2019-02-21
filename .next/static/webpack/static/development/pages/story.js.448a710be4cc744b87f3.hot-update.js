webpackHotUpdate("static/development/pages/story.js",{

/***/ "./components/Comment.jsx":
/*!********************************!*\
  !*** ./components/Comment.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/WebJelly/Websites/hacker-next/components/Comment.jsx";


var Comment = function Comment(_ref) {
  var comment = _ref.comment;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "comment-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, comment.user), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "comment-content",
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), comment.comments && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nested-comments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, comment.comments.map(function (nestedComment) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comment, {
      key: nestedComment.id,
      comment: nestedComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ })

})
//# sourceMappingURL=story.js.448a710be4cc744b87f3.hot-update.js.map