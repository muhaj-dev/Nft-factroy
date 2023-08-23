"use strict";
exports.id = 247;
exports.ids = [247];
exports.modules = {

/***/ 62282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fonts_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62800);
/* harmony import */ var _fonts_fonts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fonts_fonts__WEBPACK_IMPORTED_MODULE_3__);




const Button = ({ children, style, as = "button", href = "/", handleClick, className })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `${className} rounded-md ${(_fonts_fonts__WEBPACK_IMPORTED_MODULE_3___default().className)}`,
        onClick: handleClick,
        style: {
            cursor: "pointer",
            ...style
        },
        children: as === "link" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: href,
            children: children
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 46798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fonts_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46055);
/* harmony import */ var _fonts_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fonts_fonts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const EditableSection = (props)=>{
    const { title, placeholder, onChangeHandler, style, type = "text", subTitle, inputBackgroundColor } = props;
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const delayDebounceFn = setTimeout(()=>{
            if (onChangeHandler) {
                onChangeHandler(value);
            }
        }, 1000);
        return ()=>clearTimeout(delayDebounceFn);
    }, [
        value
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_fonts_fonts__WEBPACK_IMPORTED_MODULE_2___default().className)} mb-4 flex flex-col`,
        style: {
            ...style
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: `block text-white text-sm font-bold mb-2`,
                children: title
            }),
            subTitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-sm text-gray-700",
                children: subTitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: "shadow appearance-none rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3",
                id: type,
                type: type ?? "text",
                placeholder: placeholder,
                value: value,
                style: {
                    background: inputBackgroundColor
                },
                onChange: (e)=>{
                    setValue(e.target.value);
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableSection);


/***/ }),

/***/ 97282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46055);
/* harmony import */ var _fonts_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fonts_fonts__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const TextArea = (props)=>{
    const { title, subTitle, placeholder, style } = props;
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_fonts_fonts__WEBPACK_IMPORTED_MODULE_2___default().className)} mb-4 flex flex-col`,
        style: {
            ...style
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: `block text-white text-sm font-bold mb-2`,
                children: title
            }),
            subTitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-sm text-gray-700",
                children: subTitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                className: "shadow appearance-none rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3",
                rows: 4,
                cols: 50,
                maxLength: 500,
                value: value,
                placeholder: placeholder,
                onChange: (e)=>{
                    setValue(e.target.value);
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);


/***/ })

};
;