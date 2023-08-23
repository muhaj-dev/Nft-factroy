"use strict";
exports.id = 465;
exports.ids = [465];
exports.modules = {

/***/ 46105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/common/Button.tsx
var Button = __webpack_require__(62282);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/fonts/fonts.ts","import":"Orbitron","arguments":[{"subsets":["latin"],"display":"swap","variable":"--font-orbitron","weight":"500"}],"variableName":"orbitron"}
var fonts_ts_import_Orbitron_arguments_subsets_latin_display_swap_variable_font_orbitron_weight_500_variableName_orbitron_ = __webpack_require__(62800);
var fonts_ts_import_Orbitron_arguments_subsets_latin_display_swap_variable_font_orbitron_weight_500_variableName_orbitron_default = /*#__PURE__*/__webpack_require__.n(fonts_ts_import_Orbitron_arguments_subsets_latin_display_swap_variable_font_orbitron_weight_500_variableName_orbitron_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/fonts/fonts.ts","import":"Poppins","arguments":[{"subsets":["latin"],"variable":"--font-poppins","display":"swap","weight":["100","200","300","400","500"]}],"variableName":"poppins"}
var fonts_ts_import_Poppins_arguments_subsets_latin_variable_font_poppins_display_swap_weight_100_200_300_400_500_variableName_poppins_ = __webpack_require__(46055);
var fonts_ts_import_Poppins_arguments_subsets_latin_variable_font_poppins_display_swap_weight_100_200_300_400_500_variableName_poppins_default = /*#__PURE__*/__webpack_require__.n(fonts_ts_import_Poppins_arguments_subsets_latin_variable_font_poppins_display_swap_weight_100_200_300_400_500_variableName_poppins_);
;// CONCATENATED MODULE: ./src/common/Dropdown.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const DropdownSelect = ({ item, title, subTitle, onChangeHandler })=>{
    const [value, setValue] = (0,react_.useState)("");
    (0,react_.useEffect)(()=>{
        if (onChangeHandler) {
            onChangeHandler(value);
        }
    }, [
        value
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(fonts_ts_import_Poppins_arguments_subsets_latin_variable_font_poppins_display_swap_weight_100_200_300_400_500_variableName_poppins_default()).className} mb-5 flex flex-col`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-lg block text-white text-sm font-bold mb-2",
                children: title
            }),
            subTitle && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-sm text-gray-700",
                children: subTitle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx("select", {
                    value: value,
                    placeholder: "Select",
                    name: title,
                    className: "p-3 border rounded-md w-full text-black",
                    style: {
                        background: "#000"
                    },
                    onChange: (e)=>{
                        setValue(e.target.value);
                    },
                    children: item.length > 0 && item.map((x, index)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: x,
                            className: "bg-black",
                            children: x
                        }, index))
                })
            })
        ]
    });
};
/* harmony default export */ const Dropdown = (DropdownSelect);

// EXTERNAL MODULE: ./src/common/EditableSection.tsx
var EditableSection = __webpack_require__(46798);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.js
var react_fontawesome = __webpack_require__(52196);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(42050);
;// CONCATENATED MODULE: ./src/common/FileUploader.tsx




const FileUploader = /*#__PURE__*/ (0,react_.forwardRef)((props, ref)=>{
    const handleFileChange = (e)=>{
        const target = e.target;
        const file = target.files?.[0];
        console.log(file);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center justify-center mb-5",
        style: {
            background: "rgba(255, 255, 255, 0.04)",
            height: "7.5rem",
            borderRadius: "0.75rem",
            boxShadow: "-2px 0px 4px 0px rgba(255, 199, 44, 0.08)",
            backdropFilter: "blur(4px)",
            cursor: "pointer"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "file",
                className: "hidden",
                accept: "image/*",
                onChange: handleFileChange,
                style: {
                    display: "none"
                },
                ref: ref
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                    icon: free_solid_svg_icons/* faPlus */.r8p,
                    style: {
                        fontSize: "4rem",
                        fontWeight: 300
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-opacity-25",
                children: "Upload Image"
            })
        ]
    });
});
FileUploader.displayName = "FileUploader";
/* harmony default export */ const common_FileUploader = (FileUploader);

;// CONCATENATED MODULE: ./src/components/Forms/ArtworkDetails.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const ArtworkDetailsForm = ()=>{
    const fileRef = (0,react_.useRef)(null);
    const [mintDate, setMintDate] = (0,react_.useState)("");
    const [mintSupply, setMintSupply] = (0,react_.useState)(0);
    const [mintPrice, setMintPrice] = (0,react_.useState)(0);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: `${(fonts_ts_import_Orbitron_arguments_subsets_latin_display_swap_variable_font_orbitron_weight_500_variableName_orbitron_default()).className} text-primary text-2xl mb-5`,
                children: "Artwork Details"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(common_FileUploader, {
                ref: fileRef
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Dropdown, {
                item: [
                    "nft",
                    "crypto"
                ],
                title: "NFT Type",
                subTitle: "Select NFT type",
                onChangeHandler: (value)=>{
                    setMintDate(value);
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EditableSection/* default */.Z, {
                title: "Mint Date",
                placeholder: "Placeholder",
                onChangeHandler: (value)=>{
                    setMintDate(value);
                },
                subTitle: "Please provide expected NFT minting date"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Dropdown, {
                item: [
                    "100",
                    "200",
                    "300"
                ],
                title: "Mint Price",
                subTitle: "Please share your best estimate",
                onChangeHandler: (value)=>{
                    setMintPrice(value);
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EditableSection/* default */.Z, {
                title: "Mint Supply",
                placeholder: "123456",
                onChangeHandler: (value)=>{
                    setMintSupply(parseInt(value));
                }
            })
        ]
    });
};
/* harmony default export */ const ArtworkDetails = (ArtworkDetailsForm);

;// CONCATENATED MODULE: ./src/components/Forms/GetStarted.tsx




const GetStarted = ({ nextPage })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `flex justify-center items-center flex-col w-3/4 ml-5 h-screen text-center ${(fonts_ts_import_Poppins_arguments_subsets_latin_variable_font_poppins_display_swap_weight_100_200_300_400_500_variableName_poppins_default()).className} `,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: `${(fonts_ts_import_Orbitron_arguments_subsets_latin_display_swap_variable_font_orbitron_weight_500_variableName_orbitron_default()).className} text-primary text-4xl mb-3`,
                children: "Mint Your NFTs"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mb-10",
                children: "Turn your digital products/services into unique NFTs with just a few clicks. Choose your preferred blockchain, set the supply, and define rarity to create captivating digital assets."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-around items-center w-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        className: "bg-gradient-linear px-6 py-3 rounded-md",
                        handleClick: nextPage,
                        children: "Apply"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        className: "px-6 py-3",
                        as: "link",
                        href: "/guide",
                        style: {
                            border: "2px solid transparent",
                            borderImage: "linear-gradient(to right, #702D6C, #FFC72C) 1"
                        },
                        children: "Guide"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Forms_GetStarted = (GetStarted);

;// CONCATENATED MODULE: ./src/components/Forms/ProjectDetails.tsx
/* __next_internal_client_entry_do_not_use__ SectionOneForm,SecondSectionForm auto */ 



const SectionOneForm = ()=>{
    const [title, setTitle] = (0,react_.useState)("");
    const [description, setDescription] = (0,react_.useState)("");
    const [whitePaperText, setWhitePaperText] = (0,react_.useState)("");
    const [goalText, setGoalText] = (0,react_.useState)("");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "my-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: `${(fonts_ts_import_Orbitron_arguments_subsets_latin_display_swap_variable_font_orbitron_weight_500_variableName_orbitron_default()).className} text-primary text-2xl mb-5`,
                children: "Project Details"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EditableSection/* default */.Z, {
                title: "Project Title",
                placeholder: "Title",
                onChangeHandler: (value)=>{
                    if (!value) {
                        value = " ";
                    }
                    setTitle(value);
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EditableSection/* default */.Z, {
                title: "Project Description",
                placeholder: "Description",
                onChangeHandler: (value)=>{
                    if (!value) {
                        value = " ";
                    }
                    setDescription(value);
                },
                subTitle: "Share your project's Pitch, Concept, Utility & Major partners involved."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EditableSection/* default */.Z, {
                title: "Whitepaper",
                placeholder: "Start typing",
                onChangeHandler: (value)=>{
                    if (!value) {
                        value = " ";
                    }
                    setWhitePaperText(value);
                },
                subTitle: "Will be attached to launchpad"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EditableSection/* default */.Z, {
                title: "Goal",
                placeholder: "Start typing",
                onChangeHandler: (value)=>{
                    if (!value) {
                        value = " ";
                    }
                    setGoalText(value);
                }
            })
        ]
    });
};
const SecondSectionForm = ()=>{
    const [discordLink, setDiscordLink] = (0,react_.useState)("");
    const [website, setWebsite] = (0,react_.useState)("");
    const [discordID, setDiscordID] = (0,react_.useState)("");
    const [email, setEmail] = (0,react_.useState)("");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: `${(fonts_ts_import_Orbitron_arguments_subsets_latin_display_swap_variable_font_orbitron_weight_500_variableName_orbitron_default()).className} text-primary text-2xl mb-5`,
                children: "Project Details"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EditableSection/* default */.Z, {
                title: "Discord Link",
                placeholder: "https:###",
                onChangeHandler: (value)=>{
                    setDiscordLink(value);
                },
                subTitle: "Will be linked with launchpad"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EditableSection/* default */.Z, {
                title: "Project Website",
                placeholder: "https:###",
                onChangeHandler: (value)=>{
                    setWebsite(value);
                },
                subTitle: "Will be linked with launchpad"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EditableSection/* default */.Z, {
                title: "Discord ID",
                placeholder: "UserID:###",
                onChangeHandler: (value)=>{
                    setDiscordID(value);
                },
                subTitle: "Please provide discord ID of main contact"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EditableSection/* default */.Z, {
                title: "Email Address",
                placeholder: "launchpad@mail.com",
                onChangeHandler: (value)=>{
                    setEmail(value);
                },
                subTitle: "Please provide Email address of main contact"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Forms/SalesPlan.tsx




const SalesPlanForm = ()=>{
    const [planText, setPlanText] = (0,react_.useState)("");
    const [preSaleText, setPreSaleText] = (0,react_.useState)("");
    const [additionalInfo, setAdditionalInfo] = (0,react_.useState)("");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: `${(fonts_ts_import_Orbitron_arguments_subsets_latin_display_swap_variable_font_orbitron_weight_500_variableName_orbitron_default()).className} text-primary text-2xl mb-5`,
                children: "Sales plan"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EditableSection/* default */.Z, {
                title: "Marketing Plan",
                placeholder: "Start typing",
                onChangeHandler: (value)=>{
                    setPlanText(value);
                },
                subTitle: "Please provide information on project marketing plan"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EditableSection/* default */.Z, {
                title: "Are you interested in presale",
                placeholder: "Start typing",
                onChangeHandler: (value)=>{
                    setPreSaleText(value);
                },
                subTitle: "This is a tool that allows you to sell prior to mint to help the supporter get access to the project"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "More Info"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(EditableSection/* default */.Z, {
                title: "",
                placeholder: "",
                onChangeHandler: (value)=>{
                    setAdditionalInfo(value);
                },
                subTitle: "Please provide any additional information"
            })
        ]
    });
};
/* harmony default export */ const SalesPlan = (SalesPlanForm);

// EXTERNAL MODULE: ./src/common/TextArea.tsx
var TextArea = __webpack_require__(97282);
;// CONCATENATED MODULE: ./src/components/Forms/TeamInformation.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const TeamInformationForm = ()=>{
    const [members, setMembers] = (0,react_.useState)("");
    const [twitterUrl, setTwitterUrl] = (0,react_.useState)("");
    const [linkedUrl, setLinkedinUrl] = (0,react_.useState)("");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: `${(fonts_ts_import_Orbitron_arguments_subsets_latin_display_swap_variable_font_orbitron_weight_500_variableName_orbitron_default()).className} text-primary text-2xl mb-5`,
                children: "Team Information"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TextArea/* default */.Z, {
                title: "Members & their Roles",
                placeholder: "Start Typing",
                onChangeHandler: (value)=>{
                    setMembers(value);
                },
                subTitle: "Please provide the names each team member and their roles"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TextArea/* default */.Z, {
                title: "Twitter",
                placeholder: "https:###",
                onChangeHandler: (value)=>{
                    setTwitterUrl(value);
                },
                subTitle: "Please provide the twitter link for each team member"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TextArea/* default */.Z, {
                title: "LinkedIn",
                placeholder: "https:###",
                onChangeHandler: (value)=>{
                    setLinkedinUrl(value);
                },
                subTitle: "Please provide the Linkedin link for each team member"
            })
        ]
    });
};
/* harmony default export */ const TeamInformation = (TeamInformationForm);

;// CONCATENATED MODULE: ./src/app/launchpad/apply/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const Apply = ()=>{
    const [currentPage, setCurrentPage] = (0,react_.useState)(1);
    const handleNextPage = ()=>{
        if (currentPage < 6) {
            setCurrentPage((prevPage)=>prevPage + 1);
        }
    };
    const isLastPage = currentPage === 6;
    const previewCurrentPage = ()=>{
        switch(currentPage){
            case 1:
                return /*#__PURE__*/ jsx_runtime_.jsx(Forms_GetStarted, {
                    nextPage: handleNextPage
                });
            case 2:
                return /*#__PURE__*/ jsx_runtime_.jsx(SectionOneForm, {});
            case 3:
                return /*#__PURE__*/ jsx_runtime_.jsx(SecondSectionForm, {});
            case 4:
                return /*#__PURE__*/ jsx_runtime_.jsx(TeamInformation, {});
            case 5:
                return /*#__PURE__*/ jsx_runtime_.jsx(ArtworkDetails, {});
            case 6:
                return /*#__PURE__*/ jsx_runtime_.jsx(SalesPlan, {});
            default:
                return;
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col justify-start h-screen mt-10 mb-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-4/5",
                children: previewCurrentPage()
            }),
            currentPage > 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-end w-4/5 mt-5",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                    handleClick: handleNextPage,
                    className: "bg-gradient-linear px-6 py-3",
                    children: isLastPage ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Submit"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: " Proceed"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const page = (Apply);


/***/ }),

/***/ 3266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/mac/Nft-assets/client/src/app/launchpad/apply/page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;