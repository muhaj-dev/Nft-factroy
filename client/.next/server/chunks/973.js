"use strict";
exports.id = 973;
exports.ids = [973];
exports.modules = {

/***/ 61947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10634);
/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19582);
/* harmony import */ var _fonts_fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62800);
/* harmony import */ var _fonts_fonts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fonts_fonts__WEBPACK_IMPORTED_MODULE_5__);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const NavTools = (props)=>{
    const [buttonText, setButtonText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Wallet Connect");
    const { open } = (0,_web3modal_react__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3Modal */ .k_)();
    const { title, isMenu = false } = props;
    const { address, isConnected } = (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_4__/* .getAccount */ .D0)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (isConnected) {
            // @ts-ignore
            const short = `${address.slice(0, 5)}...${address.slice(-4)}`;
            setButtonText(short);
        } else {
            setButtonText("Wallet Connect");
        }
    }, [
        isConnected,
        address
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isMenu ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex justify-between",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: `${(_fonts_fonts__WEBPACK_IMPORTED_MODULE_5___default().className)} text-2xl`,
                    children: title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-row gap-4 items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "bg-gradient-linear rounded-md px-3 py-2 text-sm",
                            onClick: async ()=>{
                                await open();
                            },
                            children: buttonText
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            height: 25,
                            width: 25,
                            src: "/profile.svg",
                            alt: "profile",
                            style: {
                                cursor: "pointer"
                            }
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "bg-gradient-linear rounded-md px-3 py-2 text-sm",
                    onClick: async ()=>{
                        await open();
                    },
                    children: buttonText
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    height: 25,
                    width: 25,
                    src: "/profile.svg",
                    alt: "profile",
                    style: {
                        cursor: "pointer"
                    }
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavTools);


/***/ }),

/***/ 35469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/app_logo.a81129c2.png","height":748,"width":673,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAm0lEQVR42jWOOwrCQBRFX6ObUNDKwmRRLsFW0DWkUVALURSsBdeQKSWV+UCqgaRImqRKkSFnYBI43PvumSJilD8BgTVURnkrd0/FlQVjakLvRc/pc+Eb5ZXhDUse7EGzzaz4mtC/QwAND57IHXspDAnlTB4RH9DIA3csiAhOHC1C0QPyQf6EUcMGbrC1ibyQkZU9FPCHDDr35/UAz6yK70b4ZPUAAAAASUVORK5CYII=","blurWidth":7,"blurHeight":8});

/***/ })

};
;