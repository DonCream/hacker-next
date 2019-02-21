webpackHotUpdate("static/development/pages/story.js",{

/***/ "./pages/story.jsx":
/*!*************************!*\
  !*** ./pages/story.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");







var _jsxFileName = "/home/WebJelly/Websites/hacker-next/pages/story.jsx";






var Story =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Story, _React$Component);

  function Story() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Story);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Story).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Story, [{
    key: "render",
    value: function render() {
      var story = this.props.story;

      if (!story) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_10___default.a, {
          statusCode: 503,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: story.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("main", {
        className: "jsx-718764341",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-718764341" + " " + "story-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: story.url,
        className: "jsx-718764341",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, story.title)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-718764341" + " " + "story-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-718764341",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, story.points, "points"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-718764341",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, story.comments_count, " comments"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-718764341",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, story.time_ago, "time ago"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "718764341",
        __self: this
      }, "main.jsx-718764341{padding:1em;}.story-title.jsx-718764341{font-size:1.2rem;margin:0;font-weight:300;padding-bottom:0.5em;}.story-title.jsx-718764341 a.jsx-718764341{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-718764341 a.jsx-718764341:hover{-webkit-text-decoration:underline;text-decoration:underline;}.story-details.jsx-718764341{font-size:0.8rem;padding-bottom:1em;border-bottom:1px solid rgba(0,0,0,0.1);margin-bottom:1em;}.story-details.jsx-718764341 strong.jsx-718764341{margin-right:1em;}.story-details.jsx-718764341 a.jsx-718764341{color:#f60;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL1dlYkplbGx5L1dlYnNpdGVzL2hhY2tlci1uZXh0L3BhZ2VzL3N0b3J5LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q2dCLEFBR21CLEFBR0ssQUFNTixBQUllLEFBR1QsQUFNQSxBQUdOLFdBZlMsQUFnQnJCLENBekJBLEtBR1UsQUFhVSxBQU1wQixTQWxCaUIsVUFhd0IsTUFabkIsa0JBUXRCLENBSEEsRUFKQSxhQVltQixrQkFDbkIiLCJmaWxlIjoiL2hvbWUvV2ViSmVsbHkvV2Vic2l0ZXMvaGFja2VyLW5leHQvcGFnZXMvc3RvcnkuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XG5pbXBvcnQgRXJyb3IgZnJvbSBcIm5leHQvZXJyb3JcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmNsYXNzIFN0b3J5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCByZXMsIHF1ZXJ5IH0pIHtcbiAgbGV0IHN0b3J5O1xuXG4gIHRyeSB7XG4gICBjb25zdCBzdG9yeUlkID0gcXVlcnkuaWQ7XG4gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL25vZGUtaG5hcGkuaGVyb2t1YXBwLmNvbS9pdGVtLyR7c3RvcnlJZH1gXG4gICApO1xuICAgc3RvcnkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgY29uc29sZS5sb2coZXJyKTtcbiAgIHN0b3J5ID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7IHN0b3J5IH07XG4gfVxuIHJlbmRlcigpIHtcbiAgY29uc3QgeyBzdG9yeSB9ID0gdGhpcy5wcm9wcztcblxuICBpZiAoIXN0b3J5KSB7XG4gICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezUwM30gLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgPExheW91dCB0aXRsZT17c3RvcnkudGl0bGV9PlxuICAgIDxtYWluPlxuICAgICA8aDEgY2xhc3NOYW1lPVwic3RvcnktdGl0bGVcIj5cbiAgICAgIDxhIGhyZWY9e3N0b3J5LnVybH0+e3N0b3J5LnRpdGxlfTwvYT5cbiAgICAgPC9oMT5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeS1kZXRhaWxzXCI+XG4gICAgICA8c3Ryb25nPntzdG9yeS5wb2ludHN9cG9pbnRzPC9zdHJvbmc+XG4gICAgICA8c3Ryb25nPntzdG9yeS5jb21tZW50c19jb3VudH0gY29tbWVudHM8L3N0cm9uZz5cbiAgICAgIDxzdHJvbmc+e3N0b3J5LnRpbWVfYWdvfXRpbWUgYWdvPC9zdHJvbmc+XG4gICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgIG1haW4ge1xuICAgICAgcGFkZGluZzogMWVtO1xuICAgICB9XG4gICAgIC5zdG9yeS10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gICAgIH1cbiAgICAgLnN0b3J5LXRpdGxlIGEge1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgfVxuICAgICAuc3RvcnktdGl0bGUgYTpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgfVxuICAgICAuc3RvcnktZGV0YWlscyB7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICB9XG4gICAgIC5zdG9yeS1kZXRhaWxzIHN0cm9uZyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgfVxuICAgICAuc3RvcnktZGV0YWlscyBhIHsgXG4gICAgICBjb2xvcjogI2Y2MDtcbiAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgIDwvTGF5b3V0PlxuICApO1xuIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Rvcnk7XG4iXX0= */\n/*@ sourceURL=/home/WebJelly/Websites/hacker-next/pages/story.jsx */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, res, query, story, storyId, response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, res = _ref.res, query = _ref.query;
                _context.prev = 1;
                storyId = query.id;
                _context.next = 5;
                return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default()("https://node-hnapi.herokuapp.com/item/".concat(storyId));

              case 5:
                response = _context.sent;
                _context.next = 8;
                return response.json();

              case 8:
                story = _context.sent;
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);
                story = null;

              case 15:
                return _context.abrupt("return", {
                  story: story
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Story;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Story);

/***/ })

})
//# sourceMappingURL=story.js.74e8fd016bdf06bf8d26.hot-update.js.map