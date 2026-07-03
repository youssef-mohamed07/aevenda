import type { LegacySiteArchive } from "@/content/legacy/types";

const testimonialQuotesEn = [
  "They helped us build a full brand for our event — from the logo to the printed materials. Everything looked clean, modern, and exactly how we wanted.",
  "From planning to execution, the team handled every detail with precision. Our guests felt the quality in every touchpoint.",
  "Aevenda turned our vision into a polished experience — creative, reliable, and truly on brand.",
] as const;

const testimonialQuotesAr = [
  "ساعدونا في بناء هوية متكاملة لفعاليتنا — من الشعار إلى المطبوعات. كل شيء كان أنيقًا وعصريًا ومطابقًا تمامًا لرؤيتنا.",
  "من التخطيط إلى التنفيذ، الفريق أدار كل التفاصيل بدقة. ضيوفنا شعروا بالجودة في كل لحظة.",
  "حوّلوا رؤيتنا إلى تجربة راقية — إبداعية، موثوقة، ومتناسقة تمامًا مع علامتنا.",
] as const;

const caseStudiesEn = [
  {
    id: "5",
    slug: "makmleen-sawa-al-tawuniya",
    title: "Makmleen Sawa – A Journey of Trust by Al-Tawuniya",
    category: "Exhibition",
    legacyPath: "/case-study-info/?id=5",
    stats: [
      { value: 500, label: "Attendees" },
      { value: 2, label: "Executed Exhibitions" },
      { value: 3, label: "3D Mapping" },
      { value: 12, label: "Gift Stands" },
    ],
    about:
      "The “Makmleen Sawa” event by Al-Tawuniya was designed to celebrate the continuous bond between the brand and its clients — a reflection of trust, loyalty, and shared growth. Aevenda was entrusted with the complete design and execution of the event, transforming it from a standard activation into an immersive experience built around creativity, precision, and emotional connection.",
    scope: [
      "Event concept & visual design — from branding to spatial planning",
      "Fabrication & production — booths, stage setup, backdrops, and custom interactive zones",
      "On-ground execution — installation, supervision, and dismantling post-event",
      "AV & lighting setup",
      "Logistics & operations management",
      "Media coverage — photography and videography for post-event marketing content",
    ],
  },
  {
    id: "4",
    slug: "tawuniya-interactive-booth",
    title: "From Design to Reality: Al-Tawuniya Interactive Booth Experience",
    category: "Exhibition",
    legacyPath: "/case-study-info/?id=4",
    about:
      "Aevenda designed and executed Al-Tawuniya's exhibition booth as part of their Construction Risk Insurance Campaign, which focuses on the three main phases of construction: Design, Construction, and Post Completion.",
    scope: [
      "Booth concept design and fabrication",
      "On-site installation and dismantling",
      "Interactive screen design and development",
      "Content creation for digital engagement",
      "3D visualization and lighting setup",
      "Technical supervision and project management",
      "Logistics and event coordination",
    ],
  },
  {
    id: "3",
    slug: "riyadh-bank-al-hilal",
    title: "Al-Riyadh Bank x Al-Hilal FC: Booth and Activation for the Saudi Pro League",
    category: "Exhibition",
    legacyPath: "/case-study-info/?id=3",
    about:
      "Al-Riyadh Bank, the official sponsor of Al-Hilal FC, collaborated with Aevenda for an exclusive activation during the first match of the Saudi Pro League.",
    scope: [
      "Custom booth designs: 6×6 and 4×2 dimensions",
      "Full fabrication and installation on-site",
      "Design and production of 12 custom stands for giveaways based on each fan card",
      "Custom-designed moving goal activation",
      "LED screens to enhance visual experience and fan engagement",
      "Complete manufacturing of booths, stands, and activation setup",
      "Full logistics support for installation, operation, and dismantling",
      "Collection of data and performance analysis for future optimizations",
    ],
  },
] ;

const caseStudiesAr = [
  {
    id: "5",
    slug: "makmleen-sawa-al-tawuniya",
    title: "مكملين سوا – رحلة الثقة بين التعاونية وعملائها",
    category: "معرض",
    legacyPath: "/ar/case-study-info/?id=5",
    stats: caseStudiesEn[0].stats,
    about:
      "فعالية «مكملين سوا» من التعاونية صُممت للاحتفاء بالرابط المستمر بين العلامة وعملائها — انعكاس للثقة والولاء والنمو المشترك. اُؤتمنَت أفيندا على التصميم والتنفيذ الكامل للفعالية.",
    scope: caseStudiesEn[0].scope,
  },
  {
    id: "4",
    slug: "tawuniya-construction-insurance-booth",
    title: "جناح التعاونية للتأمين ضد مخاطر البناء",
    category: "معرض",
    legacyPath: "/ar/case-study-info/?id=4",
    about:
      "صممت أفيندا ونفذت جناح التعاونية للتأمين ضمن حملة التأمين ضد مخاطر البناء، التي تركز على مراحل البناء الثلاث: التصميم، التنفيذ، وما بعد الإنجاز.",
    scope: caseStudiesEn[1].scope,
  },
  {
    id: "3",
    slug: "riyadh-bank-al-hilal",
    title: "بنك الرياض الراعي لفريق الهلال السعودي",
    category: "معرض",
    legacyPath: "/ar/case-study-info/?id=3",
    about:
      "تعاون بنك الرياض، الراعي الرسمي للهلال، مع أفيندا في تفعيل حصري خلال أول مباراة في الدوري السعودي للمحترفين.",
    scope: caseStudiesEn[2].scope,
  },
] ;

const blogPostsEn = [
  {
    id: "1",
    slug: "experiential-marketing-saudi-arabia",
    title: "Why Experiential Marketing Is Reshaping Events in Saudi Arabia",
    category: "Events",
    date: "2026-02-12",
    readMinutes: 5,
    excerpt:
      "Saudi audiences expect more than a stage and a screen. Here's how brands are turning activations into memorable journeys.",
    paragraphs: [
      "The events landscape in Saudi Arabia has evolved rapidly. Audiences no longer come for information alone — they come for atmosphere, interaction, and a sense of being part of something larger than a presentation.",
      "Experiential marketing bridges brand strategy and live execution. It turns a booth, a launch, or a corporate gathering into a story guests can walk through, touch, and share. When done well, the experience becomes the message.",
      "At Aevenda, we see three patterns driving success: clarity of brand narrative before any build begins, interactive touchpoints that reward participation, and seamless operations so guests never feel the machinery behind the moment.",
      "Whether you are planning a national exhibition, a product reveal, or a client appreciation event, the question is no longer whether to invest in experience — it is how deliberately you design it.",
    ],
  },
  {
    id: "2",
    slug: "exhibition-booth-design-essentials",
    title: "Six Essentials for Exhibition Booth Design That Actually Stops Traffic",
    category: "Exhibitions",
    date: "2026-01-28",
    readMinutes: 4,
    excerpt:
      "Strong booth design is part architecture, part storytelling. These fundamentals help your stand work harder on the show floor.",
    paragraphs: [
      "An exhibition booth has seconds to earn attention. Layout, sightlines, and lighting determine whether visitors slow down or walk past.",
      "Start with flow: define entry points, meeting zones, and product focus areas before choosing finishes. A booth that guides movement naturally feels welcoming; one that blocks sightlines feels closed.",
      "Brand consistency matters at every scale — from hero graphics to giveaway counters. We align colour, typography, and messaging so the stand reads as one cohesive identity, not a collection of parts.",
      "Technical reliability is invisible when it works and unforgettable when it fails. Power, AV, storage, and staff circulation should be resolved in the design phase, not on install day.",
      "Finally, plan for photography. In today's event economy, a booth that photographs well extends its reach far beyond the hall.",
    ],
  },
  {
    id: "3",
    slug: "event-planning-brief-to-launch",
    title: "From Brief to Launch: How We Plan Major Events Without Surprises",
    category: "Process",
    date: "2026-01-10",
    readMinutes: 6,
    excerpt:
      "Large-scale events fail quietly long before opening day. A structured planning path keeps creative ambition grounded in reality.",
    paragraphs: [
      "Every successful event begins with a brief that goes beyond date and budget. We map objectives, audience profiles, brand tone, regulatory constraints, and success metrics before concept work starts.",
      "Discovery is followed by concept development — spatial plans, run-of-show thinking, and visual direction that stakeholders can react to early. Changes at this stage are inexpensive; changes on site are not.",
      "Production integrates fabrication, content, AV, staffing, and logistics under one timeline. Single-point coordination prevents the gaps that often appear when vendors work in silos.",
      "Rehearsals and technical checks are non-negotiable for complex programs. We treat them as part of the guest experience, not as overhead.",
      "Post-event, we capture learnings and content assets while details are fresh — photography, video, attendance data, and feedback that inform the next activation.",
    ],
  },
  {
    id: "4",
    slug: "brand-activations-lasting-impact",
    title: "Brand Activations That Leave a Lasting Impression — Not Just a Logo",
    category: "Branding",
    date: "2025-12-05",
    readMinutes: 4,
    excerpt:
      "The best activations connect emotion to identity. Here is how we help brands show up with purpose on the ground.",
    paragraphs: [
      "A brand activation is a live proof point. It shows whether your identity can survive outside a slide deck and still feel authentic in three dimensions.",
      "We begin with the emotional job of the event: trust, celebration, education, or conversion. Creative choices — colour, motion, hospitality, pacing — follow that job, not the other way around.",
      "Partnerships with sports, culture, and corporate platforms demand sensitivity to context. An activation for a financial brand at a stadium requires a different rhythm than a luxury product launch in a hotel ballroom.",
      "Measurement does not end at footfall. We look at engagement depth, content sharing, lead quality, and brand sentiment to understand whether the activation moved the needle.",
    ],
  },
  {
    id: "5",
    slug: "av-technical-production-guide",
    title: "AV & Technical Production: What Clients Should Know Before Event Day",
    category: "Technical",
    date: "2025-11-18",
    readMinutes: 5,
    excerpt:
      "Sound, screens, and lighting set the emotional temperature of an event. A practical guide to getting them right.",
    paragraphs: [
      "Technical production is often treated as a line item until something goes wrong. In reality, AV shapes how audiences perceive quality from the first minute.",
      "Screen sizing, throw distance, and ambient light determine readability. Audio clarity depends on room geometry, delay timing, and microphone discipline — not speaker wattage alone.",
      "Redundancy matters for high-stakes moments: backup playback, spare wireless channels, and on-site engineering with authority to fix issues immediately.",
      "Integration with scenic design early prevents costly rework. Cables, rigging points, and control positions should be part of the visual plan, not an afterthought.",
      "When clients understand these basics, conversations become faster, decisions clearer, and event day calmer for everyone on the team.",
    ],
  },
  {
    id: "6",
    slug: "storytelling-events-build-trust",
    title: "How Event Storytelling Builds Long-Term Trust With Your Audience",
    category: "Strategy",
    date: "2025-10-22",
    readMinutes: 5,
    excerpt:
      "Events that tell a coherent story turn one-day attendance into ongoing loyalty. Lessons from the field.",
    paragraphs: [
      "Trust is built in sequences, not slogans. An event can introduce a narrative, reinforce it through physical space, and close with a gesture guests remember.",
      "Storytelling in events is structural: opening tension, a clear journey through zones or program segments, and a resolution that ties back to brand promise.",
      "We have seen corporate clients strengthen client relationships not by scaling up spectacle, but by aligning every detail — hospitality, media, gifts, staff briefing — to a single storyline.",
      "The measure of success is whether guests leave able to retell your message in their own words. That is when an event stops being logistics and starts being communication.",
    ],
  },
] ;

const blogPostsAr = [
  {
    id: "1",
    slug: "experiential-marketing-saudi-arabia",
    title: "لماذا تغيّر التسويق التجريبي مشهد الفعاليات في السعودية",
    category: "فعاليات",
    date: "2026-02-12",
    readMinutes: 5,
    excerpt:
      "الجمهور السعودي يتوقع أكثر من منصة وشاشة. إليك كيف تحوّل العلامات التفاعلات إلى تجارب لا تُنسى.",
    paragraphs: [
      "مشهد الفعاليات في المملكة يتطور بسرعة. الزوار لا يحضرون للمعلومات فقط — بل للأجواء والتفاعل والشعور بأنهم جزء من تجربة أكبر.",
      "التسويق التجريبي يربط استراتيجية العلامة بالتنفيذ الحي. يحوّل الجناح أو الإطلاق أو اللقاء المؤسسي إلى قصة يمكن للضيوف خوضها ومشاركتها.",
      "في أفيندا، نرى ثلاثة أنماط تقود النجاح: وضوح السرد قبل البناء، نقاط تفاعل تكافئ المشاركة، وتشغيل سلس لا يشعر الضيوف بما خلف الكواليس.",
      "سواء كنت تخطط لمعرض وطني أو إطلاق منتج أو فعالية تقدير للعملاء، السؤال لم يعد هل نستثمر في التجربة — بل كيف نصممها بقصد.",
    ],
  },
  {
    id: "2",
    slug: "exhibition-booth-design-essentials",
    title: "ستة أساسيات لتصميم جناح معرض يجذب الزوار فعلًا",
    category: "معارض",
    date: "2026-01-28",
    readMinutes: 4,
    excerpt:
      "تصميم الجناح القوي فن سردي ومعماري. هذه الأساسيات تجعل حضورك في المعرض أكثر فاعلية.",
    paragraphs: [
      "لدى جناح المعرض ثوانٍ لجذب الانتباه. التخطيط وخطوط الرؤية والإضاءة تحدد ما إذا كان الزائر يتوقف أو يمر.",
      "ابدأ بتدفق الحركة: نقاط الدخول ومناطق الاجتماعات وتركيز المنتج قبل اختيار التشطيبات. الجناح الذي يوجّه الحركة طبيعيًا يشعر بالترحيب.",
      "اتساق العلامة مهم على كل المستويات — من الرسومات الكبرى إلى كاونتر الهدايا. نوحّد الألوان والخط والرسالة ليقرأ الجناح كهوية واحدة.",
      "الموثوقية التقنية غير مرئية عندما تعمل ولا تُنسى عندما تفشل. الكهرباء والصوت والتخزين وتنقل الفريق يجب حسمها في التصميم.",
      "أخيرًا، خطط للتصوير. في اقتصاد الفعاليات اليوم، الجناح الذي يُصوَّر جيدًا يمتد تأثيره خارج القاعة.",
    ],
  },
  {
    id: "3",
    slug: "event-planning-brief-to-launch",
    title: "من الموجز إلى الإطلاق: كيف نخطط للفعاليات الكبرى بلا مفاجآت",
    category: "منهجية",
    date: "2026-01-10",
    readMinutes: 6,
    excerpt:
      "الفعاليات الكبيرة تفشل بهدوء قبل يوم الافتتاح. مسار تخطيط منظم يحافظ على الطموح الإبداعي.",
    paragraphs: [
      "كل فعالية ناجحة تبدأ بموجز يتجاوز التاريخ والميزانية. نرسم الأهداف والجمهور ونبرة العلامة والقيود ومؤشرات النجاح قبل أي تصميم.",
      "يلي الاستكشاف تطوير المفهوم — مخططات المكان وتسلسل البرنامج والاتجاه البصري للتفاعل المبكر. التعديلات هنا رخيصة؛ على أرض المعرض ليست كذلك.",
      "الإنتاج يدمج التصنيع والمحتوى والصوت والإضاءة واللوجستيات في جدول واحد. التنسيق من نقطة واحدة يمنع الفجوات بين الموردين.",
      "البروفات والفحص التقني ضروريان للبرامج المعقدة. نتعامل معها كجزء من تجربة الضيف.",
      "بعد الفعالية، نوثّق الدروس والأصول — تصوير وفيديو وبيانات حضور — بينما التفاصيل حاضرة.",
    ],
  },
  {
    id: "4",
    slug: "brand-activations-lasting-impact",
    title: "تفعيلات العلامة التي تترك أثرًا — لا مجرد شعار",
    category: "علامة تجارية",
    date: "2025-12-05",
    readMinutes: 4,
    excerpt:
      "أفضل التفعيلات تربط الشعور بالهوية. كيف نساعد العلامات على الحضور بمعنى على أرض الواقع.",
    paragraphs: [
      "تفعيل العلامة دليل حي. يبيّن إن كانت هويتك صادقة خارج العرض التقديمي وفي ثلاثة أبعاد.",
      "نبدأ بالمهمة العاطفية للفعالية: ثقة، احتفاء، تعليم، أو تحويل. الخيارات الإبداعية تتبع هذه المهمة.",
      "شراكات رياضية وثقافية ومؤسسية تتطلب حساسية للسياق. تفعيل بنك في ملعب يختلف عن إطلاق فاخر في فندق.",
      "القياس لا يتوقف عند عدد الزوار. ننظر لعمق التفاعل والمشاركة وجودة العملاء المحتملين.",
    ],
  },
  {
    id: "5",
    slug: "av-technical-production-guide",
    title: "الإنتاج الفني والصوت والصورة: ما يجب أن تعرفه قبل يوم الفعالية",
    category: "تقني",
    date: "2025-11-18",
    readMinutes: 5,
    excerpt:
      "الصوت والشاشات والإضاءة تحدد «درجة حرارة» الفعالية. دليل عملي للحصول على نتيجة مثالية.",
    paragraphs: [
      "غالبًا يُعامل الإنتاج الفني كبند مالي حتى يحدث خطأ. في الواقع، الصوت والصورة يشكلان انطباع الجودة من الدقيقة الأولى.",
      "حجم الشاشة والمسافة والإضاءة المحيطة تحدد الوضوح. وضوح الصوت يعتمد على شكل القاعة وتوقيت التأخير وإدارة الميكروفونات.",
      "الاحتياط ضروري للحظات الحاسمة: نسخة احتياطية للعرض، قنوات لاسلكية إضافية، وفريق هندسة بصلاحية إصلاح فورية.",
      "الدمج مع التصميم المسرحي مبكرًا يمنع إعادة العمل. الكوابل ونقاط التعليق يجب أن تكون جزءًا من المخطط.",
      "عندما يفهم العملاء هذه الأساسيات، تصبح القرارات أوضح ويوم الفعالية أكثر هدوءًا.",
    ],
  },
  {
    id: "6",
    slug: "storytelling-events-build-trust",
    title: "كيف يرسخ سرد الفعاليات ثقة طويلة الأمد مع جمهورك",
    category: "استراتيجية",
    date: "2025-10-22",
    readMinutes: 5,
    excerpt:
      "الفعاليات التي تحكي قصة متماسكة تحول حضور يوم واحد إلى ولاء مستمر. دروس من الميدان.",
    paragraphs: [
      "الثقة تُبنى بسلسلة لحظات لا بشعار. الفعالية تقدم السرد وتعززه عبر الفضاء وتختم بلمسة يتذكرها الضيوف.",
      "السرد في الفعاليات هيكلي: افتتاح يخلق توترًا، رحلة عبر مناطق أو فقرات، وختام يربط بوعد العلامة.",
      "رأينا عملاء مؤسسيين يقوّون العلاقات ليس بتضخيم المظهر بل بمواءمة الضيافة والإعلام والهدايا وتوجيه الفريق حول قصة واحدة.",
      "معيار النجاح: هل يغادر الضيوف قادرًا على إعادة رسالتك بكلماته؟ حينها تتحول الفعالية من لوجستيات إلى تواصل.",
    ],
  },
] ;

export const legacySite: LegacySiteArchive = {
  meta: {
    source: "https://aevenda.com/",
    scrapedAt: "2026-07-03",
    note: "Archive of the legacy WordPress site — wired to App Router pages.",
  },
  company: {
    name: "Aevenda",
    legalName: "Aevenda MBE",
    tagline: "From Concept to Creation",
    founded: 2015,
    email: "inquiry@aevenda.com",
    phone: "+966543937900",
    phoneDisplay: "+966 54 393 7900",
    offices: [
      { city: "Riyadh", country: "Saudi Arabia" },
      { city: "Dubai", country: "UAE" },
      { city: "Cairo", country: "Egypt" },
    ],
    social: {
      facebook: "https://www.facebook.com/people/Aevenda/61581525729154/",
      linkedin: "https://www.linkedin.com/company/aevenda-mbe/posts/?feedView=all",
      x: "https://x.com/aevendaofficial",
    },
    stats: [
      { value: 120, label: "Employees" },
      { value: 305, label: "Clients" },
      { value: 1500, label: "Events" },
      { value: 10000, label: "Visitors" },
    ],
  },
  en: {
    nav: [
      { label: "Home", href: "/", legacyPath: "/" },
      { label: "Our Service", href: "/services", legacyPath: "/our-service/" },
      { label: "About Us", href: "/about", legacyPath: "/about-us/" },
      { label: "Case Study", href: "/case-studies", legacyPath: "/case-study/" },
      { label: "Blog", href: "/blog", legacyPath: "/blog/" },
      { label: "Contact Us", href: "/contact", legacyPath: "/contact-us/" },
    ],
    home: {
      hero: {
        title: "From Concept to Creation",
        subtitle:
          "We handle everything — events, branding, media, AV, registration, and exhibition booths.",
        cta: "Explore the portfolio",
      },
      trust: {
        title: "Building Trust Through Vision and Impact",
        subtitle:
          "With our partners, we transform bold ideas into exceptional, tangible results that inspire and last.",
      },
      services: {
        title: "Our Service",
        intro:
          "Aevenda MBE is more than just an event company — we are your strategic partner in building brands, engaging audiences, and creating truly unforgettable experiences. Let us bring your vision to life.",
        viewAll: "View All",
      },
      caseStudies: {
        title: "Our Case Study",
        subtitle: "See how we bring ideas to life through events, branding, and media",
        viewAll: "View All",
      },
      testimonials: { title: "What Our Clients Say About Us" },
      newsletter: "Newsletter",
    },
    about: {
      title: "Who We Are",
      intro:
        "Aevenda MBE, established in 2015, is a dynamic and comprehensive media, branding, and events company dedicated to transforming visions into impactful realities. From initial ideation to the final flourish, Aevenda MBE is your trusted partner for creating seamless, memorable, and strategically aligned experiences.",
      mission: {
        title: "Our Mission",
        body: "Our mission at Aevenda MBE is to empower our clients through exceptional media, branding, and event solutions. We are committed to delivering innovative, high-quality, and meticulously managed services that not only meet but exceed expectations, fostering lasting impressions and achieving tangible results.",
      },
      vision: {
        title: "Our Vision",
        body: "To be the leading force in integrated media, branding, and event management, recognized for our creativity, professionalism, and unwavering dedication to client success. We aspire to continually redefine industry standards by embracing innovation and delivering unparalleled value.",
      },
      values: {
        title: "Our Values",
        items: [
          {
            title: "Excellence",
            body: "We are committed to delivering the highest standards of quality in every project, ensuring meticulous attention to detail and flawless execution.",
          },
          {
            title: "Innovation",
            body: "We are committed to delivering innovative solutions that meet our clients' needs and stay ahead of industry trends.",
          },
          {
            title: "Integrity",
            body: "We uphold transparency and honesty in all our dealings to ensure mutual trust with our clients.",
          },
          {
            title: "Collaboration",
            body: "We work as an integrated team to achieve the best results for our clients.",
          },
          {
            title: "Client-Centricity",
            body: "We place our clients at the center of everything we do to ensure their expectations are fully met.",
          },
          {
            title: "Passion",
            body: "We approach every project with passion and dedication, ensuring outstanding results and an exceptional client experience.",
          },
        ],
      },
      cta: {
        title: "Let's talk about how we can bring your vision to life.",
        button: "Contact us",
      },
    },
    aboutPage: {
      scrollHint: "Our story, values, and presence",
      portrait: {
        headline: "Your partner in media, brand, and live experiences",
      },
      valuesHeadline: "What guides us every day",
      presence: {
        eyebrow: "Where we are",
        title: "Three hubs across the region",
      },
      closing: {
        body: "Ready to work together? We'd love to hear about your next project.",
      },
    },
    contact: {
      title: "Get in touch with Aevenda MBE",
      subtitle: "Tell us what you're planning and we'll help you bring it to life.",
      formTopics: ["Projects", "Careers", "Suppliers"],
      reachUs: {
        eyebrow: "Reach us",
        intro: "Choose the channel that suits you — or send a message using the form.",
      },
    },
    servicesOverview: {
      title: "Our Service",
      intro:
        "Aevenda MBE is more than just an event company — we are your strategic partner in building brands, engaging audiences, and creating truly unforgettable experiences.",
      categories: [
        "Event Management",
        "Branding & Design",
        "Media & Content Production",
        "Technical Production & AV",
        "Registration, Crowd Management",
        "Exhibition Booths",
      ],
    },
    servicesPage: {
      intro: {
        eyebrow: "Capabilities",
        scrollHint: "Scroll through our services",
      },
      process: {
        eyebrow: "How we work",
        title: "From brief to standing ovation",
        intro:
          "Every project follows a clear path — strategy first, flawless execution after.",
        steps: [
          {
            title: "Discovery",
            body: "We learn your goals, audience, and constraints before a single detail is designed.",
          },
          {
            title: "Concept",
            body: "Creative direction shaped around your brand, message, and measurable objectives.",
          },
          {
            title: "Production",
            body: "Design, content, technical build, and logistics — managed under one roof.",
          },
          {
            title: "Delivery",
            body: "On-site execution, guest experience, and post-event follow-through.",
          },
        ],
      },
      proof: {
        eyebrow: "By the numbers",
        title: "Built for scale, delivered with precision",
      },
      spotlight: {
        eyebrow: "Featured project",
        cta: "View full case study",
      },
      quote: {
        eyebrow: "In their words",
      },
      closing: {
        title: "Have a project in mind?",
        body: "Tell us what you're planning — we'll shape the right team and scope.",
        button: "Start a conversation",
      },
    },
    caseStudiesPage: {
      intro: {
        eyebrow: "Portfolio",
        scrollHint: "Explore our selected work",
      },
      featured: {
        eyebrow: "Featured case study",
      },
      closing: {
        title: "Want results like these?",
        body: "Every project starts with a conversation. Tell us what you're building.",
        button: "Get in touch",
      },
    },
    blogPage: {
      intro: {
        eyebrow: "Insights",
        subtitle: "Stories, trends, and behind-the-scenes from the Aevenda team.",
        scrollHint: "Latest articles",
      },
      featured: {
        eyebrow: "Featured article",
      },
    },
    blogPosts: [...blogPostsEn],
    services: [
      {
        slug: "event-management",
        legacyPath: "/event-managment/",
        title: "Event Management Service",
        intro:
          "We plan and manage every part of your event from the first idea to the final moment, smoothly and professionally.",
        sections: [
          {
            title: "What Makes Great Event Management?",
            body: "An impactful event is a brand experience that moves people and delivers results.",
          },
          {
            title: "Strategic Event Concepts That Drive Real Impact",
            body: "Events that move people don't start with logistics. They start with strategy.",
          },
        ],
      },
      {
        slug: "branding",
        legacyPath: "/branding/",
        title: "Branding & Design Service",
        intro:
          "We plan and manage every part of your brand identity and design professionally and smoothly.",
      },
      {
        slug: "content-production",
        legacyPath: "/content-production/",
        title: "Media Content Production Service",
        intro:
          "Engaging content that tells your story through video, photos, and motion — fast and on brand.",
      },
      {
        slug: "technical-production",
        legacyPath: "/technical-production/",
        title: "Technical Production & AV Service",
        intro:
          "Reliable sound, lights, and screens that bring your event to life — with no surprises.",
      },
      {
        slug: "crowd-management",
        legacyPath: "/crowd-management/",
        title: "Registration, Crowd Management",
        intro:
          "Fast entry, smooth flow, and a stress-free experience for every guest, from start to finish.",
      },
      {
        slug: "exhibition-booths",
        legacyPath: "/exhibition-booths/",
        title: "Exhibition Booths Service",
        intro:
          "We design and build custom exhibition booths that stand out, reflect your brand, and are built for impact.",
      },
    ],
    caseStudies: [...caseStudiesEn],
    testimonials: [
      { name: "Ahmed Saed", quote: testimonialQuotesEn[0] },
      { name: "Mohamed Ali", quote: testimonialQuotesEn[1] },
      { name: "Sarah Ahmed", quote: testimonialQuotesEn[2] },
    ],
    footer: {
      contactTitle: "Get in touch with Aevenda MBE",
      pagesTitle: "Pages",
      servicesTitle: "Our Service",
      blogTitle: "From The Blog",
      rights: "All rights reserved.",
    },
    cta: {
      title: "Let's talk about how we can bring your vision to life.",
      button: "Contact us",
    },
  },
  ar: {
    nav: [
      { label: "الرئيسية", href: "/", legacyPath: "/ar/" },
      { label: "خدماتنا", href: "/services", legacyPath: "/ar/our-service/" },
      { label: "من نحن", href: "/about", legacyPath: "/ar/about-us/" },
      { label: "دراسات الحالة", href: "/case-studies", legacyPath: "/ar/case-study/" },
      { label: "المدونة", href: "/blog", legacyPath: "/ar/blog/" },
      { label: "تواصل معنا", href: "/contact", legacyPath: "/ar/contact-us/" },
    ],
    home: {
      hero: {
        title: "من المفهوم إلى الخلق",
        subtitle:
          "نحن نتعامل مع كل شيء — الفعاليات، العلامات التجارية، الإعلام، AV، التسجيل، وأكشاك المعارض.",
        cta: "استعرض أعمالنا",
      },
      trust: {
        title: "نبني الثقة من خلال الرؤية والتأثير",
        subtitle:
          "بالتعاون مع شركائنا، نحوّل الأفكار الجريئة إلى نتائج استثنائية وملموسة تُلهم وتدوم.",
      },
      services: {
        title: "خدماتنا",
        intro:
          "تعتبر Aevenda MBE أكثر من مجرد شركة فعاليات — نحن شريكك الاستراتيجي في بناء العلامات التجارية، وجذب الجماهير، وخلق تجارب لا تُنسى حقًا.",
        viewAll: "عرض الكل",
      },
      caseStudies: {
        title: "قصص النجاح",
        subtitle: "اكتشف كيف نحول الأفكار إلى واقع من خلال الفعاليات والعلامة التجارية والإعلام",
        viewAll: "عرض الكل",
      },
      testimonials: { title: "شهادات العملاء" },
      newsletter: "النشرة البريدية",
    },
    about: {
      title: "من نحن",
      intro:
        "Aevenda MBE، تأسست في 2015، وهي شركة إعلامية وعلامات تجارية وتنظيم فعاليات، مكرسة لتحويل الرؤى إلى واقع مؤثر. من الفكرة الأولية إلى اللمسة النهائية، أفيندا MBE هي شريكك الموثوق.",
      mission: {
        title: "مهمتنا",
        body: "مهمتنا في أفيندا MBE هي تمكين عملائنا من خلال حلول إعلامية، تصميم العلامة التجارية، وتنظيم الفعاليات المتميزة التي تتجاوز التوقعات وتحقق نتائج ملموسة.",
      },
      vision: {
        title: "رؤيتنا",
        body: "نسعى لأن نكون القوة الرائدة في إدارة الإعلام، العلامة التجارية، وتنظيم الفعاليات، معترف بنا لإبداعنا واحترافيتنا والتزامنا المستمر بنجاح عملائنا.",
      },
      values: {
        title: "قيمنا",
        items: [
          { title: "التميز", body: "نلتزم بتقديم أعلى معايير الجودة في كل مشروع." },
          { title: "الابتكار", body: "نسعى لتقديم حلول مبتكرة تلبي احتياجات عملائنا." },
          { title: "النزاهة", body: "نلتزم بالشفافية والأمانة في جميع تعاملاتنا." },
          { title: "التعاون", body: "نعمل كفريق واحد متكامل لتحقيق أفضل النتائج." },
          { title: "تركيز على العميل", body: "نجعل عملائنا في قلب كل ما نقوم به." },
          { title: "الشغف", body: "نؤدي كل مشروع بشغف وإخلاص." },
        ],
      },
      cta: {
        title: "دعنا نتحدث عن كيفية تحويل رؤيتك إلى واقع",
        button: "تواصل معنا",
      },
    },
    aboutPage: {
      scrollHint: "قصتنا وقيمنا وحضورنا",
      portrait: {
        headline: "شريككم في الإعلام والعلامة والفعاليات",
      },
      valuesHeadline: "ما يوجّه عملنا كل يوم",
      presence: {
        eyebrow: "أين نحن",
        title: "ثلاثة مراكز في المنطقة",
      },
      closing: {
        body: "مستعدون للتعاون؟ يسعدنا سماع تفاصيل مشروعك القادم.",
      },
    },
    contact: {
      title: "تواصل مع Aevenda MBE",
      subtitle: "أخبرنا بما تخطط له وسنساعدك على تحويله إلى واقع.",
      formTopics: ["المشاريع", "الوظائف", "الموردين"],
      reachUs: {
        eyebrow: "طرق التواصل",
        intro: "اختر الطريقة الأنسب — أو أرسل رسالة مباشرة من النموذج.",
      },
    },
    servicesOverview: {
      title: "خدماتنا",
      intro:
        "Aevenda MBE أكثر من مجرد شركة فعاليات — نحن شريكك الاستراتيجي في بناء العلامات التجارية وخلق تجارب لا تُنسى.",
      categories: [
        "إدارة الفعاليات",
        "العلامة التجارية والتصميم",
        "الإعلام وإنتاج المحتوى",
        "الإنتاج الفني والوسائط السمعية والبصرية",
        "التسجيل وإدارة الحشود",
        "أجنحة المعارض",
      ],
    },
    servicesPage: {
      intro: {
        eyebrow: "قدراتنا",
        scrollHint: "مرّر لاستكشاف خدماتنا",
      },
      process: {
        eyebrow: "كيف نعمل",
        title: "من الفكرة إلى تجربة لا تُنسى",
        intro: "كل مشروع يمر بمسار واضح — الاستراتيجية أولًا، ثم تنفيذ متقن.",
        steps: [
          {
            title: "الاستكشاف",
            body: "نفهم أهدافك وجمهورك وقيود المشروع قبل أي خطوة تصميم.",
          },
          {
            title: "المفهوم",
            body: "توجيه إبداعي متناسق مع علامتك ورسالتك وأهدافك.",
          },
          {
            title: "الإنتاج",
            body: "تصميم ومحتوى وإنتاج فني ولوجستيات — تحت سقف واحد.",
          },
          {
            title: "التسليم",
            body: "تنفيذ ميداني وتجربة ضيوف ومتابعة ما بعد الفعالية.",
          },
        ],
      },
      proof: {
        eyebrow: "بالأرقام",
        title: "جاهزون للحجم، دقيقون في التنفيذ",
      },
      spotlight: {
        eyebrow: "مشروع مميز",
        cta: "عرض دراسة الحالة",
      },
      quote: {
        eyebrow: "بكلماتهم",
      },
      closing: {
        title: "لديك مشروع في بالك؟",
        body: "أخبرنا بما تخطط له — سنشكّل الفريق والنطاق المناسب.",
        button: "ابدأ محادثة",
      },
    },
    caseStudiesPage: {
      intro: {
        eyebrow: "أعمالنا",
        scrollHint: "استكشف مشاريعنا المختارة",
      },
      featured: {
        eyebrow: "دراسة حالة مميزة",
      },
      closing: {
        title: "تريد نتائج مماثلة؟",
        body: "كل مشروع يبدأ بمحادثة. أخبرنا بما تبنيه.",
        button: "تواصل معنا",
      },
    },
    blogPage: {
      intro: {
        eyebrow: "رؤى ومحتوى",
        subtitle: "قصص واتجاهات وكواليس من فريق أفيندا.",
        scrollHint: "أحدث المقالات",
      },
      featured: {
        eyebrow: "مقال مميز",
      },
    },
    blogPosts: [...blogPostsAr],
    services: [
      {
        slug: "event-management",
        legacyPath: "/ar/event-managment/",
        title: "إدارة الفعاليات",
        intro: "نخطط وندير كل جزء من فعاليتك من الفكرة الأولى إلى اللحظة الأخيرة.",
      },
      {
        slug: "branding",
        legacyPath: "/ar/branding/",
        title: "العلامة التجارية والتصميم",
        intro: "نبني هوية بصرية تعكس علامتك وتتواصل مع جمهورك.",
      },
      {
        slug: "content-production",
        legacyPath: "/ar/content-production/",
        title: "الإعلام وإنتاج المحتوى",
        intro: "محتوى جذاب يروي قصتك عبر الفيديو والصور والموشن.",
      },
      {
        slug: "technical-production",
        legacyPath: "/ar/technical-production/",
        title: "الإنتاج الفني والوسائط السمعية والبصرية",
        intro: "صوت وإضاءة وشاشات موثوقة تجعل فعاليتك حية.",
      },
      {
        slug: "crowd-management",
        legacyPath: "/ar/crowd-management/",
        title: "التسجيل وإدارة الحشود",
        intro: "دخول سريع وتدفق سلس وتجربة خالية من التوتر لكل ضيف.",
      },
      {
        slug: "exhibition-booths",
        legacyPath: "/ar/exhibition-booths/",
        title: "أجنحة المعارض",
        intro: "نصمم ونبني أجنحة مخصصة تبرز علامتك وتترك أثرًا.",
      },
    ],
    caseStudies: [...caseStudiesAr],
    testimonials: [
      { name: "أحمد سيد", quote: testimonialQuotesAr[0] },
      { name: "محمد علي", quote: testimonialQuotesAr[1] },
      { name: "سارة أحمد", quote: testimonialQuotesAr[2] },
    ],
    footer: {
      contactTitle: "تواصل مع Aevenda MBE",
      pagesTitle: "الصفحات",
      servicesTitle: "خدماتنا",
      blogTitle: "من المدونة",
      rights: "جميع الحقوق محفوظة.",
    },
    cta: {
      title: "دعنا نتحدث عن كيفية تحويل رؤيتك إلى واقع",
      button: "تواصل معنا",
    },
  },
};

export function getLegacyContent(locale: "en" | "ar") {
  return legacySite[locale];
}

export function getLegacyStats(locale: "en" | "ar") {
  if (locale === "ar") {
    return [
      { value: 120, label: "الموظفين" },
      { value: 305, label: "العملاء" },
      { value: 1500, label: "الفعاليات" },
      { value: 10000, label: "الزوار" },
    ];
  }
  return legacySite.company.stats;
}
