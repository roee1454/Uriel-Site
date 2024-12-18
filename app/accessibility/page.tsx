import { unstable_noStore as noStore } from 'next/cache';
import React from 'react';
import { getPersonalTexts } from '@/lib/supabase/personal';

noStore();

const AccessibilityStatement = async () => {
  const personalTexts = await getPersonalTexts();
  return (
    <main className="container mx-auto px-4 py-8">
      <header>
        <h1 className="text-2xl font-bold mb-4" aria-label="Accessibility Statement - FruityBox">הצהרת נגישות - FruityBox</h1>
      </header>
      <section>
        <p>
          אנו ב-Pretty מאמינים שלכל אדם מגיעה הזכות ליהנות מחוויית קנייה שוויונית, נגישה ומזמינה. כחנות המתמחה במכירת פירות טריים ומארזי פירות מעוצבים, אנו מחויבים להנגשת השירותים והמידע שלנו לכלל הלקוחות, כולל אנשים עם מוגבלויות.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mt-6 mb-2" aria-label="What have we done to make the site accessible?">מה עשינו כדי להנגיש את האתר?</h2>
        <ul className="list-disc list-inside">
          <li>עמידה בתקן: האתר הונגש בהתאם להוראות תקן Web Content Accessibility Guidelines 2.0 ברמה AA.</li>
          <li>ניווט מקלדת: האתר ניתן לניווט מלא באמצעות המקלדת (לחיצה על מקש ה-Tab).</li>
          <li>תוסף נגישות: באתר מותקן תוסף נגישות מתקדם, המספק את האפשרויות הבאות:
            <ul className="list-disc list-inside ml-4">
              <li>שינוי גודל הטקסט והתאמתו.</li>
              <li>התאמת ניגודיות צבעים ובחירת צבעים לכבדי ראייה.</li>
              <li>אפשרות לצפייה בטקסט בלבד או בתמונות בלבד.</li>
              <li>הדגשת טקסטים וקישורים.</li>
              <li>שינוי הפונט לפונט קריא ונגיש יותר.</li>
              <li>שינוי סממן העכבר.</li>
              <li>אפשרות לבחירת צבעים בהירים או כהים.</li>
              <li>הדגשת אזור המיקוד של המשתמש.</li>
              <li>ניווט יעיל עם מקלדת בכל רחבי האתר והתוסף.</li>
            </ul>
          </li>
          <li>HTML סמנטי: אנו מקפידים על שימוש נכון בתגיות HTML, כולל:
            <ul className="list-disc list-inside ml-4">
              <li>תיאורי alt לכל התמונות באתר.</li>
              <li>שימוש ב-aria-label לתיאור נוסף עבור קוראי מסך.</li>
              <li>היררכיה נכונה של כותרות ותגיות התוכן.</li>
            </ul>
          </li>
          <li>תוכן דינמי נגיש: ווידאנו שהתוכן הדינמי באתר נגיש ומובן על ידי כלים כמו קוראי מסך.</li>
          <li>תאימות לדפדפנים: האתר מותאם לכל הדפדפנים המובילים, כגון Chrome, Firefox, Safari ו-Edge.</li>
          <li>רזולוציות שונות: האתר מותאם לצפייה במגוון מכשירים - מחשבים, טאבלטים ומכשירים ניידים.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mt-6 mb-2" aria-label="Accessibility arrangements in the store">הסדרי נגישות בחנות</h2>
        <ul className="list-disc list-inside">
          <li>חנייה לנכים: קיימות חניות נכים במתחם בהתאם להנחיות המקום.</li>
          <li>מעברים מרווחים: החנות מעוצבת כך שתאפשר מעבר קל ונוח עם כיסאות גלגלים או עזרי ניידות.</li>
          <li>עמדת תשלום נגישה: קופה בגובה מותאם לאנשים עם מוגבלויות.</li>
          <li>צוות אדיב ומקצועי: הצוות שלנו עבר הכשרה להעניק שירות נגיש ומכבד לכל הלקוחות.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mt-6 mb-2" aria-label="Additional accessibility guidelines">הנחיות נגישות נוספות</h2>
        <p>לצפייה בהנחיות המלאות:</p>
        <ul className="list-disc list-inside">
          <li><a href="#" className="text-blue-500 hover:underline" aria-label="Accessibility guidelines in Hebrew">הנחיות נגישות בעברית</a></li>
          <li><a href="#" className="text-blue-500 hover:underline" aria-label="Accessibility guidelines in English">Accessibility Guidelines in English</a></li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mt-6 mb-2" aria-label="Encountered a problem?">נתקלתם בבעיה?</h2>
        <p>
          אנו משקיעים מאמצים רבים להבטיח שכלל לקוחותינו יוכלו ליהנות מהשירותים שלנו, אך יתכן ועדיין קיימות תקלות או אזורים שאינם נגישים דיים. במידה ונתקלתם בבעיה, נשמח אם תיצרו קשר עימנו באמצעות:
        </p>
        <ul className="list-disc list-inside">
          <li><a href={personalTexts.find(t => t.place === "whatsapp-link")?.content} className="text-blue-500 hover:underline" aria-label="Link to our WhatsApp">קישור לוואטסאפ שלנו</a></li>
          <li aria-label="Phone number">{personalTexts.find(t => t.place === "phone-number")?.content}</li>
          <li aria-label="Email"><a href={`mailto:${personalTexts.find(t => t.place === "email-address")?.content}`} className="text-blue-500 hover:underline">{personalTexts.find(t => t.place === "email-address")?.content}</a></li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold mt-6 mb-2" aria-label="How to report a malfunction?">כיצד לדווח על תקלה?</h2>
        <p>בכדי לטפל בבעיה ביעילות, אנא פרטו:</p>
        <ul className="list-disc list-inside">
          <li>תיאור התקלה.</li>
          <li>הפעולה שניסיתם לבצע.</li>
          <li>סוג הדפדפן וגרסתו.</li>
          <li>מערכת ההפעלה של המכשיר.</li>
          <li>טכנולוגיה מסייעת בשימוש (במידה ויש).</li>
        </ul>
        <p>
          חשוב לציין: פתיחת תקלה דרך תוסף הנגישות תגיע למפתחי התוסף ולא לצוות Pretty.
        </p>
        <p>
          אנו מתחייבים לחזור אליכם בהקדם האפשרי ולטפל בבעיה בצורה הטובה ביותר, מתוך הבנה כי חוויית קנייה שווה ונגישה היא זכות בסיסית לכולם.
        </p>
        <p className="mt-6" aria-label="Pretty team">צוות Pretty</p>
      </section>
    </main>
  );
};

export default AccessibilityStatement;
