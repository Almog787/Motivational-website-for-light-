/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { cn } from './utils';

export default function App() {
  const [timeIL, setTimeIL] = useState('--:--');
  const [timeUS, setTimeUS] = useState('--:--');
  const [customers, setCustomers] = useState(100);
  const [price, setPrice] = useState(49);
  const [btnText, setBtnText] = useState('אחי, אני בפנים! 🚀');

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimeIL(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Jerusalem',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
      setTimeUS(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/New_York',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleConfetti = () => {
    setBtnText('יאללה, מתחילים לעבוד! 💼');
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const mrr = customers * price;
  const arr = mrr * 12;

  const ideas = [
    {
      id: 1,
      style: 'card-glass',
      tag: '[עיצוב: Glassmorphism]',
      title: '🤖 סוכנות אוטומציה ו-AI',
      desc: 'בניית צ\'אטבוטים ותהליכי אוטומציה (Make/Zapier) לעסקים אמריקאים. אתה מוכר בשעות היום בארה"ב, אני מפתח בשעות היום בארץ. מודל של ריטיינר חודשי.',
    },
    {
      id: 2,
      style: 'card-neumorph rounded-[20px]',
      tag: '[עיצוב: Neumorphism]',
      title: '💻 מוצר Micro-SaaS',
      desc: 'נבנה אפליקציית ווב פשוטה שפותרת בעיה ספציפית לנישה (למשל: כלי תזמון, ניהול משימות ליוצרי תוכן) ונמכור מנויים לאנשים בכל העולם.',
    },
    {
      id: 3,
      style: 'card-brutal',
      tag: '[עיצוב: Brutalism]',
      title: '🛒 סטודיו איקומרס / Shopify',
      desc: 'הקמה ועיצוב של חנויות וירטואליות. אני מרים את האתרים ואת הצד הטכני, אתה מנהל את הלקוחות באנגלית שפת אם וסוגר עסקאות בארה"ב.',
    },
    {
      id: 4,
      style: 'card-cyberpunk',
      tag: '[עיצוב: Cyberpunk]',
      title: '🌐 קהילת פרימיום (Discord)',
      desc: 'יצירת קהילה בתשלום סביב תחום חם (קריפטו, AI, התפתחות אישית). נספק תוכן אקסקלוסיבי, נטוורקינג וכלים. מודל של דמי מנוי חודשיים.',
    },
    {
      id: 5,
      style: 'card-synthwave rounded-[15px]',
      tag: '[עיצוב: Retro Synthwave]',
      title: '📈 Drop-Servicing Empire',
      desc: 'אנחנו מקימים סוכנות שירותים דיגיטליים (SEO, עריכת וידאו, עיצוב לוגואים). מוכרים במחיר פרימיום בארה"ב, ועושים מיקור חוץ (Outsource) לפרילנסרים במזרח אירופה או בארץ.',
    },
    {
      id: 6,
      style: 'card-bauhaus',
      tag: '[עיצוב: Minimalist Bauhaus]',
      title: '📰 ניוזלטר נישה B2B',
      desc: 'בניית רשימת תפוצה למקצוענים (למשל: חדשות AI לרופאים, או טרנדים בנדל"ן). אתה עורך ומפיץ בארה"ב, אני דואג למערכות הטכניות. המוניטיזציה: מכירת חסויות לחברות ענק.',
    },
    {
      id: 7,
      style: 'card-skeuomorph rounded-[15px]',
      tag: '[עיצוב: Skeuomorphism]',
      title: '👕 מותג Print-On-Demand',
      desc: 'עיצוב בגדים, ספלים ומוצרים פיזיים לנישות ספציפיות (מתכנתים, חובבי חיות). אני מעצב ומרים את האתר, ההדפסה והמשלוח קורים אוטומטית בתוך ארה"ב דרך ספקים מקומיים.',
    },
    {
      id: 8,
      style: 'card-clay rounded-[40px]',
      tag: '[עיצוב: Claymorphism]',
      title: '🔍 אינדקס / Job Board נישתי',
      desc: 'לוח דרושים או אינדקס מומחים לתעשייה ספציפית. למשל: "מפתחי AI בלבד". חברות משלמות כדי לפרסם מודעות, ואנחנו גוזרים קופון על חיבורים עסקיים.',
    },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-accent/30">
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-10 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_0%,#0f172a_100%)] -z-10" />
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gradient mb-5 text-[clamp(3rem,8vw,5rem)] font-black leading-tight"
        >
          היי אור,<br />הגיע הזמן לעשות משהו שלנו.
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto max-w-[700px] space-y-4 text-lg text-slate-400"
        >
          <p>
            אתה בארצות הברית 🇺🇸, אני בישראל 🇮🇱.<br />
            יש לנו פער שעות שיוצר יתרון אדיר - העסק שלנו יכול לעבוד, לתמוך, לשווק ולמכור 24 שעות ביממה. מתי שאני הולך לישון, אתה קם ולהיפך.
          </p>
          <p>
            מעבר לזה, תסתכל על האתר הזה. בניתי אותו מאפס כדי להראות לך שאין סגנון עיצוב, מודל עסקי או קוד שאנחנו לא יכולים לפצח ביחד.
          </p>
          <p className="font-medium text-slate-300">
            אני מביא את הטכנולוגיה, האוטומציה והפיתוח הרזה (אפס עלויות שרת, מקסימום ביצועים). אתה מביא את המכירות, האנגלית והשוק האמריקאי.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-10 rounded-full border border-white/10 bg-white/5 px-10 py-5 backdrop-blur-md"
        >
          <div className="text-center">
            <div className="text-sm uppercase tracking-widest text-slate-300">תל אביב (IL)</div>
            <div className="font-variant-numeric text-3xl font-extrabold text-white">{timeIL}</div>
          </div>
          <div className="text-center">
            <div className="text-sm uppercase tracking-widest text-slate-300">ארצות הברית (EST)</div>
            <div className="font-variant-numeric text-3xl font-extrabold text-white">{timeUS}</div>
          </div>
        </motion.div>
      </section>

      {/* IDEAS */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-[1300px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
              8 רעיונות (ו-8 סגנונות עיצוב) שאפשר להתחיל מחר:
            </h2>
            <p className="text-xl text-slate-400">
              כל כרטיסיה מציגה קונספט עיצובי שונה מעולם ה-UI/UX שנוכל ליישם בפרויקט שלנו.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ideas.map((idea, index) => (
              <motion.div
                key={idea.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={cn(
                  'flex min-h-[280px] flex-col justify-start p-8 transition-transform duration-300',
                  idea.style
                )}
              >
                <div className="mb-4 text-xs font-extrabold uppercase tracking-wider opacity-70">
                  {idea.tag}
                </div>
                <h3 className="mb-3 text-2xl font-bold leading-tight">{idea.title}</h3>
                <p className="text-base leading-relaxed opacity-90">{idea.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="px-5 py-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[800px] rounded-[30px] border border-white/5 bg-card-bg p-10 text-center shadow-[0_20px_40px_rgba(0,0,0,0.4)] md:p-14"
        >
          <h2 className="mb-4 text-4xl font-extrabold text-white">המתמטיקה פשוטה.</h2>
          <p className="mb-10 text-lg text-slate-400">
            בוא נראה כמה קל להגיע ליעדים כשאנחנו עובדים במודל של הכנסה חוזרת (MRR).
          </p>

          <div className="mb-10 flex flex-wrap gap-6">
            <div className="flex-1 min-w-[200px]">
              <label className="mb-3 block text-slate-400">כמה לקוחות משלמים נביא?</label>
              <input
                type="number"
                value={customers}
                onChange={(e) => setCustomers(Number(e.target.value))}
                className="w-full rounded-xl border-2 border-slate-700 bg-bg-dark p-4 text-center text-2xl font-bold text-white outline-none transition-colors focus:border-accent"
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="mb-3 block text-slate-400">מחיר חודשי ללקוח ($)</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full rounded-xl border-2 border-slate-700 bg-bg-dark p-4 text-center text-2xl font-bold text-white outline-none transition-colors focus:border-accent"
              />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-bg-dark/50 p-6">
              <p className="text-lg text-slate-400">הכנסה חודשית (MRR):</p>
              <div className="mt-2 text-5xl font-black text-emerald-400">
                ${mrr.toLocaleString()}
              </div>
            </div>
            <div className="rounded-2xl bg-bg-dark/50 p-6">
              <p className="text-lg text-slate-400">הכנסה שנתית (ARR):</p>
              <div className="mt-2 text-5xl font-black text-sky-400">
                ${arr.toLocaleString()}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative z-50 px-5 pb-32 pt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-10 text-4xl font-extrabold text-white md:text-5xl">מוכן לצאת לדרך?</h2>
          <button
            onClick={handleConfetti}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-12 py-6 text-2xl font-black text-white shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(14,165,233,0.6)]"
          >
            <span className="relative z-10">{btnText}</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-sky-500 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </motion.div>
      </section>
    </div>
  );
}
