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
     name     - tutoring company name shown on the card
     subject  - ONE of: Maths, English, Science, Primary, All subjects
                (used for the coloured tag and the filter chips)
     suburb   - Adelaide location (used for the location filter)
     format   - e.g. "In home & online, one-to-one"
     price    - e.g. "$59 / hr online"
     rating   - overall score out of 5 (halves allowed, e.g. 4.5)
     date     - date reviewed, format YYYY-MM-DD (used for sorting)
     excerpt  - 1-2 sentence summary shown on the card
     search   - extra keywords to help the search box find this review
   ============================================================ */

const REVIEWS = [
  {
    slug: "topmark-tutors-adelaide",
    name: "TopMark Tutors",
    subject: "Science",
    suburb: "Adelaide",
    format: "One-to-one, small group & mentoring",
    price: "Free consultation",
    rating: 5,
    date: "2026-08-04",
    excerpt:
      "Founded by two Flinders medical students with 99+ ATARs, TopMark pairs its own textbooks with one-to-one teaching and mentoring. Every 2025 student scored a 90 or higher ATAR.",
    search: "SACE physics chemistry mathematical methods specialist maths biology UCAT medicine dentistry business innovation year 11 12 ahmed aly ali alebadi flinders atar merit"
  },
  {
    slug: "alchemy-tuition-adelaide",
    name: "Alchemy Tuition",
    subject: "English",
    suburb: "All Adelaide suburbs",
    format: "In home & online, one-to-one",
    price: "$59 / hr online",
    rating: 4.5,
    date: "2026-07-21",
    excerpt:
      "In-home and online one-to-one tutoring across every subject from Reception to Year 12, with carefully vetted tutors, reports after every lesson and a free first lesson if the match is not right.",
    search: "in home tutoring all suburbs kindergarten reception year 12 english maths biology chemistry physics history geography economics working with children check guarantee pay as you go"
  },
  {
    slug: "tutors-sa-campbelltown-mitcham",
    name: "Tutors SA",
    subject: "All subjects",
    suburb: "Campbelltown & Mitcham",
    format: "Small group, one-to-one & hybrid",
    price: "Published fee schedule",
    rating: 4.5,
    date: "2026-07-06",
    excerpt:
      "Two Adelaide centres, the broadest subject list here and tutors who mostly hold postgraduate degrees. The clear first stop for ACER, Ignite and STEM scholarship exam preparation.",
    search: "campbelltown kingswood mitcham reception year 12 accounting psychology legal studies nutrition information technology research project UCAT scholarship ACER ignite STEM australian tutoring association phd masters registered teachers"
  },
  {
    slug: "adelaide-tutors-camden-park",
    name: "Adelaide Tutors",
    subject: "Maths",
    suburb: "Camden Park",
    format: "Small groups, in person",
    price: "Contact for rates",
    rating: 4.5,
    date: "2026-06-15",
    excerpt:
      "A focused senior maths and physics specialist on Anzac Highway, teaching Methods, Specialist and Physics in classes capped at six with structured lessons and exam-style practice.",
    search: "mathematical methods specialist mathematics physics years 8 9 10 maths anzac highway western southwestern suburbs small classes exam practice SACE"
  },
  {
    slug: "kip-mcgrath-adelaide",
    name: "Kip McGrath Education Centres",
    subject: "Primary",
    suburb: "Highgate, Salisbury & Morphett Vale",
    format: "Small groups in centre or online",
    price: "Free assessment",
    rating: 4.5,
    date: "2026-05-25",
    excerpt:
      "English and maths for primary and secondary students, starting with a free assessment run by a qualified teacher and a programme that works topic by topic until your child catches up.",
    search: "reading spelling numeracy english maths primary school catch up learning gaps assessment highgate salisbury morphett vale digital whiteboard progress reports"
  },
  {
    slug: "kinetic-education-adelaide",
    name: "Kinetic Education",
    subject: "Maths",
    suburb: "Online, Adelaide wide",
    format: "Online with weekly one-to-one",
    price: "From $29 / week",
    rating: 4,
    date: "2026-05-11",
    excerpt:
      "Thirty years of tutoring behind an online platform that pairs self-paced maths and English work with a weekly one-to-one session. Easily the best value option on this site.",
    search: "online tutoring cheap affordable high school years 7 8 9 10 11 12 maths doctor english wiz SACE australian curriculum two free weeks screen share regional"
  }
];
