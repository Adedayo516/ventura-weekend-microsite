const { useEffect, useMemo, useState } = React;

const links = {
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
  brophy: "https://www.google.com/maps/search/?api=1&query=Brophy+Bros+Ventura",
};

const images = {
  hero: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=82",
  harbor: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
  hotel: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
  train: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1400&q=80",
  island: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=82",
  dinner: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
  brunch: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1400&q=80",
  fallback: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='900' viewBox='0 0 1200 900'%3E%3Crect width='1200' height='900' fill='%23f2e7d6'/%3E%3Cpath d='M0 584c112-58 220-82 324-71 152 16 217 110 376 96 131-12 207-90 333-88 70 1 126 26 167 53v326H0z' fill='%239ac5ce'/%3E%3Ccircle cx='910' cy='234' r='94' fill='%23f1a56f'/%3E%3Cpath d='M114 377c159-85 282-126 369-123 131 5 186 104 313 100 78-3 154-45 229-127' fill='none' stroke='%230d5068' stroke-width='18' stroke-linecap='round' opacity='.45'/%3E%3Ctext x='92' y='788' fill='%230b3542' font-family='Georgia,serif' font-size='54'%3EVentura coast%3C/text%3E%3C/svg%3E",
};

const saturday = [
  {
    time: "Morning",
    title: "Home to Irvine Station",
    tag: "Start light",
    body: "Drive or rideshare to Irvine Transportation Center with one overnight bag and one shared island daypack.",
    details: ["Parking and platform details should be checked the week of travel.", "Keep IDs, train confirmations, and ferry confirmation in one phone wallet or shared folder."],
  },
  {
    time: "Midday",
    title: "Pacific Surfliner to Ventura",
    tag: "Confirm before booking",
    body: "Reserve seats after ferry availability is known. Sit on the ocean side when the train orientation makes that possible.",
    details: ["Do not rely on draft times from this itinerary.", "Check Pacific Surfliner advisories before purchase."],
    href: links.train,
  },
  {
    time: "Afternoon",
    title: "Ventura Station to Zachari Dunes",
    tag: "Beach reset",
    body: "Rideshare to the resort, drop bags, walk Mandalay Beach, then keep the afternoon unhurried.",
    details: ["Ask about bag storage if arrival is before check-in.", "Save a change of clothes near the top of the bag for dinner."],
  },
  {
    time: "Evening",
    title: "Polished Ventura Dinner",
    tag: "Joey Newport energy",
    body: "Choose a date-night restaurant with polished service, warm lighting, and strong non-seafood options.",
    details: ["Cafe Zack: intimate and classic.", "Model Citizen: more contemporary and lively.", "Reserve dinner once hotel and train are set."],
    href: links.cafeZack,
  },
];

const sunday = [
  {
    time: "Morning",
    title: "Brunch Before the Harbor",
    tag: "Snooze-style start",
    body: "Immigrant Son Caffe fits the creative brunch lane: bright, energetic, and more memorable than a basic hotel breakfast.",
    details: ["Build in buffer time for checkout and the rideshare to Ventura Harbor.", "If brunch timing gets tight, switch to grab-and-go food for the ferry."],
    href: links.immigrantSon,
  },
  {
    time: "Late morning",
    title: "Hotel to Harbor",
    tag: "Keep the daypack ready",
    body: "Move from the hotel to Island Packers at Ventura Harbor. Confirm check-in requirements directly with Island Packers.",
    details: ["Carry all food and water you need for the island.", "There are no shops once you land at Scorpion Anchorage."],
    href: links.ferry,
  },
  {
    time: "Ferry window",
    title: "Ventura to Santa Cruz Island",
    tag: "Confirm before booking",
    body: "Book a day-visitor round trip to Scorpion Anchorage only after confirming same-day return inventory.",
    details: ["Island Packers notes transport times are approximate and can shift with weather, wildlife viewing, and passenger loads.", "Ask staff or a ranger about the exact return meeting time before hiking."],
    href: links.ferry,
  },
  {
    time: "Island afternoon",
    title: "Cavern Point + Potato Harbor",
    tag: "Moderate hike",
    body: "A scenic coastal loop with cliff views, sun exposure, and a real sense of arrival on the islands.",
    details: ["Plan roughly 4-5 miles and 2.5-3 hours depending on route, heat, stops, and ferry timing.", "Stay well back from cliff edges and carry extra water."],
    href: links.npsHiking,
  },
  {
    time: "Evening",
    title: "Fish-and-chips finish, then train home",
    tag: "Flexible close",
    body: "After the ferry, keep dinner close to the harbor or downtown, then rideshare to Ventura Station for the return train.",
    details: ["Lure Fish House is the polished seafood-forward option.", "Andria's is the classic harbor fish-and-chips stop.", "Confirm train schedule before locking dinner timing."],
    href: links.lure,
  },
];

const packingItems = [
  "2-3 liters of water per person",
  "Lunch and high-energy trail snacks",
  "Hiking shoes with grip",
  "Sun hat and sunglasses",
  "Reef-safe sunscreen and lip balm",
  "Light windbreaker or warm layer",
  "Motion-sickness medicine",
  "Portable charger",
  "Date-night outfit",
  "Swimwear",
  "Reusable water bottles",
  "IDs and reservation confirmations",
];

const budgetDefaults = [
  { key: "train", label: "Train, two round trips", amount: 140 },
  { key: "hotel", label: "Zachari Dunes, one night", amount: 440 },
  { key: "ferry", label: "Island Packers, two people", amount: 180 },
  { key: "rideshare", label: "Local rideshares", amount: 70 },
  { key: "food", label: "Brunch, dinner, snacks", amount: 280 },
  { key: "buffer", label: "Weather and timing buffer", amount: 100 },
];

function ExternalLink({ href, children, className = "text-link" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function SmartImage({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);
  return <img className={className} src={failed ? images.fallback : src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}

function TimelineCard({ item, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <article className={`timeline-card ${open ? "is-open" : ""}`}>
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="timeline-time">{item.time}</span>
        <span className="timeline-title">{item.title}</span>
        <span className="timeline-tag">{item.tag}</span>
      </button>
      <div className="timeline-panel" hidden={!open}>
        <p>{item.body}</p>
        <ul>
          {item.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        {item.href ? <ExternalLink href={item.href}>Open official or map link</ExternalLink> : null}
      </div>
    </article>
  );
}

function Carousel() {
  const gallery = [
    { src: images.hotel, caption: "Zachari Dunes mood: suite, pool, beach access" },
    { src: images.harbor, caption: "Ventura Harbor: ferry staging and post-island dinner" },
    { src: images.island, caption: "Santa Cruz Island: exposed cliffs and wide Pacific views" },
  ];
  const [active, setActive] = useState(0);
  const next = () => setActive((active + 1) % gallery.length);
  const prev = () => setActive((active - 1 + gallery.length) % gallery.length);
  return (
    <div className="carousel" aria-label="Destination image carousel">
      <SmartImage src={gallery[active].src} alt={gallery[active].caption} />
      <div className="carousel-controls">
        <button type="button" onClick={prev} aria-label="Previous image">‹</button>
        <p>{gallery[active].caption}</p>
        <button type="button" onClick={next} aria-label="Next image">›</button>
      </div>
      <div className="dots">
        {gallery.map((item, index) => (
          <button key={item.caption} className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={`Show image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

function PackingChecklist() {
  const [checked, setChecked] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("venturaPacking") || "{}");
    } catch {
      return {};
    }
  });
  useEffect(() => {
    localStorage.setItem("venturaPacking", JSON.stringify(checked));
  }, [checked]);
  const count = Object.values(checked).filter(Boolean).length;
  return (
    <div className="checklist">
      <div className="checklist-head">
        <h3>Packing checklist</h3>
        <span>{count}/{packingItems.length}</span>
      </div>
      {packingItems.map((item) => (
        <label key={item} className={checked[item] ? "checked" : ""}>
          <input type="checkbox" checked={Boolean(checked[item])} onChange={(event) => setChecked({ ...checked, [item]: event.target.checked })} />
          {item}
        </label>
      ))}
      <button type="button" className="ghost-button" onClick={() => setChecked({})}>Clear checklist</button>
    </div>
  );
}

function BudgetCalculator() {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("venturaBudget") || "null") || budgetDefaults;
    } catch {
      return budgetDefaults;
    }
  });
  useEffect(() => {
    localStorage.setItem("venturaBudget", JSON.stringify(items));
  }, [items]);
  const total = useMemo(() => items.reduce((sum, item) => sum + Number(item.amount || 0), 0), [items]);
  const update = (key, amount) => setItems(items.map((item) => (item.key === key ? { ...item, amount: Math.max(0, Number(amount) || 0) } : item)));
  return (
    <div className="budget-card">
      <div className="budget-total">
        <span>Editable estimate for two</span>
        <strong>${total.toLocaleString()}</strong>
      </div>
      {items.map((item) => (
        <label key={item.key}>
          <span>{item.label}</span>
          <input type="number" min="0" step="10" value={item.amount} onChange={(event) => update(item.key, event.target.value)} />
        </label>
      ))}
      <p>Estimates are placeholders. Confirm live rates before booking.</p>
    </div>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#overview">Skip to itinerary</a>
      <header className="hero" id="top">
        <SmartImage className="hero-img" src={images.hero} alt="A warm coastal view for the Ventura weekend" />
        <div className="hero-overlay" />
        <nav className="nav" aria-label="Primary navigation">
          <a href="#top" className="brand">Ventura Weekend</a>
          <div>
            {["Overview", "Saturday", "Sunday", "Stay", "Food", "Packing", "Budget"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
            ))}
          </div>
        </nav>
        <section className="hero-copy">
          <p className="eyebrow">Saturday, July 18 - Sunday, July 19</p>
          <h1>Ventura & Channel Islands Weekend</h1>
          <p>One night on the coast, a ferry to Santa Cruz Island, and a boutique-style itinerary built for two.</p>
          <a className="button primary" href="#saturday">View itinerary</a>
        </section>
      </header>

      <main>
        <section className="overview section" id="overview">
          <div className="section-kicker">Overview</div>
          <h2>Upscale, simple, and ocean-forward.</h2>
          <p className="lead">The rhythm is intentionally easy: coastal train, beachfront resort, polished dinner, creative brunch, harbor transfer, island hike, and a relaxed return. Schedule details are marked as confirm before booking because train and ferry inventory can change.</p>
          <div className="stats">
            <div><span>Trip length</span><strong>1 night / 2 days</strong></div>
            <div><span>Base</span><strong>Zachari Dunes</strong></div>
            <div><span>Island plan</span><strong>Scorpion Anchorage</strong></div>
          </div>
        </section>

        <section className="flow section" aria-labelledby="transport-flow-title">
          <div>
            <div className="section-kicker">Transportation flow</div>
            <h2 id="transport-flow-title">Home to harbor, without guessing the schedule.</h2>
          </div>
          <div className="flow-track">
            {["Home", "Irvine Station", "Ventura", "Hotel", "Harbor", "Island"].map((stop) => (
              <div className="flow-stop" key={stop}><span />{stop}</div>
            ))}
          </div>
          <p className="note">Confirm Pacific Surfliner and Island Packers schedules before booking. Build the train around ferry availability, not the other way around.</p>
        </section>

        <section className="timeline-section section" id="saturday">
          <div className="split-heading">
            <div><div className="section-kicker">Saturday</div><h2>The coastal arrival day</h2></div>
            <SmartImage src={images.train} alt="Passenger train near the coast" />
          </div>
          <div className="timeline-list">{saturday.map((item, index) => <TimelineCard key={item.title} item={item} index={index} />)}</div>
        </section>

        <section className="timeline-section section island-band" id="sunday">
          <div className="split-heading">
            <div><div className="section-kicker">Sunday</div><h2>Brunch, ferry, island cliffs</h2></div>
            <SmartImage src={images.island} alt="Channel Islands coastline and surf" />
          </div>
          <div className="timeline-list">{sunday.map((item, index) => <TimelineCard key={item.title} item={item} index={index} />)}</div>
        </section>

        <section className="section stay" id="stay">
          <div className="section-kicker">Stay</div>
          <h2>Zachari Dunes on Mandalay Beach</h2>
          <div className="stay-grid">
            <Carousel />
            <div className="panel">
              <h3>Why it fits</h3>
              <p>Beachfront, resort-like, and easy to make feel special for one night without turning the weekend into a logistics project.</p>
              <div className="amenities">
                {["Beach access", "All-suite feel", "Pool + hot tub", "Fire pits", "On-site dining", "Easy rideshare base"].map((amenity) => <span key={amenity}>{amenity}</span>)}
              </div>
              <div className="button-row">
                <ExternalLink href={links.hotel} className="button primary">Book hotel</ExternalLink>
                <ExternalLink href={links.hotelMap} className="button secondary">Open map</ExternalLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section food" id="food">
          <div className="section-kicker">Food</div>
          <h2>Restaurants with Joey Newport polish and Snooze-style brunch energy.</h2>
          <div className="card-grid">
            <FoodCard image={images.dinner} title="Polished dinner" text="Cafe Zack for intimate date-night energy; Model Citizen as the more contemporary backup." links={[["Cafe Zack", links.cafeZack], ["Model Citizen", links.modelCitizen]]} />
            <FoodCard image={images.brunch} title="Creative brunch" text="Immigrant Son Caffe is the best match for playful, memorable brunch before the harbor." links={[["Immigrant Son", links.immigrantSon]]} />
            <FoodCard image={images.harbor} title="Fish-and-chips options" text="Andria's for the classic harbor stop, Brophy Bros for a sit-down waterfront feel, or Lure for a polished seafood finish." links={[["Andria's", links.andrias], ["Brophy Bros", links.brophy], ["Lure", links.lure]]} />
          </div>
          <div className="recommendations">
            <h3>Non-seafood friendly picks</h3>
            <p>Cafe Zack, Model Citizen, Immigrant Son Caffe, and Lure are safer choices when one person wants seafood and the other wants steak, chicken, pasta, brunch plates, or a burger.</p>
          </div>
        </section>

        <section className="section hike">
          <div className="section-kicker">Channel Islands hike</div>
          <h2>Cavern Point + Potato Harbor</h2>
          <div className="hike-grid">
            <div><span>Distance</span><strong>Approx. 4-5 miles</strong></div>
            <div><span>Difficulty</span><strong>Moderate</strong></div>
            <div><span>Duration</span><strong>2.5-3 hours</strong></div>
            <div><span>Ferry</span><strong>Island Packers, confirm live</strong></div>
          </div>
          <p>Expect exposed sun, cliff-edge viewpoints, uneven trail, no island shops, limited services, and a hard return deadline tied to the ferry. NPS guidance emphasizes staying on trails, avoiding cliff edges, carrying water, and meeting the boat concessionaire on time.</p>
          <div className="button-row">
            <ExternalLink href={links.npsSantaCruz} className="button secondary">NPS Santa Cruz Island</ExternalLink>
            <ExternalLink href={links.npsHiking} className="button secondary">NPS hiking safety</ExternalLink>
          </div>
        </section>

        <section className="section packing" id="packing">
          <div>
            <div className="section-kicker">Packing</div>
            <h2>Weather-ready without overpacking.</h2>
            <p>Pack for a polished resort evening and a practical island day. Bring layers for marine wind, sun coverage for exposed trails, and food and water for the whole island window.</p>
            <div className="weather-box">
              <strong>Weather guidance</strong>
              <span>Check Ventura Harbor, Oxnard coast, and Channel Islands marine forecast the day before. If wind, fog, or ferry advisories appear, prioritize warm layers and motion-sickness backup.</span>
            </div>
          </div>
          <PackingChecklist />
        </section>

        <section className="section budget" id="budget">
          <div>
            <div className="section-kicker">Budget</div>
            <h2>Editable budget calculator</h2>
            <p className="lead">Use this as a planning sandbox for two people. The values save on this device so you can adjust them while booking.</p>
          </div>
          <BudgetCalculator />
        </section>

        <section className="section booking">
          <div className="section-kicker">Booking checklist</div>
          <h2>Book the scarce pieces first.</h2>
          <div className="booking-list">
            <BookingItem number="01" title="Ferry" text="Confirm Scorpion Anchorage day-visitor round trip and return window." href={links.ferry} />
            <BookingItem number="02" title="Hotel" text="Book Zachari Dunes after ferry inventory is clear." href={links.hotel} />
            <BookingItem number="03" title="Train" text="Reserve Pacific Surfliner around the ferry, not guessed draft times." href={links.train} />
            <BookingItem number="04" title="Dinner" text="Reserve Cafe Zack or the best comparable date-night option." href={links.cafeZack} />
          </div>
        </section>
      </main>

      <a className="floating-book" href="#budget">Book the trip</a>

      <footer>
        <div>
          <strong>Emergency and travel notes</strong>
          <p>For emergencies call 911. Channel Islands National Park visitor center: 1901 Spinnaker Drive, Ventura; phone 805-658-5730. Island Packers Ventura office: 1691 Spinnaker Dr. #105B; phone 805-642-1393. Keep ferry, hotel, train, and dinner confirmations accessible offline.</p>
        </div>
      </footer>
    </>
  );
}

function FoodCard({ image, title, text, links: cardLinks }) {
  return (
    <article className="food-card">
      <SmartImage src={image} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="mini-links">{cardLinks.map(([label, href]) => <ExternalLink key={label} href={href}>{label}</ExternalLink>)}</div>
      </div>
    </article>
  );
}

function BookingItem({ number, title, text, href }) {
  return (
    <article>
      <span>{number}</span>
      <div><h3>{title}</h3><p>{text}</p></div>
      <ExternalLink href={href} className="button secondary">Open</ExternalLink>
    </article>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
