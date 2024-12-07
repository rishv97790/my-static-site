var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { useFela, RendererProvider } from "react-fela";
import * as jsxRuntime from "react/jsx-runtime";
import { useMDXComponents, MDXProvider } from "@mdx-js/react";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore.js";
import { Island } from "tropical-islands";
import { useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { createRenderer } from "fela";
import { renderToMarkup } from "fela-dom";
import { Title, Meta, Link, HeadProvider } from "react-head";
import require$$0 from "@babel/runtime/helpers/interopRequireDefault";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import "@babel/runtime/helpers/extends";
import refractor from "refractor";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const meta$3 = {
  title: "404 Not Found"
};
function NotFoundPage({
  meta: meta2,
  pages
}) {
  const {
    css
  } = useFela();
  return /* @__PURE__ */ jsx("p", {
    className: css({
      color: "orange"
    }),
    children: "Not Found"
  });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  meta: meta$3,
  default: NotFoundPage
}, Symbol.toStringTag, { value: "Module" }));
const tableOfContents$2 = [{
  "depth": 1,
  "value": "My first blog post",
  "id": "my-first-blog-post"
}];
const meta$2 = {
  title: `My first blog post`,
  description: `In which I describe the writing of my first blog post`,
  tags: ["post"],
  date: "2021-04-01"
};
function _createMdxContent$2(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, useMDXComponents(), props.components);
  return jsxs(Fragment, {
    children: [jsx(_components.h1, {
      id: "my-first-blog-post",
      children: "My first blog post"
    }), "\n", jsx(_components.p, {
      children: "This is just a page with a 'post' tag."
    })]
  });
}
function MDXContent$2(props = {}) {
  const { wrapper: MDXLayout } = Object.assign({}, useMDXComponents(), props.components);
  return MDXLayout ? jsx(MDXLayout, Object.assign({}, props, {
    children: jsx(_createMdxContent$2, props)
  })) : _createMdxContent$2(props);
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  tableOfContents: tableOfContents$2,
  meta: meta$2,
  default: MDXContent$2
}, Symbol.toStringTag, { value: "Module" }));
const tableOfContents$1 = [{
  "depth": 1,
  "value": "My second blog post",
  "id": "my-second-blog-post"
}];
const meta$1 = {
  title: `My second blog post`,
  description: `The much anticipated sequel to my first blog post`,
  tags: ["post"],
  date: "2021-07-02"
};
function _createMdxContent$1(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    pre: "pre",
    code: "code"
  }, useMDXComponents(), props.components);
  return jsxs(Fragment, {
    children: [jsx(_components.h1, {
      id: "my-second-blog-post",
      children: "My second blog post"
    }), "\n", jsx(_components.p, {
      children: "The much anticipated sequel to my first blog post. Lorem ipsum yada yada."
    }), "\n", jsx(_components.p, {
      children: "This is just a page with a 'post' tag."
    }), "\n", jsx(_components.pre, {
      children: jsx(_components.code, {
        className: "language-js",
        children: "// This one has a syntax highlighted code block\nconst tropical = 'awesome'\n"
      })
    })]
  });
}
function MDXContent$1(props = {}) {
  const { wrapper: MDXLayout } = Object.assign({}, useMDXComponents(), props.components);
  return MDXLayout ? jsx(MDXLayout, Object.assign({}, props, {
    children: jsx(_createMdxContent$1, props)
  })) : _createMdxContent$1(props);
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  tableOfContents: tableOfContents$1,
  meta: meta$1,
  default: MDXContent$1
}, Symbol.toStringTag, { value: "Module" }));
dayjs.extend(isSameOrBefore);
function pagesWithTag(pages, tag, sorter = sortByDateDescending) {
  return Object.values(pages).filter(({ meta: meta2 }) => {
    var _a;
    return (_a = meta2.tags) == null ? void 0 : _a.includes(tag);
  }).sort(sorter);
}
function sortByDateDescending(a, b) {
  var _a, _b;
  const dayA = ((_a = a.meta) == null ? void 0 : _a.date) && dayjs(a.meta.date);
  const dayB = ((_b = b.meta) == null ? void 0 : _b.date) && dayjs(b.meta.date);
  if (!(dayA == null ? void 0 : dayA.isValid()))
    throw new Error(`Invalid meta.date exported from ${a.modulePath}`);
  if (!(dayB == null ? void 0 : dayB.isValid()))
    throw new Error(`Invalid meta.date exported from ${b.modulePath}`);
  return dayA.isSameOrBefore(dayB) ? 1 : -1;
}
const image = "/assets/gunayala.f6132071.jpg";
function ExampleComponent({
  children,
  alertMessage
}) {
  const {
    css
  } = useFela();
  const [isMounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return /* @__PURE__ */ jsx("button", {
    disabled: !isMounted,
    onClick: () => window.alert(alertMessage),
    className: css({
      background: `url(${image})`,
      backgroundAttachment: "cover",
      backgroundPosition: "center center",
      border: "none",
      borderRadius: "4px",
      color: "chartreuse",
      cursor: "pointer",
      fontFamily: `"Comic Sans MS", "Comic Sans", cursive`,
      fontSize: "2rem",
      marginRight: "5px",
      padding: "30px 70px",
      textShadow: "2px 2px 4px #000",
      "&[disabled]": {
        cursor: "not-allowed",
        filter: "grayscale(100%)"
      },
      "&:hover:not([disabled])": {
        color: "hotpink"
      }
    }),
    children
  });
}
const tableOfContents = [{
  "depth": 1,
  "value": "Welcome to your new Tropical website \u{1F3DD}\u{1F60E}\u{1F379}",
  "id": "welcome-to-your-new-tropical-website-",
  "children": [{
    "depth": 2,
    "value": "Quick start",
    "id": "quick-start"
  }, {
    "depth": 2,
    "value": "Pages",
    "id": "pages"
  }, {
    "depth": 2,
    "value": "Metadata",
    "id": "metadata"
  }, {
    "depth": 2,
    "value": "Islands & client-side JS",
    "id": "islands--client-side-js"
  }, {
    "depth": 2,
    "value": "And much more!",
    "id": "and-much-more"
  }]
}];
const meta = {
  title: `Welcome to Tropical`,
  description: `The world's newest Tropical website!`
};
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    ul: "ul",
    li: "li",
    strong: "strong",
    code: "code",
    a: "a",
    p: "p",
    small: "small"
  }, useMDXComponents(), props.components);
  return jsxs(Fragment, {
    children: [jsx(_components.h1, {
      id: "welcome-to-your-new-tropical-website-",
      children: "Welcome to your new Tropical website \u{1F3DD}\u{1F60E}\u{1F379}"
    }), "\n", jsx(_components.h2, {
      id: "quick-start",
      children: "Quick start"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: jsx(_components.code, {
            children: "yarn dev"
          })
        }), " starts a dev server at ", jsx(_components.a, {
          href: "http://localhost:3000/",
          children: "localhost:3000"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: jsx(_components.code, {
            children: "yarn build"
          })
        }), " builds the static site into ", jsx(_components.code, {
          children: "dist/static"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: jsx(_components.code, {
            children: "yarn stories"
          })
        }), " starts ", jsx(_components.a, {
          href: "https://ladle.dev/",
          children: "Ladle"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: jsx(_components.code, {
            children: "yarn page my-new-page"
          })
        }), " scaffolds a file for a new page"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: jsx(_components.code, {
            children: "yarn component MyNewComponent"
          })
        }), " scaffolds files for a new component"]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["You can also use ", jsx(_components.code, {
        children: "npm"
      }), " or ", jsx(_components.code, {
        children: "pnpm"
      }), " instead of ", jsx(_components.code, {
        children: "yarn"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "pages",
      children: "Pages"
    }), "\n", jsxs(_components.p, {
      children: ["This is your homepage. Pages live in ", jsx(_components.code, {
        children: "src/pages"
      }), " and are either ", jsx(_components.code, {
        children: ".mdx"
      }), " files (like this one) or plain old React components in ", jsx(_components.code, {
        children: ".jsx"
      }), " files (like the ", jsx(_components.a, {
        href: "/404/",
        children: "404"
      }), " example)."]
    }), "\n", jsx(_components.h2, {
      id: "metadata",
      children: "Metadata"
    }), "\n", jsx(_components.p, {
      children: "Pages can have tags, dates, and all kinds of other metadata. That lets you do stuff like render a date-ordered list of all pages with the 'post' tag:"
    }), "\n", "\n", jsx("ul", {
      children: pagesWithTag(props.pages, "post").map(({ meta: meta2, urlPath }) => jsxs(_components.li, {
        children: [jsx(_components.a, {
          href: urlPath,
          children: meta2.title
        }), " ", jsxs(_components.small, {
          children: ["written on a ", dayjs(meta2.date).format("dddd in MMMM \u2019YY")]
        })]
      }, urlPath))
    }), "\n", jsx(_components.h2, {
      id: "islands--client-side-js",
      children: "Islands & client-side JS"
    }), "\n", jsxs(_components.p, {
      children: ["Tropical pages are ", jsx(_components.strong, {
        children: "only server rendered by default."
      }), " To progressively enhance you'll need to sprinkle on some client-side JS, or opt components into hydration with Tropical Islands."]
    }), "\n", "\n", jsx(Island, {
      componentName: "ExampleComponent",
      islandTag: "span",
      children: jsx(ExampleComponent, {
        alertMessage: "\u{1F60E}",
        children: "Hydrated"
      })
    }), "\n", jsx(ExampleComponent, {
      alertMessage: "\u{1F622}",
      children: "Not hydrated"
    }), "\n", jsx(_components.h2, {
      id: "and-much-more",
      children: "And much more!"
    }), "\n", jsxs(_components.p, {
      children: ["Check out ", jsx(_components.a, {
        href: "https://tropical.js.org",
        children: "the docs"
      }), " or dive in and explore the ", jsx(_components.code, {
        children: "src"
      }), " directory."]
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = Object.assign({}, useMDXComponents(), props.components);
  return MDXLayout ? jsx(MDXLayout, Object.assign({}, props, {
    children: jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  tableOfContents,
  meta,
  default: MDXContent
}, Symbol.toStringTag, { value: "Module" }));
const name = "tropical";
const version = "11.4.1";
const dependencies = {
  "@ladle/react": "^2.4.5",
  "@mdx-js/mdx": "^2.1.5",
  "@mdx-js/react": "^2.1.5",
  "@mdx-js/rollup": "^2.1.5",
  "@stefanprobst/rehype-extract-toc": "^2.2.0",
  "@vitejs/plugin-react": "^2.2.0",
  dayjs: "^1.11.6",
  express: "^4.18.2",
  fela: "^12.0.2",
  "fela-dom": "^12.0.2",
  "fs-extra": "^10.0.0",
  react: "^18.2.0",
  "react-dom": "^18.2.0",
  "react-fela": "^12.0.2",
  "react-head": "^3.4.0",
  "react-syntax-highlighter": "^15.5.0",
  "rehype-slug": "^5.0.1",
  "remark-gfm": "^3.0.1",
  rollup: "^3.2.3",
  "tropical-islands": "^2.0.0",
  "tropical-scaffold": "^2.0.0",
  vite: "^3.2.1",
  "vite-plugin-image-presets": "^0.3.3",
  yarpm: "^1.1.1"
};
const engines = {
  node: ">=16"
};
const type = "module";
const license = "MIT";
const scripts = {
  dev: "node server",
  build: "yarpm run build:clientAssets && yarpm run build:server && node --experimental-specifier-resolution=node prerender",
  "build:clientAssets": "vite --config vite.config.client.js build --outDir dist/static",
  "build:server": "vite --config vite.config.server.js build --outDir dist/server --ssr src/entry-server.jsx",
  stories: "ladle serve -p 6006",
  page: "tropical-scaffold --type=page",
  component: "tropical-scaffold --type=component"
};
const tropical = {
  siteHost: "https://www.example.org"
};
const pkg = {
  name,
  version,
  dependencies,
  engines,
  type,
  license,
  "private": true,
  scripts,
  tropical
};
const FEED_TITLE = "Another Tropical site";
const SITE_HOST = pkg.tropical.siteHost;
function renderFeed(pages) {
  const posts = pagesWithTag(pages, "post");
  return JSON.stringify({
    version: "https://jsonfeed.org/version/1",
    title: FEED_TITLE,
    home_page_url: `${SITE_HOST}/`,
    feed_url: `${SITE_HOST}/feed.json`,
    items: posts.map(({
      Component,
      urlPath,
      meta: meta2,
      tableOfContents: tableOfContents2
    }) => ({
      id: urlPath,
      url: `${SITE_HOST}${urlPath}`,
      title: meta2.title,
      date_published: dayjs(meta2.date).toISOString(),
      content_text: ReactDOMServer.renderToStaticMarkup(/* @__PURE__ */ jsx(RendererProvider, {
        renderer: createRenderer(),
        children: /* @__PURE__ */ jsx(Component, {
          meta: meta2,
          tableOfContents: tableOfContents2,
          pages
        })
      }))
    }))
  });
}
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: renderFeed
}, Symbol.toStringTag, { value: "Module" }));
const favicon = "/assets/favicon.1be1fd30.png";
function DefaultLayout({
  meta: meta2,
  children
}) {
  const {
    css
  } = useFela();
  return /* @__PURE__ */ jsxs("div", {
    role: "main",
    children: [meta2.title ? /* @__PURE__ */ jsx(Title, {
      children: meta2.title
    }) : null, meta2.description ? /* @__PURE__ */ jsx(Meta, {
      name: "description",
      content: meta2.description
    }) : null, /* @__PURE__ */ jsx(Link, {
      rel: "icon",
      type: "image/png",
      href: favicon
    }), /* @__PURE__ */ jsx("div", {
      className: css({
        margin: "0 auto",
        maxWidth: "44rem"
      }),
      children
    })]
  });
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function powerSetPermutations(arr) {
  var arrLength = arr.length;
  if (arrLength === 0 || arrLength === 1)
    return arr;
  if (arrLength === 2) {
    return [arr[0], arr[1], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0])];
  }
  if (arrLength === 3) {
    return [arr[0], arr[1], arr[2], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
  }
  if (arrLength >= 4) {
    return [arr[0], arr[1], arr[2], arr[3], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3]), "".concat(arr[3], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
  }
}
var classNameCombinations = {};
function getClassNameCombinations(classNames) {
  if (classNames.length === 0 || classNames.length === 1)
    return classNames;
  var key = classNames.join(".");
  if (!classNameCombinations[key]) {
    classNameCombinations[key] = powerSetPermutations(classNames);
  }
  return classNameCombinations[key];
}
function createStyleObject(classNames) {
  var elementStyle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var stylesheet = arguments.length > 2 ? arguments[2] : void 0;
  var nonTokenClassNames = classNames.filter(function(className) {
    return className !== "token";
  });
  var classNamesCombinations = getClassNameCombinations(nonTokenClassNames);
  return classNamesCombinations.reduce(function(styleObject, className) {
    return _objectSpread$1(_objectSpread$1({}, styleObject), stylesheet[className]);
  }, elementStyle);
}
function createClassNameString(classNames) {
  return classNames.join(" ");
}
function createChildren(stylesheet, useInlineStyles) {
  var childrenCount = 0;
  return function(children) {
    childrenCount += 1;
    return children.map(function(child, i) {
      return createElement({
        node: child,
        stylesheet,
        useInlineStyles,
        key: "code-segment-".concat(childrenCount, "-").concat(i)
      });
    });
  };
}
function createElement(_ref) {
  var node = _ref.node, stylesheet = _ref.stylesheet, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style, useInlineStyles = _ref.useInlineStyles, key = _ref.key;
  var properties = node.properties, type2 = node.type, TagName = node.tagName, value = node.value;
  if (type2 === "text") {
    return value;
  } else if (TagName) {
    var childrenCreator = createChildren(stylesheet, useInlineStyles);
    var props;
    if (!useInlineStyles) {
      props = _objectSpread$1(_objectSpread$1({}, properties), {}, {
        className: createClassNameString(properties.className)
      });
    } else {
      var allStylesheetSelectors = Object.keys(stylesheet).reduce(function(classes, selector) {
        selector.split(".").forEach(function(className2) {
          if (!classes.includes(className2))
            classes.push(className2);
        });
        return classes;
      }, []);
      var startingClassName = properties.className && properties.className.includes("token") ? ["token"] : [];
      var className = properties.className && startingClassName.concat(properties.className.filter(function(className2) {
        return !allStylesheetSelectors.includes(className2);
      }));
      props = _objectSpread$1(_objectSpread$1({}, properties), {}, {
        className: createClassNameString(className) || void 0,
        style: createStyleObject(properties.className, Object.assign({}, properties.style, style), stylesheet)
      });
    }
    var children = childrenCreator(node.children);
    return /* @__PURE__ */ jsx(TagName, {
      ...props,
      children
    }, key);
  }
}
const checkForListedLanguage = function(astGenerator, language) {
  var langs = astGenerator.listLanguages();
  return langs.indexOf(language) !== -1;
};
var _excluded = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var newLineRegex = /\n/g;
function getNewLines(str) {
  return str.match(newLineRegex);
}
function getAllLineNumbers(_ref) {
  var lines = _ref.lines, startingLineNumber = _ref.startingLineNumber, style = _ref.style;
  return lines.map(function(_, i) {
    var number = i + startingLineNumber;
    return /* @__PURE__ */ jsx("span", {
      className: "react-syntax-highlighter-line-number",
      style: typeof style === "function" ? style(number) : style,
      children: "".concat(number, "\n")
    }, "line-".concat(i));
  });
}
function AllLineNumbers(_ref2) {
  var codeString = _ref2.codeString, codeStyle = _ref2.codeStyle, _ref2$containerStyle = _ref2.containerStyle, containerStyle = _ref2$containerStyle === void 0 ? {
    "float": "left",
    paddingRight: "10px"
  } : _ref2$containerStyle, _ref2$numberStyle = _ref2.numberStyle, numberStyle = _ref2$numberStyle === void 0 ? {} : _ref2$numberStyle, startingLineNumber = _ref2.startingLineNumber;
  return /* @__PURE__ */ jsx("code", {
    style: Object.assign({}, codeStyle, containerStyle),
    children: getAllLineNumbers({
      lines: codeString.replace(/\n$/, "").split("\n"),
      style: numberStyle,
      startingLineNumber
    })
  });
}
function getEmWidthOfNumber(num) {
  return "".concat(num.toString().length, ".25em");
}
function getInlineLineNumber(lineNumber, inlineLineNumberStyle) {
  return {
    type: "element",
    tagName: "span",
    properties: {
      key: "line-number--".concat(lineNumber),
      className: ["comment", "linenumber", "react-syntax-highlighter-line-number"],
      style: inlineLineNumberStyle
    },
    children: [{
      type: "text",
      value: lineNumber
    }]
  };
}
function assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber) {
  var defaultLineNumberStyle = {
    display: "inline-block",
    minWidth: getEmWidthOfNumber(largestLineNumber),
    paddingRight: "1em",
    textAlign: "right",
    userSelect: "none"
  };
  var customLineNumberStyle = typeof lineNumberStyle === "function" ? lineNumberStyle(lineNumber) : lineNumberStyle;
  var assembledStyle = _objectSpread(_objectSpread({}, defaultLineNumberStyle), customLineNumberStyle);
  return assembledStyle;
}
function createLineElement(_ref3) {
  var children = _ref3.children, lineNumber = _ref3.lineNumber, lineNumberStyle = _ref3.lineNumberStyle, largestLineNumber = _ref3.largestLineNumber, showInlineLineNumbers = _ref3.showInlineLineNumbers, _ref3$lineProps = _ref3.lineProps, lineProps = _ref3$lineProps === void 0 ? {} : _ref3$lineProps, _ref3$className = _ref3.className, className = _ref3$className === void 0 ? [] : _ref3$className, showLineNumbers = _ref3.showLineNumbers, wrapLongLines = _ref3.wrapLongLines, _ref3$wrapLines = _ref3.wrapLines, wrapLines = _ref3$wrapLines === void 0 ? false : _ref3$wrapLines;
  var properties = wrapLines ? _objectSpread({}, typeof lineProps === "function" ? lineProps(lineNumber) : lineProps) : {};
  properties["className"] = properties["className"] ? [].concat(_toConsumableArray(properties["className"].trim().split(/\s+/)), _toConsumableArray(className)) : className;
  if (lineNumber && showInlineLineNumbers) {
    var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
    children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
  }
  if (wrapLongLines & showLineNumbers) {
    properties.style = _objectSpread({
      display: "flex"
    }, properties.style);
  }
  return {
    type: "element",
    tagName: "span",
    properties,
    children
  };
}
function flattenCodeTree(tree) {
  var className = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var newTree = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];
    if (node.type === "text") {
      newTree.push(createLineElement({
        children: [node],
        className: _toConsumableArray(new Set(className))
      }));
    } else if (node.children) {
      var classNames = className.concat(node.properties.className);
      flattenCodeTree(node.children, classNames).forEach(function(i2) {
        return newTree.push(i2);
      });
    }
  }
  return newTree;
}
function processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines) {
  var _ref4;
  var tree = flattenCodeTree(codeTree.value);
  var newTree = [];
  var lastLineBreakIndex = -1;
  var index = 0;
  function createWrappedLine(children2, lineNumber2) {
    var className = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return createLineElement({
      children: children2,
      lineNumber: lineNumber2,
      lineNumberStyle,
      largestLineNumber,
      showInlineLineNumbers,
      lineProps,
      className,
      showLineNumbers,
      wrapLongLines,
      wrapLines
    });
  }
  function createUnwrappedLine(children2, lineNumber2) {
    if (showLineNumbers && lineNumber2 && showInlineLineNumbers) {
      var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber2, largestLineNumber);
      children2.unshift(getInlineLineNumber(lineNumber2, inlineLineNumberStyle));
    }
    return children2;
  }
  function createLine(children2, lineNumber2) {
    var className = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return wrapLines || className.length > 0 ? createWrappedLine(children2, lineNumber2, className) : createUnwrappedLine(children2, lineNumber2);
  }
  var _loop = function _loop2() {
    var node = tree[index];
    var value = node.children[0].value;
    var newLines = getNewLines(value);
    if (newLines) {
      var splitValue = value.split("\n");
      splitValue.forEach(function(text, i) {
        var lineNumber2 = showLineNumbers && newTree.length + startingLineNumber;
        var newChild = {
          type: "text",
          value: "".concat(text, "\n")
        };
        if (i === 0) {
          var _children = tree.slice(lastLineBreakIndex + 1, index).concat(createLineElement({
            children: [newChild],
            className: node.properties.className
          }));
          var _line = createLine(_children, lineNumber2);
          newTree.push(_line);
        } else if (i === splitValue.length - 1) {
          var stringChild = tree[index + 1] && tree[index + 1].children && tree[index + 1].children[0];
          var lastLineInPreviousSpan = {
            type: "text",
            value: "".concat(text)
          };
          if (stringChild) {
            var newElem = createLineElement({
              children: [lastLineInPreviousSpan],
              className: node.properties.className
            });
            tree.splice(index + 1, 0, newElem);
          } else {
            var _children2 = [lastLineInPreviousSpan];
            var _line2 = createLine(_children2, lineNumber2, node.properties.className);
            newTree.push(_line2);
          }
        } else {
          var _children3 = [newChild];
          var _line3 = createLine(_children3, lineNumber2, node.properties.className);
          newTree.push(_line3);
        }
      });
      lastLineBreakIndex = index;
    }
    index++;
  };
  while (index < tree.length) {
    _loop();
  }
  if (lastLineBreakIndex !== tree.length - 1) {
    var children = tree.slice(lastLineBreakIndex + 1, tree.length);
    if (children && children.length) {
      var lineNumber = showLineNumbers && newTree.length + startingLineNumber;
      var line = createLine(children, lineNumber);
      newTree.push(line);
    }
  }
  return wrapLines ? newTree : (_ref4 = []).concat.apply(_ref4, newTree);
}
function defaultRenderer(_ref5) {
  var rows = _ref5.rows, stylesheet = _ref5.stylesheet, useInlineStyles = _ref5.useInlineStyles;
  return rows.map(function(node, i) {
    return createElement({
      node,
      stylesheet,
      useInlineStyles,
      key: "code-segement".concat(i)
    });
  });
}
function isHighlightJs(astGenerator) {
  return astGenerator && typeof astGenerator.highlightAuto !== "undefined";
}
function getCodeTree(_ref6) {
  var astGenerator = _ref6.astGenerator, language = _ref6.language, code = _ref6.code, defaultCodeValue = _ref6.defaultCodeValue;
  if (isHighlightJs(astGenerator)) {
    var hasLanguage = checkForListedLanguage(astGenerator, language);
    if (language === "text") {
      return {
        value: defaultCodeValue,
        language: "text"
      };
    } else if (hasLanguage) {
      return astGenerator.highlight(language, code);
    } else {
      return astGenerator.highlightAuto(code);
    }
  }
  try {
    return language && language !== "text" ? {
      value: astGenerator.highlight(code, language)
    } : {
      value: defaultCodeValue
    };
  } catch (e) {
    return {
      value: defaultCodeValue
    };
  }
}
function highlight(defaultAstGenerator, defaultStyle2) {
  return function SyntaxHighlighter2(_ref7) {
    var language = _ref7.language, children = _ref7.children, _ref7$style = _ref7.style, style = _ref7$style === void 0 ? defaultStyle2 : _ref7$style, _ref7$customStyle = _ref7.customStyle, customStyle = _ref7$customStyle === void 0 ? {} : _ref7$customStyle, _ref7$codeTagProps = _ref7.codeTagProps, codeTagProps = _ref7$codeTagProps === void 0 ? {
      className: language ? "language-".concat(language) : void 0,
      style: _objectSpread(_objectSpread({}, style['code[class*="language-"]']), style['code[class*="language-'.concat(language, '"]')])
    } : _ref7$codeTagProps, _ref7$useInlineStyles = _ref7.useInlineStyles, useInlineStyles = _ref7$useInlineStyles === void 0 ? true : _ref7$useInlineStyles, _ref7$showLineNumbers = _ref7.showLineNumbers, showLineNumbers = _ref7$showLineNumbers === void 0 ? false : _ref7$showLineNumbers, _ref7$showInlineLineN = _ref7.showInlineLineNumbers, showInlineLineNumbers = _ref7$showInlineLineN === void 0 ? true : _ref7$showInlineLineN, _ref7$startingLineNum = _ref7.startingLineNumber, startingLineNumber = _ref7$startingLineNum === void 0 ? 1 : _ref7$startingLineNum, lineNumberContainerStyle = _ref7.lineNumberContainerStyle, _ref7$lineNumberStyle = _ref7.lineNumberStyle, lineNumberStyle = _ref7$lineNumberStyle === void 0 ? {} : _ref7$lineNumberStyle, wrapLines = _ref7.wrapLines, _ref7$wrapLongLines = _ref7.wrapLongLines, wrapLongLines = _ref7$wrapLongLines === void 0 ? false : _ref7$wrapLongLines, _ref7$lineProps = _ref7.lineProps, lineProps = _ref7$lineProps === void 0 ? {} : _ref7$lineProps, renderer = _ref7.renderer, _ref7$PreTag = _ref7.PreTag, PreTag = _ref7$PreTag === void 0 ? "pre" : _ref7$PreTag, _ref7$CodeTag = _ref7.CodeTag, CodeTag = _ref7$CodeTag === void 0 ? "code" : _ref7$CodeTag, _ref7$code = _ref7.code, code = _ref7$code === void 0 ? (Array.isArray(children) ? children[0] : children) || "" : _ref7$code, astGenerator = _ref7.astGenerator, rest = _objectWithoutProperties(_ref7, _excluded);
    astGenerator = astGenerator || defaultAstGenerator;
    var allLineNumbers = showLineNumbers ? /* @__PURE__ */ jsx(AllLineNumbers, {
      containerStyle: lineNumberContainerStyle,
      codeStyle: codeTagProps.style || {},
      numberStyle: lineNumberStyle,
      startingLineNumber,
      codeString: code
    }) : null;
    var defaultPreStyle = style.hljs || style['pre[class*="language-"]'] || {
      backgroundColor: "#fff"
    };
    var generatorClassName = isHighlightJs(astGenerator) ? "hljs" : "prismjs";
    var preProps = useInlineStyles ? Object.assign({}, rest, {
      style: Object.assign({}, defaultPreStyle, customStyle)
    }) : Object.assign({}, rest, {
      className: rest.className ? "".concat(generatorClassName, " ").concat(rest.className) : generatorClassName,
      style: Object.assign({}, customStyle)
    });
    if (wrapLongLines) {
      codeTagProps.style = _objectSpread({
        whiteSpace: "pre-wrap"
      }, codeTagProps.style);
    } else {
      codeTagProps.style = _objectSpread({
        whiteSpace: "pre"
      }, codeTagProps.style);
    }
    if (!astGenerator) {
      return /* @__PURE__ */ jsxs(PreTag, {
        ...preProps,
        children: [allLineNumbers, /* @__PURE__ */ jsx(CodeTag, {
          ...codeTagProps,
          children: code
        })]
      });
    }
    if (wrapLines === void 0 && renderer || wrapLongLines)
      wrapLines = true;
    renderer = renderer || defaultRenderer;
    var defaultCodeValue = [{
      type: "text",
      value: code
    }];
    var codeTree = getCodeTree({
      astGenerator,
      language,
      code,
      defaultCodeValue
    });
    if (codeTree.language === null) {
      codeTree.value = defaultCodeValue;
    }
    var lineCount = codeTree.value.length;
    if (lineCount === 1 && codeTree.value[0].type === "text") {
      lineCount = codeTree.value[0].value.split("\n").length;
    }
    var largestLineNumber = lineCount + startingLineNumber;
    var rows = processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines);
    return /* @__PURE__ */ jsx(PreTag, {
      ...preProps,
      children: /* @__PURE__ */ jsxs(CodeTag, {
        ...codeTagProps,
        children: [!showInlineLineNumbers && allLineNumbers, renderer({
          rows,
          stylesheet: style,
          useInlineStyles
        })]
      })
    });
  };
}
const supportedLanguages = ["abap", "abnf", "actionscript", "ada", "agda", "al", "antlr4", "apacheconf", "apex", "apl", "applescript", "aql", "arduino", "arff", "asciidoc", "asm6502", "asmatmel", "aspnet", "autohotkey", "autoit", "avisynth", "avro-idl", "bash", "basic", "batch", "bbcode", "bicep", "birb", "bison", "bnf", "brainfuck", "brightscript", "bro", "bsl", "c", "cfscript", "chaiscript", "cil", "clike", "clojure", "cmake", "cobol", "coffeescript", "concurnas", "coq", "cpp", "crystal", "csharp", "cshtml", "csp", "css-extras", "css", "csv", "cypher", "d", "dart", "dataweave", "dax", "dhall", "diff", "django", "dns-zone-file", "docker", "dot", "ebnf", "editorconfig", "eiffel", "ejs", "elixir", "elm", "erb", "erlang", "etlua", "excel-formula", "factor", "false", "firestore-security-rules", "flow", "fortran", "fsharp", "ftl", "gap", "gcode", "gdscript", "gedcom", "gherkin", "git", "glsl", "gml", "gn", "go-module", "go", "graphql", "groovy", "haml", "handlebars", "haskell", "haxe", "hcl", "hlsl", "hoon", "hpkp", "hsts", "http", "ichigojam", "icon", "icu-message-format", "idris", "iecst", "ignore", "inform7", "ini", "io", "j", "java", "javadoc", "javadoclike", "javascript", "javastacktrace", "jexl", "jolie", "jq", "js-extras", "js-templates", "jsdoc", "json", "json5", "jsonp", "jsstacktrace", "jsx", "julia", "keepalived", "keyman", "kotlin", "kumir", "kusto", "latex", "latte", "less", "lilypond", "liquid", "lisp", "livescript", "llvm", "log", "lolcode", "lua", "magma", "makefile", "markdown", "markup-templating", "markup", "matlab", "maxscript", "mel", "mermaid", "mizar", "mongodb", "monkey", "moonscript", "n1ql", "n4js", "nand2tetris-hdl", "naniscript", "nasm", "neon", "nevod", "nginx", "nim", "nix", "nsis", "objectivec", "ocaml", "opencl", "openqasm", "oz", "parigp", "parser", "pascal", "pascaligo", "pcaxis", "peoplecode", "perl", "php-extras", "php", "phpdoc", "plsql", "powerquery", "powershell", "processing", "prolog", "promql", "properties", "protobuf", "psl", "pug", "puppet", "pure", "purebasic", "purescript", "python", "q", "qml", "qore", "qsharp", "r", "racket", "reason", "regex", "rego", "renpy", "rest", "rip", "roboconf", "robotframework", "ruby", "rust", "sas", "sass", "scala", "scheme", "scss", "shell-session", "smali", "smalltalk", "smarty", "sml", "solidity", "solution-file", "soy", "sparql", "splunk-spl", "sqf", "sql", "squirrel", "stan", "stylus", "swift", "systemd", "t4-cs", "t4-templating", "t4-vb", "tap", "tcl", "textile", "toml", "tremor", "tsx", "tt2", "turtle", "twig", "typescript", "typoscript", "unrealscript", "uorazor", "uri", "v", "vala", "vbnet", "velocity", "verilog", "vhdl", "vim", "visual-basic", "warpscript", "wasm", "web-idl", "wiki", "wolfram", "wren", "xeora", "xml-doc", "xojo", "xquery", "yaml", "yang", "zig"];
const defaultStyle = {
  'code[class*="language-"]': {
    "color": "black",
    "background": "none",
    "textShadow": "0 1px white",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "fontSize": "1em",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  'pre[class*="language-"]': {
    "color": "black",
    "background": "#f5f2f0",
    "textShadow": "0 1px white",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "fontSize": "1em",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto"
  },
  'pre[class*="language-"]::-moz-selection': {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  'pre[class*="language-"] ::-moz-selection': {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  'code[class*="language-"]::-moz-selection': {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  'code[class*="language-"] ::-moz-selection': {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  'pre[class*="language-"]::selection': {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  'pre[class*="language-"] ::selection': {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  'code[class*="language-"]::selection': {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  'code[class*="language-"] ::selection': {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  ':not(pre) > code[class*="language-"]': {
    "background": "#f5f2f0",
    "padding": ".1em",
    "borderRadius": ".3em",
    "whiteSpace": "normal"
  },
  "comment": {
    "color": "slategray"
  },
  "prolog": {
    "color": "slategray"
  },
  "doctype": {
    "color": "slategray"
  },
  "cdata": {
    "color": "slategray"
  },
  "punctuation": {
    "color": "#999"
  },
  "namespace": {
    "Opacity": ".7"
  },
  "property": {
    "color": "#905"
  },
  "tag": {
    "color": "#905"
  },
  "boolean": {
    "color": "#905"
  },
  "number": {
    "color": "#905"
  },
  "constant": {
    "color": "#905"
  },
  "symbol": {
    "color": "#905"
  },
  "deleted": {
    "color": "#905"
  },
  "selector": {
    "color": "#690"
  },
  "attr-name": {
    "color": "#690"
  },
  "string": {
    "color": "#690"
  },
  "char": {
    "color": "#690"
  },
  "builtin": {
    "color": "#690"
  },
  "inserted": {
    "color": "#690"
  },
  "operator": {
    "color": "#9a6e3a",
    "background": "hsla(0, 0%, 100%, .5)"
  },
  "entity": {
    "color": "#9a6e3a",
    "background": "hsla(0, 0%, 100%, .5)",
    "cursor": "help"
  },
  "url": {
    "color": "#9a6e3a",
    "background": "hsla(0, 0%, 100%, .5)"
  },
  ".language-css .token.string": {
    "color": "#9a6e3a",
    "background": "hsla(0, 0%, 100%, .5)"
  },
  ".style .token.string": {
    "color": "#9a6e3a",
    "background": "hsla(0, 0%, 100%, .5)"
  },
  "atrule": {
    "color": "#07a"
  },
  "attr-value": {
    "color": "#07a"
  },
  "keyword": {
    "color": "#07a"
  },
  "function": {
    "color": "#DD4A68"
  },
  "class-name": {
    "color": "#DD4A68"
  },
  "regex": {
    "color": "#e90"
  },
  "important": {
    "color": "#e90",
    "fontWeight": "bold"
  },
  "variable": {
    "color": "#e90"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  }
};
var highlighter = highlight(refractor, defaultStyle);
highlighter.supportedLanguages = supportedLanguages;
const SyntaxHighlighter = highlighter;
var prism$1 = {};
var coy = {};
var hasRequiredCoy;
function requireCoy() {
  if (hasRequiredCoy)
    return coy;
  hasRequiredCoy = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "black",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "maxHeight": "inherit",
        "height": "inherit",
        "padding": "0 1em",
        "display": "block",
        "overflow": "auto"
      },
      'pre[class*="language-"]': {
        "color": "black",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "position": "relative",
        "margin": ".5em 0",
        "overflow": "visible",
        "padding": "1px",
        "backgroundColor": "#fdfdfd",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "marginBottom": "1em"
      },
      'pre[class*="language-"] > code': {
        "position": "relative",
        "zIndex": "1",
        "borderLeft": "10px solid #358ccb",
        "boxShadow": "-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf",
        "backgroundColor": "#fdfdfd",
        "backgroundImage": "linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)",
        "backgroundSize": "3em 3em",
        "backgroundOrigin": "content-box",
        "backgroundAttachment": "local"
      },
      ':not(pre) > code[class*="language-"]': {
        "backgroundColor": "#fdfdfd",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "marginBottom": "1em",
        "position": "relative",
        "padding": ".2em",
        "borderRadius": "0.3em",
        "color": "#c92c2c",
        "border": "1px solid rgba(0, 0, 0, 0.1)",
        "display": "inline",
        "whiteSpace": "normal"
      },
      'pre[class*="language-"]:before': {
        "content": "''",
        "display": "block",
        "position": "absolute",
        "bottom": "0.75em",
        "left": "0.18em",
        "width": "40%",
        "height": "20%",
        "maxHeight": "13em",
        "boxShadow": "0px 13px 8px #979797",
        "WebkitTransform": "rotate(-2deg)",
        "MozTransform": "rotate(-2deg)",
        "msTransform": "rotate(-2deg)",
        "OTransform": "rotate(-2deg)",
        "transform": "rotate(-2deg)"
      },
      'pre[class*="language-"]:after': {
        "content": "''",
        "display": "block",
        "position": "absolute",
        "bottom": "0.75em",
        "left": "auto",
        "width": "40%",
        "height": "20%",
        "maxHeight": "13em",
        "boxShadow": "0px 13px 8px #979797",
        "WebkitTransform": "rotate(2deg)",
        "MozTransform": "rotate(2deg)",
        "msTransform": "rotate(2deg)",
        "OTransform": "rotate(2deg)",
        "transform": "rotate(2deg)",
        "right": "0.75em"
      },
      "comment": {
        "color": "#7D8B99"
      },
      "block-comment": {
        "color": "#7D8B99"
      },
      "prolog": {
        "color": "#7D8B99"
      },
      "doctype": {
        "color": "#7D8B99"
      },
      "cdata": {
        "color": "#7D8B99"
      },
      "punctuation": {
        "color": "#5F6364"
      },
      "property": {
        "color": "#c92c2c"
      },
      "tag": {
        "color": "#c92c2c"
      },
      "boolean": {
        "color": "#c92c2c"
      },
      "number": {
        "color": "#c92c2c"
      },
      "function-name": {
        "color": "#c92c2c"
      },
      "constant": {
        "color": "#c92c2c"
      },
      "symbol": {
        "color": "#c92c2c"
      },
      "deleted": {
        "color": "#c92c2c"
      },
      "selector": {
        "color": "#2f9c0a"
      },
      "attr-name": {
        "color": "#2f9c0a"
      },
      "string": {
        "color": "#2f9c0a"
      },
      "char": {
        "color": "#2f9c0a"
      },
      "function": {
        "color": "#2f9c0a"
      },
      "builtin": {
        "color": "#2f9c0a"
      },
      "inserted": {
        "color": "#2f9c0a"
      },
      "operator": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
      },
      "entity": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)",
        "cursor": "help"
      },
      "url": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
      },
      "variable": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
      },
      "atrule": {
        "color": "#1990b8"
      },
      "attr-value": {
        "color": "#1990b8"
      },
      "keyword": {
        "color": "#1990b8"
      },
      "class-name": {
        "color": "#1990b8"
      },
      "regex": {
        "color": "#e90"
      },
      "important": {
        "color": "#e90",
        "fontWeight": "normal"
      },
      ".language-css .token.string": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
      },
      ".style .token.string": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "namespace": {
        "Opacity": ".7"
      },
      'pre[class*="language-"].line-numbers.line-numbers': {
        "paddingLeft": "0"
      },
      'pre[class*="language-"].line-numbers.line-numbers code': {
        "paddingLeft": "3.8em"
      },
      'pre[class*="language-"].line-numbers.line-numbers .line-numbers-rows': {
        "left": "0"
      },
      'pre[class*="language-"][data-line]': {
        "paddingTop": "0",
        "paddingBottom": "0",
        "paddingLeft": "0"
      },
      "pre[data-line] code": {
        "position": "relative",
        "paddingLeft": "4em"
      },
      "pre .line-highlight": {
        "marginTop": "0"
      }
    };
  })(coy);
  return coy;
}
var dark = {};
var hasRequiredDark;
function requireDark() {
  if (hasRequiredDark)
    return dark;
  hasRequiredDark = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "white",
        "background": "none",
        "textShadow": "0 -.1em .2em black",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "white",
        "background": "hsl(30, 20%, 25%)",
        "textShadow": "0 -.1em .2em black",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "border": ".3em solid hsl(30, 20%, 40%)",
        "borderRadius": ".5em",
        "boxShadow": "1px 1px .5em black inset"
      },
      ':not(pre) > code[class*="language-"]': {
        "background": "hsl(30, 20%, 25%)",
        "padding": ".15em .2em .05em",
        "borderRadius": ".3em",
        "border": ".13em solid hsl(30, 20%, 40%)",
        "boxShadow": "1px 1px .3em -.1em black inset",
        "whiteSpace": "normal"
      },
      "comment": {
        "color": "hsl(30, 20%, 50%)"
      },
      "prolog": {
        "color": "hsl(30, 20%, 50%)"
      },
      "doctype": {
        "color": "hsl(30, 20%, 50%)"
      },
      "cdata": {
        "color": "hsl(30, 20%, 50%)"
      },
      "punctuation": {
        "Opacity": ".7"
      },
      "namespace": {
        "Opacity": ".7"
      },
      "property": {
        "color": "hsl(350, 40%, 70%)"
      },
      "tag": {
        "color": "hsl(350, 40%, 70%)"
      },
      "boolean": {
        "color": "hsl(350, 40%, 70%)"
      },
      "number": {
        "color": "hsl(350, 40%, 70%)"
      },
      "constant": {
        "color": "hsl(350, 40%, 70%)"
      },
      "symbol": {
        "color": "hsl(350, 40%, 70%)"
      },
      "selector": {
        "color": "hsl(75, 70%, 60%)"
      },
      "attr-name": {
        "color": "hsl(75, 70%, 60%)"
      },
      "string": {
        "color": "hsl(75, 70%, 60%)"
      },
      "char": {
        "color": "hsl(75, 70%, 60%)"
      },
      "builtin": {
        "color": "hsl(75, 70%, 60%)"
      },
      "inserted": {
        "color": "hsl(75, 70%, 60%)"
      },
      "operator": {
        "color": "hsl(40, 90%, 60%)"
      },
      "entity": {
        "color": "hsl(40, 90%, 60%)",
        "cursor": "help"
      },
      "url": {
        "color": "hsl(40, 90%, 60%)"
      },
      ".language-css .token.string": {
        "color": "hsl(40, 90%, 60%)"
      },
      ".style .token.string": {
        "color": "hsl(40, 90%, 60%)"
      },
      "variable": {
        "color": "hsl(40, 90%, 60%)"
      },
      "atrule": {
        "color": "hsl(350, 40%, 70%)"
      },
      "attr-value": {
        "color": "hsl(350, 40%, 70%)"
      },
      "keyword": {
        "color": "hsl(350, 40%, 70%)"
      },
      "regex": {
        "color": "#e90"
      },
      "important": {
        "color": "#e90",
        "fontWeight": "bold"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "deleted": {
        "color": "red"
      }
    };
  })(dark);
  return dark;
}
var funky = {};
var hasRequiredFunky;
function requireFunky() {
  if (hasRequiredFunky)
    return funky;
  hasRequiredFunky = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "black",
        "color": "white",
        "boxShadow": "-.3em 0 0 .3em black, .3em 0 0 .3em black"
      },
      'pre[class*="language-"]': {
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": ".4em .8em",
        "margin": ".5em 0",
        "overflow": "auto",
        "background": `url('data:image/svg+xml;charset=utf-8,<svg%20version%3D"1.1"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"100"%20height%3D"100"%20fill%3D"rgba(0%2C0%2C0%2C.2)">%0D%0A<polygon%20points%3D"0%2C50%2050%2C0%200%2C0"%20%2F>%0D%0A<polygon%20points%3D"0%2C100%2050%2C100%20100%2C50%20100%2C0"%20%2F>%0D%0A<%2Fsvg>')`,
        "backgroundSize": "1em 1em"
      },
      ':not(pre) > code[class*="language-"]': {
        "padding": ".2em",
        "borderRadius": ".3em",
        "boxShadow": "none",
        "whiteSpace": "normal"
      },
      "comment": {
        "color": "#aaa"
      },
      "prolog": {
        "color": "#aaa"
      },
      "doctype": {
        "color": "#aaa"
      },
      "cdata": {
        "color": "#aaa"
      },
      "punctuation": {
        "color": "#999"
      },
      "namespace": {
        "Opacity": ".7"
      },
      "property": {
        "color": "#0cf"
      },
      "tag": {
        "color": "#0cf"
      },
      "boolean": {
        "color": "#0cf"
      },
      "number": {
        "color": "#0cf"
      },
      "constant": {
        "color": "#0cf"
      },
      "symbol": {
        "color": "#0cf"
      },
      "selector": {
        "color": "yellow"
      },
      "attr-name": {
        "color": "yellow"
      },
      "string": {
        "color": "yellow"
      },
      "char": {
        "color": "yellow"
      },
      "builtin": {
        "color": "yellow"
      },
      "operator": {
        "color": "yellowgreen"
      },
      "entity": {
        "color": "yellowgreen",
        "cursor": "help"
      },
      "url": {
        "color": "yellowgreen"
      },
      ".language-css .token.string": {
        "color": "yellowgreen"
      },
      "variable": {
        "color": "yellowgreen"
      },
      "inserted": {
        "color": "yellowgreen"
      },
      "atrule": {
        "color": "deeppink"
      },
      "attr-value": {
        "color": "deeppink"
      },
      "keyword": {
        "color": "deeppink"
      },
      "regex": {
        "color": "orange"
      },
      "important": {
        "color": "orange",
        "fontWeight": "bold"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "deleted": {
        "color": "red"
      },
      "pre.diff-highlight.diff-highlight > code .token.deleted:not(.prefix)": {
        "backgroundColor": "rgba(255, 0, 0, .3)",
        "display": "inline"
      },
      "pre > code.diff-highlight.diff-highlight .token.deleted:not(.prefix)": {
        "backgroundColor": "rgba(255, 0, 0, .3)",
        "display": "inline"
      },
      "pre.diff-highlight.diff-highlight > code .token.inserted:not(.prefix)": {
        "backgroundColor": "rgba(0, 255, 128, .3)",
        "display": "inline"
      },
      "pre > code.diff-highlight.diff-highlight .token.inserted:not(.prefix)": {
        "backgroundColor": "rgba(0, 255, 128, .3)",
        "display": "inline"
      }
    };
  })(funky);
  return funky;
}
var okaidia = {};
var hasRequiredOkaidia;
function requireOkaidia() {
  if (hasRequiredOkaidia)
    return okaidia;
  hasRequiredOkaidia = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "#f8f8f2",
        "background": "none",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "#f8f8f2",
        "background": "#272822",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em"
      },
      ':not(pre) > code[class*="language-"]': {
        "background": "#272822",
        "padding": ".1em",
        "borderRadius": ".3em",
        "whiteSpace": "normal"
      },
      "comment": {
        "color": "#8292a2"
      },
      "prolog": {
        "color": "#8292a2"
      },
      "doctype": {
        "color": "#8292a2"
      },
      "cdata": {
        "color": "#8292a2"
      },
      "punctuation": {
        "color": "#f8f8f2"
      },
      "namespace": {
        "Opacity": ".7"
      },
      "property": {
        "color": "#f92672"
      },
      "tag": {
        "color": "#f92672"
      },
      "constant": {
        "color": "#f92672"
      },
      "symbol": {
        "color": "#f92672"
      },
      "deleted": {
        "color": "#f92672"
      },
      "boolean": {
        "color": "#ae81ff"
      },
      "number": {
        "color": "#ae81ff"
      },
      "selector": {
        "color": "#a6e22e"
      },
      "attr-name": {
        "color": "#a6e22e"
      },
      "string": {
        "color": "#a6e22e"
      },
      "char": {
        "color": "#a6e22e"
      },
      "builtin": {
        "color": "#a6e22e"
      },
      "inserted": {
        "color": "#a6e22e"
      },
      "operator": {
        "color": "#f8f8f2"
      },
      "entity": {
        "color": "#f8f8f2",
        "cursor": "help"
      },
      "url": {
        "color": "#f8f8f2"
      },
      ".language-css .token.string": {
        "color": "#f8f8f2"
      },
      ".style .token.string": {
        "color": "#f8f8f2"
      },
      "variable": {
        "color": "#f8f8f2"
      },
      "atrule": {
        "color": "#e6db74"
      },
      "attr-value": {
        "color": "#e6db74"
      },
      "function": {
        "color": "#e6db74"
      },
      "class-name": {
        "color": "#e6db74"
      },
      "keyword": {
        "color": "#66d9ef"
      },
      "regex": {
        "color": "#fd971f"
      },
      "important": {
        "color": "#fd971f",
        "fontWeight": "bold"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      }
    };
  })(okaidia);
  return okaidia;
}
var solarizedlight = {};
var hasRequiredSolarizedlight;
function requireSolarizedlight() {
  if (hasRequiredSolarizedlight)
    return solarizedlight;
  hasRequiredSolarizedlight = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "#657b83",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "#657b83",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em",
        "backgroundColor": "#fdf6e3"
      },
      'pre[class*="language-"]::-moz-selection': {
        "background": "#073642"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "background": "#073642"
      },
      'code[class*="language-"]::-moz-selection': {
        "background": "#073642"
      },
      'code[class*="language-"] ::-moz-selection': {
        "background": "#073642"
      },
      'pre[class*="language-"]::selection': {
        "background": "#073642"
      },
      'pre[class*="language-"] ::selection': {
        "background": "#073642"
      },
      'code[class*="language-"]::selection': {
        "background": "#073642"
      },
      'code[class*="language-"] ::selection': {
        "background": "#073642"
      },
      ':not(pre) > code[class*="language-"]': {
        "backgroundColor": "#fdf6e3",
        "padding": ".1em",
        "borderRadius": ".3em"
      },
      "comment": {
        "color": "#93a1a1"
      },
      "prolog": {
        "color": "#93a1a1"
      },
      "doctype": {
        "color": "#93a1a1"
      },
      "cdata": {
        "color": "#93a1a1"
      },
      "punctuation": {
        "color": "#586e75"
      },
      "namespace": {
        "Opacity": ".7"
      },
      "property": {
        "color": "#268bd2"
      },
      "tag": {
        "color": "#268bd2"
      },
      "boolean": {
        "color": "#268bd2"
      },
      "number": {
        "color": "#268bd2"
      },
      "constant": {
        "color": "#268bd2"
      },
      "symbol": {
        "color": "#268bd2"
      },
      "deleted": {
        "color": "#268bd2"
      },
      "selector": {
        "color": "#2aa198"
      },
      "attr-name": {
        "color": "#2aa198"
      },
      "string": {
        "color": "#2aa198"
      },
      "char": {
        "color": "#2aa198"
      },
      "builtin": {
        "color": "#2aa198"
      },
      "url": {
        "color": "#2aa198"
      },
      "inserted": {
        "color": "#2aa198"
      },
      "entity": {
        "color": "#657b83",
        "background": "#eee8d5",
        "cursor": "help"
      },
      "atrule": {
        "color": "#859900"
      },
      "attr-value": {
        "color": "#859900"
      },
      "keyword": {
        "color": "#859900"
      },
      "function": {
        "color": "#b58900"
      },
      "class-name": {
        "color": "#b58900"
      },
      "regex": {
        "color": "#cb4b16"
      },
      "important": {
        "color": "#cb4b16",
        "fontWeight": "bold"
      },
      "variable": {
        "color": "#cb4b16"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      }
    };
  })(solarizedlight);
  return solarizedlight;
}
var tomorrow = {};
var hasRequiredTomorrow;
function requireTomorrow() {
  if (hasRequiredTomorrow)
    return tomorrow;
  hasRequiredTomorrow = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "#ccc",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "#ccc",
        "background": "#2d2d2d",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
      },
      ':not(pre) > code[class*="language-"]': {
        "background": "#2d2d2d",
        "padding": ".1em",
        "borderRadius": ".3em",
        "whiteSpace": "normal"
      },
      "comment": {
        "color": "#999"
      },
      "block-comment": {
        "color": "#999"
      },
      "prolog": {
        "color": "#999"
      },
      "doctype": {
        "color": "#999"
      },
      "cdata": {
        "color": "#999"
      },
      "punctuation": {
        "color": "#ccc"
      },
      "tag": {
        "color": "#e2777a"
      },
      "attr-name": {
        "color": "#e2777a"
      },
      "namespace": {
        "color": "#e2777a"
      },
      "deleted": {
        "color": "#e2777a"
      },
      "function-name": {
        "color": "#6196cc"
      },
      "boolean": {
        "color": "#f08d49"
      },
      "number": {
        "color": "#f08d49"
      },
      "function": {
        "color": "#f08d49"
      },
      "property": {
        "color": "#f8c555"
      },
      "class-name": {
        "color": "#f8c555"
      },
      "constant": {
        "color": "#f8c555"
      },
      "symbol": {
        "color": "#f8c555"
      },
      "selector": {
        "color": "#cc99cd"
      },
      "important": {
        "color": "#cc99cd",
        "fontWeight": "bold"
      },
      "atrule": {
        "color": "#cc99cd"
      },
      "keyword": {
        "color": "#cc99cd"
      },
      "builtin": {
        "color": "#cc99cd"
      },
      "string": {
        "color": "#7ec699"
      },
      "char": {
        "color": "#7ec699"
      },
      "attr-value": {
        "color": "#7ec699"
      },
      "regex": {
        "color": "#7ec699"
      },
      "variable": {
        "color": "#7ec699"
      },
      "operator": {
        "color": "#67cdcc"
      },
      "entity": {
        "color": "#67cdcc",
        "cursor": "help"
      },
      "url": {
        "color": "#67cdcc"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "inserted": {
        "color": "green"
      }
    };
  })(tomorrow);
  return tomorrow;
}
var twilight = {};
var hasRequiredTwilight;
function requireTwilight() {
  if (hasRequiredTwilight)
    return twilight;
  hasRequiredTwilight = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "white",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "textShadow": "0 -.1em .2em black",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "white",
        "background": "hsl(0, 0%, 8%)",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "textShadow": "0 -.1em .2em black",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "borderRadius": ".5em",
        "border": ".3em solid hsl(0, 0%, 33%)",
        "boxShadow": "1px 1px .5em black inset",
        "margin": ".5em 0",
        "overflow": "auto",
        "padding": "1em"
      },
      ':not(pre) > code[class*="language-"]': {
        "background": "hsl(0, 0%, 8%)",
        "borderRadius": ".3em",
        "border": ".13em solid hsl(0, 0%, 33%)",
        "boxShadow": "1px 1px .3em -.1em black inset",
        "padding": ".15em .2em .05em",
        "whiteSpace": "normal"
      },
      'pre[class*="language-"]::-moz-selection': {
        "background": "hsla(0, 0%, 93%, 0.15)",
        "textShadow": "none"
      },
      'pre[class*="language-"]::selection': {
        "background": "hsla(0, 0%, 93%, 0.15)",
        "textShadow": "none"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "hsla(0, 0%, 93%, 0.15)"
      },
      'code[class*="language-"]::-moz-selection': {
        "textShadow": "none",
        "background": "hsla(0, 0%, 93%, 0.15)"
      },
      'code[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "hsla(0, 0%, 93%, 0.15)"
      },
      'pre[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "hsla(0, 0%, 93%, 0.15)"
      },
      'code[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "hsla(0, 0%, 93%, 0.15)"
      },
      'code[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "hsla(0, 0%, 93%, 0.15)"
      },
      "comment": {
        "color": "hsl(0, 0%, 47%)"
      },
      "prolog": {
        "color": "hsl(0, 0%, 47%)"
      },
      "doctype": {
        "color": "hsl(0, 0%, 47%)"
      },
      "cdata": {
        "color": "hsl(0, 0%, 47%)"
      },
      "punctuation": {
        "Opacity": ".7"
      },
      "namespace": {
        "Opacity": ".7"
      },
      "tag": {
        "color": "hsl(14, 58%, 55%)"
      },
      "boolean": {
        "color": "hsl(14, 58%, 55%)"
      },
      "number": {
        "color": "hsl(14, 58%, 55%)"
      },
      "deleted": {
        "color": "hsl(14, 58%, 55%)"
      },
      "keyword": {
        "color": "hsl(53, 89%, 79%)"
      },
      "property": {
        "color": "hsl(53, 89%, 79%)"
      },
      "selector": {
        "color": "hsl(53, 89%, 79%)"
      },
      "constant": {
        "color": "hsl(53, 89%, 79%)"
      },
      "symbol": {
        "color": "hsl(53, 89%, 79%)"
      },
      "builtin": {
        "color": "hsl(53, 89%, 79%)"
      },
      "attr-name": {
        "color": "hsl(76, 21%, 52%)"
      },
      "attr-value": {
        "color": "hsl(76, 21%, 52%)"
      },
      "string": {
        "color": "hsl(76, 21%, 52%)"
      },
      "char": {
        "color": "hsl(76, 21%, 52%)"
      },
      "operator": {
        "color": "hsl(76, 21%, 52%)"
      },
      "entity": {
        "color": "hsl(76, 21%, 52%)",
        "cursor": "help"
      },
      "url": {
        "color": "hsl(76, 21%, 52%)"
      },
      ".language-css .token.string": {
        "color": "hsl(76, 21%, 52%)"
      },
      ".style .token.string": {
        "color": "hsl(76, 21%, 52%)"
      },
      "variable": {
        "color": "hsl(76, 21%, 52%)"
      },
      "inserted": {
        "color": "hsl(76, 21%, 52%)"
      },
      "atrule": {
        "color": "hsl(218, 22%, 55%)"
      },
      "regex": {
        "color": "hsl(42, 75%, 65%)"
      },
      "important": {
        "color": "hsl(42, 75%, 65%)",
        "fontWeight": "bold"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      },
      ".language-markup .token.tag": {
        "color": "hsl(33, 33%, 52%)"
      },
      ".language-markup .token.attr-name": {
        "color": "hsl(33, 33%, 52%)"
      },
      ".language-markup .token.punctuation": {
        "color": "hsl(33, 33%, 52%)"
      },
      "": {
        "position": "relative",
        "zIndex": "1"
      },
      ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0))",
        "borderBottom": "1px dashed hsl(0, 0%, 33%)",
        "borderTop": "1px dashed hsl(0, 0%, 33%)",
        "marginTop": "0.75em",
        "zIndex": "0"
      },
      ".line-highlight.line-highlight:before": {
        "backgroundColor": "hsl(215, 15%, 59%)",
        "color": "hsl(24, 20%, 95%)"
      },
      ".line-highlight.line-highlight[data-end]:after": {
        "backgroundColor": "hsl(215, 15%, 59%)",
        "color": "hsl(24, 20%, 95%)"
      }
    };
  })(twilight);
  return twilight;
}
var prism = {};
var hasRequiredPrism;
function requirePrism() {
  if (hasRequiredPrism)
    return prism;
  hasRequiredPrism = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "black",
        "background": "none",
        "textShadow": "0 1px white",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "black",
        "background": "#f5f2f0",
        "textShadow": "0 1px white",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
      },
      'pre[class*="language-"]::-moz-selection': {
        "textShadow": "none",
        "background": "#b3d4fc"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "#b3d4fc"
      },
      'code[class*="language-"]::-moz-selection': {
        "textShadow": "none",
        "background": "#b3d4fc"
      },
      'code[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "#b3d4fc"
      },
      'pre[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "#b3d4fc"
      },
      'pre[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "#b3d4fc"
      },
      'code[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "#b3d4fc"
      },
      'code[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "#b3d4fc"
      },
      ':not(pre) > code[class*="language-"]': {
        "background": "#f5f2f0",
        "padding": ".1em",
        "borderRadius": ".3em",
        "whiteSpace": "normal"
      },
      "comment": {
        "color": "slategray"
      },
      "prolog": {
        "color": "slategray"
      },
      "doctype": {
        "color": "slategray"
      },
      "cdata": {
        "color": "slategray"
      },
      "punctuation": {
        "color": "#999"
      },
      "namespace": {
        "Opacity": ".7"
      },
      "property": {
        "color": "#905"
      },
      "tag": {
        "color": "#905"
      },
      "boolean": {
        "color": "#905"
      },
      "number": {
        "color": "#905"
      },
      "constant": {
        "color": "#905"
      },
      "symbol": {
        "color": "#905"
      },
      "deleted": {
        "color": "#905"
      },
      "selector": {
        "color": "#690"
      },
      "attr-name": {
        "color": "#690"
      },
      "string": {
        "color": "#690"
      },
      "char": {
        "color": "#690"
      },
      "builtin": {
        "color": "#690"
      },
      "inserted": {
        "color": "#690"
      },
      "operator": {
        "color": "#9a6e3a",
        "background": "hsla(0, 0%, 100%, .5)"
      },
      "entity": {
        "color": "#9a6e3a",
        "background": "hsla(0, 0%, 100%, .5)",
        "cursor": "help"
      },
      "url": {
        "color": "#9a6e3a",
        "background": "hsla(0, 0%, 100%, .5)"
      },
      ".language-css .token.string": {
        "color": "#9a6e3a",
        "background": "hsla(0, 0%, 100%, .5)"
      },
      ".style .token.string": {
        "color": "#9a6e3a",
        "background": "hsla(0, 0%, 100%, .5)"
      },
      "atrule": {
        "color": "#07a"
      },
      "attr-value": {
        "color": "#07a"
      },
      "keyword": {
        "color": "#07a"
      },
      "function": {
        "color": "#DD4A68"
      },
      "class-name": {
        "color": "#DD4A68"
      },
      "regex": {
        "color": "#e90"
      },
      "important": {
        "color": "#e90",
        "fontWeight": "bold"
      },
      "variable": {
        "color": "#e90"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      }
    };
  })(prism);
  return prism;
}
var a11yDark = {};
var hasRequiredA11yDark;
function requireA11yDark() {
  if (hasRequiredA11yDark)
    return a11yDark;
  hasRequiredA11yDark = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "#f8f8f2",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "#f8f8f2",
        "background": "#2b2b2b",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": "0.5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em"
      },
      ':not(pre) > code[class*="language-"]': {
        "background": "#2b2b2b",
        "padding": "0.1em",
        "borderRadius": "0.3em",
        "whiteSpace": "normal"
      },
      "comment": {
        "color": "#d4d0ab"
      },
      "prolog": {
        "color": "#d4d0ab"
      },
      "doctype": {
        "color": "#d4d0ab"
      },
      "cdata": {
        "color": "#d4d0ab"
      },
      "punctuation": {
        "color": "#fefefe"
      },
      "property": {
        "color": "#ffa07a"
      },
      "tag": {
        "color": "#ffa07a"
      },
      "constant": {
        "color": "#ffa07a"
      },
      "symbol": {
        "color": "#ffa07a"
      },
      "deleted": {
        "color": "#ffa07a"
      },
      "boolean": {
        "color": "#00e0e0"
      },
      "number": {
        "color": "#00e0e0"
      },
      "selector": {
        "color": "#abe338"
      },
      "attr-name": {
        "color": "#abe338"
      },
      "string": {
        "color": "#abe338"
      },
      "char": {
        "color": "#abe338"
      },
      "builtin": {
        "color": "#abe338"
      },
      "inserted": {
        "color": "#abe338"
      },
      "operator": {
        "color": "#00e0e0"
      },
      "entity": {
        "color": "#00e0e0",
        "cursor": "help"
      },
      "url": {
        "color": "#00e0e0"
      },
      ".language-css .token.string": {
        "color": "#00e0e0"
      },
      ".style .token.string": {
        "color": "#00e0e0"
      },
      "variable": {
        "color": "#00e0e0"
      },
      "atrule": {
        "color": "#ffd700"
      },
      "attr-value": {
        "color": "#ffd700"
      },
      "function": {
        "color": "#ffd700"
      },
      "keyword": {
        "color": "#00e0e0"
      },
      "regex": {
        "color": "#ffd700"
      },
      "important": {
        "color": "#ffd700",
        "fontWeight": "bold"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      }
    };
  })(a11yDark);
  return a11yDark;
}
var atomDark = {};
var hasRequiredAtomDark;
function requireAtomDark() {
  if (hasRequiredAtomDark)
    return atomDark;
  hasRequiredAtomDark = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "#c5c8c6",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "#c5c8c6",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em",
        "background": "#1d1f21"
      },
      ':not(pre) > code[class*="language-"]': {
        "background": "#1d1f21",
        "padding": ".1em",
        "borderRadius": ".3em"
      },
      "comment": {
        "color": "#7C7C7C"
      },
      "prolog": {
        "color": "#7C7C7C"
      },
      "doctype": {
        "color": "#7C7C7C"
      },
      "cdata": {
        "color": "#7C7C7C"
      },
      "punctuation": {
        "color": "#c5c8c6"
      },
      ".namespace": {
        "Opacity": ".7"
      },
      "property": {
        "color": "#96CBFE"
      },
      "keyword": {
        "color": "#96CBFE"
      },
      "tag": {
        "color": "#96CBFE"
      },
      "class-name": {
        "color": "#FFFFB6",
        "textDecoration": "underline"
      },
      "boolean": {
        "color": "#99CC99"
      },
      "constant": {
        "color": "#99CC99"
      },
      "symbol": {
        "color": "#f92672"
      },
      "deleted": {
        "color": "#f92672"
      },
      "number": {
        "color": "#FF73FD"
      },
      "selector": {
        "color": "#A8FF60"
      },
      "attr-name": {
        "color": "#A8FF60"
      },
      "string": {
        "color": "#A8FF60"
      },
      "char": {
        "color": "#A8FF60"
      },
      "builtin": {
        "color": "#A8FF60"
      },
      "inserted": {
        "color": "#A8FF60"
      },
      "variable": {
        "color": "#C6C5FE"
      },
      "operator": {
        "color": "#EDEDED"
      },
      "entity": {
        "color": "#FFFFB6",
        "cursor": "help"
      },
      "url": {
        "color": "#96CBFE"
      },
      ".language-css .token.string": {
        "color": "#87C38A"
      },
      ".style .token.string": {
        "color": "#87C38A"
      },
      "atrule": {
        "color": "#F9EE98"
      },
      "attr-value": {
        "color": "#F9EE98"
      },
      "function": {
        "color": "#DAD085"
      },
      "regex": {
        "color": "#E9C062"
      },
      "important": {
        "color": "#fd971f",
        "fontWeight": "bold"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      }
    };
  })(atomDark);
  return atomDark;
}
var base16Ateliersulphurpool_light = {};
var hasRequiredBase16Ateliersulphurpool_light;
function requireBase16Ateliersulphurpool_light() {
  if (hasRequiredBase16Ateliersulphurpool_light)
    return base16Ateliersulphurpool_light;
  hasRequiredBase16Ateliersulphurpool_light = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "fontFamily": 'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#f5f7ff",
        "color": "#5e6687"
      },
      'pre[class*="language-"]': {
        "fontFamily": 'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#f5f7ff",
        "color": "#5e6687",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
      },
      'pre > code[class*="language-"]': {
        "fontSize": "1em"
      },
      'pre[class*="language-"]::-moz-selection': {
        "textShadow": "none",
        "background": "#dfe2f1"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "#dfe2f1"
      },
      'code[class*="language-"]::-moz-selection': {
        "textShadow": "none",
        "background": "#dfe2f1"
      },
      'code[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "#dfe2f1"
      },
      'pre[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "#dfe2f1"
      },
      'pre[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "#dfe2f1"
      },
      'code[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "#dfe2f1"
      },
      'code[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "#dfe2f1"
      },
      ':not(pre) > code[class*="language-"]': {
        "padding": ".1em",
        "borderRadius": ".3em"
      },
      "comment": {
        "color": "#898ea4"
      },
      "prolog": {
        "color": "#898ea4"
      },
      "doctype": {
        "color": "#898ea4"
      },
      "cdata": {
        "color": "#898ea4"
      },
      "punctuation": {
        "color": "#5e6687"
      },
      "namespace": {
        "Opacity": ".7"
      },
      "operator": {
        "color": "#c76b29"
      },
      "boolean": {
        "color": "#c76b29"
      },
      "number": {
        "color": "#c76b29"
      },
      "property": {
        "color": "#c08b30"
      },
      "tag": {
        "color": "#3d8fd1"
      },
      "string": {
        "color": "#22a2c9"
      },
      "selector": {
        "color": "#6679cc"
      },
      "attr-name": {
        "color": "#c76b29"
      },
      "entity": {
        "color": "#22a2c9",
        "cursor": "help"
      },
      "url": {
        "color": "#22a2c9"
      },
      ".language-css .token.string": {
        "color": "#22a2c9"
      },
      ".style .token.string": {
        "color": "#22a2c9"
      },
      "attr-value": {
        "color": "#ac9739"
      },
      "keyword": {
        "color": "#ac9739"
      },
      "control": {
        "color": "#ac9739"
      },
      "directive": {
        "color": "#ac9739"
      },
      "unit": {
        "color": "#ac9739"
      },
      "statement": {
        "color": "#22a2c9"
      },
      "regex": {
        "color": "#22a2c9"
      },
      "atrule": {
        "color": "#22a2c9"
      },
      "placeholder": {
        "color": "#3d8fd1"
      },
      "variable": {
        "color": "#3d8fd1"
      },
      "deleted": {
        "textDecoration": "line-through"
      },
      "inserted": {
        "borderBottom": "1px dotted #202746",
        "textDecoration": "none"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "important": {
        "fontWeight": "bold",
        "color": "#c94922"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "pre > code.highlight": {
        "Outline": "0.4em solid #c94922",
        "OutlineOffset": ".4em"
      },
      ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRightColor": "#dfe2f1"
      },
      ".line-numbers .line-numbers-rows > span:before": {
        "color": "#979db4"
      },
      ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0))"
      }
    };
  })(base16Ateliersulphurpool_light);
  return base16Ateliersulphurpool_light;
}
var cb = {};
var hasRequiredCb;
function requireCb() {
  if (hasRequiredCb)
    return cb;
  hasRequiredCb = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "#fff",
        "textShadow": "0 1px 1px #000",
        "fontFamily": 'Menlo, Monaco, "Courier New", monospace',
        "direction": "ltr",
        "textAlign": "left",
        "wordSpacing": "normal",
        "whiteSpace": "pre",
        "wordWrap": "normal",
        "lineHeight": "1.4",
        "background": "none",
        "border": "0",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "#fff",
        "textShadow": "0 1px 1px #000",
        "fontFamily": 'Menlo, Monaco, "Courier New", monospace',
        "direction": "ltr",
        "textAlign": "left",
        "wordSpacing": "normal",
        "whiteSpace": "pre",
        "wordWrap": "normal",
        "lineHeight": "1.4",
        "background": "#222",
        "border": "0",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "15px",
        "margin": "1em 0",
        "overflow": "auto",
        "MozBorderRadius": "8px",
        "WebkitBorderRadius": "8px",
        "borderRadius": "8px"
      },
      'pre[class*="language-"] code': {
        "float": "left",
        "padding": "0 15px 0 0"
      },
      ':not(pre) > code[class*="language-"]': {
        "background": "#222",
        "padding": "5px 10px",
        "lineHeight": "1",
        "MozBorderRadius": "3px",
        "WebkitBorderRadius": "3px",
        "borderRadius": "3px"
      },
      "comment": {
        "color": "#797979"
      },
      "prolog": {
        "color": "#797979"
      },
      "doctype": {
        "color": "#797979"
      },
      "cdata": {
        "color": "#797979"
      },
      "selector": {
        "color": "#fff"
      },
      "operator": {
        "color": "#fff"
      },
      "punctuation": {
        "color": "#fff"
      },
      "namespace": {
        "Opacity": ".7"
      },
      "tag": {
        "color": "#ffd893"
      },
      "boolean": {
        "color": "#ffd893"
      },
      "atrule": {
        "color": "#B0C975"
      },
      "attr-value": {
        "color": "#B0C975"
      },
      "hex": {
        "color": "#B0C975"
      },
      "string": {
        "color": "#B0C975"
      },
      "property": {
        "color": "#c27628"
      },
      "entity": {
        "color": "#c27628",
        "cursor": "help"
      },
      "url": {
        "color": "#c27628"
      },
      "attr-name": {
        "color": "#c27628"
      },
      "keyword": {
        "color": "#c27628"
      },
      "regex": {
        "color": "#9B71C6"
      },
      "function": {
        "color": "#e5a638"
      },
      "constant": {
        "color": "#e5a638"
      },
      "variable": {
        "color": "#fdfba8"
      },
      "number": {
        "color": "#8799B0"
      },
      "important": {
        "color": "#E45734"
      },
      "deliminator": {
        "color": "#E45734"
      },
      ".line-highlight.line-highlight": {
        "background": "rgba(255, 255, 255, .2)"
      },
      ".line-highlight.line-highlight:before": {
        "top": ".3em",
        "backgroundColor": "rgba(255, 255, 255, .3)",
        "color": "#fff",
        "MozBorderRadius": "8px",
        "WebkitBorderRadius": "8px",
        "borderRadius": "8px"
      },
      ".line-highlight.line-highlight[data-end]:after": {
        "top": ".3em",
        "backgroundColor": "rgba(255, 255, 255, .3)",
        "color": "#fff",
        "MozBorderRadius": "8px",
        "WebkitBorderRadius": "8px",
        "borderRadius": "8px"
      },
      ".line-numbers .line-numbers-rows > span": {
        "borderRight": "3px #d9d336 solid"
      }
    };
  })(cb);
  return cb;
}
var coldarkCold = {};
var hasRequiredColdarkCold;
function requireColdarkCold() {
  if (hasRequiredColdarkCold)
    return coldarkCold;
  hasRequiredColdarkCold = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "#111b27",
        "background": "none",
        "fontFamily": 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "#111b27",
        "background": "#e3eaf2",
        "fontFamily": 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": "0.5em 0",
        "overflow": "auto"
      },
      'pre[class*="language-"]::-moz-selection': {
        "background": "#8da1b9"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "background": "#8da1b9"
      },
      'code[class*="language-"]::-moz-selection': {
        "background": "#8da1b9"
      },
      'code[class*="language-"] ::-moz-selection': {
        "background": "#8da1b9"
      },
      'pre[class*="language-"]::selection': {
        "background": "#8da1b9"
      },
      'pre[class*="language-"] ::selection': {
        "background": "#8da1b9"
      },
      'code[class*="language-"]::selection': {
        "background": "#8da1b9"
      },
      'code[class*="language-"] ::selection': {
        "background": "#8da1b9"
      },
      ':not(pre) > code[class*="language-"]': {
        "background": "#e3eaf2",
        "padding": "0.1em 0.3em",
        "borderRadius": "0.3em",
        "whiteSpace": "normal"
      },
      "comment": {
        "color": "#3c526d"
      },
      "prolog": {
        "color": "#3c526d"
      },
      "doctype": {
        "color": "#3c526d"
      },
      "cdata": {
        "color": "#3c526d"
      },
      "punctuation": {
        "color": "#111b27"
      },
      "delimiter.important": {
        "color": "#006d6d",
        "fontWeight": "inherit"
      },
      "selector.parent": {
        "color": "#006d6d"
      },
      "tag": {
        "color": "#006d6d"
      },
      "tag.punctuation": {
        "color": "#006d6d"
      },
      "attr-name": {
        "color": "#755f00"
      },
      "boolean": {
        "color": "#755f00"
      },
      "boolean.important": {
        "color": "#755f00"
      },
      "number": {
        "color": "#755f00"
      },
      "constant": {
        "color": "#755f00"
      },
      "selector.attribute": {
        "color": "#755f00"
      },
      "class-name": {
        "color": "#005a8e"
      },
      "key": {
        "color": "#005a8e"
      },
      "parameter": {
        "color": "#005a8e"
      },
      "property": {
        "color": "#005a8e"
      },
      "property-access": {
        "color": "#005a8e"
      },
      "variable": {
        "color": "#005a8e"
      },
      "attr-value": {
        "color": "#116b00"
      },
      "inserted": {
        "color": "#116b00"
      },
      "color": {
        "color": "#116b00"
      },
      "selector.value": {
        "color": "#116b00"
      },
      "string": {
        "color": "#116b00"
      },
      "string.url-link": {
        "color": "#116b00"
      },
      "builtin": {
        "color": "#af00af"
      },
      "keyword-array": {
        "color": "#af00af"
      },
      "package": {
        "color": "#af00af"
      },
      "regex": {
        "color": "#af00af"
      },
      "function": {
        "color": "#7c00aa"
      },
      "selector.class": {
        "color": "#7c00aa"
      },
      "selector.id": {
        "color": "#7c00aa"
      },
      "atrule.rule": {
        "color": "#a04900"
      },
      "combinator": {
        "color": "#a04900"
      },
      "keyword": {
        "color": "#a04900"
      },
      "operator": {
        "color": "#a04900"
      },
      "pseudo-class": {
        "color": "#a04900"
      },
      "pseudo-element": {
        "color": "#a04900"
      },
      "selector": {
        "color": "#a04900"
      },
      "unit": {
        "color": "#a04900"
      },
      "deleted": {
        "color": "#c22f2e"
      },
      "important": {
        "color": "#c22f2e",
        "fontWeight": "bold"
      },
      "keyword-this": {
        "color": "#005a8e",
        "fontWeight": "bold"
      },
      "this": {
        "color": "#005a8e",
        "fontWeight": "bold"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "entity": {
        "cursor": "help"
      },
      ".language-markdown .token.title": {
        "color": "#005a8e",
        "fontWeight": "bold"
      },
      ".language-markdown .token.title .token.punctuation": {
        "color": "#005a8e",
        "fontWeight": "bold"
      },
      ".language-markdown .token.blockquote.punctuation": {
        "color": "#af00af"
      },
      ".language-markdown .token.code": {
        "color": "#006d6d"
      },
      ".language-markdown .token.hr.punctuation": {
        "color": "#005a8e"
      },
      ".language-markdown .token.url > .token.content": {
        "color": "#116b00"
      },
      ".language-markdown .token.url-link": {
        "color": "#755f00"
      },
      ".language-markdown .token.list.punctuation": {
        "color": "#af00af"
      },
      ".language-markdown .token.table-header": {
        "color": "#111b27"
      },
      ".language-json .token.operator": {
        "color": "#111b27"
      },
      ".language-scss .token.variable": {
        "color": "#006d6d"
      },
      "token.tab:not(:empty):before": {
        "color": "#3c526d"
      },
      "token.cr:before": {
        "color": "#3c526d"
      },
      "token.lf:before": {
        "color": "#3c526d"
      },
      "token.space:before": {
        "color": "#3c526d"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a": {
        "color": "#e3eaf2",
        "background": "#005a8e"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button": {
        "color": "#e3eaf2",
        "background": "#005a8e"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover": {
        "color": "#e3eaf2",
        "background": "#005a8eda",
        "textDecoration": "none"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus": {
        "color": "#e3eaf2",
        "background": "#005a8eda",
        "textDecoration": "none"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover": {
        "color": "#e3eaf2",
        "background": "#005a8eda",
        "textDecoration": "none"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus": {
        "color": "#e3eaf2",
        "background": "#005a8eda",
        "textDecoration": "none"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span": {
        "color": "#e3eaf2",
        "background": "#3c526d"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover": {
        "color": "#e3eaf2",
        "background": "#3c526d"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus": {
        "color": "#e3eaf2",
        "background": "#3c526d"
      },
      ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, #8da1b92f 70%, #8da1b925)"
      },
      ".line-highlight.line-highlight:before": {
        "backgroundColor": "#3c526d",
        "color": "#e3eaf2",
        "boxShadow": "0 1px #8da1b9"
      },
      ".line-highlight.line-highlight[data-end]:after": {
        "backgroundColor": "#3c526d",
        "color": "#e3eaf2",
        "boxShadow": "0 1px #8da1b9"
      },
      "pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before": {
        "backgroundColor": "#3c526d1f"
      },
      ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRight": "1px solid #8da1b97a",
        "background": "#d0dae77a"
      },
      ".line-numbers .line-numbers-rows > span:before": {
        "color": "#3c526dda"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-1": {
        "color": "#755f00"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-5": {
        "color": "#755f00"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-9": {
        "color": "#755f00"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-2": {
        "color": "#af00af"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-6": {
        "color": "#af00af"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-10": {
        "color": "#af00af"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-3": {
        "color": "#005a8e"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-7": {
        "color": "#005a8e"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-11": {
        "color": "#005a8e"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-4": {
        "color": "#7c00aa"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-8": {
        "color": "#7c00aa"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-12": {
        "color": "#7c00aa"
      },
      "pre.diff-highlight > code .token.token.deleted:not(.prefix)": {
        "backgroundColor": "#c22f2e1f"
      },
      "pre > code.diff-highlight .token.token.deleted:not(.prefix)": {
        "backgroundColor": "#c22f2e1f"
      },
      "pre.diff-highlight > code .token.token.inserted:not(.prefix)": {
        "backgroundColor": "#116b001f"
      },
      "pre > code.diff-highlight .token.token.inserted:not(.prefix)": {
        "backgroundColor": "#116b001f"
      },
      ".command-line .command-line-prompt": {
        "borderRight": "1px solid #8da1b97a"
      },
      ".command-line .command-line-prompt > span:before": {
        "color": "#3c526dda"
      }
    };
  })(coldarkCold);
  return coldarkCold;
}
var coldarkDark = {};
var hasRequiredColdarkDark;
function requireColdarkDark() {
  if (hasRequiredColdarkDark)
    return coldarkDark;
  hasRequiredColdarkDark = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "#e3eaf2",
        "background": "none",
        "fontFamily": 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "#e3eaf2",
        "background": "#111b27",
        "fontFamily": 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": "0.5em 0",
        "overflow": "auto"
      },
      'pre[class*="language-"]::-moz-selection': {
        "background": "#3c526d"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "background": "#3c526d"
      },
      'code[class*="language-"]::-moz-selection': {
        "background": "#3c526d"
      },
      'code[class*="language-"] ::-moz-selection': {
        "background": "#3c526d"
      },
      'pre[class*="language-"]::selection': {
        "background": "#3c526d"
      },
      'pre[class*="language-"] ::selection': {
        "background": "#3c526d"
      },
      'code[class*="language-"]::selection': {
        "background": "#3c526d"
      },
      'code[class*="language-"] ::selection': {
        "background": "#3c526d"
      },
      ':not(pre) > code[class*="language-"]': {
        "background": "#111b27",
        "padding": "0.1em 0.3em",
        "borderRadius": "0.3em",
        "whiteSpace": "normal"
      },
      "comment": {
        "color": "#8da1b9"
      },
      "prolog": {
        "color": "#8da1b9"
      },
      "doctype": {
        "color": "#8da1b9"
      },
      "cdata": {
        "color": "#8da1b9"
      },
      "punctuation": {
        "color": "#e3eaf2"
      },
      "delimiter.important": {
        "color": "#66cccc",
        "fontWeight": "inherit"
      },
      "selector.parent": {
        "color": "#66cccc"
      },
      "tag": {
        "color": "#66cccc"
      },
      "tag.punctuation": {
        "color": "#66cccc"
      },
      "attr-name": {
        "color": "#e6d37a"
      },
      "boolean": {
        "color": "#e6d37a"
      },
      "boolean.important": {
        "color": "#e6d37a"
      },
      "number": {
        "color": "#e6d37a"
      },
      "constant": {
        "color": "#e6d37a"
      },
      "selector.attribute": {
        "color": "#e6d37a"
      },
      "class-name": {
        "color": "#6cb8e6"
      },
      "key": {
        "color": "#6cb8e6"
      },
      "parameter": {
        "color": "#6cb8e6"
      },
      "property": {
        "color": "#6cb8e6"
      },
      "property-access": {
        "color": "#6cb8e6"
      },
      "variable": {
        "color": "#6cb8e6"
      },
      "attr-value": {
        "color": "#91d076"
      },
      "inserted": {
        "color": "#91d076"
      },
      "color": {
        "color": "#91d076"
      },
      "selector.value": {
        "color": "#91d076"
      },
      "string": {
        "color": "#91d076"
      },
      "string.url-link": {
        "color": "#91d076"
      },
      "builtin": {
        "color": "#f4adf4"
      },
      "keyword-array": {
        "color": "#f4adf4"
      },
      "package": {
        "color": "#f4adf4"
      },
      "regex": {
        "color": "#f4adf4"
      },
      "function": {
        "color": "#c699e3"
      },
      "selector.class": {
        "color": "#c699e3"
      },
      "selector.id": {
        "color": "#c699e3"
      },
      "atrule.rule": {
        "color": "#e9ae7e"
      },
      "combinator": {
        "color": "#e9ae7e"
      },
      "keyword": {
        "color": "#e9ae7e"
      },
      "operator": {
        "color": "#e9ae7e"
      },
      "pseudo-class": {
        "color": "#e9ae7e"
      },
      "pseudo-element": {
        "color": "#e9ae7e"
      },
      "selector": {
        "color": "#e9ae7e"
      },
      "unit": {
        "color": "#e9ae7e"
      },
      "deleted": {
        "color": "#cd6660"
      },
      "important": {
        "color": "#cd6660",
        "fontWeight": "bold"
      },
      "keyword-this": {
        "color": "#6cb8e6",
        "fontWeight": "bold"
      },
      "this": {
        "color": "#6cb8e6",
        "fontWeight": "bold"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "entity": {
        "cursor": "help"
      },
      ".language-markdown .token.title": {
        "color": "#6cb8e6",
        "fontWeight": "bold"
      },
      ".language-markdown .token.title .token.punctuation": {
        "color": "#6cb8e6",
        "fontWeight": "bold"
      },
      ".language-markdown .token.blockquote.punctuation": {
        "color": "#f4adf4"
      },
      ".language-markdown .token.code": {
        "color": "#66cccc"
      },
      ".language-markdown .token.hr.punctuation": {
        "color": "#6cb8e6"
      },
      ".language-markdown .token.url .token.content": {
        "color": "#91d076"
      },
      ".language-markdown .token.url-link": {
        "color": "#e6d37a"
      },
      ".language-markdown .token.list.punctuation": {
        "color": "#f4adf4"
      },
      ".language-markdown .token.table-header": {
        "color": "#e3eaf2"
      },
      ".language-json .token.operator": {
        "color": "#e3eaf2"
      },
      ".language-scss .token.variable": {
        "color": "#66cccc"
      },
      "token.tab:not(:empty):before": {
        "color": "#8da1b9"
      },
      "token.cr:before": {
        "color": "#8da1b9"
      },
      "token.lf:before": {
        "color": "#8da1b9"
      },
      "token.space:before": {
        "color": "#8da1b9"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a": {
        "color": "#111b27",
        "background": "#6cb8e6"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button": {
        "color": "#111b27",
        "background": "#6cb8e6"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover": {
        "color": "#111b27",
        "background": "#6cb8e6da",
        "textDecoration": "none"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus": {
        "color": "#111b27",
        "background": "#6cb8e6da",
        "textDecoration": "none"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover": {
        "color": "#111b27",
        "background": "#6cb8e6da",
        "textDecoration": "none"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus": {
        "color": "#111b27",
        "background": "#6cb8e6da",
        "textDecoration": "none"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span": {
        "color": "#111b27",
        "background": "#8da1b9"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover": {
        "color": "#111b27",
        "background": "#8da1b9"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus": {
        "color": "#111b27",
        "background": "#8da1b9"
      },
      ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, #3c526d5f 70%, #3c526d55)"
      },
      ".line-highlight.line-highlight:before": {
        "backgroundColor": "#8da1b9",
        "color": "#111b27",
        "boxShadow": "0 1px #3c526d"
      },
      ".line-highlight.line-highlight[data-end]:after": {
        "backgroundColor": "#8da1b9",
        "color": "#111b27",
        "boxShadow": "0 1px #3c526d"
      },
      "pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before": {
        "backgroundColor": "#8da1b918"
      },
      ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRight": "1px solid #0b121b",
        "background": "#0b121b7a"
      },
      ".line-numbers .line-numbers-rows > span:before": {
        "color": "#8da1b9da"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-1": {
        "color": "#e6d37a"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-5": {
        "color": "#e6d37a"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-9": {
        "color": "#e6d37a"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-2": {
        "color": "#f4adf4"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-6": {
        "color": "#f4adf4"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-10": {
        "color": "#f4adf4"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-3": {
        "color": "#6cb8e6"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-7": {
        "color": "#6cb8e6"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-11": {
        "color": "#6cb8e6"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-4": {
        "color": "#c699e3"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-8": {
        "color": "#c699e3"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-12": {
        "color": "#c699e3"
      },
      "pre.diff-highlight > code .token.token.deleted:not(.prefix)": {
        "backgroundColor": "#cd66601f"
      },
      "pre > code.diff-highlight .token.token.deleted:not(.prefix)": {
        "backgroundColor": "#cd66601f"
      },
      "pre.diff-highlight > code .token.token.inserted:not(.prefix)": {
        "backgroundColor": "#91d0761f"
      },
      "pre > code.diff-highlight .token.token.inserted:not(.prefix)": {
        "backgroundColor": "#91d0761f"
      },
      ".command-line .command-line-prompt": {
        "borderRight": "1px solid #0b121b"
      },
      ".command-line .command-line-prompt > span:before": {
        "color": "#8da1b9da"
      }
    };
  })(coldarkDark);
  return coldarkDark;
}
var coyWithoutShadows = {};
var hasRequiredCoyWithoutShadows;
function requireCoyWithoutShadows() {
  if (hasRequiredCoyWithoutShadows)
    return coyWithoutShadows;
  hasRequiredCoyWithoutShadows = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "black",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "black",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "position": "relative",
        "borderLeft": "10px solid #358ccb",
        "boxShadow": "-1px 0 0 0 #358ccb, 0 0 0 1px #dfdfdf",
        "backgroundColor": "#fdfdfd",
        "backgroundImage": "linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)",
        "backgroundSize": "3em 3em",
        "backgroundOrigin": "content-box",
        "backgroundAttachment": "local",
        "margin": ".5em 0",
        "padding": "0 1em"
      },
      'pre[class*="language-"] > code': {
        "display": "block"
      },
      ':not(pre) > code[class*="language-"]': {
        "position": "relative",
        "padding": ".2em",
        "borderRadius": "0.3em",
        "color": "#c92c2c",
        "border": "1px solid rgba(0, 0, 0, 0.1)",
        "display": "inline",
        "whiteSpace": "normal",
        "backgroundColor": "#fdfdfd",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
      },
      "comment": {
        "color": "#7D8B99"
      },
      "block-comment": {
        "color": "#7D8B99"
      },
      "prolog": {
        "color": "#7D8B99"
      },
      "doctype": {
        "color": "#7D8B99"
      },
      "cdata": {
        "color": "#7D8B99"
      },
      "punctuation": {
        "color": "#5F6364"
      },
      "property": {
        "color": "#c92c2c"
      },
      "tag": {
        "color": "#c92c2c"
      },
      "boolean": {
        "color": "#c92c2c"
      },
      "number": {
        "color": "#c92c2c"
      },
      "function-name": {
        "color": "#c92c2c"
      },
      "constant": {
        "color": "#c92c2c"
      },
      "symbol": {
        "color": "#c92c2c"
      },
      "deleted": {
        "color": "#c92c2c"
      },
      "selector": {
        "color": "#2f9c0a"
      },
      "attr-name": {
        "color": "#2f9c0a"
      },
      "string": {
        "color": "#2f9c0a"
      },
      "char": {
        "color": "#2f9c0a"
      },
      "function": {
        "color": "#2f9c0a"
      },
      "builtin": {
        "color": "#2f9c0a"
      },
      "inserted": {
        "color": "#2f9c0a"
      },
      "operator": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
      },
      "entity": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)",
        "cursor": "help"
      },
      "url": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
      },
      "variable": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
      },
      "atrule": {
        "color": "#1990b8"
      },
      "attr-value": {
        "color": "#1990b8"
      },
      "keyword": {
        "color": "#1990b8"
      },
      "class-name": {
        "color": "#1990b8"
      },
      "regex": {
        "color": "#e90"
      },
      "important": {
        "color": "#e90",
        "fontWeight": "normal"
      },
      ".language-css .token.string": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
      },
      ".style .token.string": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "namespace": {
        "Opacity": ".7"
      }
    };
  })(coyWithoutShadows);
  return coyWithoutShadows;
}
var darcula = {};
var hasRequiredDarcula;
function requireDarcula() {
  if (hasRequiredDarcula)
    return darcula;
  hasRequiredDarcula = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "#a9b7c6",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "#a9b7c6",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "background": "#2b2b2b"
      },
      'pre[class*="language-"]::-moz-selection': {
        "color": "inherit",
        "background": "rgba(33, 66, 131, .85)"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "color": "inherit",
        "background": "rgba(33, 66, 131, .85)"
      },
      'code[class*="language-"]::-moz-selection': {
        "color": "inherit",
        "background": "rgba(33, 66, 131, .85)"
      },
      'code[class*="language-"] ::-moz-selection': {
        "color": "inherit",
        "background": "rgba(33, 66, 131, .85)"
      },
      'pre[class*="language-"]::selection': {
        "color": "inherit",
        "background": "rgba(33, 66, 131, .85)"
      },
      'pre[class*="language-"] ::selection': {
        "color": "inherit",
        "background": "rgba(33, 66, 131, .85)"
      },
      'code[class*="language-"]::selection': {
        "color": "inherit",
        "background": "rgba(33, 66, 131, .85)"
      },
      'code[class*="language-"] ::selection': {
        "color": "inherit",
        "background": "rgba(33, 66, 131, .85)"
      },
      ':not(pre) > code[class*="language-"]': {
        "background": "#2b2b2b",
        "padding": ".1em",
        "borderRadius": ".3em"
      },
      "comment": {
        "color": "#808080"
      },
      "prolog": {
        "color": "#808080"
      },
      "cdata": {
        "color": "#808080"
      },
      "delimiter": {
        "color": "#cc7832"
      },
      "boolean": {
        "color": "#cc7832"
      },
      "keyword": {
        "color": "#cc7832"
      },
      "selector": {
        "color": "#cc7832"
      },
      "important": {
        "color": "#cc7832"
      },
      "atrule": {
        "color": "#cc7832"
      },
      "operator": {
        "color": "#a9b7c6"
      },
      "punctuation": {
        "color": "#a9b7c6"
      },
      "attr-name": {
        "color": "#a9b7c6"
      },
      "tag": {
        "color": "#e8bf6a"
      },
      "tag.punctuation": {
        "color": "#e8bf6a"
      },
      "doctype": {
        "color": "#e8bf6a"
      },
      "builtin": {
        "color": "#e8bf6a"
      },
      "entity": {
        "color": "#6897bb"
      },
      "number": {
        "color": "#6897bb"
      },
      "symbol": {
        "color": "#6897bb"
      },
      "property": {
        "color": "#9876aa"
      },
      "constant": {
        "color": "#9876aa"
      },
      "variable": {
        "color": "#9876aa"
      },
      "string": {
        "color": "#6a8759"
      },
      "char": {
        "color": "#6a8759"
      },
      "attr-value": {
        "color": "#a5c261"
      },
      "attr-value.punctuation": {
        "color": "#a5c261"
      },
      "attr-value.punctuation:first-child": {
        "color": "#a9b7c6"
      },
      "url": {
        "color": "#287bde",
        "textDecoration": "underline"
      },
      "function": {
        "color": "#ffc66d"
      },
      "regex": {
        "background": "#364135"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "inserted": {
        "background": "#294436"
      },
      "deleted": {
        "background": "#484a4a"
      },
      "code.language-css .token.property": {
        "color": "#a9b7c6"
      },
      "code.language-css .token.property + .token.punctuation": {
        "color": "#a9b7c6"
      },
      "code.language-css .token.id": {
        "color": "#ffc66d"
      },
      "code.language-css .token.selector > .token.class": {
        "color": "#ffc66d"
      },
      "code.language-css .token.selector > .token.attribute": {
        "color": "#ffc66d"
      },
      "code.language-css .token.selector > .token.pseudo-class": {
        "color": "#ffc66d"
      },
      "code.language-css .token.selector > .token.pseudo-element": {
        "color": "#ffc66d"
      }
    };
  })(darcula);
  return darcula;
}
var dracula = {};
var hasRequiredDracula;
function requireDracula() {
  if (hasRequiredDracula)
    return dracula;
  hasRequiredDracula = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "#f8f8f2",
        "background": "none",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "#f8f8f2",
        "background": "#282a36",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em"
      },
      ':not(pre) > code[class*="language-"]': {
        "background": "#282a36",
        "padding": ".1em",
        "borderRadius": ".3em",
        "whiteSpace": "normal"
      },
      "comment": {
        "color": "#6272a4"
      },
      "prolog": {
        "color": "#6272a4"
      },
      "doctype": {
        "color": "#6272a4"
      },
      "cdata": {
        "color": "#6272a4"
      },
      "punctuation": {
        "color": "#f8f8f2"
      },
      ".namespace": {
        "Opacity": ".7"
      },
      "property": {
        "color": "#ff79c6"
      },
      "tag": {
        "color": "#ff79c6"
      },
      "constant": {
        "color": "#ff79c6"
      },
      "symbol": {
        "color": "#ff79c6"
      },
      "deleted": {
        "color": "#ff79c6"
      },
      "boolean": {
        "color": "#bd93f9"
      },
      "number": {
        "color": "#bd93f9"
      },
      "selector": {
        "color": "#50fa7b"
      },
      "attr-name": {
        "color": "#50fa7b"
      },
      "string": {
        "color": "#50fa7b"
      },
      "char": {
        "color": "#50fa7b"
      },
      "builtin": {
        "color": "#50fa7b"
      },
      "inserted": {
        "color": "#50fa7b"
      },
      "operator": {
        "color": "#f8f8f2"
      },
      "entity": {
        "color": "#f8f8f2",
        "cursor": "help"
      },
      "url": {
        "color": "#f8f8f2"
      },
      ".language-css .token.string": {
        "color": "#f8f8f2"
      },
      ".style .token.string": {
        "color": "#f8f8f2"
      },
      "variable": {
        "color": "#f8f8f2"
      },
      "atrule": {
        "color": "#f1fa8c"
      },
      "attr-value": {
        "color": "#f1fa8c"
      },
      "function": {
        "color": "#f1fa8c"
      },
      "class-name": {
        "color": "#f1fa8c"
      },
      "keyword": {
        "color": "#8be9fd"
      },
      "regex": {
        "color": "#ffb86c"
      },
      "important": {
        "color": "#ffb86c",
        "fontWeight": "bold"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      }
    };
  })(dracula);
  return dracula;
}
var duotoneDark = {};
var hasRequiredDuotoneDark;
function requireDuotoneDark() {
  if (hasRequiredDuotoneDark)
    return duotoneDark;
  hasRequiredDuotoneDark = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "fontFamily": 'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#2a2734",
        "color": "#9a86fd"
      },
      'pre[class*="language-"]': {
        "fontFamily": 'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#2a2734",
        "color": "#9a86fd",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
      },
      'pre > code[class*="language-"]': {
        "fontSize": "1em"
      },
      'pre[class*="language-"]::-moz-selection': {
        "textShadow": "none",
        "background": "#6a51e6"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "#6a51e6"
      },
      'code[class*="language-"]::-moz-selection': {
        "textShadow": "none",
        "background": "#6a51e6"
      },
      'code[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "#6a51e6"
      },
      'pre[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "#6a51e6"
      },
      'pre[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "#6a51e6"
      },
      'code[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "#6a51e6"
      },
      'code[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "#6a51e6"
      },
      ':not(pre) > code[class*="language-"]': {
        "padding": ".1em",
        "borderRadius": ".3em"
      },
      "comment": {
        "color": "#6c6783"
      },
      "prolog": {
        "color": "#6c6783"
      },
      "doctype": {
        "color": "#6c6783"
      },
      "cdata": {
        "color": "#6c6783"
      },
      "punctuation": {
        "color": "#6c6783"
      },
      "namespace": {
        "Opacity": ".7"
      },
      "tag": {
        "color": "#e09142"
      },
      "operator": {
        "color": "#e09142"
      },
      "number": {
        "color": "#e09142"
      },
      "property": {
        "color": "#9a86fd"
      },
      "function": {
        "color": "#9a86fd"
      },
      "tag-id": {
        "color": "#eeebff"
      },
      "selector": {
        "color": "#eeebff"
      },
      "atrule-id": {
        "color": "#eeebff"
      },
      "code.language-javascript": {
        "color": "#c4b9fe"
      },
      "attr-name": {
        "color": "#c4b9fe"
      },
      "code.language-css": {
        "color": "#ffcc99"
      },
      "code.language-scss": {
        "color": "#ffcc99"
      },
      "boolean": {
        "color": "#ffcc99"
      },
      "string": {
        "color": "#ffcc99"
      },
      "entity": {
        "color": "#ffcc99",
        "cursor": "help"
      },
      "url": {
        "color": "#ffcc99"
      },
      ".language-css .token.string": {
        "color": "#ffcc99"
      },
      ".language-scss .token.string": {
        "color": "#ffcc99"
      },
      ".style .token.string": {
        "color": "#ffcc99"
      },
      "attr-value": {
        "color": "#ffcc99"
      },
      "keyword": {
        "color": "#ffcc99"
      },
      "control": {
        "color": "#ffcc99"
      },
      "directive": {
        "color": "#ffcc99"
      },
      "unit": {
        "color": "#ffcc99"
      },
      "statement": {
        "color": "#ffcc99"
      },
      "regex": {
        "color": "#ffcc99"
      },
      "atrule": {
        "color": "#ffcc99"
      },
      "placeholder": {
        "color": "#ffcc99"
      },
      "variable": {
        "color": "#ffcc99"
      },
      "deleted": {
        "textDecoration": "line-through"
      },
      "inserted": {
        "borderBottom": "1px dotted #eeebff",
        "textDecoration": "none"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "important": {
        "fontWeight": "bold",
        "color": "#c4b9fe"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "pre > code.highlight": {
        "Outline": ".4em solid #8a75f5",
        "OutlineOffset": ".4em"
      },
      ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRightColor": "#2c2937"
      },
      ".line-numbers .line-numbers-rows > span:before": {
        "color": "#3c3949"
      },
      ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0))"
      }
    };
  })(duotoneDark);
  return duotoneDark;
}
var duotoneEarth = {};
var hasRequiredDuotoneEarth;
function requireDuotoneEarth() {
  if (hasRequiredDuotoneEarth)
    return duotoneEarth;
  hasRequiredDuotoneEarth = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "fontFamily": 'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#322d29",
        "color": "#88786d"
      },
      'pre[class*="language-"]': {
        "fontFamily": 'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#322d29",
        "color": "#88786d",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
      },
      'pre > code[class*="language-"]': {
        "fontSize": "1em"
      },
      'pre[class*="language-"]::-moz-selection': {
        "textShadow": "none",
        "background": "#6f5849"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "#6f5849"
      },
      'code[class*="language-"]::-moz-selection': {
        "textShadow": "none",
        "background": "#6f5849"
      },
      'code[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "#6f5849"
      },
      'pre[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "#6f5849"
      },
      'pre[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "#6f5849"
      },
      'code[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "#6f5849"
      },
      'code[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "#6f5849"
      },
      ':not(pre) > code[class*="language-"]': {
        "padding": ".1em",
        "borderRadius": ".3em"
      },
      "comment": {
        "color": "#6a5f58"
      },
      "prolog": {
        "color": "#6a5f58"
      },
      "doctype": {
        "color": "#6a5f58"
      },
      "cdata": {
        "color": "#6a5f58"
      },
      "punctuation": {
        "color": "#6a5f58"
      },
      "namespace": {
        "Opacity": ".7"
      },
      "tag": {
        "color": "#bfa05a"
      },
      "operator": {
        "color": "#bfa05a"
      },
      "number": {
        "color": "#bfa05a"
      },
      "property": {
        "color": "#88786d"
      },
      "function": {
        "color": "#88786d"
      },
      "tag-id": {
        "color": "#fff3eb"
      },
      "selector": {
        "color": "#fff3eb"
      },
      "atrule-id": {
        "color": "#fff3eb"
      },
      "code.language-javascript": {
        "color": "#a48774"
      },
      "attr-name": {
        "color": "#a48774"
      },
      "code.language-css": {
        "color": "#fcc440"
      },
      "code.language-scss": {
        "color": "#fcc440"
      },
      "boolean": {
        "color": "#fcc440"
      },
      "string": {
        "color": "#fcc440"
      },
      "entity": {
        "color": "#fcc440",
        "cursor": "help"
      },
      "url": {
        "color": "#fcc440"
      },
      ".language-css .token.string": {
        "color": "#fcc440"
      },
      ".language-scss .token.string": {
        "color": "#fcc440"
      },
      ".style .token.string": {
        "color": "#fcc440"
      },
      "attr-value": {
        "color": "#fcc440"
      },
      "keyword": {
        "color": "#fcc440"
      },
      "control": {
        "color": "#fcc440"
      },
      "directive": {
        "color": "#fcc440"
      },
      "unit": {
        "color": "#fcc440"
      },
      "statement": {
        "color": "#fcc440"
      },
      "regex": {
        "color": "#fcc440"
      },
      "atrule": {
        "color": "#fcc440"
      },
      "placeholder": {
        "color": "#fcc440"
      },
      "variable": {
        "color": "#fcc440"
      },
      "deleted": {
        "textDecoration": "line-through"
      },
      "inserted": {
        "borderBottom": "1px dotted #fff3eb",
        "textDecoration": "none"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "important": {
        "fontWeight": "bold",
        "color": "#a48774"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "pre > code.highlight": {
        "Outline": ".4em solid #816d5f",
        "OutlineOffset": ".4em"
      },
      ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRightColor": "#35302b"
      },
      ".line-numbers .line-numbers-rows > span:before": {
        "color": "#46403d"
      },
      ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, rgba(191, 160, 90, 0.2) 70%, rgba(191, 160, 90, 0))"
      }
    };
  })(duotoneEarth);
  return duotoneEarth;
}
var duotoneForest = {};
var hasRequiredDuotoneForest;
function requireDuotoneForest() {
  if (hasRequiredDuotoneForest)
    return duotoneForest;
  hasRequiredDuotoneForest = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "fontFamily": 'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#2a2d2a",
        "color": "#687d68"
      },
      'pre[class*="language-"]': {
        "fontFamily": 'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#2a2d2a",
        "color": "#687d68",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
      },
      'pre > code[class*="language-"]': {
        "fontSize": "1em"
      },
      'pre[class*="language-"]::-moz-selection': {
        "textShadow": "none",
        "background": "#435643"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "#435643"
      },
      'code[class*="language-"]::-moz-selection': {
        "textShadow": "none",
        "background": "#435643"
      },
      'code[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "#435643"
      },
      'pre[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "#435643"
      },
      'pre[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "#435643"
      },
      'code[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "#435643"
      },
      'code[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "#435643"
      },
      ':not(pre) > code[class*="language-"]': {
        "padding": ".1em",
        "borderRadius": ".3em"
      },
      "comment": {
        "color": "#535f53"
      },
      "prolog": {
        "color": "#535f53"
      },
      "doctype": {
        "color": "#535f53"
      },
      "cdata": {
        "color": "#535f53"
      },
      "punctuation": {
        "color": "#535f53"
      },
      "namespace": {
        "Opacity": ".7"
      },
      "tag": {
        "color": "#a2b34d"
      },
      "operator": {
        "color": "#a2b34d"
      },
      "number": {
        "color": "#a2b34d"
      },
      "property": {
        "color": "#687d68"
      },
      "function": {
        "color": "#687d68"
      },
      "tag-id": {
        "color": "#f0fff0"
      },
      "selector": {
        "color": "#f0fff0"
      },
      "atrule-id": {
        "color": "#f0fff0"
      },
      "code.language-javascript": {
        "color": "#b3d6b3"
      },
      "attr-name": {
        "color": "#b3d6b3"
      },
      "code.language-css": {
        "color": "#e5fb79"
      },
      "code.language-scss": {
        "color": "#e5fb79"
      },
      "boolean": {
        "color": "#e5fb79"
      },
      "string": {
        "color": "#e5fb79"
      },
      "entity": {
        "color": "#e5fb79",
        "cursor": "help"
      },
      "url": {
        "color": "#e5fb79"
      },
      ".language-css .token.string": {
        "color": "#e5fb79"
      },
      ".language-scss .token.string": {
        "color": "#e5fb79"
      },
      ".style .token.string": {
        "color": "#e5fb79"
      },
      "attr-value": {
        "color": "#e5fb79"
      },
      "keyword": {
        "color": "#e5fb79"
      },
      "control": {
        "color": "#e5fb79"
      },
      "directive": {
        "color": "#e5fb79"
      },
      "unit": {
        "color": "#e5fb79"
      },
      "statement": {
        "color": "#e5fb79"
      },
      "regex": {
        "color": "#e5fb79"
      },
      "atrule": {
        "color": "#e5fb79"
      },
      "placeholder": {
        "color": "#e5fb79"
      },
      "variable": {
        "color": "#e5fb79"
      },
      "deleted": {
        "textDecoration": "line-through"
      },
      "inserted": {
        "borderBottom": "1px dotted #f0fff0",
        "textDecoration": "none"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "important": {
        "fontWeight": "bold",
        "color": "#b3d6b3"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "pre > code.highlight": {
        "Outline": ".4em solid #5c705c",
        "OutlineOffset": ".4em"
      },
      ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRightColor": "#2c302c"
      },
      ".line-numbers .line-numbers-rows > span:before": {
        "color": "#3b423b"
      },
      ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, rgba(162, 179, 77, 0.2) 70%, rgba(162, 179, 77, 0))"
      }
    };
  })(duotoneForest);
  return duotoneForest;
}
var duotoneLight = {};
var hasRequiredDuotoneLight;
function requireDuotoneLight() {
  if (hasRequiredDuotoneLight)
    return duotoneLight;
  hasRequiredDuotoneLight = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "fontFamily": 'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#faf8f5",
        "color": "#728fcb"
      },
      'pre[class*="language-"]': {
        "fontFamily": 'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#faf8f5",
        "color": "#728fcb",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
      },
      'pre > code[class*="language-"]': {
        "fontSize": "1em"
      },
      'pre[class*="language-"]::-moz-selection': {
        "textShadow": "none",
        "background": "#faf8f5"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "#faf8f5"
      },
      'code[class*="language-"]::-moz-selection': {
        "textShadow": "none",
        "background": "#faf8f5"
      },
      'code[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "#faf8f5"
      },
      'pre[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "#faf8f5"
      },
      'pre[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "#faf8f5"
      },
      'code[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "#faf8f5"
      },
      'code[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "#faf8f5"
      },
      ':not(pre) > code[class*="language-"]': {
        "padding": ".1em",
        "borderRadius": ".3em"
      },
      "comment": {
        "color": "#b6ad9a"
      },
      "prolog": {
        "color": "#b6ad9a"
      },
      "doctype": {
        "color": "#b6ad9a"
      },
      "cdata": {
        "color": "#b6ad9a"
      },
      "punctuation": {
        "color": "#b6ad9a"
      },
      "namespace": {
        "Opacity": ".7"
      },
      "tag": {
        "color": "#063289"
      },
      "operator": {
        "color": "#063289"
      },
      "number": {
        "color": "#063289"
      },
      "property": {
        "color": "#b29762"
      },
      "function": {
        "color": "#b29762"
      },
      "tag-id": {
        "color": "#2d2006"
      },
      "selector": {
        "color": "#2d2006"
      },
      "atrule-id": {
        "color": "#2d2006"
      },
      "code.language-javascript": {
        "color": "#896724"
      },
      "attr-name": {
        "color": "#896724"
      },
      "code.language-css": {
        "color": "#728fcb"
      },
      "code.language-scss": {
        "color": "#728fcb"
      },
      "boolean": {
        "color": "#728fcb"
      },
      "string": {
        "color": "#728fcb"
      },
      "entity": {
        "color": "#728fcb",
        "cursor": "help"
      },
      "url": {
        "color": "#728fcb"
      },
      ".language-css .token.string": {
        "color": "#728fcb"
      },
      ".language-scss .token.string": {
        "color": "#728fcb"
      },
      ".style .token.string": {
        "color": "#728fcb"
      },
      "attr-value": {
        "color": "#728fcb"
      },
      "keyword": {
        "color": "#728fcb"
      },
      "control": {
        "color": "#728fcb"
      },
      "directive": {
        "color": "#728fcb"
      },
      "unit": {
        "color": "#728fcb"
      },
      "statement": {
        "color": "#728fcb"
      },
      "regex": {
        "color": "#728fcb"
      },
      "atrule": {
        "color": "#728fcb"
      },
      "placeholder": {
        "color": "#93abdc"
      },
      "variable": {
        "color": "#93abdc"
      },
      "deleted": {
        "textDecoration": "line-through"
      },
      "inserted": {
        "borderBottom": "1px dotted #2d2006",
        "textDecoration": "none"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "important": {
        "fontWeight": "bold",
        "color": "#896724"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "pre > code.highlight": {
        "Outline": ".4em solid #896724",
        "OutlineOffset": ".4em"
      },
      ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRightColor": "#ece8de"
      },
      ".line-numbers .line-numbers-rows > span:before": {
        "color": "#cdc4b1"
      },
      ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, rgba(45, 32, 6, 0.2) 70%, rgba(45, 32, 6, 0))"
      }
    };
  })(duotoneLight);
  return duotoneLight;
}
var duotoneSea = {};
var hasRequiredDuotoneSea;
function requireDuotoneSea() {
  if (hasRequiredDuotoneSea)
    return duotoneSea;
  hasRequiredDuotoneSea = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "fontFamily": 'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#1d262f",
        "color": "#57718e"
      },
      'pre[class*="language-"]': {
        "fontFamily": 'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#1d262f",
        "color": "#57718e",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
      },
      'pre > code[class*="language-"]': {
        "fontSize": "1em"
      },
      'pre[class*="language-"]::-moz-selection': {
        "textShadow": "none",
        "background": "#004a9e"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "#004a9e"
      },
      'code[class*="language-"]::-moz-selection': {
        "textShadow": "none",
        "background": "#004a9e"
      },
      'code[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "#004a9e"
      },
      'pre[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "#004a9e"
      },
      'pre[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "#004a9e"
      },
      'code[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "#004a9e"
      },
      'code[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "#004a9e"
      },
      ':not(pre) > code[class*="language-"]': {
        "padding": ".1em",
        "borderRadius": ".3em"
      },
      "comment": {
        "color": "#4a5f78"
      },
      "prolog": {
        "color": "#4a5f78"
      },
      "doctype": {
        "color": "#4a5f78"
      },
      "cdata": {
        "color": "#4a5f78"
      },
      "punctuation": {
        "color": "#4a5f78"
      },
      "namespace": {
        "Opacity": ".7"
      },
      "tag": {
        "color": "#0aa370"
      },
      "operator": {
        "color": "#0aa370"
      },
      "number": {
        "color": "#0aa370"
      },
      "property": {
        "color": "#57718e"
      },
      "function": {
        "color": "#57718e"
      },
      "tag-id": {
        "color": "#ebf4ff"
      },
      "selector": {
        "color": "#ebf4ff"
      },
      "atrule-id": {
        "color": "#ebf4ff"
      },
      "code.language-javascript": {
        "color": "#7eb6f6"
      },
      "attr-name": {
        "color": "#7eb6f6"
      },
      "code.language-css": {
        "color": "#47ebb4"
      },
      "code.language-scss": {
        "color": "#47ebb4"
      },
      "boolean": {
        "color": "#47ebb4"
      },
      "string": {
        "color": "#47ebb4"
      },
      "entity": {
        "color": "#47ebb4",
        "cursor": "help"
      },
      "url": {
        "color": "#47ebb4"
      },
      ".language-css .token.string": {
        "color": "#47ebb4"
      },
      ".language-scss .token.string": {
        "color": "#47ebb4"
      },
      ".style .token.string": {
        "color": "#47ebb4"
      },
      "attr-value": {
        "color": "#47ebb4"
      },
      "keyword": {
        "color": "#47ebb4"
      },
      "control": {
        "color": "#47ebb4"
      },
      "directive": {
        "color": "#47ebb4"
      },
      "unit": {
        "color": "#47ebb4"
      },
      "statement": {
        "color": "#47ebb4"
      },
      "regex": {
        "color": "#47ebb4"
      },
      "atrule": {
        "color": "#47ebb4"
      },
      "placeholder": {
        "color": "#47ebb4"
      },
      "variable": {
        "color": "#47ebb4"
      },
      "deleted": {
        "textDecoration": "line-through"
      },
      "inserted": {
        "borderBottom": "1px dotted #ebf4ff",
        "textDecoration": "none"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "important": {
        "fontWeight": "bold",
        "color": "#7eb6f6"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "pre > code.highlight": {
        "Outline": ".4em solid #34659d",
        "OutlineOffset": ".4em"
      },
      ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRightColor": "#1f2932"
      },
      ".line-numbers .line-numbers-rows > span:before": {
        "color": "#2c3847"
      },
      ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, rgba(10, 163, 112, 0.2) 70%, rgba(10, 163, 112, 0))"
      }
    };
  })(duotoneSea);
  return duotoneSea;
}
var duotoneSpace = {};
var hasRequiredDuotoneSpace;
function requireDuotoneSpace() {
  if (hasRequiredDuotoneSpace)
    return duotoneSpace;
  hasRequiredDuotoneSpace = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "fontFamily": 'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#24242e",
        "color": "#767693"
      },
      'pre[class*="language-"]': {
        "fontFamily": 'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#24242e",
        "color": "#767693",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
      },
      'pre > code[class*="language-"]': {
        "fontSize": "1em"
      },
      'pre[class*="language-"]::-moz-selection': {
        "textShadow": "none",
        "background": "#5151e6"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "#5151e6"
      },
      'code[class*="language-"]::-moz-selection': {
        "textShadow": "none",
        "background": "#5151e6"
      },
      'code[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "#5151e6"
      },
      'pre[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "#5151e6"
      },
      'pre[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "#5151e6"
      },
      'code[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "#5151e6"
      },
      'code[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "#5151e6"
      },
      ':not(pre) > code[class*="language-"]': {
        "padding": ".1em",
        "borderRadius": ".3em"
      },
      "comment": {
        "color": "#5b5b76"
      },
      "prolog": {
        "color": "#5b5b76"
      },
      "doctype": {
        "color": "#5b5b76"
      },
      "cdata": {
        "color": "#5b5b76"
      },
      "punctuation": {
        "color": "#5b5b76"
      },
      "namespace": {
        "Opacity": ".7"
      },
      "tag": {
        "color": "#dd672c"
      },
      "operator": {
        "color": "#dd672c"
      },
      "number": {
        "color": "#dd672c"
      },
      "property": {
        "color": "#767693"
      },
      "function": {
        "color": "#767693"
      },
      "tag-id": {
        "color": "#ebebff"
      },
      "selector": {
        "color": "#ebebff"
      },
      "atrule-id": {
        "color": "#ebebff"
      },
      "code.language-javascript": {
        "color": "#aaaaca"
      },
      "attr-name": {
        "color": "#aaaaca"
      },
      "code.language-css": {
        "color": "#fe8c52"
      },
      "code.language-scss": {
        "color": "#fe8c52"
      },
      "boolean": {
        "color": "#fe8c52"
      },
      "string": {
        "color": "#fe8c52"
      },
      "entity": {
        "color": "#fe8c52",
        "cursor": "help"
      },
      "url": {
        "color": "#fe8c52"
      },
      ".language-css .token.string": {
        "color": "#fe8c52"
      },
      ".language-scss .token.string": {
        "color": "#fe8c52"
      },
      ".style .token.string": {
        "color": "#fe8c52"
      },
      "attr-value": {
        "color": "#fe8c52"
      },
      "keyword": {
        "color": "#fe8c52"
      },
      "control": {
        "color": "#fe8c52"
      },
      "directive": {
        "color": "#fe8c52"
      },
      "unit": {
        "color": "#fe8c52"
      },
      "statement": {
        "color": "#fe8c52"
      },
      "regex": {
        "color": "#fe8c52"
      },
      "atrule": {
        "color": "#fe8c52"
      },
      "placeholder": {
        "color": "#fe8c52"
      },
      "variable": {
        "color": "#fe8c52"
      },
      "deleted": {
        "textDecoration": "line-through"
      },
      "inserted": {
        "borderBottom": "1px dotted #ebebff",
        "textDecoration": "none"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "important": {
        "fontWeight": "bold",
        "color": "#aaaaca"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "pre > code.highlight": {
        "Outline": ".4em solid #7676f4",
        "OutlineOffset": ".4em"
      },
      ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRightColor": "#262631"
      },
      ".line-numbers .line-numbers-rows > span:before": {
        "color": "#393949"
      },
      ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, rgba(221, 103, 44, 0.2) 70%, rgba(221, 103, 44, 0))"
      }
    };
  })(duotoneSpace);
  return duotoneSpace;
}
var ghcolors = {};
var hasRequiredGhcolors;
function requireGhcolors() {
  if (hasRequiredGhcolors)
    return ghcolors;
  hasRequiredGhcolors = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "#393A34",
        "fontFamily": '"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "fontSize": ".9em",
        "lineHeight": "1.2em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "#393A34",
        "fontFamily": '"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "fontSize": ".9em",
        "lineHeight": "1.2em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "border": "1px solid #dddddd",
        "backgroundColor": "white"
      },
      'pre > code[class*="language-"]': {
        "fontSize": "1em"
      },
      'pre[class*="language-"]::-moz-selection': {
        "background": "#b3d4fc"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "background": "#b3d4fc"
      },
      'code[class*="language-"]::-moz-selection': {
        "background": "#b3d4fc"
      },
      'code[class*="language-"] ::-moz-selection': {
        "background": "#b3d4fc"
      },
      'pre[class*="language-"]::selection': {
        "background": "#b3d4fc"
      },
      'pre[class*="language-"] ::selection': {
        "background": "#b3d4fc"
      },
      'code[class*="language-"]::selection': {
        "background": "#b3d4fc"
      },
      'code[class*="language-"] ::selection': {
        "background": "#b3d4fc"
      },
      ':not(pre) > code[class*="language-"]': {
        "padding": ".2em",
        "paddingTop": "1px",
        "paddingBottom": "1px",
        "background": "#f8f8f8",
        "border": "1px solid #dddddd"
      },
      "comment": {
        "color": "#999988",
        "fontStyle": "italic"
      },
      "prolog": {
        "color": "#999988",
        "fontStyle": "italic"
      },
      "doctype": {
        "color": "#999988",
        "fontStyle": "italic"
      },
      "cdata": {
        "color": "#999988",
        "fontStyle": "italic"
      },
      "namespace": {
        "Opacity": ".7"
      },
      "string": {
        "color": "#e3116c"
      },
      "attr-value": {
        "color": "#e3116c"
      },
      "punctuation": {
        "color": "#393A34"
      },
      "operator": {
        "color": "#393A34"
      },
      "entity": {
        "color": "#36acaa"
      },
      "url": {
        "color": "#36acaa"
      },
      "symbol": {
        "color": "#36acaa"
      },
      "number": {
        "color": "#36acaa"
      },
      "boolean": {
        "color": "#36acaa"
      },
      "variable": {
        "color": "#36acaa"
      },
      "constant": {
        "color": "#36acaa"
      },
      "property": {
        "color": "#36acaa"
      },
      "regex": {
        "color": "#36acaa"
      },
      "inserted": {
        "color": "#36acaa"
      },
      "atrule": {
        "color": "#00a4db"
      },
      "keyword": {
        "color": "#00a4db"
      },
      "attr-name": {
        "color": "#00a4db"
      },
      ".language-autohotkey .token.selector": {
        "color": "#00a4db"
      },
      "function": {
        "color": "#9a050f",
        "fontWeight": "bold"
      },
      "deleted": {
        "color": "#9a050f"
      },
      ".language-autohotkey .token.tag": {
        "color": "#9a050f"
      },
      "tag": {
        "color": "#00009f"
      },
      "selector": {
        "color": "#00009f"
      },
      ".language-autohotkey .token.keyword": {
        "color": "#00009f"
      },
      "important": {
        "fontWeight": "bold"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      }
    };
  })(ghcolors);
  return ghcolors;
}
var gruvboxDark = {};
var hasRequiredGruvboxDark;
function requireGruvboxDark() {
  if (hasRequiredGruvboxDark)
    return gruvboxDark;
  hasRequiredGruvboxDark = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "#ebdbb2",
        "fontFamily": 'Consolas, Monaco, "Andale Mono", monospace',
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "#ebdbb2",
        "fontFamily": 'Consolas, Monaco, "Andale Mono", monospace',
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": "0.5em 0",
        "overflow": "auto",
        "background": "#1d2021"
      },
      'pre[class*="language-"]::-moz-selection': {
        "color": "#fbf1c7",
        "background": "#7c6f64"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "color": "#fbf1c7",
        "background": "#7c6f64"
      },
      'code[class*="language-"]::-moz-selection': {
        "color": "#fbf1c7",
        "background": "#7c6f64"
      },
      'code[class*="language-"] ::-moz-selection': {
        "color": "#fbf1c7",
        "background": "#7c6f64"
      },
      'pre[class*="language-"]::selection': {
        "color": "#fbf1c7",
        "background": "#7c6f64"
      },
      'pre[class*="language-"] ::selection': {
        "color": "#fbf1c7",
        "background": "#7c6f64"
      },
      'code[class*="language-"]::selection': {
        "color": "#fbf1c7",
        "background": "#7c6f64"
      },
      'code[class*="language-"] ::selection': {
        "color": "#fbf1c7",
        "background": "#7c6f64"
      },
      ':not(pre) > code[class*="language-"]': {
        "background": "#1d2021",
        "padding": "0.1em",
        "borderRadius": "0.3em"
      },
      "comment": {
        "color": "#a89984"
      },
      "prolog": {
        "color": "#a89984"
      },
      "cdata": {
        "color": "#a89984"
      },
      "delimiter": {
        "color": "#fb4934"
      },
      "boolean": {
        "color": "#fb4934"
      },
      "keyword": {
        "color": "#fb4934"
      },
      "selector": {
        "color": "#fb4934"
      },
      "important": {
        "color": "#fb4934"
      },
      "atrule": {
        "color": "#fb4934"
      },
      "operator": {
        "color": "#a89984"
      },
      "punctuation": {
        "color": "#a89984"
      },
      "attr-name": {
        "color": "#a89984"
      },
      "tag": {
        "color": "#fabd2f"
      },
      "tag.punctuation": {
        "color": "#fabd2f"
      },
      "doctype": {
        "color": "#fabd2f"
      },
      "builtin": {
        "color": "#fabd2f"
      },
      "entity": {
        "color": "#d3869b"
      },
      "number": {
        "color": "#d3869b"
      },
      "symbol": {
        "color": "#d3869b"
      },
      "property": {
        "color": "#fb4934"
      },
      "constant": {
        "color": "#fb4934"
      },
      "variable": {
        "color": "#fb4934"
      },
      "string": {
        "color": "#b8bb26"
      },
      "char": {
        "color": "#b8bb26"
      },
      "attr-value": {
        "color": "#a89984"
      },
      "attr-value.punctuation": {
        "color": "#a89984"
      },
      "url": {
        "color": "#b8bb26",
        "textDecoration": "underline"
      },
      "function": {
        "color": "#fabd2f"
      },
      "regex": {
        "background": "#b8bb26"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "inserted": {
        "background": "#a89984"
      },
      "deleted": {
        "background": "#fb4934"
      }
    };
  })(gruvboxDark);
  return gruvboxDark;
}
var gruvboxLight = {};
var hasRequiredGruvboxLight;
function requireGruvboxLight() {
  if (hasRequiredGruvboxLight)
    return gruvboxLight;
  hasRequiredGruvboxLight = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "#3c3836",
        "fontFamily": 'Consolas, Monaco, "Andale Mono", monospace',
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "#3c3836",
        "fontFamily": 'Consolas, Monaco, "Andale Mono", monospace',
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": "0.5em 0",
        "overflow": "auto",
        "background": "#f9f5d7"
      },
      'pre[class*="language-"]::-moz-selection': {
        "color": "#282828",
        "background": "#a89984"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "color": "#282828",
        "background": "#a89984"
      },
      'code[class*="language-"]::-moz-selection': {
        "color": "#282828",
        "background": "#a89984"
      },
      'code[class*="language-"] ::-moz-selection': {
        "color": "#282828",
        "background": "#a89984"
      },
      'pre[class*="language-"]::selection': {
        "color": "#282828",
        "background": "#a89984"
      },
      'pre[class*="language-"] ::selection': {
        "color": "#282828",
        "background": "#a89984"
      },
      'code[class*="language-"]::selection': {
        "color": "#282828",
        "background": "#a89984"
      },
      'code[class*="language-"] ::selection': {
        "color": "#282828",
        "background": "#a89984"
      },
      ':not(pre) > code[class*="language-"]': {
        "background": "#f9f5d7",
        "padding": "0.1em",
        "borderRadius": "0.3em"
      },
      "comment": {
        "color": "#7c6f64"
      },
      "prolog": {
        "color": "#7c6f64"
      },
      "cdata": {
        "color": "#7c6f64"
      },
      "delimiter": {
        "color": "#9d0006"
      },
      "boolean": {
        "color": "#9d0006"
      },
      "keyword": {
        "color": "#9d0006"
      },
      "selector": {
        "color": "#9d0006"
      },
      "important": {
        "color": "#9d0006"
      },
      "atrule": {
        "color": "#9d0006"
      },
      "operator": {
        "color": "#7c6f64"
      },
      "punctuation": {
        "color": "#7c6f64"
      },
      "attr-name": {
        "color": "#7c6f64"
      },
      "tag": {
        "color": "#b57614"
      },
      "tag.punctuation": {
        "color": "#b57614"
      },
      "doctype": {
        "color": "#b57614"
      },
      "builtin": {
        "color": "#b57614"
      },
      "entity": {
        "color": "#8f3f71"
      },
      "number": {
        "color": "#8f3f71"
      },
      "symbol": {
        "color": "#8f3f71"
      },
      "property": {
        "color": "#9d0006"
      },
      "constant": {
        "color": "#9d0006"
      },
      "variable": {
        "color": "#9d0006"
      },
      "string": {
        "color": "#797403"
      },
      "char": {
        "color": "#797403"
      },
      "attr-value": {
        "color": "#7c6f64"
      },
      "attr-value.punctuation": {
        "color": "#7c6f64"
      },
      "url": {
        "color": "#797403",
        "textDecoration": "underline"
      },
      "function": {
        "color": "#b57614"
      },
      "regex": {
        "background": "#797403"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "inserted": {
        "background": "#7c6f64"
      },
      "deleted": {
        "background": "#9d0006"
      }
    };
  })(gruvboxLight);
  return gruvboxLight;
}
var holiTheme = {};
var hasRequiredHoliTheme;
function requireHoliTheme() {
  if (hasRequiredHoliTheme)
    return holiTheme;
  hasRequiredHoliTheme = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      "code[class*='language-']": {
        "color": "#d6e7ff",
        "background": "#030314",
        "textShadow": "none",
        "fontFamily": 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        "fontSize": "1em",
        "lineHeight": "1.5",
        "letterSpacing": ".2px",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "textAlign": "left",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      "pre[class*='language-']": {
        "color": "#d6e7ff",
        "background": "#030314",
        "textShadow": "none",
        "fontFamily": 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        "fontSize": "1em",
        "lineHeight": "1.5",
        "letterSpacing": ".2px",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "textAlign": "left",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "border": "1px solid #2a4555",
        "borderRadius": "5px",
        "padding": "1.5em 1em",
        "margin": "1em 0",
        "overflow": "auto"
      },
      "pre[class*='language-']::-moz-selection": {
        "color": "inherit",
        "background": "#1d3b54",
        "textShadow": "none"
      },
      "pre[class*='language-'] ::-moz-selection": {
        "color": "inherit",
        "background": "#1d3b54",
        "textShadow": "none"
      },
      "code[class*='language-']::-moz-selection": {
        "color": "inherit",
        "background": "#1d3b54",
        "textShadow": "none"
      },
      "code[class*='language-'] ::-moz-selection": {
        "color": "inherit",
        "background": "#1d3b54",
        "textShadow": "none"
      },
      "pre[class*='language-']::selection": {
        "color": "inherit",
        "background": "#1d3b54",
        "textShadow": "none"
      },
      "pre[class*='language-'] ::selection": {
        "color": "inherit",
        "background": "#1d3b54",
        "textShadow": "none"
      },
      "code[class*='language-']::selection": {
        "color": "inherit",
        "background": "#1d3b54",
        "textShadow": "none"
      },
      "code[class*='language-'] ::selection": {
        "color": "inherit",
        "background": "#1d3b54",
        "textShadow": "none"
      },
      ":not(pre) > code[class*='language-']": {
        "color": "#f0f6f6",
        "background": "#2a4555",
        "padding": "0.2em 0.3em",
        "borderRadius": "0.2em",
        "boxDecorationBreak": "clone"
      },
      "comment": {
        "color": "#446e69"
      },
      "prolog": {
        "color": "#446e69"
      },
      "doctype": {
        "color": "#446e69"
      },
      "cdata": {
        "color": "#446e69"
      },
      "punctuation": {
        "color": "#d6b007"
      },
      "property": {
        "color": "#d6e7ff"
      },
      "tag": {
        "color": "#d6e7ff"
      },
      "boolean": {
        "color": "#d6e7ff"
      },
      "number": {
        "color": "#d6e7ff"
      },
      "constant": {
        "color": "#d6e7ff"
      },
      "symbol": {
        "color": "#d6e7ff"
      },
      "deleted": {
        "color": "#d6e7ff"
      },
      "selector": {
        "color": "#e60067"
      },
      "attr-name": {
        "color": "#e60067"
      },
      "builtin": {
        "color": "#e60067"
      },
      "inserted": {
        "color": "#e60067"
      },
      "string": {
        "color": "#49c6ec"
      },
      "char": {
        "color": "#49c6ec"
      },
      "operator": {
        "color": "#ec8e01",
        "background": "transparent"
      },
      "entity": {
        "color": "#ec8e01",
        "background": "transparent"
      },
      "url": {
        "color": "#ec8e01",
        "background": "transparent"
      },
      ".language-css .token.string": {
        "color": "#ec8e01",
        "background": "transparent"
      },
      ".style .token.string": {
        "color": "#ec8e01",
        "background": "transparent"
      },
      "atrule": {
        "color": "#0fe468"
      },
      "attr-value": {
        "color": "#0fe468"
      },
      "keyword": {
        "color": "#0fe468"
      },
      "function": {
        "color": "#78f3e9"
      },
      "class-name": {
        "color": "#78f3e9"
      },
      "regex": {
        "color": "#d6e7ff"
      },
      "important": {
        "color": "#d6e7ff"
      },
      "variable": {
        "color": "#d6e7ff"
      }
    };
  })(holiTheme);
  return holiTheme;
}
var hopscotch = {};
var hasRequiredHopscotch;
function requireHopscotch() {
  if (hasRequiredHopscotch)
    return hopscotch;
  hasRequiredHopscotch = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "fontFamily": '"Fira Mono", Menlo, Monaco, "Lucida Console", "Courier New", Courier, monospace',
        "fontSize": "16px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "wordSpacing": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "whiteSpace": "pre-wrap",
        "wordBreak": "break-all",
        "wordWrap": "break-word",
        "background": "#322931",
        "color": "#b9b5b8"
      },
      'pre[class*="language-"]': {
        "fontFamily": '"Fira Mono", Menlo, Monaco, "Lucida Console", "Courier New", Courier, monospace',
        "fontSize": "16px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "wordSpacing": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "whiteSpace": "pre-wrap",
        "wordBreak": "break-all",
        "wordWrap": "break-word",
        "background": "#322931",
        "color": "#b9b5b8",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
      },
      'pre > code[class*="language-"]': {
        "fontSize": "1em"
      },
      ':not(pre) > code[class*="language-"]': {
        "padding": ".1em",
        "borderRadius": ".3em"
      },
      "comment": {
        "color": "#797379"
      },
      "prolog": {
        "color": "#797379"
      },
      "doctype": {
        "color": "#797379"
      },
      "cdata": {
        "color": "#797379"
      },
      "punctuation": {
        "color": "#b9b5b8"
      },
      ".namespace": {
        "Opacity": ".7"
      },
      "null": {
        "color": "#fd8b19"
      },
      "operator": {
        "color": "#fd8b19"
      },
      "boolean": {
        "color": "#fd8b19"
      },
      "number": {
        "color": "#fd8b19"
      },
      "property": {
        "color": "#fdcc59"
      },
      "tag": {
        "color": "#1290bf"
      },
      "string": {
        "color": "#149b93"
      },
      "selector": {
        "color": "#c85e7c"
      },
      "attr-name": {
        "color": "#fd8b19"
      },
      "entity": {
        "color": "#149b93",
        "cursor": "help"
      },
      "url": {
        "color": "#149b93"
      },
      ".language-css .token.string": {
        "color": "#149b93"
      },
      ".style .token.string": {
        "color": "#149b93"
      },
      "attr-value": {
        "color": "#8fc13e"
      },
      "keyword": {
        "color": "#8fc13e"
      },
      "control": {
        "color": "#8fc13e"
      },
      "directive": {
        "color": "#8fc13e"
      },
      "unit": {
        "color": "#8fc13e"
      },
      "statement": {
        "color": "#149b93"
      },
      "regex": {
        "color": "#149b93"
      },
      "atrule": {
        "color": "#149b93"
      },
      "placeholder": {
        "color": "#1290bf"
      },
      "variable": {
        "color": "#1290bf"
      },
      "important": {
        "color": "#dd464c",
        "fontWeight": "bold"
      },
      "pre > code.highlight": {
        "Outline": ".4em solid red",
        "OutlineOffset": ".4em"
      }
    };
  })(hopscotch);
  return hopscotch;
}
var lucario = {};
var hasRequiredLucario;
function requireLucario() {
  if (hasRequiredLucario)
    return lucario;
  hasRequiredLucario = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "#f8f8f2",
        "background": "none",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "#f8f8f2",
        "background": "#263E52",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em"
      },
      ':not(pre) > code[class*="language-"]': {
        "background": "#263E52",
        "padding": ".1em",
        "borderRadius": ".3em",
        "whiteSpace": "normal"
      },
      "comment": {
        "color": "#5c98cd"
      },
      "prolog": {
        "color": "#5c98cd"
      },
      "doctype": {
        "color": "#5c98cd"
      },
      "cdata": {
        "color": "#5c98cd"
      },
      "punctuation": {
        "color": "#f8f8f2"
      },
      ".namespace": {
        "Opacity": ".7"
      },
      "property": {
        "color": "#F05E5D"
      },
      "tag": {
        "color": "#F05E5D"
      },
      "constant": {
        "color": "#F05E5D"
      },
      "symbol": {
        "color": "#F05E5D"
      },
      "deleted": {
        "color": "#F05E5D"
      },
      "boolean": {
        "color": "#BC94F9"
      },
      "number": {
        "color": "#BC94F9"
      },
      "selector": {
        "color": "#FCFCD6"
      },
      "attr-name": {
        "color": "#FCFCD6"
      },
      "string": {
        "color": "#FCFCD6"
      },
      "char": {
        "color": "#FCFCD6"
      },
      "builtin": {
        "color": "#FCFCD6"
      },
      "inserted": {
        "color": "#FCFCD6"
      },
      "operator": {
        "color": "#f8f8f2"
      },
      "entity": {
        "color": "#f8f8f2",
        "cursor": "help"
      },
      "url": {
        "color": "#f8f8f2"
      },
      ".language-css .token.string": {
        "color": "#f8f8f2"
      },
      ".style .token.string": {
        "color": "#f8f8f2"
      },
      "variable": {
        "color": "#f8f8f2"
      },
      "atrule": {
        "color": "#66D8EF"
      },
      "attr-value": {
        "color": "#66D8EF"
      },
      "function": {
        "color": "#66D8EF"
      },
      "class-name": {
        "color": "#66D8EF"
      },
      "keyword": {
        "color": "#6EB26E"
      },
      "regex": {
        "color": "#F05E5D"
      },
      "important": {
        "color": "#F05E5D",
        "fontWeight": "bold"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      }
    };
  })(lucario);
  return lucario;
}
var materialDark = {};
var hasRequiredMaterialDark;
function requireMaterialDark() {
  if (hasRequiredMaterialDark)
    return materialDark;
  hasRequiredMaterialDark = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "color": "#eee",
        "background": "#2f2f2f",
        "fontFamily": "Roboto Mono, monospace",
        "fontSize": "1em",
        "lineHeight": "1.5em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "color": "#eee",
        "background": "#2f2f2f",
        "fontFamily": "Roboto Mono, monospace",
        "fontSize": "1em",
        "lineHeight": "1.5em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "overflow": "auto",
        "position": "relative",
        "margin": "0.5em 0",
        "padding": "1.25em 1em"
      },
      'code[class*="language-"]::-moz-selection': {
        "background": "#363636"
      },
      'pre[class*="language-"]::-moz-selection': {
        "background": "#363636"
      },
      'code[class*="language-"] ::-moz-selection': {
        "background": "#363636"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "background": "#363636"
      },
      'code[class*="language-"]::selection': {
        "background": "#363636"
      },
      'pre[class*="language-"]::selection': {
        "background": "#363636"
      },
      'code[class*="language-"] ::selection': {
        "background": "#363636"
      },
      'pre[class*="language-"] ::selection': {
        "background": "#363636"
      },
      ':not(pre) > code[class*="language-"]': {
        "whiteSpace": "normal",
        "borderRadius": "0.2em",
        "padding": "0.1em"
      },
      ".language-css > code": {
        "color": "#fd9170"
      },
      ".language-sass > code": {
        "color": "#fd9170"
      },
      ".language-scss > code": {
        "color": "#fd9170"
      },
      '[class*="language-"] .namespace': {
        "Opacity": "0.7"
      },
      "atrule": {
        "color": "#c792ea"
      },
      "attr-name": {
        "color": "#ffcb6b"
      },
      "attr-value": {
        "color": "#a5e844"
      },
      "attribute": {
        "color": "#a5e844"
      },
      "boolean": {
        "color": "#c792ea"
      },
      "builtin": {
        "color": "#ffcb6b"
      },
      "cdata": {
        "color": "#80cbc4"
      },
      "char": {
        "color": "#80cbc4"
      },
      "class": {
        "color": "#ffcb6b"
      },
      "class-name": {
        "color": "#f2ff00"
      },
      "comment": {
        "color": "#616161"
      },
      "constant": {
        "color": "#c792ea"
      },
      "deleted": {
        "color": "#ff6666"
      },
      "doctype": {
        "color": "#616161"
      },
      "entity": {
        "color": "#ff6666"
      },
      "function": {
        "color": "#c792ea"
      },
      "hexcode": {
        "color": "#f2ff00"
      },
      "id": {
        "color": "#c792ea",
        "fontWeight": "bold"
      },
      "important": {
        "color": "#c792ea",
        "fontWeight": "bold"
      },
      "inserted": {
        "color": "#80cbc4"
      },
      "keyword": {
        "color": "#c792ea"
      },
      "number": {
        "color": "#fd9170"
      },
      "operator": {
        "color": "#89ddff"
      },
      "prolog": {
        "color": "#616161"
      },
      "property": {
        "color": "#80cbc4"
      },
      "pseudo-class": {
        "color": "#a5e844"
      },
      "pseudo-element": {
        "color": "#a5e844"
      },
      "punctuation": {
        "color": "#89ddff"
      },
      "regex": {
        "color": "#f2ff00"
      },
      "selector": {
        "color": "#ff6666"
      },
      "string": {
        "color": "#a5e844"
      },
      "symbol": {
        "color": "#c792ea"
      },
      "tag": {
        "color": "#ff6666"
      },
      "unit": {
        "color": "#fd9170"
      },
      "url": {
        "color": "#ff6666"
      },
      "variable": {
        "color": "#ff6666"
      }
    };
  })(materialDark);
  return materialDark;
}
var materialLight = {};
var hasRequiredMaterialLight;
function requireMaterialLight() {
  if (hasRequiredMaterialLight)
    return materialLight;
  hasRequiredMaterialLight = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "color": "#90a4ae",
        "background": "#fafafa",
        "fontFamily": "Roboto Mono, monospace",
        "fontSize": "1em",
        "lineHeight": "1.5em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "color": "#90a4ae",
        "background": "#fafafa",
        "fontFamily": "Roboto Mono, monospace",
        "fontSize": "1em",
        "lineHeight": "1.5em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "overflow": "auto",
        "position": "relative",
        "margin": "0.5em 0",
        "padding": "1.25em 1em"
      },
      'code[class*="language-"]::-moz-selection': {
        "background": "#cceae7",
        "color": "#263238"
      },
      'pre[class*="language-"]::-moz-selection': {
        "background": "#cceae7",
        "color": "#263238"
      },
      'code[class*="language-"] ::-moz-selection': {
        "background": "#cceae7",
        "color": "#263238"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "background": "#cceae7",
        "color": "#263238"
      },
      'code[class*="language-"]::selection': {
        "background": "#cceae7",
        "color": "#263238"
      },
      'pre[class*="language-"]::selection': {
        "background": "#cceae7",
        "color": "#263238"
      },
      'code[class*="language-"] ::selection': {
        "background": "#cceae7",
        "color": "#263238"
      },
      'pre[class*="language-"] ::selection': {
        "background": "#cceae7",
        "color": "#263238"
      },
      ':not(pre) > code[class*="language-"]': {
        "whiteSpace": "normal",
        "borderRadius": "0.2em",
        "padding": "0.1em"
      },
      ".language-css > code": {
        "color": "#f76d47"
      },
      ".language-sass > code": {
        "color": "#f76d47"
      },
      ".language-scss > code": {
        "color": "#f76d47"
      },
      '[class*="language-"] .namespace': {
        "Opacity": "0.7"
      },
      "atrule": {
        "color": "#7c4dff"
      },
      "attr-name": {
        "color": "#39adb5"
      },
      "attr-value": {
        "color": "#f6a434"
      },
      "attribute": {
        "color": "#f6a434"
      },
      "boolean": {
        "color": "#7c4dff"
      },
      "builtin": {
        "color": "#39adb5"
      },
      "cdata": {
        "color": "#39adb5"
      },
      "char": {
        "color": "#39adb5"
      },
      "class": {
        "color": "#39adb5"
      },
      "class-name": {
        "color": "#6182b8"
      },
      "comment": {
        "color": "#aabfc9"
      },
      "constant": {
        "color": "#7c4dff"
      },
      "deleted": {
        "color": "#e53935"
      },
      "doctype": {
        "color": "#aabfc9"
      },
      "entity": {
        "color": "#e53935"
      },
      "function": {
        "color": "#7c4dff"
      },
      "hexcode": {
        "color": "#f76d47"
      },
      "id": {
        "color": "#7c4dff",
        "fontWeight": "bold"
      },
      "important": {
        "color": "#7c4dff",
        "fontWeight": "bold"
      },
      "inserted": {
        "color": "#39adb5"
      },
      "keyword": {
        "color": "#7c4dff"
      },
      "number": {
        "color": "#f76d47"
      },
      "operator": {
        "color": "#39adb5"
      },
      "prolog": {
        "color": "#aabfc9"
      },
      "property": {
        "color": "#39adb5"
      },
      "pseudo-class": {
        "color": "#f6a434"
      },
      "pseudo-element": {
        "color": "#f6a434"
      },
      "punctuation": {
        "color": "#39adb5"
      },
      "regex": {
        "color": "#6182b8"
      },
      "selector": {
        "color": "#e53935"
      },
      "string": {
        "color": "#f6a434"
      },
      "symbol": {
        "color": "#7c4dff"
      },
      "tag": {
        "color": "#e53935"
      },
      "unit": {
        "color": "#f76d47"
      },
      "url": {
        "color": "#e53935"
      },
      "variable": {
        "color": "#e53935"
      }
    };
  })(materialLight);
  return materialLight;
}
var materialOceanic = {};
var hasRequiredMaterialOceanic;
function requireMaterialOceanic() {
  if (hasRequiredMaterialOceanic)
    return materialOceanic;
  hasRequiredMaterialOceanic = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "color": "#c3cee3",
        "background": "#263238",
        "fontFamily": "Roboto Mono, monospace",
        "fontSize": "1em",
        "lineHeight": "1.5em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "color": "#c3cee3",
        "background": "#263238",
        "fontFamily": "Roboto Mono, monospace",
        "fontSize": "1em",
        "lineHeight": "1.5em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "overflow": "auto",
        "position": "relative",
        "margin": "0.5em 0",
        "padding": "1.25em 1em"
      },
      'code[class*="language-"]::-moz-selection': {
        "background": "#363636"
      },
      'pre[class*="language-"]::-moz-selection': {
        "background": "#363636"
      },
      'code[class*="language-"] ::-moz-selection': {
        "background": "#363636"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "background": "#363636"
      },
      'code[class*="language-"]::selection': {
        "background": "#363636"
      },
      'pre[class*="language-"]::selection': {
        "background": "#363636"
      },
      'code[class*="language-"] ::selection': {
        "background": "#363636"
      },
      'pre[class*="language-"] ::selection': {
        "background": "#363636"
      },
      ':not(pre) > code[class*="language-"]': {
        "whiteSpace": "normal",
        "borderRadius": "0.2em",
        "padding": "0.1em"
      },
      ".language-css > code": {
        "color": "#fd9170"
      },
      ".language-sass > code": {
        "color": "#fd9170"
      },
      ".language-scss > code": {
        "color": "#fd9170"
      },
      '[class*="language-"] .namespace': {
        "Opacity": "0.7"
      },
      "atrule": {
        "color": "#c792ea"
      },
      "attr-name": {
        "color": "#ffcb6b"
      },
      "attr-value": {
        "color": "#c3e88d"
      },
      "attribute": {
        "color": "#c3e88d"
      },
      "boolean": {
        "color": "#c792ea"
      },
      "builtin": {
        "color": "#ffcb6b"
      },
      "cdata": {
        "color": "#80cbc4"
      },
      "char": {
        "color": "#80cbc4"
      },
      "class": {
        "color": "#ffcb6b"
      },
      "class-name": {
        "color": "#f2ff00"
      },
      "color": {
        "color": "#f2ff00"
      },
      "comment": {
        "color": "#546e7a"
      },
      "constant": {
        "color": "#c792ea"
      },
      "deleted": {
        "color": "#f07178"
      },
      "doctype": {
        "color": "#546e7a"
      },
      "entity": {
        "color": "#f07178"
      },
      "function": {
        "color": "#c792ea"
      },
      "hexcode": {
        "color": "#f2ff00"
      },
      "id": {
        "color": "#c792ea",
        "fontWeight": "bold"
      },
      "important": {
        "color": "#c792ea",
        "fontWeight": "bold"
      },
      "inserted": {
        "color": "#80cbc4"
      },
      "keyword": {
        "color": "#c792ea",
        "fontStyle": "italic"
      },
      "number": {
        "color": "#fd9170"
      },
      "operator": {
        "color": "#89ddff"
      },
      "prolog": {
        "color": "#546e7a"
      },
      "property": {
        "color": "#80cbc4"
      },
      "pseudo-class": {
        "color": "#c3e88d"
      },
      "pseudo-element": {
        "color": "#c3e88d"
      },
      "punctuation": {
        "color": "#89ddff"
      },
      "regex": {
        "color": "#f2ff00"
      },
      "selector": {
        "color": "#f07178"
      },
      "string": {
        "color": "#c3e88d"
      },
      "symbol": {
        "color": "#c792ea"
      },
      "tag": {
        "color": "#f07178"
      },
      "unit": {
        "color": "#f07178"
      },
      "url": {
        "color": "#fd9170"
      },
      "variable": {
        "color": "#f07178"
      }
    };
  })(materialOceanic);
  return materialOceanic;
}
var nightOwl = {};
var hasRequiredNightOwl;
function requireNightOwl() {
  if (hasRequiredNightOwl)
    return nightOwl;
  hasRequiredNightOwl = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "#d6deeb",
        "fontFamily": 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "fontSize": "1em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "white",
        "fontFamily": 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "fontSize": "1em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": "0.5em 0",
        "overflow": "auto",
        "background": "#011627"
      },
      'pre[class*="language-"]::-moz-selection': {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
      },
      'code[class*="language-"]::-moz-selection': {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
      },
      'code[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
      },
      'pre[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
      },
      'pre[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
      },
      'code[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
      },
      'code[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
      },
      ':not(pre) > code[class*="language-"]': {
        "color": "white",
        "background": "#011627",
        "padding": "0.1em",
        "borderRadius": "0.3em",
        "whiteSpace": "normal"
      },
      "comment": {
        "color": "rgb(99, 119, 119)",
        "fontStyle": "italic"
      },
      "prolog": {
        "color": "rgb(99, 119, 119)",
        "fontStyle": "italic"
      },
      "cdata": {
        "color": "rgb(99, 119, 119)",
        "fontStyle": "italic"
      },
      "punctuation": {
        "color": "rgb(199, 146, 234)"
      },
      ".namespace": {
        "color": "rgb(178, 204, 214)"
      },
      "deleted": {
        "color": "rgba(239, 83, 80, 0.56)",
        "fontStyle": "italic"
      },
      "symbol": {
        "color": "rgb(128, 203, 196)"
      },
      "property": {
        "color": "rgb(128, 203, 196)"
      },
      "tag": {
        "color": "rgb(127, 219, 202)"
      },
      "operator": {
        "color": "rgb(127, 219, 202)"
      },
      "keyword": {
        "color": "rgb(127, 219, 202)"
      },
      "boolean": {
        "color": "rgb(255, 88, 116)"
      },
      "number": {
        "color": "rgb(247, 140, 108)"
      },
      "constant": {
        "color": "rgb(130, 170, 255)"
      },
      "function": {
        "color": "rgb(130, 170, 255)"
      },
      "builtin": {
        "color": "rgb(130, 170, 255)"
      },
      "char": {
        "color": "rgb(130, 170, 255)"
      },
      "selector": {
        "color": "rgb(199, 146, 234)",
        "fontStyle": "italic"
      },
      "doctype": {
        "color": "rgb(199, 146, 234)",
        "fontStyle": "italic"
      },
      "attr-name": {
        "color": "rgb(173, 219, 103)",
        "fontStyle": "italic"
      },
      "inserted": {
        "color": "rgb(173, 219, 103)",
        "fontStyle": "italic"
      },
      "string": {
        "color": "rgb(173, 219, 103)"
      },
      "url": {
        "color": "rgb(173, 219, 103)"
      },
      "entity": {
        "color": "rgb(173, 219, 103)"
      },
      ".language-css .token.string": {
        "color": "rgb(173, 219, 103)"
      },
      ".style .token.string": {
        "color": "rgb(173, 219, 103)"
      },
      "class-name": {
        "color": "rgb(255, 203, 139)"
      },
      "atrule": {
        "color": "rgb(255, 203, 139)"
      },
      "attr-value": {
        "color": "rgb(255, 203, 139)"
      },
      "regex": {
        "color": "rgb(214, 222, 235)"
      },
      "important": {
        "color": "rgb(214, 222, 235)",
        "fontWeight": "bold"
      },
      "variable": {
        "color": "rgb(214, 222, 235)"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      }
    };
  })(nightOwl);
  return nightOwl;
}
var nord = {};
var hasRequiredNord;
function requireNord() {
  if (hasRequiredNord)
    return nord;
  hasRequiredNord = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "#f8f8f2",
        "background": "none",
        "fontFamily": `"Fira Code", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "#f8f8f2",
        "background": "#2E3440",
        "fontFamily": `"Fira Code", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em"
      },
      ':not(pre) > code[class*="language-"]': {
        "background": "#2E3440",
        "padding": ".1em",
        "borderRadius": ".3em",
        "whiteSpace": "normal"
      },
      "comment": {
        "color": "#636f88"
      },
      "prolog": {
        "color": "#636f88"
      },
      "doctype": {
        "color": "#636f88"
      },
      "cdata": {
        "color": "#636f88"
      },
      "punctuation": {
        "color": "#81A1C1"
      },
      ".namespace": {
        "Opacity": ".7"
      },
      "property": {
        "color": "#81A1C1"
      },
      "tag": {
        "color": "#81A1C1"
      },
      "constant": {
        "color": "#81A1C1"
      },
      "symbol": {
        "color": "#81A1C1"
      },
      "deleted": {
        "color": "#81A1C1"
      },
      "number": {
        "color": "#B48EAD"
      },
      "boolean": {
        "color": "#81A1C1"
      },
      "selector": {
        "color": "#A3BE8C"
      },
      "attr-name": {
        "color": "#A3BE8C"
      },
      "string": {
        "color": "#A3BE8C"
      },
      "char": {
        "color": "#A3BE8C"
      },
      "builtin": {
        "color": "#A3BE8C"
      },
      "inserted": {
        "color": "#A3BE8C"
      },
      "operator": {
        "color": "#81A1C1"
      },
      "entity": {
        "color": "#81A1C1",
        "cursor": "help"
      },
      "url": {
        "color": "#81A1C1"
      },
      ".language-css .token.string": {
        "color": "#81A1C1"
      },
      ".style .token.string": {
        "color": "#81A1C1"
      },
      "variable": {
        "color": "#81A1C1"
      },
      "atrule": {
        "color": "#88C0D0"
      },
      "attr-value": {
        "color": "#88C0D0"
      },
      "function": {
        "color": "#88C0D0"
      },
      "class-name": {
        "color": "#88C0D0"
      },
      "keyword": {
        "color": "#81A1C1"
      },
      "regex": {
        "color": "#EBCB8B"
      },
      "important": {
        "color": "#EBCB8B",
        "fontWeight": "bold"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      }
    };
  })(nord);
  return nord;
}
var oneDark = {};
var hasRequiredOneDark;
function requireOneDark() {
  if (hasRequiredOneDark)
    return oneDark;
  hasRequiredOneDark = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "background": "hsl(220, 13%, 18%)",
        "color": "hsl(220, 14%, 71%)",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "2",
        "OTabSize": "2",
        "tabSize": "2",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "background": "hsl(220, 13%, 18%)",
        "color": "hsl(220, 14%, 71%)",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "2",
        "OTabSize": "2",
        "tabSize": "2",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": "0.5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em"
      },
      'code[class*="language-"]::-moz-selection': {
        "background": "hsl(220, 13%, 28%)",
        "color": "inherit",
        "textShadow": "none"
      },
      'code[class*="language-"] *::-moz-selection': {
        "background": "hsl(220, 13%, 28%)",
        "color": "inherit",
        "textShadow": "none"
      },
      'pre[class*="language-"] *::-moz-selection': {
        "background": "hsl(220, 13%, 28%)",
        "color": "inherit",
        "textShadow": "none"
      },
      'code[class*="language-"]::selection': {
        "background": "hsl(220, 13%, 28%)",
        "color": "inherit",
        "textShadow": "none"
      },
      'code[class*="language-"] *::selection': {
        "background": "hsl(220, 13%, 28%)",
        "color": "inherit",
        "textShadow": "none"
      },
      'pre[class*="language-"] *::selection': {
        "background": "hsl(220, 13%, 28%)",
        "color": "inherit",
        "textShadow": "none"
      },
      ':not(pre) > code[class*="language-"]': {
        "padding": "0.2em 0.3em",
        "borderRadius": "0.3em",
        "whiteSpace": "normal"
      },
      "comment": {
        "color": "hsl(220, 10%, 40%)",
        "fontStyle": "italic"
      },
      "prolog": {
        "color": "hsl(220, 10%, 40%)"
      },
      "cdata": {
        "color": "hsl(220, 10%, 40%)"
      },
      "doctype": {
        "color": "hsl(220, 14%, 71%)"
      },
      "punctuation": {
        "color": "hsl(220, 14%, 71%)"
      },
      "entity": {
        "color": "hsl(220, 14%, 71%)",
        "cursor": "help"
      },
      "attr-name": {
        "color": "hsl(29, 54%, 61%)"
      },
      "class-name": {
        "color": "hsl(29, 54%, 61%)"
      },
      "boolean": {
        "color": "hsl(29, 54%, 61%)"
      },
      "constant": {
        "color": "hsl(29, 54%, 61%)"
      },
      "number": {
        "color": "hsl(29, 54%, 61%)"
      },
      "atrule": {
        "color": "hsl(29, 54%, 61%)"
      },
      "keyword": {
        "color": "hsl(286, 60%, 67%)"
      },
      "property": {
        "color": "hsl(355, 65%, 65%)"
      },
      "tag": {
        "color": "hsl(355, 65%, 65%)"
      },
      "symbol": {
        "color": "hsl(355, 65%, 65%)"
      },
      "deleted": {
        "color": "hsl(355, 65%, 65%)"
      },
      "important": {
        "color": "hsl(355, 65%, 65%)"
      },
      "selector": {
        "color": "hsl(95, 38%, 62%)"
      },
      "string": {
        "color": "hsl(95, 38%, 62%)"
      },
      "char": {
        "color": "hsl(95, 38%, 62%)"
      },
      "builtin": {
        "color": "hsl(95, 38%, 62%)"
      },
      "inserted": {
        "color": "hsl(95, 38%, 62%)"
      },
      "regex": {
        "color": "hsl(95, 38%, 62%)"
      },
      "attr-value": {
        "color": "hsl(95, 38%, 62%)"
      },
      "attr-value > .token.punctuation": {
        "color": "hsl(95, 38%, 62%)"
      },
      "variable": {
        "color": "hsl(207, 82%, 66%)"
      },
      "operator": {
        "color": "hsl(207, 82%, 66%)"
      },
      "function": {
        "color": "hsl(207, 82%, 66%)"
      },
      "url": {
        "color": "hsl(187, 47%, 55%)"
      },
      "attr-value > .token.punctuation.attr-equals": {
        "color": "hsl(220, 14%, 71%)"
      },
      "special-attr > .token.attr-value > .token.value.css": {
        "color": "hsl(220, 14%, 71%)"
      },
      ".language-css .token.selector": {
        "color": "hsl(355, 65%, 65%)"
      },
      ".language-css .token.property": {
        "color": "hsl(220, 14%, 71%)"
      },
      ".language-css .token.function": {
        "color": "hsl(187, 47%, 55%)"
      },
      ".language-css .token.url > .token.function": {
        "color": "hsl(187, 47%, 55%)"
      },
      ".language-css .token.url > .token.string.url": {
        "color": "hsl(95, 38%, 62%)"
      },
      ".language-css .token.important": {
        "color": "hsl(286, 60%, 67%)"
      },
      ".language-css .token.atrule .token.rule": {
        "color": "hsl(286, 60%, 67%)"
      },
      ".language-javascript .token.operator": {
        "color": "hsl(286, 60%, 67%)"
      },
      ".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation": {
        "color": "hsl(5, 48%, 51%)"
      },
      ".language-json .token.operator": {
        "color": "hsl(220, 14%, 71%)"
      },
      ".language-json .token.null.keyword": {
        "color": "hsl(29, 54%, 61%)"
      },
      ".language-markdown .token.url": {
        "color": "hsl(220, 14%, 71%)"
      },
      ".language-markdown .token.url > .token.operator": {
        "color": "hsl(220, 14%, 71%)"
      },
      ".language-markdown .token.url-reference.url > .token.string": {
        "color": "hsl(220, 14%, 71%)"
      },
      ".language-markdown .token.url > .token.content": {
        "color": "hsl(207, 82%, 66%)"
      },
      ".language-markdown .token.url > .token.url": {
        "color": "hsl(187, 47%, 55%)"
      },
      ".language-markdown .token.url-reference.url": {
        "color": "hsl(187, 47%, 55%)"
      },
      ".language-markdown .token.blockquote.punctuation": {
        "color": "hsl(220, 10%, 40%)",
        "fontStyle": "italic"
      },
      ".language-markdown .token.hr.punctuation": {
        "color": "hsl(220, 10%, 40%)",
        "fontStyle": "italic"
      },
      ".language-markdown .token.code-snippet": {
        "color": "hsl(95, 38%, 62%)"
      },
      ".language-markdown .token.bold .token.content": {
        "color": "hsl(29, 54%, 61%)"
      },
      ".language-markdown .token.italic .token.content": {
        "color": "hsl(286, 60%, 67%)"
      },
      ".language-markdown .token.strike .token.content": {
        "color": "hsl(355, 65%, 65%)"
      },
      ".language-markdown .token.strike .token.punctuation": {
        "color": "hsl(355, 65%, 65%)"
      },
      ".language-markdown .token.list.punctuation": {
        "color": "hsl(355, 65%, 65%)"
      },
      ".language-markdown .token.title.important > .token.punctuation": {
        "color": "hsl(355, 65%, 65%)"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "namespace": {
        "Opacity": "0.8"
      },
      "token.tab:not(:empty):before": {
        "color": "hsla(220, 14%, 71%, 0.15)",
        "textShadow": "none"
      },
      "token.cr:before": {
        "color": "hsla(220, 14%, 71%, 0.15)",
        "textShadow": "none"
      },
      "token.lf:before": {
        "color": "hsla(220, 14%, 71%, 0.15)",
        "textShadow": "none"
      },
      "token.space:before": {
        "color": "hsla(220, 14%, 71%, 0.15)",
        "textShadow": "none"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item": {
        "marginRight": "0.4em"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button": {
        "background": "hsl(220, 13%, 26%)",
        "color": "hsl(220, 9%, 55%)",
        "padding": "0.1em 0.4em",
        "borderRadius": "0.3em"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a": {
        "background": "hsl(220, 13%, 26%)",
        "color": "hsl(220, 9%, 55%)",
        "padding": "0.1em 0.4em",
        "borderRadius": "0.3em"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span": {
        "background": "hsl(220, 13%, 26%)",
        "color": "hsl(220, 9%, 55%)",
        "padding": "0.1em 0.4em",
        "borderRadius": "0.3em"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover": {
        "background": "hsl(220, 13%, 28%)",
        "color": "hsl(220, 14%, 71%)"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus": {
        "background": "hsl(220, 13%, 28%)",
        "color": "hsl(220, 14%, 71%)"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover": {
        "background": "hsl(220, 13%, 28%)",
        "color": "hsl(220, 14%, 71%)"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus": {
        "background": "hsl(220, 13%, 28%)",
        "color": "hsl(220, 14%, 71%)"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover": {
        "background": "hsl(220, 13%, 28%)",
        "color": "hsl(220, 14%, 71%)"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus": {
        "background": "hsl(220, 13%, 28%)",
        "color": "hsl(220, 14%, 71%)"
      },
      ".line-highlight.line-highlight": {
        "background": "hsla(220, 100%, 80%, 0.04)"
      },
      ".line-highlight.line-highlight:before": {
        "background": "hsl(220, 13%, 26%)",
        "color": "hsl(220, 14%, 71%)",
        "padding": "0.1em 0.6em",
        "borderRadius": "0.3em",
        "boxShadow": "0 2px 0 0 rgba(0, 0, 0, 0.2)"
      },
      ".line-highlight.line-highlight[data-end]:after": {
        "background": "hsl(220, 13%, 26%)",
        "color": "hsl(220, 14%, 71%)",
        "padding": "0.1em 0.6em",
        "borderRadius": "0.3em",
        "boxShadow": "0 2px 0 0 rgba(0, 0, 0, 0.2)"
      },
      "pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before": {
        "backgroundColor": "hsla(220, 100%, 80%, 0.04)"
      },
      ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRightColor": "hsla(220, 14%, 71%, 0.15)"
      },
      ".command-line .command-line-prompt": {
        "borderRightColor": "hsla(220, 14%, 71%, 0.15)"
      },
      ".line-numbers .line-numbers-rows > span:before": {
        "color": "hsl(220, 14%, 45%)"
      },
      ".command-line .command-line-prompt > span:before": {
        "color": "hsl(220, 14%, 45%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-1": {
        "color": "hsl(355, 65%, 65%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-5": {
        "color": "hsl(355, 65%, 65%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-9": {
        "color": "hsl(355, 65%, 65%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-2": {
        "color": "hsl(95, 38%, 62%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-6": {
        "color": "hsl(95, 38%, 62%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-10": {
        "color": "hsl(95, 38%, 62%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-3": {
        "color": "hsl(207, 82%, 66%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-7": {
        "color": "hsl(207, 82%, 66%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-11": {
        "color": "hsl(207, 82%, 66%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-4": {
        "color": "hsl(286, 60%, 67%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-8": {
        "color": "hsl(286, 60%, 67%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-12": {
        "color": "hsl(286, 60%, 67%)"
      },
      "pre.diff-highlight > code .token.token.deleted:not(.prefix)": {
        "backgroundColor": "hsla(353, 100%, 66%, 0.15)"
      },
      "pre > code.diff-highlight .token.token.deleted:not(.prefix)": {
        "backgroundColor": "hsla(353, 100%, 66%, 0.15)"
      },
      "pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
      },
      "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
      },
      "pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
      },
      "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
      },
      "pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
      },
      "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
      },
      "pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
      },
      "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
      },
      "pre.diff-highlight > code .token.token.inserted:not(.prefix)": {
        "backgroundColor": "hsla(137, 100%, 55%, 0.15)"
      },
      "pre > code.diff-highlight .token.token.inserted:not(.prefix)": {
        "backgroundColor": "hsla(137, 100%, 55%, 0.15)"
      },
      "pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
      },
      "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
      },
      "pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
      },
      "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
      },
      "pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
      },
      "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
      },
      "pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
      },
      "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
      },
      ".prism-previewer.prism-previewer:before": {
        "borderColor": "hsl(224, 13%, 17%)"
      },
      ".prism-previewer-gradient.prism-previewer-gradient div": {
        "borderColor": "hsl(224, 13%, 17%)",
        "borderRadius": "0.3em"
      },
      ".prism-previewer-color.prism-previewer-color:before": {
        "borderRadius": "0.3em"
      },
      ".prism-previewer-easing.prism-previewer-easing:before": {
        "borderRadius": "0.3em"
      },
      ".prism-previewer.prism-previewer:after": {
        "borderTopColor": "hsl(224, 13%, 17%)"
      },
      ".prism-previewer-flipped.prism-previewer-flipped.after": {
        "borderBottomColor": "hsl(224, 13%, 17%)"
      },
      ".prism-previewer-angle.prism-previewer-angle:before": {
        "background": "hsl(219, 13%, 22%)"
      },
      ".prism-previewer-time.prism-previewer-time:before": {
        "background": "hsl(219, 13%, 22%)"
      },
      ".prism-previewer-easing.prism-previewer-easing": {
        "background": "hsl(219, 13%, 22%)"
      },
      ".prism-previewer-angle.prism-previewer-angle circle": {
        "stroke": "hsl(220, 14%, 71%)",
        "strokeOpacity": "1"
      },
      ".prism-previewer-time.prism-previewer-time circle": {
        "stroke": "hsl(220, 14%, 71%)",
        "strokeOpacity": "1"
      },
      ".prism-previewer-easing.prism-previewer-easing circle": {
        "stroke": "hsl(220, 14%, 71%)",
        "fill": "transparent"
      },
      ".prism-previewer-easing.prism-previewer-easing path": {
        "stroke": "hsl(220, 14%, 71%)"
      },
      ".prism-previewer-easing.prism-previewer-easing line": {
        "stroke": "hsl(220, 14%, 71%)"
      }
    };
  })(oneDark);
  return oneDark;
}
var oneLight = {};
var hasRequiredOneLight;
function requireOneLight() {
  if (hasRequiredOneLight)
    return oneLight;
  hasRequiredOneLight = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "background": "hsl(230, 1%, 98%)",
        "color": "hsl(230, 8%, 24%)",
        "fontFamily": '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "2",
        "OTabSize": "2",
        "tabSize": "2",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "background": "hsl(230, 1%, 98%)",
        "color": "hsl(230, 8%, 24%)",
        "fontFamily": '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "2",
        "OTabSize": "2",
        "tabSize": "2",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": "0.5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em"
      },
      'code[class*="language-"]::-moz-selection': {
        "background": "hsl(230, 1%, 90%)",
        "color": "inherit"
      },
      'code[class*="language-"] *::-moz-selection': {
        "background": "hsl(230, 1%, 90%)",
        "color": "inherit"
      },
      'pre[class*="language-"] *::-moz-selection': {
        "background": "hsl(230, 1%, 90%)",
        "color": "inherit"
      },
      'code[class*="language-"]::selection': {
        "background": "hsl(230, 1%, 90%)",
        "color": "inherit"
      },
      'code[class*="language-"] *::selection': {
        "background": "hsl(230, 1%, 90%)",
        "color": "inherit"
      },
      'pre[class*="language-"] *::selection': {
        "background": "hsl(230, 1%, 90%)",
        "color": "inherit"
      },
      ':not(pre) > code[class*="language-"]': {
        "padding": "0.2em 0.3em",
        "borderRadius": "0.3em",
        "whiteSpace": "normal"
      },
      "comment": {
        "color": "hsl(230, 4%, 64%)",
        "fontStyle": "italic"
      },
      "prolog": {
        "color": "hsl(230, 4%, 64%)"
      },
      "cdata": {
        "color": "hsl(230, 4%, 64%)"
      },
      "doctype": {
        "color": "hsl(230, 8%, 24%)"
      },
      "punctuation": {
        "color": "hsl(230, 8%, 24%)"
      },
      "entity": {
        "color": "hsl(230, 8%, 24%)",
        "cursor": "help"
      },
      "attr-name": {
        "color": "hsl(35, 99%, 36%)"
      },
      "class-name": {
        "color": "hsl(35, 99%, 36%)"
      },
      "boolean": {
        "color": "hsl(35, 99%, 36%)"
      },
      "constant": {
        "color": "hsl(35, 99%, 36%)"
      },
      "number": {
        "color": "hsl(35, 99%, 36%)"
      },
      "atrule": {
        "color": "hsl(35, 99%, 36%)"
      },
      "keyword": {
        "color": "hsl(301, 63%, 40%)"
      },
      "property": {
        "color": "hsl(5, 74%, 59%)"
      },
      "tag": {
        "color": "hsl(5, 74%, 59%)"
      },
      "symbol": {
        "color": "hsl(5, 74%, 59%)"
      },
      "deleted": {
        "color": "hsl(5, 74%, 59%)"
      },
      "important": {
        "color": "hsl(5, 74%, 59%)"
      },
      "selector": {
        "color": "hsl(119, 34%, 47%)"
      },
      "string": {
        "color": "hsl(119, 34%, 47%)"
      },
      "char": {
        "color": "hsl(119, 34%, 47%)"
      },
      "builtin": {
        "color": "hsl(119, 34%, 47%)"
      },
      "inserted": {
        "color": "hsl(119, 34%, 47%)"
      },
      "regex": {
        "color": "hsl(119, 34%, 47%)"
      },
      "attr-value": {
        "color": "hsl(119, 34%, 47%)"
      },
      "attr-value > .token.punctuation": {
        "color": "hsl(119, 34%, 47%)"
      },
      "variable": {
        "color": "hsl(221, 87%, 60%)"
      },
      "operator": {
        "color": "hsl(221, 87%, 60%)"
      },
      "function": {
        "color": "hsl(221, 87%, 60%)"
      },
      "url": {
        "color": "hsl(198, 99%, 37%)"
      },
      "attr-value > .token.punctuation.attr-equals": {
        "color": "hsl(230, 8%, 24%)"
      },
      "special-attr > .token.attr-value > .token.value.css": {
        "color": "hsl(230, 8%, 24%)"
      },
      ".language-css .token.selector": {
        "color": "hsl(5, 74%, 59%)"
      },
      ".language-css .token.property": {
        "color": "hsl(230, 8%, 24%)"
      },
      ".language-css .token.function": {
        "color": "hsl(198, 99%, 37%)"
      },
      ".language-css .token.url > .token.function": {
        "color": "hsl(198, 99%, 37%)"
      },
      ".language-css .token.url > .token.string.url": {
        "color": "hsl(119, 34%, 47%)"
      },
      ".language-css .token.important": {
        "color": "hsl(301, 63%, 40%)"
      },
      ".language-css .token.atrule .token.rule": {
        "color": "hsl(301, 63%, 40%)"
      },
      ".language-javascript .token.operator": {
        "color": "hsl(301, 63%, 40%)"
      },
      ".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation": {
        "color": "hsl(344, 84%, 43%)"
      },
      ".language-json .token.operator": {
        "color": "hsl(230, 8%, 24%)"
      },
      ".language-json .token.null.keyword": {
        "color": "hsl(35, 99%, 36%)"
      },
      ".language-markdown .token.url": {
        "color": "hsl(230, 8%, 24%)"
      },
      ".language-markdown .token.url > .token.operator": {
        "color": "hsl(230, 8%, 24%)"
      },
      ".language-markdown .token.url-reference.url > .token.string": {
        "color": "hsl(230, 8%, 24%)"
      },
      ".language-markdown .token.url > .token.content": {
        "color": "hsl(221, 87%, 60%)"
      },
      ".language-markdown .token.url > .token.url": {
        "color": "hsl(198, 99%, 37%)"
      },
      ".language-markdown .token.url-reference.url": {
        "color": "hsl(198, 99%, 37%)"
      },
      ".language-markdown .token.blockquote.punctuation": {
        "color": "hsl(230, 4%, 64%)",
        "fontStyle": "italic"
      },
      ".language-markdown .token.hr.punctuation": {
        "color": "hsl(230, 4%, 64%)",
        "fontStyle": "italic"
      },
      ".language-markdown .token.code-snippet": {
        "color": "hsl(119, 34%, 47%)"
      },
      ".language-markdown .token.bold .token.content": {
        "color": "hsl(35, 99%, 36%)"
      },
      ".language-markdown .token.italic .token.content": {
        "color": "hsl(301, 63%, 40%)"
      },
      ".language-markdown .token.strike .token.content": {
        "color": "hsl(5, 74%, 59%)"
      },
      ".language-markdown .token.strike .token.punctuation": {
        "color": "hsl(5, 74%, 59%)"
      },
      ".language-markdown .token.list.punctuation": {
        "color": "hsl(5, 74%, 59%)"
      },
      ".language-markdown .token.title.important > .token.punctuation": {
        "color": "hsl(5, 74%, 59%)"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "namespace": {
        "Opacity": "0.8"
      },
      "token.tab:not(:empty):before": {
        "color": "hsla(230, 8%, 24%, 0.2)"
      },
      "token.cr:before": {
        "color": "hsla(230, 8%, 24%, 0.2)"
      },
      "token.lf:before": {
        "color": "hsla(230, 8%, 24%, 0.2)"
      },
      "token.space:before": {
        "color": "hsla(230, 8%, 24%, 0.2)"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item": {
        "marginRight": "0.4em"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button": {
        "background": "hsl(230, 1%, 90%)",
        "color": "hsl(230, 6%, 44%)",
        "padding": "0.1em 0.4em",
        "borderRadius": "0.3em"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a": {
        "background": "hsl(230, 1%, 90%)",
        "color": "hsl(230, 6%, 44%)",
        "padding": "0.1em 0.4em",
        "borderRadius": "0.3em"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span": {
        "background": "hsl(230, 1%, 90%)",
        "color": "hsl(230, 6%, 44%)",
        "padding": "0.1em 0.4em",
        "borderRadius": "0.3em"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover": {
        "background": "hsl(230, 1%, 78%)",
        "color": "hsl(230, 8%, 24%)"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus": {
        "background": "hsl(230, 1%, 78%)",
        "color": "hsl(230, 8%, 24%)"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover": {
        "background": "hsl(230, 1%, 78%)",
        "color": "hsl(230, 8%, 24%)"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus": {
        "background": "hsl(230, 1%, 78%)",
        "color": "hsl(230, 8%, 24%)"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover": {
        "background": "hsl(230, 1%, 78%)",
        "color": "hsl(230, 8%, 24%)"
      },
      "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus": {
        "background": "hsl(230, 1%, 78%)",
        "color": "hsl(230, 8%, 24%)"
      },
      ".line-highlight.line-highlight": {
        "background": "hsla(230, 8%, 24%, 0.05)"
      },
      ".line-highlight.line-highlight:before": {
        "background": "hsl(230, 1%, 90%)",
        "color": "hsl(230, 8%, 24%)",
        "padding": "0.1em 0.6em",
        "borderRadius": "0.3em",
        "boxShadow": "0 2px 0 0 rgba(0, 0, 0, 0.2)"
      },
      ".line-highlight.line-highlight[data-end]:after": {
        "background": "hsl(230, 1%, 90%)",
        "color": "hsl(230, 8%, 24%)",
        "padding": "0.1em 0.6em",
        "borderRadius": "0.3em",
        "boxShadow": "0 2px 0 0 rgba(0, 0, 0, 0.2)"
      },
      "pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before": {
        "backgroundColor": "hsla(230, 8%, 24%, 0.05)"
      },
      ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRightColor": "hsla(230, 8%, 24%, 0.2)"
      },
      ".command-line .command-line-prompt": {
        "borderRightColor": "hsla(230, 8%, 24%, 0.2)"
      },
      ".line-numbers .line-numbers-rows > span:before": {
        "color": "hsl(230, 1%, 62%)"
      },
      ".command-line .command-line-prompt > span:before": {
        "color": "hsl(230, 1%, 62%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-1": {
        "color": "hsl(5, 74%, 59%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-5": {
        "color": "hsl(5, 74%, 59%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-9": {
        "color": "hsl(5, 74%, 59%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-2": {
        "color": "hsl(119, 34%, 47%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-6": {
        "color": "hsl(119, 34%, 47%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-10": {
        "color": "hsl(119, 34%, 47%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-3": {
        "color": "hsl(221, 87%, 60%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-7": {
        "color": "hsl(221, 87%, 60%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-11": {
        "color": "hsl(221, 87%, 60%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-4": {
        "color": "hsl(301, 63%, 40%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-8": {
        "color": "hsl(301, 63%, 40%)"
      },
      ".rainbow-braces .token.token.punctuation.brace-level-12": {
        "color": "hsl(301, 63%, 40%)"
      },
      "pre.diff-highlight > code .token.token.deleted:not(.prefix)": {
        "backgroundColor": "hsla(353, 100%, 66%, 0.15)"
      },
      "pre > code.diff-highlight .token.token.deleted:not(.prefix)": {
        "backgroundColor": "hsla(353, 100%, 66%, 0.15)"
      },
      "pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
      },
      "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
      },
      "pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
      },
      "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
      },
      "pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
      },
      "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
      },
      "pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
      },
      "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
      },
      "pre.diff-highlight > code .token.token.inserted:not(.prefix)": {
        "backgroundColor": "hsla(137, 100%, 55%, 0.15)"
      },
      "pre > code.diff-highlight .token.token.inserted:not(.prefix)": {
        "backgroundColor": "hsla(137, 100%, 55%, 0.15)"
      },
      "pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
      },
      "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
      },
      "pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
      },
      "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
      },
      "pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
      },
      "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
      },
      "pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
      },
      "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
      },
      ".prism-previewer.prism-previewer:before": {
        "borderColor": "hsl(0, 0, 95%)"
      },
      ".prism-previewer-gradient.prism-previewer-gradient div": {
        "borderColor": "hsl(0, 0, 95%)",
        "borderRadius": "0.3em"
      },
      ".prism-previewer-color.prism-previewer-color:before": {
        "borderRadius": "0.3em"
      },
      ".prism-previewer-easing.prism-previewer-easing:before": {
        "borderRadius": "0.3em"
      },
      ".prism-previewer.prism-previewer:after": {
        "borderTopColor": "hsl(0, 0, 95%)"
      },
      ".prism-previewer-flipped.prism-previewer-flipped.after": {
        "borderBottomColor": "hsl(0, 0, 95%)"
      },
      ".prism-previewer-angle.prism-previewer-angle:before": {
        "background": "hsl(0, 0%, 100%)"
      },
      ".prism-previewer-time.prism-previewer-time:before": {
        "background": "hsl(0, 0%, 100%)"
      },
      ".prism-previewer-easing.prism-previewer-easing": {
        "background": "hsl(0, 0%, 100%)"
      },
      ".prism-previewer-angle.prism-previewer-angle circle": {
        "stroke": "hsl(230, 8%, 24%)",
        "strokeOpacity": "1"
      },
      ".prism-previewer-time.prism-previewer-time circle": {
        "stroke": "hsl(230, 8%, 24%)",
        "strokeOpacity": "1"
      },
      ".prism-previewer-easing.prism-previewer-easing circle": {
        "stroke": "hsl(230, 8%, 24%)",
        "fill": "transparent"
      },
      ".prism-previewer-easing.prism-previewer-easing path": {
        "stroke": "hsl(230, 8%, 24%)"
      },
      ".prism-previewer-easing.prism-previewer-easing line": {
        "stroke": "hsl(230, 8%, 24%)"
      }
    };
  })(oneLight);
  return oneLight;
}
var pojoaque = {};
var hasRequiredPojoaque;
function requirePojoaque() {
  if (hasRequiredPojoaque)
    return pojoaque;
  hasRequiredPojoaque = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "whiteSpace": "pre-wrap",
        "wordBreak": "break-all",
        "wordWrap": "break-word",
        "fontFamily": 'Menlo, Monaco, "Courier New", monospace',
        "fontSize": "15px",
        "lineHeight": "1.5",
        "color": "#dccf8f",
        "textShadow": "0"
      },
      'pre[class*="language-"]': {
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "whiteSpace": "pre-wrap",
        "wordBreak": "break-all",
        "wordWrap": "break-word",
        "fontFamily": 'Menlo, Monaco, "Courier New", monospace',
        "fontSize": "15px",
        "lineHeight": "1.5",
        "color": "#DCCF8F",
        "textShadow": "0",
        "borderRadius": "5px",
        "border": "1px solid #000",
        "background": "#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",
        "padding": "12px",
        "overflow": "auto"
      },
      'pre > code[class*="language-"]': {
        "fontSize": "1em"
      },
      ':not(pre) > code[class*="language-"]': {
        "borderRadius": "5px",
        "border": "1px solid #000",
        "color": "#DCCF8F",
        "background": "#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",
        "padding": "2px 6px"
      },
      "namespace": {
        "Opacity": ".7"
      },
      "comment": {
        "color": "#586e75",
        "fontStyle": "italic"
      },
      "prolog": {
        "color": "#586e75",
        "fontStyle": "italic"
      },
      "doctype": {
        "color": "#586e75",
        "fontStyle": "italic"
      },
      "cdata": {
        "color": "#586e75",
        "fontStyle": "italic"
      },
      "number": {
        "color": "#b89859"
      },
      "string": {
        "color": "#468966"
      },
      "char": {
        "color": "#468966"
      },
      "builtin": {
        "color": "#468966"
      },
      "inserted": {
        "color": "#468966"
      },
      "attr-name": {
        "color": "#b89859"
      },
      "operator": {
        "color": "#dccf8f"
      },
      "entity": {
        "color": "#dccf8f",
        "cursor": "help"
      },
      "url": {
        "color": "#dccf8f"
      },
      ".language-css .token.string": {
        "color": "#dccf8f"
      },
      ".style .token.string": {
        "color": "#dccf8f"
      },
      "selector": {
        "color": "#859900"
      },
      "regex": {
        "color": "#859900"
      },
      "atrule": {
        "color": "#cb4b16"
      },
      "keyword": {
        "color": "#cb4b16"
      },
      "attr-value": {
        "color": "#468966"
      },
      "function": {
        "color": "#b58900"
      },
      "variable": {
        "color": "#b58900"
      },
      "placeholder": {
        "color": "#b58900"
      },
      "property": {
        "color": "#b89859"
      },
      "tag": {
        "color": "#ffb03b"
      },
      "boolean": {
        "color": "#b89859"
      },
      "constant": {
        "color": "#b89859"
      },
      "symbol": {
        "color": "#b89859"
      },
      "important": {
        "color": "#dc322f"
      },
      "statement": {
        "color": "#dc322f"
      },
      "deleted": {
        "color": "#dc322f"
      },
      "punctuation": {
        "color": "#dccf8f"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      }
    };
  })(pojoaque);
  return pojoaque;
}
var shadesOfPurple = {};
var hasRequiredShadesOfPurple;
function requireShadesOfPurple() {
  if (hasRequiredShadesOfPurple)
    return shadesOfPurple;
  hasRequiredShadesOfPurple = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      "code[class*='language-']": {
        "color": "#9efeff",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "fontFamily": "'Operator Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontWeight": "400",
        "fontSize": "17px",
        "lineHeight": "25px",
        "letterSpacing": "0.5px",
        "textShadow": "0 1px #222245"
      },
      "pre[class*='language-']": {
        "color": "#9efeff",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "fontFamily": "'Operator Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontWeight": "400",
        "fontSize": "17px",
        "lineHeight": "25px",
        "letterSpacing": "0.5px",
        "textShadow": "0 1px #222245",
        "padding": "2em",
        "margin": "0.5em 0",
        "overflow": "auto",
        "background": "#1e1e3f"
      },
      "pre[class*='language-']::-moz-selection": {
        "color": "inherit",
        "background": "#a599e9"
      },
      "pre[class*='language-'] ::-moz-selection": {
        "color": "inherit",
        "background": "#a599e9"
      },
      "code[class*='language-']::-moz-selection": {
        "color": "inherit",
        "background": "#a599e9"
      },
      "code[class*='language-'] ::-moz-selection": {
        "color": "inherit",
        "background": "#a599e9"
      },
      "pre[class*='language-']::selection": {
        "color": "inherit",
        "background": "#a599e9"
      },
      "pre[class*='language-'] ::selection": {
        "color": "inherit",
        "background": "#a599e9"
      },
      "code[class*='language-']::selection": {
        "color": "inherit",
        "background": "#a599e9"
      },
      "code[class*='language-'] ::selection": {
        "color": "inherit",
        "background": "#a599e9"
      },
      ":not(pre) > code[class*='language-']": {
        "background": "#1e1e3f",
        "padding": "0.1em",
        "borderRadius": "0.3em"
      },
      "": {
        "fontWeight": "400"
      },
      "comment": {
        "color": "#b362ff"
      },
      "prolog": {
        "color": "#b362ff"
      },
      "cdata": {
        "color": "#b362ff"
      },
      "delimiter": {
        "color": "#ff9d00"
      },
      "keyword": {
        "color": "#ff9d00"
      },
      "selector": {
        "color": "#ff9d00"
      },
      "important": {
        "color": "#ff9d00"
      },
      "atrule": {
        "color": "#ff9d00"
      },
      "operator": {
        "color": "rgb(255, 180, 84)",
        "background": "none"
      },
      "attr-name": {
        "color": "rgb(255, 180, 84)"
      },
      "punctuation": {
        "color": "#ffffff"
      },
      "boolean": {
        "color": "rgb(255, 98, 140)"
      },
      "tag": {
        "color": "rgb(255, 157, 0)"
      },
      "tag.punctuation": {
        "color": "rgb(255, 157, 0)"
      },
      "doctype": {
        "color": "rgb(255, 157, 0)"
      },
      "builtin": {
        "color": "rgb(255, 157, 0)"
      },
      "entity": {
        "color": "#6897bb",
        "background": "none"
      },
      "symbol": {
        "color": "#6897bb"
      },
      "number": {
        "color": "#ff628c"
      },
      "property": {
        "color": "#ff628c"
      },
      "constant": {
        "color": "#ff628c"
      },
      "variable": {
        "color": "#ff628c"
      },
      "string": {
        "color": "#a5ff90"
      },
      "char": {
        "color": "#a5ff90"
      },
      "attr-value": {
        "color": "#a5c261"
      },
      "attr-value.punctuation": {
        "color": "#a5c261"
      },
      "attr-value.punctuation:first-child": {
        "color": "#a9b7c6"
      },
      "url": {
        "color": "#287bde",
        "textDecoration": "underline",
        "background": "none"
      },
      "function": {
        "color": "rgb(250, 208, 0)"
      },
      "regex": {
        "background": "#364135"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "inserted": {
        "background": "#00ff00"
      },
      "deleted": {
        "background": "#ff000d"
      },
      "code.language-css .token.property": {
        "color": "#a9b7c6"
      },
      "code.language-css .token.property + .token.punctuation": {
        "color": "#a9b7c6"
      },
      "code.language-css .token.id": {
        "color": "#ffc66d"
      },
      "code.language-css .token.selector > .token.class": {
        "color": "#ffc66d"
      },
      "code.language-css .token.selector > .token.attribute": {
        "color": "#ffc66d"
      },
      "code.language-css .token.selector > .token.pseudo-class": {
        "color": "#ffc66d"
      },
      "code.language-css .token.selector > .token.pseudo-element": {
        "color": "#ffc66d"
      },
      "class-name": {
        "color": "#fb94ff"
      },
      ".language-css .token.string": {
        "background": "none"
      },
      ".style .token.string": {
        "background": "none"
      },
      ".line-highlight.line-highlight": {
        "marginTop": "36px",
        "background": "linear-gradient(to right, rgba(179, 98, 255, 0.17), transparent)"
      },
      ".line-highlight.line-highlight:before": {
        "content": "''"
      },
      ".line-highlight.line-highlight[data-end]:after": {
        "content": "''"
      }
    };
  })(shadesOfPurple);
  return shadesOfPurple;
}
var solarizedDarkAtom = {};
var hasRequiredSolarizedDarkAtom;
function requireSolarizedDarkAtom() {
  if (hasRequiredSolarizedDarkAtom)
    return solarizedDarkAtom;
  hasRequiredSolarizedDarkAtom = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "#839496",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "#839496",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em",
        "background": "#002b36"
      },
      ':not(pre) > code[class*="language-"]': {
        "background": "#002b36",
        "padding": ".1em",
        "borderRadius": ".3em"
      },
      "comment": {
        "color": "#586e75"
      },
      "prolog": {
        "color": "#586e75"
      },
      "doctype": {
        "color": "#586e75"
      },
      "cdata": {
        "color": "#586e75"
      },
      "punctuation": {
        "color": "#93a1a1"
      },
      ".namespace": {
        "Opacity": ".7"
      },
      "property": {
        "color": "#268bd2"
      },
      "keyword": {
        "color": "#268bd2"
      },
      "tag": {
        "color": "#268bd2"
      },
      "class-name": {
        "color": "#FFFFB6",
        "textDecoration": "underline"
      },
      "boolean": {
        "color": "#b58900"
      },
      "constant": {
        "color": "#b58900"
      },
      "symbol": {
        "color": "#dc322f"
      },
      "deleted": {
        "color": "#dc322f"
      },
      "number": {
        "color": "#859900"
      },
      "selector": {
        "color": "#859900"
      },
      "attr-name": {
        "color": "#859900"
      },
      "string": {
        "color": "#859900"
      },
      "char": {
        "color": "#859900"
      },
      "builtin": {
        "color": "#859900"
      },
      "inserted": {
        "color": "#859900"
      },
      "variable": {
        "color": "#268bd2"
      },
      "operator": {
        "color": "#EDEDED"
      },
      "function": {
        "color": "#268bd2"
      },
      "regex": {
        "color": "#E9C062"
      },
      "important": {
        "color": "#fd971f",
        "fontWeight": "bold"
      },
      "entity": {
        "color": "#FFFFB6",
        "cursor": "help"
      },
      "url": {
        "color": "#96CBFE"
      },
      ".language-css .token.string": {
        "color": "#87C38A"
      },
      ".style .token.string": {
        "color": "#87C38A"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "atrule": {
        "color": "#F9EE98"
      },
      "attr-value": {
        "color": "#F9EE98"
      }
    };
  })(solarizedDarkAtom);
  return solarizedDarkAtom;
}
var synthwave84 = {};
var hasRequiredSynthwave84;
function requireSynthwave84() {
  if (hasRequiredSynthwave84)
    return synthwave84;
  hasRequiredSynthwave84 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "#f92aad",
        "textShadow": "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "#f92aad",
        "textShadow": "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "backgroundColor": "transparent !important",
        "backgroundImage": "linear-gradient(to bottom, #2a2139 75%, #34294f)"
      },
      ':not(pre) > code[class*="language-"]': {
        "backgroundColor": "transparent !important",
        "backgroundImage": "linear-gradient(to bottom, #2a2139 75%, #34294f)",
        "padding": ".1em",
        "borderRadius": ".3em",
        "whiteSpace": "normal"
      },
      "comment": {
        "color": "#8e8e8e"
      },
      "block-comment": {
        "color": "#8e8e8e"
      },
      "prolog": {
        "color": "#8e8e8e"
      },
      "doctype": {
        "color": "#8e8e8e"
      },
      "cdata": {
        "color": "#8e8e8e"
      },
      "punctuation": {
        "color": "#ccc"
      },
      "tag": {
        "color": "#e2777a"
      },
      "attr-name": {
        "color": "#e2777a"
      },
      "namespace": {
        "color": "#e2777a"
      },
      "number": {
        "color": "#e2777a"
      },
      "unit": {
        "color": "#e2777a"
      },
      "hexcode": {
        "color": "#e2777a"
      },
      "deleted": {
        "color": "#e2777a"
      },
      "property": {
        "color": "#72f1b8",
        "textShadow": "0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"
      },
      "selector": {
        "color": "#72f1b8",
        "textShadow": "0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"
      },
      "function-name": {
        "color": "#6196cc"
      },
      "boolean": {
        "color": "#fdfdfd",
        "textShadow": "0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"
      },
      "selector.id": {
        "color": "#fdfdfd",
        "textShadow": "0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"
      },
      "function": {
        "color": "#fdfdfd",
        "textShadow": "0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"
      },
      "class-name": {
        "color": "#fff5f6",
        "textShadow": "0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"
      },
      "constant": {
        "color": "#f92aad",
        "textShadow": "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"
      },
      "symbol": {
        "color": "#f92aad",
        "textShadow": "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"
      },
      "important": {
        "color": "#f4eee4",
        "textShadow": "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575",
        "fontWeight": "bold"
      },
      "atrule": {
        "color": "#f4eee4",
        "textShadow": "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"
      },
      "keyword": {
        "color": "#f4eee4",
        "textShadow": "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"
      },
      "selector.class": {
        "color": "#f4eee4",
        "textShadow": "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"
      },
      "builtin": {
        "color": "#f4eee4",
        "textShadow": "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"
      },
      "string": {
        "color": "#f87c32"
      },
      "char": {
        "color": "#f87c32"
      },
      "attr-value": {
        "color": "#f87c32"
      },
      "regex": {
        "color": "#f87c32"
      },
      "variable": {
        "color": "#f87c32"
      },
      "operator": {
        "color": "#67cdcc"
      },
      "entity": {
        "color": "#67cdcc",
        "cursor": "help"
      },
      "url": {
        "color": "#67cdcc"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "inserted": {
        "color": "green"
      }
    };
  })(synthwave84);
  return synthwave84;
}
var vs = {};
var hasRequiredVs;
function requireVs() {
  if (hasRequiredVs)
    return vs;
  hasRequiredVs = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "#393A34",
        "fontFamily": '"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "fontSize": ".9em",
        "lineHeight": "1.2em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]': {
        "color": "#393A34",
        "fontFamily": '"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "fontSize": ".9em",
        "lineHeight": "1.2em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "border": "1px solid #dddddd",
        "backgroundColor": "white"
      },
      'pre > code[class*="language-"]': {
        "fontSize": "1em"
      },
      'pre[class*="language-"]::-moz-selection': {
        "background": "#C1DEF1"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "background": "#C1DEF1"
      },
      'code[class*="language-"]::-moz-selection': {
        "background": "#C1DEF1"
      },
      'code[class*="language-"] ::-moz-selection': {
        "background": "#C1DEF1"
      },
      'pre[class*="language-"]::selection': {
        "background": "#C1DEF1"
      },
      'pre[class*="language-"] ::selection': {
        "background": "#C1DEF1"
      },
      'code[class*="language-"]::selection': {
        "background": "#C1DEF1"
      },
      'code[class*="language-"] ::selection': {
        "background": "#C1DEF1"
      },
      ':not(pre) > code[class*="language-"]': {
        "padding": ".2em",
        "paddingTop": "1px",
        "paddingBottom": "1px",
        "background": "#f8f8f8",
        "border": "1px solid #dddddd"
      },
      "comment": {
        "color": "#008000",
        "fontStyle": "italic"
      },
      "prolog": {
        "color": "#008000",
        "fontStyle": "italic"
      },
      "doctype": {
        "color": "#008000",
        "fontStyle": "italic"
      },
      "cdata": {
        "color": "#008000",
        "fontStyle": "italic"
      },
      "namespace": {
        "Opacity": ".7"
      },
      "string": {
        "color": "#A31515"
      },
      "punctuation": {
        "color": "#393A34"
      },
      "operator": {
        "color": "#393A34"
      },
      "url": {
        "color": "#36acaa"
      },
      "symbol": {
        "color": "#36acaa"
      },
      "number": {
        "color": "#36acaa"
      },
      "boolean": {
        "color": "#36acaa"
      },
      "variable": {
        "color": "#36acaa"
      },
      "constant": {
        "color": "#36acaa"
      },
      "inserted": {
        "color": "#36acaa"
      },
      "atrule": {
        "color": "#0000ff"
      },
      "keyword": {
        "color": "#0000ff"
      },
      "attr-value": {
        "color": "#0000ff"
      },
      ".language-autohotkey .token.selector": {
        "color": "#0000ff"
      },
      ".language-json .token.boolean": {
        "color": "#0000ff"
      },
      ".language-json .token.number": {
        "color": "#0000ff"
      },
      'code[class*="language-css"]': {
        "color": "#0000ff"
      },
      "function": {
        "color": "#393A34"
      },
      "deleted": {
        "color": "#9a050f"
      },
      ".language-autohotkey .token.tag": {
        "color": "#9a050f"
      },
      "selector": {
        "color": "#800000"
      },
      ".language-autohotkey .token.keyword": {
        "color": "#00009f"
      },
      "important": {
        "color": "#e90",
        "fontWeight": "bold"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "class-name": {
        "color": "#2B91AF"
      },
      ".language-json .token.property": {
        "color": "#2B91AF"
      },
      "tag": {
        "color": "#800000"
      },
      "attr-name": {
        "color": "#ff0000"
      },
      "property": {
        "color": "#ff0000"
      },
      "regex": {
        "color": "#ff0000"
      },
      "entity": {
        "color": "#ff0000"
      },
      "directive.tag.tag": {
        "background": "#ffff00",
        "color": "#393A34"
      },
      ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRightColor": "#a5a5a5"
      },
      ".line-numbers .line-numbers-rows > span:before": {
        "color": "#2B91AF"
      },
      ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, rgba(193, 222, 241, 0.2) 70%, rgba(221, 222, 241, 0))"
      }
    };
  })(vs);
  return vs;
}
var vscDarkPlus = {};
var hasRequiredVscDarkPlus;
function requireVscDarkPlus() {
  if (hasRequiredVscDarkPlus)
    return vscDarkPlus;
  hasRequiredVscDarkPlus = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'pre[class*="language-"]': {
        "color": "#d4d4d4",
        "fontSize": "13px",
        "textShadow": "none",
        "fontFamily": 'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "background": "#1e1e1e"
      },
      'code[class*="language-"]': {
        "color": "#d4d4d4",
        "fontSize": "13px",
        "textShadow": "none",
        "fontFamily": 'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
      },
      'pre[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "#264F78"
      },
      'code[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "#264F78"
      },
      'pre[class*="language-"] *::selection': {
        "textShadow": "none",
        "background": "#264F78"
      },
      'code[class*="language-"] *::selection': {
        "textShadow": "none",
        "background": "#264F78"
      },
      ':not(pre) > code[class*="language-"]': {
        "padding": ".1em .3em",
        "borderRadius": ".3em",
        "color": "#db4c69",
        "background": "#1e1e1e"
      },
      ".namespace": {
        "Opacity": ".7"
      },
      "doctype.doctype-tag": {
        "color": "#569CD6"
      },
      "doctype.name": {
        "color": "#9cdcfe"
      },
      "comment": {
        "color": "#6a9955"
      },
      "prolog": {
        "color": "#6a9955"
      },
      "punctuation": {
        "color": "#d4d4d4"
      },
      ".language-html .language-css .token.punctuation": {
        "color": "#d4d4d4"
      },
      ".language-html .language-javascript .token.punctuation": {
        "color": "#d4d4d4"
      },
      "property": {
        "color": "#9cdcfe"
      },
      "tag": {
        "color": "#569cd6"
      },
      "boolean": {
        "color": "#569cd6"
      },
      "number": {
        "color": "#b5cea8"
      },
      "constant": {
        "color": "#9cdcfe"
      },
      "symbol": {
        "color": "#b5cea8"
      },
      "inserted": {
        "color": "#b5cea8"
      },
      "unit": {
        "color": "#b5cea8"
      },
      "selector": {
        "color": "#d7ba7d"
      },
      "attr-name": {
        "color": "#9cdcfe"
      },
      "string": {
        "color": "#ce9178"
      },
      "char": {
        "color": "#ce9178"
      },
      "builtin": {
        "color": "#ce9178"
      },
      "deleted": {
        "color": "#ce9178"
      },
      ".language-css .token.string.url": {
        "textDecoration": "underline"
      },
      "operator": {
        "color": "#d4d4d4"
      },
      "entity": {
        "color": "#569cd6"
      },
      "operator.arrow": {
        "color": "#569CD6"
      },
      "atrule": {
        "color": "#ce9178"
      },
      "atrule.rule": {
        "color": "#c586c0"
      },
      "atrule.url": {
        "color": "#9cdcfe"
      },
      "atrule.url.function": {
        "color": "#dcdcaa"
      },
      "atrule.url.punctuation": {
        "color": "#d4d4d4"
      },
      "keyword": {
        "color": "#569CD6"
      },
      "keyword.module": {
        "color": "#c586c0"
      },
      "keyword.control-flow": {
        "color": "#c586c0"
      },
      "function": {
        "color": "#dcdcaa"
      },
      "function.maybe-class-name": {
        "color": "#dcdcaa"
      },
      "regex": {
        "color": "#d16969"
      },
      "important": {
        "color": "#569cd6"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "class-name": {
        "color": "#4ec9b0"
      },
      "maybe-class-name": {
        "color": "#4ec9b0"
      },
      "console": {
        "color": "#9cdcfe"
      },
      "parameter": {
        "color": "#9cdcfe"
      },
      "interpolation": {
        "color": "#9cdcfe"
      },
      "punctuation.interpolation-punctuation": {
        "color": "#569cd6"
      },
      "variable": {
        "color": "#9cdcfe"
      },
      "imports.maybe-class-name": {
        "color": "#9cdcfe"
      },
      "exports.maybe-class-name": {
        "color": "#9cdcfe"
      },
      "escape": {
        "color": "#d7ba7d"
      },
      "tag.punctuation": {
        "color": "#808080"
      },
      "cdata": {
        "color": "#808080"
      },
      "attr-value": {
        "color": "#ce9178"
      },
      "attr-value.punctuation": {
        "color": "#ce9178"
      },
      "attr-value.punctuation.attr-equals": {
        "color": "#d4d4d4"
      },
      "namespace": {
        "color": "#4ec9b0"
      },
      'pre[class*="language-javascript"]': {
        "color": "#9cdcfe"
      },
      'code[class*="language-javascript"]': {
        "color": "#9cdcfe"
      },
      'pre[class*="language-jsx"]': {
        "color": "#9cdcfe"
      },
      'code[class*="language-jsx"]': {
        "color": "#9cdcfe"
      },
      'pre[class*="language-typescript"]': {
        "color": "#9cdcfe"
      },
      'code[class*="language-typescript"]': {
        "color": "#9cdcfe"
      },
      'pre[class*="language-tsx"]': {
        "color": "#9cdcfe"
      },
      'code[class*="language-tsx"]': {
        "color": "#9cdcfe"
      },
      'pre[class*="language-css"]': {
        "color": "#ce9178"
      },
      'code[class*="language-css"]': {
        "color": "#ce9178"
      },
      'pre[class*="language-html"]': {
        "color": "#d4d4d4"
      },
      'code[class*="language-html"]': {
        "color": "#d4d4d4"
      },
      ".language-regex .token.anchor": {
        "color": "#dcdcaa"
      },
      ".language-html .token.punctuation": {
        "color": "#808080"
      },
      'pre[class*="language-"] > code[class*="language-"]': {
        "position": "relative",
        "zIndex": "1"
      },
      ".line-highlight.line-highlight": {
        "background": "#f7ebc6",
        "boxShadow": "inset 5px 0 0 #f7d87c",
        "zIndex": "0"
      }
    };
  })(vscDarkPlus);
  return vscDarkPlus;
}
var xonokai = {};
var hasRequiredXonokai;
function requireXonokai() {
  if (hasRequiredXonokai)
    return xonokai;
  hasRequiredXonokai = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "MozTabSize": "2",
        "OTabSize": "2",
        "tabSize": "2",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "whiteSpace": "pre-wrap",
        "wordWrap": "normal",
        "fontFamily": 'Menlo, Monaco, "Courier New", monospace',
        "fontSize": "14px",
        "color": "#76d9e6",
        "textShadow": "none"
      },
      'pre[class*="language-"]': {
        "MozTabSize": "2",
        "OTabSize": "2",
        "tabSize": "2",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "whiteSpace": "pre-wrap",
        "wordWrap": "normal",
        "fontFamily": 'Menlo, Monaco, "Courier New", monospace',
        "fontSize": "14px",
        "color": "#76d9e6",
        "textShadow": "none",
        "background": "#2a2a2a",
        "padding": "15px",
        "borderRadius": "4px",
        "border": "1px solid #e1e1e8",
        "overflow": "auto",
        "position": "relative"
      },
      'pre > code[class*="language-"]': {
        "fontSize": "1em"
      },
      ':not(pre) > code[class*="language-"]': {
        "background": "#2a2a2a",
        "padding": "0.15em 0.2em 0.05em",
        "borderRadius": ".3em",
        "border": "0.13em solid #7a6652",
        "boxShadow": "1px 1px 0.3em -0.1em #000 inset"
      },
      'pre[class*="language-"] code': {
        "whiteSpace": "pre",
        "display": "block"
      },
      "namespace": {
        "Opacity": ".7"
      },
      "comment": {
        "color": "#6f705e"
      },
      "prolog": {
        "color": "#6f705e"
      },
      "doctype": {
        "color": "#6f705e"
      },
      "cdata": {
        "color": "#6f705e"
      },
      "operator": {
        "color": "#a77afe"
      },
      "boolean": {
        "color": "#a77afe"
      },
      "number": {
        "color": "#a77afe"
      },
      "attr-name": {
        "color": "#e6d06c"
      },
      "string": {
        "color": "#e6d06c"
      },
      "entity": {
        "color": "#e6d06c",
        "cursor": "help"
      },
      "url": {
        "color": "#e6d06c"
      },
      ".language-css .token.string": {
        "color": "#e6d06c"
      },
      ".style .token.string": {
        "color": "#e6d06c"
      },
      "selector": {
        "color": "#a6e22d"
      },
      "inserted": {
        "color": "#a6e22d"
      },
      "atrule": {
        "color": "#ef3b7d"
      },
      "attr-value": {
        "color": "#ef3b7d"
      },
      "keyword": {
        "color": "#ef3b7d"
      },
      "important": {
        "color": "#ef3b7d",
        "fontWeight": "bold"
      },
      "deleted": {
        "color": "#ef3b7d"
      },
      "regex": {
        "color": "#76d9e6"
      },
      "statement": {
        "color": "#76d9e6",
        "fontWeight": "bold"
      },
      "placeholder": {
        "color": "#fff"
      },
      "variable": {
        "color": "#fff"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "punctuation": {
        "color": "#bebec5"
      },
      "italic": {
        "fontStyle": "italic"
      },
      "code.language-markup": {
        "color": "#f9f9f9"
      },
      "code.language-markup .token.tag": {
        "color": "#ef3b7d"
      },
      "code.language-markup .token.attr-name": {
        "color": "#a6e22d"
      },
      "code.language-markup .token.attr-value": {
        "color": "#e6d06c"
      },
      "code.language-markup .token.style": {
        "color": "#76d9e6"
      },
      "code.language-markup .token.script": {
        "color": "#76d9e6"
      },
      "code.language-markup .token.script .token.keyword": {
        "color": "#76d9e6"
      },
      ".line-highlight.line-highlight": {
        "padding": "0",
        "background": "rgba(255, 255, 255, 0.08)"
      },
      ".line-highlight.line-highlight:before": {
        "padding": "0.2em 0.5em",
        "backgroundColor": "rgba(255, 255, 255, 0.4)",
        "color": "black",
        "height": "1em",
        "lineHeight": "1em",
        "boxShadow": "0 1px 1px rgba(255, 255, 255, 0.7)"
      },
      ".line-highlight.line-highlight[data-end]:after": {
        "padding": "0.2em 0.5em",
        "backgroundColor": "rgba(255, 255, 255, 0.4)",
        "color": "black",
        "height": "1em",
        "lineHeight": "1em",
        "boxShadow": "0 1px 1px rgba(255, 255, 255, 0.7)"
      }
    };
  })(xonokai);
  return xonokai;
}
var zTouch = {};
var hasRequiredZTouch;
function requireZTouch() {
  if (hasRequiredZTouch)
    return zTouch;
  hasRequiredZTouch = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports["default"] = {
      'code[class*="language-"]': {
        "color": "#22da17",
        "fontFamily": "monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "lineHeight": "25px",
        "fontSize": "18px",
        "margin": "5px 0"
      },
      'pre[class*="language-"]': {
        "color": "white",
        "fontFamily": "monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "lineHeight": "25px",
        "fontSize": "18px",
        "margin": "0.5em 0",
        "background": "#0a143c",
        "padding": "1em",
        "overflow": "auto"
      },
      'pre[class*="language-"] *': {
        "fontFamily": "monospace"
      },
      ':not(pre) > code[class*="language-"]': {
        "color": "white",
        "background": "#0a143c",
        "padding": "0.1em",
        "borderRadius": "0.3em",
        "whiteSpace": "normal"
      },
      'pre[class*="language-"]::-moz-selection': {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
      },
      'pre[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
      },
      'code[class*="language-"]::-moz-selection': {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
      },
      'code[class*="language-"] ::-moz-selection': {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
      },
      'pre[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
      },
      'pre[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
      },
      'code[class*="language-"]::selection': {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
      },
      'code[class*="language-"] ::selection': {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
      },
      "comment": {
        "color": "rgb(99, 119, 119)",
        "fontStyle": "italic"
      },
      "prolog": {
        "color": "rgb(99, 119, 119)",
        "fontStyle": "italic"
      },
      "cdata": {
        "color": "rgb(99, 119, 119)",
        "fontStyle": "italic"
      },
      "punctuation": {
        "color": "rgb(199, 146, 234)"
      },
      ".namespace": {
        "color": "rgb(178, 204, 214)"
      },
      "deleted": {
        "color": "rgba(239, 83, 80, 0.56)",
        "fontStyle": "italic"
      },
      "symbol": {
        "color": "rgb(128, 203, 196)"
      },
      "property": {
        "color": "rgb(128, 203, 196)"
      },
      "tag": {
        "color": "rgb(127, 219, 202)"
      },
      "operator": {
        "color": "rgb(127, 219, 202)"
      },
      "keyword": {
        "color": "rgb(127, 219, 202)"
      },
      "boolean": {
        "color": "rgb(255, 88, 116)"
      },
      "number": {
        "color": "rgb(247, 140, 108)"
      },
      "constant": {
        "color": "rgb(34 183 199)"
      },
      "function": {
        "color": "rgb(34 183 199)"
      },
      "builtin": {
        "color": "rgb(34 183 199)"
      },
      "char": {
        "color": "rgb(34 183 199)"
      },
      "selector": {
        "color": "rgb(199, 146, 234)",
        "fontStyle": "italic"
      },
      "doctype": {
        "color": "rgb(199, 146, 234)",
        "fontStyle": "italic"
      },
      "attr-name": {
        "color": "rgb(173, 219, 103)",
        "fontStyle": "italic"
      },
      "inserted": {
        "color": "rgb(173, 219, 103)",
        "fontStyle": "italic"
      },
      "string": {
        "color": "rgb(173, 219, 103)"
      },
      "url": {
        "color": "rgb(173, 219, 103)"
      },
      "entity": {
        "color": "rgb(173, 219, 103)"
      },
      ".language-css .token.string": {
        "color": "rgb(173, 219, 103)"
      },
      ".style .token.string": {
        "color": "rgb(173, 219, 103)"
      },
      "class-name": {
        "color": "rgb(255, 203, 139)"
      },
      "atrule": {
        "color": "rgb(255, 203, 139)"
      },
      "attr-value": {
        "color": "rgb(255, 203, 139)"
      },
      "regex": {
        "color": "rgb(214, 222, 235)"
      },
      "important": {
        "color": "rgb(214, 222, 235)",
        "fontWeight": "bold"
      },
      "variable": {
        "color": "rgb(214, 222, 235)"
      },
      "bold": {
        "fontWeight": "bold"
      },
      "italic": {
        "fontStyle": "italic"
      }
    };
  })(zTouch);
  return zTouch;
}
(function(exports) {
  var _interopRequireDefault = require$$0;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "a11yDark", {
    enumerable: true,
    get: function get() {
      return _a11yDark["default"];
    }
  });
  Object.defineProperty(exports, "atomDark", {
    enumerable: true,
    get: function get() {
      return _atomDark["default"];
    }
  });
  Object.defineProperty(exports, "base16AteliersulphurpoolLight", {
    enumerable: true,
    get: function get() {
      return _base16Ateliersulphurpool["default"];
    }
  });
  Object.defineProperty(exports, "cb", {
    enumerable: true,
    get: function get() {
      return _cb["default"];
    }
  });
  Object.defineProperty(exports, "coldarkCold", {
    enumerable: true,
    get: function get() {
      return _coldarkCold["default"];
    }
  });
  Object.defineProperty(exports, "coldarkDark", {
    enumerable: true,
    get: function get() {
      return _coldarkDark["default"];
    }
  });
  Object.defineProperty(exports, "coy", {
    enumerable: true,
    get: function get() {
      return _coy["default"];
    }
  });
  Object.defineProperty(exports, "coyWithoutShadows", {
    enumerable: true,
    get: function get() {
      return _coyWithoutShadows["default"];
    }
  });
  Object.defineProperty(exports, "darcula", {
    enumerable: true,
    get: function get() {
      return _darcula["default"];
    }
  });
  Object.defineProperty(exports, "dark", {
    enumerable: true,
    get: function get() {
      return _dark["default"];
    }
  });
  Object.defineProperty(exports, "dracula", {
    enumerable: true,
    get: function get() {
      return _dracula["default"];
    }
  });
  Object.defineProperty(exports, "duotoneDark", {
    enumerable: true,
    get: function get() {
      return _duotoneDark["default"];
    }
  });
  Object.defineProperty(exports, "duotoneEarth", {
    enumerable: true,
    get: function get() {
      return _duotoneEarth["default"];
    }
  });
  Object.defineProperty(exports, "duotoneForest", {
    enumerable: true,
    get: function get() {
      return _duotoneForest["default"];
    }
  });
  Object.defineProperty(exports, "duotoneLight", {
    enumerable: true,
    get: function get() {
      return _duotoneLight["default"];
    }
  });
  Object.defineProperty(exports, "duotoneSea", {
    enumerable: true,
    get: function get() {
      return _duotoneSea["default"];
    }
  });
  Object.defineProperty(exports, "duotoneSpace", {
    enumerable: true,
    get: function get() {
      return _duotoneSpace["default"];
    }
  });
  Object.defineProperty(exports, "funky", {
    enumerable: true,
    get: function get() {
      return _funky["default"];
    }
  });
  Object.defineProperty(exports, "ghcolors", {
    enumerable: true,
    get: function get() {
      return _ghcolors["default"];
    }
  });
  Object.defineProperty(exports, "gruvboxDark", {
    enumerable: true,
    get: function get() {
      return _gruvboxDark["default"];
    }
  });
  Object.defineProperty(exports, "gruvboxLight", {
    enumerable: true,
    get: function get() {
      return _gruvboxLight["default"];
    }
  });
  Object.defineProperty(exports, "holiTheme", {
    enumerable: true,
    get: function get() {
      return _holiTheme["default"];
    }
  });
  Object.defineProperty(exports, "hopscotch", {
    enumerable: true,
    get: function get() {
      return _hopscotch["default"];
    }
  });
  Object.defineProperty(exports, "lucario", {
    enumerable: true,
    get: function get() {
      return _lucario["default"];
    }
  });
  Object.defineProperty(exports, "materialDark", {
    enumerable: true,
    get: function get() {
      return _materialDark["default"];
    }
  });
  Object.defineProperty(exports, "materialLight", {
    enumerable: true,
    get: function get() {
      return _materialLight["default"];
    }
  });
  Object.defineProperty(exports, "materialOceanic", {
    enumerable: true,
    get: function get() {
      return _materialOceanic["default"];
    }
  });
  Object.defineProperty(exports, "nightOwl", {
    enumerable: true,
    get: function get() {
      return _nightOwl["default"];
    }
  });
  Object.defineProperty(exports, "nord", {
    enumerable: true,
    get: function get() {
      return _nord["default"];
    }
  });
  Object.defineProperty(exports, "okaidia", {
    enumerable: true,
    get: function get() {
      return _okaidia["default"];
    }
  });
  Object.defineProperty(exports, "oneDark", {
    enumerable: true,
    get: function get() {
      return _oneDark["default"];
    }
  });
  Object.defineProperty(exports, "oneLight", {
    enumerable: true,
    get: function get() {
      return _oneLight["default"];
    }
  });
  Object.defineProperty(exports, "pojoaque", {
    enumerable: true,
    get: function get() {
      return _pojoaque["default"];
    }
  });
  Object.defineProperty(exports, "prism", {
    enumerable: true,
    get: function get() {
      return _prism["default"];
    }
  });
  Object.defineProperty(exports, "shadesOfPurple", {
    enumerable: true,
    get: function get() {
      return _shadesOfPurple["default"];
    }
  });
  Object.defineProperty(exports, "solarizedDarkAtom", {
    enumerable: true,
    get: function get() {
      return _solarizedDarkAtom["default"];
    }
  });
  Object.defineProperty(exports, "solarizedlight", {
    enumerable: true,
    get: function get() {
      return _solarizedlight["default"];
    }
  });
  Object.defineProperty(exports, "synthwave84", {
    enumerable: true,
    get: function get() {
      return _synthwave["default"];
    }
  });
  Object.defineProperty(exports, "tomorrow", {
    enumerable: true,
    get: function get() {
      return _tomorrow["default"];
    }
  });
  Object.defineProperty(exports, "twilight", {
    enumerable: true,
    get: function get() {
      return _twilight["default"];
    }
  });
  Object.defineProperty(exports, "vs", {
    enumerable: true,
    get: function get() {
      return _vs["default"];
    }
  });
  Object.defineProperty(exports, "vscDarkPlus", {
    enumerable: true,
    get: function get() {
      return _vscDarkPlus["default"];
    }
  });
  Object.defineProperty(exports, "xonokai", {
    enumerable: true,
    get: function get() {
      return _xonokai["default"];
    }
  });
  Object.defineProperty(exports, "zTouch", {
    enumerable: true,
    get: function get() {
      return _zTouch["default"];
    }
  });
  var _coy = _interopRequireDefault(requireCoy());
  var _dark = _interopRequireDefault(requireDark());
  var _funky = _interopRequireDefault(requireFunky());
  var _okaidia = _interopRequireDefault(requireOkaidia());
  var _solarizedlight = _interopRequireDefault(requireSolarizedlight());
  var _tomorrow = _interopRequireDefault(requireTomorrow());
  var _twilight = _interopRequireDefault(requireTwilight());
  var _prism = _interopRequireDefault(requirePrism());
  var _a11yDark = _interopRequireDefault(requireA11yDark());
  var _atomDark = _interopRequireDefault(requireAtomDark());
  var _base16Ateliersulphurpool = _interopRequireDefault(requireBase16Ateliersulphurpool_light());
  var _cb = _interopRequireDefault(requireCb());
  var _coldarkCold = _interopRequireDefault(requireColdarkCold());
  var _coldarkDark = _interopRequireDefault(requireColdarkDark());
  var _coyWithoutShadows = _interopRequireDefault(requireCoyWithoutShadows());
  var _darcula = _interopRequireDefault(requireDarcula());
  var _dracula = _interopRequireDefault(requireDracula());
  var _duotoneDark = _interopRequireDefault(requireDuotoneDark());
  var _duotoneEarth = _interopRequireDefault(requireDuotoneEarth());
  var _duotoneForest = _interopRequireDefault(requireDuotoneForest());
  var _duotoneLight = _interopRequireDefault(requireDuotoneLight());
  var _duotoneSea = _interopRequireDefault(requireDuotoneSea());
  var _duotoneSpace = _interopRequireDefault(requireDuotoneSpace());
  var _ghcolors = _interopRequireDefault(requireGhcolors());
  var _gruvboxDark = _interopRequireDefault(requireGruvboxDark());
  var _gruvboxLight = _interopRequireDefault(requireGruvboxLight());
  var _holiTheme = _interopRequireDefault(requireHoliTheme());
  var _hopscotch = _interopRequireDefault(requireHopscotch());
  var _lucario = _interopRequireDefault(requireLucario());
  var _materialDark = _interopRequireDefault(requireMaterialDark());
  var _materialLight = _interopRequireDefault(requireMaterialLight());
  var _materialOceanic = _interopRequireDefault(requireMaterialOceanic());
  var _nightOwl = _interopRequireDefault(requireNightOwl());
  var _nord = _interopRequireDefault(requireNord());
  var _oneDark = _interopRequireDefault(requireOneDark());
  var _oneLight = _interopRequireDefault(requireOneLight());
  var _pojoaque = _interopRequireDefault(requirePojoaque());
  var _shadesOfPurple = _interopRequireDefault(requireShadesOfPurple());
  var _solarizedDarkAtom = _interopRequireDefault(requireSolarizedDarkAtom());
  var _synthwave = _interopRequireDefault(requireSynthwave84());
  var _vs = _interopRequireDefault(requireVs());
  var _vscDarkPlus = _interopRequireDefault(requireVscDarkPlus());
  var _xonokai = _interopRequireDefault(requireXonokai());
  var _zTouch = _interopRequireDefault(requireZTouch());
})(prism$1);
function CodeBlock({
  children,
  language
}) {
  return /* @__PURE__ */ jsx(SyntaxHighlighter, {
    language,
    style: prism$1.dracula,
    customStyle: {
      fontSize: "0.9rem"
    },
    children
  });
}
function cssReset(felaRenderer) {
  felaRenderer.renderStatic({
    boxSizing: "border-box",
    fontSize: "16px",
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    lineHeight: 1.5,
    margin: 0
  }, ":root");
  felaRenderer.renderStatic({
    boxSizing: "inherit"
  }, "*, *:before, *:after");
  felaRenderer.renderStatic({
    margin: 0
  }, "body");
}
class Renderer {
  constructor(transformedTemplate) {
    __publicField(this, "pages", null);
    __publicField(this, "feeds", null);
    __publicField(this, "transformedTemplate", null);
    this.pages = gatherPages();
    this.feeds = gatherFeeds();
    this.transformedTemplate = transformedTemplate;
  }
  render(pathname) {
    if (this.feeds[pathname]) {
      return this.renderFeed(pathname);
    } else {
      return this.renderPage(pathname);
    }
  }
  renderFeed(pathname) {
    return {
      status: 200,
      type: "application/feed+json",
      body: this.feeds[pathname](this.pages)
    };
  }
  renderPage(pathname) {
    if (!pathname.endsWith("/"))
      pathname = `${pathname}/`;
    const headTags = [];
    const felaRenderer = createRenderer();
    cssReset(felaRenderer);
    const {
      Component,
      meta: meta2 = {},
      tableOfContents: tableOfContents2 = []
    } = this.pages[pathname] || this.pages["/404/"];
    const Layout = meta2.Layout || DefaultLayout;
    const html = ReactDOMServer.renderToString(/* @__PURE__ */ jsx(HeadProvider, {
      headTags,
      children: /* @__PURE__ */ jsx(RendererProvider, {
        renderer: felaRenderer,
        children: /* @__PURE__ */ jsxs(MDXProvider, {
          components: {
            pre: ({
              children
            }) => {
              var _a;
              return /* @__PURE__ */ jsx(CodeBlock, {
                language: (_a = children.props.className) == null ? void 0 : _a.replace(/language-/, ""),
                children: children.props.children.trim()
              });
            }
          },
          children: [Object.entries(this.feeds).map(([pathname2, {
            type: type2
          }]) => /* @__PURE__ */ jsx(Link, {
            rel: "alternate",
            type: type2,
            href: pathname2
          }, pathname2)), /* @__PURE__ */ jsx(Layout, {
            meta: meta2,
            tableOfContents: tableOfContents2,
            pages: this.pages,
            children: /* @__PURE__ */ jsx(Component, {
              meta: meta2,
              tableOfContents: tableOfContents2,
              pages: this.pages
            })
          })]
        })
      })
    }));
    return {
      status: this.pages[pathname] ? 200 : 404,
      type: "text/html",
      body: this.transformedTemplate.replace("<!--react-head-outlet-->", ReactDOMServer.renderToStaticMarkup(headTags)).replace("<!--fela-outlet-->", renderToMarkup(felaRenderer)).replace("<!--body-outlet-->", html)
    };
  }
}
function gatherPages() {
  const modules = /* @__PURE__ */ Object.assign({ "./pages/404.jsx": __vite_glob_0_0, "./pages/blog-post-1.mdx": __vite_glob_0_1, "./pages/blog-post-2.mdx": __vite_glob_0_2, "./pages/index.mdx": __vite_glob_0_3 });
  return Object.entries(modules).reduce((pages, [modulePath, page]) => {
    const filePath = modulePath.replace(/^\.\/pages/, "").replace(/(\.jsx|\.mdx)$/, "");
    const urlPath = filePath.endsWith("/index") ? filePath.replace(/index$/, "") : `${filePath}/`;
    pages[urlPath] = {
      Component: page.default,
      meta: page.meta,
      tableOfContents: page.tableOfContents,
      filePath,
      modulePath,
      urlPath
    };
    return pages;
  }, {});
}
function gatherFeeds() {
  const modules = /* @__PURE__ */ Object.assign({ "./feeds/posts.jsx": __vite_glob_1_0 });
  return Object.entries(modules).reduce((feeds, [modulePath, feed]) => {
    const urlPath = modulePath.replace(/^\.\/feeds/, "").replace(/\.jsx$/, ".json");
    feeds[urlPath] = feed.default;
    return feeds;
  }, {});
}
export {
  Renderer
};
