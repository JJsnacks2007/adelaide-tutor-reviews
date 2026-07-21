/* ============================================================
   Adelaide Tutor Reviews - review data
   ------------------------------------------------------------
   This file powers the review cards, search and filters on the
   homepage. To add a new review:

     1. Copy one of the blocks below (from { to },) and edit it.
     2. Create the matching page in /reviews/ (copy _template.html
        and name it to match the "slug" you choose here).

   Fields:
     slug     - file name of the review page (without .html)
     name     - tutor or business name shown on the card
     subject  - ONE of: Maths, English, Science, Primary, Languages, Music
                (used for the coloured tag and the filter chips)
     suburb   - Adelaide suburb (used for the suburb filter)
     format   - e.g. "In person & online"
     price    - e.g. "$60 / hr"
     rating   - overall score out of 5 (halves allowed, e.g. 4.5)
     date     - date reviewed, format YYYY-MM-DD (used for sorting)
     excerpt  - 1-2 sentence summary shown on the card
     search   - extra keywords to help the search box find this review
   ============================================================ */

const REVIEWS = [
  {
    slug: "brightpath-maths-norwood",
    name: "BrightPath Maths Tutoring",
    subject: "Maths",
    suburb: "Norwood",
    format: "In person & online",
    price: "$60 / hr",
    rating: 4.5,
    date: "2026-06-14",
    excerpt:
      "A structured, SACE-focused maths specialist who rebuilt my Year 11 student's confidence in a single term. Not the cheapest in the eastern suburbs, but you can see where the money goes.",
    search: "SACE mathematical methods specialist year 11 12 daniel eastern suburbs exam preparation"
  },
  {
    slug: "sarah-whitfield-english-glenelg",
    name: "Sarah Whitfield English & Essay Coaching",
    subject: "English",
    suburb: "Glenelg",
    format: "In person & online",
    price: "$55 / hr",
    rating: 5,
    date: "2026-07-02",
    excerpt:
      "The best feedback-giver I've watched work in Adelaide. Essays come back covered in specific, actionable comments, and her students actually rewrite them. Book early; her waitlist is real.",
    search: "essay writing year 12 english literary persuasive text analysis feedback beachside west"
  },
  {
    slug: "adelaide-science-hub-cbd",
    name: "Adelaide Science Hub",
    subject: "Science",
    suburb: "Adelaide CBD",
    format: "Small groups, in person",
    price: "$49 / class",
    rating: 3.5,
    date: "2026-05-21",
    excerpt:
      "Knowledgeable chemistry and physics tutors let down by crowded classes and patchy admin. Good value if your student thrives in a group; less so if they need individual attention.",
    search: "chemistry physics biology group classes city SACE stage 2 practical exams"
  },
  {
    slug: "little-sprouts-literacy-prospect",
    name: "Little Sprouts Literacy",
    subject: "Primary",
    suburb: "Prospect",
    format: "In person",
    price: "$45 / 45 min",
    rating: 4,
    date: "2026-04-18",
    excerpt:
      "A warm, phonics-based reading program for primary students that parents rave about. Sessions are genuinely fun. My only quibbles are the waitlist and limited after-school slots.",
    search: "reading phonics spelling primary school years 1 2 3 4 dyslexia friendly north"
  },
  {
    slug: "lingua-adelaide-unley",
    name: "Lingua Adelaide (Mia Trentino)",
    subject: "Languages",
    suburb: "Unley",
    format: "In person & online",
    price: "$50 / hr",
    rating: 4.5,
    date: "2026-03-29",
    excerpt:
      "Conversation-first French and Italian tutoring that gets students speaking from lesson one. Brilliant for confidence and SACE orals; grammar drilling takes a back seat, for better or worse.",
    search: "french italian conversation oral exam continuers beginners adults high school"
  },
  {
    slug: "harmony-lane-music-mawson-lakes",
    name: "Harmony Lane Music Studio",
    subject: "Music",
    suburb: "Mawson Lakes",
    format: "In person",
    price: "$40 / 30 min",
    rating: 3,
    date: "2026-02-10",
    excerpt:
      "Talented piano and guitar teachers undermined by constant scheduling chaos and teacher turnover. Fine for casual learners; frustrating if you're working towards AMEB exams.",
    search: "piano guitar AMEB exams beginner kids lessons north northern suburbs"
  }
];
