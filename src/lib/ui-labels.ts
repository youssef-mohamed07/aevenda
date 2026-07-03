import type { Locale } from "@/lib/i18n";

export function getUiLabels(locale: Locale) {
  return {
    readMore: locale === "ar" ? "اقرأ المزيد" : "Read more",
    viewCaseStudy: locale === "ar" ? "عرض دراسة الحالة" : "View case study",
    scope: locale === "ar" ? "نطاق العمل" : "Scope of work",
    aboutProject: locale === "ar" ? "عن المشروع" : "About the project",
    backToHome: locale === "ar" ? "العودة للرئيسية" : "Back to home",
    backToServices: locale === "ar" ? "العودة للخدمات" : "Back to services",
    backToCaseStudies: locale === "ar" ? "العودة لدراسات الحالة" : "Back to case studies",
    backToBlog: locale === "ar" ? "العودة للمدونة" : "Back to blog",
    minRead: (minutes: number) =>
      locale === "ar" ? `${minutes} دقائق قراءة` : `${minutes} min read`,
    emptyBlogTitle: locale === "ar" ? "لا توجد مقالات بعد" : "No posts yet",
    emptyBlogBody:
      locale === "ar"
        ? "نعمل على إضافة محتوى جديد قريبًا."
        : "We're preparing new content — check back soon.",
    founded: locale === "ar" ? "تأسست" : "Founded",
    offices: locale === "ar" ? "مكاتبنا" : "Our offices",
    emailUs: locale === "ar" ? "راسلنا" : "Email us",
    callUs: locale === "ar" ? "اتصل بنا" : "Call us",
    whatsapp: locale === "ar" ? "واتساب" : "WhatsApp",
    close: locale === "ar" ? "إغلاق" : "Close",
    formName: locale === "ar" ? "الاسم" : "Name",
    formEmail: locale === "ar" ? "البريد الإلكتروني" : "Email",
    formPhone: locale === "ar" ? "الهاتف" : "Phone",
    formTopic: locale === "ar" ? "الموضوع" : "Topic",
    formMessage: locale === "ar" ? "الرسالة" : "Message",
    formMessagePlaceholder:
      locale === "ar" ? "أخبرنا عن مشروعك أو استفسارك..." : "Tell us about your project or inquiry...",
    formSubmit: locale === "ar" ? "إرسال الرسالة" : "Send message",
    formSent: locale === "ar" ? "جاري فتح البريد..." : "Opening email...",
    formSubjectPrefix: locale === "ar" ? "استفسار من الموقع" : "Website inquiry",
    formTitle: locale === "ar" ? "أرسل لنا رسالة" : "Send us a message",
    formHeadline: locale === "ar" ? "ابدأ المحادثة" : "Start the conversation",
    formSubtitle:
      locale === "ar"
        ? "املأ النموذج وسنتواصل معك في أقرب وقت."
        : "Fill in the form and we'll get back to you shortly.",
    partnersEyebrow: locale === "ar" ? "شركاء النجاح" : "Trusted by",
    partnersHeadline: locale === "ar" ? "علامات رائدة وثقت بنا" : "Leading brands trust us",
    partnersSubtitle:
      locale === "ar"
        ? "نفتخر بشراكتنا مع مؤسسات سعودية وعالمية في فعاليات وإعلام وعلامات تجارية."
        : "We're proud to partner with Saudi and global organizations across events, media, and branding.",
    agentEyebrow: locale === "ar" ? "مساعد Aevenda" : "Aevenda Assistant",
    agentTitle: locale === "ar" ? "كيف نساعدك؟" : "How can we help?",
    agentIntro:
      locale === "ar"
        ? "اختر من الخيارات السريعة أو تواصل معنا مباشرة عبر واتساب."
        : "Pick a quick option or reach us directly on WhatsApp.",
    agentContact: locale === "ar" ? "صفحة التواصل" : "Contact page",
    agentServices: locale === "ar" ? "استكشف الخدمات" : "Explore services",
    agentCaseStudies: locale === "ar" ? "دراسات الحالة" : "Case studies",
    agentWhatsApp: locale === "ar" ? "محادثة واتساب" : "Chat on WhatsApp",
    agentWhatsAppMessage:
      locale === "ar" ? "مرحباً Aevenda! أود الاستفسار عن خدماتكم." : "Hi Aevenda! I'd like to inquire about your services.",
    agentToggle: locale === "ar" ? "فتح المساعد" : "Open assistant",
    socialFabToggle: locale === "ar" ? "فتح السوشيال" : "Open social links",
    socialFabTitle: locale === "ar" ? "تابعنا" : "Follow us",
    splashSkip: locale === "ar" ? "تخطي" : "Skip",
    testimonialClient: locale === "ar" ? "عميل Aevenda" : "Aevenda client",
  };
}
