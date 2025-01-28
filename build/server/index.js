import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, NavLink, Link as Link$1, useLocation, Outlet, Meta, Links, ScrollRestoration, Scripts } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState, useRef, useEffect } from "react";
import Framework7 from "framework7/lite-bundle";
import Framework7React, { Popup, Page, Block, Range, Card, CardHeader, CardContent, CardFooter, Button, Navbar, BlockTitle, NavLeft, NavTitle, BlockHeader, BlockFooter, NavRight, Link, View, f7, Searchbar, List, ListItem, Toolbar, App as App$1 } from "framework7-react";
import { ArrowPathIcon, XMarkIcon, HeartIcon, ShareIcon } from "@heroicons/react/24/solid";
import { Image } from "@shopify/hydrogen";
import { FireIcon, HomeIcon, QueueListIcon, RectangleStackIcon } from "@heroicons/react/24/outline";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const Filter = () => {
  const [priceMin, setPriceMin] = useState(200);
  const [priceMax, setPriceMax] = useState(400);
  const onPriceChange = (values) => {
    setPriceMin(values[0]);
    setPriceMax(values[1]);
  };
  return /* @__PURE__ */ jsx(
    Popup,
    {
      className: "demo-popup-swipe-handler",
      swipeToClose: "to-bottom",
      children: /* @__PURE__ */ jsxs(Page, { bgColor: "white", children: [
        /* @__PURE__ */ jsx("div", { slot: "fixed", className: "swipe-handler !bg-white" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 py-3", children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(ArrowPathIcon, { className: "size-5 opacity-70" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Filter" }),
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(XMarkIcon, { className: "size-5 opacity-70" }) })
        ] }),
        /* @__PURE__ */ jsxs(Block, { className: "flex flex-col gap-3 !py-3 !my-0", outlineIos: true, children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Price Filter" }) }),
          /* @__PURE__ */ jsx(
            Range,
            {
              min: 0,
              max: 500,
              step: 1,
              value: [priceMin, priceMax],
              label: true,
              dual: true,
              color: "#f2f2f2",
              onRangeChange: onPriceChange
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxs("small", { children: [
              "SAR ",
              priceMin,
              ".00"
            ] }),
            /* @__PURE__ */ jsxs("small", { children: [
              "SAR ",
              priceMax,
              ".00"
            ] })
          ] })
        ] })
      ] })
    }
  );
};
const PostCard = () => {
  return /* @__PURE__ */ jsxs(Card, { outlineMd: true, className: "demo-card-header-pic", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "!p-0 relative overflow-hidden", children: /* @__PURE__ */ jsx(
      Image,
      {
        src: "https://cdn.framework7.io/placeholder/nature-1000x600-4.jpg",
        alt: "Image title",
        aspectRatio: "4/2",
        loading: "eager",
        className: "object-cover"
      }
    ) }),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsx("p", { className: "", children: "Posted on January 21, 2015" }),
      /* @__PURE__ */ jsx("p", { children: "Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit..." })
    ] }),
    /* @__PURE__ */ jsxs(CardFooter, { children: [
      /* @__PURE__ */ jsxs(Button, { popupOpen: ".demo-popup-swipe-handler", className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(HeartIcon, { className: "size-6" }),
        "Likes"
      ] }),
      /* @__PURE__ */ jsxs(Button, { popupOpen: ".demo-popup-swipe-handler", className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(ShareIcon, { className: "size-6" }),
        "Share"
      ] })
    ] })
  ] });
};
const meta$3 = () => {
  return [
    { title: "Home Page" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};
function Index() {
  return (
    // Main Framework7 App component where we pass Framework7 params
    /* @__PURE__ */ jsxs(Page, { children: [
      /* @__PURE__ */ jsx(Navbar, { title: "Home" }),
      /* @__PURE__ */ jsx(BlockTitle, { children: "Post Cards" }),
      /* @__PURE__ */ jsx(PostCard, {}),
      /* @__PURE__ */ jsx(Filter, {})
    ] })
  );
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
const meta$2 = () => {
  return [
    { title: "Remix App - About" },
    { name: "description", content: "About Page" }
  ];
};
function About() {
  return /* @__PURE__ */ jsxs(
    Page,
    {
      name: "About",
      children: [
        /* @__PURE__ */ jsxs(Navbar, { children: [
          /* @__PURE__ */ jsx(NavLeft, { children: /* @__PURE__ */ jsx(NavLink, { to: "/", className: "w-6", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5 8.25 12l7.5-7.5" }) }) }) }),
          /* @__PURE__ */ jsx(NavTitle, { children: "About" })
        ] }),
        /* @__PURE__ */ jsx(BlockTitle, { children: "Block Title" }),
        /* @__PURE__ */ jsx(Block, { children: /* @__PURE__ */ jsxs("p", { className: "!text-red-500", children: [
          "Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.",
          " "
        ] }) }),
        /* @__PURE__ */ jsx(BlockTitle, { children: "Strong Block" }),
        /* @__PURE__ */ jsx(Block, { strong: true, children: /* @__PURE__ */ jsxs("p", { children: [
          "Here comes another text block with additional class. Praesent nec imperdiet diam. Maecenas vel lectus porttitor, consectetur magna nec, viverra sem. Aliquam sed risus dolor. Morbi tincidunt ut libero id sodales. Integer blandit varius nisi quis consectetur.",
          " "
        ] }) }),
        /* @__PURE__ */ jsx(BlockTitle, { children: "Strong Outline Block" }),
        /* @__PURE__ */ jsx(Block, { strong: true, outline: true, children: /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates itaque autem qui quaerat vero ducimus praesentium quibusdam veniam error ut alias, numquam iste ea quos maxime consequatur ullam at a." }) }),
        /* @__PURE__ */ jsx(BlockTitle, { children: "Strong Inset Block" }),
        /* @__PURE__ */ jsx(Block, { strong: true, inset: true, children: /* @__PURE__ */ jsxs("p", { children: [
          "Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.",
          " "
        ] }) }),
        /* @__PURE__ */ jsx(BlockTitle, { children: "Strong Inset Outline Block" }),
        /* @__PURE__ */ jsx(Block, { strong: true, outline: true, inset: true, children: /* @__PURE__ */ jsxs("p", { children: [
          "Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.",
          " "
        ] }) }),
        /* @__PURE__ */ jsx(BlockTitle, { children: "Tablet Inset" }),
        /* @__PURE__ */ jsx(Block, { strong: true, mediumInset: true, children: /* @__PURE__ */ jsxs("p", { children: [
          "Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.",
          " "
        ] }) }),
        /* @__PURE__ */ jsx(BlockTitle, { children: "With Header & Footer" }),
        /* @__PURE__ */ jsxs(Block, { children: [
          /* @__PURE__ */ jsx(BlockHeader, { children: "Block Header" }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.",
            " "
          ] }),
          /* @__PURE__ */ jsx(BlockFooter, { children: "Block Footer" })
        ] }),
        /* @__PURE__ */ jsx(BlockHeader, { children: "Block Header" }),
        /* @__PURE__ */ jsx(Block, { children: /* @__PURE__ */ jsxs("p", { children: [
          "Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.",
          " "
        ] }) }),
        /* @__PURE__ */ jsx(BlockFooter, { children: "Block Footer" }),
        /* @__PURE__ */ jsxs(Block, { strong: true, children: [
          /* @__PURE__ */ jsx(BlockHeader, { children: "Block Header" }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.",
            " "
          ] }),
          /* @__PURE__ */ jsx(BlockFooter, { children: "Block Footer" })
        ] }),
        /* @__PURE__ */ jsx(BlockHeader, { children: "Block Header" }),
        /* @__PURE__ */ jsx(Block, { strong: true, children: /* @__PURE__ */ jsxs("p", { children: [
          "Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.",
          " "
        ] }) }),
        /* @__PURE__ */ jsx(BlockFooter, { children: "Block Footer" }),
        /* @__PURE__ */ jsx(BlockTitle, { large: true, children: "Block Title Large" }),
        /* @__PURE__ */ jsx(Block, { strong: true, children: /* @__PURE__ */ jsxs("p", { children: [
          "Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.",
          " "
        ] }) }),
        /* @__PURE__ */ jsx(BlockTitle, { medium: true, children: "Block Title Medium" }),
        /* @__PURE__ */ jsx(Block, { strong: true, children: /* @__PURE__ */ jsxs("p", { children: [
          "Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.",
          " "
        ] }) })
      ]
    }
  );
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const meta$1 = () => {
  return [
    { title: "Remix App - Popup" },
    { name: "description", content: "Popup Page" }
  ];
};
const PopupPage = () => {
  const [popupOpened, setPopupOpened] = useState(false);
  const popup = useRef(null);
  const createPopup = () => {
    if (!popup.current) {
      popup.current = f7.popup.create({
        content: `
					<div class="popup">
						<div class="page">
						<div class="navbar">
							<div class="navbar-inner">
							<div class="navbar-bg"></div>
							<div class="title">Dynamic Popup</div>
							<div class="right"><a  class="link popup-close">Close</a></div>
							</div>
						</div>
						<div class="page-content">
							<div class="block">
							<p>This popup was created dynamically</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
							</div>
						</div>
						</div>
					</div>
        		`.trim()
      });
    }
    popup.current.open();
  };
  const onPageBeforeRemove = () => {
    if (popup.current) popup.current.destroy();
  };
  return /* @__PURE__ */ jsxs(Page, { onPageBeforeRemove, children: [
    /* @__PURE__ */ jsxs(Navbar, { children: [
      /* @__PURE__ */ jsx(NavLeft, { children: /* @__PURE__ */ jsx(NavLink, { to: "/", className: "w-6", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5 8.25 12l7.5-7.5" }) }) }) }),
      /* @__PURE__ */ jsx(NavTitle, { children: "Popups" })
    ] }),
    /* @__PURE__ */ jsxs(Block, { strongIos: true, outlineIos: true, children: [
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(Button, { fill: true, popupOpen: ".demo-popup", children: "Open Popup" }) }),
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(Button, { fill: true, onClick: () => setPopupOpened(true), children: "Open Via Prop Change" }) }),
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(Button, { fill: true, onClick: createPopup, children: "Create Dynamic Popup" }) })
    ] }),
    /* @__PURE__ */ jsx(BlockTitle, { children: "Swipe To Close" }),
    /* @__PURE__ */ jsxs(Block, { strongIos: true, outlineIos: true, children: [
      /* @__PURE__ */ jsx("p", { children: "Popup can be closed with swipe to top or bottom:" }),
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(Button, { fill: true, popupOpen: ".demo-popup-swipe", children: "Swipe To Close" }) }),
      /* @__PURE__ */ jsx("p", { children: "Or it can be closed with swipe on special swipe handler and, for example, only to bottom:" }),
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(Button, { fill: true, popupOpen: ".demo-popup-swipe-handler", children: "With Swipe Handler" }) })
    ] }),
    /* @__PURE__ */ jsx(BlockTitle, { children: "Push View" }),
    /* @__PURE__ */ jsxs(Block, { strongIos: true, outlineIos: true, children: [
      /* @__PURE__ */ jsx("p", { children: "Popup can push view behind. By default has effect only when `safe-area-inset-top` is more than zero (iOS fullscreen webapp or iOS cordova app)" }),
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(Button, { fill: true, popupOpen: ".demo-popup-push", children: "Popup Push" }) })
    ] }),
    /* @__PURE__ */ jsx(
      Popup,
      {
        className: "demo-popup",
        opened: popupOpened,
        onPopupClosed: () => setPopupOpened(false),
        children: /* @__PURE__ */ jsxs(Page, { children: [
          /* @__PURE__ */ jsx(Navbar, { title: "Popup Title", children: /* @__PURE__ */ jsx(NavRight, { children: /* @__PURE__ */ jsx(Link, { popupClose: true, children: "Close" }) }) }),
          /* @__PURE__ */ jsxs(Block, { children: [
            /* @__PURE__ */ jsx("p", { children: "Here comes popup. You can put here anything, even independent view with its own navigation. Also not, that by default popup looks a bit different on iPhone/iPod and iPad, on iPhone it is fullscreen." }),
            /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus." }),
            /* @__PURE__ */ jsx("p", { children: "Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros, convallis blandit dui sit amet, gravida adipiscing libero." })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(Popup, { push: true, className: "demo-popup-push", children: /* @__PURE__ */ jsx(View, { children: /* @__PURE__ */ jsxs(Page, { children: [
      /* @__PURE__ */ jsx(Navbar, { title: "Push Popup s", large: true, transparent: true, children: /* @__PURE__ */ jsx(NavRight, { children: /* @__PURE__ */ jsx(Link, { popupClose: true, children: "Close" }) }) }),
      /* @__PURE__ */ jsxs(Block, { children: [
        /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus." }),
        /* @__PURE__ */ jsx("p", { children: "Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros, convallis blandit dui sit amet, gravida adipiscing libero." }),
        /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(Popup, { className: "demo-popup-swipe", swipeToClose: true, children: /* @__PURE__ */ jsxs(Page, { children: [
      /* @__PURE__ */ jsx(Navbar, { title: "Swipe To Close ss4", children: /* @__PURE__ */ jsx(NavRight, { children: /* @__PURE__ */ jsx(Link, { popupClose: true, children: "Close" }) }) }),
      /* @__PURE__ */ jsx(
        "div",
        {
          style: { height: "100%" },
          className: "display-flex justify-content-center align-items-center",
          children: /* @__PURE__ */ jsx("p", { children: "Swipe me up or down" })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(
      Popup,
      {
        className: "demo-popup-swipe-handler",
        swipeToClose: "to-bottom",
        swipeHandler: ".swipe-handler",
        children: /* @__PURE__ */ jsxs(Page, { children: [
          /* @__PURE__ */ jsx("div", { slot: "fixed", className: "swipe-handler" }),
          /* @__PURE__ */ jsx(BlockTitle, { large: true, children: "Hello! sss" }),
          /* @__PURE__ */ jsxs(Block, { strongIos: true, outlineIos: true, children: [
            /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus." }),
            /* @__PURE__ */ jsx("p", { children: "Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros, convallis blandit dui sit amet, gravida adipiscing libero." }),
            /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus." }),
            /* @__PURE__ */ jsx("p", { children: "Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros, convallis blandit dui sit amet, gravida adipiscing libero." })
          ] })
        ] })
      }
    )
  ] });
};
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PopupPage,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const meta = () => {
  return [
    { title: "Remix App - Collections" },
    { name: "description", content: "Collections Page" }
  ];
};
function Collections() {
  return /* @__PURE__ */ jsxs(Page, { children: [
    /* @__PURE__ */ jsx(Navbar, { title: "Collections", backLink: " " }),
    /* @__PURE__ */ jsx(
      Searchbar,
      {
        placeholder: "Search collections",
        clearButton: true
      }
    ),
    /* @__PURE__ */ jsx(BlockTitle, { children: "Browse Collections" }),
    /* @__PURE__ */ jsxs(List, { children: [
      /* @__PURE__ */ jsx(
        ListItem,
        {
          link: "/collections/summer",
          title: "Summer Fragrances",
          after: "24 items"
        }
      ),
      /* @__PURE__ */ jsx(
        ListItem,
        {
          link: "/collections/luxury",
          title: "Luxury Collection",
          after: "18 items"
        }
      ),
      /* @__PURE__ */ jsx(
        ListItem,
        {
          link: "/collections/new",
          title: "New Arrivals",
          after: "12 items"
        }
      )
    ] })
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Collections,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const routes$1 = [
  {
    path: "/",
    component: Index
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/collections",
    component: Collections
  },
  {
    path: "/popup",
    component: PopupPage
  }
];
const ToolBar = () => {
  return /* @__PURE__ */ jsxs(Toolbar, { position: "bottom", children: [
    /* @__PURE__ */ jsxs(Link$1, { to: "/about", className: "flex flex-col items-center text-xs font-semibold", children: [
      /* @__PURE__ */ jsx(FireIcon, { className: "size-6" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "About" })
    ] }),
    /* @__PURE__ */ jsxs(NavLink, { to: "/", className: "flex flex-col items-center text-xs font-semibold", children: [
      /* @__PURE__ */ jsx(HomeIcon, { className: "size-6" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "home" })
    ] }),
    /* @__PURE__ */ jsxs(NavLink, { to: "/collections", className: "flex flex-col items-center text-xs font-semibold", children: [
      /* @__PURE__ */ jsx(QueueListIcon, { className: "size-6" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "collections" })
    ] }),
    /* @__PURE__ */ jsxs(NavLink, { to: "/popup", className: "flex flex-col items-center text-xs font-semibold", children: [
      /* @__PURE__ */ jsx(RectangleStackIcon, { className: "size-6" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "popup" })
    ] })
  ] });
};
Framework7.use(Framework7React);
function AppLayout({ children = null }) {
  const [isClient, setIsClient] = useState(false);
  const path = useLocation();
  const url = `${"https://my-framework7-website.com"}${path.pathname}`;
  useEffect(() => {
    setIsClient(true);
    Framework7.use(Framework7React);
    console.log("App Layout Mount");
    console.log("url", url);
    console.log("path.pathname", path.pathname);
  }, []);
  if (!isClient) return null;
  return /* @__PURE__ */ jsx(
    App$1,
    {
      name: "Remix F7 Ap",
      theme: "ios",
      darkMode: false,
      colors: {
        primary: "#222222"
      },
      routes: routes$1,
      url,
      popup: { closeOnEscape: true },
      sheet: { closeOnEscape: true },
      popover: { closeOnEscape: true },
      actions: { closeOnEscape: true },
      children: /* @__PURE__ */ jsxs(
        View,
        {
          main: true,
          iosDynamicNavbar: false,
          browserHistory: true,
          browserHistorySeparator: "",
          browserHistoryInitialMatch: true,
          browserHistoryStoreHistory: false,
          url: path.pathname,
          children: [
            children,
            /* @__PURE__ */ jsx(ToolBar, {})
          ]
        }
      )
    }
  );
}
const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(AppLayout, { children }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CNUyz7-R.js", "imports": ["/assets/jsx-runtime-Fer5cbsJ.js", "/assets/components-DLP2itkR.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-CzntVW5d.js", "imports": ["/assets/jsx-runtime-Fer5cbsJ.js", "/assets/components-DLP2itkR.js", "/assets/page-0v5CYgrU.js", "/assets/button-BOf4j27c.js", "/assets/popup-BWbaWR34.js", "/assets/_index-DTm8pzDp.js", "/assets/about-CXPOaQS6.js", "/assets/collections-CBDV4o90.js", "/assets/block-CzAzfsxy.js"], "css": ["/assets/root-BfhRCzwV.css"] }, "routes/collections": { "id": "routes/collections", "parentId": "root", "path": "collections", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/collections-CBDV4o90.js", "imports": ["/assets/jsx-runtime-Fer5cbsJ.js", "/assets/page-0v5CYgrU.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-DTm8pzDp.js", "imports": ["/assets/jsx-runtime-Fer5cbsJ.js", "/assets/page-0v5CYgrU.js", "/assets/block-CzAzfsxy.js", "/assets/button-BOf4j27c.js"], "css": [] }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/about-CXPOaQS6.js", "imports": ["/assets/jsx-runtime-Fer5cbsJ.js", "/assets/page-0v5CYgrU.js", "/assets/block-CzAzfsxy.js", "/assets/components-DLP2itkR.js"], "css": [] }, "routes/popup": { "id": "routes/popup", "parentId": "root", "path": "popup", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/popup-ClIgKGPn.js", "imports": ["/assets/popup-BWbaWR34.js", "/assets/jsx-runtime-Fer5cbsJ.js", "/assets/page-0v5CYgrU.js", "/assets/block-CzAzfsxy.js", "/assets/button-BOf4j27c.js", "/assets/components-DLP2itkR.js"], "css": [] } }, "url": "/assets/manifest-e93d8feb.js", "version": "e93d8feb" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "v3_routeConfig": false, "v3_singleFetch": true, "v3_lazyRouteDiscovery": true, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/collections": {
    id: "routes/collections",
    parentId: "root",
    path: "collections",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/popup": {
    id: "routes/popup",
    parentId: "root",
    path: "popup",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
