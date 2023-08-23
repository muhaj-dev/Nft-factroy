"use strict";
exports.id = 860;
exports.ids = [860];
exports.modules = {

/***/ 56471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Footer)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(14178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/assets/images/app_logo.png
var app_logo = __webpack_require__(77558);
;// CONCATENATED MODULE: ./src/assets/images/app_name.png
/* harmony default export */ const app_name = ({"src":"/_next/static/media/app_name.ff9d12ac.png","height":355,"width":1141,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAALElEQVR42mP43fqj4IfvT9k/zL9YfrH+YGH4mf+k51vmL/dfSb8bf+X/8AUAVZ8UOq7SZ4EAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/common/Logo.tsx






const Logo = (props)=>{
    const { height } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "/",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex justify-content-between align-items-center gap-2",
            children: [
                app_logo/* default */.Z,
                app_name
            ].map((img)=>{
                let imageName = `${img}`;
                return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    alt: imageName,
                    src: img,
                    sizes: "100vw",
                    style: {
                        width: "auto",
                        height: (height + "px") ?? "auto"
                    }
                }, imageName);
            })
        })
    });
};
/* harmony default export */ const common_Logo = (Logo);

;// CONCATENATED MODULE: ./src/components/Footer.tsx


const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: "3rem 5rem",
            background: "linear-gradient(134deg, rgba(255, 199, 44, 0.16) 0%, rgba(255, 199, 44, 0.00) 100%)"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "md:mb-5",
                children: /*#__PURE__*/ jsx_runtime_.jsx(common_Logo, {
                    height: 50
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        className: "text-md text-primary",
                        children: "Socials"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "nftfactory2@gmail.com"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);


/***/ }),

/***/ 84785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/app_name.ff9d12ac.png","height":355,"width":1141,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAALElEQVR42mP43fqj4IfvT9k/zL9YfrH+YGH4mf+k51vmL/dfSb8bf+X/8AUAVZ8UOq7SZ4EAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});

/***/ })

};
;