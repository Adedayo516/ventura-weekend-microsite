"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _React = React,
  useEffect = _React.useEffect,
  useMemo = _React.useMemo,
  useState = _React.useState;
var links = {
  train: "https://www.pacificsurfliner.com/plan-your-trip/schedules/",
  ferry: "https://www.islandpackers.com/book/ventura/trips/santa-cruz-island/",
  npsSantaCruz: "https://www.nps.gov/chis/planyourvisit/santa-cruz-island.htm",
  npsHiking: "https://www.nps.gov/chis/planyourvisit/hiking.htm",
  hotel: "https://www.zacharidunes.com/",
  hotelMap: "https://www.google.com/maps/search/?api=1&query=Zachari+Dunes+on+Mandalay+Beach",
  cafeZack: "https://www.google.com/maps/search/?api=1&query=Cafe+Zack+Ventura",
  modelCitizen: "https://www.google.com/maps/search/?api=1&query=Model+Citizen+Ventura",
  immigrantSon: "https://www.google.com/maps/search/?api=1&query=Immigrant+Son+Caffe+Ventura",
  lure: "https://www.google.com/maps/search/?api=1&query=Lure+Fish+House+Ventura",
  andrias: "https://www.google.com/maps/search/?api=1&query=Andria%27s+Seafood+Ventura+Harbor",
  brophy: "https://www.google.com/maps/search/?api=1&query=Brophy+Bros+Ventura"
};
var images = {
  hero: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=82",
  harbor: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
  hotel: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
  train: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1400&q=80",
  island: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=82",
  dinner: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
  brunch: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1400&q=80",
  fallback: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='900' viewBox='0 0 1200 900'%3E%3Crect width='1200' height='900' fill='%23f2e7d6'/%3E%3Cpath d='M0 584c112-58 220-82 324-71 152 16 217 110 376 96 131-12 207-90 333-88 70 1 126 26 167 53v326H0z' fill='%239ac5ce'/%3E%3Ccircle cx='910' cy='234' r='94' fill='%23f1a56f'/%3E%3Cpath d='M114 377c159-85 282-126 369-123 131 5 186 104 313 100 78-3 154-45 229-127' fill='none' stroke='%230d5068' stroke-width='18' stroke-linecap='round' opacity='.45'/%3E%3Ctext x='92' y='788' fill='%230b3542' font-family='Georgia,serif' font-size='54'%3EVentura coast%3C/text%3E%3C/svg%3E"
};
var saturday = [{
  time: "Morning",
  title: "Home to Irvine Station",
  tag: "Start light",
  body: "Drive or rideshare to Irvine Transportation Center with one overnight bag and one shared island daypack.",
  details: ["Parking and platform details should be checked the week of travel.", "Keep IDs, train confirmations, and ferry confirmation in one phone wallet or shared folder."]
}, {
  time: "Midday",
  title: "Pacific Surfliner to Ventura",
  tag: "Confirm before booking",
  body: "Reserve seats after ferry availability is known. Sit on the ocean side when the train orientation makes that possible.",
  details: ["Do not rely on draft times from this itinerary.", "Check Pacific Surfliner advisories before purchase."],
  href: links.train
}, {
  time: "Afternoon",
  title: "Ventura Station to Zachari Dunes",
  tag: "Beach reset",
  body: "Rideshare to the resort, drop bags, walk Mandalay Beach, then keep the afternoon unhurried.",
  details: ["Ask about bag storage if arrival is before check-in.", "Save a change of clothes near the top of the bag for dinner."]
}, {
  time: "Evening",
  title: "Polished Ventura Dinner",
  tag: "Joey Newport energy",
  body: "Choose a date-night restaurant with polished service, warm lighting, and strong non-seafood options.",
  details: ["Cafe Zack: intimate and classic.", "Model Citizen: more contemporary and lively.", "Reserve dinner once hotel and train are set."],
  href: links.cafeZack
}];
var sunday = [{
  time: "Morning",
  title: "Brunch Before the Harbor",
  tag: "Snooze-style start",
  body: "Immigrant Son Caffe fits the creative brunch lane: bright, energetic, and more memorable than a basic hotel breakfast.",
  details: ["Build in buffer time for checkout and the rideshare to Ventura Harbor.", "If brunch timing gets tight, switch to grab-and-go food for the ferry."],
  href: links.immigrantSon
}, {
  time: "Late morning",
  title: "Hotel to Harbor",
  tag: "Keep the daypack ready",
  body: "Move from the hotel to Island Packers at Ventura Harbor. Confirm check-in requirements directly with Island Packers.",
  details: ["Carry all food and water you need for the island.", "There are no shops once you land at Scorpion Anchorage."],
  href: links.ferry
}, {
  time: "Ferry window",
  title: "Ventura to Santa Cruz Island",
  tag: "Confirm before booking",
  body: "Book a day-visitor round trip to Scorpion Anchorage only after confirming same-day return inventory.",
  details: ["Island Packers notes transport times are approximate and can shift with weather, wildlife viewing, and passenger loads.", "Ask staff or a ranger about the exact return meeting time before hiking."],
  href: links.ferry
}, {
  time: "Island afternoon",
  title: "Cavern Point + Potato Harbor",
  tag: "Moderate hike",
  body: "A scenic coastal loop with cliff views, sun exposure, and a real sense of arrival on the islands.",
  details: ["Plan roughly 4-5 miles and 2.5-3 hours depending on route, heat, stops, and ferry timing.", "Stay well back from cliff edges and carry extra water."],
  href: links.npsHiking
}, {
  time: "Evening",
  title: "Fish-and-chips finish, then train home",
  tag: "Flexible close",
  body: "After the ferry, keep dinner close to the harbor or downtown, then rideshare to Ventura Station for the return train.",
  details: ["Lure Fish House is the polished seafood-forward option.", "Andria's is the classic harbor fish-and-chips stop.", "Confirm train schedule before locking dinner timing."],
  href: links.lure
}];
var packingItems = ["2-3 liters of water per person", "Lunch and high-energy trail snacks", "Hiking shoes with grip", "Sun hat and sunglasses", "Reef-safe sunscreen and lip balm", "Light windbreaker or warm layer", "Motion-sickness medicine", "Portable charger", "Date-night outfit", "Swimwear", "Reusable water bottles", "IDs and reservation confirmations"];
var budgetDefaults = [{
  key: "train",
  label: "Train, two round trips",
  amount: 140
}, {
  key: "hotel",
  label: "Zachari Dunes, one night",
  amount: 440
}, {
  key: "ferry",
  label: "Island Packers, two people",
  amount: 180
}, {
  key: "rideshare",
  label: "Local rideshares",
  amount: 70
}, {
  key: "food",
  label: "Brunch, dinner, snacks",
  amount: 280
}, {
  key: "buffer",
  label: "Weather and timing buffer",
  amount: 100
}];
function ExternalLink(_ref) {
  var href = _ref.href,
    children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "text-link" : _ref$className;
  return /*#__PURE__*/React.createElement("a", {
    className: className,
    href: href,
    target: "_blank",
    rel: "noreferrer"
  }, children);
}
function SmartImage(_ref2) {
  var src = _ref2.src,
    alt = _ref2.alt,
    _ref2$className = _ref2.className,
    className = _ref2$className === void 0 ? "" : _ref2$className;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    failed = _useState2[0],
    setFailed = _useState2[1];
  return /*#__PURE__*/React.createElement("img", {
    className: className,
    src: failed ? images.fallback : src,
    alt: alt,
    loading: "lazy",
    onError: function onError() {
      return setFailed(true);
    }
  });
}
function TimelineCard(_ref3) {
  var item = _ref3.item,
    index = _ref3.index;
  var _useState3 = useState(index === 0),
    _useState4 = _slicedToArray(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  return /*#__PURE__*/React.createElement("article", {
    className: "timeline-card ".concat(open ? "is-open" : "")
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(!open);
    },
    "aria-expanded": open
  }, /*#__PURE__*/React.createElement("span", {
    className: "timeline-time"
  }, item.time), /*#__PURE__*/React.createElement("span", {
    className: "timeline-title"
  }, item.title), /*#__PURE__*/React.createElement("span", {
    className: "timeline-tag"
  }, item.tag)), /*#__PURE__*/React.createElement("div", {
    className: "timeline-panel",
    hidden: !open
  }, /*#__PURE__*/React.createElement("p", null, item.body), /*#__PURE__*/React.createElement("ul", null, item.details.map(function (detail) {
    return /*#__PURE__*/React.createElement("li", {
      key: detail
    }, detail);
  })), item.href ? /*#__PURE__*/React.createElement(ExternalLink, {
    href: item.href
  }, "Open official or map link") : null));
}
function Carousel() {
  var gallery = [{
    src: images.hotel,
    caption: "Zachari Dunes mood: suite, pool, beach access"
  }, {
    src: images.harbor,
    caption: "Ventura Harbor: ferry staging and post-island dinner"
  }, {
    src: images.island,
    caption: "Santa Cruz Island: exposed cliffs and wide Pacific views"
  }];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    active = _useState6[0],
    setActive = _useState6[1];
  var next = function next() {
    return setActive((active + 1) % gallery.length);
  };
  var prev = function prev() {
    return setActive((active - 1 + gallery.length) % gallery.length);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "carousel",
    "aria-label": "Destination image carousel"
  }, /*#__PURE__*/React.createElement(SmartImage, {
    src: gallery[active].src,
    alt: gallery[active].caption
  }), /*#__PURE__*/React.createElement("div", {
    className: "carousel-controls"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: prev,
    "aria-label": "Previous image"
  }, "\u2039"), /*#__PURE__*/React.createElement("p", null, gallery[active].caption), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: next,
    "aria-label": "Next image"
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    className: "dots"
  }, gallery.map(function (item, index) {
    return /*#__PURE__*/React.createElement("button", {
      key: item.caption,
      className: index === active ? "active" : "",
      onClick: function onClick() {
        return setActive(index);
      },
      "aria-label": "Show image ".concat(index + 1)
    });
  })));
}
function PackingChecklist() {
  var _useState7 = useState(function () {
      try {
        return JSON.parse(localStorage.getItem("venturaPacking") || "{}");
      } catch (_unused) {
        return {};
      }
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    checked = _useState8[0],
    setChecked = _useState8[1];
  useEffect(function () {
    localStorage.setItem("venturaPacking", JSON.stringify(checked));
  }, [checked]);
  var count = Object.values(checked).filter(Boolean).length;
  return /*#__PURE__*/React.createElement("div", {
    className: "checklist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "checklist-head"
  }, /*#__PURE__*/React.createElement("h3", null, "Packing checklist"), /*#__PURE__*/React.createElement("span", null, count, "/", packingItems.length)), packingItems.map(function (item) {
    return /*#__PURE__*/React.createElement("label", {
      key: item,
      className: checked[item] ? "checked" : ""
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: Boolean(checked[item]),
      onChange: function onChange(event) {
        return setChecked(_objectSpread(_objectSpread({}, checked), {}, _defineProperty({}, item, event.target.checked)));
      }
    }), item);
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ghost-button",
    onClick: function onClick() {
      return setChecked({});
    }
  }, "Clear checklist"));
}
function BudgetCalculator() {
  var _useState9 = useState(function () {
      try {
        return JSON.parse(localStorage.getItem("venturaBudget") || "null") || budgetDefaults;
      } catch (_unused2) {
        return budgetDefaults;
      }
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    items = _useState10[0],
    setItems = _useState10[1];
  useEffect(function () {
    localStorage.setItem("venturaBudget", JSON.stringify(items));
  }, [items]);
  var total = useMemo(function () {
    return items.reduce(function (sum, item) {
      return sum + Number(item.amount || 0);
    }, 0);
  }, [items]);
  var update = function update(key, amount) {
    return setItems(items.map(function (item) {
      return item.key === key ? _objectSpread(_objectSpread({}, item), {}, {
        amount: Math.max(0, Number(amount) || 0)
      }) : item;
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "budget-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "budget-total"
  }, /*#__PURE__*/React.createElement("span", null, "Editable estimate for two"), /*#__PURE__*/React.createElement("strong", null, "$", total.toLocaleString())), items.map(function (item) {
    return /*#__PURE__*/React.createElement("label", {
      key: item.key
    }, /*#__PURE__*/React.createElement("span", null, item.label), /*#__PURE__*/React.createElement("input", {
      type: "number",
      min: "0",
      step: "10",
      value: item.amount,
      onChange: function onChange(event) {
        return update(item.key, event.target.value);
      }
    }));
  }), /*#__PURE__*/React.createElement("p", null, "Estimates are placeholders. Confirm live rates before booking."));
}
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    className: "skip-link",
    href: "#overview"
  }, "Skip to itinerary"), /*#__PURE__*/React.createElement("header", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement(SmartImage, {
    className: "hero-img",
    src: images.hero,
    alt: "A warm coastal view for the Ventura weekend"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-overlay"
  }), /*#__PURE__*/React.createElement("nav", {
    className: "nav",
    "aria-label": "Primary navigation"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "brand"
  }, "Ventura Weekend"), /*#__PURE__*/React.createElement("div", null, ["Overview", "Saturday", "Sunday", "Stay", "Food", "Packing", "Budget"].map(function (item) {
    return /*#__PURE__*/React.createElement("a", {
      key: item,
      href: "#".concat(item.toLowerCase())
    }, item);
  }))), /*#__PURE__*/React.createElement("section", {
    className: "hero-copy"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Saturday, July 18 - Sunday, July 19"), /*#__PURE__*/React.createElement("h1", null, "Ventura & Channel Islands Weekend"), /*#__PURE__*/React.createElement("p", null, "One night on the coast, a ferry to Santa Cruz Island, and a boutique-style itinerary built for two."), /*#__PURE__*/React.createElement("a", {
    className: "button primary",
    href: "#saturday"
  }, "View itinerary"))), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "overview section",
    id: "overview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-kicker"
  }, "Overview"), /*#__PURE__*/React.createElement("h2", null, "Upscale, simple, and ocean-forward."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "The rhythm is intentionally easy: coastal train, beachfront resort, polished dinner, creative brunch, harbor transfer, island hike, and a relaxed return. Schedule details are marked as confirm before booking because train and ferry inventory can change."), /*#__PURE__*/React.createElement("div", {
    className: "stats"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Trip length"), /*#__PURE__*/React.createElement("strong", null, "1 night / 2 days")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Base"), /*#__PURE__*/React.createElement("strong", null, "Zachari Dunes")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Island plan"), /*#__PURE__*/React.createElement("strong", null, "Scorpion Anchorage")))), /*#__PURE__*/React.createElement("section", {
    className: "flow section",
    "aria-labelledby": "transport-flow-title"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section-kicker"
  }, "Transportation flow"), /*#__PURE__*/React.createElement("h2", {
    id: "transport-flow-title"
  }, "Home to harbor, without guessing the schedule.")), /*#__PURE__*/React.createElement("div", {
    className: "flow-track"
  }, ["Home", "Irvine Station", "Ventura", "Hotel", "Harbor", "Island"].map(function (stop) {
    return /*#__PURE__*/React.createElement("div", {
      className: "flow-stop",
      key: stop
    }, /*#__PURE__*/React.createElement("span", null), stop);
  })), /*#__PURE__*/React.createElement("p", {
    className: "note"
  }, "Confirm Pacific Surfliner and Island Packers schedules before booking. Build the train around ferry availability, not the other way around.")), /*#__PURE__*/React.createElement("section", {
    className: "timeline-section section",
    id: "saturday"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split-heading"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section-kicker"
  }, "Saturday"), /*#__PURE__*/React.createElement("h2", null, "The coastal arrival day")), /*#__PURE__*/React.createElement(SmartImage, {
    src: images.train,
    alt: "Passenger train near the coast"
  })), /*#__PURE__*/React.createElement("div", {
    className: "timeline-list"
  }, saturday.map(function (item, index) {
    return /*#__PURE__*/React.createElement(TimelineCard, {
      key: item.title,
      item: item,
      index: index
    });
  }))), /*#__PURE__*/React.createElement("section", {
    className: "timeline-section section island-band",
    id: "sunday"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split-heading"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section-kicker"
  }, "Sunday"), /*#__PURE__*/React.createElement("h2", null, "Brunch, ferry, island cliffs")), /*#__PURE__*/React.createElement(SmartImage, {
    src: images.island,
    alt: "Channel Islands coastline and surf"
  })), /*#__PURE__*/React.createElement("div", {
    className: "timeline-list"
  }, sunday.map(function (item, index) {
    return /*#__PURE__*/React.createElement(TimelineCard, {
      key: item.title,
      item: item,
      index: index
    });
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section stay",
    id: "stay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-kicker"
  }, "Stay"), /*#__PURE__*/React.createElement("h2", null, "Zachari Dunes on Mandalay Beach"), /*#__PURE__*/React.createElement("div", {
    className: "stay-grid"
  }, /*#__PURE__*/React.createElement(Carousel, null), /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("h3", null, "Why it fits"), /*#__PURE__*/React.createElement("p", null, "Beachfront, resort-like, and easy to make feel special for one night without turning the weekend into a logistics project."), /*#__PURE__*/React.createElement("div", {
    className: "amenities"
  }, ["Beach access", "All-suite feel", "Pool + hot tub", "Fire pits", "On-site dining", "Easy rideshare base"].map(function (amenity) {
    return /*#__PURE__*/React.createElement("span", {
      key: amenity
    }, amenity);
  })), /*#__PURE__*/React.createElement("div", {
    className: "button-row"
  }, /*#__PURE__*/React.createElement(ExternalLink, {
    href: links.hotel,
    className: "button primary"
  }, "Book hotel"), /*#__PURE__*/React.createElement(ExternalLink, {
    href: links.hotelMap,
    className: "button secondary"
  }, "Open map"))))), /*#__PURE__*/React.createElement("section", {
    className: "section food",
    id: "food"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-kicker"
  }, "Food"), /*#__PURE__*/React.createElement("h2", null, "Restaurants with Joey Newport polish and Snooze-style brunch energy."), /*#__PURE__*/React.createElement("div", {
    className: "card-grid"
  }, /*#__PURE__*/React.createElement(FoodCard, {
    image: images.dinner,
    title: "Polished dinner",
    text: "Cafe Zack for intimate date-night energy; Model Citizen as the more contemporary backup.",
    links: [["Cafe Zack", links.cafeZack], ["Model Citizen", links.modelCitizen]]
  }), /*#__PURE__*/React.createElement(FoodCard, {
    image: images.brunch,
    title: "Creative brunch",
    text: "Immigrant Son Caffe is the best match for playful, memorable brunch before the harbor.",
    links: [["Immigrant Son", links.immigrantSon]]
  }), /*#__PURE__*/React.createElement(FoodCard, {
    image: images.harbor,
    title: "Fish-and-chips options",
    text: "Andria's for the classic harbor stop, Brophy Bros for a sit-down waterfront feel, or Lure for a polished seafood finish.",
    links: [["Andria's", links.andrias], ["Brophy Bros", links.brophy], ["Lure", links.lure]]
  })), /*#__PURE__*/React.createElement("div", {
    className: "recommendations"
  }, /*#__PURE__*/React.createElement("h3", null, "Non-seafood friendly picks"), /*#__PURE__*/React.createElement("p", null, "Cafe Zack, Model Citizen, Immigrant Son Caffe, and Lure are safer choices when one person wants seafood and the other wants steak, chicken, pasta, brunch plates, or a burger."))), /*#__PURE__*/React.createElement("section", {
    className: "section hike"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-kicker"
  }, "Channel Islands hike"), /*#__PURE__*/React.createElement("h2", null, "Cavern Point + Potato Harbor"), /*#__PURE__*/React.createElement("div", {
    className: "hike-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Distance"), /*#__PURE__*/React.createElement("strong", null, "Approx. 4-5 miles")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Difficulty"), /*#__PURE__*/React.createElement("strong", null, "Moderate")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Duration"), /*#__PURE__*/React.createElement("strong", null, "2.5-3 hours")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Ferry"), /*#__PURE__*/React.createElement("strong", null, "Island Packers, confirm live"))), /*#__PURE__*/React.createElement("p", null, "Expect exposed sun, cliff-edge viewpoints, uneven trail, no island shops, limited services, and a hard return deadline tied to the ferry. NPS guidance emphasizes staying on trails, avoiding cliff edges, carrying water, and meeting the boat concessionaire on time."), /*#__PURE__*/React.createElement("div", {
    className: "button-row"
  }, /*#__PURE__*/React.createElement(ExternalLink, {
    href: links.npsSantaCruz,
    className: "button secondary"
  }, "NPS Santa Cruz Island"), /*#__PURE__*/React.createElement(ExternalLink, {
    href: links.npsHiking,
    className: "button secondary"
  }, "NPS hiking safety"))), /*#__PURE__*/React.createElement("section", {
    className: "section packing",
    id: "packing"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section-kicker"
  }, "Packing"), /*#__PURE__*/React.createElement("h2", null, "Weather-ready without overpacking."), /*#__PURE__*/React.createElement("p", null, "Pack for a polished resort evening and a practical island day. Bring layers for marine wind, sun coverage for exposed trails, and food and water for the whole island window."), /*#__PURE__*/React.createElement("div", {
    className: "weather-box"
  }, /*#__PURE__*/React.createElement("strong", null, "Weather guidance"), /*#__PURE__*/React.createElement("span", null, "Check Ventura Harbor, Oxnard coast, and Channel Islands marine forecast the day before. If wind, fog, or ferry advisories appear, prioritize warm layers and motion-sickness backup."))), /*#__PURE__*/React.createElement(PackingChecklist, null)), /*#__PURE__*/React.createElement("section", {
    className: "section budget",
    id: "budget"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section-kicker"
  }, "Budget"), /*#__PURE__*/React.createElement("h2", null, "Editable budget calculator"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Use this as a planning sandbox for two people. The values save on this device so you can adjust them while booking.")), /*#__PURE__*/React.createElement(BudgetCalculator, null)), /*#__PURE__*/React.createElement("section", {
    className: "section booking"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-kicker"
  }, "Booking checklist"), /*#__PURE__*/React.createElement("h2", null, "Book the scarce pieces first."), /*#__PURE__*/React.createElement("div", {
    className: "booking-list"
  }, /*#__PURE__*/React.createElement(BookingItem, {
    number: "01",
    title: "Ferry",
    text: "Confirm Scorpion Anchorage day-visitor round trip and return window.",
    href: links.ferry
  }), /*#__PURE__*/React.createElement(BookingItem, {
    number: "02",
    title: "Hotel",
    text: "Book Zachari Dunes after ferry inventory is clear.",
    href: links.hotel
  }), /*#__PURE__*/React.createElement(BookingItem, {
    number: "03",
    title: "Train",
    text: "Reserve Pacific Surfliner around the ferry, not guessed draft times.",
    href: links.train
  }), /*#__PURE__*/React.createElement(BookingItem, {
    number: "04",
    title: "Dinner",
    text: "Reserve Cafe Zack or the best comparable date-night option.",
    href: links.cafeZack
  })))), /*#__PURE__*/React.createElement("a", {
    className: "floating-book",
    href: "#budget"
  }, "Book the trip"), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Emergency and travel notes"), /*#__PURE__*/React.createElement("p", null, "For emergencies call 911. Channel Islands National Park visitor center: 1901 Spinnaker Drive, Ventura; phone 805-658-5730. Island Packers Ventura office: 1691 Spinnaker Dr. #105B; phone 805-642-1393. Keep ferry, hotel, train, and dinner confirmations accessible offline."))));
}
function FoodCard(_ref4) {
  var image = _ref4.image,
    title = _ref4.title,
    text = _ref4.text,
    cardLinks = _ref4.links;
  return /*#__PURE__*/React.createElement("article", {
    className: "food-card"
  }, /*#__PURE__*/React.createElement(SmartImage, {
    src: image,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, text), /*#__PURE__*/React.createElement("div", {
    className: "mini-links"
  }, cardLinks.map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      label = _ref6[0],
      href = _ref6[1];
    return /*#__PURE__*/React.createElement(ExternalLink, {
      key: label,
      href: href
    }, label);
  }))));
}
function BookingItem(_ref7) {
  var number = _ref7.number,
    title = _ref7.title,
    text = _ref7.text,
    href = _ref7.href;
  return /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("span", null, number), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, text)), /*#__PURE__*/React.createElement(ExternalLink, {
    href: href,
    className: "button secondary"
  }, "Open"));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfUmVhY3QiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsImxpbmtzIiwidHJhaW4iLCJmZXJyeSIsIm5wc1NhbnRhQ3J1eiIsIm5wc0hpa2luZyIsImhvdGVsIiwiaG90ZWxNYXAiLCJjYWZlWmFjayIsIm1vZGVsQ2l0aXplbiIsImltbWlncmFudFNvbiIsImx1cmUiLCJhbmRyaWFzIiwiYnJvcGh5IiwiaW1hZ2VzIiwiaGVybyIsImhhcmJvciIsImlzbGFuZCIsImRpbm5lciIsImJydW5jaCIsImZhbGxiYWNrIiwic2F0dXJkYXkiLCJ0aW1lIiwidGl0bGUiLCJ0YWciLCJib2R5IiwiZGV0YWlscyIsImhyZWYiLCJzdW5kYXkiLCJwYWNraW5nSXRlbXMiLCJidWRnZXREZWZhdWx0cyIsImtleSIsImxhYmVsIiwiYW1vdW50IiwiRXh0ZXJuYWxMaW5rIiwiX3JlZiIsImNoaWxkcmVuIiwiX3JlZiRjbGFzc05hbWUiLCJjbGFzc05hbWUiLCJjcmVhdGVFbGVtZW50IiwidGFyZ2V0IiwicmVsIiwiU21hcnRJbWFnZSIsIl9yZWYyIiwic3JjIiwiYWx0IiwiX3JlZjIkY2xhc3NOYW1lIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZmFpbGVkIiwic2V0RmFpbGVkIiwibG9hZGluZyIsIm9uRXJyb3IiLCJUaW1lbGluZUNhcmQiLCJfcmVmMyIsIml0ZW0iLCJpbmRleCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwib3BlbiIsInNldE9wZW4iLCJjb25jYXQiLCJ0eXBlIiwib25DbGljayIsImhpZGRlbiIsIm1hcCIsImRldGFpbCIsIkNhcm91c2VsIiwiZ2FsbGVyeSIsImNhcHRpb24iLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImFjdGl2ZSIsInNldEFjdGl2ZSIsIm5leHQiLCJsZW5ndGgiLCJwcmV2IiwiUGFja2luZ0NoZWNrbGlzdCIsIl91c2VTdGF0ZTciLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX3VudXNlZCIsIl91c2VTdGF0ZTgiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJjb3VudCIsIk9iamVjdCIsInZhbHVlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJvbkNoYW5nZSIsImV2ZW50IiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsIkJ1ZGdldENhbGN1bGF0b3IiLCJfdXNlU3RhdGU5IiwiX3VudXNlZDIiLCJfdXNlU3RhdGUxMCIsIml0ZW1zIiwic2V0SXRlbXMiLCJ0b3RhbCIsInJlZHVjZSIsInN1bSIsIk51bWJlciIsInVwZGF0ZSIsIk1hdGgiLCJtYXgiLCJ0b0xvY2FsZVN0cmluZyIsIm1pbiIsInN0ZXAiLCJ2YWx1ZSIsIkFwcCIsIkZyYWdtZW50IiwiaWQiLCJ0b0xvd2VyQ2FzZSIsInN0b3AiLCJhbWVuaXR5IiwiRm9vZENhcmQiLCJpbWFnZSIsInRleHQiLCJCb29raW5nSXRlbSIsIm51bWJlciIsIl9yZWY0IiwiY2FyZExpbmtzIiwiX3JlZjUiLCJfcmVmNiIsIl9yZWY3IiwiUmVhY3RET00iLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciJdLCJzb3VyY2VzIjpbImh0dHBzOi8vYWRlZGF5bzUxNi5naXRodWIuaW8vdmVudHVyYS13ZWVrZW5kLW1pY3Jvc2l0ZS9zcmMvQXBwLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSA9IFJlYWN0O1xuXG5jb25zdCBsaW5rcyA9IHtcbiAgdHJhaW46IFwiaHR0cHM6Ly93d3cucGFjaWZpY3N1cmZsaW5lci5jb20vcGxhbi15b3VyLXRyaXAvc2NoZWR1bGVzL1wiLFxuICBmZXJyeTogXCJodHRwczovL3d3dy5pc2xhbmRwYWNrZXJzLmNvbS9ib29rL3ZlbnR1cmEvdHJpcHMvc2FudGEtY3J1ei1pc2xhbmQvXCIsXG4gIG5wc1NhbnRhQ3J1ejogXCJodHRwczovL3d3dy5ucHMuZ292L2NoaXMvcGxhbnlvdXJ2aXNpdC9zYW50YS1jcnV6LWlzbGFuZC5odG1cIixcbiAgbnBzSGlraW5nOiBcImh0dHBzOi8vd3d3Lm5wcy5nb3YvY2hpcy9wbGFueW91cnZpc2l0L2hpa2luZy5odG1cIixcbiAgaG90ZWw6IFwiaHR0cHM6Ly93d3cuemFjaGFyaWR1bmVzLmNvbS9cIixcbiAgaG90ZWxNYXA6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3NlYXJjaC8/YXBpPTEmcXVlcnk9WmFjaGFyaStEdW5lcytvbitNYW5kYWxheStCZWFjaFwiLFxuICBjYWZlWmFjazogXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoLz9hcGk9MSZxdWVyeT1DYWZlK1phY2srVmVudHVyYVwiLFxuICBtb2RlbENpdGl6ZW46IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3NlYXJjaC8/YXBpPTEmcXVlcnk9TW9kZWwrQ2l0aXplbitWZW50dXJhXCIsXG4gIGltbWlncmFudFNvbjogXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoLz9hcGk9MSZxdWVyeT1JbW1pZ3JhbnQrU29uK0NhZmZlK1ZlbnR1cmFcIixcbiAgbHVyZTogXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoLz9hcGk9MSZxdWVyeT1MdXJlK0Zpc2grSG91c2UrVmVudHVyYVwiLFxuICBhbmRyaWFzOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9zZWFyY2gvP2FwaT0xJnF1ZXJ5PUFuZHJpYSUyN3MrU2VhZm9vZCtWZW50dXJhK0hhcmJvclwiLFxuICBicm9waHk6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3NlYXJjaC8/YXBpPTEmcXVlcnk9QnJvcGh5K0Jyb3MrVmVudHVyYVwiLFxufTtcblxuY29uc3QgaW1hZ2VzID0ge1xuICBoZXJvOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTAwNTMwODU1Njk3LWI1ODZkODliYTNlZT9hdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE4MDAmcT04MlwiLFxuICBoYXJib3I6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDc1MjU0MjgwMzQtYjcyM2NmOTYxZDNlP2F1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTQwMCZxPTgwXCIsXG4gIGhvdGVsOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTY2MDczNzcxMjU5LTZhODUwNjA5OTk0NT9hdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE0MDAmcT04MFwiLFxuICB0cmFpbjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3NDQ4NzU0ODQxNy03ODFjYjcxNDk1ZjM/YXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNDAwJnE9ODBcIixcbiAgaXNsYW5kOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTAwMzc1NTkyMDkyLTQwZWIyMTY4ZmQyMT9hdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE2MDAmcT04MlwiLFxuICBkaW5uZXI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0MTQyMzUwNzc0MjgtMzM4OTg5YTJlOGMwP2F1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTQwMCZxPTgwXCIsXG4gIGJydW5jaDogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1MTIxODgwOC05NGUyMjBlMDg0ZDI/YXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNDAwJnE9ODBcIixcbiAgZmFsbGJhY2s6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAwJyBoZWlnaHQ9JzkwMCcgdmlld0JveD0nMCAwIDEyMDAgOTAwJyUzRSUzQ3JlY3Qgd2lkdGg9JzEyMDAnIGhlaWdodD0nOTAwJyBmaWxsPSclMjNmMmU3ZDYnLyUzRSUzQ3BhdGggZD0nTTAgNTg0YzExMi01OCAyMjAtODIgMzI0LTcxIDE1MiAxNiAyMTcgMTEwIDM3NiA5NiAxMzEtMTIgMjA3LTkwIDMzMy04OCA3MCAxIDEyNiAyNiAxNjcgNTN2MzI2SDB6JyBmaWxsPSclMjM5YWM1Y2UnLyUzRSUzQ2NpcmNsZSBjeD0nOTEwJyBjeT0nMjM0JyByPSc5NCcgZmlsbD0nJTIzZjFhNTZmJy8lM0UlM0NwYXRoIGQ9J00xMTQgMzc3YzE1OS04NSAyODItMTI2IDM2OS0xMjMgMTMxIDUgMTg2IDEwNCAzMTMgMTAwIDc4LTMgMTU0LTQ1IDIyOS0xMjcnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzMGQ1MDY4JyBzdHJva2Utd2lkdGg9JzE4JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIG9wYWNpdHk9Jy40NScvJTNFJTNDdGV4dCB4PSc5MicgeT0nNzg4JyBmaWxsPSclMjMwYjM1NDInIGZvbnQtZmFtaWx5PSdHZW9yZ2lhLHNlcmlmJyBmb250LXNpemU9JzU0JyUzRVZlbnR1cmEgY29hc3QlM0MvdGV4dCUzRSUzQy9zdmclM0VcIixcbn07XG5cbmNvbnN0IHNhdHVyZGF5ID0gW1xuICB7XG4gICAgdGltZTogXCJNb3JuaW5nXCIsXG4gICAgdGl0bGU6IFwiSG9tZSB0byBJcnZpbmUgU3RhdGlvblwiLFxuICAgIHRhZzogXCJTdGFydCBsaWdodFwiLFxuICAgIGJvZHk6IFwiRHJpdmUgb3IgcmlkZXNoYXJlIHRvIElydmluZSBUcmFuc3BvcnRhdGlvbiBDZW50ZXIgd2l0aCBvbmUgb3Zlcm5pZ2h0IGJhZyBhbmQgb25lIHNoYXJlZCBpc2xhbmQgZGF5cGFjay5cIixcbiAgICBkZXRhaWxzOiBbXCJQYXJraW5nIGFuZCBwbGF0Zm9ybSBkZXRhaWxzIHNob3VsZCBiZSBjaGVja2VkIHRoZSB3ZWVrIG9mIHRyYXZlbC5cIiwgXCJLZWVwIElEcywgdHJhaW4gY29uZmlybWF0aW9ucywgYW5kIGZlcnJ5IGNvbmZpcm1hdGlvbiBpbiBvbmUgcGhvbmUgd2FsbGV0IG9yIHNoYXJlZCBmb2xkZXIuXCJdLFxuICB9LFxuICB7XG4gICAgdGltZTogXCJNaWRkYXlcIixcbiAgICB0aXRsZTogXCJQYWNpZmljIFN1cmZsaW5lciB0byBWZW50dXJhXCIsXG4gICAgdGFnOiBcIkNvbmZpcm0gYmVmb3JlIGJvb2tpbmdcIixcbiAgICBib2R5OiBcIlJlc2VydmUgc2VhdHMgYWZ0ZXIgZmVycnkgYXZhaWxhYmlsaXR5IGlzIGtub3duLiBTaXQgb24gdGhlIG9jZWFuIHNpZGUgd2hlbiB0aGUgdHJhaW4gb3JpZW50YXRpb24gbWFrZXMgdGhhdCBwb3NzaWJsZS5cIixcbiAgICBkZXRhaWxzOiBbXCJEbyBub3QgcmVseSBvbiBkcmFmdCB0aW1lcyBmcm9tIHRoaXMgaXRpbmVyYXJ5LlwiLCBcIkNoZWNrIFBhY2lmaWMgU3VyZmxpbmVyIGFkdmlzb3JpZXMgYmVmb3JlIHB1cmNoYXNlLlwiXSxcbiAgICBocmVmOiBsaW5rcy50cmFpbixcbiAgfSxcbiAge1xuICAgIHRpbWU6IFwiQWZ0ZXJub29uXCIsXG4gICAgdGl0bGU6IFwiVmVudHVyYSBTdGF0aW9uIHRvIFphY2hhcmkgRHVuZXNcIixcbiAgICB0YWc6IFwiQmVhY2ggcmVzZXRcIixcbiAgICBib2R5OiBcIlJpZGVzaGFyZSB0byB0aGUgcmVzb3J0LCBkcm9wIGJhZ3MsIHdhbGsgTWFuZGFsYXkgQmVhY2gsIHRoZW4ga2VlcCB0aGUgYWZ0ZXJub29uIHVuaHVycmllZC5cIixcbiAgICBkZXRhaWxzOiBbXCJBc2sgYWJvdXQgYmFnIHN0b3JhZ2UgaWYgYXJyaXZhbCBpcyBiZWZvcmUgY2hlY2staW4uXCIsIFwiU2F2ZSBhIGNoYW5nZSBvZiBjbG90aGVzIG5lYXIgdGhlIHRvcCBvZiB0aGUgYmFnIGZvciBkaW5uZXIuXCJdLFxuICB9LFxuICB7XG4gICAgdGltZTogXCJFdmVuaW5nXCIsXG4gICAgdGl0bGU6IFwiUG9saXNoZWQgVmVudHVyYSBEaW5uZXJcIixcbiAgICB0YWc6IFwiSm9leSBOZXdwb3J0IGVuZXJneVwiLFxuICAgIGJvZHk6IFwiQ2hvb3NlIGEgZGF0ZS1uaWdodCByZXN0YXVyYW50IHdpdGggcG9saXNoZWQgc2VydmljZSwgd2FybSBsaWdodGluZywgYW5kIHN0cm9uZyBub24tc2VhZm9vZCBvcHRpb25zLlwiLFxuICAgIGRldGFpbHM6IFtcIkNhZmUgWmFjazogaW50aW1hdGUgYW5kIGNsYXNzaWMuXCIsIFwiTW9kZWwgQ2l0aXplbjogbW9yZSBjb250ZW1wb3JhcnkgYW5kIGxpdmVseS5cIiwgXCJSZXNlcnZlIGRpbm5lciBvbmNlIGhvdGVsIGFuZCB0cmFpbiBhcmUgc2V0LlwiXSxcbiAgICBocmVmOiBsaW5rcy5jYWZlWmFjayxcbiAgfSxcbl07XG5cbmNvbnN0IHN1bmRheSA9IFtcbiAge1xuICAgIHRpbWU6IFwiTW9ybmluZ1wiLFxuICAgIHRpdGxlOiBcIkJydW5jaCBCZWZvcmUgdGhlIEhhcmJvclwiLFxuICAgIHRhZzogXCJTbm9vemUtc3R5bGUgc3RhcnRcIixcbiAgICBib2R5OiBcIkltbWlncmFudCBTb24gQ2FmZmUgZml0cyB0aGUgY3JlYXRpdmUgYnJ1bmNoIGxhbmU6IGJyaWdodCwgZW5lcmdldGljLCBhbmQgbW9yZSBtZW1vcmFibGUgdGhhbiBhIGJhc2ljIGhvdGVsIGJyZWFrZmFzdC5cIixcbiAgICBkZXRhaWxzOiBbXCJCdWlsZCBpbiBidWZmZXIgdGltZSBmb3IgY2hlY2tvdXQgYW5kIHRoZSByaWRlc2hhcmUgdG8gVmVudHVyYSBIYXJib3IuXCIsIFwiSWYgYnJ1bmNoIHRpbWluZyBnZXRzIHRpZ2h0LCBzd2l0Y2ggdG8gZ3JhYi1hbmQtZ28gZm9vZCBmb3IgdGhlIGZlcnJ5LlwiXSxcbiAgICBocmVmOiBsaW5rcy5pbW1pZ3JhbnRTb24sXG4gIH0sXG4gIHtcbiAgICB0aW1lOiBcIkxhdGUgbW9ybmluZ1wiLFxuICAgIHRpdGxlOiBcIkhvdGVsIHRvIEhhcmJvclwiLFxuICAgIHRhZzogXCJLZWVwIHRoZSBkYXlwYWNrIHJlYWR5XCIsXG4gICAgYm9keTogXCJNb3ZlIGZyb20gdGhlIGhvdGVsIHRvIElzbGFuZCBQYWNrZXJzIGF0IFZlbnR1cmEgSGFyYm9yLiBDb25maXJtIGNoZWNrLWluIHJlcXVpcmVtZW50cyBkaXJlY3RseSB3aXRoIElzbGFuZCBQYWNrZXJzLlwiLFxuICAgIGRldGFpbHM6IFtcIkNhcnJ5IGFsbCBmb29kIGFuZCB3YXRlciB5b3UgbmVlZCBmb3IgdGhlIGlzbGFuZC5cIiwgXCJUaGVyZSBhcmUgbm8gc2hvcHMgb25jZSB5b3UgbGFuZCBhdCBTY29ycGlvbiBBbmNob3JhZ2UuXCJdLFxuICAgIGhyZWY6IGxpbmtzLmZlcnJ5LFxuICB9LFxuICB7XG4gICAgdGltZTogXCJGZXJyeSB3aW5kb3dcIixcbiAgICB0aXRsZTogXCJWZW50dXJhIHRvIFNhbnRhIENydXogSXNsYW5kXCIsXG4gICAgdGFnOiBcIkNvbmZpcm0gYmVmb3JlIGJvb2tpbmdcIixcbiAgICBib2R5OiBcIkJvb2sgYSBkYXktdmlzaXRvciByb3VuZCB0cmlwIHRvIFNjb3JwaW9uIEFuY2hvcmFnZSBvbmx5IGFmdGVyIGNvbmZpcm1pbmcgc2FtZS1kYXkgcmV0dXJuIGludmVudG9yeS5cIixcbiAgICBkZXRhaWxzOiBbXCJJc2xhbmQgUGFja2VycyBub3RlcyB0cmFuc3BvcnQgdGltZXMgYXJlIGFwcHJveGltYXRlIGFuZCBjYW4gc2hpZnQgd2l0aCB3ZWF0aGVyLCB3aWxkbGlmZSB2aWV3aW5nLCBhbmQgcGFzc2VuZ2VyIGxvYWRzLlwiLCBcIkFzayBzdGFmZiBvciBhIHJhbmdlciBhYm91dCB0aGUgZXhhY3QgcmV0dXJuIG1lZXRpbmcgdGltZSBiZWZvcmUgaGlraW5nLlwiXSxcbiAgICBocmVmOiBsaW5rcy5mZXJyeSxcbiAgfSxcbiAge1xuICAgIHRpbWU6IFwiSXNsYW5kIGFmdGVybm9vblwiLFxuICAgIHRpdGxlOiBcIkNhdmVybiBQb2ludCArIFBvdGF0byBIYXJib3JcIixcbiAgICB0YWc6IFwiTW9kZXJhdGUgaGlrZVwiLFxuICAgIGJvZHk6IFwiQSBzY2VuaWMgY29hc3RhbCBsb29wIHdpdGggY2xpZmYgdmlld3MsIHN1biBleHBvc3VyZSwgYW5kIGEgcmVhbCBzZW5zZSBvZiBhcnJpdmFsIG9uIHRoZSBpc2xhbmRzLlwiLFxuICAgIGRldGFpbHM6IFtcIlBsYW4gcm91Z2hseSA0LTUgbWlsZXMgYW5kIDIuNS0zIGhvdXJzIGRlcGVuZGluZyBvbiByb3V0ZSwgaGVhdCwgc3RvcHMsIGFuZCBmZXJyeSB0aW1pbmcuXCIsIFwiU3RheSB3ZWxsIGJhY2sgZnJvbSBjbGlmZiBlZGdlcyBhbmQgY2FycnkgZXh0cmEgd2F0ZXIuXCJdLFxuICAgIGhyZWY6IGxpbmtzLm5wc0hpa2luZyxcbiAgfSxcbiAge1xuICAgIHRpbWU6IFwiRXZlbmluZ1wiLFxuICAgIHRpdGxlOiBcIkZpc2gtYW5kLWNoaXBzIGZpbmlzaCwgdGhlbiB0cmFpbiBob21lXCIsXG4gICAgdGFnOiBcIkZsZXhpYmxlIGNsb3NlXCIsXG4gICAgYm9keTogXCJBZnRlciB0aGUgZmVycnksIGtlZXAgZGlubmVyIGNsb3NlIHRvIHRoZSBoYXJib3Igb3IgZG93bnRvd24sIHRoZW4gcmlkZXNoYXJlIHRvIFZlbnR1cmEgU3RhdGlvbiBmb3IgdGhlIHJldHVybiB0cmFpbi5cIixcbiAgICBkZXRhaWxzOiBbXCJMdXJlIEZpc2ggSG91c2UgaXMgdGhlIHBvbGlzaGVkIHNlYWZvb2QtZm9yd2FyZCBvcHRpb24uXCIsIFwiQW5kcmlhJ3MgaXMgdGhlIGNsYXNzaWMgaGFyYm9yIGZpc2gtYW5kLWNoaXBzIHN0b3AuXCIsIFwiQ29uZmlybSB0cmFpbiBzY2hlZHVsZSBiZWZvcmUgbG9ja2luZyBkaW5uZXIgdGltaW5nLlwiXSxcbiAgICBocmVmOiBsaW5rcy5sdXJlLFxuICB9LFxuXTtcblxuY29uc3QgcGFja2luZ0l0ZW1zID0gW1xuICBcIjItMyBsaXRlcnMgb2Ygd2F0ZXIgcGVyIHBlcnNvblwiLFxuICBcIkx1bmNoIGFuZCBoaWdoLWVuZXJneSB0cmFpbCBzbmFja3NcIixcbiAgXCJIaWtpbmcgc2hvZXMgd2l0aCBncmlwXCIsXG4gIFwiU3VuIGhhdCBhbmQgc3VuZ2xhc3Nlc1wiLFxuICBcIlJlZWYtc2FmZSBzdW5zY3JlZW4gYW5kIGxpcCBiYWxtXCIsXG4gIFwiTGlnaHQgd2luZGJyZWFrZXIgb3Igd2FybSBsYXllclwiLFxuICBcIk1vdGlvbi1zaWNrbmVzcyBtZWRpY2luZVwiLFxuICBcIlBvcnRhYmxlIGNoYXJnZXJcIixcbiAgXCJEYXRlLW5pZ2h0IG91dGZpdFwiLFxuICBcIlN3aW13ZWFyXCIsXG4gIFwiUmV1c2FibGUgd2F0ZXIgYm90dGxlc1wiLFxuICBcIklEcyBhbmQgcmVzZXJ2YXRpb24gY29uZmlybWF0aW9uc1wiLFxuXTtcblxuY29uc3QgYnVkZ2V0RGVmYXVsdHMgPSBbXG4gIHsga2V5OiBcInRyYWluXCIsIGxhYmVsOiBcIlRyYWluLCB0d28gcm91bmQgdHJpcHNcIiwgYW1vdW50OiAxNDAgfSxcbiAgeyBrZXk6IFwiaG90ZWxcIiwgbGFiZWw6IFwiWmFjaGFyaSBEdW5lcywgb25lIG5pZ2h0XCIsIGFtb3VudDogNDQwIH0sXG4gIHsga2V5OiBcImZlcnJ5XCIsIGxhYmVsOiBcIklzbGFuZCBQYWNrZXJzLCB0d28gcGVvcGxlXCIsIGFtb3VudDogMTgwIH0sXG4gIHsga2V5OiBcInJpZGVzaGFyZVwiLCBsYWJlbDogXCJMb2NhbCByaWRlc2hhcmVzXCIsIGFtb3VudDogNzAgfSxcbiAgeyBrZXk6IFwiZm9vZFwiLCBsYWJlbDogXCJCcnVuY2gsIGRpbm5lciwgc25hY2tzXCIsIGFtb3VudDogMjgwIH0sXG4gIHsga2V5OiBcImJ1ZmZlclwiLCBsYWJlbDogXCJXZWF0aGVyIGFuZCB0aW1pbmcgYnVmZmVyXCIsIGFtb3VudDogMTAwIH0sXG5dO1xuXG5mdW5jdGlvbiBFeHRlcm5hbExpbmsoeyBocmVmLCBjaGlsZHJlbiwgY2xhc3NOYW1lID0gXCJ0ZXh0LWxpbmtcIiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGhyZWY9e2hyZWZ9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2E+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNtYXJ0SW1hZ2UoeyBzcmMsIGFsdCwgY2xhc3NOYW1lID0gXCJcIiB9KSB7XG4gIGNvbnN0IFtmYWlsZWQsIHNldEZhaWxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiA8aW1nIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzcmM9e2ZhaWxlZCA/IGltYWdlcy5mYWxsYmFjayA6IHNyY30gYWx0PXthbHR9IGxvYWRpbmc9XCJsYXp5XCIgb25FcnJvcj17KCkgPT4gc2V0RmFpbGVkKHRydWUpfSAvPjtcbn1cblxuZnVuY3Rpb24gVGltZWxpbmVDYXJkKHsgaXRlbSwgaW5kZXggfSkge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShpbmRleCA9PT0gMCk7XG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPXtgdGltZWxpbmUtY2FyZCAke29wZW4gPyBcImlzLW9wZW5cIiA6IFwiXCJ9YH0+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0gYXJpYS1leHBhbmRlZD17b3Blbn0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWVsaW5lLXRpbWVcIj57aXRlbS50aW1lfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZWxpbmUtdGl0bGVcIj57aXRlbS50aXRsZX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWVsaW5lLXRhZ1wiPntpdGVtLnRhZ308L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZWxpbmUtcGFuZWxcIiBoaWRkZW49eyFvcGVufT5cbiAgICAgICAgPHA+e2l0ZW0uYm9keX08L3A+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7aXRlbS5kZXRhaWxzLm1hcCgoZGV0YWlsKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtkZXRhaWx9PntkZXRhaWx9PC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAge2l0ZW0uaHJlZiA/IDxFeHRlcm5hbExpbmsgaHJlZj17aXRlbS5ocmVmfT5PcGVuIG9mZmljaWFsIG9yIG1hcCBsaW5rPC9FeHRlcm5hbExpbms+IDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvYXJ0aWNsZT5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ2Fyb3VzZWwoKSB7XG4gIGNvbnN0IGdhbGxlcnkgPSBbXG4gICAgeyBzcmM6IGltYWdlcy5ob3RlbCwgY2FwdGlvbjogXCJaYWNoYXJpIER1bmVzIG1vb2Q6IHN1aXRlLCBwb29sLCBiZWFjaCBhY2Nlc3NcIiB9LFxuICAgIHsgc3JjOiBpbWFnZXMuaGFyYm9yLCBjYXB0aW9uOiBcIlZlbnR1cmEgSGFyYm9yOiBmZXJyeSBzdGFnaW5nIGFuZCBwb3N0LWlzbGFuZCBkaW5uZXJcIiB9LFxuICAgIHsgc3JjOiBpbWFnZXMuaXNsYW5kLCBjYXB0aW9uOiBcIlNhbnRhIENydXogSXNsYW5kOiBleHBvc2VkIGNsaWZmcyBhbmQgd2lkZSBQYWNpZmljIHZpZXdzXCIgfSxcbiAgXTtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBuZXh0ID0gKCkgPT4gc2V0QWN0aXZlKChhY3RpdmUgKyAxKSAlIGdhbGxlcnkubGVuZ3RoKTtcbiAgY29uc3QgcHJldiA9ICgpID0+IHNldEFjdGl2ZSgoYWN0aXZlIC0gMSArIGdhbGxlcnkubGVuZ3RoKSAlIGdhbGxlcnkubGVuZ3RoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsXCIgYXJpYS1sYWJlbD1cIkRlc3RpbmF0aW9uIGltYWdlIGNhcm91c2VsXCI+XG4gICAgICA8U21hcnRJbWFnZSBzcmM9e2dhbGxlcnlbYWN0aXZlXS5zcmN9IGFsdD17Z2FsbGVyeVthY3RpdmVdLmNhcHRpb259IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2xzXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3ByZXZ9IGFyaWEtbGFiZWw9XCJQcmV2aW91cyBpbWFnZVwiPuKAuTwvYnV0dG9uPlxuICAgICAgICA8cD57Z2FsbGVyeVthY3RpdmVdLmNhcHRpb259PC9wPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtuZXh0fSBhcmlhLWxhYmVsPVwiTmV4dCBpbWFnZVwiPuKAujwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdHNcIj5cbiAgICAgICAge2dhbGxlcnkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxidXR0b24ga2V5PXtpdGVtLmNhcHRpb259IGNsYXNzTmFtZT17aW5kZXggPT09IGFjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwifSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoaW5kZXgpfSBhcmlhLWxhYmVsPXtgU2hvdyBpbWFnZSAke2luZGV4ICsgMX1gfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBQYWNraW5nQ2hlY2tsaXN0KCkge1xuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidmVudHVyYVBhY2tpbmdcIikgfHwgXCJ7fVwiKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidmVudHVyYVBhY2tpbmdcIiwgSlNPTi5zdHJpbmdpZnkoY2hlY2tlZCkpO1xuICB9LCBbY2hlY2tlZF0pO1xuICBjb25zdCBjb3VudCA9IE9iamVjdC52YWx1ZXMoY2hlY2tlZCkuZmlsdGVyKEJvb2xlYW4pLmxlbmd0aDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrbGlzdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2xpc3QtaGVhZFwiPlxuICAgICAgICA8aDM+UGFja2luZyBjaGVja2xpc3Q8L2gzPlxuICAgICAgICA8c3Bhbj57Y291bnR9L3twYWNraW5nSXRlbXMubGVuZ3RofTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAge3BhY2tpbmdJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgPGxhYmVsIGtleT17aXRlbX0gY2xhc3NOYW1lPXtjaGVja2VkW2l0ZW1dID8gXCJjaGVja2VkXCIgOiBcIlwifT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17Qm9vbGVhbihjaGVja2VkW2l0ZW1dKX0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0Q2hlY2tlZCh7IC4uLmNoZWNrZWQsIFtpdGVtXTogZXZlbnQudGFyZ2V0LmNoZWNrZWQgfSl9IC8+XG4gICAgICAgICAge2l0ZW19XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICApKX1cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImdob3N0LWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldENoZWNrZWQoe30pfT5DbGVhciBjaGVja2xpc3Q8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQnVkZ2V0Q2FsY3VsYXRvcigpIHtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidmVudHVyYUJ1ZGdldFwiKSB8fCBcIm51bGxcIikgfHwgYnVkZ2V0RGVmYXVsdHM7XG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gYnVkZ2V0RGVmYXVsdHM7XG4gICAgfVxuICB9KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInZlbnR1cmFCdWRnZXRcIiwgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcbiAgfSwgW2l0ZW1zXSk7XG4gIGNvbnN0IHRvdGFsID0gdXNlTWVtbygoKSA9PiBpdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgTnVtYmVyKGl0ZW0uYW1vdW50IHx8IDApLCAwKSwgW2l0ZW1zXSk7XG4gIGNvbnN0IHVwZGF0ZSA9IChrZXksIGFtb3VudCkgPT4gc2V0SXRlbXMoaXRlbXMubWFwKChpdGVtKSA9PiAoaXRlbS5rZXkgPT09IGtleSA/IHsgLi4uaXRlbSwgYW1vdW50OiBNYXRoLm1heCgwLCBOdW1iZXIoYW1vdW50KSB8fCAwKSB9IDogaXRlbSkpKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1ZGdldC1jYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1ZGdldC10b3RhbFwiPlxuICAgICAgICA8c3Bhbj5FZGl0YWJsZSBlc3RpbWF0ZSBmb3IgdHdvPC9zcGFuPlxuICAgICAgICA8c3Ryb25nPiR7dG90YWwudG9Mb2NhbGVTdHJpbmcoKX08L3N0cm9uZz5cbiAgICAgIDwvZGl2PlxuICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8bGFiZWwga2V5PXtpdGVtLmtleX0+XG4gICAgICAgICAgPHNwYW4+e2l0ZW0ubGFiZWx9PC9zcGFuPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIHN0ZXA9XCIxMFwiIHZhbHVlPXtpdGVtLmFtb3VudH0gb25DaGFuZ2U9eyhldmVudCkgPT4gdXBkYXRlKGl0ZW0ua2V5LCBldmVudC50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgKSl9XG4gICAgICA8cD5Fc3RpbWF0ZXMgYXJlIHBsYWNlaG9sZGVycy4gQ29uZmlybSBsaXZlIHJhdGVzIGJlZm9yZSBib29raW5nLjwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YSBjbGFzc05hbWU9XCJza2lwLWxpbmtcIiBocmVmPVwiI292ZXJ2aWV3XCI+U2tpcCB0byBpdGluZXJhcnk8L2E+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlcm9cIiBpZD1cInRvcFwiPlxuICAgICAgICA8U21hcnRJbWFnZSBjbGFzc05hbWU9XCJoZXJvLWltZ1wiIHNyYz17aW1hZ2VzLmhlcm99IGFsdD1cIkEgd2FybSBjb2FzdGFsIHZpZXcgZm9yIHRoZSBWZW50dXJhIHdlZWtlbmRcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tb3ZlcmxheVwiIC8+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2XCIgYXJpYS1sYWJlbD1cIlByaW1hcnkgbmF2aWdhdGlvblwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjdG9wXCIgY2xhc3NOYW1lPVwiYnJhbmRcIj5WZW50dXJhIFdlZWtlbmQ8L2E+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtbXCJPdmVydmlld1wiLCBcIlNhdHVyZGF5XCIsIFwiU3VuZGF5XCIsIFwiU3RheVwiLCBcIkZvb2RcIiwgXCJQYWNraW5nXCIsIFwiQnVkZ2V0XCJdLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8YSBrZXk9e2l0ZW19IGhyZWY9e2AjJHtpdGVtLnRvTG93ZXJDYXNlKCl9YH0+e2l0ZW19PC9hPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZXJvLWNvcHlcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJleWVicm93XCI+U2F0dXJkYXksIEp1bHkgMTggLSBTdW5kYXksIEp1bHkgMTk8L3A+XG4gICAgICAgICAgPGgxPlZlbnR1cmEgJiBDaGFubmVsIElzbGFuZHMgV2Vla2VuZDwvaDE+XG4gICAgICAgICAgPHA+T25lIG5pZ2h0IG9uIHRoZSBjb2FzdCwgYSBmZXJyeSB0byBTYW50YSBDcnV6IElzbGFuZCwgYW5kIGEgYm91dGlxdWUtc3R5bGUgaXRpbmVyYXJ5IGJ1aWx0IGZvciB0d28uPC9wPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBwcmltYXJ5XCIgaHJlZj1cIiNzYXR1cmRheVwiPlZpZXcgaXRpbmVyYXJ5PC9hPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm92ZXJ2aWV3IHNlY3Rpb25cIiBpZD1cIm92ZXJ2aWV3XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWtpY2tlclwiPk92ZXJ2aWV3PC9kaXY+XG4gICAgICAgICAgPGgyPlVwc2NhbGUsIHNpbXBsZSwgYW5kIG9jZWFuLWZvcndhcmQuPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+VGhlIHJoeXRobSBpcyBpbnRlbnRpb25hbGx5IGVhc3k6IGNvYXN0YWwgdHJhaW4sIGJlYWNoZnJvbnQgcmVzb3J0LCBwb2xpc2hlZCBkaW5uZXIsIGNyZWF0aXZlIGJydW5jaCwgaGFyYm9yIHRyYW5zZmVyLCBpc2xhbmQgaGlrZSwgYW5kIGEgcmVsYXhlZCByZXR1cm4uIFNjaGVkdWxlIGRldGFpbHMgYXJlIG1hcmtlZCBhcyBjb25maXJtIGJlZm9yZSBib29raW5nIGJlY2F1c2UgdHJhaW4gYW5kIGZlcnJ5IGludmVudG9yeSBjYW4gY2hhbmdlLjwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRzXCI+XG4gICAgICAgICAgICA8ZGl2PjxzcGFuPlRyaXAgbGVuZ3RoPC9zcGFuPjxzdHJvbmc+MSBuaWdodCAvIDIgZGF5czwvc3Ryb25nPjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48c3Bhbj5CYXNlPC9zcGFuPjxzdHJvbmc+WmFjaGFyaSBEdW5lczwvc3Ryb25nPjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48c3Bhbj5Jc2xhbmQgcGxhbjwvc3Bhbj48c3Ryb25nPlNjb3JwaW9uIEFuY2hvcmFnZTwvc3Ryb25nPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxvdyBzZWN0aW9uXCIgYXJpYS1sYWJlbGxlZGJ5PVwidHJhbnNwb3J0LWZsb3ctdGl0bGVcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWtpY2tlclwiPlRyYW5zcG9ydGF0aW9uIGZsb3c8L2Rpdj5cbiAgICAgICAgICAgIDxoMiBpZD1cInRyYW5zcG9ydC1mbG93LXRpdGxlXCI+SG9tZSB0byBoYXJib3IsIHdpdGhvdXQgZ3Vlc3NpbmcgdGhlIHNjaGVkdWxlLjwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG93LXRyYWNrXCI+XG4gICAgICAgICAgICB7W1wiSG9tZVwiLCBcIklydmluZSBTdGF0aW9uXCIsIFwiVmVudHVyYVwiLCBcIkhvdGVsXCIsIFwiSGFyYm9yXCIsIFwiSXNsYW5kXCJdLm1hcCgoc3RvcCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb3ctc3RvcFwiIGtleT17c3RvcH0+PHNwYW4gLz57c3RvcH08L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5vdGVcIj5Db25maXJtIFBhY2lmaWMgU3VyZmxpbmVyIGFuZCBJc2xhbmQgUGFja2VycyBzY2hlZHVsZXMgYmVmb3JlIGJvb2tpbmcuIEJ1aWxkIHRoZSB0cmFpbiBhcm91bmQgZmVycnkgYXZhaWxhYmlsaXR5LCBub3QgdGhlIG90aGVyIHdheSBhcm91bmQuPC9wPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGltZWxpbmUtc2VjdGlvbiBzZWN0aW9uXCIgaWQ9XCJzYXR1cmRheVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsaXQtaGVhZGluZ1wiPlxuICAgICAgICAgICAgPGRpdj48ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24ta2lja2VyXCI+U2F0dXJkYXk8L2Rpdj48aDI+VGhlIGNvYXN0YWwgYXJyaXZhbCBkYXk8L2gyPjwvZGl2PlxuICAgICAgICAgICAgPFNtYXJ0SW1hZ2Ugc3JjPXtpbWFnZXMudHJhaW59IGFsdD1cIlBhc3NlbmdlciB0cmFpbiBuZWFyIHRoZSBjb2FzdFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZS1saXN0XCI+e3NhdHVyZGF5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IDxUaW1lbGluZUNhcmQga2V5PXtpdGVtLnRpdGxlfSBpdGVtPXtpdGVtfSBpbmRleD17aW5kZXh9IC8+KX08L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRpbWVsaW5lLXNlY3Rpb24gc2VjdGlvbiBpc2xhbmQtYmFuZFwiIGlkPVwic3VuZGF5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdC1oZWFkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2PjxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1raWNrZXJcIj5TdW5kYXk8L2Rpdj48aDI+QnJ1bmNoLCBmZXJyeSwgaXNsYW5kIGNsaWZmczwvaDI+PC9kaXY+XG4gICAgICAgICAgICA8U21hcnRJbWFnZSBzcmM9e2ltYWdlcy5pc2xhbmR9IGFsdD1cIkNoYW5uZWwgSXNsYW5kcyBjb2FzdGxpbmUgYW5kIHN1cmZcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZWxpbmUtbGlzdFwiPntzdW5kYXkubWFwKChpdGVtLCBpbmRleCkgPT4gPFRpbWVsaW5lQ2FyZCBrZXk9e2l0ZW0udGl0bGV9IGl0ZW09e2l0ZW19IGluZGV4PXtpbmRleH0gLz4pfTwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBzdGF5XCIgaWQ9XCJzdGF5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWtpY2tlclwiPlN0YXk8L2Rpdj5cbiAgICAgICAgICA8aDI+WmFjaGFyaSBEdW5lcyBvbiBNYW5kYWxheSBCZWFjaDwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF5LWdyaWRcIj5cbiAgICAgICAgICAgIDxDYXJvdXNlbCAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbFwiPlxuICAgICAgICAgICAgICA8aDM+V2h5IGl0IGZpdHM8L2gzPlxuICAgICAgICAgICAgICA8cD5CZWFjaGZyb250LCByZXNvcnQtbGlrZSwgYW5kIGVhc3kgdG8gbWFrZSBmZWVsIHNwZWNpYWwgZm9yIG9uZSBuaWdodCB3aXRob3V0IHR1cm5pbmcgdGhlIHdlZWtlbmQgaW50byBhIGxvZ2lzdGljcyBwcm9qZWN0LjwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbWVuaXRpZXNcIj5cbiAgICAgICAgICAgICAgICB7W1wiQmVhY2ggYWNjZXNzXCIsIFwiQWxsLXN1aXRlIGZlZWxcIiwgXCJQb29sICsgaG90IHR1YlwiLCBcIkZpcmUgcGl0c1wiLCBcIk9uLXNpdGUgZGluaW5nXCIsIFwiRWFzeSByaWRlc2hhcmUgYmFzZVwiXS5tYXAoKGFtZW5pdHkpID0+IDxzcGFuIGtleT17YW1lbml0eX0+e2FtZW5pdHl9PC9zcGFuPil9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rIGhyZWY9e2xpbmtzLmhvdGVsfSBjbGFzc05hbWU9XCJidXR0b24gcHJpbWFyeVwiPkJvb2sgaG90ZWw8L0V4dGVybmFsTGluaz5cbiAgICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rIGhyZWY9e2xpbmtzLmhvdGVsTWFwfSBjbGFzc05hbWU9XCJidXR0b24gc2Vjb25kYXJ5XCI+T3BlbiBtYXA8L0V4dGVybmFsTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gZm9vZFwiIGlkPVwiZm9vZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1raWNrZXJcIj5Gb29kPC9kaXY+XG4gICAgICAgICAgPGgyPlJlc3RhdXJhbnRzIHdpdGggSm9leSBOZXdwb3J0IHBvbGlzaCBhbmQgU25vb3plLXN0eWxlIGJydW5jaCBlbmVyZ3kuPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZ3JpZFwiPlxuICAgICAgICAgICAgPEZvb2RDYXJkIGltYWdlPXtpbWFnZXMuZGlubmVyfSB0aXRsZT1cIlBvbGlzaGVkIGRpbm5lclwiIHRleHQ9XCJDYWZlIFphY2sgZm9yIGludGltYXRlIGRhdGUtbmlnaHQgZW5lcmd5OyBNb2RlbCBDaXRpemVuIGFzIHRoZSBtb3JlIGNvbnRlbXBvcmFyeSBiYWNrdXAuXCIgbGlua3M9e1tbXCJDYWZlIFphY2tcIiwgbGlua3MuY2FmZVphY2tdLCBbXCJNb2RlbCBDaXRpemVuXCIsIGxpbmtzLm1vZGVsQ2l0aXplbl1dfSAvPlxuICAgICAgICAgICAgPEZvb2RDYXJkIGltYWdlPXtpbWFnZXMuYnJ1bmNofSB0aXRsZT1cIkNyZWF0aXZlIGJydW5jaFwiIHRleHQ9XCJJbW1pZ3JhbnQgU29uIENhZmZlIGlzIHRoZSBiZXN0IG1hdGNoIGZvciBwbGF5ZnVsLCBtZW1vcmFibGUgYnJ1bmNoIGJlZm9yZSB0aGUgaGFyYm9yLlwiIGxpbmtzPXtbW1wiSW1taWdyYW50IFNvblwiLCBsaW5rcy5pbW1pZ3JhbnRTb25dXX0gLz5cbiAgICAgICAgICAgIDxGb29kQ2FyZCBpbWFnZT17aW1hZ2VzLmhhcmJvcn0gdGl0bGU9XCJGaXNoLWFuZC1jaGlwcyBvcHRpb25zXCIgdGV4dD1cIkFuZHJpYSdzIGZvciB0aGUgY2xhc3NpYyBoYXJib3Igc3RvcCwgQnJvcGh5IEJyb3MgZm9yIGEgc2l0LWRvd24gd2F0ZXJmcm9udCBmZWVsLCBvciBMdXJlIGZvciBhIHBvbGlzaGVkIHNlYWZvb2QgZmluaXNoLlwiIGxpbmtzPXtbW1wiQW5kcmlhJ3NcIiwgbGlua3MuYW5kcmlhc10sIFtcIkJyb3BoeSBCcm9zXCIsIGxpbmtzLmJyb3BoeV0sIFtcIkx1cmVcIiwgbGlua3MubHVyZV1dfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb21tZW5kYXRpb25zXCI+XG4gICAgICAgICAgICA8aDM+Tm9uLXNlYWZvb2QgZnJpZW5kbHkgcGlja3M8L2gzPlxuICAgICAgICAgICAgPHA+Q2FmZSBaYWNrLCBNb2RlbCBDaXRpemVuLCBJbW1pZ3JhbnQgU29uIENhZmZlLCBhbmQgTHVyZSBhcmUgc2FmZXIgY2hvaWNlcyB3aGVuIG9uZSBwZXJzb24gd2FudHMgc2VhZm9vZCBhbmQgdGhlIG90aGVyIHdhbnRzIHN0ZWFrLCBjaGlja2VuLCBwYXN0YSwgYnJ1bmNoIHBsYXRlcywgb3IgYSBidXJnZXIuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBoaWtlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWtpY2tlclwiPkNoYW5uZWwgSXNsYW5kcyBoaWtlPC9kaXY+XG4gICAgICAgICAgPGgyPkNhdmVybiBQb2ludCArIFBvdGF0byBIYXJib3I8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlrZS1ncmlkXCI+XG4gICAgICAgICAgICA8ZGl2PjxzcGFuPkRpc3RhbmNlPC9zcGFuPjxzdHJvbmc+QXBwcm94LiA0LTUgbWlsZXM8L3N0cm9uZz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PHNwYW4+RGlmZmljdWx0eTwvc3Bhbj48c3Ryb25nPk1vZGVyYXRlPC9zdHJvbmc+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxzcGFuPkR1cmF0aW9uPC9zcGFuPjxzdHJvbmc+Mi41LTMgaG91cnM8L3N0cm9uZz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PHNwYW4+RmVycnk8L3NwYW4+PHN0cm9uZz5Jc2xhbmQgUGFja2VycywgY29uZmlybSBsaXZlPC9zdHJvbmc+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHA+RXhwZWN0IGV4cG9zZWQgc3VuLCBjbGlmZi1lZGdlIHZpZXdwb2ludHMsIHVuZXZlbiB0cmFpbCwgbm8gaXNsYW5kIHNob3BzLCBsaW1pdGVkIHNlcnZpY2VzLCBhbmQgYSBoYXJkIHJldHVybiBkZWFkbGluZSB0aWVkIHRvIHRoZSBmZXJyeS4gTlBTIGd1aWRhbmNlIGVtcGhhc2l6ZXMgc3RheWluZyBvbiB0cmFpbHMsIGF2b2lkaW5nIGNsaWZmIGVkZ2VzLCBjYXJyeWluZyB3YXRlciwgYW5kIG1lZXRpbmcgdGhlIGJvYXQgY29uY2Vzc2lvbmFpcmUgb24gdGltZS48L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tcm93XCI+XG4gICAgICAgICAgICA8RXh0ZXJuYWxMaW5rIGhyZWY9e2xpbmtzLm5wc1NhbnRhQ3J1en0gY2xhc3NOYW1lPVwiYnV0dG9uIHNlY29uZGFyeVwiPk5QUyBTYW50YSBDcnV6IElzbGFuZDwvRXh0ZXJuYWxMaW5rPlxuICAgICAgICAgICAgPEV4dGVybmFsTGluayBocmVmPXtsaW5rcy5ucHNIaWtpbmd9IGNsYXNzTmFtZT1cImJ1dHRvbiBzZWNvbmRhcnlcIj5OUFMgaGlraW5nIHNhZmV0eTwvRXh0ZXJuYWxMaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBwYWNraW5nXCIgaWQ9XCJwYWNraW5nXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1raWNrZXJcIj5QYWNraW5nPC9kaXY+XG4gICAgICAgICAgICA8aDI+V2VhdGhlci1yZWFkeSB3aXRob3V0IG92ZXJwYWNraW5nLjwvaDI+XG4gICAgICAgICAgICA8cD5QYWNrIGZvciBhIHBvbGlzaGVkIHJlc29ydCBldmVuaW5nIGFuZCBhIHByYWN0aWNhbCBpc2xhbmQgZGF5LiBCcmluZyBsYXllcnMgZm9yIG1hcmluZSB3aW5kLCBzdW4gY292ZXJhZ2UgZm9yIGV4cG9zZWQgdHJhaWxzLCBhbmQgZm9vZCBhbmQgd2F0ZXIgZm9yIHRoZSB3aG9sZSBpc2xhbmQgd2luZG93LjwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VhdGhlci1ib3hcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz5XZWF0aGVyIGd1aWRhbmNlPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxzcGFuPkNoZWNrIFZlbnR1cmEgSGFyYm9yLCBPeG5hcmQgY29hc3QsIGFuZCBDaGFubmVsIElzbGFuZHMgbWFyaW5lIGZvcmVjYXN0IHRoZSBkYXkgYmVmb3JlLiBJZiB3aW5kLCBmb2csIG9yIGZlcnJ5IGFkdmlzb3JpZXMgYXBwZWFyLCBwcmlvcml0aXplIHdhcm0gbGF5ZXJzIGFuZCBtb3Rpb24tc2lja25lc3MgYmFja3VwLjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxQYWNraW5nQ2hlY2tsaXN0IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIGJ1ZGdldFwiIGlkPVwiYnVkZ2V0XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1raWNrZXJcIj5CdWRnZXQ8L2Rpdj5cbiAgICAgICAgICAgIDxoMj5FZGl0YWJsZSBidWRnZXQgY2FsY3VsYXRvcjwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+VXNlIHRoaXMgYXMgYSBwbGFubmluZyBzYW5kYm94IGZvciB0d28gcGVvcGxlLiBUaGUgdmFsdWVzIHNhdmUgb24gdGhpcyBkZXZpY2Ugc28geW91IGNhbiBhZGp1c3QgdGhlbSB3aGlsZSBib29raW5nLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8QnVkZ2V0Q2FsY3VsYXRvciAvPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBib29raW5nXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWtpY2tlclwiPkJvb2tpbmcgY2hlY2tsaXN0PC9kaXY+XG4gICAgICAgICAgPGgyPkJvb2sgdGhlIHNjYXJjZSBwaWVjZXMgZmlyc3QuPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctbGlzdFwiPlxuICAgICAgICAgICAgPEJvb2tpbmdJdGVtIG51bWJlcj1cIjAxXCIgdGl0bGU9XCJGZXJyeVwiIHRleHQ9XCJDb25maXJtIFNjb3JwaW9uIEFuY2hvcmFnZSBkYXktdmlzaXRvciByb3VuZCB0cmlwIGFuZCByZXR1cm4gd2luZG93LlwiIGhyZWY9e2xpbmtzLmZlcnJ5fSAvPlxuICAgICAgICAgICAgPEJvb2tpbmdJdGVtIG51bWJlcj1cIjAyXCIgdGl0bGU9XCJIb3RlbFwiIHRleHQ9XCJCb29rIFphY2hhcmkgRHVuZXMgYWZ0ZXIgZmVycnkgaW52ZW50b3J5IGlzIGNsZWFyLlwiIGhyZWY9e2xpbmtzLmhvdGVsfSAvPlxuICAgICAgICAgICAgPEJvb2tpbmdJdGVtIG51bWJlcj1cIjAzXCIgdGl0bGU9XCJUcmFpblwiIHRleHQ9XCJSZXNlcnZlIFBhY2lmaWMgU3VyZmxpbmVyIGFyb3VuZCB0aGUgZmVycnksIG5vdCBndWVzc2VkIGRyYWZ0IHRpbWVzLlwiIGhyZWY9e2xpbmtzLnRyYWlufSAvPlxuICAgICAgICAgICAgPEJvb2tpbmdJdGVtIG51bWJlcj1cIjA0XCIgdGl0bGU9XCJEaW5uZXJcIiB0ZXh0PVwiUmVzZXJ2ZSBDYWZlIFphY2sgb3IgdGhlIGJlc3QgY29tcGFyYWJsZSBkYXRlLW5pZ2h0IG9wdGlvbi5cIiBocmVmPXtsaW5rcy5jYWZlWmFja30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdGluZy1ib29rXCIgaHJlZj1cIiNidWRnZXRcIj5Cb29rIHRoZSB0cmlwPC9hPlxuXG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdHJvbmc+RW1lcmdlbmN5IGFuZCB0cmF2ZWwgbm90ZXM8L3N0cm9uZz5cbiAgICAgICAgICA8cD5Gb3IgZW1lcmdlbmNpZXMgY2FsbCA5MTEuIENoYW5uZWwgSXNsYW5kcyBOYXRpb25hbCBQYXJrIHZpc2l0b3IgY2VudGVyOiAxOTAxIFNwaW5uYWtlciBEcml2ZSwgVmVudHVyYTsgcGhvbmUgODA1LTY1OC01NzMwLiBJc2xhbmQgUGFja2VycyBWZW50dXJhIG9mZmljZTogMTY5MSBTcGlubmFrZXIgRHIuICMxMDVCOyBwaG9uZSA4MDUtNjQyLTEzOTMuIEtlZXAgZmVycnksIGhvdGVsLCB0cmFpbiwgYW5kIGRpbm5lciBjb25maXJtYXRpb25zIGFjY2Vzc2libGUgb2ZmbGluZS48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEZvb2RDYXJkKHsgaW1hZ2UsIHRpdGxlLCB0ZXh0LCBsaW5rczogY2FyZExpbmtzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJmb29kLWNhcmRcIj5cbiAgICAgIDxTbWFydEltYWdlIHNyYz17aW1hZ2V9IGFsdD1cIlwiIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XG4gICAgICAgIDxwPnt0ZXh0fTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW5pLWxpbmtzXCI+e2NhcmRMaW5rcy5tYXAoKFtsYWJlbCwgaHJlZl0pID0+IDxFeHRlcm5hbExpbmsga2V5PXtsYWJlbH0gaHJlZj17aHJlZn0+e2xhYmVsfTwvRXh0ZXJuYWxMaW5rPil9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FydGljbGU+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEJvb2tpbmdJdGVtKHsgbnVtYmVyLCB0aXRsZSwgdGV4dCwgaHJlZiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGFydGljbGU+XG4gICAgICA8c3Bhbj57bnVtYmVyfTwvc3Bhbj5cbiAgICAgIDxkaXY+PGgzPnt0aXRsZX08L2gzPjxwPnt0ZXh0fTwvcD48L2Rpdj5cbiAgICAgIDxFeHRlcm5hbExpbmsgaHJlZj17aHJlZn0gY2xhc3NOYW1lPVwiYnV0dG9uIHNlY29uZGFyeVwiPk9wZW48L0V4dGVybmFsTGluaz5cbiAgICA8L2FydGljbGU+XG4gICk7XG59XG5cblJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKS5yZW5kZXIoPEFwcCAvPik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsTUFBQSxHQUF5Q0MsS0FBSztFQUF0Q0MsU0FBUyxHQUFBRixNQUFBLENBQVRFLFNBQVM7RUFBRUMsT0FBTyxHQUFBSCxNQUFBLENBQVBHLE9BQU87RUFBRUMsUUFBUSxHQUFBSixNQUFBLENBQVJJLFFBQVE7QUFFcEMsSUFB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