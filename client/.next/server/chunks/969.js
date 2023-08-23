exports.id = 969;
exports.ids = [969];
exports.modules = {

/***/ 90166:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23))

/***/ }),

/***/ 31572:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 77081))

/***/ }),

/***/ 77081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WalletConnect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49010);
/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10634);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19582);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57897);
/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39067);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const chains = [
    wagmi_chains__WEBPACK_IMPORTED_MODULE_1__/* .arbitrum */ .yX,
    wagmi_chains__WEBPACK_IMPORTED_MODULE_1__/* .mainnet */ .RJ,
    wagmi_chains__WEBPACK_IMPORTED_MODULE_1__/* .polygon */ .yu,
    wagmi_chains__WEBPACK_IMPORTED_MODULE_1__/* .moonbeam */ .Ai,
    wagmi_chains__WEBPACK_IMPORTED_MODULE_1__/* .moonbaseAlpha */ .tb
];
const projectId = "34043931dedf67433e6f95bfa3205586" //process.env.API_KEY as string
;
const { publicClient } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__/* .configureChains */ .QB)(chains, [
    (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_3__/* .w3mProvider */ .X)({
        projectId
    })
]);
const wagmiConfig = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__/* .createConfig */ ._g)({
    autoConnect: true,
    connectors: (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_3__/* .w3mConnectors */ .gu)({
        projectId,
        chains
    }),
    publicClient
});
const ethereumClient = new _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_3__/* .EthereumClient */ .J0(wagmiConfig, chains);
function WalletConnect() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(wagmi__WEBPACK_IMPORTED_MODULE_4__/* .WagmiConfig */ .eM, {
                config: wagmiConfig
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_web3modal_react__WEBPACK_IMPORTED_MODULE_5__/* .Web3Modal */ .Eg, {
                projectId: projectId,
                ethereumClient: ethereumClient
            })
        ]
    });
}


/***/ }),

/***/ 49955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/fonts/fonts.ts","import":"Poppins","arguments":[{"subsets":["latin"],"variable":"--font-poppins","display":"swap","weight":["100","200","300","400","500"]}],"variableName":"poppins"}
var fonts_ts_import_Poppins_arguments_subsets_latin_variable_font_poppins_display_swap_weight_100_200_300_400_500_variableName_poppins_ = __webpack_require__(27470);
var fonts_ts_import_Poppins_arguments_subsets_latin_variable_font_poppins_display_swap_weight_100_200_300_400_500_variableName_poppins_default = /*#__PURE__*/__webpack_require__.n(fonts_ts_import_Poppins_arguments_subsets_latin_variable_font_poppins_display_swap_weight_100_200_300_400_500_variableName_poppins_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/providers/walletconnect.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/mac/Nft-assets/client/src/providers/walletconnect.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const walletconnect = (__default__);
;// CONCATENATED MODULE: ./src/app/layout.tsx




const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(walletconnect, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                className: `${(fonts_ts_import_Poppins_arguments_subsets_latin_variable_font_poppins_display_swap_weight_100_200_300_400_500_variableName_poppins_default()).className}`,
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 73881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;