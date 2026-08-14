import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CircleDollarSign,
  Clock3,
  Compass,
  Flag,
  Lightbulb,
  Menu,
  MessageSquareText,
  PartyPopper,
  Plane,
  Rocket,
  School,
  SlidersHorizontal,
  Sparkles,
  Target,
  Users,
  Volume2,
  X,
} from "lucide-react";
import "./styles.css";

import accidentalProjects from "./assets/accidental-projects.png";
import projectAttributes from "./assets/project-attributes.png";
import projectDisruptions from "./assets/project-disruptions.png";
import solutionMindset from "./assets/solution-mindset.png";
import sarahCampaign from "./assets/sarah-campaign.png";
import campaignProblems from "./assets/campaign-problems.png";
import campaignStrategy from "./assets/campaign-strategy.png";
import campaignOutcome from "./assets/campaign-outcome.png";

const sections = [
  {
    tab: "Already a PM",
    eyebrow: "LESSON 1.1 · YOUR CASE STUDY AS AN ACCIDENTAL PROJECT MANAGER",
    title: (
      <>
        You’re Already a Project Manager{" "}
        <span>(You Just Don’t Call It That)</span>
      </>
    ),
    image: accidentalProjects,
  },
  {
    tab: "What makes a project",
    eyebrow: "THE COMMON THREAD",
    title: <>They exhibit the defining attributes of a project:</>,
    image: projectAttributes,
  },
  {
    tab: "When plans change",
    eyebrow: "PROJECTS NEVER GO EXACTLY AS PLANNED",
    title: (
      <>
        So the real question isn’t whether problems will happen.{" "}
        <span>It’s how you’ll respond when they do.</span>
      </>
    ),
    image: projectDisruptions,
  },
  {
    tab: "The mindset",
    eyebrow: "SOLUTION-ORIENTED THINKING",
    title: (
      <>
        The most important <span>mindset to adopt.</span>
      </>
    ),
    image: solutionMindset,
  },
  {
    tab: "Put it in practice",
    eyebrow: "WHAT A SOLUTION-ORIENTED MINDSET MEANS",
    title: <>It means:</>,
    image: solutionMindset,
  },
  {
    tab: "What’s next",
    eyebrow: "WHAT YOU’LL SEE NEXT",
    title: <>What You’ll See Next</>,
    image: solutionMindset,
  },
];

const sectionTabs = [
  "Already a PM",
  "What makes a project",
  "When plans change",
  "The mindset",
  "Mindset means",
  "What’s next",
];
const pageSection = [0, 1, 2, 3, 4, 5];
const sectionStartPage = [0, 1, 2, 3, 4, 5];

const everyday = [
  { icon: PartyPopper, title: "A birthday party" },
  { icon: Users, title: "A team outing" },
  { icon: School, title: "Your child’s school application" },
  { icon: Rocket, title: "Launching a start-up" },
  { icon: Plane, title: "Planning a family vacation" },
];

const attributes = [
  {
    icon: CalendarDays,
    title: "Timelines",
    body: "a clear start and end date",
  },
  {
    icon: Users,
    title: "Temporary resources",
    body: "time, money, and people assigned for a limited period",
  },
  {
    icon: Sparkles,
    title: "Unique outputs",
    body: "no two parties, vacations, or ventures are exactly alike",
  },
  {
    icon: SlidersHorizontal,
    title: "Constraints",
    body: "involving budget, schedule, scope, quality, risk, and available resources",
  },
];

const surprises = [
  "Sudden changes in scope",
  "Delays from partners or vendors",
  "Shifting priorities from leadership",
  "Limited budgets, resources, or time",
];
const mindset = [
  {
    icon: Compass,
    title: "Focusing on what’s possible now instead of what went wrong",
  },
  { icon: Lightbulb, title: "Looking for options, not just causes" },
  {
    icon: MessageSquareText,
    title: "Responding with calm clarity, not chaos or blame",
  },
  {
    icon: Flag,
    title: "Being committed to progress, even when the path changes",
  },
];

const strategies = [
  {
    title: "Re-prioritization",
    body: "Sarah looked at all the tasks and chose to focus on the most important ones first. Instead of trying to do everything, she put her time and energy into the platforms that would make the biggest difference.",
    icon: Target,
  },
  {
    title: "Agile Adjustments",
    body: "Instead of setting up ads and leaving them alone, Sarah started checking them every week. She made small changes based on what was working and what wasn’t — like adjusting the budget or switching up the message.",
    icon: SlidersHorizontal,
  },
  {
    title: "Stakeholder Communication",
    body: "Sarah had short check-in meetings every two weeks with the people involved in the project. She used these meetings to give updates, talk about any problems, and make sure everyone stayed on the same page.",
    icon: MessageSquareText,
  },
];

function Header({ current, completed, onOutline }) {
  const activeSection = pageSection[current];
  const sectionIsComplete = (sectionIndex) =>
    pageSection
      .map((section, page) => ({ section, page }))
      .filter((item) => item.section === sectionIndex)
      .every((item) => item.page < current || completed.has(item.page));
  return (
    <>
      <header className="topbar">
        <button className="course-button" onClick={onOutline}>
          <Menu size={19} /> Project Management Professional
        </button>
        <div
          className="dots"
          aria-label={`Page ${current + 1} of ${sections.length}`}
        >
          {sections.map((_, i) => (
            <span
              key={i}
              className={
                i < current || completed.has(i)
                  ? "dot done"
                  : i === current
                    ? "dot active"
                    : "dot"
              }
            >
              {i < current || completed.has(i) ? <Check size={13} /> : null}
            </span>
          ))}
        </div>
        <div className="top-actions">
          <button>
            <Volume2 size={20} /> Sound on
          </button>
          <button>Quit</button>
        </div>
      </header>
      <div className="section-label">
        SECTION {activeSection + 1} OF {sectionTabs.length}
      </div>
      <nav className="tabs">
        {sectionTabs.map((tab, i) => (
          <div
            key={tab}
            className={
              sectionIsComplete(i)
                ? "tab complete"
                : i === activeSection
                  ? "tab active"
                  : "tab"
            }
          >
            {sectionIsComplete(i) ? <Check size={15} /> : null}
            {tab}
          </div>
        ))}
      </nav>
    </>
  );
}

function Illustration({ src, alt = "" }) {
  return (
    <motion.img
      className="illustration"
      src={src}
      alt={alt}
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

function Modal({ item, onClose, onRead }) {
  if (!item) return null;
  const Icon = item.icon || Sparkles;
  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.article
        className="modal"
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-x" onClick={onClose} aria-label="Close">
          <X size={22} />
        </button>
        <div className="modal-icon">
          <Icon size={42} />
        </div>
        <p className="eyebrow">OPEN FULL DETAIL</p>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
        <button className="primary compact" onClick={onRead}>
          <Check size={18} /> Mark as read
        </button>
      </motion.article>
    </motion.div>
  );
}

function Intro({ onComplete }) {
  return (
    <div className="hero-grid">
      <div className="copy">
        <p className="eyebrow">
          LESSON 1.1 · YOUR CASE STUDY AS AN ACCIDENTAL PROJECT MANAGER
        </p>
        <h1>{sections[0].title}</h1>
        <p className="lead">
          Think about the last time you planned something important, something
          outside Business-as-usual (BAU) …
        </p>
        <div className="everyday-list">
          {everyday.map(({ icon: Icon, title }) => (
            <div key={title}>
              <Icon size={20} />
              <span>{title}</span>
            </div>
          ))}
        </div>
        <p>
          Each of these—though different in scale and context—shares a common
          thread: they are all projects.
        </p>
        <button className="primary" onClick={onComplete}>
          See the common thread <ArrowRight size={20} />
        </button>
      </div>
      <Illustration src={accidentalProjects} />
    </div>
  );
}

function Attributes() {
  return (
    <>
      <div className="attributes-hero">
        <div className="wide-head">
          <p className="eyebrow">THE DEFINING ATTRIBUTES OF A PROJECT</p>
          <h1>{sections[1].title}</h1>
        </div>
        <Illustration src={projectAttributes} />
      </div>
      <div className="attribute-grid">
        {attributes.map((a, i) => {
          const Icon = a.icon;
          return (
            <article key={a.title} className="attribute-card">
              <span className="card-icon">
                <Icon />
              </span>
              <div>
                <strong>{a.title}</strong>
                <p>{a.body}</p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

function Challenges({ revealed, setRevealed }) {
  const [surprisesOpen, setSurprisesOpen] = useState(false);
  return (
    <>
      <div className="hero-grid">
        <div className="copy">
          <p className="eyebrow">WHEN THE PLAN MOVES</p>
          <h1>{sections[2].title}</h1>
          <p className="lead">
            Whether or not you realized it at the time, you were managing a
            project. Technically, that makes you an accidental project manager.
          </p>
          <div className="quote">
            You’re already managing projects. You just didn’t call it that.
          </div>
          <p>But what happens when you experience challenges</p>
          <p>Because the truth is..</p>
          <p>
            <strong>Projects never go exactly as planned.</strong>
            <br />
            And that’s not a problem—unless you treat it like one.
          </p>
          <p>Even the most seasoned project managers face surprises:</p>
          <button
            className={revealed ? "primary success" : "primary"}
            onClick={() => setSurprisesOpen(true)}
          >
            {revealed ? "Review the surprises" : "Reveal the surprises"}{" "}
            <ArrowRight size={20} />
          </button>
        </div>
        <Illustration src={projectDisruptions} />
      </div>
      <AnimatePresence>
        {surprisesOpen && (
          <motion.div
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSurprisesOpen(false)}
          >
            <motion.article
              className="modal surprises-modal"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-x"
                onClick={() => setSurprisesOpen(false)}
                aria-label="Close"
              >
                <X />
              </button>
              <img src={projectDisruptions} alt="Unexpected project changes" />
              <p className="eyebrow">
                EVEN SEASONED PROJECT MANAGERS FACE SURPRISES
              </p>
              <ul className="reveal-list">
                {surprises.map((item) => (
                  <li key={item}>
                    <Check size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                <strong>
                  So the real question isn’t whether problems will happen. It’s
                  how you’ll respond when they do.
                </strong>
              </p>
              <button
                className="primary compact modal-action"
                onClick={() => {
                  setRevealed(true);
                  setSurprisesOpen(false);
                }}
              >
                <Check /> Mark as reviewed
              </button>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MindsetIntro() {
  return (
    <div className="hero-grid">
      <div className="copy">
        <p className="eyebrow">SOLUTION-ORIENTED THINKING</p>
        <h1>{sections[3].title}</h1>
        <p>
          This is why the solution-oriented mindset is foundational as you start
          this course because most questions in the pmp exam require you to
          prioritize answers where the project manager takes accountability and
          works to find a resolution as escalation should be a last resort. PMI
          values project managers who approach issues with a can-do attitude
          rather than passing it on.
        </p>
        <p>
          <strong>
            This is the mindset that separates great project leaders from
            everyone else.
          </strong>
        </p>
      </div>
      <Illustration src={solutionMindset} />
    </div>
  );
}

function MindsetPractice({ read, setRead }) {
  const [active, setActive] = useState(0);
  const ActiveIcon = mindset[active].icon;
  useEffect(() => {
    setRead((currentRead) => {
      if (currentRead.has(0)) return currentRead;
      return new Set([...currentRead, 0]);
    });
  }, [setRead]);
  const choose = (index) => {
    setActive(index);
    setRead(new Set([...read, index]));
  };
  return (
    <div className="reading-page">
      <div className="wide-head">
        <p className="eyebrow">WHAT A SOLUTION-ORIENTED MINDSET MEANS</p>
        <h1>{sections[4].title}</h1>
      </div>
      <div className="sidebar-reader">
        <div className="reader-list">
          {mindset.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.title}
                className={active === index ? "active" : ""}
                onClick={() => choose(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon />
                <strong>{item.title}</strong>
                {read.has(index) && <Check />}
              </button>
            );
          })}
        </div>
        <motion.article
          key={active}
          className="reader-detail"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="reader-icon">
            <ActiveIcon />
          </span>
          <p className="eyebrow">
            BEHAVIOR {String(active + 1).padStart(2, "0")}
          </p>
          <h2>{mindset[active].title}</h2>
          <p className="reader-status">
            {read.has(active)
              ? "Read"
              : "Select this behavior to mark it as read."}
          </p>
        </motion.article>
      </div>
    </div>
  );
}

function WhatsNext() {
  const points = [
    { icon: Compass, lead: "Adaptability", text: "to pivot with purpose" },
    {
      icon: Target,
      lead: "Prioritization",
      text: "to focus on what matters most",
    },
    {
      icon: MessageSquareText,
      lead: "Clear communication",
      text: "to keep the team aligned and in motion",
    },
  ];
  return (
    <div className="next-page">
      <div className="next-page-copy">
        <p className="eyebrow">WHAT YOU’LL SEE NEXT</p>
        <h1>{sections[5].title}</h1>
        <p className="lead">
          When you adopt this mindset, you’re not just planning projects—you’re
          leading through uncertainty. And in today’s fast-moving world, that’s
          what true project leadership requires.
        </p>
        <p>
          To bring this to life, the next section shows you what
          solution-oriented thinking looks like in a real project.
        </p>
        <p>
          You’ll watch a team deal with unexpected setbacks—just like the ones
          you’ll face. And you’ll see how they apply:
        </p>
      </div>
      <div className="next-point-grid">
        {points.map(({ icon: Icon, lead, text }, index) => (
          <motion.article
            key={lead}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <span>
              <Icon />
            </span>
            <div>
              <strong>{lead}</strong> {text}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function CaseStudy({ revealed, setRevealed }) {
  const [problemOpen, setProblemOpen] = useState(false);
  return (
    <>
      <div className="hero-grid compact-hero">
        <div className="copy">
          <p className="eyebrow">
            CASE STUDY: LAUNCHING A DIGITAL MARKETING CAMPAIGN
          </p>
          <h1>{sections[6].title}</h1>
          <h2>Background:</h2>
          <p>
            Sarah, a digital marketing manager at a medium-sized retail company,
            was tasked with launching a new online ad campaign to boost summer
            sales.
          </p>
          <p>
            The campaign was scheduled to run for three months, from June to
            August, targeting an increase in online sales by 20%. Sarah
            assembled a team including a graphic designer, a content writer, a
            data analyst, and a social media specialist.
          </p>
          <button
            className={revealed ? "primary success" : "primary"}
            onClick={() => setProblemOpen(true)}
          >
            {revealed ? "Review the problem" : "Reveal the problem"}{" "}
            <ArrowRight size={20} />
          </button>
        </div>
        <Illustration src={sarahCampaign} />
      </div>
      <AnimatePresence>
        {problemOpen && (
          <motion.div
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setProblemOpen(false)}
          >
            <motion.article
              className="modal problem-modal"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-x"
                onClick={() => setProblemOpen(false)}
                aria-label="Close"
              >
                <X />
              </button>
              <img
                src={campaignProblems}
                alt="Campaign problems affecting the original plan"
              />
              <p className="eyebrow">CASE STUDY · PROBLEM</p>
              <h2>Problem:</h2>
              <p>
                As the project commenced, it quickly became apparent that the
                original objectives might not be fully achievable due to several
                unforeseen issues:
              </p>
              <ul>
                <li>
                  The graphic designer fell ill, causing a delay in ad
                  creatives.
                </li>
                <li>
                  Changes in social media algorithms reduced the anticipated
                  reach of paid ads.
                </li>
                <li>
                  A competitor launched a similar campaign, saturating the
                  market and increasing cost per click.
                </li>
              </ul>
              <button
                className="primary compact modal-action"
                onClick={() => {
                  setRevealed(true);
                  setProblemOpen(false);
                }}
              >
                <Check /> Mark as reviewed
              </button>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Strategy({ read, setRead }) {
  const [active, setActive] = useState(null);
  const toggle = (index) => {
    setActive(active === index ? null : index);
    setRead(new Set([...read, index]));
  };
  return (
    <>
      <div className="hero-grid compact-hero strategy-intro">
        <div className="copy">
          <p className="eyebrow">STRATEGY ADAPTATION</p>
          <h1>{sections[7].title}</h1>
          <p>
            To manage these challenges, Sarah implemented several project
            management techniques:
          </p>
          <p>Click on each to learn more.</p>
        </div>
        <Illustration src={campaignStrategy} />
      </div>
      <div className="strategy-accordion">
        {strategies.map((a, i) => {
          const Icon = a.icon;
          return (
            <article key={a.title} className={active === i ? "open" : ""}>
              <button onClick={() => toggle(i)}>
                <span className="card-icon">
                  <Icon />
                </span>
                <span className="strategy-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <strong>{a.title}</strong>
                {read.has(i) && <Check className="strategy-check" />}
                <ArrowRight className="strategy-arrow" />
              </button>
              <AnimatePresence initial={false}>
                {active === i && (
                  <motion.div
                    className="strategy-copy"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <p>{a.body}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </>
  );
}

function Outcome({ checked, setChecked, checkOpen, setCheckOpen }) {
  return (
    <>
      <div className="outcome-page">
        <Illustration src={campaignOutcome} />
        <div>
          <p className="eyebrow">
            CASE STUDY: LAUNCHING A DIGITAL MARKETING CAMPAIGN
          </p>
          <h1>{sections[8].title}</h1>
          <p>
            Although the team was unable to meet the initial sales increase
            target, they achieved a 15% increase, gaining valuable insights into
            market conditions and improving their response strategy for future
            campaigns.
          </p>
          <button
            className="primary compact"
            onClick={() => setCheckOpen(true)}
            disabled={checked}
          >
            {checked ? (
              <>
                <Check /> Knowledge check complete
              </>
            ) : (
              <>
                Start knowledge check <ArrowRight />
              </>
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {checkOpen && !checked && (
          <KnowledgeCheck
            onFinish={() => {
              setChecked(true);
              setCheckOpen(false);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function KnowledgeCheck({ onFinish }) {
  const [answer, setAnswer] = useState(null);
  const correct = answer === 1;
  return (
    <div className="backdrop">
      <article className="modal knowledge">
        <p className="eyebrow">MICRO KNOWLEDGE CHECK</p>
        <h2>
          When Sarah’s original campaign plan became less achievable, what
          response best reflects solution-oriented project leadership?
        </h2>
        {[
          "Escalate the entire problem immediately and wait for leadership to decide.",
          "Re-prioritize the work, adjust based on results, and keep stakeholders aligned.",
          "Continue the original plan unchanged so the baseline remains protected.",
        ].map((x, i) => (
          <button
            className={`answer ${answer === i ? (i === 1 ? "correct" : "wrong") : ""}`}
            key={x}
            onClick={() => setAnswer(i)}
          >
            <span>{String.fromCharCode(65 + i)}</span>
            {x}
          </button>
        ))}
        {answer !== null && (
          <p className={correct ? "feedback good" : "feedback bad"}>
            {correct
              ? "Correct — Sarah takes accountability, adapts the plan, and keeps the team moving."
              : "Not quite — solution-oriented leadership takes ownership and works toward a resolution before escalation."}
          </p>
        )}
        <button
          className="primary compact"
          disabled={answer === null}
          onClick={onFinish}
        >
          Finish check <ArrowRight />
        </button>
      </article>
    </div>
  );
}

function App() {
  const [current, setCurrent] = useState(0);
  const [completed, setCompleted] = useState(new Set());
  const [outline, setOutline] = useState(false);
  const [challengeReveal, setChallengeReveal] = useState(false);
  const [mindsetRead, setMindsetRead] = useState(new Set());
  const eligible = [
    completed.has(0),
    true,
    challengeReveal,
    true,
    mindsetRead.size === 4,
    true,
  ];
  const goNext = () => {
    if (!eligible[current]) return;
    setCompleted(new Set([...completed, current]));
    setCurrent(Math.min(current + 1, sections.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const screens = [
    <Intro
      onComplete={() => {
        setCompleted(new Set([...completed, 0]));
        setCurrent(1);
      }}
    />,
    <Attributes />,
    <Challenges revealed={challengeReveal} setRevealed={setChallengeReveal} />,
    <MindsetIntro />,
    <MindsetPractice read={mindsetRead} setRead={setMindsetRead} />,
    <WhatsNext />,
  ];
  return (
    <div className="app">
      <Header
        current={current}
        completed={completed}
        onOutline={() => setOutline(true)}
      />
      <main>
        <AnimatePresence mode="wait">
          <motion.section
            key={current}
            className="lesson"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.32 }}
          >
            {screens[current]}
          </motion.section>
        </AnimatePresence>
        <footer>
          <button
            className="secondary"
            disabled={current === 0}
            onClick={() => setCurrent(current - 1)}
          >
            <ArrowLeft /> Previous
          </button>
          <button
            className="primary"
            disabled={!eligible[current]}
            onClick={goNext}
          >
            {current === sections.length - 1 ? "Complete lesson" : "Continue"}{" "}
            <ArrowRight />
          </button>
        </footer>
      </main>
      <AnimatePresence>
        {outline && (
          <motion.div
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOutline(false)}
          >
            <motion.aside
              className="outline"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-x" onClick={() => setOutline(false)}>
                <X />
              </button>
              <p className="eyebrow">LESSON OUTLINE</p>
              <h2>Your Case Study as an Accidental Project Manager</h2>
              {sectionTabs.map((tab, i) => (
                <button
                  key={tab}
                  disabled={sectionStartPage[i] > current}
                  onClick={() => {
                    setCurrent(sectionStartPage[i]);
                    setOutline(false);
                  }}
                >
                  <span>{i + 1}</span>
                  {tab}
                </button>
              ))}
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
